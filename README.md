# notion-sync

Automatically syncs a specific Notion page (and all its sub-pages) to this repo as Markdown files. Runs daily via GitHub Actions.

## What it produces

For a Notion structure like:
```
📄 My Notes          ← your root page (NOTION_PAGE_ID)
├── 📄 Project Alpha
├── 📁 Work
│   ├── 📄 Meeting Notes
│   └── 📄 Ideas
└── 📄 Personal
```

You'll get:
```
docs/
├── My Notes.md
├── My Notes/
│   ├── Project Alpha.md
│   ├── Work/
│   │   ├── Meeting Notes.md
│   │   │   images/
│   │   │   └── Meeting-Notes-img-0.png   ← images downloaded locally
│   │   └── Ideas.md
│   └── Personal.md
```

## Setup

### 1. Create a Notion Integration

1. Go to [notion.so/my-integrations](https://www.notion.so/my-integrations)
2. Click **+ New integration**
3. Give it a name (e.g. "GitHub Sync"), set the workspace, click **Submit**
4. Copy the **Internal Integration Secret** — this is your `NOTION_API_KEY`

### 2. Share your Notion page with the integration

1. Open the Notion page you want to sync (the root of your folder)
2. Click the **···** menu (top right) → **Connections** → find and add your integration
3. This gives the integration access to that page and all sub-pages

### 3. Get your Page ID

Open your Notion page in the browser. The URL looks like:
```
https://www.notion.so/My-Page-Title-abc123def456...
```
The Page ID is the last part after the final `-`: `abc123def456...`  
(32 hex characters, with or without hyphens — both work)

### 4. Add secrets to your GitHub repo

Go to your repo → **Settings** → **Secrets and variables** → **Actions** → **New repository secret**

| Secret name      | Value                          |
|------------------|--------------------------------|
| `NOTION_API_KEY` | Your integration secret        |
| `NOTION_PAGE_ID` | The root page ID to sync from  |

### 5. Enable Actions write permission

Go to **Settings** → **Actions** → **General** → scroll to **Workflow permissions** → select **Read and write permissions** → Save.

### 6. Trigger your first sync

Go to the **Actions** tab → select **Sync Notion to GitHub** → click **Run workflow**.

---

## Customisation

- **Change schedule**: Edit the `cron` in `.github/workflows/notion-sync.yml`  
- **Change output folder**: Edit `OUTPUT_DIR` in the workflow (default: `./docs`)  
- **Manual trigger**: Use the "Run workflow" button in the Actions tab anytime
