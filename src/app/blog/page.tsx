import BlogPostCard from '@/components/blog/BlogPostCard'
import { getAllPosts } from '@/lib/mdx'

export default async function BlogPage() {
  const posts = await getAllPosts()

  return (
    <main className='max-w-6xl mx-auto px-4 py-16'>
      <div className='max-w-3xl mb-16'>
        <h1 className='text-4xl font-bold text-gray-900 dark:text-white mb-6'>
          Blog & Tutorials
        </h1>
        <p className='text-xl text-gray-600 dark:text-gray-300 leading-relaxed'>
          I share practical tips and tutorials about PHP and JavaScript
          development. Here {`you'll`} find real solutions to common challenges,
          coding best practices, and lessons learned from building production
          applications. No fluff, just useful content to help you become a
          better developer.
        </p>
      </div>

      <div className='grid md:grid-cols-2 gap-8'>
        {posts.map((post) => (
          <BlogPostCard post={post} key={post.slug} />
        ))}
      </div>
    </main>
  )
}
