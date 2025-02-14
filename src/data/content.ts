import { Project, Service, Technology } from '@/types'
import { SiLaravel, SiReact, SiSymfony } from '@icons-pack/react-simple-icons'

export const services: Service[] = [
  {
    title: 'Backend/APIs',
    description:
      'I build robust, scalable and maintainable REST APIs for your web or mobile applications using modern technologies following best practices.',
  },
  {
    title: 'Web Applications',
    description:
      'I build responsive and elegant web applications using modern frameworks. UX is as important as UI, so I make sure your web application is accessible.',
  },
  {
    title: 'Consulting',
    description:
      "Not sure if you're doing things the right way? I've been working as a web developer for 4 years now. I can come in and help your team be on the right track and deliver faster.",
  },
]

export const projects: Project[] = [
  {
    title: 'Kaherecode',
    description:
      'A community platform for developers to learn and share programming knowledge. Built with Laravel and React.',
    link: 'https://kaherecode.com',
    tech: ['Laravel', 'React', 'Tailwind'],
  },
  {
    title: 'IMS',
    description:
      'A marketplace for real estate and ads management. A complete solution for property listings and user management.',
    link: 'https://ims.com',
    tech: ['Laravel', 'Alpine.js', 'Tailwind'],
  },
]

export const technologies: Technology[] = [
  {
    name: 'Symfony',
    icon: SiSymfony,
    years: 4,
  },
  {
    name: 'Laravel',
    icon: SiLaravel,
    years: 3,
  },
  {
    name: 'React',
    icon: SiReact,
    years: 2,
  },
]
