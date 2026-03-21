// types/index.ts

export interface Experience {
  id: string
  company: string
  role: string
  dates: string
  duration: string
  highlights: string[]
  url?: string
  tags?: string[]
}

export interface Project {
  id: string
  icon: string
  name: string
  dates: string
  description: string
  tags: string[]
  highlight_tags: string[]
  demo_url?: string
  repo_url?: string
  screenshots?: string[]
  long_description?: string
}

export interface SkillGroup {
  category: string
  items: string[]
}

export interface Education {
  id: string
  school: string
  degree: string
  dates: string
  gpa?: string
  honors?: string
  coursework?: string[]
}
