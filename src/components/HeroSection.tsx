import FadeIn from './FadeIn'
import Magnet from './Magnet'
import DevPortrait from './DevPortrait'

const NAV_LINKS = ['Home', 'About', 'Skills', 'Projects', 'Contact']

export default function HeroSection() {
  return (
    <section
      id="home"
      className="h-screen flex flex-col relative"
      style={{ overflowX: 'clip' }}
    >
      <FadeIn delay={0} y={-20} as="nav">
        <div className="flex justify-between items-center px-6 md:px-10 pt-6 md:pt-8 [@media(max-height:820px)]:!pt-3">
          {NAV_LINKS.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className="text-[#D7E2EA] font-medium uppercase tracking-wider text-sm md:text-lg lg:text-[1.4rem] transition-opacity duration-200 hover:opacity-70"
            >
              {link}
            </a>
          ))}
        </div>
      </FadeIn>

      <div className="overflow-hidden">
        <FadeIn delay={0.15} y={40}>
          <h1 className="hero-heading font-black uppercase tracking-tight leading-[0.95] whitespace-nowrap w-full text-[9vw] sm:text-[9.5vw] md:text-[10vw] lg:text-[11vw] [@media(max-height:820px)]:!text-[7vw] mt-6 sm:mt-4 [@media(max-height:820px)]:!mt-2">
            hi,
            <br />
            i&apos;m tonkla
          </h1>
        </FadeIn>
      </div>

      <div className="absolute left-1/2 -translate-x-1/2 z-10 top-1/2 -translate-y-1/2 sm:top-auto sm:translate-y-0 sm:bottom-0 w-[280px] sm:w-[360px] md:w-[440px] lg:w-[520px] [@media(max-height:820px)]:!w-[200px]">
        <FadeIn delay={0.6} y={30}>
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

      <div className="flex-1" />

      <div className="flex justify-between items-end pb-7 sm:pb-8 md:pb-10 [@media(max-height:820px)]:!pb-3 px-6 md:px-10">
        <FadeIn delay={0.35} y={20}>
          <p
            className="text-[#D7E2EA] font-light uppercase tracking-wide leading-snug max-w-[160px] sm:max-w-[220px] md:max-w-[280px]"
            style={{ fontSize: 'clamp(0.75rem, 1.4vw, 1.5rem)' }}
          >
            creative full stack developer specializing in go,
            microservices, postgresql, react, and next.js — building
            scalable systems for national-scale platforms
          </p>
        </FadeIn>
      </div>
    </section>
  )
}
