# alioukahere.dev

Personal portfolio and blog built with [Astro](https://astro.build), featuring bilingual content (English/French), MDX blog posts, and zero client-side JavaScript.

## Tech Stack

- **Astro** — Static site generation
- **Tailwind CSS** — Styling with `@tailwindcss/typography` for prose
- **MDX** — Blog posts with Content Collections
- **Shiki** — Build-time syntax highlighting
- **Inter** + **Fira Code** — Self-hosted fonts via `@fontsource`

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:4321](http://localhost:4321) to see the site.

## Commands

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Production build to `dist/` |
| `npm run preview` | Preview production build locally |

## Project Structure

```
src/
├── content/blog/{en,fr}/   # MDX blog posts
├── components/              # Astro components
├── layouts/                 # BaseLayout, LocaleLayout
├── pages/                   # File-based routing
├── lib/                     # Utilities (posts, i18n, utils)
├── i18n/                    # Translation files (en.json, fr.json)
├── styles/                  # Global CSS
├── types.ts                 # TypeScript interfaces
└── constants.ts             # Site metadata
```

## Features

- Bilingual support (EN/FR) with fallback system
- RSS feeds for both languages
- SEO: Open Graph, Twitter Cards, JSON-LD schemas, sitemap, robots.txt
- Dark mode with localStorage persistence
- Table of contents on blog posts
- Code blocks with Fira Code font and line numbers

## Deployment

Static output, deploy to any static host. On Netlify, set the publish directory to `dist`.
