/**
 * notion-sync/sync.js
 *
 * Fetches a specific Notion page (and all its sub-pages recursively),
 * converts each to Markdown, downloads images locally, and writes
 * everything to disk mirroring the Notion page hierarchy.
 *
 * Required env vars:
 *   NOTION_API_KEY   – your Notion integration secret
 *   NOTION_PAGE_ID   – the ID of the root page / folder you want to sync
 *
 * Optional env vars:
 *   OUTPUT_DIR       – where to write files (default: ./docs)
 */

import { Client } from "@notionhq/client";
import { writeFileSync, mkdirSync, existsSync, rmSync } from "fs";
import { join, relative, dirname } from "path";
import fetch from "node-fetch";

// ── Config ────────────────────────────────────────────────────────────────────

const NOTION_API_KEY = process.env.NOTION_API_KEY;
const ROOT_PAGE_ID   = process.env.NOTION_PAGE_ID;
const OUTPUT_DIR     = process.env.OUTPUT_DIR ?? "./docs";

if (!NOTION_API_KEY || !ROOT_PAGE_ID) {
  console.error("❌  NOTION_API_KEY and NOTION_PAGE_ID must be set.");
  process.exit(1);
}

const notion = new Client({ auth: NOTION_API_KEY });

// Global map to store page information for the second pass (link resolution)
// Map<cleanId, { title, slug, mdPath, markdown, currentDir, depth }>
const pageRegistry = new Map();

// ── Helpers ───────────────────────────────────────────────────────────────────

/** Strip hyphens from a Notion UUID */
const cleanId = (id) => id.replace(/-/g, "");

/** Sanitise a Notion page title for use as a filename / folder name */
const slugify = (title) =>
  (title ?? "Untitled")
    .trim()
    .replace(/[/\\?%*:|"<>]/g, "-")   // replace illegal path chars
    .replace(/\s+/g, "-");            // replace spaces with dashes for safe paths

/** Encode a local image path for use in markdown links */
const encodeImagePath = (p) => {
  if (p.startsWith('http://') || p.startsWith('https://')) return p;
  return p.split("/").map(encodeURIComponent).join("/");
};

/**
 * Clean up markdown formatting issues from Notion's export:
 * - Convert <br> tags to proper newlines
 * - Convert HTML <table> tags to proper markdown tables
 * - Remove <empty-block/> tags
 * - Convert <span underline="true">...</span> to HTML <u>...</u>
 * - Strip remaining <span ...> tags
 * - Fix page links
 */
function cleanMarkdown(md, currentFilePath) {
  // Replace <br> and <br/> with newlines
  md = md.replace(/<br\s*\/?>/gi, "\n");

  // Convert simple HTML tables to markdown tables
  md = md.replace(/<table[\s\S]*?<\/table>/gi, (table) => {
    const rows = [];
    const rowMatches = table.match(/<tr[\s\S]*?<\/tr>/gi) || [];

    for (const row of rowMatches) {
      const cells = row.match(/<t[dh][\s\S]*?<\/t[dh]>/gi) || [];
      const cellTexts = cells.map((cell) =>
        cell
          .replace(/<[^>]+>/g, "")
          .trim()
      );
      rows.push("| " + cellTexts.join(" | ") + " |");
    }

    if (rows.length === 0) return table;

    const colCount = rows[0].split("|").slice(1, -1).length;
    const separator = "| " + Array(colCount).fill("---").join(" | ") + " |";
    rows.splice(1, 0, separator);
    return "\n" + rows.join("\n") + "\n";
  });

  // Remove <empty-block/>
  md = md.replace(/<empty-block\s*\/?>(<\/empty-block>)?/gi, "");

  // Convert <span underline="true">...</span> to <u>...</u>
  md = md.replace(/<span[^>]*underline="true"[^>]*>([\s\S]*?)<\/span>/gi, "<u>$1</u>");

  // Strip remaining <span ...> tags, keeping inner text
  md = md.replace(/<span[^>]*>([\s\S]*?)<\/span>/gi, "$1");

  // Resolve <page url="...">Title</page> links
  md = md.replace(/<page\s+url="[^"]*\/([a-fA-F0-9]{32})(?:\?[^"]*)?"[^>]*>([\s\S]*?)<\/page>/gi, (match, idStr, linkText) => {
    const targetId = idStr.toLowerCase();
    const targetPage = pageRegistry.get(targetId);

    if (targetPage) {
      // Calculate relative path from current file's directory to target file
      const currentDir = dirname(currentFilePath);
      let relPath = relative(currentDir, targetPage.mdPath);
      // Ensure it starts with ./ or ../ for markdown link compatibility
      if (!relPath.startsWith('.')) {
        relPath = './' + relPath;
      }
      return `[${linkText}](${relPath})`;
    }

    // If not found in our synced pages, fallback to just text
    return linkText;
  });

  return md;
}

/** Get the plain-text title of a page from its properties */
async function getPageTitle(pageId) {
  try {
    const page = await notion.pages.retrieve({ page_id: pageId });
    const titleProp = Object.values(page.properties ?? {}).find(
      (p) => p.type === "title"
    );
    return titleProp?.title?.map((t) => t.plain_text).join("") || "Untitled";
  } catch {
    return "Untitled";
  }
}

/** Download a remote image and save it locally, return the relative path */
async function downloadImage(url, destDir, filename) {
  const imgDir = join(destDir, "images");
  mkdirSync(imgDir, { recursive: true });

  // Derive extension from URL (default to .png)
  const ext = url.split("?")[0].match(/\.(png|jpe?g|gif|webp|svg)$/i)?.[1] ?? "png";
  const localName = `${filename}.${ext}`;
  const localPath = join(imgDir, localName);

  try {
    const res = await fetch(url);
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const arrayBuffer = await res.arrayBuffer();
    writeFileSync(localPath, Buffer.from(arrayBuffer));
    return join(destDir, `images/${localName}`);   // return absolute path
  } catch (err) {
    console.warn(`  ⚠️  Could not download image: ${url} — ${err.message}`);
    return url;   // fall back to remote URL
  }
}

/**
 * Replace Notion image URLs in markdown with locally-downloaded copies.
 * Notion image URLs look like:  ![…](https://prod-files-secure.s3…)
 */
async function localiseImages(markdown, destDir, pageSlug, currentFilePath) {
  const imgRegex = /!\[([^\]]*)\]\((https?:\/\/[^)]+)\)/g;
  const replacements = [];
  let match;
  let imgIndex = 0;
  const downloadedUrls = new Map(); // url -> absLocalPath

  while ((match = imgRegex.exec(markdown)) !== null) {
    replacements.push({ full: match[0], alt: match[1], url: match[2], idx: imgIndex++ });
  }

  let result = markdown;
  for (const { full, alt, url, idx } of replacements) {
    let absLocalPath;
    if (downloadedUrls.has(url)) {
      absLocalPath = downloadedUrls.get(url);
    } else {
      const filename = `${pageSlug}-img-${idx}`;
      absLocalPath = await downloadImage(url, destDir, filename);
      downloadedUrls.set(url, absLocalPath);
    }

    // Calculate relative path for markdown linking
    let relLocalPath = absLocalPath;
    if (!absLocalPath.startsWith('http')) {
        const currentDir = dirname(currentFilePath);
        relLocalPath = relative(currentDir, absLocalPath);
        if (!relLocalPath.startsWith('.')) {
            relLocalPath = './' + relLocalPath;
        }
    }

    result = result.replace(full, `![${alt}](${encodeImagePath(relLocalPath)})`);
  }
  return result;
}

/**
 * Fetch the markdown content for a single page.
 * Handles truncated responses by re-fetching unknown block IDs.
 */
async function fetchPageMarkdown(pageId) {
  // Use the new official markdown endpoint (Notion-Version 2026-03-11)
  const res = await fetch(
    `https://api.notion.com/v1/pages/${pageId}/markdown`,
    {
      headers: {
        Authorization: `Bearer ${NOTION_API_KEY}`,
        "Notion-Version": "2026-03-11",
      },
    }
  );

  if (!res.ok) {
    const body = await res.text();
    throw new Error(`Notion API error ${res.status}: ${body}`);
  }

  const data = await res.json();
  let md = data.markdown ?? "";

  // Handle truncation: fetch unknown block IDs and append their content
  if (data.truncated && data.unknown_block_ids?.length) {
    for (const blockId of data.unknown_block_ids) {
      try {
        const blockRes = await fetch(
          `https://api.notion.com/v1/pages/${blockId}/markdown`,
          {
            headers: {
              Authorization: `Bearer ${NOTION_API_KEY}`,
              "Notion-Version": "2026-03-11",
            },
          }
        );
        if (blockRes.ok) {
          const blockData = await blockRes.json();
          md += "\n\n" + (blockData.markdown ?? "");
        }
      } catch {
        // Skip blocks we can't access
      }
    }
  }

  return md;
}

/**
 * Get all child page IDs of a given block/page via the blocks API.
 * (The markdown API doesn't list child page IDs, so we use blocks for discovery.)
 */
async function getChildPageIds(pageId) {
  const childIds = [];
  let cursor;

  do {
    const res = await notion.blocks.children.list({
      block_id: pageId,
      start_cursor: cursor,
      page_size: 100,
    });

    for (const block of res.results) {
      if (block.type === "child_page") {
        childIds.push(block.id);
      }
    }
    cursor = res.has_more ? res.next_cursor : undefined;
  } while (cursor);

  return childIds;
}

// ── Core recursive sync ────────────────────────────────────────────────────────

/**
 * Pass 1: Recursively fetch a Notion page and all its sub-pages into memory.
 *
 * @param {string} pageId        Notion page ID
 * @param {string} currentDir    Local directory to write into
 * @param {number} depth         Current recursion depth (for logging)
 */
async function fetchPageTree(pageId, currentDir, depth = 0) {
  const indent = "  ".repeat(depth);
  const title  = await getPageTitle(pageId);
  const slug   = slugify(title);
  const cId    = cleanId(pageId).toLowerCase();

  console.log(`${indent}📄 Fetching: ${title}`);

  // 1. Fetch markdown content
  let markdown;
  try {
    markdown = await fetchPageMarkdown(pageId);
  } catch (err) {
    console.warn(`${indent}  ⚠️  Could not fetch markdown: ${err.message}`);
    markdown = `# ${title}\n\n> ⚠️ Content could not be fetched.\n`;
  }

  const mdPath = join(currentDir, `${slug}.md`);

  // Register the page for later link resolution
  pageRegistry.set(cId, {
    id: pageId,
    cleanId: cId,
    title,
    slug,
    mdPath,
    markdown,
    currentDir,
    depth
  });

  // 2. Get child pages and recurse
  const childIds = await getChildPageIds(pageId);
  if (childIds.length > 0) {
    const subDir = join(currentDir, slug);
    for (const childId of childIds) {
      await fetchPageTree(childId, subDir, depth + 1);
    }
  }
}

/**
 * Pass 2: Process markdown, download images, and write files to disk.
 */
async function processAndWritePages() {
  console.log("\n🔄 Processing markdown and downloading images...");

  for (const [cId, page] of pageRegistry.entries()) {
    const indent = "  ".repeat(page.depth);
    console.log(`${indent}💾 Saving: ${page.title}`);

    mkdirSync(page.currentDir, { recursive: true });

    let md = page.markdown;

    // 1. Clean up formatting issues, resolve page links
    md = cleanMarkdown(md, page.mdPath);

    // 2. Download images and rewrite links to local paths
    md = await localiseImages(md, page.currentDir, page.slug, page.mdPath);

    // 3. Write the .md file
    writeFileSync(page.mdPath, md, "utf8");
  }
}

// ── Entry point ────────────────────────────────────────────────────────────────

async function main() {
  console.log("🚀 Starting Notion sync...");
  console.log(`   Root page : ${ROOT_PAGE_ID}`);
  console.log(`   Output dir: ${OUTPUT_DIR}\n`);

  // Wipe and recreate output dir for a clean sync
  if (existsSync(OUTPUT_DIR)) {
    rmSync(OUTPUT_DIR, { recursive: true, force: true });
  }
  mkdirSync(OUTPUT_DIR, { recursive: true });

  // Pass 1: Fetch all pages
  await fetchPageTree(ROOT_PAGE_ID, OUTPUT_DIR);

  // Pass 2: Process and write all pages
  await processAndWritePages();

  console.log("\n✅  Sync complete!");
}

main().catch((err) => {
  console.error("💥 Fatal error:", err);
  process.exit(1);
});
