import { motion } from 'framer-motion'
import FadeIn from './FadeIn'
import TechPill from './TechPill'
import { TECH_CATEGORIES } from '../data/techStackCategories'

const badgeContainerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.05, delayChildren: 0.1 } },
}

const PARTICLES = [
  { top: '15%', left: '18%', duration: 6 },
  { top: '28%', left: '78%', duration: 7.5 },
  { top: '58%', left: '8%', duration: 5.5 },
  { top: '82%', left: '62%', duration: 6.5 },
  { top: '46%', left: '92%', duration: 7 },
  { top: '72%', left: '35%', duration: 6.2 },
]

function CategoryCard({
  title,
  items,
  delay,
}: {
  title: string
  items: string[]
  delay: number
}) {
  return (
    <FadeIn delay={delay} y={30} duration={0.7} className="h-full">
      <div
        className="relative rounded-[28px] sm:rounded-[32px] border border-white/10 backdrop-blur-md p-6 sm:p-7 md:p-8 h-full"
        style={{
          background:
            'linear-gradient(160deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0.012) 100%)',
          boxShadow: '0 20px 50px -30px rgba(0,0,0,0.6)',
        }}
      >
        <span className="block text-[#D7E2EA]/50 font-semibold uppercase tracking-[0.2em] text-[11px] sm:text-xs mb-5 sm:mb-6">
          {title}
        </span>
        <motion.div
          className="flex flex-wrap gap-2 sm:gap-2.5"
          variants={badgeContainerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '50px', amount: 0 }}
        >
          {items.map((name) => (
            <TechPill key={name} name={name} />
          ))}
        </motion.div>
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

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {TECH_CATEGORIES.map((category, i) => (
            <CategoryCard
              key={category.title}
              title={category.title}
              items={category.items}
              delay={i * 0.1}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
