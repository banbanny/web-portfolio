'use client'
import { useState } from 'react'

interface Project {
  id: string
  title: string
  description: string
  category: string
  link: string
  image_url: string
}

const categories = ['All', 'website', 'figma', 'graphic']
const categoryLabels: Record<string, string> = { All: 'All', website: 'Web Projects', figma: 'Figma Designs', graphic: 'Graphic Design' }
const categoryColors: Record<string, string> = { website: '#00f5ff', figma: '#bf00ff', graphic: '#ff0090' }

const BEHANCE_URL = 'https://www.behance.net/ivanneobediente23'
const FIGMA_URL   = 'https://www.figma.com/@YOUR_USERNAME'

const projects: Project[] = [
  { id: '1', title: 'Portfolio Website', description: 'Personal portfolio built with Next.js, TypeScript, and Supabase.', category: 'website', link: 'YOUR LINK HERE', image_url: '/PROJECT.png' },
  { id: '2', title: 'E-Commerce UI Design', description: 'A complete UI/UX design for an e-commerce platform designed in Figma.', category: 'figma', link: 'YOUR LINK HERE', image_url: '/PROJECT.png' },
  { id: '3', title: 'Brand Identity Package', description: 'Logo and brand identity design for a local business.', category: 'graphic', link: 'YOUR LINK HERE', image_url: '/PROJECT.png' },
  { id: '4', title: 'Dashboard App', description: 'Admin dashboard with data visualization built with React and Tailwind.', category: 'website', link: 'YOUR LINK HERE', image_url: '/PROJECT.png' },
  { id: '5', title: 'Mobile App UI', description: 'Mobile app UI design for a food delivery service in Figma.', category: 'figma', link: 'YOUR LINK HERE', image_url: '/PROJECT.png' },
  { id: '6', title: 'Social Media Kit', description: 'Social media graphics and templates for a local brand.', category: 'graphic', link: 'YOUR LINK HERE', image_url: '/PROJECT.png' },
]

export default function Projects() {
  const [filter, setFilter] = useState('All')

  const getHref = (project: Project) => project.category === 'figma' ? project.link || FIGMA_URL : project.link || '#'
  const getCtaLabel = (cat: string) => cat === 'figma' ? 'Open in Figma' : 'Visit Project'

  const showBehancePortal = filter === 'graphic'
  const showBehanceInGrid = filter === 'All'

  const displayProjects = filter === 'All'
    ? projects.filter(p => p.category !== 'graphic')
    : filter === 'graphic' ? []
    : projects.filter(p => p.category === filter)

  return (
    <>
      <style>{`
        @keyframes cardReveal { from { opacity: 0; transform: translateY(24px); } to { opacity: 1; transform: translateY(0); } }
        @keyframes portalPulse {
          0%, 100% { box-shadow: 0 0 40px rgba(23,105,255,0.12), 0 0 80px rgba(23,105,255,0.04); }
          50% { box-shadow: 0 0 60px rgba(23,105,255,0.22), 0 0 120px rgba(23,105,255,0.08); }
        }
        @keyframes gridScroll { from { background-position: 0 0; } to { background-position: 40px 40px; } }
        @keyframes scanline { 0% { transform: translateY(-100%); opacity: 0; } 10% { opacity: 0.05; } 90% { opacity: 0.05; } 100% { transform: translateY(600px); opacity: 0; } }
        @keyframes floatDot { 0%, 100% { transform: translateY(0px); opacity: 0.5; } 50% { transform: translateY(-8px); opacity: 1; } }
        @keyframes shimmer { 0% { background-position: -200% center; } 100% { background-position: 200% center; } }
        @keyframes arrowBounce { 0%, 100% { transform: translate(0,0); } 50% { transform: translate(3px,-3px); } }
        @keyframes portalFadeIn { from { opacity: 0; transform: translateY(20px) scale(0.98); } to { opacity: 1; transform: translateY(0) scale(1); } }

        .proj-card { background: #0a0a0f; border: 1px solid rgba(255,255,255,0.07); border-radius: 12px; overflow: hidden; animation: cardReveal 0.45s ease both; transition: transform 0.3s ease, border-color 0.3s ease, box-shadow 0.3s ease; }
        .proj-card:hover { transform: translateY(-6px); }
        .proj-card.website:hover { border-color: rgba(0,245,255,0.3); box-shadow: 0 16px 48px rgba(0,245,255,0.08); }
        .proj-card.figma:hover { border-color: rgba(191,0,255,0.3); box-shadow: 0 16px 48px rgba(191,0,255,0.08); }
        .proj-thumb { position: relative; width: 100%; aspect-ratio: 16/9; overflow: hidden; background: #0d0d14; }
        .proj-img { width: 100%; height: 100%; object-fit: cover; display: block; transition: transform 0.45s ease, filter 0.45s ease; }
        .proj-card:hover .proj-img { transform: scale(1.05); filter: blur(3px) brightness(0.4); }
        .proj-thumb-overlay { position: absolute; inset: 0; display: flex; align-items: center; justify-content: center; opacity: 0; transition: opacity 0.35s ease; z-index: 2; }
        .proj-card:hover .proj-thumb-overlay { opacity: 1; }
        .proj-view-btn { font-family: monospace; font-size: 10px; letter-spacing: 0.2em; text-transform: uppercase; padding: 10px 22px; border-radius: 6px; border: 1px solid; background: rgba(5,5,8,0.5); backdrop-filter: blur(4px); cursor: pointer; text-decoration: none; display: inline-block; transition: background 0.2s ease, box-shadow 0.2s ease; }
        .proj-view-btn.website { border-color: #00f5ff; color: #00f5ff; }
        .proj-view-btn.website:hover { background: rgba(0,245,255,0.15); box-shadow: 0 0 24px rgba(0,245,255,0.4); }
        .proj-view-btn.figma { border-color: #bf00ff; color: #bf00ff; }
        .proj-view-btn.figma:hover { background: rgba(191,0,255,0.15); box-shadow: 0 0 24px rgba(191,0,255,0.4); }
        .proj-badge { position: absolute; top: 10px; left: 10px; font-family: monospace; font-size: 9px; letter-spacing: 0.15em; text-transform: uppercase; padding: 3px 8px; border-radius: 4px; border: 1px solid; background: rgba(5,5,8,0.85); z-index: 3; }
        .proj-info { padding: 14px 16px 16px; border-top: 1px solid rgba(255,255,255,0.05); }
        .proj-info-top { display: flex; align-items: flex-start; justify-content: space-between; gap: 10px; margin-bottom: 6px; }
        .proj-title { font-family: 'Syne', sans-serif; font-weight: 700; font-size: 14px; color: #fff; line-height: 1.3; }
        .proj-desc { font-family: monospace; font-size: 11px; color: #6b7280; line-height: 1.65; display: -webkit-box; -webkit-line-clamp: 2; -webkit-box-orient: vertical; overflow: hidden; }
        .proj-arrow { flex-shrink: 0; width: 28px; height: 28px; border-radius: 50%; border: 1px solid; display: flex; align-items: center; justify-content: center; font-size: 12px; transition: background 0.2s ease, box-shadow 0.2s ease; text-decoration: none; }
        .proj-placeholder { width: 100%; height: 100%; display: flex; align-items: center; justify-content: center; background: #0d0d14; }
        .proj-grid { display: grid; grid-template-columns: 1fr; gap: 16px; }
        @media (min-width: 640px) { .proj-grid { grid-template-columns: repeat(2, 1fr); } }
        @media (min-width: 1024px) { .proj-grid { grid-template-columns: repeat(3, 1fr); gap: 24px; } }

        .behance-portal { position: relative; border-radius: 20px; border: 1px solid rgba(23,105,255,0.2); background: #07050a; overflow: hidden; cursor: pointer; transition: transform 0.4s cubic-bezier(0.23,1,0.32,1), border-color 0.4s ease; animation: portalPulse 4s ease-in-out infinite, portalFadeIn 0.5s ease both; text-decoration: none; display: block; }
        .behance-portal:hover { transform: translateY(-6px) scale(1.003); border-color: rgba(23,105,255,0.5); animation: none; box-shadow: 0 0 80px rgba(23,105,255,0.2), 0 0 160px rgba(23,105,255,0.08); }
        .behance-grid-bg { position: absolute; inset: 0; background-image: linear-gradient(rgba(23,105,255,0.05) 1px,transparent 1px), linear-gradient(90deg,rgba(23,105,255,0.05) 1px,transparent 1px); background-size: 40px 40px; animation: gridScroll 10s linear infinite; opacity: 0; transition: opacity 0.4s ease; }
        .behance-portal:hover .behance-grid-bg { opacity: 1; }
        .behance-scanline { position: absolute; left: 0; right: 0; height: 2px; background: linear-gradient(90deg,transparent,rgba(23,105,255,0.4),rgba(23,105,255,0.6),rgba(23,105,255,0.4),transparent); animation: scanline 3.5s linear infinite; pointer-events: none; z-index: 2; }
        .behance-corner { position: absolute; width: 40px; height: 40px; pointer-events: none; z-index: 3; opacity: 0; transition: opacity 0.4s ease; }
        .behance-portal:hover .behance-corner { opacity: 1; }
        .behance-corner.tl { top:0;left:0; border-top: 2px solid #1769ff; border-left: 2px solid #1769ff; border-radius: 20px 0 0 0; }
        .behance-corner.tr { top:0;right:0; border-top: 2px solid #1769ff; border-right: 2px solid #1769ff; border-radius: 0 20px 0 0; }
        .behance-corner.bl { bottom:0;left:0; border-bottom: 2px solid #1769ff; border-left: 2px solid #1769ff; border-radius: 0 0 0 20px; }
        .behance-corner.br { bottom:0;right:0; border-bottom: 2px solid #1769ff; border-right: 2px solid #1769ff; border-radius: 0 0 20px 0; }
        .behance-dot { position: absolute; border-radius: 50%; background: #1769ff; pointer-events: none; }
        .behance-dot:nth-child(1) { width:5px;height:5px;top:20%;left:10%; animation: floatDot 3.2s ease-in-out infinite; box-shadow: 0 0 10px #1769ff; }
        .behance-dot:nth-child(2) { width:3px;height:3px;top:65%;left:7%; animation: floatDot 2.8s ease-in-out infinite 0.6s; box-shadow: 0 0 8px #1769ff; }
        .behance-dot:nth-child(3) { width:4px;height:4px;top:30%;right:9%; animation: floatDot 3.6s ease-in-out infinite 1.2s; box-shadow: 0 0 10px #1769ff; opacity: 0.6; }
        .behance-dot:nth-child(4) { width:3px;height:3px;top:70%;right:14%; animation: floatDot 2.4s ease-in-out infinite 0.4s; box-shadow: 0 0 6px #1769ff; }
        .behance-dot:nth-child(5) { width:4px;height:4px;top:48%;left:4%; animation: floatDot 3s ease-in-out infinite 1.8s; box-shadow: 0 0 8px #1769ff; opacity: 0.5; }
        .behance-content { position: relative; z-index: 4; display: flex; flex-direction: column; align-items: center; justify-content: center; padding: 60px 24px; text-align: center; }
        .behance-wordmark { font-size: clamp(48px, 12vw, 80px); font-weight: 900; font-family: 'Syne', sans-serif; letter-spacing: -2px; line-height: 1; background: linear-gradient(135deg,#1769ff 0%,#4d94ff 40%,#a8d4ff 60%,#1769ff 100%); background-size: 200% auto; -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text; animation: shimmer 4s linear infinite; margin-bottom: 14px; user-select: none; }
        .behance-tagline { font-family: monospace; font-size: 10px; letter-spacing: 0.25em; text-transform: uppercase; color: rgba(255,255,255,0.3); margin-bottom: 28px; user-select: none; }
        .behance-cta { display: inline-flex; align-items: center; gap: 10px; padding: 12px 28px; border-radius: 8px; border: 1px solid rgba(23,105,255,0.45); background: rgba(23,105,255,0.08); font-family: monospace; font-size: 10px; letter-spacing: 0.2em; text-transform: uppercase; color: #6aaeff; transition: all 0.3s ease; user-select: none; }
        .behance-portal:hover .behance-cta { background: rgba(23,105,255,0.18); border-color: rgba(23,105,255,0.9); color: #fff; box-shadow: 0 0 24px rgba(23,105,255,0.4); }
        .behance-arrow { display: inline-block; font-size: 14px; animation: arrowBounce 1.4s ease-in-out infinite; }
        .behance-divider { width: 100%; height: 1px; background: rgba(255,255,255,0.05); margin-top: 36px; }
        .behance-cats { display: flex; flex-wrap: wrap; justify-content: center; gap: 8px; margin-top: 20px; }
        .behance-cat { font-family: monospace; font-size: 9px; letter-spacing: 0.2em; text-transform: uppercase; color: rgba(255,255,255,0.2); padding: 0 16px; border-right: 1px solid rgba(255,255,255,0.06); }
        .behance-cat:last-child { border-right: none; }
        .behance-bottom-fade { position: absolute; bottom: 0; left: 0; right: 0; height: 80px; background: linear-gradient(to top,rgba(23,105,255,0.06),transparent); pointer-events: none; z-index: 1; }

        .behance-mini { background: #07050a; border: 1px solid rgba(23,105,255,0.18); border-radius: 12px; overflow: hidden; animation: cardReveal 0.45s ease both; transition: transform 0.3s ease, border-color 0.3s ease, box-shadow 0.3s ease; text-decoration: none; display: flex; flex-direction: column; align-items: center; justify-content: center; min-height: 200px; padding: 28px 20px; text-align: center; position: relative; cursor: pointer; }
        .behance-mini:hover { transform: translateY(-6px); border-color: rgba(23,105,255,0.45); box-shadow: 0 16px 48px rgba(23,105,255,0.1); }
        .behance-mini-bg { position: absolute; inset: 0; background: radial-gradient(ellipse at center,rgba(23,105,255,0.06) 0%,transparent 70%); pointer-events: none; }
        .behance-mini-title { font-family: 'Syne',sans-serif; font-weight: 900; font-size: 28px; letter-spacing: -1px; background: linear-gradient(135deg,#1769ff,#4d94ff); -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text; margin-bottom: 8px; position: relative; z-index: 1; }
        .behance-mini-sub { font-family: monospace; font-size: 9px; letter-spacing: 0.25em; text-transform: uppercase; color: rgba(255,255,255,0.25); margin-bottom: 16px; position: relative; z-index: 1; }
        .behance-mini-btn { display: inline-flex; align-items: center; gap: 6px; padding: 7px 18px; border-radius: 6px; border: 1px solid rgba(23,105,255,0.4); background: rgba(23,105,255,0.08); font-family: monospace; font-size: 9px; letter-spacing: 0.18em; text-transform: uppercase; color: #6aaeff; transition: all 0.3s ease; position: relative; z-index: 1; }
        .behance-mini:hover .behance-mini-btn { background: rgba(23,105,255,0.18); border-color: rgba(23,105,255,0.8); color: #fff; box-shadow: 0 0 16px rgba(23,105,255,0.3); }

        .filter-btn { font-family: monospace; font-size: 10px; letter-spacing: 0.12em; text-transform: uppercase; padding: 8px 16px; border-radius: 6px; border: 1px solid; cursor: pointer; transition: all 0.3s ease; background: transparent; }
      `}</style>

      <section id="projects" className="py-20 md:py-32 px-5 sm:px-6" style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '16px' }}>
          <p style={{ fontFamily: 'monospace', fontSize: '11px', letterSpacing: '0.25em', textTransform: 'uppercase', color: '#6b7280', marginBottom: '12px' }}>Selected Work</p>
          <h2 className="section-title text-white">Projects<span className="neon-text-pink">.</span></h2>
        </div>
        <div style={{ width: '40px', height: '2px', background: '#ff0090', margin: '20px auto 40px', borderRadius: '2px' }} />

        {/* Filter buttons — scrollable on mobile */}
        <div style={{ display: 'flex', justifyContent: 'center', gap: '8px', marginBottom: '40px', flexWrap: 'wrap' }}>
          {categories.map(cat => (
            <button key={cat} onClick={() => setFilter(cat)} className="filter-btn" style={{ borderColor: filter === cat ? (categoryColors[cat] || '#00f5ff') : 'rgba(255,255,255,0.08)', color: filter === cat ? (categoryColors[cat] || '#00f5ff') : '#6b7280', background: filter === cat ? `${categoryColors[cat] || '#00f5ff'}14` : 'transparent', boxShadow: filter === cat ? `0 0 14px ${categoryColors[cat] || '#00f5ff'}28` : 'none' }}>
              {categoryLabels[cat]}
            </button>
          ))}
        </div>

        {showBehancePortal ? (
          <a href={BEHANCE_URL} target="_blank" rel="noopener noreferrer" className="behance-portal">
            <div className="behance-grid-bg" />
            <div className="behance-scanline" />
            <div className="behance-corner tl" /><div className="behance-corner tr" />
            <div className="behance-corner bl" /><div className="behance-corner br" />
            <div className="behance-dot" /><div className="behance-dot" /><div className="behance-dot" />
            <div className="behance-dot" /><div className="behance-dot" />
            <div className="behance-bottom-fade" />
            <div className="behance-content">
              <div className="behance-wordmark">Bē</div>
              <p className="behance-tagline">All graphic design work lives on Behance</p>
              <div className="behance-cta"><span>View on Behance</span><span className="behance-arrow">↗</span></div>
              <div className="behance-divider" />
              <div className="behance-cats">
                <span className="behance-cat">Brand Identity</span>
                <span className="behance-cat">Social Media</span>
                <span className="behance-cat">Print Design</span>
              </div>
            </div>
          </a>
        ) : (
          <div className="proj-grid">
            {displayProjects.map((project, i) => {
              const color = categoryColors[project.category] || '#00f5ff'
              const href  = getHref(project)
              const cta   = getCtaLabel(project.category)
              return (
                <div key={project.id} className={`proj-card ${project.category}`} style={{ animationDelay: `${i * 80}ms` }}>
                  <div className="proj-thumb">
                    {project.image_url ? <img src={project.image_url} alt={project.title} className="proj-img" /> : <div className="proj-placeholder"><div style={{ width: '44px', height: '44px', border: `1px solid ${color}`, borderRadius: '8px', opacity: 0.2 }} /></div>}
                    <span className="proj-badge" style={{ borderColor: color, color }}>{project.category === 'website' ? 'Web' : 'Figma'}</span>
                    <div className="proj-thumb-overlay">
                      {href && href !== '#' && <a href={href} target="_blank" rel="noopener noreferrer" className={`proj-view-btn ${project.category}`} onClick={e => e.stopPropagation()}>{cta} ↗</a>}
                    </div>
                  </div>
                  <div className="proj-info">
                    <div className="proj-info-top">
                      <h3 className="proj-title">{project.title}</h3>
                      {href && href !== '#' && <a href={href} target="_blank" rel="noopener noreferrer" className="proj-arrow" style={{ borderColor: color, color }} onClick={e => e.stopPropagation()}>↗</a>}
                    </div>
                    <p className="proj-desc">{project.description}</p>
                  </div>
                </div>
              )
            })}
            {showBehanceInGrid && (
              <a href={BEHANCE_URL} target="_blank" rel="noopener noreferrer" className="behance-mini" style={{ animationDelay: `${displayProjects.length * 80}ms` }}>
                <div className="behance-mini-bg" />
                <div className="behance-mini-title">Bē</div>
                <p className="behance-mini-sub">Graphic Design Work</p>
                <div className="behance-mini-btn">View on Behance <span style={{ display: 'inline-block', animation: 'arrowBounce 1.4s ease-in-out infinite' }}>↗</span></div>
              </a>
            )}
          </div>
        )}
      </section>
    </>
  )
}
