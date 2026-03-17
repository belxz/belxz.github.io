// components/sections/ExperienceCard.tsx
import type { Experience } from '@/types'
import Card from '@/components/ui/Card'
import Tag from '@/components/ui/Tag'

interface Props { job: Experience }

export default function ExperienceCard({ job }: Props) {
  return (
    <Card className="p-8 relative overflow-hidden group">
      {/* Accent bar — cyan→pink in both modes, just different shades */}
      <div className="absolute left-0 top-4 bottom-4 w-[3px] rounded-full
                      bg-gradient-to-b from-[#a8dadc] to-[#ffc1cc]
                      dark:from-dark-cyan dark:to-dark-pink
                      scale-y-0 group-hover:scale-y-100
                      transition-transform duration-300 origin-bottom" />

      <div className="flex flex-wrap justify-between items-start gap-3 mb-5">
        <div>
          <h3 className="font-display text-xl font-bold text-ink dark:text-dark-ink">
            {job.url
              ? <a href={job.url} target="_blank" rel="noopener noreferrer"
                   className="hover:text-[#b39cd0] dark:hover:text-dark-cyan transition-colors">
                  {job.company}
                </a>
              : job.company}
          </h3>
          <p className="font-body text-sm text-[#6b4a9a] dark:text-dark-lavender mt-1">
            {job.role}
          </p>
        </div>

        <div className="flex flex-col items-end gap-2">
          <span className="font-body text-xs
                           text-muted dark:text-dark-muted
                           bg-bg2 dark:bg-dark-bg2
                           border border-border dark:border-dark-border
                           px-3 py-1 rounded-full whitespace-nowrap">
            {job.dates}
          </span>
          <span className="font-body text-xs
                           text-[#2a7a7c] dark:text-dark-bg
                           bg-[#e8f8f9] dark:bg-dark-cyan
                           border border-[#a8dadc] dark:border-dark-cyan
                           px-3 py-1 rounded-full">
            {job.duration}
          </span>
        </div>
      </div>

      {job.tags && job.tags.length > 0 && (
        <div className="flex flex-wrap gap-2 mb-4">
          {job.tags.map(t => <Tag key={t} label={t} variant="cyan" />)}
        </div>
      )}

      <ul className="space-y-3">
        {job.highlights.map((h, i) => (
          <li key={i} className="font-body text-sm text-ink2 dark:text-dark-ink2
                                  leading-relaxed pl-5 relative">
            <span className="absolute left-0 top-[0.45rem] text-[#a8dadc] dark:text-dark-cyan text-[8px]">
              ◆
            </span>
            {h}
          </li>
        ))}
      </ul>
    </Card>
  )
}
