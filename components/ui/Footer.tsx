// components/ui/Footer.tsx
export default function Footer() {
  return (
    <footer className="border-t border-border dark:border-dark-border mt-16">
      <div className="max-w-5xl mx-auto px-8 md:px-16 py-10
                      flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="font-body text-xs text-muted dark:text-dark-muted">© 2026 Belle Zheng</p>
        <div className="flex gap-6">
          {[
            { label: 'Email',    href: 'mailto:belzheng@cs.stonybrook.edu' },
            { label: 'LinkedIn', href: 'https://linkedin.com/in/belle-zheng' },
            { label: 'GitHub',   href: 'https://github.com/belxz' },
            { label: 'Resume',   href: '/resume.pdf' },
          ].map(({ label, href }) => (
            <a key={label} href={href}
               target={href.startsWith('http') ? '_blank' : undefined}
               rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
               className="font-body text-xs
                          text-muted dark:text-dark-muted
                          hover:text-[#b39cd0] dark:hover:text-dark-cyan
                          transition-colors">
              {label}
            </a>
          ))}
        </div>
        <p className="font-body text-xs text-muted dark:text-dark-muted"></p>
      </div>
    </footer>
  )
}
