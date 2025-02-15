'use client'

import { Sun, Moon } from 'lucide-react'
import { useDarkMode } from '@/hooks/useDarkMode'
import { SOCIAL_LINKS } from '@/constants'
import { SiGithub, SiX } from '@icons-pack/react-simple-icons'
import Link from 'next/link'

export default function Header() {
  const { darkMode, toggleDarkMode } = useDarkMode()

  const renderDarkModeIcon = () => {
    if (darkMode === undefined) {
      return <div className='w-5 h-5 animate-pulse bg-gray-300 rounded-full' />
    }

    return darkMode ? <Sun className='w-5 h-5' /> : <Moon className='w-5 h-5' />
  }

  return (
    <nav className='content-container py-8 flex justify-between items-center'>
      <h1 className='text-2xl font-bold'>
        <Link href='/' className='!text-gray-900 dark:!text-white'>
          alioukahere.dev
        </Link>
      </h1>
      <div className='flex items-center gap-6'>
        <button
          onClick={toggleDarkMode}
          className='p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-200'
        >
          {renderDarkModeIcon()}
        </button>
        <a
          href={SOCIAL_LINKS.github}
          className='text-gray-700 dark:text-gray-200'
        >
          <SiGithub className='w-5 h-5' />
        </a>
        <a
          href={SOCIAL_LINKS.twitter}
          className='text-gray-700 dark:text-gray-200'
        >
          <SiX className='w-5 h-5' />
        </a>
      </div>
    </nav>
  )
}
