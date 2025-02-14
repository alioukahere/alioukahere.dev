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
    title: 'ScaniFood',
    description:
      'A cloud-based solution that enables restaurants to create digital menus accessible via QR codes.',
    link: 'https://scanifood.com',
    tech: ['Symfony', 'React', 'Tailwind'],
  },
  {
    title: 'Kaherecode',
    description:
      'A community platform for developers to learn and share programming knowledge.',
    link: 'https://kahere.academy',
    tech: ['Symfony', 'PHP8', 'Tailwind'],
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
