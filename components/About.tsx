'use client'

export default function About() {
  return (
    <section id="about" className="py-20 md:py-32 px-5 sm:px-6" style={{ maxWidth: '1152px', margin: '0 auto' }}>

      <p style={{ fontFamily: 'monospace', fontSize: '12px', letterSpacing: '0.3em', color: '#00f5ff', marginBottom: '16px', textTransform: 'uppercase', textAlign: 'center' }}>
        This is what you need to know about me!
      </p>

      {/* Always side by side — text left, image right */}
      <div style={{ display: 'flex', flexDirection: 'row', gap: '40px', alignItems: 'center' }}>

        {/* Left — text */}
        <div style={{ flex: 1, minWidth: 0 }}>
          <h2 className="section-title text-white" style={{ marginBottom: '16px' }}>
            About<br /><span className="neon-text-cyan">Me.</span>
          </h2>
          <div style={{ width: '64px', height: '2px', background: '#00f5ff', boxShadow: '0 0 10px #00f5ff', marginBottom: '24px' }} />
          <p style={{ fontFamily: 'monospace', color: '#9ca3af', fontSize: 'clamp(11px, 1.5vw, 15px)', lineHeight: '1.8', marginBottom: '20px' }}>
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
          </p>
          <p style={{ fontFamily: 'monospace', color: '#9ca3af', fontSize: 'clamp(11px, 1.5vw, 15px)', lineHeight: '1.8', marginBottom: '32px' }}>
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
          </p>
          <div style={{ borderTop: '1px solid rgba(0,245,255,0.1)', paddingTop: '24px' }}>
            <p style={{ fontFamily: 'monospace', fontSize: '10px', letterSpacing: '0.2em', color: '#00f5ff', textTransform: 'uppercase', marginBottom: '8px' }}>Education</p>
            <p style={{ fontFamily: 'monospace', color: '#9ca3af', fontSize: 'clamp(12px, 1.5vw, 16px)', marginBottom: '4px' }}>Bachelor of Science in ......</p>
            <p style={{ fontFamily: 'monospace', color: '#4b5563', fontSize: 'clamp(10px, 1.2vw, 13px)' }}>COLLEGE OF SOMEWHERE · 2026 – Present</p>
          </div>
        </div>

        {/* Right — photo */}
        <div style={{ flexShrink: 0, width: 'clamp(120px, 30vw, 340px)', display: 'flex', justifyContent: 'center' }}>
          <div style={{
            width: '100%',
            aspectRatio: '4/5',
            border: '1px solid rgba(0,245,255,0.2)',
            borderRadius: '12px',
            overflow: 'hidden',
            position: 'relative',
            boxShadow: '0 0 30px rgba(0,245,255,0.07)',
          }}>
            <img src="/PICTURE.png" alt="Ivanne"
              style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center top' }} />
            <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: '120px', background: 'linear-gradient(to top, rgba(0,245,255,0.06), transparent)', pointerEvents: 'none' }} />
          </div>
        </div>

      </div>
    </section>
  )
}