import { Project, Service, Technology } from '@/types'
import { SiLaravel, SiReact, SiSymfony } from '@icons-pack/react-simple-icons'

export const services: Service[] = [
  {
    title: 'Backend/APIs',
    description:
      "I build the engine that powers your apps. Whether you need a solid API for your mobile app or a robust backend system, I'll help you create something that's both powerful and maintainable.",
  },
  {
    title: 'Web Applications',
    description:
      'Need a website that works beautifully and loads fast? I create modern web applications that your users will love to use, with special attention to making them accessible to everyone.',
  },
  {
    title: 'Consulting',
    description:
      'Not sure about the technical side of things? With 6+ years of experience building web applications, I can help guide your project in the right direction. Think of me as your technical co-pilot.',
  },
]

export const projects: Project[] = [
  {
    title: 'ScaniFood',
    description:
      'A smart solution that helps restaurants create digital menus with QR codes. No more printing paper menus - just scan and order!',
    link: 'https://scanifood.com',
    tech: ['Symfony', 'React', 'Tailwind'],
  },
  {
    title: 'Kaherecode',
    description:
      'A friendly space where developers can learn and share what they know. Because learning to code is better when we help each other.',
    link: 'https://kahere.academy',
    tech: ['Symfony', 'PHP8', 'Tailwind'],
  },
]

export const technologies: Technology[] = [
  {
    name: 'Symfony',
    icon: SiSymfony,
    years: 6,
  },
  {
    name: 'React',
    icon: SiReact,
    years: 3,
  },
  {
    name: 'Laravel',
    icon: SiLaravel,
    years: 2,
  },
]
