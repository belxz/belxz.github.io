// components/ui/Typewriter.tsx
'use client'
import { useEffect, useState } from 'react'

const phrases = [
  'Full-stack engineer.',
  'Distributed systems builder.',
  'Clean code advocate.',
  'Open to new opportunities.',
]

export default function Typewriter() {
  const [display, setDisplay] = useState('')
  const [phraseIdx, setPhraseIdx] = useState(0)
  const [charIdx, setCharIdx] = useState(0)
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    const phrase = phrases[phraseIdx]
    const timeout = setTimeout(() => {
      if (!deleting) {
        setDisplay(phrase.slice(0, charIdx + 1))
        if (charIdx + 1 === phrase.length) {
          setTimeout(() => setDeleting(true), 1800)
        } else {
          setCharIdx(c => c + 1)
        }
      } else {
        setDisplay(phrase.slice(0, charIdx - 1))
        if (charIdx - 1 === 0) {
          setDeleting(false)
          setCharIdx(0)
          setPhraseIdx(i => (i + 1) % phrases.length)
        } else {
          setCharIdx(c => c - 1)
        }
      }
    }, deleting ? 38 : 68)
    return () => clearTimeout(timeout)
  }, [charIdx, deleting, phraseIdx])

  return (
    <span className="font-serif italic text-green-700">
      {display}
      <span className="animate-blink">|</span>
    </span>
  )
}
