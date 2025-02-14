import { technologies } from '@/data/content'

export default function TechnologiesSection() {
  return (
    <section className='section-padding border-t border-gray-200 dark:border-gray-800'>
      <h2 className='section-title'>Technologies I Work With</h2>
      <div className='grid md:grid-cols-3 gap-8'>
        {technologies.map((tech) => {
          const IconComponent = tech.icon

          return (
            <div
              key={tech.name}
              className='p-6 rounded-lg border border-gray-200 dark:border-gray-700
              flex flex-col bg-gray-50 dark:bg-gray-800'
            >
              <div className='flex items-center gap-6'>
                <div className='w-12 h-12 flex items-center justify-center'>
                  <IconComponent className='w-12 h-12 text-gray-700 dark:text-gray-300' />
                </div>
                <div>
                  <h3 className='font-semibold text-gray-900 dark:text-white'>
                    {tech.name}
                  </h3>
                  <span className='text-sm text-gray-600 dark:text-gray-300'>
                    {tech.years} years experience
                  </span>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}
