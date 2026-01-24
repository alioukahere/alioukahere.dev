interface ProjectsSectionProps {
  readonly translations: {
    title: string
    items: {
      scanifood: { description: string }
      kaherecode: { description: string }
    }
  }
  readonly common: {
    viewProject: string
  }
}

const projects = [
  {
    key: 'scanifood' as const,
    title: 'ScaniFood',
    link: 'https://scanifood.com',
    tech: ['Symfony', 'React', 'Tailwind'],
  },
  {
    key: 'kaherecode' as const,
    title: 'Kaherecode',
    link: 'https://kahere.academy',
    tech: ['Symfony', 'PHP8', 'Tailwind'],
  },
]

export default function ProjectsSection({
  translations,
  common,
}: ProjectsSectionProps) {
  return (
    <section className='section-padding border-t border-gray-200 dark:border-gray-800'>
      <h2 className='section-title'>{translations.title}</h2>
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
              {translations.items[project.key].description}
            </p>

            <div className='flex flex-wrap gap-2 mb-6'>
              {project.tech.map((tech) => (
                <span
                  key={tech}
                  className='px-4 py-1.5 text-sm bg-gray-100 dark:bg-gray-700
                  text-gray-700 dark:text-gray-300 rounded-full font-medium'
                >
                  {tech}
                </span>
              ))}
            </div>

            <a
              href={project.link}
              className='font-medium inline-flex items-center duration-200 mt-auto group'
            >
              {common.viewProject}{' '}
              <span className='ml-1 transform transition-transform group-hover:translate-x-0.5'>
                &rarr;
              </span>
            </a>
          </div>
        ))}
      </div>
    </section>
  )
}
