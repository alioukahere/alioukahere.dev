import { Sun, Moon } from 'lucide-react'
import { useDarkMode } from '@/hooks/useDarkMode'
import { SOCIAL_LINKS } from '@/constants'
import { SiGithub, SiX } from '@icons-pack/react-simple-icons'

export default function Header() {
  const { darkMode, toggleDarkMode } = useDarkMode()

  return (
    <nav className='content-container py-8 flex justify-between items-center'>
      <h1 className='text-2xl font-bold text-gray-900 dark:text-white'>
        alioukahere.dev
      </h1>
      <div className='flex items-center gap-6'>
        <button
          onClick={toggleDarkMode}
          className='p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-200 transform active:scale-95'
          aria-label={darkMode ? 'Switch to light mode' : 'Switch to dark mode'}
        >
          {darkMode ? (
            <Sun className='w-5 h-5 text-gray-200' />
          ) : (
            <Moon className='w-5 h-5 text-gray-700' />
          )}
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
