# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev      # Start Astro development server
npm run build    # Production build (static output to dist/)
npm run preview  # Preview production build locally
```

## Architecture

This is a personal portfolio and blog site built with Astro (static output, zero JS by default).

### Key Directories

- `src/pages/` - Astro file-based routing (includes [locale] dynamic segments)
- `src/layouts/` - BaseLayout.astro (root HTML + SEO) and LocaleLayout.astro (Header/Footer wrapper)
- `src/components/` - Astro components organized by feature (home/, blog/, layout/)
- `src/lib/` - Utility functions (posts.ts for content collections, i18n.ts, utils.ts)
- `src/content/blog/{en,fr}/` - MDX blog posts (Content Collections)
- `src/content/config.ts` - Zod schema for blog frontmatter
- `src/styles/global.css` - Tailwind CSS with custom utilities

### Blog System

Blog posts are MDX files in `src/content/blog/{en,fr}/`. The frontmatter schema:

```yaml
title: string
publishedAt: string (YYYY-MM-DD)
updatedAt: string (optional)
excerpt: string
category: string
image: string (optional)
translationSlug: string (optional)
```

Posts are processed via Astro Content Collections (`src/lib/posts.ts`) with type-safe Zod validation. MDX is compiled at build time with Shiki syntax highlighting (one-dark-pro theme) and remark-gfm.

### i18n

Route-based: `/en/*` and `/fr/*`. Translations in `src/i18n/{en,fr}.json`. Language switcher uses plain `<a>` links (no JS). Fallback system shows posts from alternate locale with banner.

### Styling

- Tailwind CSS with class-based dark mode (`darkMode: 'class'`)
- Typography plugin for prose styling with custom inline code colors
- Fonts: Inter + JetBrains Mono Variable via @fontsource (self-hosted)
- Dark mode toggle uses vanilla JS (~200 bytes inline)

### SEO

- Full meta tags (title, description, canonical, hreflang, OG, Twitter) via BaseLayout props
- JSON-LD: PersonSchema (all pages), ArticleSchema + BreadcrumbSchema (blog posts)
- Sitemap via @astrojs/sitemap
- RSS feeds: /rss-en.xml and /rss-fr.xml
- robots.txt blocks GPTBot

### Types

Core interfaces in `src/types.ts`: BlogPost, Project, Technology, Service, Locale.

### Constants

Site metadata (URL, name, social links) in `src/constants.ts`.
