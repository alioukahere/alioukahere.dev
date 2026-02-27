export type Locale = 'en' | 'fr'

export interface BlogPost {
  slug: string
  title: string
  publishedAt: string
  updatedAt?: string
  excerpt: string
  category: string
  readingTime: string
  image?: string
  locale: Locale
  translationSlug?: string
  isFallback?: boolean
}

export interface Project {
  title: string
  description: string
  link: string
  tech: string[]
}

export interface Technology {
  name: string
  years: number
}

export interface Service {
  title: string
  description: string
}
