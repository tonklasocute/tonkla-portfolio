import { motion } from 'framer-motion'
import FadeIn from './FadeIn'
import { TECH_ICONS } from '../data/techIcons'
import { TECH_STACK } from '../data/techStack'

export default function TechStackSection() {
  return (
    <section className="bg-[#0C0C0C] px-5 sm:px-8 md:px-10 py-20 sm:py-24 md:py-32">
      <FadeIn>
        <h2
          className="hero-heading font-black uppercase leading-none tracking-tight text-center mb-16 sm:mb-20 md:mb-24"
          style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}
        >
          Tech Stack
        </h2>
      </FadeIn>

      <div className="max-w-5xl mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 sm:gap-5">
        {TECH_STACK.map((name, i) => {
          const meta = TECH_ICONS[name]
          const Icon = meta?.icon
          const color = meta?.color ?? '#D7E2EA'

          return (
            <FadeIn key={name} delay={i * 0.05} y={20}>
              <motion.div
                className="flex flex-col items-center justify-center gap-3 rounded-3xl border border-white/10 py-8 px-4 cursor-default"
                style={{
                  background:
                    'linear-gradient(160deg, rgba(255,255,255,0.06) 0%, rgba(255,255,255,0.015) 100%)',
                }}
                animate={{ y: [0, -8, 0] }}
                transition={{
                  duration: 4 + (i % 3),
                  repeat: Infinity,
                  ease: 'easeInOut',
                  delay: i * 0.15,
                }}
                whileHover={{
                  scale: 1.08,
                  y: -10,
                  boxShadow: `0 20px 40px -12px ${color}55`,
                  borderColor: `${color}88`,
                }}
              >
                {Icon && <Icon size={32} color={color} strokeWidth={1.75} />}
                <span className="text-[#D7E2EA] font-medium uppercase tracking-wide text-xs sm:text-sm">
                  {name}
                </span>
              </motion.div>
            </FadeIn>
          )
        })}
      </div>
    </section>
  )
}
