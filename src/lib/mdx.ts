import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import readingTime from 'reading-time'
import { BlogPost, Locale } from '@/types'
import { defaultLocale, getAlternateLocale } from './i18n'

function getPostsPath(locale: Locale): string {
  return path.join(process.cwd(), 'content/blog', locale)
}

interface Frontmatter {
  title: string
  publishedAt: string
  updatedAt?: string
  excerpt: string
  category: string
  image?: string
  translationSlug?: string
}

export function getPostSlugs(locale: Locale = defaultLocale): string[] {
  try {
    const postsPath = getPostsPath(locale)
    if (!fs.existsSync(postsPath)) {
      return []
    }
    return fs.readdirSync(postsPath).filter((path) => /\.mdx?$/.test(path))
  } catch (error) {
    console.error('Error reading post slugs:', error)
    return []
  }
}

export async function getPostBySlug(
  slug: string,
  locale: Locale = defaultLocale
): Promise<BlogPost | null> {
  try {
    const realSlug = slug.replace(/\.mdx$/, '')
    const postsPath = getPostsPath(locale)
    const filePath = path.join(postsPath, `${realSlug}.mdx`)

    if (!fs.existsSync(filePath)) {
      return null
    }

    const fileContent = fs.readFileSync(filePath, 'utf8')

    const { data, content } = matter(fileContent)
    const frontmatter = data as Frontmatter

    const readingTimeResult = readingTime(content)

    return {
      slug: realSlug,
      title: frontmatter.title,
      publishedAt: frontmatter.publishedAt,
      updatedAt: frontmatter.updatedAt,
      excerpt: frontmatter.excerpt,
      category: frontmatter.category,
      readingTime: readingTimeResult.text,
      image: frontmatter.image,
      locale,
      translationSlug: frontmatter.translationSlug,
      content,
    }
  } catch (error) {
    console.error(`Error processing post ${slug}:`, error)
    return null
  }
}

export async function getAllPosts(
  locale: Locale = defaultLocale
): Promise<BlogPost[]> {
  try {
    const slugs = getPostSlugs(locale)
    const posts = []

    for (const file of slugs) {
      const slug = file.replace(/\.mdx$/, '')
      const post = await getPostBySlug(slug, locale)
      if (post) posts.push(post)
    }

    return posts.sort(
      (a, b) =>
        new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
    )
  } catch (error) {
    console.error('Error getting all posts:', error)
    return []
  }
}

export async function getTranslatedPost(
  slug: string,
  fromLocale: Locale
): Promise<{ exists: boolean; slug: string | null }> {
  try {
    const post = await getPostBySlug(slug, fromLocale)

    if (!post?.translationSlug) {
      return { exists: false, slug: null }
    }

    const toLocale = getAlternateLocale(fromLocale)
    const translatedPost = await getPostBySlug(post.translationSlug, toLocale)

    return {
      exists: !!translatedPost,
      slug: translatedPost ? post.translationSlug : null,
    }
  } catch (error) {
    console.error('Error checking for translation:', error)
    return { exists: false, slug: null }
  }
}
