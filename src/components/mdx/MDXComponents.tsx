import React from 'react'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { oneDark } from 'react-syntax-highlighter/dist/esm/styles/prism'

interface CodeProps {
  readonly className?: string
  readonly children?: React.ReactNode
}

function H1({ children }: Readonly<{ children?: React.ReactNode }>) {
  return (
    <h1 className='text-4xl font-bold mt-12 mb-6 text-gray-900 dark:text-white'>
      {children}
    </h1>
  )
}

function H2({ children }: Readonly<{ children?: React.ReactNode }>) {
  return (
    <h2 className='text-3xl font-bold mt-10 mb-4 text-gray-900 dark:text-white'>
      {children}
    </h2>
  )
}

function P({ children }: Readonly<{ children?: React.ReactNode }>) {
  return (
    <p className='mb-6 text-gray-600 dark:text-gray-300 leading-relaxed'>
      {children}
    </p>
  )
}

function Pre({ children }: Readonly<{ children?: React.ReactNode }>) {
  return <>{children}</>
}

function Code({ className, children }: CodeProps) {
  const match = /language-(\w+)/.exec(className ?? '')
  const language = match ? match[1] : ''
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
      >
        {String(children).replace(/\n$/, '')}
      </SyntaxHighlighter>
    </div>
  )
}

function UL({ children }: Readonly<{ children?: React.ReactNode }>) {
  return (
    <ul className='list-disc pl-6 mb-6 text-gray-600 dark:text-gray-300'>
      {children}
    </ul>
  )
}

function OL({ children }: Readonly<{ children?: React.ReactNode }>) {
  return (
    <ul className='list-decimal pl-6 mb-6 text-gray-600 dark:text-gray-300'>
      {children}
    </ul>
  )
}

function LI({ children }: Readonly<{ children?: React.ReactNode }>) {
  return <li className='mb-2'>{children}</li>
}

function A({
  href,
  children,
}: Readonly<{ href?: string; children?: React.ReactNode }>) {
  return (
    <a
      href={href}
      className='text-blue-600 dark:text-blue-400 hover:underline'
      target={href?.startsWith('http') ? '_blank' : undefined}
      rel={href?.startsWith('http') ? 'noopener noreferrer' : undefined}
    >
      {children}
    </a>
  )
}

export const mdxComponents = {
  h1: H1,
  h2: H2,
  p: P,
  pre: Pre,
  code: Code,
  ul: UL,
  li: LI,
  ol: OL,
  a: A,
}
