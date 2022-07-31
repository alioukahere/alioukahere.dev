import Image from 'next/image'

export default function Technology({ imgSrc, title, content }) {
  return (
    <div className='mx-4 my-7 lg:mx-7 xl:mx-10'>
      <div className='h-16 w-16'>
        <Image src={imgSrc} alt={title} layout='responsive' />
      </div>
      <h3 className='font-bold text-xl mt-3'>{title}</h3>
      <p className='mt-2 font-semibold text-gray-500'>{content}</p>
    </div>
  )
}
