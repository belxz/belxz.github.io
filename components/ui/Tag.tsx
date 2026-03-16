// components/ui/Tag.tsx

interface TagProps {
  label: string
  variant?: 'default' | 'mint' | 'lavender'
}

const variants = {
  default:  'bg-bg2 dark:bg-zinc-800 border-border dark:border-zinc-700 text-ink2 dark:text-zinc-300',
  mint:     'bg-mint-light dark:bg-green-950 border-mint dark:border-green-800 text-green-800 dark:text-green-300',
  lavender: 'bg-purple-50 dark:bg-purple-950 border-lavender dark:border-purple-800 text-purple-800 dark:text-purple-300',
}

export default function Tag({ label, variant = 'default' }: TagProps) {
  return (
    <span className={`
      inline-block font-body text-xs px-3 py-1 rounded-full border
      ${variants[variant]}
    `}>
      {label}
    </span>
  )
}
