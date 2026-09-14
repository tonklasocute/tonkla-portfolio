import { TECH_ICONS } from '../data/techIcons'

interface TechBadgeProps {
  name: string
  size?: 'sm' | 'md' | 'lg'
  className?: string
}

const SIZES = {
  sm: { box: 'w-9 h-9 sm:w-10 sm:h-10', icon: 16, text: 'text-[10px] sm:text-xs' },
  md: { box: 'w-14 h-14 sm:w-16 sm:h-16', icon: 24, text: 'text-xs sm:text-sm' },
  lg: { box: 'w-20 h-20 sm:w-24 sm:h-24', icon: 32, text: 'text-sm sm:text-base' },
}

export default function TechBadge({ name, size = 'md', className }: TechBadgeProps) {
  const meta = TECH_ICONS[name]
  const Icon = meta?.icon
  const color = meta?.color ?? '#181512'
  const s = SIZES[size]

  return (
    <div className={`flex flex-col items-center gap-2 ${className ?? ''}`}>
      <div
        className={`${s.box} rounded-2xl flex items-center justify-center border border-[#181512]/12 bg-[#F5F1EA]`}
        style={{ boxShadow: `0 8px 20px -10px ${color}55` }}
      >
        {Icon && <Icon size={s.icon} color={color} strokeWidth={1.75} />}
      </div>
      <span className={`text-[#181512] font-medium uppercase tracking-wide ${s.text}`}>
        {name}
      </span>
    </div>
  )
}
