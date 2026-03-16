// components/sections/ProjectCard.tsx

import type { Project } from '@/types'
import Card from '@/components/ui/Card'
import Tag from '@/components/ui/Tag'

interface Props { project: Project }

export default function ProjectCard({ project }: Props) {
  return (
    <Card className="p-7 flex flex-col gap-4">
      <div className="flex justify-between items-start">
        <span className="text-3xl">{project.icon}</span>
        <div className="flex items-center gap-2">
          {project.repo_url && (
            <a href={project.repo_url} target="_blank" rel="noopener noreferrer"
               className="font-body text-xs
                          text-muted dark:text-zinc-500
                          hover:text-ink dark:hover:text-zinc-200
                          border border-border dark:border-zinc-700
                          hover:border-border2 dark:hover:border-zinc-600
                          rounded-full px-3 py-1 transition-colors">
              GitHub ↗
            </a>
          )}
          {project.demo_url && (
            <a href={project.demo_url} target="_blank" rel="noopener noreferrer"
               className="font-body text-xs
                          text-green-700 dark:text-green-300
                          bg-mint-light dark:bg-green-950
                          hover:bg-mint dark:hover:bg-green-900
                          border border-mint dark:border-green-800
                          rounded-full px-3 py-1 transition-colors">
              Live ↗
            </a>
          )}
          <span className="font-body text-xs text-muted dark:text-zinc-500">
            {project.dates}
          </span>
        </div>
      </div>

      <h3 className="font-display text-lg font-bold text-ink dark:text-zinc-100">
        {project.name}
      </h3>

      <p className="font-body text-sm text-ink2 dark:text-zinc-400 leading-relaxed flex-1">
        {project.description}
      </p>

      <div className="flex flex-wrap gap-2">
        {project.tags.map(t => (
          <Tag
            key={t}
            label={t}
            variant={project.highlight_tags.includes(t) ? 'mint' : 'default'}
          />
        ))}
      </div>
    </Card>
  )
}
