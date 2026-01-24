import { Inter, JetBrains_Mono } from 'next/font/google'
import './globals.css'
import PersonSchema from '@/components/PersonSchema'
import FathomAnalytics from '@/components/FathomAnalytics'

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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang='en'
      className={`${inter.variable} ${jetbrainsMono.variable}`}
      suppressHydrationWarning
    >
      <body className='font-sans antialiased min-h-screen bg-gray-100 dark:bg-gray-900 transition-colors duration-200'>
        <FathomAnalytics />
        <PersonSchema />
        {children}
      </body>
    </html>
  )
}
