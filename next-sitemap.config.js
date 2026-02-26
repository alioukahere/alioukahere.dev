const fs = require('fs')
const path = require('path')

const SITE_URL = 'https://alioukahere.dev'
const locales = ['en', 'fr']

function getBlogSlugs(locale) {
  const dir = path.join(__dirname, 'content', 'blog', locale)
  if (!fs.existsSync(dir)) return []
  return fs
    .readdirSync(dir)
    .filter((f) => /\.mdx?$/.test(f))
    .map((f) => f.replace(/\.mdx$/, ''))
}

function getPostLastModified(slug, locale) {
  const filePath = path.join(
    __dirname,
    'content',
    'blog',
    locale,
    `${slug}.mdx`
  )
  try {
    const content = fs.readFileSync(filePath, 'utf8')
    const match =
      content.match(/^updatedAt:\s*(.+)$/m) ||
      content.match(/^publishedAt:\s*(.+)$/m)
    if (match) {
      const date = new Date(match[1].trim().replace(/['"]/g, ''))
      if (!isNaN(date.getTime())) return date.toISOString()
    }
  } catch {}
  return new Date().toISOString()
}

/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: SITE_URL,
  generateRobotsTxt: true,
  exclude: ['/', '/blog', '/blog/*'],
  robotsTxtOptions: {
    policies: [
      { userAgent: '*', allow: '/' },
      { userAgent: 'GPTBot', disallow: '/' },
    ],
  },
  additionalPaths: async () => {
    const paths = []

    for (const locale of locales) {
      paths.push({
        loc: `/${locale}`,
        lastmod: new Date().toISOString(),
        changefreq: 'monthly',
        priority: 1,
      })

      paths.push({
        loc: `/${locale}/blog`,
        lastmod: new Date().toISOString(),
        changefreq: 'weekly',
        priority: 0.8,
      })

      const slugs = getBlogSlugs(locale)
      for (const slug of slugs) {
        paths.push({
          loc: `/${locale}/blog/${slug}`,
          lastmod: getPostLastModified(slug, locale),
          changefreq: 'monthly',
          priority: 0.7,
        })
      }
    }

    return paths
  },
}
