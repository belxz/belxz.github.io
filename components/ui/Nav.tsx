'use client'
// components/ui/Nav.tsx
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
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
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
    <nav className={`
      fixed top-0 left-0 right-0 z-50
      flex items-center justify-between
      px-8 md:px-16 py-4
      bg-bg/85 dark:bg-dark-bg/90
      backdrop-filter backdrop-blur-md
      border-b border-border dark:border-dark-border
      transition-shadow duration-300
      ${scrolled ? 'shadow-sm dark:shadow-[0_1px_20px_rgba(0,0,0,0.3)]' : ''}
    `}>
      <a href="#"
         className="font-display text-lg italic
                    text-ink dark:text-dark-ink
                    hover:text-[#b39cd0] dark:hover:text-dark-cyan
                    transition-colors">
        Belle Zheng
      </a>

      <ul className="hidden md:flex gap-8 list-none">
        {links.map(({ label, href }) => {
          const id = href.replace('#', '')
          return (
            <li key={href}>
              <a href={href}
                 className={`font-body text-sm transition-colors
                   ${active === id
                     ? 'text-ink dark:text-dark-ink font-medium'
                     : 'text-muted dark:text-dark-muted hover:text-ink dark:hover:text-dark-ink2'
                   }`}>
                {label}
              </a>
            </li>
          )
        })}
      </ul>

      <div className="hidden md:flex items-center gap-3">
        <ThemeToggle />
        <a href="/resume.pdf"
           target="_blank"
           rel="noopener noreferrer"
           className="font-body text-sm
                      text-muted dark:text-dark-muted
                      border border-border dark:border-dark-border
                      hover:border-[#a8dadc] dark:hover:border-dark-cyan
                      hover:text-ink dark:hover:text-dark-ink
                      px-4 py-1.5 rounded-full
                      transition-colors">
          Resume ↗
        </a>
        <a href="mailto:belzheng@cs.stonybrook.edu"
           className="font-body text-sm
                      text-white dark:text-dark-bg
                      bg-[#b39cd0] dark:bg-dark-lavender
                      border border-[#b39cd0] dark:border-dark-lavender
                      px-4 py-1.5 rounded-full
                      hover:bg-[#a08bc0] dark:hover:opacity-90
                      transition-colors">
          Say Hello
        </a>
      </div>

      <div className="md:hidden flex items-center gap-3">
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
                        border-b border-border dark:border-dark-border md:hidden">
          <ul className="flex flex-col list-none">
            {links.map(({ label, href }) => (
              <li key={href}>
                <a href={href} onClick={() => setMenuOpen(false)}
                   className="block font-body text-sm
                              text-ink2 dark:text-dark-ink2
                              hover:text-ink dark:hover:text-dark-ink
                              px-8 py-3
                              border-b border-border dark:border-dark-border last:border-0">
                  {label}
                </a>
              </li>
            ))}
            <li>
              <a href="/resume.pdf"
                 target="_blank" rel="noopener noreferrer"
                 onClick={() => setMenuOpen(false)}
                 className="block font-body text-sm
                            text-[#a8dadc] dark:text-dark-cyan
                            hover:text-ink dark:hover:text-dark-ink
                            px-8 py-3">
                Resume ↗
              </a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  )
}
