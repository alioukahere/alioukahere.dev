export default function HeroSection() {
  return (
    <section className='section-padding'>
      <div className='max-w-3xl'>
        <h1 className='text-4xl md:text-5xl font-bold mb-6 leading-tight'>
          Hi, {`I'm`} Aliou Diallo 👋
        </h1>
        <p className='text-xl md:text-2xl text-gray-600 dark:text-gray-300 leading-relaxed mb-8'>
          I help businesses build great web applications. As a Full Stack
          Developer, I work with PHP, Python, and JavaScript to create solutions
          that actually work for your needs, using Symfony, Laravel, Django,
          FastAPI, Flask, and React.
        </p>
        <a href='mailto:hello@alioukahere.dev' className='btn'>
          Get in touch!
        </a>
      </div>
    </section>
  )
}
