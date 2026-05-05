'use client'
import { useEffect, useState } from 'react'

export default function LoadingScreen() {
  const [progress, setProgress] = useState(0)
  const [text, setText] = useState('INITIALIZING')

  const steps = ['INITIALIZING', 'LOADING ASSETS', 'BUILDING UI', 'ALMOST THERE', 'WELCOME']

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(p => {
        const next = p + Math.random() * 18 + 5
        const clamped = Math.min(next, 100)
        const stepIndex = Math.floor((clamped / 100) * (steps.length - 1))
        setText(steps[stepIndex])
        return clamped
      })
    }, 200)
    return () => clearInterval(interval)
  }, [])

  return (
    <>
      <style>{`
        @keyframes spin {
          to { transform: rotate(360deg); }
        }
        @keyframes flicker {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.6; }
        }
        .loading-screen-root {
          position: fixed;
          top: 0;
          left: 0;
          width: 100vw;
          height: 100vh;
          background: #050508;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          z-index: 9999;
          overflow: hidden;
        }
        .loading-dots-bg {
          position: absolute;
          inset: 0;
          background-image: radial-gradient(circle, #1a1a2e 1px, transparent 1px);
          background-size: 24px 24px;
          pointer-events: none;
        }
        .loading-orb-outer {
          width: 96px;
          height: 96px;
          border-radius: 50%;
          border: 2px solid #00f5ff;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 0 40px #00f5ff, 0 0 80px rgba(0,245,255,0.3);
          animation: flicker 1.5s infinite;
        }
        .loading-orb-inner {
          width: 64px;
          height: 64px;
          border-radius: 50%;
          border: 1px solid #39ff14;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 0 20px #39ff14;
          animation: flicker 2s infinite reverse;
        }
        .loading-orbit {
          position: absolute;
          inset: 0;
          border-radius: 50%;
          border: 1px solid #bf00ff;
          opacity: 0.4;
          box-shadow: 0 0 10px #bf00ff;
          animation: spin 3s linear infinite;
        }
        .loading-step-text {
          font-family: monospace;
          font-size: 12px;
          letter-spacing: 0.4em;
          color: #00f5ff;
          margin-bottom: 1.5rem;
          animation: flicker 1s infinite;
          position: relative;
          z-index: 1;
        }
        .loading-bar-track {
          width: 256px;
          height: 2px;
          background: #0d0d14;
          border-radius: 9999px;
          border: 1px solid rgba(0,245,255,0.2);
          overflow: hidden;
          position: relative;
          z-index: 1;
        }
        .loading-bar-fill {
          height: 100%;
          background: #00f5ff;
          border-radius: 9999px;
          transition: width 200ms ease;
          box-shadow: 0 0 10px #00f5ff, 0 0 20px rgba(0,245,255,0.5);
        }
        .loading-pct {
          font-family: monospace;
          font-size: 10px;
          color: rgba(0,245,255,0.6);
          margin-top: 0.5rem;
          letter-spacing: 0.15em;
          position: relative;
          z-index: 1;
        }
      `}</style>

      <div className="loading-screen-root">
        <div className="loading-dots-bg" />

        <div style={{ position: 'relative', marginBottom: '2.5rem', zIndex: 1 }}>
          <div className="loading-orb-outer">
            <div className="loading-orb-inner">
              <span style={{ color: '#00f5ff', fontFamily: 'monospace', fontSize: '12px', fontWeight: 'bold' }}>
                SYS
              </span>
            </div>
          </div>
          <div className="loading-orbit" />
        </div>

        <p className="loading-step-text">{text}</p>

        <div className="loading-bar-track">
          <div className="loading-bar-fill" style={{ width: `${progress}%` }} />
        </div>

        <p className="loading-pct">{Math.floor(progress)}%</p>
      </div>
    </>
  )
}