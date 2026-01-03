// lib/mdx.ts
import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import readingTime from 'reading-time'
import { BlogPost } from '@/types'

// Define the path to blog posts
const POSTS_PATH = path.join(process.cwd(), 'content/blog')

interface Frontmatter {
  title: string
  publishedAt: string
  updatedAt?: string
  excerpt: string
  category: string
  image?: string
}

// Get all post slugs
export function getPostSlugs(): string[] {
  try {
    return fs.readdirSync(POSTS_PATH).filter((path) => /\.mdx?$/.test(path))
  } catch (error) {
    console.error('Error reading post slugs:', error)
    return []
  }
}

// Get post content by slug
export async function getPostBySlug(slug: string): Promise<BlogPost | null> {
  try {
    const realSlug = slug.replace(/\.mdx$/, '')
    const filePath = path.join(POSTS_PATH, `${realSlug}.mdx`)
    const fileContent = fs.readFileSync(filePath, 'utf8')

    // Extract frontmatter and content
    const { data, content } = matter(fileContent)
    const frontmatter = data as Frontmatter

    // Calculate reading time
    const readingTimeResult = readingTime(content)

    // Return the processed content
    return {
      slug: realSlug,
      title: frontmatter.title,
      publishedAt: frontmatter.publishedAt,
      updatedAt: frontmatter.updatedAt,
      excerpt: frontmatter.excerpt,
      category: frontmatter.category,
      readingTime: readingTimeResult.text,
      image: frontmatter.image,
      content,
    }
  } catch (error) {
    console.error(`Error processing post ${slug}:`, error)
    return null
  }
}

// Get all posts
export async function getAllPosts(): Promise<BlogPost[]> {
  try {
    const slugs = getPostSlugs()
    const posts = []

    for (const file of slugs) {
      const slug = file.replace(/\.mdx$/, '')
      const post = await getPostBySlug(slug)
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
