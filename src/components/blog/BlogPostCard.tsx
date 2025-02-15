import { formatDate } from '@/lib/utils'
import { BlogPost } from '@/types'
import Link from 'next/link'

interface BlogPostCardProps {
  readonly post: BlogPost
}

export default function BlogPostCard({ post }: BlogPostCardProps) {
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

      <Link href={`/blog/${post.slug}`}>
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
            {formatDate(post.publishedAt)}
          </time>
          <span>•</span>
          <span>{post.readingTime}</span>
        </div>

        <Link
          href={`/blog/${post.slug}`}
          className='font-medium inline-flex items-center transition-colors duration-200 group'
        >
          Read more {` `}
          <span className='ml-1 transform transition-transform group-hover:translate-x-0.5'>
            →
          </span>
        </Link>
      </div>
    </article>
  )
}
