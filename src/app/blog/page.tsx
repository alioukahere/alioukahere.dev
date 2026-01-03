import BlogPostCard from '@/components/blog/BlogPostCard'
import { SITE_NAME, SITE_URL } from '@/constants'
import { getAllPosts } from '@/lib/mdx'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'PHP, Python & JavaScript Development | Mamadou Aliou Diallo',
  description:
    'Practical tutorials and insights about PHP, Python, and JavaScript development. Learn Laravel, Symfony, Django, FastAPI, Flask, and React through real-world examples.',
  keywords: [
    'PHP Tutorials',
    'JavaScript Tutorials',
    'Python Tutorials',
    'Laravel Development',
    'Symfony Development',
    'React Development',
    'Flask Development',
    'FastAPI Development',
    'Django Development',
    'Web Development Blog',
    'Full Stack Development',
    'Programming Tutorials',
    'Code Examples',
    'Development Best Practices',
  ],
  alternates: {
    canonical: '/blog',
  },
  openGraph: {
    title: 'PHP, Python & JavaScript Development | Mamadou Aliou Diallo',
    description:
      'Practical tutorials and insights about PHP, Python, and JavaScript development. Learn Laravel, Symfony, Django, FastAPI, Flask, and React.',
    url: `${SITE_URL}/blog`,
    siteName: SITE_NAME,
    type: 'website',
    images: [
      {
        url: '/images/alioukahere.png',
        width: 1200,
        height: 630,
        alt: 'Blog - Mamadou Aliou Diallo',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'PHP, Python & JavaScript Development | Mamadou Aliou Diallo',
    description:
      'Practical tutorials and insights about PHP, Python, and JavaScript development. Learn Laravel, Symfony, Django, FastAPI, Flask, and React.',
    creator: '@alioukahere',
    images: ['/images/alioukahere.png'],
  },
}

export default async function BlogPage() {
  const posts = await getAllPosts()

  return (
    <main className='max-w-6xl mx-auto px-4 py-16'>
      <div className='max-w-3xl mb-16'>
        <h1 className='text-4xl font-bold text-gray-900 dark:text-white mb-6'>
          Blog & Tutorials
        </h1>
        <p className='text-xl text-gray-600 dark:text-gray-300 leading-relaxed'>
          I share practical tips and tutorials about PHP, Python, and JavaScript
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
