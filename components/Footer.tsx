'use client'

export default function Footer() {
  return (
    <footer id="contact" className="border-t border-[#00f5ff]/10 py-20 px-6">
      <div style={{ maxWidth: '1152px', margin: '0 auto' }}>

        {/* Main row — name left, contact right */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '48px', marginBottom: '64px' }}>

          {/* Left — big name */}
          <p style={{
            fontSize: 'clamp(48px, 8vw, 96px)',
            fontWeight: 950,
            fontFamily: 'var(--font-syne), Syne, sans-serif',
            color: '#00f5ff',
            textShadow: '0 0 30px rgba(0,245,255,0.3)',
            lineHeight: 1,
            letterSpacing: '-0.02em',
          }}>
           YOUR NAME
          </p>

          {/* Right — contact, shifted toward center */}
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: '16px', marginRight: '8vw' }}>

            <p style={{ fontFamily: 'monospace', fontSize: '11px', letterSpacing: '0.3em', color: '#00f5ff', textTransform: 'uppercase' }}>
              Want to Collaborate?
            </p>

            {/* Email + Phone */}
            <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'flex-end', gap: '10px' }}>
              <a href="mailto:nobody@example.com"
                style={{ fontFamily: 'monospace', fontSize: '11px', letterSpacing: '0.1em', color: '#9ca3af', display: 'flex', alignItems: 'center', gap: '8px', padding: '8px 16px', border: '1px solid rgba(0,245,255,0.15)', borderRadius: '6px', textDecoration: 'none', transition: 'all 0.3s ease' }}
                onMouseEnter={e => { (e.currentTarget as HTMLAnchorElement).style.color = '#00f5ff'; (e.currentTarget as HTMLAnchorElement).style.borderColor = 'rgba(0,245,255,0.4)' }}
                onMouseLeave={e => { (e.currentTarget as HTMLAnchorElement).style.color = '#9ca3af'; (e.currentTarget as HTMLAnchorElement).style.borderColor = 'rgba(0,245,255,0.15)' }}
              >
                <span style={{ color: '#00f5ff' }}>✉</span>
                nobody@example.com
              </a>

              <a href="tel:09999999999"
                style={{ fontFamily: 'monospace', fontSize: '11px', letterSpacing: '0.1em', color: '#9ca3af', display: 'flex', alignItems: 'center', gap: '8px', padding: '8px 16px', border: '1px solid rgba(57,255,20,0.15)', borderRadius: '6px', textDecoration: 'none', transition: 'all 0.3s ease' }}
                onMouseEnter={e => { (e.currentTarget as HTMLAnchorElement).style.color = '#39ff14'; (e.currentTarget as HTMLAnchorElement).style.borderColor = 'rgba(57,255,20,0.4)' }}
                onMouseLeave={e => { (e.currentTarget as HTMLAnchorElement).style.color = '#9ca3af'; (e.currentTarget as HTMLAnchorElement).style.borderColor = 'rgba(57,255,20,0.15)' }}
              >
                <span style={{ color: '#39ff14' }}>✆</span>
                09999999999
              </a>
            </div>

            {/* Divider */}
            <div style={{ width: '55%', height: '2px', background: 'rgba(0,245,255,0.08)' }} />

            {/* GitHub + LinkedIn */}
            <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'flex-end', gap: '10px' }}>
              <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer"
                style={{ fontFamily: 'monospace', fontSize: '11px', letterSpacing: '0.1em', color: '#9ca3af', display: 'flex', alignItems: 'center', gap: '8px', padding: '8px 16px', border: '1px solid rgba(0,245,255,0.15)', borderRadius: '6px', textDecoration: 'none', transition: 'all 0.3s ease' }}
                onMouseEnter={e => { (e.currentTarget as HTMLAnchorElement).style.color = '#00f5ff'; (e.currentTarget as HTMLAnchorElement).style.borderColor = 'rgba(0,245,255,0.4)' }}
                onMouseLeave={e => { (e.currentTarget as HTMLAnchorElement).style.color = '#9ca3af'; (e.currentTarget as HTMLAnchorElement).style.borderColor = 'rgba(0,245,255,0.15)' }}
              >
                <svg width="13" height="13" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
                </svg>
                YOUR GITHUB
              </a>

              <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer"
                style={{ fontFamily: 'monospace', fontSize: '11px', letterSpacing: '0.1em', color: '#9ca3af', display: 'flex', alignItems: 'center', gap: '8px', padding: '8px 16px', border: '1px solid rgba(0,119,181,0.25)', borderRadius: '6px', textDecoration: 'none', transition: 'all 0.3s ease' }}
                onMouseEnter={e => { (e.currentTarget as HTMLAnchorElement).style.color = '#0077b5'; (e.currentTarget as HTMLAnchorElement).style.borderColor = 'rgba(0,119,181,0.6)' }}
                onMouseLeave={e => { (e.currentTarget as HTMLAnchorElement).style.color = '#9ca3af'; (e.currentTarget as HTMLAnchorElement).style.borderColor = 'rgba(0,119,181,0.25)' }}
              >
                <span style={{ fontWeight: 700 }}>in</span>
                LinkedIn
              </a>
            </div>

          </div>
        </div>

        {/* Bottom bar */}
        <div style={{ borderTop: '1px solid rgba(0,245,255,0.08)', paddingTop: '24px', display: 'flex', justifyContent: 'center', alignItems: 'center', flexWrap: 'wrap', gap: '12px' }}>
          <p style={{ fontFamily: 'monospace', fontSize: '10px', color: '#374151', letterSpacing: '0.15em' }}>
            © {new Date().getFullYear()} IVANNE OBEDIENTE ● 
        All Rights Reserved.
          </p>
          
        </div>

      </div>
    </footer>
  )
}