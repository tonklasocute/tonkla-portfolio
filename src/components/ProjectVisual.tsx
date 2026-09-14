import { TECH_ICONS } from '../data/techIcons'

interface ProjectVisualProps {
  variant: 'browser' | 'terminal'
  name: string
  tech: string[]
  accent: string
  nda?: boolean
  lines?: string[]
  className?: string
  style?: React.CSSProperties
}

const HATCH = {
  background:
    'repeating-linear-gradient(45deg, rgba(255,255,255,0.06) 0px, rgba(255,255,255,0.06) 5px, transparent 5px, transparent 10px)',
}

export default function ProjectVisual({
  variant,
  name,
  tech,
  accent,
  nda = false,
  lines = [],
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

      <div className="relative h-full flex flex-col min-h-0">
        {variant === 'browser' && (
          <>
            <div className="flex items-center gap-1.5 px-2.5 sm:px-3 py-1.5 border-b border-white/10 shrink-0">
              <span className="w-1.5 h-1.5 rounded-full bg-[#FF5F56]" />
              <span className="w-1.5 h-1.5 rounded-full bg-[#FFBD2E]" />
              <span className="w-1.5 h-1.5 rounded-full bg-[#27C93F]" />
              <span className="ml-1 flex-1 truncate rounded-full bg-white/5 px-2 py-0.5 text-[8px] font-mono text-[#D7E2EA]/50">
                {name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '')}.dev
              </span>
            </div>
            <div className="flex-1 min-h-0 flex flex-col justify-center gap-1.5 px-3 py-2">
              <span
                className="font-black uppercase tracking-tight leading-tight line-clamp-2"
                style={{ fontSize: 'clamp(0.65rem, 1.6vw, 0.95rem)', color: accent, opacity: 0.9 }}
              >
                {name}
              </span>
              {nda ? (
                <>
                  <span className="block h-1 w-3/4 rounded-full bg-white/10" />
                  <span className="block h-1 w-1/2 rounded-full bg-white/10" />
                  <div className="flex gap-1 mt-1">
                    <span className="flex-1 h-6 rounded-md border border-white/10" style={HATCH} />
                    <span className="flex-1 h-6 rounded-md border border-white/10" style={HATCH} />
                    <span className="flex-1 h-6 rounded-md border border-white/10" style={HATCH} />
                  </div>
                  <span className="text-[6.5px] sm:text-[7px] uppercase tracking-widest text-[#D7E2EA]/35">
                    Real screens withheld — NDA
                  </span>
                </>
              ) : (
                <span className="block h-1 w-2/3 rounded-full bg-white/10" />
              )}
            </div>
          </>
        )}

        {variant === 'terminal' && (
          <>
            <div className="flex items-center gap-1.5 px-2.5 sm:px-3 py-1.5 border-b border-white/10 text-[#D7E2EA]/50 shrink-0">
              <span className="font-mono text-[8px]">&gt;_ zsh</span>
            </div>
            <div className="flex-1 min-h-0 overflow-hidden flex flex-col justify-center gap-1 px-3 py-2 font-mono text-[7.5px] sm:text-[8.5px] leading-snug">
              {lines.map((line) => {
                const isCmd = line.startsWith('$')
                const parts = line.split(' ')
                const last = parts[parts.length - 1]
                const isStatus = /^(ok|ready)$/i.test(last)
                return (
                  <span key={line} className="truncate" style={isCmd ? { color: accent } : undefined}>
                    {isStatus ? (
                      <>
                        <span className={isCmd ? '' : 'text-[#D7E2EA]/60'}>
                          {parts.slice(0, -1).join(' ')}{' '}
                        </span>
                        <span className="text-[#A5D6A7]">{last}</span>
                      </>
                    ) : (
                      <span className={isCmd ? '' : 'text-[#D7E2EA]/60'}>{line}</span>
                    )}
                  </span>
                )
              })}
            </div>
          </>
        )}
      </div>
    </div>
  )
}
