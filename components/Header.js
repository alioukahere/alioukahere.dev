import Link from 'next/link'

export default function Header() {
  return (
    <header className='bg-gray-900 text-gray-200'>
      <div className='container px-4 mx-auto py-10 flex justify-between items-center'>
        <Link href='/'>
          <a href='/' className='text-2xl font-bold'>
            alioukahere.dev
          </a>
        </Link>
        <ul className='hidden sm:flex space-x-6 font-semibold'>
          <li>
            <Link href='/blog'>
              <a href='/blog' className='hover:text-blue-700'>
                Blog
              </a>
            </Link>
          </li>
        </ul>
      </div>
    </header>
  )
}
