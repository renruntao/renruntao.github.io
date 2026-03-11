# Runtao Ren — Academic Homepage

A modern single-page academic homepage with a built-in admin panel for browser-based content management.

## File Structure

```
homepage/
  index.html   ← Main website (single page, 4 sections)
  admin.html   ← Visual admin panel for editing content
  data.js      ← All site content (the only file you edit)
  photo.jpg    ← Your profile photo
  README.md
```

## Local Preview

Double-click `index.html` to open in your browser.

## Editing Content

### Option A: Admin Panel (Recommended)

1. Open `admin.html` in your browser
2. Edit Profile, News, Publications, Grants through the visual forms
3. Click **"Preview"** to see changes in a new tab
4. Click **"Download data.js"** to export the updated file
5. Replace the old `data.js` on GitHub with the downloaded one

### Option B: Edit data.js directly

Open `data.js` in any text editor or GitHub's web editor and modify the content.

## Deploy to GitHub Pages

1. Go to [github.com/new](https://github.com/new) and create a repo (e.g. `yourname.github.io`)
2. Click **"uploading an existing file"** and drag all files from the `homepage/` folder
3. Go to **Settings → Pages → Source** → select `main` branch, root `/`
4. Your site will be live at `https://yourname.github.io` in a few minutes

### Updating after deployment

- Go to your repo on GitHub.com
- Click `data.js` → pencil icon → edit → commit
- Or use the admin panel locally, download `data.js`, and upload to replace

## Tech Stack

- **Tailwind CSS** (CDN) — utility-first styling
- **Lucide Icons** (CDN) — lightweight icon set
- **Inter** (Google Fonts) — clean typography
- Pure vanilla JavaScript, no build step required
