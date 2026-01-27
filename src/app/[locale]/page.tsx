import HeroSection from '@/components/home/HeroSection'
import ServicesSection from '@/components/home/ServicesSection'
import ProjectsSection from '@/components/home/ProjectsSection'
import BlogSection from '@/components/home/BlogSection'
import TechnologiesSection from '@/components/home/TechnologiesSection'
import { getAllPosts } from '@/lib/mdx'
import { getTranslations, isValidLocale, defaultLocale } from '@/lib/i18n'
import { SITE_NAME, SITE_URL } from '@/constants'
import type { Locale } from '@/types'
import type { Metadata } from 'next'

interface HomeProps {
  params: Promise<{ locale: string }>
}

export async function generateMetadata({
  params,
}: HomeProps): Promise<Metadata> {
  const { locale } = await params
  const validLocale: Locale = isValidLocale(locale) ? locale : defaultLocale
  const t = await getTranslations(validLocale)

  return {
    metadataBase: new URL(SITE_URL),
    title: `${SITE_NAME} | Full Stack Developer - PHP, Python, React`,
    description: t.hero.description,
    alternates: {
      canonical: `${SITE_URL}/${validLocale}`,
      languages: {
        en: `${SITE_URL}/en`,
        fr: `${SITE_URL}/fr`,
      },
    },
    openGraph: {
      title: `${SITE_NAME} | Full Stack Developer - PHP, Python, React`,
      description: t.hero.description,
      url: `${SITE_URL}/${validLocale}`,
      siteName: SITE_NAME,
      type: 'website',
      images: [
        {
          url: '/images/alioukahere.png',
          width: 1200,
          height: 630,
          alt: `${SITE_NAME} - Full Stack Developer`,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: `${SITE_NAME} | Full Stack Developer - PHP, Python, React`,
      description: t.hero.description,
      creator: '@alioukahere',
      images: ['/images/alioukahere.png'],
    },
  }
}

export default async function Home({ params }: HomeProps) {
  const { locale } = await params
  const validLocale: Locale = isValidLocale(locale) ? locale : defaultLocale
  const t = await getTranslations(validLocale)
  const posts = await getAllPosts(validLocale)

  return (
    <main className='max-w-6xl mx-auto px-4'>
      <HeroSection translations={t.hero} common={t.common} />
      <ServicesSection translations={t.services} />
      <ProjectsSection translations={t.projects} common={t.common} />
      <BlogSection
        posts={posts.slice(0, 4)}
        translations={t.blog}
        common={t.common}
        locale={validLocale}
        languageNames={t.language}
      />
      <TechnologiesSection translations={t.technologies} common={t.common} />
    </main>
  )
}
