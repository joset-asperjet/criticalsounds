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
      type: 'image',
      src: '/multimedia/images/critical-academy/critical-sounds-academy-photo.webp',
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
      type: 'image',
      src: '/multimedia/images/critical-academy/critical-sounds-academy-photo.webp',
      alt: 'Grabación de audio y video en estudio',
      title: 'Grabación de audio y video',
      tag: 'Audio & Video 4K',
    },
  ]

  return (
    <section className="relative w-full min-h-[calc(100svh-82px)] lg:h-[calc(100vh-82px)] bg-[#0a0a0b] text-[#f5f3ef] px-6 lg:pl-16 lg:pr-0 py-10 lg:py-0 grid grid-cols-1 lg:grid-cols-[42%_58%] items-center gap-10 lg:gap-10 border-b border-white/[0.08] overflow-hidden">

      {/* Left Copy Column */}
      <div className="z-10 w-full flex flex-col justify-center">
        {/* Hand-drawn / Painted Made in Medellín */}
        <div className="mb-6 flex items-center">
          <div className="inline-flex items-center gap-3 select-none -rotate-[4deg] hover:rotate-0 transition-transform duration-300">
            {/* Painted Colombia flag (textured brush strokes) */}
            <span className="relative flex items-center justify-center filter drop-shadow-[0_2px_8px_rgba(0,0,0,0.6)]">
              <svg width="26" height="20" viewBox="0 0 32 24" fill="none" className="overflow-visible">
                {/* Yellow brush stroke */}
                <path
                  d="M2 5.5 C8 4, 18 3.5, 30 5 C30.5 7.5, 29 8.5, 2 8 C1.5 6.5, 1.8 5.8, 2 5.5 Z"
                  fill="#FCD116"
                  className="animate-handwritten opacity-95"
                />
                {/* Blue brush stroke */}
                <path
                  d="M2.5 10.5 C9 9.8, 20 9.5, 29.5 11 C29 13.5, 27.5 14, 3 13.5 C2.3 12.5, 2.2 11.2, 2.5 10.5 Z"
                  fill="#0044B5"
                  className="animate-handwritten opacity-95"
                  style={{ animationDelay: '0.08s' }}
                />
                {/* Red brush stroke */}
                <path
                  d="M3 16 C10 15.5, 21 15.8, 29 17 C28.5 19.5, 26 20.2, 3.5 19.5 C2.8 18.5, 2.6 17, 3 16 Z"
                  fill="#CE1126"
                  className="animate-handwritten opacity-95"
                  style={{ animationDelay: '0.15s' }}
                />
              </svg>
            </span>

            {/* Handwritten cursive Made in Medellín text with animated drawing effect repeating every 10s */}
            <span className="animate-handwritten inline-block text-[24px] sm:text-[28px] leading-none text-white tracking-wide font-medium font-['Caveat',cursive]">
              Made in Medellín
            </span>
          </div>
        </div>

        <h1 className="text-[34px] sm:text-4xl md:text-[clamp(36px,3.4vw,56px)] font-semibold tracking-tight text-white leading-[1.08] mb-6">
          <span className="block">Equipos profesionales</span>
          <span className="block text-[#a9eff1]">Acompañamiento especializado</span>
        </h1>

        <p className="text-sm sm:text-base lg:text-[17px] text-neutral-400 font-normal leading-relaxed mb-8 max-w-xl">
          Academia musical 360° para artistas que buscan dejar huella real en la escena electrónica.
        </p>

        <div className="flex flex-wrap items-center gap-4 w-full sm:w-auto">
          <Link
            href="/cursos"
            className="group relative w-full sm:w-auto justify-center px-10 py-4 rounded-full border border-white overflow-hidden transition-colors duration-300 flex items-center gap-2.5 text-center"
          >
            {/* Loading bar fill from left to right */}
            <span className="absolute inset-0 bg-white origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-out pointer-events-none" />

            {/* Button label & icon in foreground with smooth text color flip */}
            <span className="relative z-10 text-[15px] sm:text-[15px] font-bold text-white group-hover:text-black transition-colors duration-300 flex items-center justify-center gap-2">
              Ver Cursos
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform duration-300 text-white group-hover:text-black" />
            </span>
          </Link>
        </div>
      </div>

      {/* Right Infinite Moving Image Carousel (Left to Right Marquee) */}
      <div className="relative w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_6%,black_94%,transparent)] flex items-center">
        <div className="animate-marquee gap-5 py-2">
          {items.map((item, idx) => (
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
                  poster={item.poster}
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
  )
}
