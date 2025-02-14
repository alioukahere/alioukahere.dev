import { ArrowRight } from 'lucide-react'

export default function BlogSection() {
  return (
    <section className='section-padding border-t border-gray-200 dark:border-gray-800'>
      <div className='flex justify-between items-center mb-12'>
        <h2 className='section-title mb-0'>Latest Blog Posts</h2>
        <a
          href='/blog'
          className='text-blue-600 hover:text-blue-700 dark:text-blue-400
          dark:hover:text-blue-300 font-medium flex items-center gap-2
          transition-colors duration-200 group'
        >
          View all posts
          <ArrowRight
            className='w-4 h-4 transform transition-transform
          group-hover:translate-x-0.5'
          />
        </a>
      </div>

      <div className='grid md:grid-cols-2 gap-8'>
        {['Git', 'Laravel'].map((category, index) => (
          <article
            key={index}
            className='p-8 rounded-lg bg-gray-50 dark:bg-gray-800/50
            transition-all duration-200 hover:shadow-lg hover:shadow-gray-100/10'
          >
            <div className='mb-6'>
              <span
                className='px-4 py-1.5 text-sm bg-blue-100/80 dark:bg-blue-900/30
                text-blue-700 dark:text-blue-300 rounded-full font-medium'
              >
                {category}
              </span>
            </div>

            <h3
              className='text-xl font-semibold text-gray-900 dark:text-white
              mb-4 leading-snug hover:text-blue-600 dark:hover:text-blue-400
              transition-colors duration-200'
            >
              <a href='#'>Creating Custom Components in Laravel Blade</a>
            </h3>

            <p
              className='text-gray-600 dark:text-gray-300 mb-6 leading-relaxed
              line-clamp-3'
            >
              A guide on how to create elegant and reusable Blade components
              that will help you write more maintainable code.
            </p>

            <div className='flex justify-between items-center'>
              <time className='text-sm text-gray-500 dark:text-gray-400 font-medium'>
                February 5, 2024
              </time>
              <a
                href='#'
                className='text-blue-600 hover:text-blue-700 dark:text-blue-400
                dark:hover:text-blue-300 font-medium inline-flex items-center
                transition-colors duration-200 group'
              >
                Read more {` `}
                <span
                  className='ml-1 transform transition-transform
                group-hover:translate-x-0.5'
                >
                  →
                </span>
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
