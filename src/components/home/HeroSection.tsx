export default function HeroSection() {
  return (
    <section className='section-padding'>
      <div className='max-w-3xl'>
        <h1 className='text-4xl md:text-5xl font-bold mb-6 leading-tight'>
          Hi, {`I'm`} Mamadou Aliou Diallo 👋
        </h1>
        <p className='text-xl md:text-2xl text-gray-600 dark:text-gray-300 leading-relaxed mb-8'>
          A Full Stack Web Developer working with PHP and JavaScript. I build
          responsive and robust web applications using Symfony, Laravel, and
          React.
        </p>
        <a href='mailto:hello@alioukahere.dev' className='btn'>
          Get in touch!
        </a>
      </div>
    </section>
  )
}
