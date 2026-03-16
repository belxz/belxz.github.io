// components/ui/Footer.tsx

export default function Footer() {
  return (
    <footer className="border-t border-border dark:border-zinc-800 mt-16">
      <div className="max-w-5xl mx-auto px-8 md:px-16 py-10
                      flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="font-body text-xs text-muted dark:text-zinc-500">
          © 2025 Belle Zheng
        </p>
        <div className="flex gap-6">
          <a href="mailto:belzheng@cs.stonybrook.edu"
             className="font-body text-xs text-muted dark:text-zinc-500
                        hover:text-ink dark:hover:text-zinc-200 transition-colors">
            Email
          </a>
          <a href="https://linkedin.com/in/belle-zheng"
             target="_blank" rel="noopener noreferrer"
             className="font-body text-xs text-muted dark:text-zinc-500
                        hover:text-ink dark:hover:text-zinc-200 transition-colors">
            LinkedIn
          </a>
          <a href="https://github.com"
             target="_blank" rel="noopener noreferrer"
             className="font-body text-xs text-muted dark:text-zinc-500
                        hover:text-ink dark:hover:text-zinc-200 transition-colors">
            GitHub
          </a>
        </div>
        <p className="font-body text-xs text-muted dark:text-zinc-500">
          Built with Next.js
        </p>
      </div>
    </footer>
  )
}
