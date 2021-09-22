import * as React from 'react'
import { Helmet } from 'react-helmet'

import Header from '../components/header'
import imageOfMe from '../images/me.png'

const IndexPage = () => {
  return (
    <main>
      <Helmet>
        <title>Mamadou Aliou Diallo - Full Stack Web Developer</title>
      </Helmet>

      <Header />

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
    </main>
  )
}

export default IndexPage
