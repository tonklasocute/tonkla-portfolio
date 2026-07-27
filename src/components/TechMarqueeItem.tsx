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
      className="flex flex-shrink-0 items-center gap-2 rounded-full border border-white/10 px-4 sm:px-5 py-2 sm:py-2.5 cursor-default"
      style={{
        background: 'rgba(255,255,255,0.02)',
        filter: 'grayscale(1)',
        opacity: 0.6,
      }}
      whileHover={{
        scale: 1.08,
        filter: 'grayscale(0)',
        opacity: 1,
        borderColor: `${color}99`,
        boxShadow: `0 10px 28px -10px ${color}66, 0 0 0 1px ${color}55`,
        background: 'rgba(255,255,255,0.06)',
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
