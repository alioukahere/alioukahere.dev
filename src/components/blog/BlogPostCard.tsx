import { formatDate } from '@/lib/utils'
import { BlogPost, Locale } from '@/types'
import Link from 'next/link'

interface BlogPostCardProps {
  readonly post: BlogPost
  readonly locale: Locale
  readonly common: {
    readMore: string
  }
}

export default function BlogPostCard({
  post,
  locale,
  common,
}: BlogPostCardProps) {
  const blogUrl = `/${locale}/blog/${post.slug}`

  return (
    <article className='p-8 rounded-lg bg-gray-50 dark:bg-gray-800/50 transition-all duration-200'>
      <div className='mb-6'>
        <span
          className='px-4 py-1.5 text-sm bg-blue-100/80 dark:bg-blue-900/30
         text-blue-700 dark:text-blue-300 rounded-full font-medium'
        >
          {post.category}
        </span>
      </div>

      <Link href={blogUrl}>
        <h3
          className='text-xl font-semibold text-gray-900 dark:text-white mb-4 leading-snug
         hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200'
        >
          {post.title}
        </h3>
      </Link>

      <p className='text-gray-600 dark:text-gray-300 mb-6 leading-relaxed line-clamp-3'>
        {post.excerpt}
      </p>

      <div className='flex justify-between items-center'>
        <div className='flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400'>
          <time dateTime={post.publishedAt}>
            {formatDate(post.publishedAt, locale)}
          </time>
          <span className='hidden sm:inline-block'>•</span>
          <span className='hidden sm:inline-block'>{post.readingTime}</span>
        </div>

        <Link
          href={blogUrl}
          className='font-medium inline-flex items-center transition-colors duration-200 group'
        >
          {common.readMore}{' '}
          <span className='ml-1 transform transition-transform group-hover:translate-x-0.5'>
            &rarr;
          </span>
        </Link>
      </div>
    </article>
  )
}
