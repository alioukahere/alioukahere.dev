import type { Locale } from '@/types'

interface FallbackBannerProps {
  readonly contentLocale: Locale
  readonly translations: {
    message: string
  }
  readonly languageNames: {
    en: string
    fr: string
  }
}

export default function FallbackBanner({
  contentLocale,
  translations,
  languageNames,
}: FallbackBannerProps) {
  const languageName = languageNames[contentLocale]

  return (
    <div className='mb-8 p-4 rounded-lg bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800'>
      <span className='dark:text-white'>
        🌍 {translations.message}{' '}
        <span className='font-semibold'>{languageName}</span>
      </span>
    </div>
  )
}
