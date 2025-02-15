import { BlogPost } from '@/types'
import { ArrowRight } from 'lucide-react'
import BlogPostCard from '../blog/BlogPostCard'
import Link from 'next/link'

interface BlogSectionProps {
  readonly posts: BlogPost[]
}

export default function BlogSection({ posts }: BlogSectionProps) {
  return (
    <section className='section-padding border-t border-gray-200 dark:border-gray-800'>
      <div className='flex justify-between items-center mb-12'>
        <h2 className='section-title mb-0'>Latest Blog Posts</h2>
        <Link
          href='/blog'
          className='font-medium flex items-center gap-2 transition-colors duration-200 group'
        >
          View all posts
          <ArrowRight className='w-4 h-4 transform transition-transform group-hover:translate-x-0.5' />
        </Link>
      </div>

      <div className='grid md:grid-cols-2 gap-8'>
        {posts.map((post) => (
          <BlogPostCard post={post} key={post.slug} />
        ))}
      </div>
    </section>
  )
}
