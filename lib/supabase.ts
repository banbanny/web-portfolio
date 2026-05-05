import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

export interface Project {
  id: string
  title: string
  description: string
  category: 'figma' | 'website' | 'graphic'
  link: string
  image_url?: string
}

export interface Certification {
  id: string
  title: string
  date: string
  image_url?: string
}

export interface TechStack {
  id: string
  name: string
  icon_url?: string
  category: string
}