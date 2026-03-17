'use client'
// components/ui/Nav.tsx — left sidebar navigation

import { useEffect, useState } from 'react'
import ThemeToggle from './ThemeToggle'

const links = [
  { label: 'About',      href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects',   href: '#projects' },
  { label: 'Skills',     href: '#skills' },
  { label: 'Education',  href: '#education' },
]

export default function Nav() {
  const [active, setActive]     = useState('')
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const ids = links.map(l => l.href.replace('#', ''))
      for (const id of [...ids].reverse()) {
        const el = document.getElementById(id)
        if (el && window.scrollY >= el.offsetTop - 120) { setActive(id); break }
      }
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      {/* ── DESKTOP SIDEBAR ── */}
      <aside className="hidden md:flex flex-col fixed left-0 top-0 h-screen w-56
                        bg-bg/90 dark:bg-dark-bg/90
                        backdrop-blur-md
                        border-r border-border dark:border-dark-border
                        px-6 py-10 z-50
                        justify-between">

        {/* Top: logo + links */}
        <div className="flex flex-col gap-10">
          <a href="#"
             className="font-display text-xl italic
                        text-ink dark:text-dark-ink
                        hover:text-[#b39cd0] dark:hover:text-dark-cyan
                        transition-colors leading-tight">
            Belle<br />Zheng
          </a>

          <ul className="flex flex-col gap-1 list-none">
            {links.map(({ label, href }) => {
              const id = href.replace('#', '')
              const isActive = active === id
              return (
                <li key={href}>
                  <a href={href}
                     className={`
                       flex items-center gap-3 px-3 py-2 rounded-lg
                       font-body text-sm transition-all duration-200
                       ${isActive
                         ? 'text-ink dark:text-dark-ink font-medium bg-light-lav-dim dark:bg-dark-lavender-dim'
                         : 'text-muted dark:text-dark-muted hover:text-ink dark:hover:text-dark-ink hover:bg-bg2 dark:hover:bg-dark-bg2'
                       }
                     `}>
                    <span className={`
                      w-1.5 h-1.5 rounded-full flex-shrink-0 transition-all duration-200
                      ${isActive
                        ? 'bg-[#b39cd0] dark:bg-dark-lavender scale-125'
                        : 'bg-border dark:bg-dark-border'
                      }
                    `} />
                    {label}
                  </a>
                </li>
              )
            })}
          </ul>
        </div>

        {/* Bottom: resume, say hello, theme toggle */}
        <div className="flex flex-col gap-3">
          <a href="/resume.pdf"
             target="_blank" rel="noopener noreferrer"
             className="font-body text-xs text-center
                        text-[#3a8a8c] dark:text-dark-cyan
                        bg-[#e8f8f9] dark:bg-dark-bg2
                        border border-[#a8dadc] dark:border-dark-cyan
                        px-3 py-2 rounded-lg
                        hover:bg-[#a8dadc] dark:hover:bg-dark-cyan/20
                        transition-colors">
            Resume ↗
          </a>
          <a href="mailto:belzheng@cs.stonybrook.edu"
             className="font-body text-xs text-center
                        text-white dark:text-dark-bg
                        bg-[#b39cd0] dark:bg-dark-lavender
                        border border-[#b39cd0] dark:border-dark-lavender
                        px-3 py-2 rounded-lg
                        hover:bg-[#a08bc0] dark:hover:opacity-90
                        transition-colors">
            Say Hello
          </a>
          <div className="flex justify-center">
            <ThemeToggle />
          </div>
        </div>
      </aside>

      {/* ── MOBILE TOP BAR ── */}
      <nav className="md:hidden fixed top-0 left-0 right-0 z-50
                      flex items-center justify-between
                      px-5 py-4
                      bg-bg/90 dark:bg-dark-bg/90
                      backdrop-blur-md
                      border-b border-border dark:border-dark-border">
        <a href="#"
           className="font-display text-lg italic text-ink dark:text-dark-ink
                      hover:text-[#b39cd0] dark:hover:text-dark-cyan transition-colors">
          Belle Zheng
        </a>

        <div className="flex items-center gap-3">
          <ThemeToggle />
          <button className="text-ink2 dark:text-dark-ink2 p-1"
                  onClick={() => setMenuOpen(o => !o)}
                  aria-label="Toggle menu">
            <span className="block w-5 h-px bg-current mb-1.5" />
            <span className="block w-5 h-px bg-current mb-1.5" />
            <span className="block w-5 h-px bg-current" />
          </button>
        </div>

        {menuOpen && (
          <div className="absolute top-full left-0 right-0
                          bg-bg dark:bg-dark-bg
                          border-b border-border dark:border-dark-border">
            <ul className="flex flex-col list-none">
              {links.map(({ label, href }) => (
                <li key={href}>
                  <a href={href} onClick={() => setMenuOpen(false)}
                     className="block font-body text-sm
                                text-ink2 dark:text-dark-ink2
                                hover:text-ink dark:hover:text-dark-ink
                                px-6 py-3
                                border-b border-border dark:border-dark-border last:border-0">
                    {label}
                  </a>
                </li>
              ))}
              <li>
                <a href="/resume.pdf" target="_blank" rel="noopener noreferrer"
                   onClick={() => setMenuOpen(false)}
                   className="block font-body text-sm
                              text-[#a8dadc] dark:text-dark-cyan
                              px-6 py-3">
                  Resume ↗
                </a>
              </li>
            </ul>
          </div>
        )}
      </nav>
    </>
  )
}
