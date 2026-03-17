// components/ui/Card.tsx
interface CardProps {
  children: React.ReactNode
  className?: string
  hover?: boolean
}

export default function Card({ children, className = '', hover = true }: CardProps) {
  return (
    <div className={`
      bg-surface dark:bg-dark-surface
      border border-border dark:border-dark-border
      rounded-2xl
      shadow-[0_2px_12px_rgba(179,156,208,0.15)]
      dark:shadow-[0_2px_12px_rgba(0,0,0,0.25)]
      ${hover
        ? `transition-all duration-250
           hover:-translate-y-1
           hover:shadow-[0_6px_24px_rgba(179,156,208,0.25)]
           dark:hover:shadow-[0_6px_24px_rgba(0,0,0,0.35)]
           hover:border-border2 dark:hover:border-dark-border2`
        : ''}
      ${className}
    `}>
      {children}
    </div>
  )
}
