interface HeroSectionProps {
  readonly translations: {
    greeting: string
    description: string
  }
  readonly common: {
    getInTouch: string
  }
}

export default function HeroSection({ translations, common }: HeroSectionProps) {
  return (
    <section className='section-padding'>
      <div className='max-w-3xl'>
        <h1 className='text-4xl md:text-5xl font-bold mb-6 leading-tight'>
          {translations.greeting} <span role="img" aria-label="wave">&#128075;</span>
        </h1>
        <p className='text-xl md:text-2xl text-gray-600 dark:text-gray-300 leading-relaxed mb-8'>
          {translations.description}
        </p>
        <a href='mailto:hello@alioukahere.dev' className='btn'>
          {common.getInTouch}
        </a>
      </div>
    </section>
  )
}
