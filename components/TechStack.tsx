'use client'

interface TechItem {
  id: string
  name: string
  category: string
  icon_url: string
}

const stack: TechItem[] = [
  { id: '1',  name: 'HTML',         category: 'Tech Stack',        icon_url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' },
  { id: '2',  name: 'CSS',          category: 'Tech Stack',        icon_url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg' },
  { id: '3',  name: 'JavaScript',   category: 'Tech Stack',        icon_url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
  { id: '4',  name: 'TypeScript',   category: 'Tech Stack',        icon_url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg' },
  { id: '5',  name: 'React',        category: 'Tech Stack',        icon_url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
  { id: '6',  name: 'Next.js',      category: 'Tech Stack',        icon_url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg' },
  { id: '7',  name: 'Tailwind CSS', category: 'Tech Stack',        icon_url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg' },
  { id: '8',  name: 'Node.js',      category: 'Tech Stack',        icon_url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
  { id: '9',  name: 'Supabase',     category: 'Tech Stack',        icon_url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/supabase/supabase-original.svg' },
  { id: '10', name: 'PostgreSQL',   category: 'Tech Stack',        icon_url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg' },
  { id: '11', name: 'Figma',        category: 'Development Tools', icon_url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg' },
  { id: '12', name: 'Canva',        category: 'Development Tools', icon_url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/canva/canva-original.svg' },
  { id: '13', name: 'Git',          category: 'Development Tools', icon_url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg' },
  { id: '14', name: 'VS Code',      category: 'Development Tools', icon_url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg' },
  { id: '15', name: 'GitHub',       category: 'Development Tools', icon_url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg' },
  { id: '16', name: 'Photoshop',    category: 'Development Tools', icon_url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/photoshop/photoshop-original.svg' },
]

export default function TechStack() {
  const techStack = stack.filter(t => t.category === 'Tech Stack')
  const devTools  = stack.filter(t => t.category === 'Development Tools')

  return (
    <>
      <style>{`
        .tech-item {
          display: flex; flex-direction: column; align-items: center; justify-content: center;
          gap: 8px; padding: 16px 8px; border-radius: 10px;
          border: 1px solid rgba(255,255,255,0.06); background: rgba(255,255,255,0.02);
          transition: all 0.3s ease; cursor: default; width: 100%; aspect-ratio: 1/1;
        }
        .tech-item:hover { background: rgba(0,245,255,0.05); border-color: rgba(0,245,255,0.2); transform: translateY(-3px); box-shadow: 0 8px 24px rgba(0,245,255,0.06); }
        .tech-item.devtool:hover { background: rgba(191,0,255,0.05); border-color: rgba(191,0,255,0.2); box-shadow: 0 8px 24px rgba(191,0,255,0.06); }
        .tech-item img { width: 32px; height: 32px; object-fit: contain; transition: transform 0.3s ease; }
        .tech-item:hover img { transform: scale(1.15); }
        .tech-item span { font-family: monospace; font-size: 9px; color: #6b7280; text-align: center; letter-spacing: 0.05em; transition: color 0.3s ease; line-height: 1.3; }
        .tech-item:hover span { color: #e5e7eb; }
        @media (min-width: 640px) { .tech-item img { width: 40px; height: 40px; } .tech-item span { font-size: 10px; } }
      `}</style>

      <section id="tech-stack" className="py-20 md:py-32 px-5 sm:px-6" style={{ maxWidth: '1152px', margin: '0 auto', marginBottom: '60px' }}>
        <div style={{ textAlign: 'center', marginBottom: '48px' }}>
          <h2 className="section-title text-white">Tech Stack<span className="neon-text-cyan">.</span></h2>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
          <div style={{ background: '#0a0a0f', border: '1px solid rgba(255,255,255,0.06)', borderRadius: '16px', padding: '24px', boxShadow: '0 0 40px rgba(0,245,255,0.03)' }}>
            <p style={{ fontFamily: 'monospace', fontSize: '9px', letterSpacing: '0.25em', textTransform: 'uppercase', color: '#00f5ff', marginBottom: '20px' }}>
              ─── JUST A SAMPLE TECH STACK. YOU CAN MODIFY THIS TO SHOW YOUR ACTUAL SKILLS.
            </p>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(72px, 1fr))', gap: '10px' }}>
              {techStack.map(tech => (
                <div key={tech.id} className="tech-item">
                  {tech.icon_url ? <img src={tech.icon_url} alt={tech.name} /> : <div style={{ width: '32px', height: '32px', borderRadius: '8px', border: '1px solid rgba(0,245,255,0.2)', opacity: 0.3 }} />}
                  <span>{tech.name}</span>
                </div>
              ))}
            </div>
          </div>
          <div style={{ background: '#0a0a0f', border: '1px solid rgba(255,255,255,0.06)', borderRadius: '16px', padding: '24px', boxShadow: '0 0 40px rgba(191,0,255,0.03)' }}>
            <p style={{ fontFamily: 'monospace', fontSize: '9px', letterSpacing: '0.25em', textTransform: 'uppercase', color: '#bf00ff', marginBottom: '20px' }}>
              ─── JUST A SAMPLE DEVELOPMENT AND DESIGN. YOU CAN MODIFY THIS TO SHOW YOUR ACTUAL SKILLS.
            </p>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(72px, 1fr))', gap: '10px' }}>
              {devTools.map(tech => (
                <div key={tech.id} className="tech-item devtool">
                  {tech.icon_url ? <img src={tech.icon_url} alt={tech.name} /> : <div style={{ width: '32px', height: '32px', borderRadius: '8px', border: '1px solid rgba(191,0,255,0.2)', opacity: 0.3 }} />}
                  <span>{tech.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
