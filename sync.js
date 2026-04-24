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
import { join } from "path";
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

// ── Helpers ───────────────────────────────────────────────────────────────────

/** Strip hyphens from a Notion UUID */
const cleanId = (id) => id.replace(/-/g, "");

/** Sanitise a Notion page title for use as a filename / folder name */
const slugify = (title) =>
  (title ?? "Untitled")
    .trim()
    .replace(/[/\\?%*:|"<>]/g, "-")   // replace illegal path chars
    .replace(/\s+/g, " ");

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
    return `images/${localName}`;   // relative path used in markdown
  } catch (err) {
    console.warn(`  ⚠️  Could not download image: ${url} — ${err.message}`);
    return url;   // fall back to remote URL
  }
}

/**
 * Replace Notion image URLs in markdown with locally-downloaded copies.
 * Notion image URLs look like:  ![…](https://prod-files-secure.s3…)
 */
async function localiseImages(markdown, destDir, pageSlug) {
  const imgRegex = /!\[([^\]]*)\]\((https?:\/\/[^)]+)\)/g;
  const replacements = [];
  let match;
  let imgIndex = 0;

  while ((match = imgRegex.exec(markdown)) !== null) {
    replacements.push({ full: match[0], alt: match[1], url: match[2], idx: imgIndex++ });
  }

  let result = markdown;
  for (const { full, alt, url, idx } of replacements) {
    const filename = `${pageSlug}-img-${idx}`;
    const localPath = await downloadImage(url, destDir, filename);
    result = result.replace(full, `![${alt}](${localPath})`);
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
 * Recursively sync a Notion page and all its sub-pages.
 *
 * @param {string} pageId        Notion page ID
 * @param {string} currentDir    Local directory to write into
 * @param {number} depth         Current recursion depth (for logging)
 */
async function syncPage(pageId, currentDir, depth = 0) {
  const indent = "  ".repeat(depth);
  const title  = await getPageTitle(pageId);
  const slug   = slugify(title);

  console.log(`${indent}📄 ${title}`);

  mkdirSync(currentDir, { recursive: true });

  // 1. Fetch markdown content
  let markdown;
  try {
    markdown = await fetchPageMarkdown(pageId);
  } catch (err) {
    console.warn(`${indent}  ⚠️  Could not fetch markdown: ${err.message}`);
    markdown = `# ${title}\n\n> ⚠️ Content could not be fetched.\n`;
  }

  // 2. Download images and rewrite links to local paths
  markdown = await localiseImages(markdown, currentDir, slug);

  // 3. Write the .md file
  const mdPath = join(currentDir, `${slug}.md`);
  writeFileSync(mdPath, markdown, "utf8");

  // 4. Get child pages and recurse into a sub-folder named after this page
  const childIds = await getChildPageIds(pageId);
  if (childIds.length > 0) {
    const subDir = join(currentDir, slug);
    for (const childId of childIds) {
      await syncPage(childId, subDir, depth + 1);
    }
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

  await syncPage(ROOT_PAGE_ID, OUTPUT_DIR);

  console.log("\n✅  Sync complete!");
}

main().catch((err) => {
  console.error("💥 Fatal error:", err);
  process.exit(1);
});
