'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import { X, ArrowUpRight } from 'lucide-react'
import { TeamMember } from '@/lib/data/team'
import { PixelTrail } from '@/components/ui/PixelTrail'

interface TeamCardProps {
  member: TeamMember
}

export function TeamCard({ member }: TeamCardProps) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <article className="pt-2 flex flex-col group h-full">
        {/* Foto con PixelTrail y Botones Sociales */}
        <div className="relative h-[390px] w-full overflow-hidden mb-6 rounded-sm bg-[#161618] cursor-pointer">
          {member.image ? (
            <>
              <Image
                src={member.image}
                alt={member.name}
                fill
                className="object-cover object-top filter grayscale contrast-110 group-hover:scale-105 group-hover:filter-none transition-all duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-black/30 pointer-events-none" />
              <PixelTrail imageSrc={member.image} />
            </>
          ) : (
            <div className={`relative h-full w-full flex items-end p-8 bg-gradient-to-br ${member.gradient}`}>
              <span className="text-[60px] font-light text-white opacity-90">
                {member.name.split(' ').map((n) => n[0]).join('')}
              </span>
            </div>
          )}

          {/* Iconos de Redes adentro de la foto: Blanco nítido y visible */}
          {member.socials && (
            <div className="absolute bottom-4 right-4 z-10 flex items-center gap-2.5">
              {member.socials.instagram && (
                <a
                  href={member.socials.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  title="Instagram"
                  className="w-9 h-9 rounded-full bg-black/80 backdrop-blur-md border border-white/40 flex items-center justify-center text-white hover:bg-white hover:text-black hover:border-white transition-all duration-300 shadow-lg"
                >
                  <svg className="w-4 h-4 fill-white hover:fill-current" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                </a>
              )}
              {member.socials.beatport && (
                <a
                  href={member.socials.beatport}
                  target="_blank"
                  rel="noopener noreferrer"
                  title="Beatport"
                  className="w-9 h-9 rounded-full bg-black/80 backdrop-blur-md border border-white/40 flex items-center justify-center text-white hover:bg-white hover:text-black hover:border-white transition-all duration-300 shadow-lg"
                >
                  <svg className="w-4 h-4 fill-white hover:fill-current" viewBox="0 0 24 24">
                    <path d="M18.84 5.37a4.63 4.63 0 0 0-3.95-2.07c-2.09 0-3.9 1.34-4.52 3.28a5.27 5.27 0 0 0-4.63-.5c-2.45.82-4.14 3.16-4.14 5.86 0 3.39 2.76 6.15 6.15 6.15 1.94 0 3.65-.9 4.75-2.32a4.67 4.67 0 0 0 3.84 2.05c2.56 0 4.65-2.09 4.65-4.65 0-2.05-1.33-3.79-3.2-4.39.26-.74.4-1.55.4-2.39 0-.37-.03-.73-.1-1.02zm-11.1 10.6c-2.18 0-3.95-1.77-3.95-3.95s1.77-3.95 3.95-3.95 3.95 1.77 3.95 3.95-1.77 3.95-3.95 3.95zm8.9 0c-1.35 0-2.45-1.1-2.45-2.45s1.1-2.45 2.45-2.45 2.45 1.1 2.45 2.45-1.1 2.45-2.45 2.45z" />
                  </svg>
                </a>
              )}
              {member.socials.spotify && (
                <a
                  href={member.socials.spotify}
                  target="_blank"
                  rel="noopener noreferrer"
                  title="Spotify"
                  className="w-9 h-9 rounded-full bg-black/80 backdrop-blur-md border border-white/40 flex items-center justify-center text-white hover:bg-white hover:text-black hover:border-white transition-all duration-300 shadow-lg"
                >
                  <svg className="w-4 h-4 fill-white hover:fill-current" viewBox="0 0 24 24">
                    <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z" />
                  </svg>
                </a>
              )}
            </div>
          )}
        </div>

        {/* Nombre y Rol */}
        <h3 className="text-[24px] font-light tracking-tight mb-2 text-white">{member.name}</h3>
        <p className="text-[#a9eff1] text-[12px] uppercase tracking-widest mb-4 font-bold min-h-[32px]">
          {member.role}
        </p>

        {/* Preview Bio estandarizada a la misma altura */}
        <div className="flex flex-col flex-grow justify-between">
          <p
            className="text-[#999] text-[14px] leading-relaxed mb-4 min-h-[72px] line-clamp-3 [&_b]:text-white [&_b]:font-semibold"
            dangerouslySetInnerHTML={{ __html: member.description }}
          />

          {/* Botón Bio completa: diseño ultra-compacto, minimalista y elegante */}
          <div className="mb-6">
            <button
              onClick={() => setIsOpen(true)}
              className="inline-flex items-center gap-1 text-[9px] uppercase tracking-[0.16em] font-medium text-white/50 hover:text-[#d7ff54] transition-colors py-0.5 group/btn border-b border-white/15 hover:border-[#d7ff54]"
            >
              <span>Bio completa</span>
              <ArrowUpRight className="w-2.5 h-2.5 transition-transform duration-300 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
            </button>
          </div>
        </div>

        {/* Logos de sellos / marcas discográficas */}
        {member.logos && member.logos.length > 0 && (
          <div className="pt-4 border-t border-white/[0.08] flex items-center flex-wrap gap-5 mt-auto">
            {member.logos.map((logo) => {
              const isPerfectoFluoro = logo.name === 'Perfecto Fluoro'
              return (
                <div
                  key={logo.name}
                  title={logo.name}
                  className="relative h-9 sm:h-10 w-auto min-w-[44px] max-w-[115px] flex items-center justify-start opacity-85 hover:opacity-100 transition-opacity duration-300"
                >
                  <Image
                    src={logo.src}
                    alt={logo.name}
                    width={130}
                    height={46}
                    className={`h-full w-auto object-contain transition-all duration-300 ${
                      isPerfectoFluoro ? '' : 'brightness-0 invert opacity-95'
                    }`}
                  />
                </div>
              )
            })}
          </div>
        )}
      </article>

      {/* Modal estético para Bio Completa */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10 bg-black/85 backdrop-blur-xl animate-in fade-in duration-300">
          {/* Backdrop Click */}
          <div className="absolute inset-0" onClick={() => setIsOpen(false)} />

          <div className="relative w-full max-w-3xl max-h-[88vh] bg-[#121214] border border-white/10 rounded-sm shadow-[0_25px_70px_rgba(0,0,0,0.85)] flex flex-col z-10 overflow-hidden">
            {/* Header del Modal */}
            <div className="p-6 sm:p-8 border-b border-white/10 flex items-start justify-between bg-black/40">
              <div className="flex items-center gap-4 sm:gap-6">
                {member.image && (
                  <div className="relative w-16 h-16 sm:w-20 sm:h-20 rounded-full overflow-hidden shrink-0 border border-white/20">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className="object-cover object-top"
                    />
                  </div>
                )}
                <div>
                  <h3 className="text-2xl sm:text-3xl font-light tracking-tight text-white">{member.name}</h3>
                  <p className="text-[#a9eff1] text-[11px] sm:text-[12px] uppercase tracking-widest font-semibold mt-1">
                    {member.role}
                  </p>
                </div>
              </div>

              <button
                onClick={() => setIsOpen(false)}
                className="w-10 h-10 rounded-full border border-white/20 bg-white/5 hover:bg-white/15 text-white/70 hover:text-white flex items-center justify-center transition-colors"
                title="Cerrar"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Contenido scrolleable de la Bio Completa */}
            <div className="p-6 sm:p-8 overflow-y-auto space-y-4 text-neutral-300 text-[15px] sm:text-[16px] leading-relaxed scrollbar-thin scrollbar-thumb-neutral-800">
              {member.fullBio && member.fullBio.length > 0 ? (
                member.fullBio.map((paragraph, idx) => (
                  <p key={idx} className="font-light">
                    {paragraph}
                  </p>
                ))
              ) : (
                <p
                  className="font-light"
                  dangerouslySetInnerHTML={{ __html: member.description }}
                />
              )}
            </div>

            {/* Footer del Modal */}
            <div className="p-5 px-6 sm:px-8 border-t border-white/10 bg-black/50 flex flex-wrap items-center justify-between gap-4">
              {/* Logos del artista en modal */}
              {member.logos && (
                <div className="flex items-center gap-4 flex-wrap">
                  {member.logos.map((logo) => {
                    const isPerfectoFluoro = logo.name === 'Perfecto Fluoro'
                    return (
                      <div key={logo.name} className="h-7 w-auto opacity-75">
                        <Image
                          src={logo.src}
                          alt={logo.name}
                          width={100}
                          height={30}
                          className={`h-full w-auto object-contain ${isPerfectoFluoro ? '' : 'brightness-0 invert'}`}
                        />
                      </div>
                    )
                  })}
                </div>
              )}

              <button
                onClick={() => setIsOpen(false)}
                className="ml-auto px-5 py-2 rounded-full border border-white/20 text-[13px] text-white/80 hover:text-white hover:bg-white/10 transition-colors"
              >
                Cerrar
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
