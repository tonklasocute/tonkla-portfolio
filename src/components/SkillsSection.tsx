import { motion } from 'framer-motion'
import FadeIn from './FadeIn'
import { SKILLS } from '../data/skills'

export default function SkillsSection() {
  return (
    <section id="skills" className="bg-[#0C0C0C] px-5 sm:px-8 md:px-10 py-20 sm:py-24 md:py-32">
      <FadeIn>
        <h2
          className="hero-heading font-black uppercase leading-none tracking-tight text-center mb-16 sm:mb-20 md:mb-24"
          style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}
        >
          Skills
        </h2>
      </FadeIn>

      <div className="max-w-3xl mx-auto flex flex-col gap-6 sm:gap-7">
        {SKILLS.map((skill, i) => (
          <FadeIn key={skill.name} delay={i * 0.06}>
            <div className="flex flex-col gap-2">
              <div className="flex items-baseline justify-between">
                <span className="text-[#D7E2EA] font-medium uppercase tracking-wide text-sm sm:text-base">
                  {skill.name}
                </span>
                <span className="font-mono text-[#D7E2EA]/50 text-xs sm:text-sm">
                  {skill.percent}%
                </span>
              </div>
              <div className="h-2 rounded-full bg-white/5 overflow-hidden">
                <motion.div
                  className="h-full rounded-full"
                  style={{
                    background:
                      'linear-gradient(90deg, #7621B0 0%, #B600A8 100%)',
                  }}
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.percent}%` }}
                  viewport={{ once: true, margin: '50px', amount: 0 }}
                  transition={{ duration: 1, delay: i * 0.06, ease: [0.25, 0.1, 0.25, 1] }}
                />
              </div>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  )
}
