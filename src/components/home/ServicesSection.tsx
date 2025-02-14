import { services } from '@/data/content'

export default function ServicesSection() {
  return (
    <section className='section-padding border-t border-gray-200 dark:border-gray-800'>
      <h2 className='section-title'>How I Can Help</h2>
      <p className='section-description'>
        I can work with you to help you build your web projects from scratch or
        come in as a consultant.
      </p>
      <div className='grid md:grid-cols-3 gap-8'>
        {services.map((service) => (
          <div
            key={service.title}
            className='p-8 rounded-lg bg-gray-50 dark:bg-gray-800'
          >
            <h3 className='text-xl font-semibold mb-4 leading-snug'>
              {service.title}
            </h3>
            <p className='text-gray-600 dark:text-gray-300 leading-relaxed'>
              {service.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}
