import React from 'react'

export default function Header() {
  return (
    <header className='container px-4 mx-auto py-10 flex justify-between items-center'>
      <a href='#' className='text-2xl font-bold'>
        alioukahere.dev
      </a>
      <ul className='flex space-x-6 font-semibold'>
        <li>
          <a href='#' className='hover:text-blue-700'>
            Blog
          </a>
        </li>
        <li>
          <a href='#' className='hover:text-blue-700'>
            Projects
          </a>
        </li>
        <li>
          <a href='#' className='hover:text-blue-700'>
            Contact
          </a>
        </li>
      </ul>
    </header>
  )
}
