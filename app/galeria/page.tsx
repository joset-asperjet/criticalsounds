'use client'

import React, { useState, useEffect, useCallback } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import {
  X,
  ChevronLeft,
  ChevronRight,
  Maximize2,
  Play,
  ArrowUpRight,
  Sparkles
} from 'lucide-react'
import { FaYoutube, FaWhatsapp } from 'react-icons/fa6'

export default function GaleriaPage() {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null)

  const galleryItems = Array.from({ length: 11 }, (_, i) => ({
    id: i + 1,
    src: `/multimedia/images/gallery/critical-sounds-gallery${i + 1}.webp`,
    alt: `Instalaciones y Cabinas Critical Sounds - Foto ${i + 1}`,
  }))

  const total = galleryItems.length

  const handlePrev = useCallback(() => {
    setSelectedIndex((prev) => (prev === null ? null : (prev - 1 + total) % total))
  }, [total])

  const handleNext = useCallback(() => {
    setSelectedIndex((prev) => (prev === null ? null : (prev + 1) % total))
  }, [total])

  // Keyboard navigation for Lightbox
  useEffect(() => {
    if (selectedIndex === null) return

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setSelectedIndex(null)
      if (e.key === 'ArrowLeft') handlePrev()
      if (e.key === 'ArrowRight') handleNext()
    }

    window.addEventListener('keydown', handleKeyDown)
    document.body.style.overflow = 'hidden'

    return () => {
      window.removeEventListener('keydown', handleKeyDown)
      document.body.style.overflow = ''
    }
  }, [selectedIndex, handlePrev, handleNext])

  return (
    <div className="flex flex-col min-h-screen bg-[#070709] text-[#f5f3ef] select-none">
      {/* Hero Header */}
      <section className="pt-32 pb-16 px-6 sm:px-8 lg:px-[8vw] bg-[#070709] relative border-b border-white/[0.06]">
        {/* Subtle Ambient Glow */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-[#a9eff1]/5 blur-[120px] pointer-events-none rounded-full" />

        <div className="max-w-4xl relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.04] border border-white/10 text-[11px] font-mono tracking-widest uppercase text-[#a9eff1] mb-5">
            <span className="w-1.5 h-1.5 rounded-full bg-[#d7ff54] shadow-[0_0_8px_#d7ff54]" />
            Instalaciones &amp; Experiencia 360°
          </div>

          <h1 className="text-[clamp(40px,5.7vw,82px)] leading-[0.92] font-light tracking-tight mb-6 text-white">
            Nuestra <span className="text-[#a9eff1]">Galería</span>
          </h1>

          <p className="text-[#999] text-[16px] sm:text-[18px] leading-relaxed max-w-2xl font-light">
            Explora nuestras instalaciones, cabinas, estudios y vive la experiencia de Critical Sounds a través de nuestra galería.
          </p>
        </div>
      </section>

      {/* Modern Masonry Gallery Grid */}
      <section className="py-16 sm:py-20 px-4 sm:px-8 lg:px-[8vw] bg-[#070709] relative">
        <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-5 space-y-5">
          {galleryItems.map((item, index) => {
            const formattedNum = String(index + 1).padStart(2, '0')

            return (
              <div
                key={item.id}
                onClick={() => setSelectedIndex(index)}
                className="group break-inside-avoid relative overflow-hidden bg-[#111114] border border-white/[0.08] hover:border-white/30 transition-all duration-500 cursor-pointer shadow-lg hover:shadow-[0_12px_32px_rgba(0,0,0,0.8)]"
              >
                <div className="relative w-full overflow-hidden">
                  <Image
                    src={item.src}
                    alt={item.alt}
                    width={800}
                    height={600}
                    className="w-full h-auto object-cover transform transition-transform duration-700 ease-out group-hover:scale-105"
                    priority={index < 4}
                    unoptimized
                  />

                  {/* Gradient Ambient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-black/30 opacity-60 group-hover:opacity-80 transition-opacity duration-300 pointer-events-none" />

                  {/* Top Counter Badge */}
                  <div className="absolute top-3 left-3 z-10">
                    <span className="text-[10px] sm:text-[11px] font-mono tracking-widest text-white/80 bg-black/70 backdrop-blur-md px-2.5 py-1 border border-white/10">
                      {formattedNum}
                    </span>
                  </div>

                  {/* Hover Interaction Pill */}
                  <div className="absolute inset-0 flex items-center justify-center p-4 z-10 pointer-events-none">
                    <span className="inline-flex items-center gap-2 text-[11px] font-mono uppercase tracking-wider text-white bg-black/80 backdrop-blur-md px-4 py-2 rounded-full border border-white/30 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 shadow-xl">
                      <span>Ver foto</span>
                      <Maximize2 className="w-3.5 h-3.5 text-[#a9eff1]" />
                    </span>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </section>

      {/* YouTube Playlist Section at the end */}
      <section className="py-20 sm:py-28 px-6 sm:px-8 lg:px-[8vw] bg-[#0b0b0e] border-t border-white/[0.08] relative overflow-hidden">
        {/* Ambient Glow */}
        <div className="absolute -bottom-24 right-0 w-[500px] h-[500px] bg-[#d7ff54]/5 blur-[160px] pointer-events-none rounded-full" />

        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 pb-6 border-b border-white/[0.08]">
            <div>
              <div className="inline-flex items-center gap-2 text-[11px] font-mono uppercase tracking-[0.2em] text-[#d7ff54] mb-3">
                <FaYoutube className="text-[14px] text-red-500" />
                <span>Critical Sessions · YouTube Playlist</span>
              </div>
              <h2 className="text-[clamp(32px,4.5vw,56px)] leading-[1.05] font-light tracking-tight text-white m-0">
                Sesiones en Vivo <span className="text-[#d7ff54]">&amp; DJ Sets</span>
              </h2>
              <p className="text-[#999] text-[15px] sm:text-[16px] mt-3 max-w-xl font-light">
                Disfruta de las prácticas, streamings y sets grabados en alta definición con audio y video profesional desde nuestras cabinas.
              </p>
            </div>

            <div className="shrink-0 flex items-center gap-3">
              <a
                href="https://www.youtube.com/watch?v=EymRIUFuW8Y&list=PL_Znrxo8-xgKEBnDzKCUj5Si2qboEqYGL"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2.5 px-6 py-3 rounded-full border border-red-500/30 bg-red-500/10 hover:bg-red-500/20 text-white text-[12.5px] font-mono tracking-wider uppercase transition-all duration-300 shadow-[0_4px_20px_rgba(239,68,68,0.15)]"
              >
                <FaYoutube className="text-[16px] text-red-500 group-hover:scale-110 transition-transform" />
                <span>Abrir en YouTube</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-white/70 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>
            </div>
          </div>

          {/* YouTube Responsive Video Container */}
          <div className="relative w-full aspect-video rounded-none overflow-hidden bg-black border border-white/10 shadow-[0_20px_60px_rgba(0,0,0,0.85)]">
            <iframe
              src="https://www.youtube-nocookie.com/embed/EymRIUFuW8Y?list=PL_Znrxo8-xgKEBnDzKCUj5Si2qboEqYGL&rel=0"
              title="Critical Sounds - Playlist de Sesiones en Vivo"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              className="w-full h-full border-0"
              loading="lazy"
            />
          </div>

          {/* Bottom Call to Action for Cabinas */}
          <div className="mt-8 p-6 bg-[#121215] border border-white/[0.08] flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3 text-center sm:text-left">
              <span className="w-2 h-2 rounded-full bg-[#a9eff1] shadow-[0_0_8px_#a9eff1]" />
              <p className="text-[13px] text-[#ccc] font-light">
                ¿Quieres grabar tu propio live set en formato multicámara 4K y audio profesional?
              </p>
            </div>
            <Link
              href="/cabinas"
              className="group inline-flex items-center gap-2 px-6 py-2.5 rounded-full border border-white/20 bg-white/5 hover:bg-white/10 text-white text-[12px] font-mono uppercase tracking-wider transition-colors shrink-0"
            >
              <span>Ver Cabinas &amp; Tarifas</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-[#d7ff54] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* Lightbox Modal with UX/UI Enhancements */}
      {selectedIndex !== null && (
        <div
          className="fixed inset-0 z-[200] flex flex-col justify-between bg-black/92 backdrop-blur-2xl p-4 sm:p-6 animate-in fade-in duration-300"
          onClick={() => setSelectedIndex(null)}
        >
          {/* Top Bar with Counter and Close Button */}
          <div
            className="flex items-center justify-between w-full max-w-6xl mx-auto z-10 pb-2"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/10 border border-white/15 text-[12px] font-mono text-white/90">
              <span className="text-[#a9eff1] font-semibold">
                {String(selectedIndex + 1).padStart(2, '0')}
              </span>
              <span className="text-white/40">/</span>
              <span>{String(total).padStart(2, '0')}</span>
            </div>

            <button
              onClick={() => setSelectedIndex(null)}
              className="w-10 h-10 rounded-full border border-white/20 bg-white/10 hover:bg-white/20 text-white/80 hover:text-white flex items-center justify-center transition-all cursor-pointer shadow-lg active:scale-95"
              title="Cerrar (Esc)"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Main Stage with Navigation Arrows */}
          <div
            className="relative flex-1 w-full max-w-6xl mx-auto flex items-center justify-center my-auto min-h-0"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Prev Button */}
            <button
              onClick={handlePrev}
              className="absolute left-2 sm:left-4 z-20 w-12 h-12 rounded-full border border-white/20 bg-black/60 hover:bg-black/90 text-white/80 hover:text-white flex items-center justify-center transition-all cursor-pointer shadow-2xl backdrop-blur-md active:scale-95 group"
              title="Foto anterior (←)"
            >
              <ChevronLeft className="w-6 h-6 group-hover:-translate-x-0.5 transition-transform" />
            </button>

            {/* Current Image */}
            <div className="relative w-full h-[62vh] sm:h-[72vh] flex items-center justify-center">
              <Image
                src={galleryItems[selectedIndex].src}
                alt={galleryItems[selectedIndex].alt}
                fill
                className="object-contain drop-shadow-[0_20px_50px_rgba(0,0,0,0.9)] animate-in fade-in duration-200"
                unoptimized
                priority
              />
            </div>

            {/* Next Button */}
            <button
              onClick={handleNext}
              className="absolute right-2 sm:right-4 z-20 w-12 h-12 rounded-full border border-white/20 bg-black/60 hover:bg-black/90 text-white/80 hover:text-white flex items-center justify-center transition-all cursor-pointer shadow-2xl backdrop-blur-md active:scale-95 group"
              title="Foto siguiente (→)"
            >
              <ChevronRight className="w-6 h-6 group-hover:translate-x-0.5 transition-transform" />
            </button>
          </div>

          {/* Bottom Filmstrip Thumbnails */}
          <div
            className="w-full max-w-4xl mx-auto pt-3 z-10"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-center gap-2 overflow-x-auto py-1 px-2 no-scrollbar">
              {galleryItems.map((item, idx) => {
                const isCurrent = idx === selectedIndex
                return (
                  <button
                    key={item.id}
                    onClick={() => setSelectedIndex(idx)}
                    className={`relative w-12 h-12 sm:w-14 sm:h-14 shrink-0 overflow-hidden rounded-none border transition-all duration-200 cursor-pointer ${
                      isCurrent
                        ? 'border-[#a9eff1] scale-105 opacity-100 ring-2 ring-[#a9eff1]/30 shadow-lg'
                        : 'border-white/10 opacity-40 hover:opacity-80'
                    }`}
                  >
                    <Image
                      src={item.src}
                      alt={item.alt}
                      fill
                      className="object-cover"
                      unoptimized
                    />
                  </button>
                )
              })}
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
