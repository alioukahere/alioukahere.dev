'use client'

import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import HeroSection from '@/components/home/HeroSection'
import ServicesSection from '@/components/home/ServicesSection'
import ProjectsSection from '@/components/home/ProjectsSection'
import BlogSection from '@/components/home/BlogSection'
import TechnologiesSection from '@/components/home/TechnologiesSection'
import NewsletterSection from '@/components/home/NewsletterSection'

export default function Home() {
  return (
    <>
      <Header />

      <main className='max-w-6xl mx-auto px-4'>
        <HeroSection />
        <ServicesSection />
        <ProjectsSection />
        <BlogSection />
        <TechnologiesSection />
        <NewsletterSection />
      </main>

      <Footer />
    </>
  )
}
