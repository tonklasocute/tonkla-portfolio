import { Github, ArrowUpRight, ArrowUp } from 'lucide-react'
import FadeIn from './FadeIn'

const ELSEWHERE_LINKS = [
  { label: 'GitHub', href: 'https://github.com/tonklasocute', icon: Github },
]

export default function Footer() {
  return (
    <footer
      id="contact"
      className="min-h-screen flex flex-col justify-between bg-white px-5 sm:px-8 md:px-10 pt-16 sm:pt-20 md:pt-24 pb-6 sm:pb-8"
    >
      <div className="max-w-6xl mx-auto w-full">
        <FadeIn>
          <div className="flex items-center gap-2.5">
            <span className="w-2 h-2 rounded-full bg-[#B5502E]" />
            <span className="text-[#8A8377] font-semibold uppercase tracking-[0.15em] text-xs sm:text-sm">
              Currently taking new projects — replies within a day
            </span>
          </div>
        </FadeIn>

        <FadeIn delay={0.1} y={30}>
          <h2
            className="text-[#181512] font-black uppercase leading-none tracking-tight mt-6 sm:mt-8"
            style={{ fontSize: 'clamp(2.5rem, 8vw, 100px)' }}
          >
            Let&apos;s build
            <br />
            something
            <br />
            amazing
            <span className="inline-block w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 bg-[#B5502E] ml-2 mb-1 sm:mb-2" />.
          </h2>
        </FadeIn>
      </div>

      <FadeIn delay={0.2} y={20}>
        <div className="max-w-6xl mx-auto w-full border-t border-[#181512]/15 pt-10 sm:pt-12 grid grid-cols-1 sm:grid-cols-3 gap-10 sm:gap-8">
          <div>
            <span className="text-[#8A8377] font-semibold uppercase tracking-[0.2em] text-xs sm:text-sm">
              Direct
            </span>
            <a
              href="mailto:khomkrit.d@outlook.com"
              className="block mt-4 text-[#181512] font-extrabold underline underline-offset-4 decoration-2 break-all hover:opacity-70 transition-opacity"
              style={{ fontSize: 'clamp(1.15rem, 2.2vw, 1.6rem)' }}
            >
              khomkrit.d@outlook.com
            </a>
            <a
              href="tel:+66631409356"
              className="block mt-3 text-[#57534E] hover:text-[#181512] transition-colors"
            >
              +66 63 140 9356
            </a>
          </div>

          <div>
            <span className="text-[#8A8377] font-semibold uppercase tracking-[0.2em] text-xs sm:text-sm">
              Elsewhere
            </span>
            <div className="mt-4">
              {ELSEWHERE_LINKS.map(({ label, href, icon: Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-between py-3 border-b border-[#181512]/10 text-[#181512] font-medium hover:opacity-60 transition-opacity"
                >
                  <span className="flex items-center gap-2">
                    <Icon size={16} />
                    {label}
                  </span>
                  <ArrowUpRight size={16} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <span className="text-[#8A8377] font-semibold uppercase tracking-[0.2em] text-xs sm:text-sm">
              Based in
            </span>
            <div className="mt-4 text-[#57534E] flex flex-col gap-1">
              <span className="text-[#181512] font-medium">Khomkrit Daengnuan</span>
              <span>Bangkok, Thailand — GMT+7</span>
              <span>Open to remote &amp; contract work</span>
            </div>
            <a
              href="mailto:khomkrit.d@outlook.com"
              className="inline-block mt-5 rounded-full bg-[#181512] text-white font-bold uppercase tracking-wide text-sm px-6 py-3 hover:opacity-85 transition-opacity"
            >
              Start a project
            </a>
          </div>
        </div>
      </FadeIn>

      <div className="max-w-6xl mx-auto w-full border-t border-[#181512]/15 pt-6 mt-10 sm:mt-12 flex flex-col sm:flex-row items-center justify-between gap-3">
        <span className="flex items-center gap-2 text-[#181512] font-bold uppercase tracking-wide text-sm">
          Tonkla
          <span className="w-1.5 h-1.5 rounded-full bg-[#B5502E]" />
          <span className="text-[#8A8377] font-normal normal-case tracking-normal">
            Full Stack Developer
          </span>
        </span>
        <div className="flex items-center gap-4 text-[#8A8377] uppercase tracking-wide text-xs">
          <span>Bangkok · GMT+7</span>
          <span>© 2026</span>
          <a href="#home" className="flex items-center gap-1 hover:text-[#181512] transition-colors">
            Back to top <ArrowUp size={12} />
          </a>
        </div>
      </div>
    </footer>
  )
}
