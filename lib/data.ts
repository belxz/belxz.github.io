// lib/data.ts
// All data is read at BUILD TIME via Next.js Server Components.
// No fetch() calls, no loading states — just fast static pages.
// To add new data: edit the JSON files in /data, then `npm run build`.

import type { Experience, Project, SkillGroup, Education } from '@/types'

import experienceData from '@/data/experience.json'
import projectsData   from '@/data/projects.json'
import skillsData     from '@/data/skills.json'
import educationData  from '@/data/education.json'

export function getExperience(): Experience[] {
  return experienceData as Experience[]
}

export function getProjects(): Project[] {
  return projectsData as Project[]
}

export function getSkills(): SkillGroup[] {
  return skillsData as SkillGroup[]
}

export function getEducation(): Education[] {
  return educationData as Education[]
}

// Convenience: get a single item by id (useful for detail pages)
export function getExperienceById(id: string): Experience | undefined {
  return getExperience().find(e => e.id === id)
}

export function getProjectById(id: string): Project | undefined {
  return getProjects().find(p => p.id === id)
}
