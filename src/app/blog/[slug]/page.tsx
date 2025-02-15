import { getPostBySlug } from '@/lib/mdx'
import { formatDate } from '@/lib/utils'
import { compileMDX } from 'next-mdx-remote/rsc'
import { notFound } from 'next/navigation'
import React from 'react'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { oneDark } from 'react-syntax-highlighter/dist/esm/styles/prism'
import remarkGfm from 'remark-gfm'

interface CodeProps {
  className?: string
  children: React.ReactNode
  [key: string]: unknown // for any other props that might be passed
}

const components = {
  h1: ({ children, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h1
      className='text-4xl font-bold mt-12 mb-6 text-gray-900 dark:text-white'
      {...props}
    >
      {children}
    </h1>
  ),
  h2: ({ children, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h2
      className='text-3xl font-bold mt-10 mb-4 text-gray-900 dark:text-white'
      {...props}
    >
      {children}
    </h2>
  ),
  p: ({ children, ...props }: React.HTMLAttributes<HTMLParagraphElement>) => (
    <p
      className='mb-6 text-gray-600 dark:text-gray-300 leading-relaxed'
      {...props}
    >
      {children}
    </p>
  ),
  pre: ({ children }: { children: React.ReactNode }) => children,
  code: ({ className, children, ...props }: CodeProps) => {
    const match = /language-(\w+)/.exec(className ?? '')
    const language = match ? match[1] : ''
    const isInlineCode = !className

    if (isInlineCode) {
      return (
        <code
          className='rounded-sm bg-blue-100/80 dark:bg-blue-900/30
           text-blue-700 dark:text-blue-300 px-1.5 py-0.5 text-sm font-mono'
          {...props}
        >
          {children}
        </code>
      )
    }

    return (
      <div className='my-6 rounded-lg overflow-hidden'>
        <SyntaxHighlighter
          language={language}
          style={oneDark}
          customStyle={{
            margin: 0,
            padding: '1.5rem',
            fontSize: '0.875rem',
            lineHeight: '1.7142857',
            backgroundColor: '#1E1E2E',
            borderRadius: '0.5rem',
          }}
          codeTagProps={{
            className: 'font-mono',
          }}
          showLineNumbers={true}
          wrapLines={true}
          {...props}
        >
          {String(children).replace(/\n$/, '')}
        </SyntaxHighlighter>
      </div>
    )
  },
  ul: ({ children, ...props }: React.HTMLAttributes<HTMLUListElement>) => (
    <ul
      className='list-disc pl-6 mb-6 text-gray-600 dark:text-gray-300'
      {...props}
    >
      {children}
    </ul>
  ),
  li: ({ children, ...props }: React.HTMLAttributes<HTMLLIElement>) => (
    <li className='mb-2' {...props}>
      {children}
    </li>
  ),
}

export default async function BlogPost({
  params,
}: {
  readonly params: Promise<{ slug: string }> & { slug: string }
}) {
  const { slug } = await params
  const post = await getPostBySlug(slug)

  if (!post) {
    notFound()
  }

  const { content } = await compileMDX({
    source: post.content,
    components,
    options: {
      parseFrontmatter: true,
      mdxOptions: {
        remarkPlugins: [remarkGfm],
        format: 'mdx',
      },
    },
  })

  return (
    <div className='min-h-screen bg-white dark:bg-[#0B1120]'>
      <main className='max-w-3xl mx-auto px-4 py-16'>
        {/* Article Header */}
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
              Published on {formatDate(post.publishedAt)}
            </time>
          </div>
        </header>

        {/* Article Content */}
        <article className='prose prose-lg dark:prose-invert prose-pre:p-0 prose-pre:bg-transparent max-w-none'>
          {content}
        </article>
      </main>
    </div>
  )
}
