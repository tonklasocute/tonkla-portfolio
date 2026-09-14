import { Boxes, Image, PenTool, Palette, Workflow, type LucideIcon } from 'lucide-react'
import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiGo,
  SiGin,
  SiPostgresql,
  SiMysql,
  SiMongodb,
  SiRedis,
  SiDocker,
  SiGit,
  SiGithub,
  SiLinux,
  SiFigma,
  type IconType,
} from 'react-icons/si'

export interface TechMeta {
  icon: IconType | LucideIcon
  color: string
}

export const TECH_ICONS: Record<string, TechMeta> = {
  React: { icon: SiReact, color: '#61DAFB' },
  'Next.js': { icon: SiNextdotjs, color: '#EDEDED' },
  TypeScript: { icon: SiTypescript, color: '#3178C6' },
  'Tailwind CSS': { icon: SiTailwindcss, color: '#38BDF8' },
  Go: { icon: SiGo, color: '#00ADD8' },
  Gin: { icon: SiGin, color: '#00ADD8' },
  GORM: { icon: Boxes, color: '#7C3AED' },
  Microservices: { icon: Workflow, color: '#00ADD8' },
  PostgreSQL: { icon: SiPostgresql, color: '#4169E1' },
  MySQL: { icon: SiMysql, color: '#4479A1' },
  MongoDB: { icon: SiMongodb, color: '#47A248' },
  Redis: { icon: SiRedis, color: '#DC382D' },
  Docker: { icon: SiDocker, color: '#2496ED' },
  Git: { icon: SiGit, color: '#F05033' },
  GitHub: { icon: SiGithub, color: '#D7E2EA' },
  Linux: { icon: SiLinux, color: '#FCC624' },
  Figma: { icon: SiFigma, color: '#F24E1E' },
  Photoshop: { icon: Image, color: '#31A8FF' },
  Illustrator: { icon: PenTool, color: '#FF9A00' },
  Canva: { icon: Palette, color: '#00C4CC' },
}
