import { SITE_NAME, SITE_URL } from '@/constants'
import { getPostBySlug, getTranslatedPost } from '@/lib/mdx'
import { formatDate } from '@/lib/utils'
import { getTranslations, isValidLocale, defaultLocale } from '@/lib/i18n'
import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import ArticleSchema from '@/components/ArticleSchema'
import BreadcrumbSchema from '@/components/BreadcrumbSchema'
import TranslationBanner from '@/components/blog/TranslationBanner'
import { evaluate } from '@mdx-js/mdx'
import * as runtime from 'react/jsx-runtime'
import remarkGfm from 'remark-gfm'
import type { Locale } from '@/types'
import { mdxComponents } from '@/components/mdx/MDXComponents'

interface BlogPostProps {
  params: Promise<{ slug: string; locale: string }>
}

export default async function BlogPost({ params }: BlogPostProps) {
  const { slug, locale } = await params
  const validLocale: Locale = isValidLocale(locale) ? locale : defaultLocale
  const t = await getTranslations(validLocale)
  const post = await getPostBySlug(slug, validLocale)

  if (!post) {
    notFound()
  }

  const translation = await getTranslatedPost(slug, validLocale)

  const { default: MDXContent } = await evaluate(post.content as string, {
    ...runtime,
    remarkPlugins: [remarkGfm],
  } as Parameters<typeof evaluate>[1])

  const breadcrumbItems = [
    {
      name: validLocale === 'fr' ? 'Accueil' : 'Home',
      url: `/${validLocale}`,
    },
    { name: 'Blog', url: `/${validLocale}/blog` },
    { name: post.title },
  ]

  return (
    <div className='min-h-screen bg-white dark:bg-[#0B1120]'>
      <ArticleSchema post={post} />
      <BreadcrumbSchema items={breadcrumbItems} />
      <main className='max-w-3xl mx-auto px-4 py-16'>
        {translation.exists && translation.slug && (
          <TranslationBanner
            currentLocale={validLocale}
            alternateSlug={translation.slug}
            translations={t.translationBanner}
          />
        )}

        <header className='mb-12'>
          <div className='mb-6'>
            <span
              className='px-3 py-1 text-sm bg-blue-100/80 dark:bg-blue-900/30
             text-blue-700 dark:text-blue-300 rounded-full'
            >
              {post.category}
            </span>
          </div>

          <h1 className='text-4xl font-bold text-gray-900 dark:text-white mb-4'>
            {post.title}
          </h1>

          <div className='flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400'>
            <time dateTime={post.publishedAt}>
              {formatDate(post.publishedAt, validLocale)}
            </time>
          </div>
        </header>

        <article className='prose prose-lg dark:prose-invert max-w-none'>
          <MDXContent components={mdxComponents} />
        </article>
      </main>
    </div>
  )
}

export async function generateMetadata({
  params,
}: BlogPostProps): Promise<Metadata> {
  const { slug, locale } = await params
  const validLocale: Locale = isValidLocale(locale) ? locale : defaultLocale
  const post = await getPostBySlug(slug, validLocale)

  if (!post) {
    return {
      title: '404 - Page Not Found',
      description: 'Page not found',
    }
  }

  const canonicalUrl = `${SITE_URL}/${validLocale}/blog/${post.slug}`
  const imageUrl = post.image
    ? post.image.startsWith('http')
      ? post.image
      : `${SITE_URL}${post.image}`
    : `${SITE_URL}/images/alioukahere.png`

  return {
    title: `${post.title} | ${SITE_NAME}`,
    description: post.excerpt,
    alternates: {
      canonical: canonicalUrl,
      languages: {
        en: `${SITE_URL}/en/blog/${post.slug}`,
        fr: `${SITE_URL}/fr/blog/${post.slug}`,
      },
    },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: 'article',
      publishedTime: post.publishedAt,
      modifiedTime: post.updatedAt || post.publishedAt,
      authors: [SITE_NAME],
      url: canonicalUrl,
      siteName: SITE_NAME,
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.excerpt,
      creator: '@alioukahere',
      images: [imageUrl],
    },
  }
}
