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
  const [active, setActive]   = useState('')
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
      const ids = links.map(l => l.href.replace('#', ''))
      for (const id of [...ids].reverse()) {
        const el = document.getElementById(id)
        if (el && window.scrollY >= el.offsetTop - 120) {
          setActive(id)
          break
        }
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
      bg-bg/85 dark:bg-[#100f0d]/85
      backdrop-filter backdrop-blur-md
      border-b border-border dark:border-zinc-800
      transition-shadow duration-300
      ${scrolled ? 'shadow-sm dark:shadow-zinc-900' : ''}
    `}>
      <a href="#" className="font-display text-lg italic text-ink dark:text-zinc-100
                              hover:text-green-700 dark:hover:text-mint transition-colors">
        Belle Zheng
      </a>

      {/* Desktop links */}
      <ul className="hidden md:flex gap-8 list-none">
        {links.map(({ label, href }) => {
          const id = href.replace('#', '')
          return (
            <li key={href}>
              <a
                href={href}
                className={`font-body text-sm transition-colors
                  ${active === id
                    ? 'text-ink dark:text-zinc-100 font-medium'
                    : 'text-muted dark:text-zinc-500 hover:text-ink dark:hover:text-zinc-200'
                  }`}
              >
                {label}
              </a>
            </li>
          )
        })}
      </ul>

      <div className="hidden md:flex items-center gap-3">
        <ThemeToggle />
        <a
          href="mailto:belzheng@cs.stonybrook.edu"
          className="font-body text-sm text-green-800 dark:text-green-300
                     bg-mint-light dark:bg-green-950
                     border border-mint dark:border-green-800
                     px-4 py-1.5 rounded-full
                     hover:bg-mint dark:hover:bg-green-900 transition-colors"
        >
          Say Hello
        </a>
      </div>

      {/* Mobile: toggle + hamburger */}
      <div className="md:hidden flex items-center gap-3">
        <ThemeToggle />
        <button
          className="text-ink2 dark:text-zinc-300 p-1"
          onClick={() => setMenuOpen(o => !o)}
          aria-label="Toggle menu"
        >
          <span className="block w-5 h-px bg-current mb-1.5" />
          <span className="block w-5 h-px bg-current mb-1.5" />
          <span className="block w-5 h-px bg-current" />
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="absolute top-full left-0 right-0
                        bg-bg dark:bg-zinc-950
                        border-b border-border dark:border-zinc-800
                        md:hidden">
          <ul className="flex flex-col list-none">
            {links.map(({ label, href }) => (
              <li key={href}>
                <a
                  href={href}
                  onClick={() => setMenuOpen(false)}
                  className="block font-body text-sm
                             text-ink2 dark:text-zinc-300
                             hover:text-ink dark:hover:text-zinc-100
                             px-8 py-3
                             border-b border-border dark:border-zinc-800 last:border-0"
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  )
}
