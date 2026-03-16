// components/sections/ExperienceCard.tsx

import type { Experience } from '@/types'
import Card from '@/components/ui/Card'
import Tag from '@/components/ui/Tag'

interface Props { job: Experience }

export default function ExperienceCard({ job }: Props) {
  return (
    <Card className="p-8 relative overflow-hidden group">
      {/* Accent bar */}
      <div className="absolute left-0 top-4 bottom-4 w-[3px] rounded-full
                      bg-gradient-to-b from-mint to-lavender
                      scale-y-0 group-hover:scale-y-100
                      transition-transform duration-300 origin-bottom" />

      <div className="flex flex-wrap justify-between items-start gap-3 mb-5">
        <div>
          <h3 className="font-display text-xl font-bold text-ink dark:text-zinc-100">
            {job.url
              ? <a href={job.url} target="_blank" rel="noopener noreferrer"
                   className="hover:text-green-700 dark:hover:text-mint transition-colors">
                  {job.company}
                </a>
              : job.company
            }
          </h3>
          <p className="font-body text-sm text-purple-600 dark:text-purple-400 mt-1">
            {job.role}
          </p>
        </div>

        <div className="flex flex-col items-end gap-2">
          <span className="font-body text-xs text-muted dark:text-zinc-500
                           bg-bg2 dark:bg-zinc-800
                           border border-border dark:border-zinc-700
                           px-3 py-1 rounded-full whitespace-nowrap">
            {job.dates}
          </span>
          <span className="font-body text-xs
                           text-green-700 dark:text-green-300
                           bg-mint-light dark:bg-green-950
                           border border-mint dark:border-green-800
                           px-3 py-1 rounded-full">
            {job.duration}
          </span>
        </div>
      </div>

      {job.tags && job.tags.length > 0 && (
        <div className="flex flex-wrap gap-2 mb-4">
          {job.tags.map(t => <Tag key={t} label={t} variant="mint" />)}
        </div>
      )}

      <ul className="space-y-3">
        {job.highlights.map((h, i) => (
          <li key={i} className="font-body text-sm text-ink2 dark:text-zinc-400
                                  leading-relaxed pl-5 relative">
            <span className="absolute left-0 top-[0.45rem] text-mint text-[8px]">◆</span>
            {h}
          </li>
        ))}
      </ul>
    </Card>
  )
}
