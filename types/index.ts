// types/index.ts
// Single source of truth for all data shapes used across the portfolio.
// When you add a new field to a JSON file, add it here first.

export interface Experience {
  id: string
  company: string
  role: string
  dates: string
  duration: string
  highlights: string[]
  /** Optional: link to company website */
  url?: string
  /** Optional: tech tags shown on the card */
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
  /** Optional: live demo URL */
  demo_url?: string
  /** Optional: GitHub repo URL */
  repo_url?: string
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

export interface NavLink {
  label: string
  href: string
}
