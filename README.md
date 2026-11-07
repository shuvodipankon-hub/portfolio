# Suvodip Chandra Ankon Portfolio

This project is a Next.js portfolio site for Suvodip Chandra Ankon, designed around a blueprint-and-passport aesthetic with data-driven content stored in the `content` folder.

## Local development

1. Install dependencies:
   ```bash
   npm install
   ```
2. Run the development server:
   ```bash
   npm run dev
   ```
3. Open http://localhost:3000

## Editing content

All editable text is stored in JSON files inside `content/`:

- `content/profile.json`
- `content/services.json`
- `content/process.json`
- `content/skills.json`
- `content/projects.json`
- `content/timeline.json`
- `content/site.json`

Add or remove entries there and the page units render from those arrays automatically.

## Image replacement

The original portrait is kept in `assets/original/portrait.png`. Replace it there with a new version, then copy it into `public/images/portrait.png` if you want the hero image to update.

## Deployment

1. Push the repository to GitHub.
2. In Vercel, select Add New > Project > Import repository.
3. Use the default Next.js settings and Node 20+.
4. Set `NEXT_PUBLIC_SITE_URL` to the final production URL.
5. Every push to `main` triggers a deploy automatically.

## Vercel config

A `vercel.json` file is included in the project root with the required headers and static asset caching defaults.
