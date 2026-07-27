import { useRef, useState, type MouseEvent } from 'react'
import { motion } from 'framer-motion'
import FadeIn from './FadeIn'
import TechMarqueeItem from './TechMarqueeItem'
import { TECH_CATEGORIES } from '../data/techStackCategories'

const PARTICLES = [
  { top: '15%', left: '18%', duration: 6 },
  { top: '28%', left: '78%', duration: 7.5 },
  { top: '58%', left: '8%', duration: 5.5 },
  { top: '82%', left: '62%', duration: 6.5 },
  { top: '46%', left: '92%', duration: 7 },
  { top: '72%', left: '35%', duration: 6.2 },
]

function MarqueeRow({
  title,
  items,
  index,
  isLast,
}: {
  title: string
  items: string[]
  index: number
  isLast: boolean
}) {
  const rowRef = useRef<HTMLDivElement>(null)
  const [spotlight, setSpotlight] = useState<{ x: number; y: number } | null>(null)
  const doubled = [...items, ...items]
  const duration = 8 + items.length * 3

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    const rect = rowRef.current?.getBoundingClientRect()
    if (!rect) return
    setSpotlight({ x: e.clientX - rect.left, y: e.clientY - rect.top })
  }

  return (
    <FadeIn delay={index * 0.08} y={20}>
      <div
        ref={rowRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={() => setSpotlight(null)}
        className={`relative flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-8 px-5 sm:px-8 py-6 sm:py-7 ${
          !isLast ? 'border-b border-white/[0.06]' : ''
        }`}
      >
        <div
          className="pointer-events-none absolute inset-0 transition-opacity duration-300"
          style={{
            opacity: spotlight ? 1 : 0,
            background: spotlight
              ? `radial-gradient(380px circle at ${spotlight.x}px ${spotlight.y}px, rgba(255,255,255,0.05), transparent 70%)`
              : undefined,
          }}
        />

        <span className="relative flex shrink-0 items-baseline gap-2 sm:w-36 text-[#D7E2EA]/45 font-semibold uppercase tracking-[0.2em] text-[11px] sm:text-xs">
          {title}
          <span className="font-mono normal-case tracking-normal text-[#D7E2EA]/25">
            {String(items.length).padStart(2, '0')}
          </span>
        </span>

        <div className="relative flex-1 overflow-hidden">
          <div
            className={`flex w-max gap-3 marquee-track ${index % 2 === 1 ? 'marquee-reverse' : ''}`}
            style={{ animationDuration: `${duration}s` }}
          >
            {doubled.map((name, i) => (
              <TechMarqueeItem key={`${name}-${i}`} name={name} />
            ))}
          </div>
          <div className="pointer-events-none absolute inset-y-0 left-0 w-10 sm:w-16 bg-gradient-to-r from-[#0C0C0C] to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-10 sm:w-16 bg-gradient-to-l from-[#0C0C0C] to-transparent" />
        </div>
      </div>
    </FadeIn>
  )
}

export default function TechStackSection() {
  return (
    <section
      id="skills"
      className="relative bg-[#0C0C0C] overflow-hidden px-5 sm:px-8 md:px-10 py-24 sm:py-28 md:py-36"
    >
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-[-8%] left-[8%] w-[380px] h-[380px] rounded-full blur-[120px] opacity-30"
          style={{
            background: 'radial-gradient(circle, #7621B0 0%, transparent 70%)',
          }}
        />
        <div
          className="absolute bottom-[-8%] right-[6%] w-[340px] h-[340px] rounded-full blur-[120px] opacity-20"
          style={{
            background: 'radial-gradient(circle, #B600A8 0%, transparent 70%)',
          }}
        />
        <div
          className="absolute inset-0 opacity-[0.15]"
          style={{
            backgroundImage:
              'linear-gradient(rgba(215,226,234,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(215,226,234,0.06) 1px, transparent 1px)',
            backgroundSize: '48px 48px',
          }}
        />
        {PARTICLES.map((p, i) => (
          <motion.span
            key={i}
            className="absolute w-1 h-1 rounded-full bg-[#D7E2EA]/40"
            style={{ top: p.top, left: p.left }}
            animate={{ y: [0, -18, 0], opacity: [0.15, 0.55, 0.15] }}
            transition={{
              duration: p.duration,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: i * 0.4,
            }}
          />
        ))}
      </div>

      <div className="relative max-w-[1280px] mx-auto">
        <FadeIn duration={0.8}>
          <h2
            className="hero-heading font-black uppercase leading-none tracking-tight text-center"
            style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}
          >
            Tech Stack
          </h2>
        </FadeIn>

        <FadeIn delay={0.15} duration={0.7}>
          <p
            className="text-[#D7E2EA]/60 font-light text-center max-w-xl mx-auto mt-6 sm:mt-8 mb-16 sm:mb-20 md:mb-24"
            style={{ fontSize: 'clamp(0.9rem, 1.6vw, 1.15rem)' }}
          >
            The technologies I use to design, build, and deliver modern
            digital experiences.
          </p>
        </FadeIn>

        <div
          className="relative mx-auto max-w-5xl rounded-[28px] sm:rounded-[32px] border border-white/10 bg-[#0C0C0C] overflow-hidden"
          style={{ boxShadow: '0 40px 80px -40px rgba(0,0,0,0.8)' }}
        >
          {TECH_CATEGORIES.map((category, i) => (
            <MarqueeRow
              key={category.title}
              title={category.title}
              items={category.items}
              index={i}
              isLast={i === TECH_CATEGORIES.length - 1}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
