import type { Metadata } from 'next'
import './globals.css'


export const metadata: Metadata = {
  title: 'PORTFOLIO',
  description: 'Personal portfolio built with Next.js & Supabase',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      
      <body>
      
        {children}</body>
    </html>
  )
}