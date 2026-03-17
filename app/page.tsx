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
        <p className="font-body text-xs text-[#3a8a8c] dark:text-dark-cyan
                      tracking-widest uppercase mb-5 opacity-0 animate-fade-up-d1">
          Software Engineer · New York
        </p>

        <h1 className="font-display font-bold leading-[0.95] tracking-tight mb-4
                       text-ink dark:text-dark-ink opacity-0 animate-fade-up-d2"
            style={{ fontSize: 'clamp(3rem, 9vw, 6.5rem)' }}>
          Belle<br />
          <span className="italic"
                style={{ WebkitTextStroke: '1.5px #ecd6e8', color: 'transparent' }}>
            Zheng
          </span>
        </h1>

        <div className="flex flex-wrap items-center gap-2 mb-10 opacity-0 animate-fade-up-d3">
          <span className="font-body text-base text-ink2 dark:text-dark-ink2 font-light">
            CS grad from Stony Brook —
          </span>
          <Typewriter />
        </div>

        <div className="flex flex-wrap gap-3 opacity-0 animate-fade-up-d3">
          <a href="https://linkedin.com/in/belle-zheng"
             target="_blank" rel="noopener noreferrer"
             className="font-body text-sm font-medium
                        bg-[#b39cd0] dark:bg-dark-lavender
                        text-white dark:text-dark-bg
                        border border-[#b39cd0] dark:border-dark-lavender
                        px-5 py-2.5 rounded-full shadow-sm
                        hover:bg-[#a08bc0] dark:hover:opacity-90 transition-colors">
            LinkedIn ↗
          </a>
          <a href="/resume.pdf"
             target="_blank" rel="noopener noreferrer"
             className="font-body text-sm font-medium
                        bg-[#a8dadc] dark:bg-dark-cyan
                        text-[#3a8a8c] dark:text-dark-bg
                        border border-[#a8dadc] dark:border-dark-cyan
                        px-5 py-2.5 rounded-full shadow-sm
                        hover:bg-[#8ecbcd] dark:hover:opacity-90 transition-colors">
            Resume ↗
          </a>
          <a href="#experience"
             className="font-body text-sm
                        text-ink2 dark:text-dark-ink2
                        border border-border dark:border-dark-border
                        px-5 py-2.5 rounded-full
                        hover:border-[#b39cd0] dark:hover:border-dark-lavender
                        hover:bg-light-lav-dim dark:hover:bg-dark-lavender-dim
                        transition-colors">
            View Experience
          </a>
          <a href="#projects"
             className="font-body text-sm
                        text-ink2 dark:text-dark-ink2
                        border border-border dark:border-dark-border
                        px-5 py-2.5 rounded-full
                        hover:border-[#b39cd0] dark:hover:border-dark-lavender
                        hover:bg-light-lav-dim dark:hover:bg-dark-lavender-dim
                        transition-colors">
            View Projects
          </a>
        </div>

        <div className="flex flex-wrap gap-10 mt-16 pt-8
                        border-t border-border dark:border-dark-border
                        opacity-0 animate-fade-up-d4">
          {[
            { num: '3.87',      label: 'GPA · Summa Cum Laude' },
            { num: '3 summers', label: 'at National Grid' },
            { num: '9+',        label: 'Languages' },
          ].map(({ num, label }) => (
            <div key={label}>
              <div className="font-display text-2xl font-bold text-ink dark:text-dark-ink">{num}</div>
              <div className="font-body text-xs text-muted dark:text-dark-muted mt-0.5">{label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ── ABOUT ── */}
      <section id="about" className="max-w-5xl mx-auto px-8 md:px-16 py-24">
        <RevealWrapper><SectionHeader num="01" title="About" /></RevealWrapper>
        <div className="grid md:grid-cols-2 gap-10">
          <RevealWrapper delayIndex={1}>
            <div className="space-y-4 font-body text-sm text-ink2 dark:text-dark-ink2 leading-relaxed">
              <p>Hi! I'm Belle — a <strong className="text-ink dark:text-dark-ink font-medium">Computer Science graduate from Stony Brook University</strong>, class of December 2025, finishing with a 3.87 GPA and Summa Cum Laude honors.</p>
              <p>Over three summers I interned at <strong className="text-ink dark:text-dark-ink font-medium">National Grid</strong>, shipping production software across the full stack — C# email pipelines, iOS features, CI/CD automation, and internal dashboards — in cross-functional Agile teams.</p>
              <p>I'm drawn to hard problems at the intersection of systems and product. My capstone was a <strong className="text-ink dark:text-dark-ink font-medium">peer-to-peer blockchain file-sharing platform</strong> in Rust and TypeScript — complete with DHT peer discovery, Ethereum integration, and a live mining dashboard.</p>
              <p>I'm a US Citizen based in New York and open to new software engineering opportunities.</p>
            </div>
          </RevealWrapper>

          <RevealWrapper delayIndex={2}>
            <div className="space-y-3">
              {[
                { icon: '🎓', key: 'Education',           val: 'B.S. Computer Science — Stony Brook University' },
                { icon: '📍', key: 'Location',            val: 'New York, USA · Open to Relocation' },
                { icon: '📬', key: 'Email',               val: 'belzheng@cs.stonybrook.edu', href: 'mailto:belzheng@cs.stonybrook.edu' },
                { icon: '🔗', key: 'LinkedIn',            val: 'linkedin.com/in/belle-zheng', href: 'https://linkedin.com/in/belle-zheng' },
                { icon: '🇺🇸', key: 'Work Authorization', val: 'US Citizen · No Sponsorship Required' },
              ].map(({ icon, key, val, href }) => {
                const inner = (
                  <>
                    <span className="text-base mt-0.5 flex-shrink-0">{icon}</span>
                    <div>
                      <div className="font-body text-[10px] text-[#4a5fa0] dark:text-dark-cyan
                                      uppercase tracking-widest mb-0.5">{key}</div>
                      <div className="font-body text-sm text-ink dark:text-dark-ink">{val}</div>
                    </div>
                    {href && (
                      <span className="ml-auto text-muted dark:text-dark-muted text-xs self-center">↗</span>
                    )}
                  </>
                )

                const sharedClass = `
                  flex gap-3 items-start p-3.5
                  bg-bg2 dark:bg-dark-bg2
                  border border-border dark:border-dark-border rounded-xl
                  hover:border-[#8fa3d4] dark:hover:border-dark-cyan
                  hover:bg-[#eef2fb] dark:hover:bg-dark-cyan-dim
                  transition-colors w-full text-left
                `

                return href ? (
                  <a key={key} href={href}
                     target={href.startsWith('http') ? '_blank' : undefined}
                     rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                     className={sharedClass}>
                    {inner}
                  </a>
                ) : (
                  <div key={key} className={sharedClass}>
                    {inner}
                  </div>
                )
              })}
            </div>
          </RevealWrapper>
        </div>
      </section>

      {/* ── EXPERIENCE ── */}
      <section id="experience" className="max-w-5xl mx-auto px-8 md:px-16 py-24">
        <RevealWrapper><SectionHeader num="02" title="Experience" /></RevealWrapper>
        <div className="space-y-6">
          {experience.map((job, i) => (
            <RevealWrapper key={job.id} delayIndex={i % 4 as 0|1|2|3}>
              <ExperienceCard job={job} />
            </RevealWrapper>
          ))}
        </div>
      </section>

      {/* ── PROJECTS ── */}
      <section id="projects" className="max-w-5xl mx-auto px-8 md:px-16 py-24">
        <RevealWrapper><SectionHeader num="03" title="Projects" /></RevealWrapper>
        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, i) => (
            <RevealWrapper key={project.id} delayIndex={i % 4 as 0|1|2|3}>
              <ProjectCard project={project} />
            </RevealWrapper>
          ))}
        </div>
      </section>

      {/* ── SKILLS ── */}
      <section id="skills" className="max-w-5xl mx-auto px-8 md:px-16 py-24">
        <RevealWrapper><SectionHeader num="04" title="Skills" /></RevealWrapper>
        <div className="grid md:grid-cols-3 gap-6">
          {skills.map((group, i) => (
            <RevealWrapper key={group.category} delayIndex={i % 4 as 0|1|2|3}>
              <Card className="p-6 h-full">
                <div className="flex items-center gap-2 mb-5">
                  <span className="text-[#c05070] dark:text-dark-pink font-body text-sm">
                    {categoryIcons[group.category] ?? '·'}
                  </span>
                  <h3 className="font-body text-sm font-medium text-ink2 dark:text-dark-ink2">
                    {group.category}
                  </h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {group.items.map(item => (
                    <span key={item}
                          className="font-body text-sm
                                     text-ink2 dark:text-dark-ink2
                                     bg-bg2 dark:bg-dark-bg2
                                     border border-border dark:border-dark-border
                                     px-3 py-1 rounded-full cursor-default
                                     hover:bg-light-cyan-dim dark:hover:bg-dark-cyan-dim
                                     hover:border-[#a8dadc] dark:hover:border-dark-cyan
                                     hover:text-[#3a8a8c] dark:hover:text-dark-cyan
                                     transition-colors">
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
        <RevealWrapper><SectionHeader num="05" title="Education" /></RevealWrapper>
        <div className="space-y-6">
          {education.map((edu, i) => (
            <RevealWrapper key={edu.id} delayIndex={i % 4 as 0|1|2|3}>
              <Card className="p-8">
                <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-6">
                  <div className="flex-1">
                    <h2 className="font-display text-2xl font-bold text-ink dark:text-dark-ink mb-1">
                      {edu.school}
                    </h2>
                    <p className="font-body text-sm text-[#6b4a9a] dark:text-dark-lavender mb-1">
                      {edu.degree}
                    </p>
                    <p className="font-body text-xs text-muted dark:text-dark-muted">{edu.dates}</p>
                    {edu.coursework && edu.coursework.length > 0 && (
                      <div className="mt-6">
                        <p className="font-body text-xs text-muted dark:text-dark-muted
                                      uppercase tracking-widest mb-3">
                          Relevant Coursework
                        </p>
                        <div className="flex flex-wrap gap-2">
                          {edu.coursework.map(course => (
                            <span key={course}
                                  className="font-body text-xs
                                             bg-bg2 dark:bg-dark-bg2
                                             border border-border dark:border-dark-border
                                             text-ink2 dark:text-dark-ink2
                                             px-3 py-1 rounded-full">
                              {course}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                  {edu.gpa && (
                    <div className="md:text-right flex-shrink-0">
                      <div className="font-display text-5xl font-bold text-ink dark:text-dark-ink leading-none">
                        {edu.gpa}
                      </div>
                      <div className="font-body text-xs text-muted dark:text-dark-muted mt-1">GPA</div>
                      {edu.honors && (
                        <div className="font-serif italic text-sm text-[#6b4a9a] dark:text-dark-lavender mt-1">
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
