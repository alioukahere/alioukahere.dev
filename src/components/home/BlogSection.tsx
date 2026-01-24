import { BlogPost, Locale } from '@/types'
import { ArrowRight } from 'lucide-react'
import BlogPostCard from '../blog/BlogPostCard'
import Link from 'next/link'

interface BlogSectionProps {
  readonly posts: BlogPost[]
  readonly translations: {
    sectionTitle: string
  }
  readonly common: {
    viewAllPosts: string
    readMore: string
  }
  readonly locale: Locale
}

export default function BlogSection({
  posts,
  translations,
  common,
  locale,
}: BlogSectionProps) {
  const blogUrl = `/${locale}/blog`

  return (
    <section className='section-padding border-t border-gray-200 dark:border-gray-800'>
      <div className='flex justify-between items-center mb-12'>
        <h2 className='section-title mb-0'>{translations.sectionTitle}</h2>
        <Link
          href={blogUrl}
          className='font-medium flex items-center gap-2 transition-colors duration-200 group'
        >
          {common.viewAllPosts}
          <ArrowRight className='w-4 h-4 transform transition-transform group-hover:translate-x-0.5' />
        </Link>
      </div>

      <div className='grid md:grid-cols-2 gap-8'>
        {posts.map((post) => (
          <BlogPostCard post={post} locale={locale} common={common} key={post.slug} />
        ))}
      </div>
    </section>
  )
}
