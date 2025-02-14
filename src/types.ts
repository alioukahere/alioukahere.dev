export interface Project {
  title: string
  description: string
  link: string
  tech: string[]
}

export interface BlogPost {
  title: string
  category: string
  date: string
  excerpt: string
  slug: string
}

export interface Technology {
  name: string
  icon: React.ComponentType<{ className?: string }>
  years: number
}

export interface Service {
  title: string
  description: string
}
