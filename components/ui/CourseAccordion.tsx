'use client'

import React, { useState } from 'react'
import { CourseLevelItem } from '@/lib/data/courses'

interface CourseAccordionProps {
  levels: CourseLevelItem[]
}

export function CourseAccordion({ levels }: CourseAccordionProps) {
  // Start with the first level open by default
  const [openIndexes, setOpenIndexes] = useState<number[]>([0])

  const toggleIndex = (index: number) => {
    setOpenIndexes(prev =>
      prev.includes(index) ? prev.filter(i => i !== index) : [...prev, index]
    )
  }

  return (
    <div className="space-y-3">
      {levels.map((lvl, index) => {
        const isOpen = openIndexes.includes(index)
        return (
          <div
            key={index}
            className={`border transition-colors duration-200 rounded-none overflow-hidden ${
              isOpen
                ? 'border-[#a9eff1]/50 bg-[#121216]'
                : 'border-[#27272a] bg-[#0e0e11] hover:border-[#383842]'
            }`}
          >
            {/* Clickable Header / Toggle Button */}
            <button
              type="button"
              onClick={() => toggleIndex(index)}
              className="w-full px-4 py-3.5 flex items-center justify-between text-left cursor-pointer select-none group"
              aria-expanded={isOpen}
            >
              <span
                className={`font-mono text-[13px] sm:text-[13.5px] font-medium tracking-wide transition-colors ${
                  isOpen ? 'text-white font-semibold' : 'text-[#d4d4d8] group-hover:text-white'
                }`}
              >
                {lvl.title}
              </span>

              {/* Vertical collapse indicator icon */}
              <div
                className={`w-6 h-6 rounded-none flex items-center justify-center transition-transform duration-300 shrink-0 ml-3 ${
                  isOpen ? 'text-[#a9eff1] rotate-180' : 'text-[#777] group-hover:text-white'
                }`}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-4 h-4"
                >
                  <polyline points="6 9 12 15 18 9" />
                </svg>
              </div>
            </button>

            {/* Collapsible Content */}
            <div
              className={`grid transition-all duration-300 ease-in-out ${
                isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
              }`}
            >
              <div className="overflow-hidden">
                <div className="px-4 pb-4 pt-1 border-t border-[#1f1f26]">
                  <p className="text-[#a1a1aa] text-[13px] sm:text-[13.5px] leading-relaxed font-sans m-0">
                    {lvl.topics}
                  </p>
                </div>
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}
