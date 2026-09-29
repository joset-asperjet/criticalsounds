'use client'

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

export function AcademyHero() {
  interface CarouselItem {
    type: 'image' | 'video'
    src: string
    poster?: string
    alt: string
    title: string
    tag: string
  }

  const items: CarouselItem[] = [
    {
      type: 'image',
      src: '/multimedia/images/critical-academy/critical-sounds-curso-dj.webp',
      alt: 'Curso DJ Profesional',
      title: 'Curso DJ',
      tag: 'Pioneer DJ',
    },
    {
      type: 'image',
      src: '/multimedia/images/critical-academy/critical-sounds-curso-vinyl-dj.webp',
      alt: 'Curso DJ Vinyl y Tornamesas',
      title: 'Curso DJ Vinyl',
      tag: 'Technics 1200',
    },
    {
      type: 'video',
      src: '/multimedia/images/critical-academy/critical-sounds-sala-de-practica.mp4',
      poster: '/multimedia/images/critical-academy/critical-sounds-sala-de-practica.webp',
      alt: 'Salas de Práctica y Cabinas Club',
      title: 'Salas de Practica',
      tag: 'Cabinas Pro',
    },
    {
      type: 'video',
      src: '/multimedia/images/critical-academy/critical-sounds-curso-productor.mp4',
      alt: 'Cursos de Producción Musical',
      title: 'Cursos Producción',
      tag: 'Ableton & Logic',
    },
    {
      type: 'video',
      src: '/multimedia/images/critical-academy/critical-sounds-academy-video01.mp4',
      alt: 'Grabación de audio y video en estudio',
      title: 'Grabación de audio y video',
      tag: 'Audio & Video 4K',
    },
    // Duplicate set for smooth infinite marquee loop
    {
      type: 'image',
      src: '/multimedia/images/critical-academy/critical-sounds-curso-dj.webp',
      alt: 'Curso DJ Profesional',
      title: 'Curso DJ',
      tag: 'Pioneer DJ',
    },
    {
      type: 'image',
      src: '/multimedia/images/critical-academy/critical-sounds-curso-vinyl-dj.webp',
      alt: 'Curso DJ Vinyl y Tornamesas',
      title: 'Curso DJ Vinyl',
      tag: 'Technics 1200',
    },
    {
      type: 'video',
      src: '/multimedia/images/critical-academy/critical-sounds-sala-de-practica.mp4',
      poster: '/multimedia/images/critical-academy/critical-sounds-sala-de-practica.webp',
      alt: 'Salas de Práctica y Cabinas Club',
      title: 'Salas de Practica',
      tag: 'Cabinas Pro',
    },
    {
      type: 'video',
      src: '/multimedia/images/critical-academy/critical-sounds-curso-productor.mp4',
      alt: 'Cursos de Producción Musical',
      title: 'Cursos Producción',
      tag: 'Ableton & Logic',
    },
    {
      type: 'video',
      src: '/multimedia/images/critical-academy/critical-sounds-academy-video01.mp4',
      alt: 'Grabación de audio y video en estudio',
      title: 'Grabación de audio y video',
      tag: 'Audio & Video 4K',
    },
  ]

  return (
    <section className="relative w-full min-h-[calc(100svh-82px)] lg:h-[calc(100vh-82px)] bg-[#0a0a0b] text-[#f5f3ef] px-6 lg:pl-16 lg:pr-0 py-10 lg:py-0 grid grid-cols-1 lg:grid-cols-[42%_58%] items-center gap-10 lg:gap-10 border-b border-white/[0.08] overflow-hidden">
      
      {/* Left Copy Column */}
      <div className="z-10 w-full flex flex-col justify-center">
        {/* Disruptive Hollow Tag */}
        <div className="mb-6 flex items-center">
          <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full border border-white/20 bg-white/[0.03] backdrop-blur-md shadow-[0_0_20px_rgba(255,255,255,0.04)] hover:border-white/40 transition-all group">
            {/* Colombia Flag */}
            <span className="inline-flex items-center overflow-hidden rounded-[2px] w-[18px] h-[12px] shadow-[0_1px_4px_rgba(0,0,0,0.5)] shrink-0 border border-white/10">
              <svg viewBox="0 0 900 600" className="w-full h-full object-cover">
                <rect width="900" height="300" fill="#FCD116" />
                <rect y="300" width="900" height="150" fill="#003893" />
                <rect y="450" width="900" height="150" fill="#CE1126" />
              </svg>
            </span>
            <span className="text-[11px] sm:text-[12px] font-bold tracking-[0.14em] uppercase text-white/95 font-[family-name:var(--font-disruptive)] select-none">
              Made in Medellín
            </span>
          </div>
        </div>

        <h1 className="text-3xl sm:text-4xl md:text-[clamp(36px,3.4vw,56px)] font-bold tracking-tight text-white leading-[1.08] mb-6">
          <span className="block">Equipos profesionales</span>
          <span className="block text-[#a9eff1]">Acompañamiento especializado</span>
        </h1>

        <p className="text-sm sm:text-base lg:text-[17px] text-neutral-400 font-normal leading-relaxed mb-8 max-w-xl">
          Academia musical 360° para artistas que buscan dejar huella real en la escena electrónica.
        </p>

        <div className="flex flex-wrap items-center gap-4">
          <Link
            href="/cursos"
            className="group relative px-8 py-4 rounded-full border border-white overflow-hidden transition-colors duration-300 flex items-center gap-2"
          >
            {/* Loading bar fill from left to right */}
            <span className="absolute inset-0 bg-white origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-out pointer-events-none" />
            
            {/* Button label & icon in foreground with smooth text color flip */}
            <span className="relative z-10 text-[14px] sm:text-[15px] font-bold text-white group-hover:text-black transition-colors duration-300 flex items-center gap-2">
              Ver Cursos
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform duration-300 text-white group-hover:text-black" />
            </span>
          </Link>

          <a
            href="https://wa.me/573226393861"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative px-8 py-4 rounded-full border border-white/70 hover:border-white overflow-hidden transition-colors duration-300 flex items-center gap-2.5"
          >
            {/* Loading bar fill from left to right */}
            <span className="absolute inset-0 bg-white origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-out pointer-events-none" />
            
            {/* WhatsApp SVG + Button label in foreground (white to black only) */}
            <span className="relative z-10 text-[14px] sm:text-[15px] font-bold text-white group-hover:text-black transition-colors duration-300 flex items-center gap-2.5">
              <svg
                viewBox="0 0 24 24"
                width="18"
                height="18"
                fill="currentColor"
                className="text-white group-hover:text-black transition-colors duration-300 flex-shrink-0"
                aria-hidden="true"
              >
                <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
              </svg>
              Hablar con un humano
            </span>
          </a>
        </div>
      </div>

      {/* Right Infinite Moving Image Carousel (Left to Right Marquee) */}
      <div className="relative w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_6%,black_94%,transparent)] flex items-center">
        <div className="animate-marquee gap-5 py-2">
          {items.map((item, idx) => (
            <div
              key={idx}
              className="relative w-[240px] sm:w-[280px] md:w-[320px] lg:w-[330px] h-[360px] sm:h-[420px] md:h-[480px] lg:h-[520px] rounded-2xl overflow-hidden border border-white/10 bg-neutral-900 shadow-[0_16px_50px_rgba(0,0,0,0.7)] flex-shrink-0 group"
            >
              {item.type === 'video' ? (
                <video
                  autoPlay
                  muted
                  loop
                  playsInline
                  preload="auto"
                  poster={item.poster}
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                >
                  <source src={item.src} type="video/mp4" />
                </video>
              ) : (
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
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
  )
}
