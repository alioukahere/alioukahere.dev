import BlogPostCard from '@/components/blog/BlogPostCard'
import { SITE_NAME, SITE_URL } from '@/constants'
import { getAllPosts } from '@/lib/mdx'
import { getTranslations, isValidLocale, defaultLocale } from '@/lib/i18n'
import { Metadata } from 'next'
import type { Locale } from '@/types'

interface BlogPageProps {
  params: Promise<{ locale: string }>
}

export async function generateMetadata({
  params,
}: BlogPageProps): Promise<Metadata> {
  const { locale } = await params
  const validLocale: Locale = isValidLocale(locale) ? locale : defaultLocale
  const t = await getTranslations(validLocale)

  return {
    title: t.blog.metaTitle,
    description: t.blog.metaDescription,
    alternates: {
      canonical: `${SITE_URL}/${validLocale}/blog`,
      languages: {
        en: `${SITE_URL}/en/blog`,
        fr: `${SITE_URL}/fr/blog`,
      },
    },
    openGraph: {
      title: t.blog.metaTitle,
      description: t.blog.metaDescription,
      url: `${SITE_URL}/${validLocale}/blog`,
      siteName: SITE_NAME,
      type: 'website',
    },
    twitter: {
      card: 'summary',
      title: t.blog.metaTitle,
      description: t.blog.metaDescription,
    },
  }
}

export default async function BlogPage({ params }: BlogPageProps) {
  const { locale } = await params
  const validLocale: Locale = isValidLocale(locale) ? locale : defaultLocale
  const t = await getTranslations(validLocale)
  const posts = await getAllPosts(validLocale)

  return (
    <main className='max-w-6xl mx-auto px-4 py-16'>
      <div className='max-w-3xl mb-16'>
        <h1 className='text-4xl font-bold text-gray-900 dark:text-white mb-6'>
          {t.blog.title}
        </h1>
        <p className='text-xl text-gray-600 dark:text-gray-300 leading-relaxed'>
          {t.blog.description}
        </p>
      </div>

      <div className='grid md:grid-cols-2 gap-8'>
        {posts.map((post) => (
          <BlogPostCard
            post={post}
            locale={validLocale}
            common={t.common}
            languageNames={t.language}
            key={post.slug}
          />
        ))}
      </div>
    </main>
  )
}
