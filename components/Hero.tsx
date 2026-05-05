'use client'
import { useEffect, useRef, useState } from 'react'

const phrases = [
  "ITS NOBODY",
  "functional & working ",
  "WEB PORTFOLIO",
]

export default function Hero() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [showCV, setShowCV] = useState(false)
  const [displayText, setDisplayText] = useState('')
  const [phraseIndex, setPhraseIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)
  const [isWaiting, setIsWaiting] = useState(false)

  // Typewriter effect
  useEffect(() => {
    const currentPhrase = phrases[phraseIndex]

    if (isWaiting) return

    const timeout = setTimeout(() => {
      if (!isDeleting) {
        // Typing
        setDisplayText(currentPhrase.slice(0, displayText.length + 1))
        if (displayText.length + 1 === currentPhrase.length) {
          // Finished typing — pause before deleting
          setIsWaiting(true)
          setTimeout(() => {
            setIsWaiting(false)
            setIsDeleting(true)
          }, 1800)
        }
      } else {
        // Deleting
        setDisplayText(currentPhrase.slice(0, displayText.length - 1))
        if (displayText.length - 1 === 0) {
          setIsDeleting(false)
          setPhraseIndex(prev => (prev + 1) % phrases.length)
        }
      }
    }, isDeleting ? 40 : 80)

    return () => clearTimeout(timeout)
  }, [displayText, isDeleting, phraseIndex, isWaiting])

  // Particle animation
  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')!
    canvas.width = window.innerWidth
    canvas.height = window.innerHeight

    const particles: { x: number; y: number; vx: number; vy: number; size: number; alpha: number }[] = []
    for (let i = 0; i < 60; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.4,
        vy: (Math.random() - 0.5) * 0.4,
        size: Math.random() * 2 + 0.5,
        alpha: Math.random() * 0.4 + 0.1,
      })
    }

    let raf: number
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      particles.forEach(p => {
        p.x += p.vx; p.y += p.vy
        if (p.x < 0) p.x = canvas.width
        if (p.x > canvas.width) p.x = 0
        if (p.y < 0) p.y = canvas.height
        if (p.y > canvas.height) p.y = 0
        ctx.beginPath()
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(0, 245, 255, ${p.alpha})`
        ctx.fill()
      })
      raf = requestAnimationFrame(animate)
    }
    animate()
    return () => cancelAnimationFrame(raf)
  }, [])

  return (
    <>
      <style>{`
        @keyframes modalFadeIn {
          from { opacity: 0; transform: scale(0.96); }
          to { opacity: 1; transform: scale(1); }
        }
        .cv-modal-content {
          animation: modalFadeIn 0.3s ease;
        }
        .hero-btn {
          font-family: monospace;
          font-size: 11px;
          letter-spacing: 0.15em;
          text-transform: uppercase;
          padding: 12px 28px;
          border: 1px solid #00f5ff;
          color: #00f5ff;
          background: transparent;
          cursor: pointer;
          position: relative;
          overflow: hidden;
          transition: all 0.3s ease;
          white-space: nowrap;
          width: fit-content;
        }
        .hero-btn::before {
          content: '';
          position: absolute;
          inset: 0;
          background: rgba(0, 245, 255, 0.08);
          opacity: 0;
          transition: opacity 0.3s ease;
        }
        .hero-btn:hover::before { opacity: 1; }
        .hero-btn:hover {
          box-shadow: 0 0 16px rgba(0,245,255,0.4), inset 0 0 16px rgba(0,245,255,0.05);
        }
        .hero-btn-green {
          border-color: #39ff14;
          color: #39ff14;
        }
        .hero-btn-green::before {
          background: rgba(57, 255, 20, 0.08);
        }
        .hero-btn-green:hover {
          box-shadow: 0 0 16px rgba(57,255,20,0.4), inset 0 0 16px rgba(57,255,20,0.05);
        }
        @keyframes blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }
        .cursor {
          display: inline-block;
          width: 3px;
          height: 0.85em;
          background: #00f5ff;
          margin-left: 4px;
          vertical-align: middle;
          animation: blink 0.8s infinite;
          box-shadow: 0 0 8px #00f5ff;
          border-radius: 1px;
        }
      `}</style>

      <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <canvas ref={canvasRef} className="absolute inset-0 pointer-events-none" />

        {/* Glow radial bg */}
        <div className="absolute inset-0 pointer-events-none"
          style={{ background: 'radial-gradient(ellipse 80% 60% at 50% 60%, rgba(0,245,255,0.04) 0%, transparent 70%)' }} />

        <div className="relative z-10 text-center px-10 max-w-4xl mx-auto">


          {/* Heading with typewriter */}
          <h1
                className="font-['Syne'] font-extrabold text-white"
                style={{ fontSize: 'clamp(3rem, 10vw, 7rem)', letterSpacing: '-0.03em' }}
              >
                {phraseIndex === 0 && displayText.length > 0 && (
                  <span className="text-white">Hi! </span>
                )}
                <span
                  className="neon-text-cyan"
                  style={{ WebkitTextStroke: '1px #00f5ff', whiteSpace: 'nowrap' }}
                >
                  {displayText}
                  <span className="cursor" />
                </span>
              </h1>

          <p className="font-mono text-gray-400 text-sm md:text-base max-w-xl mx-auto leading-relaxed tracking-wide mb-8">
              UI/UX Designer and Developer · Graphic Designer
          </p>

          {/* Buttons */}
          <div style={{ display: 'flex', flexDirection: 'row', gap: '16px', justifyContent: 'center', flexWrap: 'wrap', marginBottom: '20px' }}>
            <button className="hero-btn" onClick={() => setShowCV(true)}>
              ↗ View CV
            </button>
            <button
              className="hero-btn hero-btn-green"
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
            >
              View Projects →
            </button>
          </div>

        </div>
      </section>

      {/* CV Modal */}
      {showCV && (
        <div
          onClick={() => setShowCV(false)}
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 9999,
            background: 'rgba(5,5,8,0.92)',
            backdropFilter: 'blur(12px)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '24px',
          }}
        >
          <div
            className="cv-modal-content"
            onClick={e => e.stopPropagation()}
            style={{
              width: '100%',
              maxWidth: '860px',
              height: '90vh',
              background: '#0a0a0f',
              border: '1px solid rgba(0,245,255,0.2)',
              borderRadius: '8px',
              overflow: 'hidden',
              display: 'flex',
              flexDirection: 'column',
              boxShadow: '0 0 40px rgba(0,245,255,0.1)',
            }}
          >
            <div style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              padding: '14px 20px',
              borderBottom: '1px solid rgba(0,245,255,0.1)',
            }}>
              <span style={{ fontFamily: 'monospace', fontSize: '11px', letterSpacing: '0.15em', color: '#00f5ff' }}>
                CURRICULUM VITAE
              </span>
              <button
                onClick={() => setShowCV(false)}
                style={{
                  fontFamily: 'monospace',
                  fontSize: '11px',
                  letterSpacing: '0.1em',
                  color: '#9ca3af',
                  background: 'none',
                  border: '1px solid rgba(255,255,255,0.1)',
                  borderRadius: '4px',
                  padding: '4px 12px',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease',
                }}
              >
                ✕ CLOSE
              </button>
            </div>
           {/* CV Image — full display */}
                <div style={{ flex: 1, overflowY: 'auto', background: '#fff', display: 'flex', alignItems: 'flex-start', justifyContent: 'center' }}>
                  <img
                    src="/cv.jpg"
                    alt="Curriculum Vitae"
                    style={{ width: '100%', height: 'auto', display: 'block' }}
                  />
                </div>
          </div>
        </div>
      )}
    </>
  )
}