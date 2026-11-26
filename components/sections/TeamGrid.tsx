'use client'

import React, { useState } from 'react'
import { TeamMember } from '@/lib/data/team'
import { TeamCard } from '@/components/sections/TeamCard'
import { ChevronDown, ChevronUp } from 'lucide-react'

interface TeamGridProps {
  members: TeamMember[]
  showAll?: boolean
  showFilters?: boolean
  hideLogos?: boolean
  hideSocials?: boolean
  showActionButtons?: boolean
}

export function TeamGrid({
  members,
  showAll = false,
  showFilters = false,
  hideLogos = false,
  hideSocials = false,
  showActionButtons = true,
}: TeamGridProps) {
  const [isExpanded, setIsExpanded] = useState(false)
  const [activeCategory, setActiveCategory] = useState<'all' | 'founders' | 'instructors' | 'management'>('all')

  const hasCategory = (member: TeamMember, cat: string) => {
    if (Array.isArray(member.category)) {
      return member.category.includes(cat as any)
    }
    return member.category === cat
  }

  const getFilteredMembers = () => {
    if (activeCategory === 'all') return members

    if (activeCategory === 'instructors') {
      const instructors = members.filter((m) => hasCategory(m, 'instructors'))
      // Galeneo de primero en los profesores, seguido de Steve Dekay y luego el resto
      const galeneo = instructors.filter((m) => m.id === 'galeneo')
      const steve = instructors.filter((m) => m.id === 'steve-dekay')
      const others = instructors.filter((m) => m.id !== 'galeneo' && m.id !== 'steve-dekay')
      return [...galeneo, ...steve, ...others]
    }

    if (activeCategory === 'founders') {
      return members.filter((m) => hasCategory(m, 'founders'))
    }

    return members.filter((m) => hasCategory(m, activeCategory))
  }

  const filteredMembers = getFilteredMembers()

  // Modo ShowAll (Para la página dedicada /team)
  if (showAll) {
    return (
      <div className="w-full">
        {showFilters && (
          <div className="flex flex-wrap items-center gap-2.5 mb-10 pb-4 border-b border-white/[0.08]">
            {[
              { id: 'all', label: `Todos (${members.length})` },
              { id: 'founders', label: `Fundadores (${members.filter((m) => hasCategory(m, 'founders')).length})` },
              { id: 'instructors', label: `Profesores (${members.filter((m) => hasCategory(m, 'instructors')).length})` },
              { id: 'management', label: `Staff & Bienestar (${members.filter((m) => hasCategory(m, 'management')).length})` },
            ].map((tab) => {
              const active = activeCategory === tab.id
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveCategory(tab.id as typeof activeCategory)}
                  style={active ? { backgroundColor: '#d7ff54', color: '#0d0d0e' } : undefined}
                  className={`px-4 py-2 rounded-full text-xs sm:text-sm font-semibold tracking-wide transition-all duration-200 cursor-pointer ${
                    active
                      ? '!bg-[#d7ff54] !text-[#0d0d0e] border border-[#d7ff54] shadow-[0_0_18px_rgba(215,255,84,0.35)]'
                      : 'bg-white/[0.04] text-[#aaa] hover:text-white hover:bg-white/[0.08] border border-white/[0.08]'
                  }`}
                >
                  {tab.label}
                </button>
              )
            })}
          </div>
        )}

        <div className="grid md:grid-cols-3 gap-8 items-stretch">
          {filteredMembers.map((member) => (
            <TeamCard
              key={member.id}
              member={member}
              hideLogos={hideLogos}
              hideSocials={hideSocials}
            />
          ))}
        </div>
      </div>
    )
  }

  // Modo Home (/academy-studios)
  const firstBlock = members.slice(0, 3)
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
      {/* Bloque principal de fundadores */}
      <div className="grid md:grid-cols-3 gap-8 items-stretch">
        {firstBlock.map((member) => (
          <TeamCard
            key={member.id}
            member={member}
            hideLogos={hideLogos}
            hideSocials={hideSocials}
          />
        ))}
      </div>

      {/* Bloques adicionales revelados al expandir (si showActionButtons está activo) */}
      {isExpanded && remainingCount > 0 && showActionButtons && (
        <div className="grid md:grid-cols-3 gap-8 items-stretch mt-8 animate-in fade-in slide-in-from-top-4 duration-500">
          {remainingMembers.map((member) => (
            <TeamCard
              key={member.id}
              member={member}
              hideLogos={hideLogos}
              hideSocials={hideSocials}
            />
          ))}
        </div>
      )}

      {/* Botones de acción: solo si showActionButtons es true y hay miembros restantes */}
      {showActionButtons && remainingCount > 0 && (
        <div className="flex flex-wrap items-center justify-center gap-4 mt-12 sm:mt-16">
          <button
            onClick={handleToggle}
            className="group relative inline-flex items-center gap-3 px-8 py-3.5 rounded-full border border-white/20 bg-white/[0.04] hover:bg-white/[0.1] hover:border-white/40 text-white text-[13px] font-mono tracking-wider uppercase transition-all duration-300 cursor-pointer shadow-[0_4px_24px_rgba(0,0,0,0.5)] hover:shadow-[0_4px_30px_rgba(215,255,84,0.15)] active:scale-[0.98]"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#d7ff54] group-hover:scale-125 transition-transform duration-300 shadow-[0_0_8px_#d7ff54]" />
            <span className="font-medium tracking-wide">
              {isExpanded ? 'Ver menos' : `Ver más (${remainingCount})`}
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
