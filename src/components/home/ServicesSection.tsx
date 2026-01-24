interface ServicesSectionProps {
  readonly translations: {
    title: string
    description: string
    items: {
      backend: { title: string; description: string }
      webApps: { title: string; description: string }
      consulting: { title: string; description: string }
    }
  }
}

export default function ServicesSection({ translations }: ServicesSectionProps) {
  const services = [
    translations.items.backend,
    translations.items.webApps,
    translations.items.consulting,
  ]

  return (
    <section className='section-padding border-t border-gray-200 dark:border-gray-800'>
      <h2 className='section-title'>{translations.title}</h2>
      <p className='section-description'>{translations.description}</p>
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
