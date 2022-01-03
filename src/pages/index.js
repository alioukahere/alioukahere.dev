import * as React from 'react'
import { Helmet } from 'react-helmet'
import { Link } from 'gatsby'

import Header from '../components/Header'
import Footer from '../components/Footer'
import Project from '../components/ProjectCard'
import Tutorial from '../components/TutorialCard'
import imageOfMe from '../images/me.png'
import logo from '../images/icon.png'
import symfonyIcon from '../images/symfony.svg'
import laravelIcon from '../images/laravel.svg'
import reactIcon from '../images/react.svg'
import angularIcon from '../images/angular.svg'
import djangoIcon from '../images/django.svg'
import flaskIcon from '../images/flask.svg'
import github from '../images/github.svg'
import linkedin from '../images/linkedin.svg'
import twitter from '../images/twitter.svg'
import TechnologyCard from '../components/TechnologyCard'

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
                <a
                  href='https://symfony.com'
                  target='_blank'
                  className='font-bold underline'
                >
                  Symfony
                </a>
                ,{' '}
                <a
                  href='https://laravel.com'
                  target='_blank'
                  className='font-bold underline'
                >
                  Laravel
                </a>
                ,{' '}
                <a
                  href='https://reactjs.org'
                  target='_blank'
                  className='font-bold underline'
                >
                  React
                </a>
                ,{' '}
                <a
                  href='https://angular.io'
                  target='_blank'
                  className='font-bold underline'
                >
                  Angular
                </a>
                ,{' '}
                <a
                  href='https://www.djangoproject.com'
                  target='_blank'
                  className='font-bold underline'
                >
                  Django
                </a>{' '}
                and{' '}
                <a
                  href='https://flask.palletsprojects.com/en/2.0.x'
                  target='_blank'
                  className='font-bold underline'
                >
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
          <p className='mt-1 text-gray-500 font-semibold'>
            I can work with you to help you build your web projects from scratch
            or come in as a consultant.
          </p>
          <div className='mt-7 md:flex md:space-x-6 lg:space-x-10 xl:space-x-14'>
            <div className='w-full md:w-1/3'>
              <h3 className='font-bold text-xl'>1. Backend/APIs</h3>
              <p className='mt-2 font-semibold text-gray-500'>
                I build robust, scalable and maintainable REST APIs for your web
                or mobile applications using modern technologies following best
                practices.
              </p>
            </div>
            <div className='w-full md:w-1/3 mt-8 md:mt-0'>
              <h3 className='font-bold text-xl'>2. Web Applications</h3>
              <p className='mt-2 font-semibold text-gray-500'>
                I build responsive and elegant web applications using modern and
                popular technologies. UX is as more important as UI, so I make
                sure your web application is accessible.
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
            <Project
              name='Kaherecode'
              description={`Kaherecode is an aspiring community for developers. A platform to learn and share about programming.`}
              projectUrl='https://kaherecode.com'
              sourceCodeUrl='https://github.com/kaherecode/kaherecode'
            />
          </div>
          <div className='md:w-1/2 lg:w-1/3 p-3'>
            <Project
              name='IMS'
              description={`IMS is a marketplace for real estate and ads I built for a customer.`}
              projectUrl='https://www.ims-sn.com'
            />
          </div>
        </div>
      </div>

      <div className='bg-white'>
        <div className='container px-4 mx-auto py-20'>
          <h2 className='text-2xl font-bold'>Technologies I Work With</h2>
          <p className='mt-1 text-gray-500 font-semibold'>
            I work with modern, powerful and secure technologies to bring you
            the best software.
          </p>
          <div className='md:flex md:flex-wrap -mx-4 lg:-mx-7 xl:-mx-10'>
            <div className='w-full md:w-1/3'>
              <TechnologyCard
                imgSrc={symfonyIcon}
                title='Symfony'
                content='Symfony is my go-to framework for Backend/APIs development. I have been working with Symfony for 4 years now, since Symfony version 3.'
              />
            </div>
            <div className='w-full md:w-1/3'>
              <TechnologyCard
                imgSrc={laravelIcon}
                title='Laravel'
                content='Laravel is one of the most popular PHP frameworks, I use it on some of my recent projects and also for customers according to their needs.'
              />
            </div>
            <div className='w-full md:w-1/3'>
              <TechnologyCard
                imgSrc={reactIcon}
                title='React'
                content='React is a Javascript library to build dynamic and elegant web applications from Facebook. It is my-go to library for building web interfaces.'
              />
            </div>
            <div className='w-full md:w-1/3'>
              <TechnologyCard
                imgSrc={angularIcon}
                title='Angular'
                content='Angular is a Javascript framework to build dynamic and elegant web applications from Google. I often use it on customer projects if they ask for it.'
              />
            </div>
            <div className='w-full md:w-1/3'>
              <TechnologyCard
                imgSrc={djangoIcon}
                title='Django'
                content='Django is the Python framework for building large and complex web applications. For building complete web apps in Python, I often rely on Django.'
              />
            </div>
            <div className='w-full md:w-1/3'>
              <TechnologyCard
                imgSrc={flaskIcon}
                title='Flask'
                content='Flask is a Python micro-framework to build REST APIs. I rely on Flask for building smaller, simpler REST APIs for its flexibility.'
              />
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
          <h2 className='text-2xl font-bold'>Get In Touch!</h2>
        </div>
        <div className='mt-6 flex flex-col-reverse md:flex-row md:items-center'>
          <div className='mt-5 md:w-1/2'>
            <p className='text-gray-800 lg:w-4/5'>
              You can find me on the social platform below or directly send me
              an email at{' '}
              <a
                href='mailto:hello@alioukahere.dev'
                className='text-blue-700 underline'
              >
                hello@alioukahere.dev
              </a>
              .
            </p>
            <div className='flex space-x-4 items-center mt-4'>
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
