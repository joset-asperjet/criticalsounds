'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import { X, ArrowUpRight } from 'lucide-react'
import { SiBeatport, SiInstagram, SiSpotify } from 'react-icons/si'
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
        <div className="relative h-[390px] w-full overflow-hidden mb-6 rounded-none bg-[#161618] cursor-pointer">
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

          {/* Iconos de Redes adentro de la foto: Invert (fondo negro/icono blanco -> fondo blanco/icono negro en hover) */}
          {member.socials && (
            <div className="absolute bottom-4 right-4 z-30 pointer-events-auto flex items-center gap-2.5">
              {member.socials.instagram && (
                <a
                  href={member.socials.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  title="Instagram"
                  onClick={(e) => e.stopPropagation()}
                  className="w-9 h-9 rounded-full bg-black/85 backdrop-blur-md border border-white/40 flex items-center justify-center text-white hover:bg-white hover:text-black hover:border-white transition-all duration-300 shadow-lg group/icon"
                >
                  <SiInstagram className="w-4 h-4 text-white group-hover/icon:text-black fill-current transition-all duration-300 group-hover/icon:scale-110" />
                </a>
              )}
              {member.socials.beatport && (
                <a
                  href={member.socials.beatport}
                  target="_blank"
                  rel="noopener noreferrer"
                  title="Beatport"
                  onClick={(e) => e.stopPropagation()}
                  className="w-9 h-9 rounded-full bg-black/85 backdrop-blur-md border border-white/40 flex items-center justify-center text-white hover:bg-white hover:text-black hover:border-white transition-all duration-300 shadow-lg group/icon"
                >
                  <SiBeatport className="w-4.5 h-4.5 text-white group-hover/icon:text-black fill-current transition-all duration-300 group-hover/icon:scale-110" />
                </a>
              )}
              {member.socials.spotify && (
                <a
                  href={member.socials.spotify}
                  target="_blank"
                  rel="noopener noreferrer"
                  title="Spotify"
                  onClick={(e) => e.stopPropagation()}
                  className="w-9 h-9 rounded-full bg-black/85 backdrop-blur-md border border-white/40 flex items-center justify-center text-white hover:bg-white hover:text-black hover:border-white transition-all duration-300 shadow-lg group/icon"
                >
                  <SiSpotify className="w-4 h-4 text-white group-hover/icon:text-black fill-current transition-all duration-300 group-hover/icon:scale-110" />
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

        {/* Preview Bio y Logos */}
        <div className="flex flex-col flex-grow justify-between">
          <p className="text-[#999] text-[14px] leading-relaxed mb-4 min-h-[72px] [&_b]:text-white [&_b]:font-semibold">
            <span dangerouslySetInnerHTML={{ __html: member.description }} />
            {' '}
            <button
              onClick={() => setIsOpen(true)}
              className="inline-flex items-center gap-0.5 text-white/80 hover:text-[#d7ff54] font-medium transition-colors duration-200 underline underline-offset-4 decoration-white/30 hover:decoration-[#d7ff54] cursor-pointer"
            >
              ver más
              <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </button>
          </p>

          {/* Logos de sellos / marcas discográficas */}
          {member.logos && member.logos.length > 0 && (
            <div className="pt-2 pb-1 flex items-center flex-wrap gap-4.5 mt-auto">
              {member.logos.map((logo) => {
                const isPerfectoFluoro = logo.name === 'Perfecto Fluoro'
                return (
                  <div
                    key={logo.name}
                    title={logo.name}
                    className="relative h-10 sm:h-11 w-auto min-w-[44px] max-w-[120px] flex items-center justify-start opacity-90 hover:opacity-100 transition-opacity duration-300"
                  >
                    <Image
                      src={logo.src}
                      alt={logo.name}
                      width={140}
                      height={48}
                      className={`h-full w-auto object-contain transition-all duration-300 ${
                        isPerfectoFluoro ? '' : 'brightness-0 invert opacity-95'
                      }`}
                    />
                  </div>
                )
              })}
            </div>
          )}
        </div>
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
