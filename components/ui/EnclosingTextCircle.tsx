'use client'

import React, { useRef, useEffect, useState } from 'react'

export function EnclosingTextCircle({ text }: { text: string }) {
  const containerRef = useRef<HTMLSpanElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.3 }
    )

    if (containerRef.current) {
      observer.observe(containerRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <span ref={containerRef} className="relative inline-block z-10 px-2 py-0.5 my-1 whitespace-nowrap">
      <span className="relative z-10 text-white font-medium">{text}</span>
      <svg
        className="absolute -top-2 -bottom-2 -left-3 -right-3 w-[calc(100%+24px)] h-[calc(100%+16px)] text-[#d7ff54] pointer-events-none overflow-visible z-0"
        viewBox="0 0 320 60"
        preserveAspectRatio="none"
      >
        <path
          d="M 20 30 C 15 12, 90 6, 170 7 C 255 8, 310 14, 312 30 C 314 46, 235 54, 155 53 C 70 52, 10 48, 14 26 C 18 12, 60 8, 110 7"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.2"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeDasharray="950"
          strokeDashoffset={isVisible ? 0 : 950}
          style={{
            transition: 'stroke-dashoffset 2s cubic-bezier(0.25, 1, 0.5, 1)',
            filter: 'drop-shadow(0 0 6px rgba(215, 255, 84, 0.4))',
          }}
        />
      </svg>
    </span>
  )
}
