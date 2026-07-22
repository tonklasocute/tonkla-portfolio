import { useEffect, useRef, useState } from 'react'
import { ROW_1_IMAGES, ROW_2_IMAGES } from '../data/marqueeImages'

function Tile({ src }: { src: string }) {
  return (
    <img
      src={src}
      alt=""
      loading="lazy"
      className="w-[420px] h-[270px] rounded-2xl object-cover flex-shrink-0"
    />
  )
}

export default function MarqueeSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const [offset, setOffset] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const section = sectionRef.current
      if (!section) return
      const sectionTop = section.getBoundingClientRect().top + window.scrollY
      const next =
        (window.scrollY - sectionTop + window.innerHeight) * 0.3
      setOffset(next)
    }

    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const row1 = [...ROW_1_IMAGES, ...ROW_1_IMAGES, ...ROW_1_IMAGES]
  const row2 = [...ROW_2_IMAGES, ...ROW_2_IMAGES, ...ROW_2_IMAGES]

  return (
    <section
      ref={sectionRef}
      className="bg-[#0C0C0C] pt-24 sm:pt-32 md:pt-40 pb-10 overflow-hidden"
    >
      <div className="flex flex-col gap-3">
        <div
          className="flex gap-3"
          style={{
            transform: `translateX(${offset - 200}px)`,
            willChange: 'transform',
          }}
        >
          {row1.map((src, i) => (
            <Tile key={`row1-${i}`} src={src} />
          ))}
        </div>
        <div
          className="flex gap-3"
          style={{
            transform: `translateX(${-(offset - 200)}px)`,
            willChange: 'transform',
          }}
        >
          {row2.map((src, i) => (
            <Tile key={`row2-${i}`} src={src} />
          ))}
        </div>
      </div>
    </section>
  )
}
