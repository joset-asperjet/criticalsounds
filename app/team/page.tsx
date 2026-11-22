'use client'

import React from 'react'
import { team } from '@/lib/data/team'
import { TeamGrid } from '@/components/sections/TeamGrid'

export default function TeamPage() {
  return (
    <div className="min-h-screen bg-[#0d0d0e] text-white">
      <main className="py-16 sm:py-24 px-6 sm:px-8 lg:px-[8vw]">
        {/* Cabecera Principal */}
        <div className="mb-12 sm:mb-16">
          <div className="flex items-center gap-2 mb-4">
            <span className="w-2 h-2 rounded-full bg-[#d7ff54] shadow-[0_0_8px_#d7ff54]" />
            <span className="text-[11px] font-mono tracking-widest text-[#d7ff54] uppercase">
              Staff &amp; Artistas · Critical Academy
            </span>
          </div>

          <h1 className="text-[clamp(40px,5.7vw,82px)] leading-tight font-light tracking-tight flex flex-wrap items-baseline gap-x-4 gap-y-1">
            <span>El Team</span>
            <span className="text-[clamp(18px,2.2vw,32px)] text-[#888] font-light tracking-normal">
              (+ 100 años de experiencia colectiva)
            </span>
          </h1>
        </div>

        {/* Tres Columnas Introductorias en Desktop que armonizan con el grid de 3 columnas */}
        <div className="grid md:grid-cols-3 gap-8 mb-16 lg:mb-20 text-[#aaa] text-[15px] leading-relaxed">
          <div className="p-6 sm:p-7 rounded-2xl bg-white/[0.02] border border-white/[0.06] hover:border-white/15 transition-all">
            <span className="text-[11px] font-mono text-[#d7ff54] tracking-wider block mb-3 uppercase">
              01 · Trayectoria &amp; Artistas
            </span>
            <p>
              En estos 15 años de trayectoria, hemos tenido la fortuna de trabajar con los nombres más importantes del Trance, Techno, Melodic Techno, Progressive y PSY. Además de nuestro impresionante book de artistas soportado por nuestra marca Critical Artist.
            </p>
          </div>

          <div className="p-6 sm:p-7 rounded-2xl bg-white/[0.02] border border-white/[0.06] hover:border-white/15 transition-all">
            <span className="text-[11px] font-mono text-[#a9eff1] tracking-wider block mb-3 uppercase">
              02 · Plataforma 360°
            </span>
            <p>
              En 2021 cambia de nombre, reorganiza y se convierte en lo que hoy es Critical Sounds; operando exclusivamente desde Colombia con Steve Dekay como A&R. Hoy en día somos una plataforma 360 para artistas de música electrónica.
            </p>
          </div>

          <div className="p-6 sm:p-7 rounded-2xl bg-white/[0.02] border border-white/[0.06] hover:border-white/15 transition-all">
            <span className="text-[11px] font-mono text-[#b4a2ff] tracking-wider block mb-3 uppercase">
              03 · Catálogo &amp; Academia
            </span>
            <p>
              Actualmente Critical Sounds cuenta con un catálogo con más de 1650 singles y más de 600 lanzamientos. Hemos creado nuestra academia de DJ, Critical Academy, y nuestros estudios con equipos de última generación para grabación y producción.
            </p>
          </div>
        </div>

        {/* Grid de miembros del equipo con filtros interactivos: sin logos ni redes sociales */}
        <TeamGrid members={team} showAll showFilters hideLogos hideSocials />
      </main>
    </div>
  )
}
