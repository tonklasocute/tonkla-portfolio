import { motion } from 'framer-motion'
import FadeIn from './FadeIn'
import AnimatedText from './AnimatedText'
import profilePhoto from '../assets/profile.png'

const ABOUT_PARAGRAPHS = [
  "I'm a Full Stack Developer with a deep specialization in Go and microservices — I've built backend platforms serving national-scale government sectors, handling tens of thousands of requests a day.",
  'I move fluidly between backend architecture and frontend craft, pairing PostgreSQL-backed APIs with modern interfaces in React and Next.js.',
  'I care about clean code, thoughtful UX, and shipping systems that are both reliable and easy to use.',
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
        </div>

        <FadeIn delay={0.2} x={60} y={0} duration={0.9}>
          <div className="relative w-full max-w-[440px] mx-auto">
            <div
              className="absolute inset-0 -z-10 rounded-full blur-[80px] opacity-90"
              style={{
                background:
                  'radial-gradient(circle at 30% 25%, rgba(182,0,168,0.45) 0%, transparent 55%), radial-gradient(circle at 75% 80%, rgba(190,76,0,0.4) 0%, transparent 55%)',
              }}
            />

            <motion.div
              className="relative mx-auto aspect-square w-full max-w-[320px] sm:max-w-[360px]"
              animate={{ y: [0, -14, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
            >
              <motion.div
                className="absolute -inset-[10px] rounded-full"
                style={{
                  background:
                    'conic-gradient(from 0deg, #B600A8, #7621B0, #BE4C00, #B600A8)',
                  filter: 'blur(1px)',
                }}
                animate={{ rotate: 360 }}
                transition={{ duration: 10, repeat: Infinity, ease: 'linear' }}
              />

              <div
                className="relative w-full h-full rounded-full overflow-hidden border-[6px] border-[#0C0C0C]"
                style={{
                  boxShadow:
                    '0 30px 60px -20px rgba(0,0,0,0.6), inset 0 0 50px 14px rgba(12,12,12,0.55)',
                }}
              >
                <img
                  src={profilePhoto}
                  alt="Khomkrit Daengnuan"
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
