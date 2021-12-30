import React from 'react'
import { Link } from 'gatsby'

export default function Header() {
  return (
    <header className='bg-gray-900 text-gray-200'>
      <div className='container px-4 mx-auto py-10 flex justify-between items-center'>
        <Link to='/' className='text-2xl font-bold'>
          alioukahere.dev
        </Link>
        <ul className='hidden sm:flex space-x-6 font-semibold'>
          <li>
            <Link to='/blog' className='hover:text-blue-700'>
              Blog
            </Link>
          </li>
        </ul>
      </div>
    </header>
  )
}
