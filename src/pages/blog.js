import * as React from 'react'
import { Helmet } from 'react-helmet'

import Header from '../components/Header'
import Footer from '../components/Footer'
import Tutorial from '../components/TutorialCard'
import logo from '../images/icon.png'

const BlogPage = () => {
  return (
    <main>
      <Helmet>
        <title>Blog | Mamadou Aliou Diallo</title>
      </Helmet>

      <Header />

      <div className='container px-4 mx-auto py-12 xl:flex'>
        <div className='xl:w-2/3'>
          <div className=''>
            <h1 className='text-3xl font-bold'>Blog</h1>
            <p className='mt-3'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Recusandae ducimus repellendus praesentium laborum deserunt
              consequuntur pariatur? Explicabo doloremque officia, distinctio
              accusantium fugiat debitis adipisci sint, optio fugit qui nulla.
              At!
            </p>
          </div>
          <div className='-mx-3 flex flex-wrap mt-6'>
            <div className='md:w-1/2 lg:w-1/3 p-3'>
              <Tutorial />
            </div>
            <div className='md:w-1/2 lg:w-1/3 p-3'>
              <Tutorial />
            </div>
            <div className='md:w-1/2 lg:w-1/3 p-3'>
              <Tutorial />
            </div>
            <div className='md:w-1/2 lg:w-1/3 p-3'>
              <Tutorial />
            </div>
            <div className='md:w-1/2 lg:w-1/3 p-3'>
              <Tutorial />
            </div>
            <div className='md:w-1/2 lg:w-1/3 p-3'>
              <Tutorial />
            </div>
          </div>
        </div>
        <div className='mt-6 xl:mt-0 xl:w-1/3 xl:ml-8'>
          <h2 className='text-2xl font-bold mb-6'>Topics</h2>
          <div className='flex flex-wrap -mx-1'>
            <a
              href=''
              className='bg-blue-200 py-1 px-3 text-sm font-semibold rounded-lg hover:bg-blue-700 hover:text-gray-50 m-1'
            >
              Symfony
            </a>
            <a
              href=''
              className='bg-blue-200 py-1 px-3 text-sm font-semibold rounded-lg hover:bg-blue-700 hover:text-gray-50 m-1'
            >
              PHP
            </a>
            <a
              href=''
              className='bg-blue-200 py-1 px-3 text-sm font-semibold rounded-lg hover:bg-blue-700 hover:text-gray-50 m-1'
            >
              Laravel
            </a>
            <a
              href=''
              className='bg-blue-200 py-1 px-3 text-sm font-semibold rounded-lg hover:bg-blue-700 hover:text-gray-50 m-1'
            >
              Flask
            </a>
            <a
              href=''
              className='bg-blue-200 py-1 px-3 text-sm font-semibold rounded-lg hover:bg-blue-700 hover:text-gray-50 m-1'
            >
              React
            </a>
          </div>
        </div>
      </div>

      <div className='container px-4 mx-auto py-12'>
        <div className='flex justify-between items-center'>
          <h2 className='text-2xl font-bold'>Signup to my Newsletter!</h2>
        </div>
        <div className='mt-6 flex flex-col-reverse md:flex-row md:items-center'>
          <div className='mt-5 md:w-1/2'>
            <p className='text-gray-800 lg:w-4/5'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Recusandae id, obcaecati excepturi voluptatem dolore corporis
              beatae autem voluptates quam explicabo blanditiis exercitationem
              illum nostrum ipsa voluptas eligendi ratione molestiae placeat.
            </p>
            <p className='mt-4'>
              <input
                type='text'
                placeholder='Email Address'
                className='p-2 outline-none text-sm md:text-base lg:text-lg'
              />
              <input
                type='submit'
                value='Subscribe'
                className='p-2 bg-blue-700 text-sm text-gray-100 font-bold rounded-tr-xl rounded-br-xl md:text-base lg:text-lg'
              />
            </p>
          </div>
          <div className='md:w-1/2'>
            <img
              src={logo}
              alt='Mamadou Aliou Diallo'
              className='w-28 mx-auto'
            />
          </div>
        </div>
      </div>

      <Footer />
    </main>
  )
}

export default BlogPage
