'use client'

import { usePathname, useRouter } from 'next/navigation'
import { locales } from '@/lib/i18n'
import type { Locale } from '@/types'

interface LanguageSwitcherProps {
  readonly currentLocale: Locale
}

export default function LanguageSwitcher({
  currentLocale,
}: LanguageSwitcherProps) {
  const router = useRouter()
  const pathname = usePathname()

  const switchLocale = (newLocale: Locale) => {
    document.cookie = `NEXT_LOCALE=${newLocale}; path=/; max-age=31536000`

    // Replace current locale prefix with new locale
    const pathWithoutLocale = pathname.replace(`/${currentLocale}`, '') || ''
    const newPath = `/${newLocale}${pathWithoutLocale}`

    router.push(newPath)
  }

  return (
    <div className='flex items-center gap-1 text-sm'>
      {locales.map((locale) => (
        <button
          key={locale}
          onClick={() => switchLocale(locale)}
          className={`px-2 py-1 rounded transition-colors duration-200 ${
            currentLocale === locale
              ? 'bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 font-medium'
              : 'hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-600 dark:text-gray-400'
          }`}
        >
          {locale.toUpperCase()}
        </button>
      ))}
    </div>
  )
}
