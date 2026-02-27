import { defineConfig } from 'astro/config'
import mdx from '@astrojs/mdx'
import sitemap from '@astrojs/sitemap'
import tailwind from '@astrojs/tailwind'
import remarkGfm from 'remark-gfm'
import rehypeExternalLinks from 'rehype-external-links'

export default defineConfig({
  site: 'https://alioukahere.dev',
  output: 'static',
  integrations: [
    mdx(),
    sitemap({
      filter: (page) =>
        !page.endsWith('/blog/') &&
        page !== 'https://alioukahere.dev/' &&
        !page.match(/^https:\/\/alioukahere\.dev\/blog\/.+/),
      i18n: {
        defaultLocale: 'en',
        locales: {
          en: 'en',
          fr: 'fr',
        },
      },
    }),
    tailwind(),
  ],
  markdown: {
    remarkPlugins: [remarkGfm],
    rehypePlugins: [
      [
        rehypeExternalLinks,
        { target: '_blank', rel: ['noopener', 'noreferrer'] },
      ],
    ],
    shikiConfig: {
      theme: 'one-dark-pro',
      wrap: false,
    },
  },
})
