import HeroSection from '@/components/home/HeroSection'
import ServicesSection from '@/components/home/ServicesSection'
import ProjectsSection from '@/components/home/ProjectsSection'
import BlogSection from '@/components/home/BlogSection'
import TechnologiesSection from '@/components/home/TechnologiesSection'
import NewsletterSection from '@/components/home/NewsletterSection'
import { getAllPosts } from '@/lib/mdx'

export default async function Home() {
  const posts = await getAllPosts()

  return (
    <main className='max-w-6xl mx-auto px-4'>
      <HeroSection />
      <ServicesSection />
      <ProjectsSection />
      <BlogSection posts={posts.slice(0, 4)} />
      <TechnologiesSection />
      <NewsletterSection />
    </main>
  )
}
