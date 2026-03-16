// components/ui/Card.tsx

interface CardProps {
  children: React.ReactNode
  className?: string
  hover?: boolean
}

export default function Card({ children, className = '', hover = true }: CardProps) {
  return (
    <div className={`
      bg-surface dark:bg-zinc-900
      border border-border dark:border-zinc-800
      rounded-2xl shadow-sm dark:shadow-none
      ${hover
        ? 'transition-all duration-250 hover:-translate-y-1 hover:shadow-md dark:hover:shadow-none hover:border-border2 dark:hover:border-zinc-700'
        : ''}
      ${className}
    `}>
      {children}
    </div>
  )
}
