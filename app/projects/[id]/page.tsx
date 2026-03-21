// app/projects/[id]/page.tsx
// Dynamic route — renders a detail page for any project that has screenshots.

import { notFound } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import type { Metadata } from 'next'
import { getProjects, getProjectById } from '@/lib/data'
import Tag from '@/components/ui/Tag'
import RevealWrapper from '@/components/ui/RevealWrapper'

// Required for Next.js static export — tells it which [id] pages to build
export function generateStaticParams() {
  return getProjects().map(p => ({ id: p.id }))
}

export function generateMetadata({ params }: { params: { id: string } }): Metadata {
  const project = getProjectById(params.id)
  if (!project) return {}
  return {
    title: `${project.name} — Belle Zheng`,
    description: project.description,
  }
}

export default function ProjectPage({ params }: { params: { id: string } }) {
  const project = getProjectById(params.id)
  if (!project) notFound()

  const hasScreenshots = project.screenshots && project.screenshots.length > 0

  return (
    <div className="no-sidebar max-w-4xl mx-auto px-8 md:px-16 py-16">

      {/* Back link */}
      <RevealWrapper>
        <Link href="/#projects"
              className="inline-flex items-center gap-2 font-body text-sm
                         text-muted dark:text-dark-muted
                         hover:text-ink dark:hover:text-dark-ink
                         transition-colors mb-10 group">
          <span className="group-hover:-translate-x-1 transition-transform">←</span>
          Back to Projects
        </Link>
      </RevealWrapper>

      {/* Header */}
      <RevealWrapper>
        <div className="mb-10">
          <div className="flex items-center gap-4 mb-4">
            <span className="text-5xl">{project.icon}</span>
            <div>
              <p className="font-body text-xs text-[#3a8a8c] dark:text-dark-cyan
                             tracking-widest uppercase mb-1">
                {project.dates}
              </p>
              <h1 className="font-display text-3xl md:text-4xl font-bold italic
                             text-ink dark:text-dark-ink leading-tight">
                {project.name}
              </h1>
            </div>
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-6">
            {project.tags.map(t => (
              <Tag key={t} label={t}
                   variant={project.highlight_tags.includes(t) ? 'cyan' : 'default'} />
            ))}
          </div>

          {/* Links */}
          <div className="flex flex-wrap gap-3">
            {project.demo_url && (
              <a href={project.demo_url} target="_blank" rel="noopener noreferrer"
                 className="font-body text-sm
                            text-white dark:text-dark-bg
                            bg-[#b39cd0] dark:bg-dark-lavender
                            border border-[#b39cd0] dark:border-dark-lavender
                            px-4 py-2 rounded-full
                            hover:bg-[#a08bc0] dark:hover:opacity-90 transition-colors">
                Live Demo ↗
              </a>
            )}
            {project.repo_url && (
              <a href={project.repo_url} target="_blank" rel="noopener noreferrer"
                 className="font-body text-sm
                            text-muted dark:text-dark-muted
                            border border-border dark:border-dark-border
                            hover:border-[#a8dadc] dark:hover:border-dark-cyan
                            hover:text-ink dark:hover:text-dark-ink
                            px-4 py-2 rounded-full transition-colors">
                GitHub ↗
              </a>
            )}
          </div>
        </div>
      </RevealWrapper>

      {/* Divider */}
      <div className="h-px bg-border dark:bg-dark-border mb-10" />

      {/* Description */}
      <RevealWrapper>
        <div className="mb-12">
          <h2 className="font-display text-xl font-bold italic text-ink dark:text-dark-ink mb-4">
            About this project
          </h2>
          <p className="font-body text-sm text-ink2 dark:text-dark-ink2 leading-relaxed mb-4">
            {project.long_description || project.description}
          </p>
        </div>
      </RevealWrapper>

      {/* Screenshots */}
      {hasScreenshots && (
        <RevealWrapper>
          <div>
            <h2 className="font-display text-xl font-bold italic text-ink dark:text-dark-ink mb-6">
              Screenshots
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {project.screenshots!.map((src, i) => (
                <RevealWrapper key={src} delayIndex={i % 4 as 0|1|2|3}>
                  <div className="relative rounded-2xl overflow-hidden
                                  border border-border dark:border-dark-border
                                  bg-bg2 dark:bg-dark-bg2
                                  shadow-sm dark:shadow-none
                                  hover:-translate-y-1 hover:shadow-md
                                  dark:hover:shadow-[0_6px_24px_rgba(0,0,0,0.35)]
                                  transition-all duration-250
                                  aspect-video">
                    <Image
                      src={src}
                      alt={`${project.name} screenshot ${i + 1}`}
                      fill
                      className="object-cover"
                    />
                  </div>
                </RevealWrapper>
              ))}
            </div>
          </div>
        </RevealWrapper>
      )}

      {/* Bottom back link */}
      <div className="mt-16 pt-8 border-t border-border dark:border-dark-border">
        <Link href="/#projects"
              className="inline-flex items-center gap-2 font-body text-sm
                         text-muted dark:text-dark-muted
                         hover:text-ink dark:hover:text-dark-ink
                         transition-colors group">
          <span className="group-hover:-translate-x-1 transition-transform">←</span>
          Back to Projects
        </Link>
      </div>
    </div>
  )
}
