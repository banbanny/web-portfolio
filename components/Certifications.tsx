'use client'
import { useEffect, useState, useRef } from 'react'

interface Certification {
  id: string
  title: string
  date: string
  image_url: string
}

const certs: Certification[] = [
  { id: '1', title: 'Learn PHP and MYSQL for Web Application and Web Development', date: 'Sept 26, 2024', image_url: '/1.png' },
  { id: '2', title: 'PHP with MYSQL', date: 'Dec 9, 2024', image_url: '/2.png' },
  { id: '3', title: 'Build Complete CMS Blog in PHP MySQL Bootstrap & PDO', date: 'Dec 10, 2024', image_url: '/3.png' },
  { id: '4', title: 'Introduction to Large Language Models', date: 'Mar 25, 2026', image_url: '/4.png' },
]

export default function Certifications() {
  const [selected, setSelected] = useState<Certification | null>(null)
  const trackRef = useRef<HTMLDivElement>(null)
  const offsetRef = useRef(0)
  const rafRef = useRef<number>(0)
  const isPausedRef = useRef(false)
  const [cardWidth, setCardWidth] = useState(280)

  useEffect(() => {
    const updateCardWidth = () => {
      setCardWidth(window.innerWidth < 480 ? 240 : 280)
    }
    updateCardWidth()
    window.addEventListener('resize', updateCardWidth)
    return () => window.removeEventListener('resize', updateCardWidth)
  }, [])

  useEffect(() => {
    const track = trackRef.current
    if (!track) return
    const gap = 16
    const totalWidth = (cardWidth + gap) * certs.length
    const step = () => {
      if (!isPausedRef.current) {
        offsetRef.current += 0.5
        if (offsetRef.current >= totalWidth) offsetRef.current = 0
        track.style.transform = `translateX(-${offsetRef.current}px)`
      }
      rafRef.current = requestAnimationFrame(step)
    }
    rafRef.current = requestAnimationFrame(step)
    return () => cancelAnimationFrame(rafRef.current)
  }, [cardWidth])

  const loopedCerts = [...certs, ...certs, ...certs]

  return (
    <>
      <style>{`
        .cert-card {
          background: #0a0a0f;
          border: 1px solid rgba(255,255,255,0.06);
          border-radius: 12px;
          overflow: hidden;
          cursor: pointer;
          transition: border-color 0.3s ease, transform 0.3s ease, box-shadow 0.3s ease;
          flex-shrink: 0;
        }
        .cert-card:hover { border-color: rgba(57,255,20,0.3); box-shadow: 0 8px 32px rgba(57,255,20,0.07); transform: translateY(-4px); }
        .cert-img-wrapper { width: 100%; height: 160px; overflow: hidden; background: #0d0d14; position: relative; }
        .cert-img { width: 100%; height: 100%; object-fit: cover; object-position: center top; transition: transform 0.4s ease, opacity 0.3s ease; opacity: 0.9; }
        .cert-card:hover .cert-img { transform: scale(1.04); opacity: 1; }
        .cert-info { padding: 12px 14px; border-top: 1px solid rgba(255,255,255,0.05); }
        .cert-hover-overlay { position: absolute; inset: 0; background: rgba(5,5,8,0.5); display: flex; align-items: center; justify-content: center; opacity: 0; transition: opacity 0.3s ease; }
        .cert-card:hover .cert-hover-overlay { opacity: 1; }
        .carousel-fade-left { position: absolute; left: 0; top: 0; bottom: 0; width: 60px; background: linear-gradient(to right, #050508, transparent); pointer-events: none; z-index: 2; }
        .carousel-fade-right { position: absolute; right: 0; top: 0; bottom: 0; width: 60px; background: linear-gradient(to left, #050508, transparent); pointer-events: none; z-index: 2; }
      `}</style>

      <section id="certifications" className="py-20 md:py-32 overflow-hidden" style={{ maxWidth: '1152px', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '48px', padding: '0 20px' }}>
          <h2 className="section-title text-white">
            Certifications<span className="neon-text-green">.</span>
          </h2>
          <p style={{ fontFamily: 'monospace', fontSize: '11px', color: '#4b5563', marginTop: '12px', letterSpacing: '0.1em' }}>
            Click a card to view · Hover to pause
          </p>
        </div>

        <div
          style={{ position: 'relative', overflow: 'hidden', paddingBottom: '8px' }}
          onMouseEnter={() => { isPausedRef.current = true }}
          onMouseLeave={() => { isPausedRef.current = false }}
          onTouchStart={() => { isPausedRef.current = true }}
          onTouchEnd={() => { setTimeout(() => { isPausedRef.current = false }, 2000) }}
        >
          <div className="carousel-fade-left" />
          <div className="carousel-fade-right" />
          <div ref={trackRef} style={{ display: 'flex', gap: '16px', width: 'max-content', willChange: 'transform' }}>
            {loopedCerts.map((cert, i) => (
              <div key={`${cert.id}-${i}`} className="cert-card" style={{ width: `${cardWidth}px` }}
                onClick={() => cert.image_url && setSelected(cert)}>
                <div className="cert-img-wrapper">
                  {cert.image_url
                    ? <img src={cert.image_url} alt={cert.title} className="cert-img" />
                    : <div style={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', opacity: 0.15 }}><div style={{ width: '48px', height: '48px', border: '1px solid #39ff14', borderRadius: '8px' }} /></div>
                  }
                  {cert.image_url && (
                    <div className="cert-hover-overlay">
                      <span style={{ fontFamily: 'monospace', fontSize: '10px', letterSpacing: '0.2em', color: '#39ff14', border: '1px solid rgba(57,255,20,0.4)', padding: '6px 14px', borderRadius: '4px' }}>VIEW</span>
                    </div>
                  )}
                </div>
                <div className="cert-info">
                  <h3 style={{ fontFamily: 'Syne, sans-serif', fontWeight: 700, color: '#fff', fontSize: '12px', marginBottom: '6px', lineHeight: 1.4 }}>{cert.title}</h3>
                  <p style={{ fontFamily: 'monospace', fontSize: '10px', color: '#39ff14', letterSpacing: '0.15em' }}>{cert.date}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {selected && (
        <div onClick={() => setSelected(null)} style={{ position: 'fixed', inset: 0, zIndex: 9999, background: 'rgba(5,5,8,0.95)', backdropFilter: 'blur(16px)', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '16px' }}>
          <div onClick={e => e.stopPropagation()} style={{ width: '100%', maxWidth: '780px', background: '#0a0a0f', border: '1px solid rgba(57,255,20,0.2)', borderRadius: '12px', overflow: 'hidden', boxShadow: '0 0 40px rgba(57,255,20,0.08)' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '12px 16px', borderBottom: '1px solid rgba(255,255,255,0.05)', gap: '12px' }}>
              <div style={{ minWidth: 0 }}>
                <p style={{ fontFamily: 'Syne, sans-serif', fontWeight: 700, color: '#fff', fontSize: '13px', marginBottom: '2px', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{selected.title}</p>
                <p style={{ fontFamily: 'monospace', fontSize: '10px', color: '#39ff14', letterSpacing: '0.15em' }}>{selected.date}</p>
              </div>
              <button onClick={() => setSelected(null)} style={{ fontFamily: 'monospace', fontSize: '11px', color: '#6b7280', background: 'none', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '4px', padding: '4px 10px', cursor: 'pointer', flexShrink: 0 }}>✕</button>
            </div>
            <img src={selected.image_url || ''} alt={selected.title} style={{ width: '100%', maxHeight: '75vh', objectFit: 'contain', display: 'block', background: '#fff' }} />
          </div>
        </div>
      )}
    </>
  )
}
