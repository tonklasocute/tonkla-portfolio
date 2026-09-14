import { Terminal } from 'lucide-react'
import { TECH_ICONS } from '../data/techIcons'

interface ProjectVisualProps {
  variant: 'browser' | 'terminal' | 'editor'
  name: string
  tech: string[]
  accent: string
  className?: string
  style?: React.CSSProperties
}

const slug = (name: string) =>
  name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '')

export default function ProjectVisual({
  variant,
  name,
  tech,
  accent,
  className,
  style,
}: ProjectVisualProps) {
  const primaryIcon = TECH_ICONS[tech[0]]?.icon
  const PrimaryIcon = primaryIcon

  return (
    <div
      className={`relative overflow-hidden border border-white/10 ${className ?? ''}`}
      style={{
        background:
          'linear-gradient(160deg, rgba(255,255,255,0.06) 0%, rgba(255,255,255,0.015) 100%)',
        ...style,
      }}
    >
      <div
        className="absolute inset-0 opacity-30"
        style={{
          background: `radial-gradient(circle at 80% 0%, ${accent}55 0%, transparent 60%)`,
        }}
      />
      {PrimaryIcon && (
        <PrimaryIcon
          className="absolute -bottom-4 -right-4 opacity-10"
          size={120}
          color={accent}
          strokeWidth={1}
        />
      )}

      <div className="relative h-full flex flex-col">
        {variant === 'browser' && (
          <>
            <div className="flex items-center gap-2 px-3 sm:px-4 py-2.5 border-b border-white/10">
              <span className="w-2 h-2 rounded-full bg-[#FF5F56]" />
              <span className="w-2 h-2 rounded-full bg-[#FFBD2E]" />
              <span className="w-2 h-2 rounded-full bg-[#27C93F]" />
              <span className="ml-1 flex-1 truncate rounded-full bg-white/5 px-3 py-0.5 text-[9px] sm:text-[10px] font-mono text-[#D7E2EA]/50">
                {slug(name)}.dev
              </span>
            </div>
            <div className="flex-1 flex items-center justify-center px-4 min-w-0">
              <span
                className="font-black uppercase tracking-tight text-center leading-none truncate max-w-full"
                style={{
                  fontSize: 'clamp(1.1rem, 3vw, 2.25rem)',
                  color: accent,
                  opacity: 0.85,
                }}
              >
                {name}
              </span>
            </div>
          </>
        )}

        {variant === 'terminal' && (
          <>
            <div className="flex items-center gap-1.5 px-3 sm:px-4 py-2.5 border-b border-white/10 text-[#D7E2EA]/50">
              <Terminal size={12} />
              <span className="text-[9px] sm:text-[10px] font-mono">zsh</span>
            </div>
            <div className="flex-1 flex flex-col justify-center gap-1.5 px-4 font-mono text-[9px] sm:text-[11px]">
              <span style={{ color: accent }}>$ go run main.go</span>
              <span className="text-[#D7E2EA]/60">
                {'>'} server listening on :8080
              </span>
              <span className="text-[#A5D6A7]">{'>'} build ok</span>
            </div>
          </>
        )}

        {variant === 'editor' && (
          <>
            <div className="flex items-center gap-1 px-3 sm:px-4 py-2.5 border-b border-white/10">
              {tech.slice(0, 3).map((t) => (
                <span
                  key={t}
                  className="rounded-t-md px-2.5 py-1 text-[9px] sm:text-[10px] font-mono text-[#D7E2EA]/60 bg-white/5"
                >
                  {t.toLowerCase().replace(/\s+/g, '')}
                </span>
              ))}
            </div>
            <div className="flex-1 flex flex-col justify-center gap-2 px-4 sm:px-5 font-mono text-[10px] sm:text-xs">
              <span>
                <span style={{ color: '#BB4CDB' }}>func</span>{' '}
                <span style={{ color: accent }}>main</span>() {'{'}
              </span>
              <span className="pl-4 text-[#D7E2EA]/70">
                app.Run(<span style={{ color: '#A5D6A7' }}>"{slug(name)}"</span>)
              </span>
              <span>{'}'}</span>
            </div>
          </>
        )}

        <div className="px-3 sm:px-4 py-3 border-t border-white/10 flex flex-wrap gap-1.5">
          {tech.map((t) => (
            <span
              key={t}
              className="rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-[9px] sm:text-[10px] uppercase tracking-wide text-[#D7E2EA]/70"
            >
              {t}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}
