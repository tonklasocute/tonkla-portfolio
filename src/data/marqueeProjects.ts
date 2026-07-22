export interface MarqueeProject {
  name: string
  tag: string
  accent: string
}

export const MARQUEE_PROJECTS: MarqueeProject[] = [
  { name: 'Restaurant Management System', tag: 'Go · React · PostgreSQL', accent: '#00ADD8' },
  { name: 'Travel Planner', tag: 'Next.js · Go · Maps API', accent: '#61DAFB' },
  { name: 'Translation Management System', tag: 'Go · React · Tailwind', accent: '#38BDF8' },
  { name: 'Photo Booth', tag: 'React · TypeScript', accent: '#BB4CDB' },
  { name: 'Museum Website', tag: 'Next.js · Framer Motion', accent: '#F24E1E' },
  { name: 'Wish Machine', tag: 'React · Node.js', accent: '#47A248' },
  { name: 'DadaOS', tag: 'TypeScript · Systems UI', accent: '#DC382D' },
  { name: 'Portfolio Website', tag: 'React · Tailwind · Framer', accent: '#EDEDED' },
  { name: 'Go Backend API', tag: 'Go · Gin · GORM', accent: '#00ADD8' },
  { name: 'Interactive Landing Page', tag: 'React · Framer Motion', accent: '#FCC624' },
]

export const ROW_1_PROJECTS = MARQUEE_PROJECTS.slice(0, 5)
export const ROW_2_PROJECTS = MARQUEE_PROJECTS.slice(5)
