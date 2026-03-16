// app/page.tsx

import SectionHeader from '@/components/ui/SectionHeader'
import RevealWrapper from '@/components/ui/RevealWrapper'
import Card from '@/components/ui/Card'
import ExperienceCard from '@/components/sections/ExperienceCard'
import ProjectCard from '@/components/sections/ProjectCard'
import Typewriter from '@/components/ui/Typewriter'
import { getExperience, getProjects, getSkills, getEducation } from '@/lib/data'

export default function HomePage() {
  const experience = getExperience()
  const projects   = getProjects()
  const skills     = getSkills()
  const education  = getEducation()

  const categoryIcons: Record<string, string> = {
    'Languages':          '✦',
    'Frameworks & Tools': '⚙',
    'Core Concepts':      '◈',
  }

  return (
    <>
      {/* ── HERO ── */}
      <section className="min-h-[90vh] flex flex-col justify-center
                          max-w-5xl mx-auto px-8 md:px-16 pb-12">
        <p className="font-body text-xs text-muted dark:text-zinc-500
                      tracking-widest uppercase mb-5
                      opacity-0 animate-fade-up-d1">
          Software Engineer · New York
        </p>

        <h1
          className="font-display font-bold leading-[0.95] tracking-tight mb-4
                     text-ink dark:text-zinc-100
                     opacity-0 animate-fade-up-d2"
          style={{ fontSize: 'clamp(3rem, 9vw, 6.5rem)' }}
        >
          Belle<br />
          <span
            className="italic"
            style={{ WebkitTextStroke: '1.5px #d4c8be', color: 'transparent' }}
          >
            Zheng.
          </span>
        </h1>

        <div className="flex flex-wrap items-center gap-2 mb-10 opacity-0 animate-fade-up-d3">
          <span className="font-body text-base text-ink2 dark:text-zinc-400 font-light">
            CS grad from Stony Brook —
          </span>
          <Typewriter />
        </div>

        <div className="flex flex-wrap gap-3 opacity-0 animate-fade-up-d3">
          <a
            href="https://linkedin.com/in/belle-zheng"
            target="_blank" rel="noopener noreferrer"
            className="font-body text-sm font-medium
                       bg-mint dark:bg-green-900
                       text-green-900 dark:text-green-200
                       border border-mint dark:border-green-700
                       px-5 py-2.5 rounded-full shadow-sm
                       hover:bg-green-200 dark:hover:bg-green-800 transition-colors"
          >
            LinkedIn ↗
          </a>
          <a
            href="#experience"
            className="font-body text-sm
                       text-ink2 dark:text-zinc-300
                       border border-border2 dark:border-zinc-700
                       px-5 py-2.5 rounded-full
                       hover:border-mint dark:hover:border-mint
                       hover:text-ink dark:hover:text-zinc-100
                       hover:bg-mint/10 dark:hover:bg-mint/10
                       transition-colors"
          >
            View Experience
          </a>
          <a
            href="mailto:belzheng@cs.stonybrook.edu"
            className="font-body text-sm
                       text-ink2 dark:text-zinc-300
                       border border-border2 dark:border-zinc-700
                       px-5 py-2.5 rounded-full
                       hover:border-mint dark:hover:border-mint
                       hover:text-ink dark:hover:text-zinc-100
                       hover:bg-mint/10 dark:hover:bg-mint/10
                       transition-colors"
          >
            Say Hello
          </a>
        </div>

        <div className="flex flex-wrap gap-10 mt-16 pt-8
                        border-t border-border dark:border-zinc-800
                        opacity-0 animate-fade-up-d4">
          {[
            { num: '3.87',      label: 'GPA · Summa Cum Laude' },
            { num: '3 summers', label: 'at National Grid' },
            { num: '9+',        label: 'Languages' },
          ].map(({ num, label }) => (
            <div key={label}>
              <div className="font-display text-2xl font-bold text-ink dark:text-zinc-100">
                {num}
              </div>
              <div className="font-body text-xs text-muted dark:text-zinc-500 mt-0.5">
                {label}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── ABOUT ── */}
      <section id="about" className="max-w-5xl mx-auto px-8 md:px-16 py-24">
        <RevealWrapper>
          <SectionHeader num="01" title="About" />
        </RevealWrapper>

        <div className="grid md:grid-cols-2 gap-10">
          <RevealWrapper delayIndex={1}>
            <div className="space-y-4 font-body text-sm text-ink2 dark:text-zinc-400 leading-relaxed">
              <p>
                Hi! I'm Belle — a{' '}
                <strong className="text-ink dark:text-zinc-200 font-medium">
                  Computer Science graduate from Stony Brook University
                </strong>
                , class of December 2025, finishing with a 3.87 GPA and Summa Cum Laude honors.
              </p>
              <p>
                Over three summers I interned at{' '}
                <strong className="text-ink dark:text-zinc-200 font-medium">National Grid</strong>,
                shipping production software across the full stack — C# email pipelines, iOS features,
                CI/CD automation, and internal dashboards — all within cross-functional Agile teams.
              </p>
              <p>
                I'm drawn to hard problems at the intersection of systems and product. My capstone was
                a{' '}
                <strong className="text-ink dark:text-zinc-200 font-medium">
                  peer-to-peer blockchain file-sharing platform
                </strong>{' '}
                in Rust and TypeScript — complete with DHT peer discovery, Ethereum integration, and
                a live mining dashboard.
              </p>
              <p>
                I'm a US Citizen based in New York and open to new software engineering opportunities.
              </p>
            </div>
          </RevealWrapper>

          <RevealWrapper delayIndex={2}>
            <div className="space-y-3">
              {[
                { icon: '🎓', key: 'Education',           val: 'B.S. Computer Science — Stony Brook University' },
                { icon: '📍', key: 'Location',            val: 'New York, USA · Open to Relocation' },
                { icon: '📬', key: 'Email',               val: 'belzheng@cs.stonybrook.edu' },
                { icon: '🔗', key: 'LinkedIn',            val: 'linkedin.com/in/belle-zheng' },
                { icon: '🇺🇸', key: 'Work Authorization', val: 'US Citizen · No Sponsorship Required' },
              ].map(({ icon, key, val }) => (
                <div
                  key={key}
                  className="flex gap-3 items-start p-3.5
                             bg-bg2 dark:bg-zinc-800/60
                             border border-border dark:border-zinc-700
                             rounded-xl
                             hover:border-mint dark:hover:border-mint
                             hover:bg-mint/10 dark:hover:bg-mint/10
                             transition-colors"
                >
                  <span className="text-base mt-0.5 flex-shrink-0">{icon}</span>
                  <div>
                    <div className="font-body text-[10px] text-muted dark:text-zinc-500
                                    uppercase tracking-widest mb-0.5">
                      {key}
                    </div>
                    <div className="font-body text-sm text-ink dark:text-zinc-200">{val}</div>
                  </div>
                </div>
              ))}
            </div>
          </RevealWrapper>
        </div>
      </section>

      {/* ── EXPERIENCE ── */}
      <section id="experience" className="max-w-5xl mx-auto px-8 md:px-16 py-24">
        <RevealWrapper>
          <SectionHeader num="02" title="Experience" />
        </RevealWrapper>

        <div className="space-y-6">
          {experience.map((job, i) => (
            <RevealWrapper key={job.id} delayIndex={i % 4 as 0 | 1 | 2 | 3}>
              <ExperienceCard job={job} />
            </RevealWrapper>
          ))}
        </div>
      </section>

      {/* ── PROJECTS ── */}
      <section id="projects" className="max-w-5xl mx-auto px-8 md:px-16 py-24">
        <RevealWrapper>
          <SectionHeader num="03" title="Projects" />
        </RevealWrapper>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, i) => (
            <RevealWrapper key={project.id} delayIndex={i % 4 as 0 | 1 | 2 | 3}>
              <ProjectCard project={project} />
            </RevealWrapper>
          ))}
        </div>
      </section>

      {/* ── SKILLS ── */}
      <section id="skills" className="max-w-5xl mx-auto px-8 md:px-16 py-24">
        <RevealWrapper>
          <SectionHeader num="04" title="Skills" />
        </RevealWrapper>

        <div className="grid md:grid-cols-3 gap-6">
          {skills.map((group, i) => (
            <RevealWrapper key={group.category} delayIndex={i % 4 as 0 | 1 | 2 | 3}>
              <Card className="p-6 h-full">
                <div className="flex items-center gap-2 mb-5">
                  <span className="text-mint font-body text-sm">
                    {categoryIcons[group.category] ?? '·'}
                  </span>
                  <h3 className="font-body text-sm font-medium text-ink2 dark:text-zinc-300">
                    {group.category}
                  </h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {group.items.map(item => (
                    <span
                      key={item}
                      className="font-body text-sm
                                 text-ink2 dark:text-zinc-300
                                 bg-bg2 dark:bg-zinc-800
                                 border border-border dark:border-zinc-700
                                 px-3 py-1 rounded-full cursor-default
                                 hover:bg-mint/20 dark:hover:bg-mint/10
                                 hover:border-mint dark:hover:border-mint
                                 hover:text-green-800 dark:hover:text-green-300
                                 transition-colors"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </Card>
            </RevealWrapper>
          ))}
        </div>
      </section>

      {/* ── EDUCATION ── */}
      <section id="education" className="max-w-5xl mx-auto px-8 md:px-16 py-24">
        <RevealWrapper>
          <SectionHeader num="05" title="Education" />
        </RevealWrapper>

        <div className="space-y-6">
          {education.map((edu, i) => (
            <RevealWrapper key={edu.id} delayIndex={i % 4 as 0 | 1 | 2 | 3}>
              <Card className="p-8">
                <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-6">
                  <div className="flex-1">
                    <h2 className="font-display text-2xl font-bold text-ink dark:text-zinc-100 mb-1">
                      {edu.school}
                    </h2>
                    <p className="font-body text-sm text-purple-600 dark:text-purple-400 mb-1">
                      {edu.degree}
                    </p>
                    <p className="font-body text-xs text-muted dark:text-zinc-500">
                      {edu.dates}
                    </p>

                    {edu.coursework && edu.coursework.length > 0 && (
                      <div className="mt-6">
                        <p className="font-body text-xs text-muted dark:text-zinc-500
                                      uppercase tracking-widest mb-3">
                          Relevant Coursework
                        </p>
                        <div className="flex flex-wrap gap-2">
                          {edu.coursework.map(course => (
                            <span
                              key={course}
                              className="font-body text-xs
                                         bg-bg2 dark:bg-zinc-800
                                         border border-border dark:border-zinc-700
                                         text-ink2 dark:text-zinc-300
                                         px-3 py-1 rounded-full"
                            >
                              {course}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>

                  {edu.gpa && (
                    <div className="md:text-right flex-shrink-0">
                      <div className="font-display text-5xl font-bold text-ink dark:text-zinc-100 leading-none">
                        {edu.gpa}
                      </div>
                      <div className="font-body text-xs text-muted dark:text-zinc-500 mt-1">GPA</div>
                      {edu.honors && (
                        <div className="font-serif italic text-sm text-purple-600 dark:text-purple-400 mt-1">
                          {edu.honors}
                        </div>
                      )}
                    </div>
                  )}
                </div>
              </Card>
            </RevealWrapper>
          ))}
        </div>
      </section>
    </>
  )
}
