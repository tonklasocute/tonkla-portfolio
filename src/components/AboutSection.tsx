import { motion } from 'framer-motion'
import { Terminal } from 'lucide-react'
import type { ReactNode } from 'react'
import FadeIn from './FadeIn'
import AnimatedText from './AnimatedText'
import ContactButton from './ContactButton'
import TechBadge from './TechBadge'

const ABOUT_PARAGRAPHS = [
  "I'm a Full Stack Developer with a deep specialization in Go and microservices — I've built backend platforms serving national-scale government sectors, handling tens of thousands of requests a day.",
  'I move fluidly between backend architecture and frontend craft, pairing PostgreSQL-backed APIs with modern interfaces in React and Next.js.',
  'I care about clean code, thoughtful UX, and shipping systems that are both reliable and easy to use.',
]

const PROFILE_LINES: { indent: number; content: ReactNode }[] = [
  { indent: 0, content: <><span style={{ color: '#BB4CDB' }}>const</span> <span style={{ color: '#D7E2EA' }}>about</span> = {'{'}</> },
  { indent: 1, content: <><span style={{ color: '#7DD3FC' }}>role</span>: <span style={{ color: '#A5D6A7' }}>'Full Stack Developer'</span>,</> },
  { indent: 1, content: <><span style={{ color: '#7DD3FC' }}>focus</span>: [<span style={{ color: '#A5D6A7' }}>'Go'</span>, <span style={{ color: '#A5D6A7' }}>'Microservices'</span>, <span style={{ color: '#A5D6A7' }}>'React'</span>],</> },
  { indent: 1, content: <><span style={{ color: '#7DD3FC' }}>approach</span>: <span style={{ color: '#A5D6A7' }}>'ship fast, polish always'</span>,</> },
  { indent: 1, content: <><span style={{ color: '#7DD3FC' }}>mindset</span>: <span style={{ color: '#A5D6A7' }}>'always learning'</span>,</> },
  { indent: 0, content: <>{'}'}</> },
]

const CORNER_BADGES = [
  { name: 'Go', size: 'md' as const, position: '-top-6 -left-6 sm:-top-8 sm:-left-8', delay: 0.2 },
  { name: 'React', size: 'md' as const, position: '-top-6 -right-6 sm:-top-8 sm:-right-8', delay: 0.6 },
  { name: 'Docker', size: 'sm' as const, position: '-bottom-5 -left-5 sm:-bottom-6 sm:-left-6', delay: 1 },
  { name: 'TypeScript', size: 'sm' as const, position: '-bottom-5 -right-5 sm:-bottom-6 sm:-right-6', delay: 1.4 },
]

export default function AboutSection() {
  return (
    <section id="about" className="relative px-5 sm:px-8 md:px-10 py-20 sm:py-28 md:py-36">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-12 items-center">
        <div className="flex flex-col gap-8 sm:gap-10">
          <FadeIn y={40}>
            <h2
              className="hero-heading font-black uppercase leading-none tracking-tight"
              style={{ fontSize: 'clamp(3rem, 9vw, 120px)' }}
            >
              About me
            </h2>
          </FadeIn>

          <div className="flex flex-col gap-4 sm:gap-5">
            {ABOUT_PARAGRAPHS.map((text) => (
              <AnimatedText
                key={text}
                text={text}
                className="text-[#D7E2EA] font-medium leading-relaxed max-w-[520px]"
                style={{ fontSize: 'clamp(1rem, 1.8vw, 1.25rem)' }}
              />
            ))}
          </div>

          <FadeIn delay={0.2}>
            <ContactButton />
          </FadeIn>
        </div>

        <FadeIn delay={0.2} x={60} y={0} duration={0.9}>
          <div className="relative w-full max-w-[440px] mx-auto">
            <div
              className="absolute inset-0 -z-10 rounded-full blur-3xl"
              style={{
                background:
                  'radial-gradient(circle, rgba(182,0,168,0.3) 0%, rgba(118,33,176,0.18) 45%, transparent 75%)',
              }}
            />

            {CORNER_BADGES.map((badge) => (
              <motion.div
                key={badge.name}
                className={`absolute z-20 hidden sm:block ${badge.position}`}
                animate={{ y: [0, -10, 0] }}
                transition={{
                  duration: 4.5,
                  repeat: Infinity,
                  ease: 'easeInOut',
                  delay: badge.delay,
                }}
              >
                <TechBadge name={badge.name} size={badge.size} />
              </motion.div>
            ))}

            <div
              className="relative rounded-[24px] sm:rounded-[28px] border border-white/10 overflow-hidden backdrop-blur-md"
              style={{
                background:
                  'linear-gradient(160deg, rgba(255,255,255,0.07) 0%, rgba(255,255,255,0.015) 100%)',
                boxShadow:
                  '0 30px 60px -20px rgba(0,0,0,0.6), inset 0 0 0 1px rgba(255,255,255,0.04)',
              }}
            >
              <div className="flex items-center gap-2 px-4 sm:px-5 py-3 border-b border-white/10">
                <span className="w-2.5 h-2.5 rounded-full bg-[#FF5F56]" />
                <span className="w-2.5 h-2.5 rounded-full bg-[#FFBD2E]" />
                <span className="w-2.5 h-2.5 rounded-full bg-[#27C93F]" />
                <span className="ml-2 flex items-center gap-1.5 text-[#D7E2EA]/50 text-[10px] sm:text-xs">
                  <Terminal size={12} />
                  about.ts
                </span>
              </div>

              <div className="px-4 sm:px-6 py-5 sm:py-7 font-mono text-[11px] sm:text-xs md:text-sm leading-relaxed">
                {PROFILE_LINES.map((line, i) => (
                  <div key={i} style={{ paddingLeft: `${line.indent * 1.1}em` }}>
                    {line.content}
                    {i === PROFILE_LINES.length - 2 && (
                      <motion.span
                        className="inline-block w-[6px] h-[1em] bg-[#D7E2EA] ml-1 align-middle"
                        animate={{ opacity: [1, 1, 0, 0] }}
                        transition={{ duration: 1, repeat: Infinity, times: [0, 0.5, 0.5, 1] }}
                      />
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
