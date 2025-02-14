import { projects } from '@/data/content'

export default function ProjectsSection() {
  return (
    <section className='section-padding border-t border-gray-200 dark:border-gray-800'>
      <h2 className='section-title'>Current Projects</h2>
      <div className='grid md:grid-cols-2 gap-8'>
        {projects.map((project) => (
          <div
            key={project.title}
            className='p-8 rounded-lg border border-gray-200 dark:border-gray-700
            hover:border-blue-500 dark:hover:border-blue-500 transition-all duration-200
            flex flex-col bg-gray-50 dark:bg-gray-800'
          >
            <h3 className='text-xl font-semibold text-gray-900 dark:text-white mb-4 leading-snug'>
              {project.title}
            </h3>

            <p className='text-gray-600 dark:text-gray-300 mb-6 leading-relaxed'>
              {project.description}
            </p>

            <div className='flex flex-wrap gap-2 mb-6'>
              {project.tech.map((tech) => (
                <span
                  key={tech}
                  className='px-4 py-1.5 text-sm bg-gray-100 dark:bg-gray-800
                  text-gray-700 dark:text-gray-300 rounded-full font-medium'
                >
                  {tech}
                </span>
              ))}
            </div>

            <a
              href={project.link}
              className='text-blue-600 hover:text-blue-700 dark:text-blue-400
              dark:hover:text-blue-300 font-medium inline-flex items-center
              transition-colors duration-200 mt-auto group'
            >
              View Project {` `}
              <span className='ml-1 transform transition-transform group-hover:translate-x-0.5'>
                →
              </span>
            </a>
          </div>
        ))}
      </div>
    </section>
  )
}
