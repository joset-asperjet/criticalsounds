'use client'

import React, { useState } from 'react'
import { TeamMember } from '@/lib/data/team'
import { TeamCard } from '@/components/sections/TeamCard'
import { ChevronDown, ChevronUp } from 'lucide-react'

interface TeamGridProps {
  members: TeamMember[]
}

export function TeamGrid({ members }: TeamGridProps) {
  const [isExpanded, setIsExpanded] = useState(false)

  // Primer bloque de 3 (Pablo Anon, Steve Dekay, Galeneo)
  const firstBlock = members.slice(0, 3)
  // Miembros adicionales (repartidos en bloques armónicos de 3)
  const remainingMembers = members.slice(3)
  const remainingCount = remainingMembers.length

  const handleToggle = () => {
    if (isExpanded) {
      const section = document.getElementById('el-team')
      if (section) {
        section.scrollIntoView({ behavior: 'smooth', block: 'start' })
      }
    }
    setIsExpanded(!isExpanded)
  }

  return (
    <div className="w-full">
      {/* Bloque principal de tres (Pablo Anon, Steve Dekay, Galeneo) */}
      <div className="grid md:grid-cols-3 gap-8 items-stretch">
        {firstBlock.map((member) => (
          <TeamCard key={member.id} member={member} />
        ))}
      </div>

      {/* Bloques adicionales de tres revelados al expandir */}
      {isExpanded && remainingCount > 0 && (
        <div className="grid md:grid-cols-3 gap-8 items-stretch mt-8 animate-in fade-in slide-in-from-top-4 duration-500">
          {remainingMembers.map((member) => (
            <TeamCard key={member.id} member={member} />
          ))}
        </div>
      )}

      {/* Botón estético 'Ver más 6' / 'Ver menos' */}
      {remainingCount > 0 && (
        <div className="flex justify-center mt-12 sm:mt-16">
          <button
            onClick={handleToggle}
            className="group relative inline-flex items-center gap-3 px-8 py-3.5 rounded-full border border-white/20 bg-white/[0.04] hover:bg-white/[0.1] hover:border-white/40 text-white text-[13px] font-mono tracking-wider uppercase transition-all duration-300 cursor-pointer shadow-[0_4px_24px_rgba(0,0,0,0.5)] hover:shadow-[0_4px_30px_rgba(215,255,84,0.15)] active:scale-[0.98]"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#d7ff54] group-hover:scale-125 transition-transform duration-300 shadow-[0_0_8px_#d7ff54]" />
            <span className="font-medium tracking-wide">
              {isExpanded ? 'Ver menos' : `Ver más ${remainingCount}`}
            </span>
            {isExpanded ? (
              <ChevronUp className="w-4 h-4 text-[#a9eff1] group-hover:-translate-y-0.5 transition-transform duration-200" />
            ) : (
              <ChevronDown className="w-4 h-4 text-[#a9eff1] group-hover:translate-y-0.5 transition-transform duration-200" />
            )}
          </button>
        </div>
      )}
    </div>
  )
}

