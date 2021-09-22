import * as React from 'react'

import github from '../images/github.svg'
import linkedin from '../images/linkedin.svg'
import twitter from '../images/twitter.svg'

export default function Footer() {
  return (
    <footer className='bg-gray-200'>
      <div className='container px-4 mx-auto py-8'>
        <div className='flex justify-center space-x-4 items-center'>
          <a href=''>
            <img src={github} alt='Github Icon' className='w-8 h-8' />
          </a>
          <a href=''>
            <img src={twitter} alt='Twitter Icon' className='w-8 h-8' />
          </a>
          <a href=''>
            <img src={linkedin} alt='Linkedin Icon' className='w-8 h-8' />
          </a>
        </div>
        <p className='text-gray-700 text-center text-sm mt-4'>
          &copy; {new Date().getFullYear()}, Mamadou Aliou Diallo. All Rights
          Reserved.
        </p>
      </div>
    </footer>
  )
}
