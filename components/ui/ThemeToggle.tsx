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
                 border border-border dark:border-zinc-700
                 hover:border-mint dark:hover:border-mint
                 bg-bg2 dark:bg-zinc-800
                 hover:bg-mint/10 dark:hover:bg-mint/10
                 text-muted dark:text-zinc-400
                 hover:text-ink dark:hover:text-zinc-100
                 transition-colors
                 whitespace-nowrap w-fit"
    >
      <span className="text-sm leading-none flex-shrink-0">
        {isDark ? '☀' : '☾'}
      </span>
      <span className="font-body text-xs leading-none">
        {isDark ? 'Light Mode' : 'Dark Mode'}
      </span>
    </button>
  )
}