# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev      # Start development server with Turbopack
npm run build    # Production build
npm run start    # Start production server
npm run lint     # Run ESLint
```

## Architecture

This is a personal portfolio and blog site built with Next.js 15 (App Router) and React 19.

### Key Directories

- `src/app/` - Next.js App Router pages and layouts
- `src/components/` - React components organized by feature (home/, blog/, layout/)
- `src/lib/` - Utility functions (mdx.ts for blog post processing, utils.ts for helpers)
- `content/blog/` - MDX blog posts with frontmatter

### Blog System

Blog posts are MDX files in `content/blog/`. The frontmatter schema:

```yaml
title: string
publishedAt: string (YYYY-MM-DD)
excerpt: string
category: string
```

Posts are processed by `src/lib/mdx.ts` which extracts frontmatter with gray-matter and calculates reading time. MDX is compiled at runtime using next-mdx-remote/rsc with custom components defined in `src/app/blog/[slug]/page.tsx`.

### Styling

- Tailwind CSS with class-based dark mode (`darkMode: 'class'`)
- Custom CSS variables for colors (--background, --foreground)
- Typography plugin for prose styling
- Fonts: Inter (sans) and JetBrains Mono (mono) via next/font

### Types

Core interfaces are in `src/types.ts`: BlogPost, Project, Technology, Service.

### Constants

Site metadata (URL, name, social links) is centralized in `src/constants.ts`.
