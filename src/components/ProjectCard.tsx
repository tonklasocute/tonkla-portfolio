import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import ProjectVisual from './ProjectVisual'
import type { Project } from '../data/projects'

interface ProjectCardProps {
  project: Project
  index: number
  totalCards: number
}

const TABS = ['brief.md', 'architecture', 'results']

export default function ProjectCard({
  project,
  index,
  totalCards,
}: ProjectCardProps) {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'start start'],
  })

  const targetScale = 1 - (totalCards - 1 - index) * 0.03
  const scale = useTransform(scrollYProgress, [0, 1], [1, targetScale])

  return (
    <div
      ref={ref}
      className="sticky top-20 md:top-28 h-[65vh]"
      style={{ top: `${index * 24}px` }}
    >
      <motion.div
        style={{ scale }}
        className="h-full rounded-[28px] sm:rounded-[36px] md:rounded-[44px] border-2 border-[#D7E2EA] bg-[#0C0C0C] p-3 sm:p-5 md:p-6 flex flex-col"
      >
        <div className="flex items-start justify-between gap-3 shrink-0">
          <div className="flex items-center gap-3 sm:gap-4 min-w-0">
            <span
              className="font-black text-white leading-none shrink-0"
              style={{ fontSize: 'clamp(2.25rem, 7vw, 100px)' }}
            >
              {project.number}
            </span>
            <div className="flex flex-col gap-1 min-w-0">
              <span className="text-[#D7E2EA] uppercase tracking-widest text-[10px] sm:text-xs opacity-60">
                {project.category}
              </span>
              <span className="text-[#D7E2EA] font-medium uppercase text-base sm:text-xl md:text-2xl truncate">
                {project.name}
              </span>
            </div>
          </div>
          <div className="flex items-center gap-1.5 sm:gap-2 shrink-0">
            {project.live && (
              <span className="flex items-center gap-1.5 rounded-full border border-[#D7E2EA]/25 px-2 sm:px-2.5 py-1 text-[8px] sm:text-[9px] uppercase tracking-widest text-[#D7E2EA]/80 whitespace-nowrap">
                <span className="w-1.5 h-1.5 rounded-full bg-[#22C55E]" />
                Live project
              </span>
            )}
            {project.nda && (
              <span className="rounded-full border border-[#D7E2EA]/25 px-2 sm:px-2.5 py-1 text-[8px] sm:text-[9px] uppercase tracking-widest text-[#D7E2EA]/60 whitespace-nowrap">
                NDA
              </span>
            )}
          </div>
        </div>

        <div className="flex gap-2.5 mt-3 sm:mt-4 flex-1 min-h-0">
          <div className="w-[40%] flex flex-col gap-2.5 min-h-0">
            <ProjectVisual
              variant="browser"
              name={project.name}
              tech={project.tech}
              accent={project.accent}
              nda={project.nda}
              className="w-full rounded-[24px] sm:rounded-[30px] md:rounded-[36px]"
              style={{ height: project.nda ? 'clamp(130px, 15vw, 190px)' : 'clamp(80px, 10vw, 130px)' }}
            />
            <ProjectVisual
              variant="terminal"
              name={project.name}
              tech={project.tech}
              accent={project.accent}
              lines={project.boot}
              className="w-full flex-1 min-h-0 rounded-[24px] sm:rounded-[30px] md:rounded-[36px]"
            />
          </div>

          <div className="w-[60%] min-h-0 rounded-[24px] sm:rounded-[30px] md:rounded-[36px] border border-white/10 bg-white/[0.02] flex flex-col overflow-hidden">
            <div className="flex items-center gap-1 px-2.5 sm:px-3.5 py-1.5 sm:py-2 border-b border-white/10 shrink-0">
              {TABS.map((tab, i) => (
                <span
                  key={tab}
                  className={
                    i === 0
                      ? 'rounded-md bg-white/10 px-2 py-1 text-[8px] sm:text-[9px] font-mono text-[#D7E2EA]'
                      : 'px-2 py-1 text-[8px] sm:text-[9px] font-mono text-[#D7E2EA]/30'
                  }
                >
                  {tab}
                </span>
              ))}
            </div>

            <div className="flex-1 min-h-0 overflow-hidden px-2.5 sm:px-3.5 py-2 sm:py-2.5 flex flex-col gap-2 sm:gap-2.5">
              <div>
                <span
                  className="font-mono text-[7.5px] sm:text-[8.5px] uppercase tracking-widest"
                  style={{ color: project.accent }}
                >
                  // the problem
                </span>
                <p className="mt-1 text-[8px] sm:text-[9.5px] leading-snug text-[#D7E2EA]/85 line-clamp-2">
                  {project.problem}
                </p>
              </div>

              <div>
                <span
                  className="font-mono text-[7.5px] sm:text-[8.5px] uppercase tracking-widest"
                  style={{ color: project.accent }}
                >
                  // my role — {project.role}
                </span>
                <ul className="mt-1 flex flex-col gap-0.5">
                  {project.achievements.map((item, i) => (
                    <li key={item} className="flex gap-1.5 text-[7.5px] sm:text-[9px] leading-snug text-[#D7E2EA]/75">
                      <span className="font-mono shrink-0" style={{ color: project.accent }}>
                        {String(i + 1).padStart(2, '0')}
                      </span>
                      <span className="line-clamp-1">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="grid grid-cols-3 gap-1.5 sm:gap-2">
                {project.stats.map((stat) => (
                  <div
                    key={stat.label}
                    className="rounded-lg sm:rounded-xl border border-white/10 bg-white/[0.03] px-1.5 sm:px-2 py-1.5"
                  >
                    <div className="font-black text-white text-[11px] sm:text-sm leading-none truncate">
                      {stat.value}
                    </div>
                    <div className="mt-1 text-[6px] sm:text-[7px] uppercase tracking-wide text-[#D7E2EA]/40 leading-tight">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>

              <div className="flex-1 min-h-0 flex flex-col">
                <div className="flex items-center justify-between shrink-0">
                  <span
                    className="font-mono text-[7.5px] sm:text-[8.5px] uppercase tracking-widest"
                    style={{ color: project.accent }}
                  >
                    // system shape
                  </span>
                  {project.nda && (
                    <span className="text-[6.5px] sm:text-[7px] uppercase tracking-widest text-[#D7E2EA]/30">
                      names redacted
                    </span>
                  )}
                </div>
                <div className="mt-1 flex flex-col gap-1 overflow-hidden">
                  {project.systemShape.map((row, i) => (
                    <div key={i} className="flex gap-1">
                      {row.map((item) => (
                        <span
                          key={item.label}
                          className={
                            'flex-1 truncate rounded-md sm:rounded-lg border px-1.5 sm:px-2 py-1 text-[7px] sm:text-[8px] ' +
                            (item.variant === 'highlight'
                              ? 'border-current bg-white/5'
                              : item.variant === 'redacted'
                                ? 'border-white/10 text-[#D7E2EA]/30'
                                : 'border-white/10 text-[#D7E2EA]/70')
                          }
                          style={
                            item.variant === 'highlight'
                              ? { color: project.accent }
                              : item.variant === 'redacted'
                                ? HATCH_STYLE
                                : undefined
                          }
                        >
                          {item.label}
                        </span>
                      ))}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="flex items-center justify-between gap-2 px-2.5 sm:px-3.5 py-1.5 sm:py-2 border-t border-white/10 shrink-0">
              <div className="flex flex-wrap gap-1 min-w-0">
                {project.tech.slice(0, 4).map((t) => (
                  <span
                    key={t}
                    className="rounded-full border border-white/10 bg-white/5 px-1.5 sm:px-2 py-0.5 text-[6.5px] sm:text-[8px] uppercase tracking-wide text-[#D7E2EA]/70 whitespace-nowrap"
                  >
                    {t}
                  </span>
                ))}
              </div>
              <a
                href={`mailto:khomkrit.d@outlook.com?subject=${encodeURIComponent(`Walkthrough request — ${project.name}`)}`}
                className="shrink-0 text-[7px] sm:text-[8.5px] uppercase tracking-widest text-[#D7E2EA]/60 hover:text-[#D7E2EA] transition-colors whitespace-nowrap"
              >
                Request walkthrough →
              </a>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  )
}

const HATCH_STYLE = {
  background:
    'repeating-linear-gradient(45deg, rgba(255,255,255,0.05) 0px, rgba(255,255,255,0.05) 4px, transparent 4px, transparent 8px)',
}
