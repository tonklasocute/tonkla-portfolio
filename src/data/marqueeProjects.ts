export interface MarqueeProject {
  name: string
  tag: string
  accent: string
}

export const MARQUEE_PROJECTS: MarqueeProject[] = [
  { name: 'E-Service Platform — Tourism & Guide Registry', tag: 'Go · Gin · GORM · PostgreSQL', accent: '#00ADD8' },
  { name: 'Controlled Energy Production System', tag: 'Go · PostgreSQL · REST API', accent: '#F59E0B' },
  { name: 'K2 Business Workflow Platform', tag: 'K2 · SQL', accent: '#7C3AED' },
  { name: 'Tourism Sector Platforms', tag: 'Go · Microservices', accent: '#00ADD8' },
  { name: 'Energy Sector Platforms', tag: 'Go · PostgreSQL', accent: '#F59E0B' },
  { name: 'Forestry Sector Platforms', tag: 'Go · REST API', accent: '#22C55E' },
  { name: 'Microservices Architecture', tag: 'Go · Clean Architecture', accent: '#38BDF8' },
  { name: 'High-Performance REST APIs', tag: '20,000+ Daily Requests', accent: '#BB4CDB' },
]

export const ROW_1_PROJECTS = MARQUEE_PROJECTS.slice(0, 4)
export const ROW_2_PROJECTS = MARQUEE_PROJECTS.slice(4)
