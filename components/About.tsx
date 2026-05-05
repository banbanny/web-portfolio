'use client'

export default function About() {
  return (
    <section id="about" className="py-32 px-6" style={{ maxWidth: '1152px', margin: '0 auto' }}>

    <p style={{ fontFamily: 'monospace', fontSize: '14px', letterSpacing: '0.4em', color: '#00f5ff', marginBottom: '16px', textTransform: 'uppercase', textAlign: 'center' }}>
            This is what you need to know about me!
          </p>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '64px', alignItems: 'center' }}>

        {/* Left — text */}
        <div style={{ minWidth: 0 }}>

          <h2 className="section-title text-white" style={{ marginBottom: '16px' }}>
            About<br /><span className="neon-text-cyan">Me.</span>
          </h2>

          <div style={{ width: '64px', height: '2px', background: '#00f5ff', boxShadow: '0 0 10px #00f5ff', marginBottom: '32px' }} />

          <p style={{ fontFamily: 'monospace', color: '#9ca3af', fontSize: '15px', lineHeight: '1.8', marginBottom: '20px' }}>
           "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
           Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
    
          </p>

          <p style={{ fontFamily: 'monospace', color: '#9ca3af', fontSize: '15px', lineHeight: '1.8', marginBottom: '32px' }}>
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
          </p>

          <div style={{ borderTop: '1px solid rgba(0,245,255,0.1)', paddingTop: '24px' }}>
            <p style={{ fontFamily: 'monospace', fontSize: '10px', letterSpacing: '0.2em', color: '#00f5ff', textTransform: 'uppercase', marginBottom: '8px' }}>
              Education
            </p>
            <p style={{ fontFamily: 'monospace', color: '#9ca3af', fontSize: '18px', marginBottom: '4px' }}>
              Bachelor of Science in ......
            </p>
            <p style={{ fontFamily: 'monospace', color: '#4b5563', fontSize: '14px' }}>
              COLLEGE OF SOMEWHERE · 2026 – Present
            </p>
          </div>
        </div>

        {/* Right — photo */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <div style={{
            width: '340px',
            height: '420px',
            border: '1px solid rgba(0,245,255,0.2)',
            borderRadius: '12px',
            overflow: 'hidden',
            position: 'relative',
            boxShadow: '0 0 30px rgba(0,245,255,0.07)',
            flexShrink: 0,
          }}>
            <img
              src="/PICTURE.png"
              alt="Ivanne"
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                objectPosition: 'center top',
              }}
            />
            <div style={{
              position: 'absolute',
              bottom: 0,
              left: 0,
              right: 0,
              height: '120px',
              background: 'linear-gradient(to top, rgba(0,245,255,0.06), transparent)',
              pointerEvents: 'none',
            }} />
          </div>
        </div>

      </div>
    </section>
  )
}