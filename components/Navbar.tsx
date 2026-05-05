'use client'
import { useState, useEffect } from 'react'

const links = ['Home', 'About', 'Projects', 'Certifications', 'Tech Stack', 'Contact']

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [activeLink, setActiveLink] = useState('Home')
  const [clickedLink, setClickedLink] = useState('')

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollTo = (section: string) => {
    const id = section.toLowerCase().replace(' ', '-')
    document.getElementById(id === 'home' ? 'hero' : id)?.scrollIntoView({ behavior: 'smooth' })
    setActiveLink(section)
    setMenuOpen(false)
    setClickedLink(section)
    setTimeout(() => setClickedLink(''), 600)
  }

  return (
    <>
      <style>{`
        @keyframes navPulse {
          0% { transform: scale(1); opacity: 1; }
          50% { transform: scale(1.15); opacity: 0.7; }
          100% { transform: scale(1); opacity: 1; }
        }
        .nav-link-clicked {
          animation: navPulse 0.4s ease;
          color: #00f5ff !important;
        }
        .nav-underline-active {
          position: absolute;
          bottom: -4px;
          left: 0;
          height: 1px;
          width: 100%;
          background: #00f5ff;
          box-shadow: 0 0 8px #00f5ff;
        }
        .nav-underline-hover {
          position: absolute;
          bottom: -4px;
          left: 50%;
          height: 1px;
          width: 0%;
          background: #00f5ff;
          box-shadow: 0 0 6px #00f5ff;
          transition: width 0.3s ease, left 0.3s ease;
        }
        .nav-btn:hover .nav-underline-hover {
          width: 100%;
          left: 0%;
        }
        .nav-btn:hover {
          color: #00f5ff !important;
          text-shadow: 0 0 8px #00f5ff !important;
        }
      `}</style>

      <nav
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 50,
          transition: 'all 0.5s ease',
          padding: scrolled ? '12px 0' : '20px 0',
          background: scrolled ? 'rgba(5,5,8,0.92)' : 'transparent',
          backdropFilter: scrolled ? 'blur(12px)' : 'none',
          borderBottom: scrolled ? '1px solid rgba(0,245,255,0.1)' : 'none',
        }}
      >
        <div
          style={{
            maxWidth: '1152px',
            margin: '0 auto',
            padding: '0 24px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          {/* Logo — left side */}
          <button
            onClick={() => scrollTo('Home')}
            style={{
              fontFamily: 'monospace',
              fontWeight: 800,
              fontSize: '18px',
              color: '#00f5ff',
              textShadow: '0 0 10px #00f5ff, 0 0 20px rgba(0,245,255,0.4)',
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              letterSpacing: '-0.02em',
              flexShrink: 0,
            }}
          >
            &lt;NOBODY /&gt;
          </button>

          {/* Desktop Links — right side */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '28px',
              marginLeft: 'auto',
              paddingLeft: '40px',
            }}
            className="hidden md:flex"
          >
            {links.map(link => (
              <button
                key={link}
                onClick={() => scrollTo(link)}
                className={`nav-btn ${clickedLink === link ? 'nav-link-clicked' : ''}`}
                style={{
                  position: 'relative',
                  fontFamily: 'monospace',
                  fontSize: '11px',
                  letterSpacing: '0.15em',
                  textTransform: 'uppercase',
                  color: activeLink === link ? '#00f5ff' : '#9ca3af',
                  textShadow: activeLink === link ? '0 0 8px #00f5ff' : 'none',
                  background: 'none',
                  border: 'none',
                  cursor: 'pointer',
                  padding: '4px 0',
                  transition: 'color 0.3s ease, text-shadow 0.3s ease',
                  whiteSpace: 'nowrap',
                }}
              >
                {link}
                {activeLink === link && <span className="nav-underline-active" />}
                {activeLink !== link && <span className="nav-underline-hover" />}
              </button>
            ))}
          </div>

          {/* Hamburger — mobile only */}
          <button
            className="md:hidden"
            onClick={() => setMenuOpen(!menuOpen)}
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '5px',
              width: '28px',
              height: '28px',
              justifyContent: 'center',
              alignItems: 'center',
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              padding: 0,
              marginLeft: 'auto',
            }}
          >
            {[0, 1, 2].map(i => (
              <span
                key={i}
                style={{
                  display: 'block',
                  height: '2px',
                  background: '#00f5ff',
                  boxShadow: '0 0 6px #00f5ff',
                  borderRadius: '2px',
                  transition: 'all 0.3s ease',
                  width: menuOpen && i === 1 ? '0px' : '24px',
                  opacity: menuOpen && i === 1 ? 0 : 1,
                  transform:
                    menuOpen && i === 0
                      ? 'rotate(45deg) translate(5px, 5px)'
                      : menuOpen && i === 2
                      ? 'rotate(-45deg) translate(5px, -5px)'
                      : 'none',
                }}
              />
            ))}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        style={{
          position: 'fixed',
          inset: 0,
          zIndex: 40,
          background: 'rgba(5,5,8,0.96)',
          backdropFilter: 'blur(20px)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '32px',
          transition: 'opacity 0.5s ease',
          opacity: menuOpen ? 1 : 0,
          pointerEvents: menuOpen ? 'auto' : 'none',
        }}
      >
        {links.map((link, i) => (
          <button
            key={link}
            onClick={() => scrollTo(link)}
            style={{
              fontFamily: 'monospace',
              fontWeight: 700,
              fontSize: '28px',
              color: activeLink === link ? '#00f5ff' : '#6b7280',
              textShadow: activeLink === link ? '0 0 12px #00f5ff' : 'none',
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              transitionDelay: menuOpen ? `${i * 60}ms` : '0ms',
              transform: menuOpen ? 'translateY(0)' : 'translateY(20px)',
              opacity: menuOpen ? 1 : 0,
            }}
          >
            {link}
          </button>
        ))}
      </div>
    </>
  )
}