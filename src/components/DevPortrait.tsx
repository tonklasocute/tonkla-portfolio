import { motion } from 'framer-motion'
import { Terminal } from 'lucide-react'
import type { ReactNode } from 'react'

const CODE_LINES: { indent: number; content: ReactNode }[] = [
  { indent: 0, content: <><span style={{ color: '#BB4CDB' }}>const</span> <span style={{ color: '#D7E2EA' }}>developer</span> = {'{'}</> },
  { indent: 1, content: <><span style={{ color: '#7DD3FC' }}>name</span>: <span style={{ color: '#A5D6A7' }}>'Tonkla'</span>,</> },
  { indent: 1, content: <><span style={{ color: '#7DD3FC' }}>role</span>: <span style={{ color: '#A5D6A7' }}>'Full Stack Developer'</span>,</> },
  { indent: 1, content: <><span style={{ color: '#7DD3FC' }}>stack</span>: [<span style={{ color: '#A5D6A7' }}>'Go'</span>, <span style={{ color: '#A5D6A7' }}>'React'</span>, <span style={{ color: '#A5D6A7' }}>'Next.js'</span>],</> },
  { indent: 1, content: <><span style={{ color: '#7DD3FC' }}>shipping</span>: <span style={{ color: '#FDBA74' }}>true</span>,</> },
  { indent: 0, content: <>{'}'}</> },
]

export default function DevPortrait() {
  return (
    <div className="relative w-full aspect-[6/5]">
      <div
        className="absolute inset-0 -z-10 rounded-full blur-3xl"
        style={{
          background:
            'radial-gradient(circle, rgba(182,0,168,0.35) 0%, rgba(118,33,176,0.2) 45%, transparent 75%)',
        }}
      />

      <motion.div
        className="relative w-full h-full rounded-[24px] sm:rounded-[28px] border border-white/10 overflow-hidden backdrop-blur-md"
        style={{
          background:
            'linear-gradient(160deg, rgba(255,255,255,0.07) 0%, rgba(255,255,255,0.015) 100%)',
          boxShadow:
            '0 30px 60px -20px rgba(0,0,0,0.6), inset 0 0 0 1px rgba(255,255,255,0.04)',
        }}
        animate={{ y: [0, -14, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
      >
        <div className="flex items-center gap-2 px-4 sm:px-5 py-3 border-b border-white/10">
          <span className="w-2.5 h-2.5 rounded-full bg-[#FF5F56]" />
          <span className="w-2.5 h-2.5 rounded-full bg-[#FFBD2E]" />
          <span className="w-2.5 h-2.5 rounded-full bg-[#27C93F]" />
          <span className="ml-2 flex items-center gap-1.5 text-[#D7E2EA]/50 text-[10px] sm:text-xs">
            <Terminal size={12} />
            tonkla.dev
          </span>
        </div>

        <div className="px-4 sm:px-6 py-4 sm:py-6 font-mono text-[10px] sm:text-xs md:text-sm leading-relaxed">
          {CODE_LINES.map((line, i) => (
            <div key={i} style={{ paddingLeft: `${line.indent * 1.1}em` }}>
              {line.content}
              {i === CODE_LINES.length - 2 && (
                <motion.span
                  className="inline-block w-[6px] h-[1em] bg-[#D7E2EA] ml-1 align-middle"
                  animate={{ opacity: [1, 1, 0, 0] }}
                  transition={{ duration: 1, repeat: Infinity, times: [0, 0.5, 0.5, 1] }}
                />
              )}
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  )
}
