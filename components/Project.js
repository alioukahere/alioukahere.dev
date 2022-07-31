export default function Project({
  name,
  tags,
  description,
  projectUrl,
  sourceCodeUrl,
}) {
  return (
    <div className='p-6 bg-white rounded-xl'>
      <h2 className='font-bold text-xl hover:text-blue-700 hover:underline'>
        {name}
      </h2>
      <p className='mt-2 text-sm text-gray-400'>#symfony, #docker, #sass</p>
      <p className='text-gray-700 mt-4'>{description}</p>
      <span className='text-sm inline-block mt-4'>
        <a
          href={projectUrl}
          target='_blank'
          className='text-blue-700 hover:underline'
        >
          {projectUrl}
        </a>{' '}
        <br />
        <a
          href={sourceCodeUrl}
          className='text-blue-700 hover:underline break-all'
        >
          {sourceCodeUrl}
        </a>
      </span>
    </div>
  )
}
