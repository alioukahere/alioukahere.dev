'use client'

import { Sun, Moon, LinkedinIcon } from 'lucide-react'
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
      <Link href='/'>
        <h1 className='text-2xl text-gray-900 dark:text-white font-bold'>
          alioukahere.dev
        </h1>
      </Link>
      <div className='flex items-center gap-2 sm:gap-4'>
        <button
          onClick={toggleDarkMode}
          className='p-1 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-200'
        >
          {renderDarkModeIcon()}
        </button>
        <a href={SOCIAL_LINKS.github} target='_blank'>
          <SiGithub className='w-5 h-5' />
        </a>
        <a href={SOCIAL_LINKS.linkedin} target='_blank'>
          <LinkedinIcon className='w-5 h-5' />
        </a>
        <a href={SOCIAL_LINKS.twitter} target='_blank'>
          <SiX className='w-5 h-5' />
        </a>
      </div>
    </nav>
  )
}
