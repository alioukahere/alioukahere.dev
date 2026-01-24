import Link from 'next/link'
import type { Locale } from '@/types'
import { getAlternateLocale } from '@/lib/i18n'

interface TranslationBannerProps {
  readonly currentLocale: Locale
  readonly alternateSlug: string
  readonly translations: {
    message: string
    language: string
  }
}

export default function TranslationBanner({
  currentLocale,
  alternateSlug,
  translations,
}: TranslationBannerProps) {
  const alternateLocale = getAlternateLocale(currentLocale)
  const alternateUrl = `/${alternateLocale}/blog/${alternateSlug}`

  return (
    <div className='mb-8 p-4 rounded-lg bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800'>
      <span className='dark:text-white'>
        🌍 {translations.message}{' '}
        <Link
          href={alternateUrl}
          className='font-semibold underline hover:no-underline'
        >
          {translations.language}
        </Link>
      </span>
    </div>
  )
}
