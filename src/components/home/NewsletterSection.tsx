'use client'

import { useState } from 'react'

export default function NewsletterSection({
  fromBlog,
}: {
  readonly fromBlog?: boolean
}) {
  const [email, setEmail] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Newsletter subscription:', email)
  }

  return (
    <section className='section-padding border-t border-gray-200 dark:border-gray-800'>
      <div className='max-w-2xl mx-auto text-center'>
        {fromBlog ? (
          <h2 className='section-title'>Want More Like This?</h2>
        ) : (
          <h2 className='section-title'>Subscribe to my Newsletter</h2>
        )}

        <p className='text-lg text-gray-600 dark:text-gray-300 mb-8 leading-relaxed max-w-xl mx-auto'>
          I share what I learn along the way - tips, tutorials, and real stories
          from my journey as a developer. No fluff, just useful stuff.
        </p>

        <form
          onSubmit={handleSubmit}
          className='flex flex-col sm:flex-row gap-4'
        >
          <input
            type='email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder='Enter your email'
            className='flex-1 px-4 py-3 rounded-lg border border-gray-300
            dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900
            dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent
            placeholder-gray-500 dark:placeholder-gray-400
            text-base leading-relaxed transition-all duration-200'
            required
          />
          <button
            type='submit'
            className='px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white
            font-medium rounded-lg transition-colors duration-200
            text-base leading-relaxed flex-shrink-0'
          >
            Subscribe
          </button>
        </form>

        <p className='text-sm text-gray-500 dark:text-gray-400 mt-4'>
          By subscribing, you agree to receive occasional updates. No spam,
          ever.
        </p>
      </div>
    </section>
  )
}
