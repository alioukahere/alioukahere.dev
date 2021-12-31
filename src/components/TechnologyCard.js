import React from 'react'

export default function TechnologyCard({ imgSrc, title, content }) {
  return (
    <div className='mx-4 my-7 lg:mx-7 xl:mx-10'>
      <img src={imgSrc} alt='' className='h-16' />
      <h3 className='font-bold text-xl mt-2'>{title}</h3>
      <p className='mt-2 font-semibold text-gray-500'>{content}</p>
    </div>
  )
}
