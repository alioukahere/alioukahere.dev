import type { Config } from 'tailwindcss'
import typography from '@tailwindcss/typography'

export default {
  darkMode: 'class',
  content: [
    './src/pages/**/*.{astro,ts}',
    './src/layouts/**/*.astro',
    './src/components/**/*.astro',
    './src/content/**/*.mdx',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['Fira Code Variable', 'monospace'],
      },
      typography: {
        DEFAULT: {
          css: {
            color: '#374151',
            lineHeight: '1.75',
            p: {
              marginTop: '1.5em',
              marginBottom: '1.5em',
            },
            'h1, h2, h3, h4': {
              fontWeight: '700',
              lineHeight: '1.25',
              marginTop: '2em',
              marginBottom: '1em',
            },
            blockquote: {
              borderLeftColor: '#3b82f6',
              fontStyle: 'italic',
              color: '#6b7280',
            },
            hr: {
              borderColor: '#e5e7eb',
              marginTop: '2em',
              marginBottom: '2em',
            },
            strong: {
              color: '#111827',
              fontWeight: '600',
            },
            'thead th': {
              color: '#111827',
              fontWeight: '600',
              borderBottomColor: '#d1d5db',
            },
            'tbody td': {
              borderBottomColor: '#e5e7eb',
            },
            'code::before': {
              content: '""',
            },
            'code::after': {
              content: '""',
            },
            ':not(pre) > code': {
              borderRadius: '0.125rem',
              backgroundColor: 'rgb(219 234 254 / 0.8)',
              color: '#1d4ed8',
              padding: '0.125rem 0.375rem',
              fontSize: '0.875rem',
              fontFamily: 'Fira Code Variable, monospace',
            },
          },
        },
        invert: {
          css: {
            '--tw-prose-invert-bullets': '#9ca3af',
            color: '#e5e7eb',
            blockquote: {
              borderLeftColor: '#60a5fa',
              color: '#9ca3af',
            },
            hr: {
              borderColor: '#374151',
            },
            strong: {
              color: '#f9fafb',
            },
            'thead th': {
              color: '#f9fafb',
              borderBottomColor: '#4b5563',
            },
            'tbody td': {
              borderBottomColor: '#374151',
            },
            ':not(pre) > code': {
              backgroundColor: 'rgb(30 58 138 / 0.3)',
              color: '#93c5fd',
            },
          },
        },
      },
    },
  },
  plugins: [typography],
} satisfies Config
