import {
  Server,
  Component,
  Triangle,
  FileCode2,
  Wind,
  Sparkles,
  Box,
  Database,
  Leaf,
  Flame,
  GitBranch,
  Github,
  Webhook,
  Figma,
  Code2,
  TerminalSquare,
  Cpu,
  Zap,
  type LucideIcon,
} from 'lucide-react'

export interface TechMeta {
  icon: LucideIcon
  color: string
}

export const TECH_ICONS: Record<string, TechMeta> = {
  Go: { icon: Server, color: '#00ADD8' },
  React: { icon: Component, color: '#61DAFB' },
  'Next.js': { icon: Triangle, color: '#EDEDED' },
  TypeScript: { icon: FileCode2, color: '#3178C6' },
  'Tailwind CSS': { icon: Wind, color: '#38BDF8' },
  'Framer Motion': { icon: Sparkles, color: '#BB4CDB' },
  Docker: { icon: Box, color: '#2496ED' },
  PostgreSQL: { icon: Database, color: '#4169E1' },
  MongoDB: { icon: Leaf, color: '#47A248' },
  Redis: { icon: Flame, color: '#DC382D' },
  Git: { icon: GitBranch, color: '#F05033' },
  GitHub: { icon: Github, color: '#D7E2EA' },
  'REST API': { icon: Webhook, color: '#D7E2EA' },
  Figma: { icon: Figma, color: '#F24E1E' },
  'VS Code': { icon: Code2, color: '#007ACC' },
  Terminal: { icon: TerminalSquare, color: '#D7E2EA' },
  Linux: { icon: Cpu, color: '#FCC624' },
  Vercel: { icon: Zap, color: '#EDEDED' },
  'Google Maps': { icon: Webhook, color: '#4285F4' },
  Tailwind: { icon: Wind, color: '#38BDF8' },
}
