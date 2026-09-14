import { motion } from 'framer-motion'
import FadeIn from './FadeIn'
import TechBadge from './TechBadge'
import { TECH_CATEGORIES } from '../data/techStackCategories'

const PARTICLES = [
  { top: '15%', left: '18%', duration: 6 },
  { top: '28%', left: '78%', duration: 7.5 },
  { top: '58%', left: '8%', duration: 5.5 },
  { top: '82%', left: '62%', duration: 6.5 },
  { top: '46%', left: '92%', duration: 7 },
  { top: '72%', left: '35%', duration: 6.2 },
]

export default function TechStackSection() {
  return (
    <section
      id="skills"
      className="relative h-screen flex flex-col justify-center bg-[#0C0C0C] overflow-hidden px-5 sm:px-8 md:px-10"
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

      <div className="relative max-w-[1280px] mx-auto w-full [@media(max-height:820px)]:!scale-90">
        <FadeIn duration={0.8}>
          <h2
            className="hero-heading font-black uppercase leading-none tracking-tight text-center"
            style={{ fontSize: 'clamp(2.5rem, 8vw, 100px)' }}
          >
            Tech Stack
          </h2>
        </FadeIn>

        <FadeIn delay={0.15} duration={0.7}>
          <p
            className="text-[#D7E2EA]/60 font-light text-center max-w-xl mx-auto mt-4 sm:mt-6 mb-10 sm:mb-14"
            style={{ fontSize: 'clamp(0.85rem, 1.4vw, 1.1rem)' }}
          >
            The technologies I use to design, build, and deliver modern
            digital experiences.
          </p>
        </FadeIn>

        <div
          className="relative mx-auto max-w-5xl rounded-[28px] sm:rounded-[32px] border border-white/10 bg-white/[0.015] backdrop-blur-sm grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 divide-y sm:divide-y-0 divide-x-0 lg:divide-x divide-white/[0.06]"
          style={{ boxShadow: '0 40px 80px -40px rgba(0,0,0,0.8)' }}
        >
          {TECH_CATEGORIES.map((category, i) => (
            <FadeIn key={category.title} delay={i * 0.08} y={20}>
              <div className="flex flex-col items-center gap-4 sm:gap-5 px-4 sm:px-5 py-6 sm:py-7 h-full">
                <span className="text-[#D7E2EA]/45 font-semibold uppercase tracking-[0.2em] text-[11px] sm:text-xs">
                  {category.title}
                </span>
                <div className="grid grid-cols-2 gap-3 sm:gap-4">
                  {category.items.map((name) => (
                    <TechBadge key={name} name={name} size="sm" />
                  ))}
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}
