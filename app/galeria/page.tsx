'use client'

import Image from 'next/image'
import { useState } from 'react'

export default function GaleriaPage() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null)
  const images = Array.from({ length: 11 }, (_, i) => `/multimedia/images/gallery/critical-sounds-gallery${i + 1}.webp`)

  return (
    <div className="flex flex-col min-h-screen bg-black text-[#f5f3ef]">
      <section className="pt-32 pb-16 px-8 lg:px-[8vw] bg-black">
        <div className="max-w-3xl">
          <h1 className="text-[clamp(40px,5.7vw,82px)] leading-[0.92] font-light tracking-tight mb-6 text-white">
            Nuestra <span className="text-[#a9eff1]">Galería</span>
          </h1>
          <p className="text-[#999] text-[17px] leading-relaxed">
            Explora nuestras instalaciones, cabinas, estudios y vive la experiencia de Critical Sounds a través de nuestra galería.
          </p>
        </div>
      </section>

      <section className="pb-32 px-4 sm:px-8 lg:px-[8vw] bg-black">
        <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-4 space-y-4">
          {images.map((src, index) => (
            <div 
              key={index} 
              onClick={() => setSelectedImage(src)}
              className="break-inside-avoid relative overflow-hidden group rounded-none bg-[#111] shadow-lg cursor-pointer"
            >
              <Image 
                src={src} 
                alt={`Galería Critical Sounds ${index + 1}`} 
                width={800} 
                height={600} 
                className="w-full h-auto object-cover transform transition-transform duration-700 ease-out group-hover:scale-105" 
                priority={index < 6}
                unoptimized
              />
              {/* Optional dark overlay on hover to feel interactive, though user said no descriptions */}
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-500 pointer-events-none" />
            </div>
          ))}
        </div>
      </section>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 z-[200] flex items-center justify-center bg-black/95 p-4 sm:p-8 cursor-zoom-out backdrop-blur-sm"
          onClick={() => setSelectedImage(null)}
        >
          {/* Close button */}
          <button 
            className="absolute top-6 right-6 text-white/50 hover:text-white transition-colors z-[210] p-2"
            onClick={(e) => {
              e.stopPropagation()
              setSelectedImage(null)
            }}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>
          
          <div 
            className="relative w-full h-[80vh] sm:h-[90vh] max-w-6xl flex items-center justify-center cursor-default shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <Image 
              src={selectedImage}
              alt="Vista ampliada"
              fill
              className="object-contain drop-shadow-2xl"
              unoptimized
            />
          </div>
        </div>
      )}
    </div>
  )
}
