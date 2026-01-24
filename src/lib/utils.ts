import type { Locale } from '@/types'

const localeMap: Record<Locale, string> = {
  en: 'en-US',
  fr: 'fr-FR',
}

export function formatDate(dateString: string, locale: Locale = 'en'): string {
  try {
    return new Date(dateString).toLocaleDateString(localeMap[locale], {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    })
  } catch (error) {
    console.error(`Error formatting date: ${dateString}`, error)
    return dateString
  }
}
