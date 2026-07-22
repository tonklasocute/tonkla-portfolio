import { useEffect, useRef, useState } from 'react'
import {
  ROW_1_PROJECTS,
  ROW_2_PROJECTS,
  type MarqueeProject,
} from '../data/marqueeProjects'

function Tile({ project }: { project: MarqueeProject }) {
  return (
    <div
      className="relative w-[420px] h-[270px] rounded-2xl flex-shrink-0 overflow-hidden border border-white/10"
      style={{
        background:
          'linear-gradient(160deg, rgba(255,255,255,0.06) 0%, rgba(255,255,255,0.015) 100%)',
      }}
    >
      <div
        className="absolute inset-0 opacity-40"
        style={{
          background: `radial-gradient(circle at 20% 15%, ${project.accent}55 0%, transparent 55%)`,
        }}
      />
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            'linear-gradient(rgba(215,226,234,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(215,226,234,0.06) 1px, transparent 1px)',
          backgroundSize: '24px 24px',
        }}
      />

      <div className="relative h-full flex flex-col justify-between p-5">
        <div className="flex items-center gap-1.5">
          <span className="w-2 h-2 rounded-full bg-[#FF5F56]" />
          <span className="w-2 h-2 rounded-full bg-[#FFBD2E]" />
          <span className="w-2 h-2 rounded-full bg-[#27C93F]" />
        </div>

        <div className="flex flex-col gap-1.5">
          <span
            className="text-[10px] font-mono uppercase tracking-widest"
            style={{ color: project.accent }}
          >
            {project.tag}
          </span>
          <span className="text-[#D7E2EA] font-medium text-lg leading-snug">
            {project.name}
          </span>
        </div>
      </div>
    </div>
  )
}

export default function MarqueeSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const [offset, setOffset] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const section = sectionRef.current
      if (!section) return
      const sectionTop = section.getBoundingClientRect().top + window.scrollY
      const next =
        (window.scrollY - sectionTop + window.innerHeight) * 0.3
      setOffset(next)
    }

    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const row1 = [...ROW_1_PROJECTS, ...ROW_1_PROJECTS, ...ROW_1_PROJECTS]
  const row2 = [...ROW_2_PROJECTS, ...ROW_2_PROJECTS, ...ROW_2_PROJECTS]

  return (
    <section
      ref={sectionRef}
      className="bg-[#0C0C0C] pt-24 sm:pt-32 md:pt-40 pb-10 overflow-hidden"
    >
      <div className="flex flex-col gap-3">
        <div
          className="flex gap-3"
          style={{
            transform: `translateX(${offset - 200}px)`,
            willChange: 'transform',
          }}
        >
          {row1.map((project, i) => (
            <Tile key={`row1-${i}`} project={project} />
          ))}
        </div>
        <div
          className="flex gap-3"
          style={{
            transform: `translateX(${-(offset - 200)}px)`,
            willChange: 'transform',
          }}
        >
          {row2.map((project, i) => (
            <Tile key={`row2-${i}`} project={project} />
          ))}
        </div>
      </div>
    </section>
  )
}
