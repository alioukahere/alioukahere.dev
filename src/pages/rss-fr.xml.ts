import rss from '@astrojs/rss'
import type { APIContext } from 'astro'
import { getAllPosts } from '@/lib/posts'
import { SITE_NAME, SITE_URL } from '@/constants'

export async function GET(context: APIContext) {
  const posts = await getAllPosts('fr', false)

  return rss({
    title: `${SITE_NAME} - Blog`,
    description:
      'Tutoriels pratiques et conseils sur le développement PHP, Python et JavaScript.',
    site: context.site ?? SITE_URL,
    items: posts.map((post) => ({
      title: post.title,
      pubDate: new Date(post.publishedAt),
      description: post.excerpt,
      link: `/fr/blog/${post.slug}`,
      categories: [post.category],
      ...(post.image && {
        enclosure: {
          url: post.image.startsWith('http')
            ? post.image
            : `${SITE_URL}${post.image}`,
          length: 0,
          type: 'image/jpeg',
        },
      }),
    })),
    customData: '<language>fr</language>',
  })
}
