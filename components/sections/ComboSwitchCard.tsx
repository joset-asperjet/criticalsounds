'use client'

import React, { useState } from 'react'
import { Course } from '@/lib/data/courses'

interface ComboSwitchCardProps {
  combos: Course[]
}

export function ComboSwitchCard({ combos }: ComboSwitchCardProps) {
  const digitalCombo = combos.find(c => c.slug === 'digital-dj') || combos[0]
  const vinylCombo = combos.find(c => c.slug === '360-dj') || combos[1] || combos[0]

  const [selectedType, setSelectedType] = useState<'digital' | 'vinyl'>('digital')

  const currentCombo = selectedType === 'digital' ? digitalCombo : vinylCombo

  if (!currentCombo) return null

  return (
    <div className="w-full bg-gradient-to-b from-[#18181d] via-[#121215] to-[#0d0d0e] rounded-none border border-[#27272a] p-6 sm:p-10 relative overflow-hidden transition-all duration-300">
      {/* Background Accent Blur */}
      <div className="absolute -right-20 -top-20 w-80 h-80 bg-[#d7ff5412] rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -left-20 -bottom-20 w-80 h-80 bg-[#a9eff112] rounded-full blur-3xl pointer-events-none" />

      {/* Header & Category Badge */}
      <div className="pb-8 border-b border-[#29292e]">
        <div className="mb-2">
          <span className="text-[#d7ff54] text-[12px] font-mono tracking-widest uppercase font-semibold">
            Ruta Recomendada (Combos de Cero)
          </span>
        </div>
        <h3 className="text-[28px] sm:text-[36px] font-light tracking-tight text-white m-0">
          Formación Integral de Cero a Pro
        </h3>
      </div>

      {/* Card Dynamic Body */}
      <div className="flex flex-col lg:flex-row items-stretch gap-8 pt-8">
        
        {/* Left Column: Image & Badges */}
        <div className="w-full lg:w-[55%] flex flex-col gap-4">
          <div className="flex flex-wrap items-center gap-3">
            <span className="border border-white/80 text-white bg-black/40 backdrop-blur-md text-[12px] font-mono px-3 py-1 rounded-full font-medium">
              {currentCombo.tag}
            </span>
            <span className="text-[#8a8a93] text-[13px] font-mono bg-[#1c1c22] px-3 py-1 rounded-full border border-[#2c2c36]">
              ⏱ {currentCombo.duration}
            </span>
            <span className="text-[#a9eff1] text-[13px] font-mono bg-[#a9eff115] px-3 py-1 rounded-full border border-[#a9eff135]">
              Nivel: {currentCombo.level}
            </span>
          </div>

          <div className="relative w-full flex-1 rounded-none overflow-hidden border border-[#2d2d35] group bg-[#161618] min-h-[300px]">
            {currentCombo.image && (
              <img
                key={currentCombo.slug}
                src={currentCombo.image}
                alt={currentCombo.name}
                className="absolute inset-0 w-full h-full object-cover object-[center_35%] transition-all duration-500 animate-fadeIn opacity-90"
              />
            )}
            <div className="absolute inset-0 bg-gradient-to-t from-[#121215] via-black/20 to-transparent" />
          </div>
        </div>

        {/* Right Column: Content Container */}
        <div className="w-full lg:w-[45%] bg-[#0a0a0c] p-6 sm:p-8 rounded-none border border-[#27272a] shadow-2xl flex flex-col justify-between">
          
          {/* Top: Pricing & Equipment */}
          <div className="flex flex-col space-y-6">
            <div>
              <span className="text-[12px] font-mono text-[#888] uppercase tracking-wider block mb-1">
                Inversión de la ruta
              </span>
              <div className="flex items-baseline gap-3">
                <span className="text-[13px] font-mono font-light text-[#d4d4d8] tracking-wider">
                  {currentCombo.price}
                </span>
              </div>
              <span className="text-[#10b981] text-[12px] font-mono block mt-1">
                ✓ Incluye diploma certificado y horas libres de práctica
              </span>
            </div>

            <div className="space-y-3 pt-4 border-t border-[#1f1f23]">
              <span className="text-[11px] font-mono uppercase text-[#666] tracking-wider block">
                Equipamiento de cabina incluido:
              </span>
              <div className="flex flex-wrap gap-1.5">
                {currentCombo.equipment.map((eq, i) => (
                  <span key={i} className="text-[11px] font-mono bg-[#16161a] text-[#a1a1aa] px-2.5 py-1 rounded border border-[#26262e]">
                    {eq}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Middle/Bottom: Title with Switch on desktop, Description, Accordion & CTAs */}
          <div className="flex flex-col pt-8 mt-8 border-t border-[#1f1f23]">
            {/* Title & Switch Container */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-3">
              <div className="flex items-center gap-2.5 flex-wrap">
                <h4 className="text-[20px] sm:text-[22px] lg:text-[20px] xl:text-[23px] font-light tracking-tight text-white m-0 whitespace-nowrap">
                  {currentCombo.name}
                </h4>
              </div>

              {/* Interactive Liquid Glass Switch with inviting glow pulse */}
              <div className="relative flex w-full md:w-[260px] bg-[#0a0a0c]/80 backdrop-blur-2xl p-1 rounded-full border border-white/20 shadow-[inset_0_2px_8px_rgba(0,0,0,0.8)] self-start md:self-center shrink-0 group/switcher animate-switch-glow">
                <style>{`
                  @keyframes liquidGlass {
                    0% { background-position: 0% 0%; }
                    50% { background-position: 100% 100%; }
                    100% { background-position: 0% 0%; }
                  }
                  .animate-liquid-glass {
                    background-image: 
                      radial-gradient(circle at 20% 30%, rgba(255, 255, 255, 0.25) 0%, transparent 60%), 
                      radial-gradient(circle at 80% 70%, rgba(255, 255, 255, 0.15) 0%, transparent 60%),
                      linear-gradient(120deg, rgba(255, 255, 255, 0.02) 0%, rgba(255, 255, 255, 0.15) 50%, rgba(255, 255, 255, 0.02) 100%);
                    background-size: 200% 200%;
                    animation: liquidGlass 6s infinite alternate ease-in-out;
                  }
                  @keyframes switchGlowPulse {
                    0%, 100% {
                      box-shadow: 0 0 12px rgba(215, 255, 84, 0.15), inset 0 2px 8px rgba(0, 0, 0, 0.8);
                      border-color: rgba(255, 255, 255, 0.2);
                    }
                    50% {
                      box-shadow: 0 0 26px rgba(215, 255, 84, 0.55), 0 0 45px rgba(169, 239, 241, 0.25), inset 0 0 12px rgba(215, 255, 84, 0.2);
                      border-color: rgba(215, 255, 84, 0.65);
                    }
                  }
                  .animate-switch-glow {
                    animation: switchGlowPulse 2.8s ease-in-out infinite;
                  }
                `}</style>

                {/* Sliding Glass Lens */}
                <div 
                  className={`absolute top-1 bottom-1 left-1 w-[calc(50%-4px)] animate-liquid-glass backdrop-blur-lg border border-white/20 rounded-full transition-transform duration-500 ease-[cubic-bezier(0.25,1,0.5,1)] shadow-[0_4px_16px_rgba(0,0,0,0.5),inset_0_1px_2px_rgba(255,255,255,0.4)] pointer-events-none overflow-hidden ${
                    selectedType === 'digital' ? 'translate-x-0' : 'translate-x-full'
                  }`}
                >
                  <div className="absolute inset-0 bg-gradient-to-b from-white/10 to-transparent rounded-full pointer-events-none" />
                </div>

                <button
                  type="button"
                  onClick={() => setSelectedType('digital')}
                  className={`relative z-10 flex-1 py-1.5 text-[11px] font-medium transition-colors duration-300 text-center ${
                    selectedType === 'digital'
                      ? 'text-white drop-shadow-[0_2px_10px_rgba(255,255,255,0.5)]'
                      : 'text-[#777] hover:text-[#aaa]'
                  }`}
                >
                  Digital
                </button>
                <button
                  type="button"
                  onClick={() => setSelectedType('vinyl')}
                  className={`relative z-10 flex-1 py-1.5 text-[11px] font-medium transition-colors duration-300 text-center ${
                    selectedType === 'vinyl'
                      ? 'text-white drop-shadow-[0_2px_10px_rgba(255,255,255,0.5)]'
                      : 'text-[#777] hover:text-white'
                  }`}
                >
                  Digital &amp; Vinyl
                </button>
              </div>
            </div>

            <p className="text-[#a1a1aa] text-[14px] sm:text-[15px] leading-relaxed mb-6">
              {currentCombo.description}
            </p>

            {/* Lo que aprenderás: 2 al lado izquierdo, 2 al lado derecho */}
            <div className="bg-[#121215]/80 border border-[#27272a] rounded-none p-4 sm:p-5 mb-5">
              <span className="text-[11px] sm:text-[12px] font-mono uppercase text-[#d7ff54] tracking-wider block mb-3 font-semibold">
                Lo que aprenderás en esta ruta:
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-2.5">
                {currentCombo.learning.slice(0, 4).map((item, idx) => (
                  <div key={idx} className="flex items-start gap-2 text-[#d4d4d8] text-[13px] sm:text-[13.5px]">
                    <span className="text-[#d7ff54] text-[14px] shrink-0 mt-[-1px]">✓</span>
                    <span className="leading-snug">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* CTAs located below "Lo que aprenderás" */}
            <div className="w-full">
              <a
                href={`https://wa.me/573226393861?text=${encodeURIComponent(`Hola! Quiero apartar mi cupo / espacio para el combo: ${currentCombo.name}`)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="group w-full bg-transparent hover:bg-white border-2 border-white/80 hover:border-white font-semibold py-3.5 px-6 rounded-full flex items-center justify-center text-[15px] tracking-wide transition-all duration-300 text-center shadow-[0_0_20px_rgba(255,255,255,0.08)] hover:shadow-[0_0_25px_rgba(255,255,255,0.35)]"
              >
                <span className="text-white group-hover:!text-black transition-colors duration-300 font-semibold">
                  Quiero mi espacio
                </span>
              </a>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}
