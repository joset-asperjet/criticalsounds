'use client'

import React, { useRef, useEffect, useState } from 'react'
import Image from 'next/image'

interface ScrollRevealTextProps {
  className?: string
}

export function ScrollRevealText({
  className = '',
}: ScrollRevealTextProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const [scrollProgress, setScrollProgress] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return
      const rect = containerRef.current.getBoundingClientRect()
      const windowHeight = window.innerHeight

      const start = windowHeight * 0.85
      const end = windowHeight * 0.25

      const progress = (start - rect.top) / (start - end)
      const clamped = Math.min(Math.max(progress, 0), 1)
      setScrollProgress(clamped)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Texto hasta "Pablo Anon" sin el punto final
  const textWithoutDot = 'Un holding musical. Una escena completa. Critical Sounds Recordings es un Holding empresarial que nació como sello discográfico en Australia por Pablo Anon'
  const words = textWithoutDot.split(' ')

  // Total de elementos para el escalonado del scroll: palabras + foto + punto final
  const totalItems = words.length + 2

  // Factor de revelado para la foto
  const photoIndex = words.length
  const photoStart = photoIndex / totalItems
  const photoEnd = Math.min(photoStart + 0.14, 1)
  let photoFactor = 0
  if (scrollProgress >= photoEnd) {
    photoFactor = 1
  } else if (scrollProgress > photoStart) {
    photoFactor = (scrollProgress - photoStart) / (photoEnd - photoStart)
  }

  // Factor de revelado para el punto final "."
  const dotIndex = words.length + 1
  const dotStart = dotIndex / totalItems
  const dotEnd = Math.min(dotStart + 0.14, 1)
  let dotFactor = 0
  if (scrollProgress >= dotEnd) {
    dotFactor = 1
  } else if (scrollProgress > dotStart) {
    dotFactor = (scrollProgress - dotStart) / (dotEnd - dotStart)
  }

  const dotR = Math.round(168 - (168 - 13) * dotFactor)
  const dotG = Math.round(168 - (168 - 13) * dotFactor)
  const dotB = Math.round(164 - (164 - 14) * dotFactor)

  return (
    <div ref={containerRef} className={`relative select-none max-w-5xl ${className}`}>
      <p className="text-[clamp(28px,3.8vw,52px)] font-light leading-[1.18] tracking-tight">
        {words.map((word, index) => {
          const itemStart = index / totalItems
          const itemEnd = Math.min(itemStart + 0.14, 1)

          let factor = 0
          if (scrollProgress >= itemEnd) {
            factor = 1
          } else if (scrollProgress > itemStart) {
            factor = (scrollProgress - itemStart) / (itemEnd - itemStart)
          }

          const r = Math.round(168 - (168 - 13) * factor)
          const g = Math.round(168 - (168 - 13) * factor)
          const b = Math.round(164 - (164 - 14) * factor)

          return (
            <span
              key={index}
              className="inline-block mr-[0.26em] transition-colors duration-200 ease-out"
              style={{
                color: `rgb(${r}, ${g}, ${b})`,
                filter: factor === 1 ? 'none' : `blur(${(1 - factor) * 1.5}px)`,
              }}
            >
              {word}
            </span>
          )
        })}

        {/* Foto de Pablo Anon: tipo píldora, sin marco negro, corte superior en la cabeza */}
        <span
          className="inline-flex align-middle mx-1.5 sm:mx-2 relative transition-all duration-300 ease-out"
          style={{
            opacity: 0.2 + 0.8 * photoFactor,
            transform: `scale(${0.9 + 0.1 * photoFactor}) translateY(${(1 - photoFactor) * 4}px)`,
            filter: photoFactor === 1 ? 'none' : `blur(${(1 - photoFactor) * 2}px)`,
          }}
        >
          <span className="relative inline-block w-[68px] h-[36px] sm:w-[88px] sm:h-[46px] md:w-[108px] md:h-[52px] rounded-full overflow-hidden shadow-[0_4px_16px_rgba(0,0,0,0.08)]">
            <Image
              src="/multimedia/images/critical-academy/critical-sounds-pablo-anon.webp"
              alt="Pablo Anon"
              fill
              className="object-cover object-[50%_15%]"
              priority
            />
          </span>
        </span>

        {/* Punto final al lado derecho de la foto */}
        <span
          className="inline-block transition-colors duration-200 ease-out"
          style={{
            color: `rgb(${dotR}, ${dotG}, ${dotB})`,
            filter: dotFactor === 1 ? 'none' : `blur(${(1 - dotFactor) * 1.5}px)`,
          }}
        >
          .
        </span>
      </p>
    </div>
  )
}
