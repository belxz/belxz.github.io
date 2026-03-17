'use client'
import { useEffect, useState } from 'react'
import Image from 'next/image'

const REQUIRED_CLICKS = 3

export default function DogCaptcha({ children }: { children: React.ReactNode }) {
  const [passed, setPassed]     = useState(false)
  const [ready, setReady]       = useState(false) // avoids flash on revisit
  const [clicks, setClicks]     = useState(0)
  const [ripples, setRipples]   = useState<{ id: number; x: number; y: number }[]>([])
  const [shaking, setShaking]   = useState(false)
  const [exiting, setExiting]   = useState(false)
  const [wiggle, setWiggle]     = useState(false)

  // Check session on mount
  useEffect(() => {
    const already = sessionStorage.getItem('captcha-passed')
    if (already === 'true') {
      setPassed(true)
    }
    setReady(true)
  }, [])

  // Idle wiggle every few seconds to hint the dog is clickable
  useEffect(() => {
    if (passed) return
    const interval = setInterval(() => {
      setWiggle(true)
      setTimeout(() => setWiggle(false), 600)
    }, 3000)
    return () => clearInterval(interval)
  }, [passed])

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    const rect = e.currentTarget.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top
    const id = Date.now()

    // Add ripple
    setRipples(r => [...r, { id, x, y }])
    setTimeout(() => setRipples(r => r.filter(rp => rp.id !== id)), 700)

    // Shake the dog on each click
    setShaking(true)
    setTimeout(() => setShaking(false), 400)

    const next = clicks + 1
    setClicks(next)

    if (next >= REQUIRED_CLICKS) {
      // Success — play exit animation then reveal site
      setTimeout(() => {
        setExiting(true)
        setTimeout(() => {
          sessionStorage.setItem('captcha-passed', 'true')
          setPassed(true)
        }, 600)
      }, 300)
    }
  }

  // Don't render gate at all until we've checked sessionStorage
  if (!ready) return null

  if (passed) return <>{children}</>

  const remaining = REQUIRED_CLICKS - clicks
  const progress  = (clicks / REQUIRED_CLICKS) * 100

  const statusText = () => {
    if (clicks === 0) return 'Click the dog to continue'
    if (clicks === 1) return '2 more times...'
    if (clicks === 2) return 'One more!'
    return "You're in! 🐾"
  }

  return (
    <>
      {/* Overlay */}
      <div
        className={`
          fixed inset-0 z-[9999]
          flex flex-col items-center justify-center
          bg-bg dark:bg-[#100f0d]
          transition-opacity duration-500
          ${exiting ? 'opacity-0' : 'opacity-100'}
        `}
      >
        {/* Dot grid background (matches site) */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage: 'radial-gradient(circle, rgba(168,216,176,0.16) 1px, transparent 1px)',
            backgroundSize: '32px 32px',
          }}
        />

        <div className="relative z-10 flex flex-col items-center gap-8 px-6 text-center">

          {/* Header */}
          <div>
            <p className="font-body text-xs text-muted dark:text-zinc-500 tracking-widest uppercase mb-2">
              Verify you are human
            </p>
            <h1 className="font-display text-2xl md:text-3xl italic font-bold text-ink dark:text-zinc-100">
              Pet the good boi {REQUIRED_CLICKS} times
            </h1>
          </div>

          {/* Dog button */}
          <button
            onClick={handleClick}
            disabled={clicks >= REQUIRED_CLICKS}
            aria-label="Pet the dog"
            className={`
              relative
              w-72 h-72 md:w-96 md:h-96
              rounded-full overflow-hidden
              border-4 transition-all duration-200 select-none
              focus:outline-none focus-visible:ring-4 focus-visible:ring-mint
              ${clicks >= REQUIRED_CLICKS
                ? 'border-mint scale-110 cursor-default shadow-[0_0_40px_rgba(168,216,176,0.5)]'
                : 'border-border dark:border-zinc-700 hover:border-mint hover:scale-105 cursor-grab active:cursor-grabbingscale-95'
              }
              ${shaking ? 'animate-[shake_0.4s_ease]' : ''}
              ${wiggle && clicks === 0 ? 'animate-[wiggle_0.6s_ease]' : ''}
            `}
            style={{
              filter: clicks >= REQUIRED_CLICKS
                ? 'brightness(1.08) saturate(1.1)'
                : 'none',
            }}
          >
            <Image
              src="/dog.png"
              alt="A very good boi"
              fill
              className="object-contain pointer-events-none transition-all duration-200"
              priority
            />

            {/* Click ripples */}
            {ripples.map(({ id, x, y }) => (
              <span
                key={id}
                className="absolute rounded-full bg-mint/40 pointer-events-none animate-[ripple_0.7s_ease-out_forwards]"
                style={{
                  width: 60, height: 60,
                  left: x - 30, top: y - 30,
                }}
              />
            ))}

            {/* Success overlay */}
            {clicks >= REQUIRED_CLICKS && (
              <div className="absolute inset-0 flex items-center justify-center bg-mint/20">
                <span className="text-4xl">🐾</span>
              </div>
            )}
          </button>

          {/* Progress dots */}
          <div className="flex gap-2">
            {Array.from({ length: REQUIRED_CLICKS }).map((_, i) => (
              <span
                key={i}
                className={`
                  text-2xl transition-all duration-300 select-none
                  ${i < clicks
                    ? 'opacity-100 scale-110'
                    : 'opacity-20 grayscale'
                  }
                `}
              >
                🐾
              </span>
            ))}
          </div>

          {/* Status text */}
          <p className={`
            font-body text-sm transition-all duration-300
            ${clicks >= REQUIRED_CLICKS
              ? 'text-green-700 dark:text-green-300 font-medium'
              : 'text-muted dark:text-zinc-500'
            }
          `}>
            {statusText()}
          </p>

          {/* Progress bar */}
          <div className="w-52 md:w-64 h-1 bg-border dark:bg-zinc-800 rounded-full overflow-hidden">
            <div
              className="h-full bg-mint rounded-full transition-all duration-300 ease-out"
              style={{ width: `${progress}%` }}
            />
          </div>

        </div>
      </div>

      {/* Site content (hidden behind overlay) */}
      <div className="invisible">{children}</div>

      {/* Keyframe animations */}
      <style>{`
        @keyframes shake {
          0%, 100% { transform: translateX(0) rotate(0deg); }
          20%       { transform: translateX(-6px) rotate(-2deg); }
          40%       { transform: translateX(6px) rotate(2deg); }
          60%       { transform: translateX(-4px) rotate(-1deg); }
          80%       { transform: translateX(4px) rotate(1deg); }
        }
        @keyframes wiggle {
          0%, 100% { transform: rotate(0deg); }
          25%       { transform: rotate(-5deg); }
          75%       { transform: rotate(5deg); }
        }
        @keyframes ripple {
          0%   { transform: scale(0); opacity: 0.8; }
          100% { transform: scale(4); opacity: 0; }
        }
      `}</style>
    </>
  )
}
