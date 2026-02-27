import type { APIRoute } from 'astro'
import { SITE_URL } from '@/constants'

export const GET: APIRoute = () => {
  const body = `User-agent: *
Allow: /

User-agent: GPTBot
Disallow: /

Sitemap: ${SITE_URL}/sitemap-index.xml
`

  return new Response(body, {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  })
}
