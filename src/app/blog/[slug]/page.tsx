import { redirect } from 'next/navigation'
import { defaultLocale } from '@/lib/i18n'

interface BlogPostRedirectProps {
  params: Promise<{ slug: string }>
}

export default async function BlogPostRedirect({
  params,
}: BlogPostRedirectProps) {
  const { slug } = await params
  redirect(`/${defaultLocale}/blog/${slug}`)
}
