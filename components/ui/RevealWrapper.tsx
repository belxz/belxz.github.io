// components/ui/RevealWrapper.tsx
// Wraps children in a div that fades + slides up when scrolled into view.
// Use delayIndex (0-4) to stagger sibling elements.
'use client'
import { useEffect, useRef } from 'react'

interface Props {
  children: React.ReactNode
  delayIndex?: number
  className?: string
}

export default function RevealWrapper({ children, delayIndex = 0, className = '' }: Props) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) el.classList.add('visible') },
      { threshold: 0.08 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  const delays = ['', 'reveal-d1', 'reveal-d2', 'reveal-d3', 'reveal-d4']

  return (
    <div ref={ref} className={`reveal ${delays[delayIndex] ?? ''} ${className}`}>
      {children}
    </div>
  )
}
