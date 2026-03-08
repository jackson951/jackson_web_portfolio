export interface Project {
  id: string
  title: string
  description: string
  technologies: string[]
  image: string
  liveUrl?: string
  githubUrl: string
  category: 'web' | 'mobile' | 'desktop'
}

export interface Skill {
  id: string
  name: string
  level: number // 0-100
  category: 'frontend' | 'backend' | 'tools' | 'other'
}

export interface Experience {
  id: string
  title: string
  company: string
  period: string
  description: string
  technologies: string[]
}

export interface Education {
  id: string
  degree: string
  institution: string
  period: string
  description?: string
}

export interface ContactFormData {
  name: string
  email: string
  subject: string
  message: string
}

export interface ThemeContextType {
  theme: 'dark' | 'light'
  toggleTheme: () => void
}