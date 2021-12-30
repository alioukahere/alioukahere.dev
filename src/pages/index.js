import * as React from 'react'
import { Helmet } from 'react-helmet'

import Header from '../components/header'
import Footer from '../components/footer'
import Project from '../components/projectCard'
import Tutorial from '../components/tutorialCard'
import imageOfMe from '../images/me.png'
import logo from '../images/icon.png'
import { Link } from 'gatsby'

const IndexPage = () => {
  return (
    <main>
      <Helmet>
        <title>Mamadou Aliou Diallo - Full Stack Web Developer</title>
      </Helmet>

      <Header />

      <div className='bg-gray-900 text-gray-200'>
        <div className='container px-4 mx-auto flex flex-col-reverse pb-32 pt-20 lg:items-center lg:flex-row'>
          <div className='mt-6 lg:w-2/3'>
            <div className='lg:w-3/4 lg:mx-auto'>
              <h2 className='font-semibold text-gray-400 text-lg lg:text-xl'>
                Hi, I'm Mamadou Aliou Diallo 👋
              </h2>
              <h1 className='font-bold mt-4 text-2xl md:text-4xl'>
                A Full Stack Web Developer &#8212;{' '}
                <span className='text-blue-700'>
                  Working with PHP, JS and Python.
                </span>
              </h1>
              <p className='mt-4 font-semibold text-gray-400 leading-relaxed md:text-lg md:leading-8'>
                Welcome! It's great to have you here. I build responsive and
                robust web applications using{' '}
                <a href='' className='font-bold underline'>
                  Symfony
                </a>
                ,{' '}
                <a href='' className='font-bold underline'>
                  Laravel
                </a>
                ,{' '}
                <a href='' className='font-bold underline'>
                  React
                </a>
                ,{' '}
                <a href='' className='font-bold underline'>
                  Angular
                </a>
                ,{' '}
                <a href='' className='font-bold underline'>
                  Django
                </a>{' '}
                and{' '}
                <a href='' className='font-bold underline'>
                  Flask
                </a>
                . I'm available for freelance projects, feel free to ping me at{' '}
                <a
                  href='mailto:hello@alioukahere.dev'
                  className='text-blue-700 underline'
                >
                  hello@alioukahere.dev
                </a>
                .
              </p>
              <p className='mt-4 sm:flex sm:items-center sm:space-x-4'>
                <a
                  href='mailto:hello@alioukahere.dev'
                  className='w-64 h-14 flex items-center justify-center bg-blue-700 rounded-full text-gray-100 font-bold'
                >
                  Get in touch!
                </a>
                <Link
                  to='/blog'
                  className='w-64 h-14 flex items-center justify-center bg-blue-200 rounded-full text-gray-800 font-bold mt-2 sm:mt-0'
                >
                  Writings
                </Link>
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
      </div>

      <div className='bg-white'>
        <div className='container px-4 mx-auto py-20'>
          <h2 className='text-2xl font-bold'>How I Can Help</h2>
          <p className='mt-3 text-gray-500 font-semibold'>
            I can work with you to help you build a web application from
            scratch.
          </p>
          <div className='mt-6 md:flex md:space-x-6 lg:space-x-10 xl:space-x-14'>
            <div className='w-full md:w-1/3'>
              <h3 className='font-bold text-xl'>1. Backend/APIs</h3>
              <p className='mt-2 font-semibold text-gray-500'>
                I build robust, scalable and maintainable REST APIs for your web
                or mobile applications using modern technologies and industry
                requirements.
              </p>
            </div>
            <div className='w-full md:w-1/3 mt-8 md:mt-0'>
              <h3 className='font-bold text-xl'>2. Web Applications</h3>
              <p className='mt-2 font-semibold text-gray-500'>
                I build responsive and elegant web applications using modern and
                popular technologies. UX is as more important as UI, so I make
                sure your users feels home.
              </p>
            </div>
            <div className='w-full md:w-1/3 mt-8 md:mt-0'>
              <h3 className='font-bold text-xl'>3. Consulting</h3>
              <p className='mt-2 font-semibold text-gray-500'>
                Not sure if you're doing things the right way? I can come in and
                help your team be on the right track and deliver faster.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className='container px-4 mx-auto py-20'>
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

      <div className='bg-white'>
        <div className='container px-4 mx-auto py-20'>
          <h2 className='text-2xl font-bold'>Technologies I Work With</h2>
          <p className='mt-3 text-gray-500 font-semibold'>
            I work with latest, modern, powerful and secure technologies.
          </p>
          <div className='mt-6 md:flex md:space-x-6 lg:space-x-10 xl:space-x-14'>
            <div className='w-full md:w-1/3'>
              <img
                src='https://cdn.worldvectorlogo.com/logos/symfony.svg'
                alt=''
                className='w-16'
              />
              <h3 className='font-bold text-xl mt-2'>Symfony</h3>
              <p className='mt-2 font-semibold text-gray-500'>
                I build robust, scalable and maintainable REST APIs for your web
                or mobile applications using modern technologies and industry
                requirements.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className='container px-4 mx-auto py-20 xl:flex'>
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

      <div className='container px-4 mx-auto py-20'>
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

export default IndexPage
