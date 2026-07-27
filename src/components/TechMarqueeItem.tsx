import { motion } from 'framer-motion'
import { TECH_ICONS } from '../data/techIcons'

interface TechMarqueeItemProps {
  name: string
}

export default function TechMarqueeItem({ name }: TechMarqueeItemProps) {
  const meta = TECH_ICONS[name]
  const Icon = meta?.icon
  const color = meta?.color ?? '#D7E2EA'

  return (
    <motion.div
      className="flex flex-shrink-0 items-center gap-2 rounded-full border border-white/10 px-4 sm:px-5 py-2 sm:py-2.5 backdrop-blur-md cursor-default"
      style={{
        background:
          'linear-gradient(160deg, rgba(255,255,255,0.06) 0%, rgba(255,255,255,0.02) 100%)',
        boxShadow: '0 4px 16px -8px rgba(0,0,0,0.4)',
      }}
      whileHover={{
        scale: 1.08,
        borderColor: `${color}99`,
        boxShadow: `0 10px 28px -10px ${color}66, 0 0 0 1px ${color}55`,
        background:
          'linear-gradient(160deg, rgba(255,255,255,0.14) 0%, rgba(255,255,255,0.04) 100%)',
        transition: { type: 'spring', stiffness: 320, damping: 18 },
      }}
    >
      {Icon && <Icon size={14} color={color} strokeWidth={2} />}
      <span className="whitespace-nowrap text-[#D7E2EA] font-medium uppercase tracking-wide text-[11px] sm:text-xs">
        {name}
      </span>
    </motion.div>
  )
}
