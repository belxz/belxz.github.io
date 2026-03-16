// app/not-found.tsx
import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="min-h-[80vh] flex flex-col items-center justify-center text-center px-8">
      <p className="font-body text-xs text-muted tracking-widest uppercase mb-4">404</p>
      <h1 className="font-display text-5xl font-bold italic text-ink mb-4">Page not found</h1>
      <p className="font-body text-sm text-ink2 mb-8">
        That page doesn't exist. Maybe it moved, or maybe it never existed.
      </p>
      <Link href="/"
            className="font-body text-sm bg-mint text-green-900 border border-mint
                       px-5 py-2.5 rounded-full hover:bg-green-200 transition-colors">
        Back home
      </Link>
    </div>
  )
}
