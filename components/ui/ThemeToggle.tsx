'use client'
// components/ui/ThemeToggle.tsx
import { useTheme } from './ThemeProvider'

export default function ThemeToggle() {
  const { theme, toggle } = useTheme()
  const isDark = theme === 'dark'

  return (
    <button
      onClick={toggle}
      aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
      className="inline-flex items-center gap-1.5
                 px-3 py-1.5 rounded-full
                 border border-[#ecd6e8] dark:border-dark-border
                 bg-[#4a4a4a] dark:bg-dark-surface
                 text-[#b39cd0] dark:text-dark-lavender
                 hover:border-[#b39cd0] dark:hover:border-dark-lavender
                 hover:bg-light-lav-dim dark:hover:bg-dark-lavender-dim
                 hover:text-ink dark:hover:text-dark-ink
                 transition-colors whitespace-nowrap w-fit"
    >
      <span className="text-sm leading-none flex-shrink-0">
        {isDark ? '☀' : '🌙'}
      </span>
      <span className="font-body text-xs leading-none">
        {isDark ? 'Light' : 'Dark'}
      </span>
    </button>
  )
}
