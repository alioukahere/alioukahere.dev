'use client'

import { MDXRemote, MDXRemoteSerializeResult } from 'next-mdx-remote'

const components = {
  h1: ({ children }: { children?: React.ReactNode }) => (
    <h1 className='text-4xl font-bold mt-12 mb-6 text-gray-900 dark:text-white'>
      {children}
    </h1>
  ),
  h2: ({ children }: { children?: React.ReactNode }) => (
    <h2 className='text-3xl font-bold mt-10 mb-4 text-gray-900 dark:text-white'>
      {children}
    </h2>
  ),
  p: ({ children }: { children?: React.ReactNode }) => (
    <p className='mb-6 text-gray-600 dark:text-gray-300 leading-relaxed'>
      {children}
    </p>
  ),
  pre: ({ children }: { children?: React.ReactNode }) => (
    <pre className='my-6 rounded-lg overflow-hidden bg-[#1E1E2E] p-6'>
      {children}
    </pre>
  ),
  code: ({
    className,
    children,
  }: {
    className?: string
    children?: React.ReactNode
  }) => {
    const isInlineCode = !className

    if (isInlineCode) {
      return (
        <code
          className='rounded-sm bg-blue-100/80 dark:bg-blue-900/30
           text-blue-700 dark:text-blue-300 px-1.5 py-0.5 text-sm font-mono'
        >
          {children}
        </code>
      )
    }

    return (
      <code className='block font-mono text-sm text-gray-100'>{children}</code>
    )
  },
  ul: ({ children }: { children?: React.ReactNode }) => (
    <ul className='list-disc pl-6 mb-6 text-gray-600 dark:text-gray-300'>
      {children}
    </ul>
  ),
  li: ({ children }: { children?: React.ReactNode }) => (
    <li className='mb-2'>{children}</li>
  ),
  a: ({ href, children }: { href?: string; children?: React.ReactNode }) => (
    <a
      href={href}
      className='text-blue-600 dark:text-blue-400 hover:underline'
      target={href?.startsWith('http') ? '_blank' : undefined}
      rel={href?.startsWith('http') ? 'noopener noreferrer' : undefined}
    >
      {children}
    </a>
  ),
}

interface MDXContentProps {
  source: MDXRemoteSerializeResult
}

export default function MDXContent({ source }: MDXContentProps) {
  return <MDXRemote {...source} components={components} />
}
