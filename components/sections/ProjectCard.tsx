// components/sections/ProjectCard.tsx
'use client'
import type { Project } from '@/types'
import Link from 'next/link'
import Card from '@/components/ui/Card'
import Tag from '@/components/ui/Tag'


interface Props { project: Project }

export default function ProjectCard({ project }: Props) {
  const hasDetail = project.screenshots && project.screenshots.length > 0
  const cardContent = (
    <Card className={`p-7 flex flex-col gap-4 h-full ${hasDetail ? 'cursor-pointer' : ''}`}>
      <div className="flex justify-between items-start">
        <span className="text-3xl">{project.icon}</span>
        <div className="flex items-center gap-2 flex-wrap justify-end">
          {project.repo_url && (
            <a href={project.repo_url}
               target="_blank" rel="noopener noreferrer"
               onClick={e => e.stopPropagation()}
               className="font-body text-xs
                          text-muted dark:text-dark-muted
                          hover:text-ink dark:hover:text-dark-cyan
                          border border-border dark:border-dark-border
                          hover:border-[#a8dadc] dark:hover:border-dark-cyan
                          rounded-full px-3 py-1 transition-colors">
              GitHub ↗
            </a>
          )}
          {project.demo_url && (
            <a href={project.demo_url}
               target="_blank" rel="noopener noreferrer"
               onClick={e => e.stopPropagation()}
               className="font-body text-xs
                          text-white dark:text-dark-bg
                          bg-[#b39cd0] dark:bg-dark-lavender
                          hover:bg-[#a08bc0] dark:hover:opacity-90
                          border border-[#b39cd0] dark:border-dark-lavender
                          rounded-full px-3 py-1 transition-colors">
              Live ↗
            </a>
          )}
          <span className="font-body text-xs text-muted dark:text-dark-muted">
            {project.dates}
          </span>
        </div>
      </div>

      <h3 className="font-display text-lg font-bold text-ink dark:text-dark-ink">
        {project.name}
      </h3>

      <p className="font-body text-sm text-ink2 dark:text-dark-ink2 leading-relaxed flex-1">
        {project.description}
      </p>

      <div className="flex flex-wrap gap-2">
        {project.tags.map(t => (
          <Tag key={t} label={t}
               variant={project.highlight_tags.includes(t) ? 'cyan' : 'default'} />
        ))}
      </div>

      {/* Subtle hint that card is clickable */}
      {hasDetail && (
        <div className="flex items-center gap-1 font-body text-xs
                        text-[#2a7a7c] dark:text-dark-cyan mt-1">
          View project →
        </div>
      )}
    </Card>
  )

  return hasDetail ? (
    <Link href={`/projects/${project.id}`} className="block">
      {cardContent}
    </Link>
  ) : (
    cardContent
  )
}

