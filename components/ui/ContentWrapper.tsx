'use client'
import { usePathname } from 'next/navigation'

export default function ContentWrapper({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()
  const isProjectPage = pathname.startsWith('/projects/')

  return (
    <div className={isProjectPage ? '' : 'md:pl-56'}>
      <main className="pt-16 md:pt-0">
        {children}
      </main>
    </div>
  )
}