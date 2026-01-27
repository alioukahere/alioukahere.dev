import { SITE_URL } from '@/constants'
import { locales } from '@/lib/i18n'
import { getAllPosts } from '@/lib/mdx'
import { Locale } from '@/types'
import { MetadataRoute } from 'next'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const now = new Date()

  const staticRoutes: MetadataRoute.Sitemap = locales.flatMap((locale) => [
    {
      url: `${SITE_URL}/${locale}`,
      lastModified: now,
      changeFrequency: 'monthly' as const,
      priority: 1,
      alternates: {
        languages: Object.fromEntries(
          locales.map((l) => [l, `${SITE_URL}/${l}`])
        ),
      },
    },
    {
      url: `${SITE_URL}/${locale}/blog`,
      lastModified: now,
      changeFrequency: 'weekly' as const,
      priority: 0.8,
      alternates: {
        languages: Object.fromEntries(
          locales.map((l) => [l, `${SITE_URL}/${l}/blog`])
        ),
      },
    },
  ])

  const blogUrls: MetadataRoute.Sitemap = []

  for (const locale of locales) {
    const posts = await getAllPosts(locale as Locale, false)

    for (const post of posts) {
      blogUrls.push({
        url: `${SITE_URL}/${locale}/blog/${post.slug}`,
        lastModified: new Date(post.updatedAt || post.publishedAt),
        changeFrequency: 'monthly' as const,
        priority: 0.7,
      })
    }
  }

  return [...staticRoutes, ...blogUrls]
}
