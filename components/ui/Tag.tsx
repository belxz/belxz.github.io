// components/ui/Tag.tsx
interface TagProps {
  label: string
  variant?: 'default' | 'cyan' | 'lavender' | 'pink'
}

const variants = {
  default:  'bg-bg2 dark:bg-dark-bg2 border-border dark:border-dark-border text-ink2 dark:text-dark-ink2',
  cyan:     'bg-[#e8f8f9] dark:bg-dark-bg2 border-[#a8dadc] dark:border-dark-cyan text-[#3a8a8c] dark:text-dark-cyan',
  lavender: 'bg-[#f0eaf8] dark:bg-dark-bg2 border-[#b39cd0] dark:border-dark-lavender text-[#7a5fa0] dark:text-dark-lavender',
  pink:     'bg-[#fff0f3] dark:bg-dark-bg2 border-[#ffc1cc] dark:border-dark-pink text-[#c05070] dark:text-dark-pink',
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
