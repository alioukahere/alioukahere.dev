import { SITE_NAME, SITE_URL } from '@/constants'
import { BlogPost } from '@/types'

interface ArticleSchemaProps {
  post: BlogPost
}

export default function ArticleSchema({ post }: Readonly<ArticleSchemaProps>) {
  const articleUrl = `${SITE_URL}/blog/${post.slug}`
  const imageUrl = post.image
    ? post.image.startsWith('http')
      ? post.image
      : `${SITE_URL}${post.image}`
    : `${SITE_URL}/images/alioukahere.png`

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title,
    description: post.excerpt,
    image: imageUrl,
    datePublished: post.publishedAt,
    dateModified: post.updatedAt || post.publishedAt,
    author: {
      '@type': 'Person',
      name: SITE_NAME,
      url: SITE_URL,
    },
    publisher: {
      '@type': 'Person',
      name: SITE_NAME,
      url: SITE_URL,
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': articleUrl,
    },
    url: articleUrl,
    articleSection: post.category,
  }

  return (
    <script
      type='application/ld+json'
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(schema),
      }}
    />
  )
}
