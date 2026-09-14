import { Image, Palette, type LucideIcon } from 'lucide-react'
import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiGo,
  SiNodedotjs,
  SiPython,
  SiOpenjdk,
  SiPostgresql,
  SiMysql,
  SiMongodb,
  SiRedis,
  SiDocker,
  SiGit,
  SiGithub,
  SiLinux,
  SiFigma,
  SiMiro,
  type IconType,
} from 'react-icons/si'

export interface TechMeta {
  icon: IconType | LucideIcon
  color: string
}

export const TECH_ICONS: Record<string, TechMeta> = {
  React: { icon: SiReact, color: '#61DAFB' },
  'Next.js': { icon: SiNextdotjs, color: '#181512' },
  TypeScript: { icon: SiTypescript, color: '#3178C6' },
  Tailwind: { icon: SiTailwindcss, color: '#38BDF8' },
  Go: { icon: SiGo, color: '#00ADD8' },
  'Node.js': { icon: SiNodedotjs, color: '#339933' },
  Python: { icon: SiPython, color: '#3776AB' },
  Java: { icon: SiOpenjdk, color: '#EA2D2E' },
  PostgreSQL: { icon: SiPostgresql, color: '#4169E1' },
  MySQL: { icon: SiMysql, color: '#4479A1' },
  MongoDB: { icon: SiMongodb, color: '#47A248' },
  Redis: { icon: SiRedis, color: '#DC382D' },
  Docker: { icon: SiDocker, color: '#2496ED' },
  Git: { icon: SiGit, color: '#F05033' },
  GitHub: { icon: SiGithub, color: '#181512' },
  Linux: { icon: SiLinux, color: '#FCC624' },
  Figma: { icon: SiFigma, color: '#F24E1E' },
  Photoshop: { icon: Image, color: '#31A8FF' },
  Miro: { icon: SiMiro, color: '#FFD02F' },
  Canva: { icon: Palette, color: '#00C4CC' },
}
