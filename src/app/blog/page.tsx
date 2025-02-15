import BlogPostCard from '@/components/blog/BlogPostCard'
import { getAllPosts } from '@/lib/mdx'

export default async function BlogPage() {
  const posts = await getAllPosts()

  return (
    <div className='min-h-screen bg-white dark:bg-gray-900'>
      <main className='max-w-6xl mx-auto px-4 py-16'>
        <div className='max-w-3xl mb-16'>
          <h1 className='text-4xl font-bold text-gray-900 dark:text-white mb-6'>
            Blog & Tutorials
          </h1>
          <p className='text-xl text-gray-600 dark:text-gray-300 leading-relaxed'>
            I write about web development, focusing on PHP and JavaScript
            ecosystems. Here {`you'll`} find tutorials, tips, and insights from
            my experience as a developer.
          </p>
        </div>

        <div className='grid md:grid-cols-2 gap-8'>
          {posts.map((post) => (
            <BlogPostCard post={post} key={post.slug} />
          ))}
        </div>
      </main>
    </div>
  )
}
