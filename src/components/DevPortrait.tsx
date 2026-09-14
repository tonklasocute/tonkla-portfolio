import { motion } from 'framer-motion'
import type { ReactNode } from 'react'

const CODE_LINES: { indent: number; content: ReactNode }[] = [
  { indent: 0, content: <><span style={{ color: '#7C3AED' }}>const</span> <span style={{ color: '#181512' }}>developer</span> = {'{'}</> },
  { indent: 1, content: <><span style={{ color: '#181512' }}>name</span>: <span style={{ color: '#B5502E' }}>'Tonkla'</span>,</> },
  { indent: 1, content: <><span style={{ color: '#181512' }}>role</span>: <span style={{ color: '#B5502E' }}>'Full Stack Developer'</span>,</> },
  { indent: 1, content: <><span style={{ color: '#181512' }}>stack</span>: [<span style={{ color: '#B5502E' }}>'Go'</span>, <span style={{ color: '#B5502E' }}>'Microservices'</span>, <span style={{ color: '#B5502E' }}>'React'</span>],</> },
  { indent: 1, content: <><span style={{ color: '#181512' }}>database</span>: <span style={{ color: '#B5502E' }}>'PostgreSQL'</span>,</> },
  { indent: 1, content: <><span style={{ color: '#181512' }}>shipping</span>: <span style={{ color: '#0F766E' }}>true</span>,</> },
  { indent: 0, content: <>{'}'}</> },
]

export default function DevPortrait() {
  return (
    <motion.div
      className="relative w-full"
      animate={{ y: [0, -14, 0] }}
      transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
    >
      <div
        className="absolute inset-0 rounded-2xl bg-[#181512] translate-x-2.5 translate-y-2.5"
        aria-hidden
      />

      <div className="relative rounded-2xl border-2 border-[#181512] overflow-hidden bg-white">
        <div className="flex items-center gap-2 px-4 sm:px-5 py-3 border-b-2 border-[#181512] bg-[#F5F1EA]">
          <span className="w-3 h-3 rounded-full bg-[#B5502E]" />
          <span className="w-3 h-3 rounded-full bg-[#E8B84B]" />
          <span className="w-3 h-3 rounded-full border border-[#181512]" />
          <span className="ml-2 text-[#57534E] font-mono text-[11px] sm:text-xs">
            ~/tonkla.dev
          </span>
        </div>

        <div className="px-5 sm:px-7 py-6 sm:py-8 font-mono text-[12px] sm:text-sm md:text-base leading-relaxed">
          {CODE_LINES.map((line, i) => (
            <div key={i} style={{ paddingLeft: `${line.indent * 1.4}em` }}>
              {line.content}
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  )
}
