'use client'

import React, { useState, useEffect, useRef } from 'react'
import { getEquipmentImage } from '@/lib/data/courses'

interface EquipmentGalleryProps {
  equipment: string[]
  title?: string
  cardWidth?: string
  cardHeight?: string
  className?: string
  titleClassName?: string
}

export function EquipmentGallery({
  equipment,
  title = 'Equipamiento de cabina incluido:',
  cardWidth = 'w-[92px] sm:w-[100px]',
  cardHeight = 'h-[90px]',
  className = '',
  titleClassName = 'text-[11px] font-mono uppercase text-[#888] tracking-wider block font-semibold mb-2'
}: EquipmentGalleryProps) {
  const [selectedEquip, setSelectedEquip] = useState<{ name: string; image: string } | null>(null)
  const containerRef = useRef<HTMLDivElement>(null)
  const trackRef = useRef<HTMLDivElement>(null)
  const [scrollProgress, setScrollProgress] = useState(0)
  const [isDraggingTrack, setIsDraggingTrack] = useState(false)
  const [canScroll, setCanScroll] = useState(false)

  // Update scroll percentage on scroll
  const handleScroll = () => {
    if (!containerRef.current) return
    const { scrollLeft, scrollWidth, clientWidth } = containerRef.current
    const maxScroll = scrollWidth - clientWidth
    if (maxScroll > 1) {
      setScrollProgress(scrollLeft / maxScroll)
      setCanScroll(true)
    } else {
      setCanScroll(false)
    }
  }

  // Auto ping-pong marquee scroll for desktop overflow
  useEffect(() => {
    let animationFrameId: number
    let direction = 1
    let isHovered = false

    const el = containerRef.current
    if (!el) return

    const handleMouseEnter = () => { isHovered = true }
    const handleMouseLeave = () => { isHovered = false }

    el.addEventListener('mouseenter', handleMouseEnter)
    el.addEventListener('mouseleave', handleMouseLeave)

    const step = () => {
      if (el && !isHovered && !isDraggingTrack) {
        const maxScroll = el.scrollWidth - el.clientWidth
        if (maxScroll > 4) {
          if (el.scrollLeft >= maxScroll - 1) direction = -1
          else if (el.scrollLeft <= 1) direction = 1

          el.scrollLeft += direction * 0.4
        }
      }
      animationFrameId = requestAnimationFrame(step)
    }

    animationFrameId = requestAnimationFrame(step)

    return () => {
      cancelAnimationFrame(animationFrameId)
      if (el) {
        el.removeEventListener('mouseenter', handleMouseEnter)
        el.removeEventListener('mouseleave', handleMouseLeave)
      }
    }
  }, [equipment, isDraggingTrack])

  useEffect(() => {
    const el = containerRef.current
    if (!el) return
    handleScroll()
    el.addEventListener('scroll', handleScroll, { passive: true })
    window.addEventListener('resize', handleScroll)
    return () => {
      el.removeEventListener('scroll', handleScroll)
      window.removeEventListener('resize', handleScroll)
    }
  }, [equipment])

  // Mouse wheel horizontal scrolling support over container
  const handleWheel = (e: React.WheelEvent) => {
    if (!containerRef.current || !canScroll) return
    if (Math.abs(e.deltaX) > Math.abs(e.deltaY)) return // native horizontal
    containerRef.current.scrollLeft += e.deltaY * 0.8
  }

  // Interactive Dragging on the mini scrollbar track
  const handleTrackMove = (clientX: number) => {
    if (!trackRef.current || !containerRef.current) return
    const rect = trackRef.current.getBoundingClientRect()
    const clickX = Math.max(0, Math.min(clientX - rect.left, rect.width))
    const ratio = clickX / rect.width
    const maxScroll = containerRef.current.scrollWidth - containerRef.current.clientWidth
    containerRef.current.scrollLeft = ratio * maxScroll
  }

  const handleTrackMouseDown = (e: React.MouseEvent) => {
    e.preventDefault()
    setIsDraggingTrack(true)
    handleTrackMove(e.clientX)

    const onMouseMove = (moveEvent: MouseEvent) => {
      handleTrackMove(moveEvent.clientX)
    }

    const onMouseUp = () => {
      setIsDraggingTrack(false)
      window.removeEventListener('mousemove', onMouseMove)
      window.removeEventListener('mouseup', onMouseUp)
    }

    window.addEventListener('mousemove', onMouseMove)
    window.addEventListener('mouseup', onMouseUp)
  }

  // Close modal on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setSelectedEquip(null)
    }
    if (selectedEquip) {
      window.addEventListener('keydown', handleKeyDown)
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown)
      document.body.style.overflow = ''
    }
  }, [selectedEquip])

  return (
    <div className={`w-full ${className}`}>
      {title && (
        <span className={titleClassName}>
          {title}
        </span>
      )}

      {/* Horizontal list of equipment cards with centered square scrollbar indicator */}
      <div className="flex flex-col gap-2 relative">
        <div 
          ref={containerRef}
          onWheel={handleWheel}
          className="flex items-stretch gap-2 lg:gap-3 overflow-x-auto pb-1.5 pt-0.5 no-scrollbar scroll-smooth cursor-grab active:cursor-grabbing"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {equipment.map((eq, i) => {
            const img = getEquipmentImage(eq)
            return (
              <button
                key={i}
                type="button"
                onClick={() => img && setSelectedEquip({ name: eq, image: img })}
                className={`group/eq shrink-0 flex flex-col items-center justify-between bg-[#131316] hover:bg-[#1c1c24] border border-[#26262e] hover:border-[#a9eff1]/50 p-2 sm:p-2.5 rounded-none ${cardWidth} ${cardHeight} lg:!w-[150px] lg:!h-[135px] transition-all duration-200 cursor-pointer relative focus:outline-none focus:ring-1 focus:ring-[#d7ff54] shadow-sm hover:shadow-[0_4px_16px_rgba(0,0,0,0.5)]`}
                title={`Clic para ver ${eq} en detalle`}
              >
                <div className="w-full flex-1 flex items-center justify-center overflow-hidden py-1 relative">
                  {img ? (
                    <img
                      src={img}
                      alt={eq}
                      className="max-h-[52px] lg:max-h-[72px] max-w-full object-contain filter drop-shadow-[0_2px_4px_rgba(0,0,0,0.6)] group-hover/eq:scale-110 transition-transform duration-200"
                      loading="lazy"
                    />
                  ) : (
                    <div className="w-6 h-6 rounded-none bg-[#222] flex items-center justify-center text-[10px] text-[#888]">
                      🎧
                    </div>
                  )}
                  
                  {/* Clean minimalist white SVG zoom icon on hover */}
                  <div className="absolute top-0 right-0 p-1 opacity-0 group-hover/eq:opacity-100 transition-opacity bg-black/70 backdrop-blur-sm text-white pointer-events-none rounded-none">
                    <svg 
                      xmlns="http://www.w3.org/2000/svg" 
                      viewBox="0 0 24 24" 
                      fill="none" 
                      stroke="currentColor" 
                      strokeWidth="2" 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      className="w-2.5 h-2.5 lg:w-3 lg:h-3 text-white"
                    >
                      <circle cx="11" cy="11" r="7" />
                      <line x1="21" y1="21" x2="16.65" y2="16.65" />
                      <line x1="11" y1="8" x2="11" y2="14" />
                      <line x1="8" y1="11" x2="14" y2="11" />
                    </svg>
                  </div>
                </div>

                <span className="text-[9.5px] lg:text-[11px] font-mono text-[#999] group-hover/eq:text-white text-center leading-tight line-clamp-2 w-full mt-1 border-t border-[#1f1f24] group-hover/eq:border-[#2f2f3a] pt-1 transition-colors">
                  {eq.replace(/^Pioneer\s+/i, '')}
                </span>
              </button>
            )
          })}
        </div>

        {/* Centered interactive square scroll track */}
        {canScroll && (
          <div className="flex justify-center w-full my-1 select-none">
            <div 
              ref={trackRef}
              onMouseDown={handleTrackMouseDown}
              className="w-24 sm:w-28 h-3 flex items-center cursor-pointer group/track py-1 px-0.5"
              title="Arrastra para desplazar los equipos"
            >
              <div className="w-full h-[4px] bg-[#222228] group-hover/track:bg-[#2b2b34] relative rounded-none overflow-hidden">
                <div 
                  className={`h-full bg-[#d7ff54] transition-all duration-75 rounded-none shadow-[0_0_8px_rgba(215,255,84,0.4)] ${
                    isDraggingTrack ? 'brightness-125' : 'hover:brightness-110'
                  }`}
                  style={{ 
                    width: '35%',
                    transform: `translateX(${scrollProgress * 185}%)` 
                  }}
                />
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Lightbox / Enlarged Equipment Modal */}
      {selectedEquip && (
        <div
          role="dialog"
          aria-modal="true"
          onClick={() => setSelectedEquip(null)}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 backdrop-blur-md p-4 animate-fadeIn"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative bg-[#111114] border border-[#33333e] rounded-none max-w-lg w-full p-6 sm:p-8 flex flex-col items-center text-center shadow-[0_20px_60px_rgba(0,0,0,0.9)] animate-scaleUp"
          >
            {/* Close Button */}
            <button
              type="button"
              onClick={() => setSelectedEquip(null)}
              className="absolute top-4 right-4 w-8 h-8 rounded-none bg-white/10 hover:bg-white text-white hover:text-black flex items-center justify-center text-[14px] font-mono transition-colors"
              title="Cerrar (Esc)"
            >
              ✕
            </button>

            {/* Equipment Badge */}
            <div className="mb-4">
              <span className="text-[#d7ff54] text-[11px] font-mono uppercase tracking-widest px-3 py-1 bg-[#d7ff54]/10 border border-[#d7ff54]/30 rounded-none">
                Equipamiento Profesional
              </span>
            </div>

            {/* High-res Image Preview */}
            <div className="w-full h-64 sm:h-72 flex items-center justify-center my-2 p-2 bg-[#09090b]/80 border border-[#22222a] rounded-none">
              <img
                src={selectedEquip.image}
                alt={selectedEquip.name}
                className="max-h-full max-w-full object-contain filter drop-shadow-[0_10px_25px_rgba(0,0,0,0.8)]"
              />
            </div>

            {/* Name & Details */}
            <h4 className="text-white text-[20px] sm:text-[22px] font-medium tracking-tight mt-4 mb-1">
              {selectedEquip.name}
            </h4>
            <p className="text-[#888] text-[13px] font-mono">
              Disponible en la cabina de práctica y estudio
            </p>
          </div>
        </div>
      )}
    </div>
  )
}
