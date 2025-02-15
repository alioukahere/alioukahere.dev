import { SITE_NAME, SITE_URL, SOCIAL_LINKS } from '@/constants'

export default function PersonSchema() {
  return (
    <script
      type='application/ld+json'
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'Person',
          name: SITE_NAME,
          jobTitle: 'Full Stack Web Developer',
          url: SITE_URL,
          image: `${SITE_URL}/images/alioukahere.png`,
          sameAs: [
            SOCIAL_LINKS.github,
            SOCIAL_LINKS.linkedin,
            SOCIAL_LINKS.twitter,
          ],
          knowsAbout: [
            'PHP',
            'JavaScript',
            'Laravel',
            'Symfony',
            'React',
            'Full Stack Development',
          ],
          worksFor: {
            '@type': 'Organization',
            name: 'Cauridor',
            url: 'https://cauridor.com',
          },
        }),
      }}
    />
  )
}
