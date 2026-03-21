// app/layout.tsx
import type { Metadata } from 'next'
import { Playfair_Display, DM_Sans, Lora } from 'next/font/google'
import { ThemeProvider } from '@/components/ui/ThemeProvider'
import Nav from '@/components/ui/Nav'
import Footer from '@/components/ui/Footer'
import DogCaptcha from '@/components/ui/DogCaptcha'
import './globals.css'
import ContentWrapper from '@/components/ui/ContentWrapper'

const playfair = Playfair_Display({ subsets: ['latin'], variable: '--font-playfair', display: 'swap' })
const dmSans   = DM_Sans({          subsets: ['latin'], variable: '--font-dm-sans',  display: 'swap' })
const lora     = Lora({             subsets: ['latin'], variable: '--font-lora',     display: 'swap' })

export const metadata: Metadata = {
  title: 'Belle Zheng — Software Engineer',
  description: 'CS graduate from Stony Brook. Full-stack engineer, distributed systems builder, open to new opportunities.',
  openGraph: {
    title: 'Belle Zheng — Software Engineer',
    description: 'CS graduate from Stony Brook. Full-stack engineer, distributed systems builder.',
    type: 'website',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${playfair.variable} ${dmSans.variable} ${lora.variable}`}>
      <body className="bg-white dark:bg-dark-bg text-ink dark:text-dark-ink antialiased">
        <ThemeProvider>
          <DogCaptcha>
            <Nav />
              <ContentWrapper>
              {children}
            </ContentWrapper>
            <Footer />
          </DogCaptcha>
        </ThemeProvider>
      </body>
    </html>
  )
}
