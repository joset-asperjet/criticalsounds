'use client'

import { cabins } from '@/lib/data/cabins'
import Link from 'next/link'
import Image from 'next/image'
import { useState, useRef } from 'react'

export default function CabinasPage() {
  interface CarouselItem {
    type: 'image' | 'video'
    src: string
    alt: string
    title: string
    tag: string
  }

  const items: CarouselItem[] = [
    {
      type: 'image',
      src: '/multimedia/images/cabinas/critical-sounds-cabinas1.jpg',
      alt: 'Cabina DJ Pro 1',
      title: 'Setup Club',
      tag: 'Pioneer DJM',
    },
    {
      type: 'image',
      src: '/multimedia/images/cabinas/critical-sounds-cabinas2.jpg',
      alt: 'Cabina DJ Pro 2',
      title: 'Equipos Pro',
      tag: 'CDJ-3000',
    },
    {
      type: 'image',
      src: '/multimedia/images/cabinas/critical-sounds-cabinas3.jpg',
      alt: 'Cabina DJ Pro 3',
      title: 'Práctica Real',
      tag: 'Monitoreo',
    },
    {
      type: 'video',
      src: '/multimedia/images/cabinas/critical-sounds-cabinas4.mp4',
      alt: 'Video Salas de Práctica',
      title: 'Live Sets',
      tag: 'Grabación 4K',
    },
    {
      type: 'video',
      src: '/multimedia/images/critical-academy/critical-sounds-sala-de-practica.mp4',
      alt: 'Academia Salas de Práctica',
      title: 'Cabinas Pro',
      tag: 'Multi-cámara',
    },
  ]

  const [activeIndex, setActiveIndex] = useState(0)
  const scrollRef = useRef<HTMLDivElement>(null)

  const handleScroll = () => {
    if (!scrollRef.current) return
    const scrollLeft = scrollRef.current.scrollLeft
    const cardWidth = scrollRef.current.clientWidth * 0.85 // approx 85vw
    // Math.round to find the closest card
    const index = Math.round(scrollLeft / cardWidth)
    setActiveIndex(Math.min(Math.max(index, 0), cabins.length - 1))
  }

  const scrollTo = (index: number) => {
    if (!scrollRef.current) return
    const cardWidth = scrollRef.current.clientWidth * 0.85
    scrollRef.current.scrollTo({ left: cardWidth * index, behavior: 'smooth' })
  }

  const [openRates, setOpenRates] = useState<Record<string, boolean>>({})

  const toggleRates = (cabinId: string) => {
    setOpenRates(prev => ({ ...prev, [cabinId]: !prev[cabinId] }))
  }

  return (
    <div className="flex flex-col min-h-screen bg-[#1a1a1b] text-[#f5f3ef]">
      {/* Hero Section */}
      <section className="relative w-full min-h-[calc(100svh-82px)] lg:h-[calc(100vh-82px)] bg-[#0a0a0b] text-[#f5f3ef] px-6 lg:pl-16 lg:pr-0 py-10 lg:py-0 grid grid-cols-1 lg:grid-cols-[42%_58%] items-center gap-10 lg:gap-10 border-b border-white/[0.08] overflow-hidden">
        
        {/* Left Copy Column */}
        <div className="z-10 w-full flex flex-col justify-center">
          <h1 className="text-[34px] sm:text-4xl md:text-[clamp(36px,3.4vw,56px)] font-light tracking-tight text-white leading-[1.08] mb-6">
            <span className="block">Salas de</span>
            <span className="block text-[#d7ff54]">Práctica DJ</span>
          </h1>
          <p className="text-sm sm:text-base lg:text-[17px] text-neutral-400 font-normal leading-relaxed mb-4 max-w-xl">
            Practica como si estuvieras en una cabina profesional. Tienes acceso a cabinas DJ profesionales diseñadas para entrenar, preparar tus sets y llevar tu performance al siguiente nivel.
          </p>
          <p className="text-xs sm:text-sm lg:text-[15px] text-neutral-500 font-normal leading-relaxed mb-8 max-w-xl">
            Todas nuestras salas cuentan con grabación multicámara 4K, audio y video Full HD, tratamiento acústico, aire acondicionado, iluminación RGB y más.
          </p>

          {/* Graba tu sesión Info Container */}
          <div className="pt-6 border-t border-[#29292e]">
            <h2 className="text-[20px] sm:text-[24px] font-light mb-3 text-white">Graba tu sesión</h2>
            <p className="text-[#aaa] text-[13px] leading-relaxed mb-5 max-w-xl">
              Convierte tu práctica en contenido. Nuestras cabinas cuentan con un sistema de grabación multicámara que te permite registrar tu sesión (Streaming disponible).
            </p>
            <div className="flex flex-col gap-3 text-[#bbb] text-[13px] max-w-sm">
              <div className="flex justify-between items-center p-3 bg-[#1a1a1d] border border-[#2a2a2e] rounded-none">
                <span className="text-white font-medium">Video 2.7K @ 60 fps</span>
                <span className="text-[#d7ff54] font-mono font-semibold">+$110.000/h</span>
              </div>
              <div className="flex justify-between items-center p-3 bg-[#1a1a1d] border border-[#2a2a2e] rounded-none">
                <span className="text-white font-medium">Video 4K @ 60 fps</span>
                <span className="text-[#a9eff1] font-mono font-semibold">+$190.000/h</span>
              </div>
              <div className="flex justify-between items-center p-3 bg-[#1a1a1d] border border-[#2a2a2e] rounded-none">
                <span className="text-white font-medium">Sesiones B2B</span>
                <span className="text-[#fde047] font-mono font-semibold">+$10.000/h</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Infinite Moving Image Carousel (Left to Right Marquee) */}
        <div className="relative w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_6%,black_94%,transparent)] flex items-center">
          <div className="animate-marquee gap-5 py-2 flex">
            {[...items, ...items].map((item, idx) => (
              <div
                key={idx}
                className="relative w-[240px] sm:w-[280px] md:w-[320px] lg:w-[330px] h-[360px] sm:h-[420px] md:h-[480px] lg:h-[520px] rounded-none overflow-hidden bg-neutral-900 shadow-[0_16px_50px_rgba(0,0,0,0.7)] flex-shrink-0 group"
              >
                {item.type === 'video' ? (
                  <video
                    autoPlay
                    muted
                    loop
                    playsInline
                    preload="auto"
                    className="w-full h-full object-cover rounded-none transition-transform duration-700 ease-out group-hover:scale-105"
                  >
                    <source src={item.src} type="video/mp4" />
                  </video>
                ) : (
                  <Image
                    src={item.src}
                    alt={item.alt}
                    fill
                    className="object-cover rounded-none transition-transform duration-700 ease-out group-hover:scale-105"
                    sizes="330px"
                    priority={idx < 4}
                  />
                )}

                {/* Ambient Dark Gradient for Photo/Video Card */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent pointer-events-none" />

                {/* Card Tag & Title */}
                <div className="absolute bottom-6 left-6 right-6 pointer-events-none">
                  <span className="text-[10px] uppercase font-mono tracking-widest text-[#a9eff1] block mb-1">
                    {item.tag}
                  </span>
                  <h3 className="text-lg sm:text-xl font-bold text-white leading-tight drop-shadow-md">
                    {item.title}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 px-4 sm:px-8 lg:px-[8vw] bg-[#101011]">
        <div 
          ref={scrollRef}
          onScroll={handleScroll}
          className="flex lg:grid lg:grid-cols-3 gap-4 lg:gap-8 overflow-x-auto snap-x snap-mandatory scrollbar-hide pb-8 lg:pb-0 px-4 sm:px-0"
        >
          {cabins.map(cabin => {
            const isRatesOpen = !!openRates[cabin.id]
            return (
              <div 
                key={cabin.id} 
                className="w-[85vw] min-w-[85vw] max-w-[85vw] sm:w-[400px] sm:min-w-[400px] lg:w-auto lg:min-w-0 lg:max-w-none shrink-0 snap-center bg-[#1c1c1d] rounded-sm flex flex-col hover:bg-[#252526] transition-colors shadow-xl border border-[#2a2a2a] overflow-hidden"
              >
                <div className="p-6 sm:p-8 border-b border-[#333]">
                  <h3 className="text-[28px] font-light tracking-tight text-white mb-2">{cabin.name}</h3>
                  <p className="text-[#999] text-[14px] leading-relaxed">{cabin.subtitle}</p>
                </div>
                
                <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between">
                  <div>
                    <h4 className="text-[12px] uppercase tracking-widest text-[#d7ff54] mb-4">Setup Incluido</h4>
                    <ul className="space-y-2 mb-6">
                      {cabin.setup.map((item, i) => (
                        <li key={i} className="text-[#bbb] text-[13px] flex items-start gap-2">
                          <span className="text-[#d7ff54] mt-0.5">•</span>
                          {item}
                        </li>
                      ))}
                    </ul>

                    {/* Collapsible Rates */}
                    <div className="mb-6 border border-[#333] rounded-none overflow-hidden bg-[#141415]">
                      <button
                        onClick={() => toggleRates(cabin.id)}
                        className="w-full px-4 py-3 flex items-center justify-between text-left hover:bg-[#1f1f21] transition-colors"
                      >
                        <span className="text-[12px] uppercase tracking-widest text-[#a9eff1] font-medium">
                          Tarifas / hora
                        </span>
                        <svg
                          className={`w-4 h-4 text-[#a9eff1] transition-transform duration-300 ${
                            isRatesOpen ? 'rotate-180' : ''
                          }`}
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </button>

                      {isRatesOpen && (
                        <div className="p-4 pt-2 border-t border-[#2a2a2b] space-y-3">
                          {cabin.prices.map((price, i) => (
                            <div key={i} className="flex flex-col text-[13px] border-b border-[#2a2a2b] pb-2 last:border-0">
                              <span className="text-white mb-1 font-medium">{price.schedule}</span>
                              <div className="flex flex-wrap justify-between gap-x-2 gap-y-1 text-[#888]">
                                <span className="whitespace-nowrap">Práctica: <span className="text-[#d7ff54]">{price.practica}</span></span>
                                <span className="whitespace-nowrap">Full: <span className="text-[#a9eff1]">{price.audioVideo}</span></span>
                              </div>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>

                    <div className="space-y-1 mb-8 p-4 bg-[#0d0d0e] rounded-none text-[11px] text-[#aaa]">
                      {cabin.discounts.map((discount, i) => (
                        <p key={i}>{discount}</p>
                      ))}
                    </div>
                  </div>
                  
                  <button className="group w-full rounded-full border border-[#d7ff54] px-6 py-4 text-[13px] font-semibold hover:bg-white hover:border-white transition-all duration-200 shadow-md">
                    <span className="text-[#d7ff54] group-hover:text-black transition-colors duration-200">
                      Reservar {cabin.name}
                    </span>
                  </button>
                </div>
              </div>
            )
          })}
        </div>

        {/* Mobile Pagination Dots */}
        <div className="flex lg:hidden justify-center items-center gap-3 mt-4">
          {cabins.map((_, i) => (
            <button
              key={i}
              onClick={() => scrollTo(i)}
              className={`h-2 rounded-full transition-all duration-300 ${
                activeIndex === i ? 'bg-[#d7ff54] w-6' : 'bg-white/20 w-2'
              }`}
              aria-label={`Ir a cabina ${i + 1}`}
            />
          ))}
        </div>
      </section>
    </div>
  )
}
