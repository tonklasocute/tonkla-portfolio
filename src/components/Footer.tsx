import { Mail, Github, Linkedin } from 'lucide-react'
import FadeIn from './FadeIn'
import ContactButton from './ContactButton'

const LINKS = [
  { label: 'Email', href: 'mailto:hello@tonkla.dev', icon: Mail },
  { label: 'GitHub', href: 'https://github.com/tonkla', icon: Github },
  { label: 'LinkedIn', href: 'https://linkedin.com/in/tonkla', icon: Linkedin },
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

      <FadeIn delay={0.15}>
        <div className="flex justify-center mt-8 sm:mt-10">
          <ContactButton />
        </div>
      </FadeIn>

      <FadeIn delay={0.25}>
        <div className="flex flex-col items-center gap-1 mt-16 sm:mt-20">
          <span className="text-[#D7E2EA] font-medium uppercase tracking-wide text-xl sm:text-2xl">
            Tonkla
          </span>
          <span className="text-[#D7E2EA]/50 font-light uppercase tracking-widest text-xs sm:text-sm">
            Creative Full Stack Developer
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
