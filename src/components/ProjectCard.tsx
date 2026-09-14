import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import LiveProjectButton from './LiveProjectButton'
import ProjectVisual from './ProjectVisual'
import type { PROJECTS } from '../data/projects'

interface ProjectCardProps {
  project: (typeof PROJECTS)[number]
  index: number
  totalCards: number
}

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
        <div className="flex items-start justify-between gap-3">
          <div className="flex items-center gap-3 sm:gap-4">
            <span
              className="font-black text-white leading-none"
              style={{ fontSize: 'clamp(2.25rem, 7vw, 100px)' }}
            >
              {project.number}
            </span>
            <div className="flex flex-col gap-1">
              <span className="text-[#D7E2EA] uppercase tracking-widest text-[10px] sm:text-xs opacity-60">
                {project.category}
              </span>
              <span className="text-[#D7E2EA] font-medium uppercase text-base sm:text-xl md:text-2xl">
                {project.name}
              </span>
            </div>
          </div>
          <LiveProjectButton compact />
        </div>

        <div className="flex gap-2.5 mt-3 sm:mt-4 flex-1">
          <div className="w-[40%] flex flex-col gap-2.5">
            <ProjectVisual
              variant="browser"
              name={project.name}
              tech={project.tech}
              accent={project.accent}
              className="w-full rounded-[24px] sm:rounded-[30px] md:rounded-[36px]"
              style={{ height: 'clamp(90px, 12vw, 160px)' }}
            />
            <ProjectVisual
              variant="terminal"
              name={project.name}
              tech={project.tech}
              accent={project.accent}
              className="w-full rounded-[24px] sm:rounded-[30px] md:rounded-[36px]"
              style={{ height: 'clamp(120px, 16vw, 230px)' }}
            />
          </div>
          <div className="w-[60%]">
            <ProjectVisual
              variant="editor"
              name={project.name}
              tech={project.tech}
              accent={project.accent}
              className="w-full h-full rounded-[24px] sm:rounded-[30px] md:rounded-[36px]"
            />
          </div>
        </div>
      </motion.div>
    </div>
  )
}
