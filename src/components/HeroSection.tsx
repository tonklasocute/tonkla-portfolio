import FadeIn from './FadeIn'
import Magnet from './Magnet'
import DevPortrait from './DevPortrait'

const NAV_LINKS = ['Home', 'About', 'Skills', 'Projects', 'Contact']

export default function HeroSection() {
  return (
    <section
      id="home"
      className="h-screen flex flex-col bg-white relative"
      style={{ overflowX: 'clip' }}
    >
      <FadeIn delay={0} y={-20} as="nav">
        <div className="flex justify-between items-center px-6 md:px-10 pt-6 md:pt-8 [@media(max-height:820px)]:!pt-3">
          {NAV_LINKS.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className="text-[#181512] font-medium uppercase tracking-wider text-sm md:text-lg lg:text-[1.4rem] transition-opacity duration-200 hover:opacity-60"
            >
              {link}
            </a>
          ))}
        </div>
      </FadeIn>

      <div className="flex-1 flex items-center px-6 md:px-10">
        <div className="max-w-6xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="flex flex-col gap-5 sm:gap-7 [@media(max-height:820px)]:!gap-3">
            <FadeIn delay={0.05} y={16}>
              <div className="flex items-center gap-2.5">
                <span className="w-2 h-2 rounded-full bg-[#B5502E]" />
                <span className="text-[#8A8377] font-semibold uppercase tracking-[0.15em] text-xs sm:text-sm">
                  Available for new work — Bangkok, TH
                </span>
              </div>
            </FadeIn>

            <div className="overflow-hidden">
              <FadeIn delay={0.15} y={40}>
                <h1 className="text-[#181512] font-black uppercase tracking-tight leading-[0.95] text-[clamp(2.75rem,7vw,5.5rem)]">
                  hi,
                  <br />
                  i&apos;m tonkla
                </h1>
              </FadeIn>
            </div>

            <FadeIn delay={0.3} y={20}>
              <p
                className="text-[#57534E] max-w-[480px]"
                style={{ fontSize: 'clamp(1rem, 1.6vw, 1.2rem)' }}
              >
                Creative <span className="text-[#181512] font-bold">Full Stack Developer</span> specializing
                in Go, microservices, PostgreSQL, React and Next.js — building
                scalable systems for national-scale platforms.
              </p>
            </FadeIn>

            <FadeIn delay={0.45} y={20}>
              <div className="flex items-center gap-4">
                <a
                  href="#projects"
                  className="rounded-full bg-[#181512] text-white font-bold uppercase tracking-wide text-sm px-7 py-3.5 hover:opacity-85 transition-opacity"
                >
                  View Work
                </a>
                <a
                  href="#contact"
                  className="rounded-full border-2 border-[#181512] text-[#181512] font-bold uppercase tracking-wide text-sm px-7 py-3.5 hover:bg-[#181512] hover:text-white transition-colors"
                >
                  Get in Touch
                </a>
              </div>
            </FadeIn>
          </div>

          <FadeIn delay={0.3} x={40} y={0} duration={0.9}>
            <Magnet
              padding={150}
              strength={3}
              activeTransition="transform 0.3s ease-out"
              inactiveTransition="transform 0.6s ease-in-out"
            >
              <DevPortrait />
            </Magnet>
          </FadeIn>
        </div>
      </div>
    </section>
  )
}
