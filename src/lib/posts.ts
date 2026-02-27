import { getCollection, type CollectionEntry } from 'astro:content'
import readingTime from 'reading-time'
import type { BlogPost, Locale } from '@/types'
import { getAlternateLocale } from './i18n'

function entryToPost(
  entry: CollectionEntry<'blog'>,
  locale: Locale,
  isFallback = false
): BlogPost {
  const slug = entry.id.replace(`${locale}/`, '').replace(/\.mdx$/, '')
  const reading = readingTime(entry.body ?? '')

  return {
    slug,
    title: entry.data.title,
    publishedAt: entry.data.publishedAt,
    updatedAt: entry.data.updatedAt,
    excerpt: entry.data.excerpt,
    category: entry.data.category,
    readingTime: reading.text,
    image: entry.data.image,
    locale,
    translationSlug: entry.data.translationSlug,
    isFallback,
  }
}

function getLocaleEntries(
  entries: CollectionEntry<'blog'>[],
  locale: Locale
): CollectionEntry<'blog'>[] {
  return entries.filter((e) => e.id.startsWith(`${locale}/`))
}

function getSlugFromId(id: string, locale: Locale): string {
  return id.replace(`${locale}/`, '').replace(/\.mdx$/, '')
}

export async function getAllPosts(
  locale: Locale,
  includeFallbacks = true
): Promise<BlogPost[]> {
  const allEntries = await getCollection('blog')
  const localeEntries = getLocaleEntries(allEntries, locale)
  const posts: BlogPost[] = localeEntries.map((e) => entryToPost(e, locale))

  if (includeFallbacks) {
    const altLocale = getAlternateLocale(locale)
    const altEntries = getLocaleEntries(allEntries, altLocale)
    const existingSlugs = new Set(posts.map((p) => p.slug))

    for (const entry of altEntries) {
      const slug = getSlugFromId(entry.id, altLocale)
      if (!existingSlugs.has(slug)) {
        posts.push(entryToPost(entry, altLocale, true))
      }
    }
  }

  return posts.sort(
    (a, b) =>
      new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
  )
}

export async function getPostBySlug(
  slug: string,
  locale: Locale,
  allowFallback = true
): Promise<{ post: BlogPost; entry: CollectionEntry<'blog'> } | null> {
  const allEntries = await getCollection('blog')

  const entry = allEntries.find(
    (e) => e.id === `${locale}/${slug}` || e.id === `${locale}/${slug}.mdx`
  )

  if (entry) {
    return { post: entryToPost(entry, locale), entry }
  }

  if (allowFallback) {
    const altLocale = getAlternateLocale(locale)
    const altEntry = allEntries.find(
      (e) =>
        e.id === `${altLocale}/${slug}` || e.id === `${altLocale}/${slug}.mdx`
    )

    if (altEntry) {
      return {
        post: entryToPost(altEntry, altLocale, true),
        entry: altEntry,
      }
    }
  }

  return null
}

export async function getTranslatedPost(
  slug: string,
  fromLocale: Locale
): Promise<{ exists: boolean; slug: string | null }> {
  const result = await getPostBySlug(slug, fromLocale, false)

  if (!result?.post.translationSlug) {
    return { exists: false, slug: null }
  }

  const toLocale = getAlternateLocale(fromLocale)
  const translated = await getPostBySlug(
    result.post.translationSlug,
    toLocale,
    false
  )

  return {
    exists: !!translated,
    slug: translated ? result.post.translationSlug : null,
  }
}

export async function getAllSlugsForLocale(
  locale: Locale
): Promise<string[]> {
  const allEntries = await getCollection('blog')
  return getLocaleEntries(allEntries, locale).map((e) =>
    getSlugFromId(e.id, locale)
  )
}
