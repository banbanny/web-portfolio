'use client'
import { useEffect, useRef, ReactNode } from 'react'

type Props = {
  children: ReactNode
  /**
   * Animation preset:
   * 'fade-up'    — fade in + slide up (default)
   * 'fade-down'  — fade in + slide down
   * 'fade-left'  — fade in + slide from left
   * 'fade-right' — fade in + slide from right
   * 'zoom'       — fade in + scale up
   * 'fade'       — plain fade
   */
  animation?: 'fade-up' | 'fade-down' | 'fade-left' | 'fade-right' | 'zoom' | 'fade'
  delay?: number      // ms, default 0
  duration?: number   // ms, default 600
  threshold?: number  // 0–1, default 0.15
  className?: string
  style?: React.CSSProperties
}

const transforms: Record<string, string> = {
  'fade-up':    'translateY(40px)',
  'fade-down':  'translateY(-40px)',
  'fade-left':  'translateX(-40px)',
  'fade-right': 'translateX(40px)',
  'zoom':       'scale(0.92)',
  'fade':       'none',
}

export default function ScrollReveal({
  children,
  animation = 'fade-up',
  delay = 0,
  duration = 600,
  threshold = 0.15,
  className = '',
  style = {},
}: Props) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const initialTransform = transforms[animation]

    // Set initial hidden state
    el.style.opacity   = '0'
    el.style.transform = initialTransform !== 'none' ? initialTransform : ''
    el.style.transition = `opacity ${duration}ms cubic-bezier(0.16,1,0.3,1) ${delay}ms,
                            transform ${duration}ms cubic-bezier(0.16,1,0.3,1) ${delay}ms`

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            // Reveal
            el.style.opacity   = '1'
            el.style.transform = 'none'
          } else {
            // Re-hide when scrolled out (so it re-animates on scroll back)
            el.style.opacity   = '0'
            el.style.transform = initialTransform !== 'none' ? initialTransform : ''
          }
        })
      },
      { threshold }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [animation, delay, duration, threshold])

  return (
    <div ref={ref} className={className} style={style}>
      {children}
    </div>
  )
}
