# LJ Studio Website — Version 11

Production-ready static website for GitHub and Vercel.

## Deploy with GitHub + Vercel

1. Create a new empty GitHub repository, for example `lj-studio-website`.
2. Upload the complete contents of this folder to the repository root.
3. Sign in to Vercel and choose **Add New → Project**.
4. Import the GitHub repository.
5. Keep **Framework Preset: Other** and leave the build command empty.
6. Click **Deploy**.
7. In Vercel, open **Settings → Domains** and add `ljstudio.de`.

Vercel will automatically publish every future GitHub update.

## Local preview

Double-clicking `index.html` may restrict some browser features. A local server is better:

```bash
npm run dev
```

Then open the address printed in the terminal.

## Before launch

Replace these placeholders in `index.html`:

- `https://www.linkedin.com/in/REPLACE-ME/`
- `https://www.fiverr.com/REPLACE-ME`

Confirm these values:

- Canonical domain: `https://ljstudio.de/`
- Contact email: `lj@ljstudio.de`
- Contact form endpoint/configuration in `assets/js/script.js`

## Included

- Fully responsive mobile carousel with exact rendered offsets
- English/German language switch
- USD/EUR pricing
- SEO and Open Graph metadata
- Schema.org structured data
- Favicon, Apple Touch Icon and PWA icons
- `robots.txt` and `sitemap.xml`
- `manifest.webmanifest`
- Lightweight offline service worker
- Branded 404 page
- Security and caching headers for Vercel
- Reduced-motion and keyboard-accessibility support

## Structure

```text
/
├── index.html
├── 404.html
├── assets/
│   ├── css/styles.css
│   ├── js/script.js
│   ├── icons/
│   └── images/og-cover.png
├── manifest.webmanifest
├── service-worker.js
├── robots.txt
├── sitemap.xml
├── vercel.json
├── package.json
└── README.md
```
