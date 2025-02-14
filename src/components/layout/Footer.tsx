import { CONTACT_EMAIL, SOCIAL_LINKS } from '@/constants'
import { SiGithub, SiX } from '@icons-pack/react-simple-icons'
import { Mail } from 'lucide-react'

export default function Footer() {
  return (
    <footer className='border-t border-gray-200 dark:border-gray-800'>
      <div className='content-container py-12'>
        <div className='flex flex-col md:flex-row justify-between items-center gap-6'>
          <div className='text-gray-600 dark:text-gray-400 text-center md:text-left'>
            © 2024 Mamadou Aliou Diallo. All Rights Reserved.
          </div>
          <div className='flex items-center gap-8'>
            <a
              href={`mailto:${CONTACT_EMAIL}`}
              className='text-gray-700 dark:text-gray-200 hover:text-blue-600
              dark:hover:text-blue-500 transition-colors duration-200'
            >
              <Mail className='w-5 h-5' />
            </a>
            <a
              href={SOCIAL_LINKS.github}
              className='text-gray-700 dark:text-gray-200 hover:text-blue-600
              dark:hover:text-blue-500 transition-colors duration-200'
            >
              <SiGithub className='w-5 h-5' />
            </a>
            <a
              href={SOCIAL_LINKS.twitter}
              className='text-gray-700 dark:text-gray-200 hover:text-blue-600
              dark:hover:text-blue-500 transition-colors duration-200'
            >
              <SiX className='w-5 h-5' />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
