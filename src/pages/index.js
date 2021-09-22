import * as React from 'react'
import { Helmet } from 'react-helmet'

import Header from '../components/header'
import Project from '../components/projectCard'
import Tutorial from '../components/tutorialCard'
import imageOfMe from '../images/me.png'
import logo from '../images/icon.png'

const IndexPage = () => {
  return (
    <main>
      <Helmet>
        <title>Mamadou Aliou Diallo - Full Stack Web Developer</title>
      </Helmet>

      {/* <Header /> */}

      <div className='container px-4 mx-auto flex flex-col-reverse py-24 lg:items-center lg:flex-row'>
        <div className='mt-6 lg:w-2/3'>
          <div className='lg:w-3/4 lg:mx-auto'>
            <h2 className='font-semibold text-lg lg:text-xl'>
              Hi, I'm Mamadou Aliou Diallo 👋
            </h2>
            <h1 className='font-bold mt-4 text-2xl md:text-4xl'>
              I'm a Full Stack Web Developer &#8212;
              <span className='text-blue-700'>
                Working with PHP, JS and Python.
              </span>
            </h1>
            <p className='mt-4 font-semibold text-gray-800 leading-relaxed md:text-lg'>
              Welcome! It's great to have you here. I'm a technical writer,
              passionate about entrepreneurship, writing and teaching code.
              Currently working on kaherecode, an aspiring community for french
              developers, a web platform to learn and share about programming.
              I'm available for freelance projects or just discussing design and
              programming. Feel free to ping me at aliou.diallo@kaherecode.com.
            </p>
            <p className='mt-4 sm:flex sm:items-center sm:space-x-4'>
              <a
                href=''
                className='w-64 h-14 flex items-center justify-center bg-blue-700 rounded-full text-gray-100 font-bold'
              >
                Writings
              </a>
              <a
                href=''
                className='w-64 h-14 flex items-center justify-center bg-blue-200 rounded-full text-gray-800 font-bold mt-2 sm:mt-0'
              >
                Say Hi!
              </a>
            </p>
          </div>
        </div>
        <div className='lg:w-1/3'>
          <img
            src={imageOfMe}
            alt='Mamadou Aliou Diallo'
            className='w-56 mx-auto rounded-full lg:w-64'
          />
        </div>
      </div>

      <div className='container px-4 mx-auto py-8 xl:flex'>
        <div className='xl:w-2/3'>
          <div className='flex justify-between items-center'>
            <h2 className='text-2xl font-bold'>Latest Tutorials</h2>
            <a href='' className='text-blue-700 underline text-sm'>
              View blog &#8594;
            </a>
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
          <div className='flex flex-wrap space-x-2'>
            <a
              href=''
              className='bg-blue-200 py-1 px-3 text-sm font-semibold rounded-lg hover:bg-blue-700 hover:text-gray-50 my-1'
            >
              Symfony
            </a>
            <a
              href=''
              className='bg-blue-200 py-1 px-3 text-sm font-semibold rounded-lg hover:bg-blue-700 hover:text-gray-50 my-1'
            >
              PHP
            </a>
            <a
              href=''
              className='bg-blue-200 py-1 px-3 text-sm font-semibold rounded-lg hover:bg-blue-700 hover:text-gray-50 my-1'
            >
              Laravel
            </a>
            <a
              href=''
              className='bg-blue-200 py-1 px-3 text-sm font-semibold rounded-lg hover:bg-blue-700 hover:text-gray-50 my-1'
            >
              Flask
            </a>
            <a
              href=''
              className='bg-blue-200 py-1 px-3 text-sm font-semibold rounded-lg hover:bg-blue-700 hover:text-gray-50 my-1'
            >
              React
            </a>
          </div>
        </div>
      </div>

      <div className='container px-4 mx-auto py-8'>
        <div className='flex justify-between items-center'>
          <h2 className='text-2xl font-bold'>Projects I've worked on</h2>
        </div>
        <div className='-mx-3 flex flex-wrap mt-6'>
          <div className='md:w-1/2 lg:w-1/3 p-3'>
            <Project />
          </div>
          <div className='md:w-1/2 lg:w-1/3 p-3'>
            <Project />
          </div>
          <div className='md:w-1/2 lg:w-1/3 p-3'>
            <Project />
          </div>
        </div>
      </div>

      <div className='container px-4 mx-auto py-8'>
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
                className='p-2 outline-none text-sm md:text-base'
              />
              <input
                type='submit'
                value='Subscribe'
                className='p-2 bg-blue-700 text-sm text-gray-100 font-bold rounded-tr-xl rounded-br-xl md:text-base'
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
    </main>
  )
}

export default IndexPage
