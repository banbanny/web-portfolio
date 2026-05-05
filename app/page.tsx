'use client'
import { useEffect, useState } from 'react'
import LoadingScreen from '@/components/LoadingScreen'
import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Projects from '@/components/Projects'
import Certifications from '@/components/Certifications'
import TechStack from '@/components/TechStack'
import Footer from '@/components/Footer'


export default function Home() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2800)
    return () => clearTimeout(timer)
  }, [])

  if (loading) return <LoadingScreen />

  return (
    <main className="dots-bg min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Certifications />
      <TechStack />
      <Footer />
    </main>
  )
}