// components/ui/SectionHeader.tsx
interface SectionHeaderProps {
  num: string
  title: string
}

export default function SectionHeader({ num, title }: SectionHeaderProps) {
  return (
    <div className="flex items-center gap-4 mb-12">
      <span className="font-body text-xs text-[#a8dadc] dark:text-dark-cyan tracking-widest">
        {num}
      </span>
      <h2 className="font-display text-3xl font-bold italic text-ink dark:text-dark-ink">
        {title}
      </h2>
      <div className="flex-1 max-w-xs h-px bg-border dark:bg-dark-border" />
    </div>
  )
}
