import type { Locale } from '@/types'
import en from '@/i18n/en.json'
import fr from '@/i18n/fr.json'

export const locales: Locale[] = ['en', 'fr']
export const defaultLocale: Locale = 'en'

const translations = { en, fr } as const

export function getAlternateLocale(locale: Locale): Locale {
  return locale === 'en' ? 'fr' : 'en'
}

export function isValidLocale(locale: string): locale is Locale {
  return locales.includes(locale as Locale)
}

export type Translations = typeof en

export function getTranslations(locale: Locale): Translations {
  return translations[locale] ?? translations.en
}
