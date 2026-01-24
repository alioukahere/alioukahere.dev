import type { Locale } from '@/types'

export const locales = ['en', 'fr'] as const
export const defaultLocale: Locale = 'en'

export function getAlternateLocale(locale: Locale): Locale {
  return locale === 'en' ? 'fr' : 'en'
}

export function isValidLocale(locale: string): locale is Locale {
  return locales.includes(locale as Locale)
}

export type Translations = typeof import('@/i18n/en.json')

export async function getTranslations(locale: Locale): Promise<Translations> {
  try {
    const translations = await import(`@/i18n/${locale}.json`)
    return translations.default || translations
  } catch {
    const fallback = await import('@/i18n/en.json')
    return fallback.default || fallback
  }
}
