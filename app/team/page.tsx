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
          <h1 className="text-[clamp(40px,5.7vw,82px)] leading-tight font-light tracking-tight flex flex-wrap items-baseline gap-x-4 gap-y-1">
            <span>El Team</span>
            <span className="text-[clamp(18px,2.2vw,32px)] text-[#888] font-light tracking-normal">
              (+ 100 años de experiencia colectiva)
            </span>
          </h1>
        </div>

        {/* Tres Columnas Introductorias en Desktop sin contenedor de bordes redondos */}
        <div className="grid md:grid-cols-3 gap-8 mb-16 lg:mb-20 text-[#aaa] text-[15px] leading-relaxed">
          <div>
            <span className="text-[11px] font-mono text-[#d7ff54] tracking-wider block mb-2.5 uppercase font-medium">
              01 · Trayectoria &amp; Artistas
            </span>
            <p>
              En estos 15 años de trayectoria, hemos tenido la fortuna de trabajar con los nombres más importantes del Trance, Techno, Melodic Techno, Progressive y PSY. Además de nuestro impresionante book de artistas soportado por nuestra marca Critical Artist.
            </p>
          </div>

          <div>
            <span className="text-[11px] font-mono text-[#a9eff1] tracking-wider block mb-2.5 uppercase font-medium">
              02 · Plataforma 360°
            </span>
            <p>
              En 2021 cambia de nombre, reorganiza y se convierte en lo que hoy es Critical Sounds; operando exclusivamente desde Colombia con Steve Dekay como A&R. Hoy en día somos una plataforma 360 para artistas de música electrónica.
            </p>
          </div>

          <div>
            <span className="text-[11px] font-mono text-[#b4a2ff] tracking-wider block mb-2.5 uppercase font-medium">
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
