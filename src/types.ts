import { MDXRemoteSerializeResult } from 'next-mdx-remote'

export interface Project {
  title: string
  description: string
  link: string
  tech: string[]
}

export interface BlogPost {
  slug: string
  title: string
  publishedAt: string
  updatedAt?: string
  excerpt: string
  category: string
  readingTime: string
  image?: string
  content:
    | string
    | MDXRemoteSerializeResult<Record<string, unknown>, Record<string, unknown>>
}

export interface Technology {
  name: string
  icon: React.ComponentType<{ className?: string }>
  years: number
}

export interface Service {
  title: string
  description: string
}
