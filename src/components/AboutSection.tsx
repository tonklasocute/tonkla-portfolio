import FadeIn from './FadeIn'
import AnimatedText from './AnimatedText'
import ContactButton from './ContactButton'
import TechBadge from './TechBadge'

const ABOUT_PARAGRAPHS = [
  'I enjoy transforming ideas into polished digital products that combine thoughtful design with scalable engineering.',
  'From backend architecture to modern frontend development, I focus on creating products that are fast, intuitive, and memorable.',
  'Every project is an opportunity to learn, improve, and build something meaningful.',
]

export default function AboutSection() {
  return (
    <section
      id="about"
      className="relative min-h-screen flex flex-col items-center justify-center px-5 sm:px-8 md:px-10 py-20"
    >
      <FadeIn
        delay={0.1}
        x={-80}
        y={0}
        duration={0.9}
        className="absolute top-[4%] left-[1%] sm:left-[2%] md:left-[4%]"
      >
        <TechBadge name="Go" size="lg" />
      </FadeIn>

      <FadeIn
        delay={0.25}
        x={-80}
        y={0}
        duration={0.9}
        className="absolute bottom-[8%] left-[3%] sm:left-[6%] md:left-[10%]"
      >
        <TechBadge name="Docker" size="md" />
      </FadeIn>

      <FadeIn
        delay={0.15}
        x={80}
        y={0}
        duration={0.9}
        className="absolute top-[4%] right-[1%] sm:right-[2%] md:right-[4%]"
      >
        <TechBadge name="React" size="lg" />
      </FadeIn>

      <FadeIn
        delay={0.3}
        x={80}
        y={0}
        duration={0.9}
        className="absolute bottom-[8%] right-[3%] sm:right-[6%] md:right-[10%]"
      >
        <TechBadge name="TypeScript" size="md" />
      </FadeIn>

      <div className="flex flex-col items-center gap-10 sm:gap-14 md:gap-16">
        <FadeIn delay={0} y={40}>
          <h2
            className="hero-heading font-black uppercase leading-none tracking-tight text-center"
            style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}
          >
            About me
          </h2>
        </FadeIn>

        <div className="flex flex-col items-center gap-16 sm:gap-20 md:gap-24">
          <div className="flex flex-col gap-4 sm:gap-5">
            {ABOUT_PARAGRAPHS.map((text) => (
              <AnimatedText
                key={text}
                text={text}
                className="text-[#D7E2EA] font-medium text-center leading-relaxed max-w-[560px]"
                style={{ fontSize: 'clamp(1rem, 2vw, 1.35rem)' }}
              />
            ))}
          </div>

          <ContactButton />
        </div>
      </div>
    </section>
  )
}
