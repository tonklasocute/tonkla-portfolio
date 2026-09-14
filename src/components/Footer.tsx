import { Mail, Github, Phone } from 'lucide-react'
import FadeIn from './FadeIn'

const LINKS = [
  { label: 'Email', href: 'mailto:khomkrit.d@outlook.com', icon: Mail },
  { label: 'GitHub', href: 'https://github.com/tonklasocute', icon: Github },
  { label: 'Phone', href: 'tel:+66631409356', icon: Phone },
]

export default function Footer() {
  return (
    <footer id="contact" className="bg-[#0C0C0C] px-5 sm:px-8 md:px-10 pt-20 sm:pt-28 md:pt-32 pb-8">
      <FadeIn>
        <h2
          className="hero-heading font-black uppercase leading-none tracking-tight text-center mb-4"
          style={{ fontSize: 'clamp(2.25rem, 8vw, 100px)' }}
        >
          Let&apos;s build something
          <br />
          amazing together.
        </h2>
      </FadeIn>

      <FadeIn delay={0.25}>
        <div className="flex flex-col items-center gap-1 mt-16 sm:mt-20">
          <span className="text-[#D7E2EA] font-medium uppercase tracking-wide text-xl sm:text-2xl">
            Tonkla
          </span>
          <span className="text-[#D7E2EA]/50 font-light uppercase tracking-widest text-xs sm:text-sm">
            Creative Full Stack Developer
          </span>
          <span className="text-[#D7E2EA]/30 font-light text-[10px] sm:text-xs mt-1">
            Khomkrit Daengnuan · Bangkok, Thailand
          </span>
        </div>
      </FadeIn>

      <FadeIn delay={0.35}>
        <div className="flex justify-center gap-4 sm:gap-6 mt-8">
          {LINKS.map(({ label, href, icon: Icon }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 rounded-full border border-white/10 px-4 py-2 text-[#D7E2EA]/70 text-xs sm:text-sm uppercase tracking-wide transition-colors hover:text-[#D7E2EA] hover:border-white/30"
            >
              <Icon size={14} />
              {label}
            </a>
          ))}
        </div>
      </FadeIn>

      <div className="mt-16 sm:mt-20 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3 max-w-5xl mx-auto">
        <span className="font-mono text-[#D7E2EA]/40 text-xs">
          Copyright © 2026 Tonkla
        </span>
        <span className="font-mono text-[#D7E2EA]/40 text-xs">
          $ built with react · typescript · framer-motion
        </span>
      </div>
    </footer>
  )
}
