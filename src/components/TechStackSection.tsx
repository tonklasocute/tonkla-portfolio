import FadeIn from './FadeIn'
import TechBadge from './TechBadge'
import { TECH_CATEGORIES } from '../data/techStackCategories'

export default function TechStackSection() {
  return (
    <section
      id="skills"
      className="relative h-screen flex flex-col justify-center bg-white overflow-hidden px-5 sm:px-8 md:px-10"
    >
      <div className="relative max-w-[1280px] mx-auto w-full [@media(max-height:820px)]:!scale-90">
        <FadeIn duration={0.8}>
          <h2
            className="text-[#181512] font-black uppercase leading-none tracking-tight text-center"
            style={{ fontSize: 'clamp(2.5rem, 8vw, 100px)' }}
          >
            Tech Stack
          </h2>
        </FadeIn>

        <FadeIn delay={0.15} duration={0.7}>
          <p
            className="text-[#57534E] font-light text-center max-w-xl mx-auto mt-4 sm:mt-6 mb-10 sm:mb-14"
            style={{ fontSize: 'clamp(0.85rem, 1.4vw, 1.1rem)' }}
          >
            The technologies I use to design, build, and deliver modern
            digital experiences.
          </p>
        </FadeIn>

        <div
          className="relative mx-auto max-w-5xl rounded-[28px] sm:rounded-[32px] border-2 border-[#181512] bg-white grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 divide-y sm:divide-y-0 divide-x-0 lg:divide-x divide-[#181512]/12"
          style={{ boxShadow: '0 30px 60px -30px rgba(24,21,18,0.25)' }}
        >
          {TECH_CATEGORIES.map((category, i) => (
            <FadeIn key={category.title} delay={i * 0.08} y={20}>
              <div className="flex flex-col items-center gap-4 sm:gap-5 px-4 sm:px-5 py-6 sm:py-7 h-full">
                <span className="text-[#8A8377] font-semibold uppercase tracking-[0.2em] text-[11px] sm:text-xs">
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
