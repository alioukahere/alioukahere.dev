import type { Metadata } from 'next'
import { Inter, JetBrains_Mono } from 'next/font/google'
import './globals.css'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import PersonSchema from '@/components/PersonSchema'
import FathomAnalytics from '@/components/FathomAnalytics'
import { SITE_NAME, SITE_URL } from '@/constants'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-jetbrains-mono',
})

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title:
    'Mamadou Aliou Diallo | Full Stack Developer - PHP, Python, React',
  description:
    'Full Stack Developer specializing in PHP, Python, and JavaScript. Building scalable web applications with Laravel, Symfony, Django, FastAPI, and React.',
  keywords: [
    'Full Stack Developer',
    'PHP',
    'Laravel',
    'Symfony',
    'React',
    'JavaScript',
    'Python',
    'Flask',
    'FastAPI',
    'Django',
    'Web Development',
    'Web Application',
    'SaaS Development',
    'SaaS Developer',
  ],
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title:
      'Mamadou Aliou Diallo | Full Stack Developer - PHP, Python, React',
    description:
      'Full Stack Developer specializing in PHP, Python, and JavaScript. Building scalable web applications with Laravel, Symfony, Django, FastAPI, and React.',
    url: SITE_URL,
    siteName: SITE_NAME,
    type: 'website',
    images: [
      {
        url: '/images/alioukahere.png',
        width: 1200,
        height: 630,
        alt: 'Mamadou Aliou Diallo - Full Stack Developer',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title:
      'Mamadou Aliou Diallo | Full Stack Developer - PHP, Python, React',
    description:
      'Full Stack Developer specializing in PHP, Python, and JavaScript. Building scalable web applications with Laravel, Symfony, Django, FastAPI, and React.',
    creator: '@alioukahere',
    images: ['/images/alioukahere.png'],
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en' className={`${inter.variable} ${jetbrainsMono.variable}`}>
      <body className='font-sans antialiased min-h-screen bg-gray-100 dark:bg-gray-900 transition-colors duration-200'>
        <FathomAnalytics />
        <PersonSchema />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
