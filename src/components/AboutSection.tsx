import { motion } from 'framer-motion'
import FadeIn from './FadeIn'
import profilePhoto from '../assets/profile.png'

const ABOUT_PARAGRAPHS = [
  {
    bold: "I'm a Full Stack Developer with a deep specialization in Go and microservices",
    rest: " — I've built backend platforms serving national-scale government sectors, handling tens of thousands of requests a day.",
  },
  {
    bold: 'I move fluidly between backend architecture and frontend craft',
    rest: ', pairing PostgreSQL-backed APIs with modern interfaces in React and Next.js.',
  },
  {
    bold: 'I care about clean code, thoughtful UX,',
    rest: ' and shipping systems that are both reliable and easy to use.',
  },
]

export default function AboutSection() {
  return (
    <section id="about" className="relative bg-white px-5 sm:px-8 md:px-10 py-20 sm:py-28 md:py-36">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-12 items-center">
        <div className="flex flex-col gap-8 sm:gap-10">
          <FadeIn y={40}>
            <h2
              className="text-[#181512] font-black uppercase leading-none tracking-tight"
              style={{ fontSize: 'clamp(3rem, 9vw, 120px)' }}
            >
              About me
            </h2>
          </FadeIn>

          <FadeIn delay={0.1} y={20}>
            <div className="flex items-center gap-3">
              <span className="w-12 h-[3px] bg-[#B5502E]" />
              <span className="text-[#8A8377] font-semibold uppercase tracking-[0.2em] text-xs sm:text-sm">
                Full Stack Developer · Go &amp; Microservices
              </span>
            </div>
          </FadeIn>

          <div className="flex flex-col gap-4 sm:gap-5">
            {ABOUT_PARAGRAPHS.map(({ bold, rest }, i) => (
              <FadeIn key={bold} delay={0.15 + i * 0.08} y={20}>
                <p
                  className="leading-relaxed max-w-[520px]"
                  style={{ fontSize: 'clamp(1rem, 1.8vw, 1.25rem)' }}
                >
                  <span className="text-[#181512] font-bold">{bold}</span>
                  <span className="text-[#57534E] font-medium">{rest}</span>
                </p>
              </FadeIn>
            ))}
          </div>
        </div>

        <FadeIn delay={0.2} x={60} y={0} duration={0.9}>
          <div className="relative w-full max-w-[380px] mx-auto">
            <div
              className="absolute -inset-x-2 -inset-y-2 rounded-t-[999px] rounded-b-none border border-[#181512]/70"
              aria-hidden
            />

            <div
              className="relative aspect-[4/5] w-full rounded-t-[999px] overflow-hidden border-2 border-[#181512]"
              style={{ boxShadow: '0 24px 48px -20px rgba(24,21,18,0.35)' }}
            >
              <img
                src={profilePhoto}
                alt="Khomkrit Daengnuan"
                className="w-full h-full object-cover"
              />
            </div>

            <motion.div
              className="absolute -top-4 -right-4 sm:-top-5 sm:-right-5 z-10 flex flex-col items-center justify-center w-[86px] h-[86px] sm:w-[100px] sm:h-[100px] rounded-full text-center -rotate-6"
              style={{ background: '#B5502E' }}
              animate={{ y: [0, -6, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
            >
              <span className="text-white font-bold uppercase text-[11px] sm:text-xs leading-tight">
                Open
                <br />
                to Work
              </span>
            </motion.div>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
