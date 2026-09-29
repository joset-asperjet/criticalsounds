'use client'

import Link from 'next/link'
import { useState } from 'react'
import { Menu, X } from 'lucide-react'

import Image from 'next/image'

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const links = [
    { name: 'Quiénes somos', href: '/quienes-somos' },
    { name: 'Cursos', href: '/cursos' },
    { name: 'Cabinas', href: '/cabinas' },
    { name: 'Galería', href: '/galeria' },
  ]

  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/[0.08] bg-black/30 backdrop-blur-xl supports-[backdrop-filter]:bg-black/20 shadow-[0_8px_32px_0_rgba(0,0,0,0.35)] transition-all duration-300">
      <div className="flex h-[82px] items-center justify-between px-6 lg:px-12">
        <Link href="/academy-studios" className="flex items-center gap-3 md:gap-3.5 hover:opacity-85 transition-opacity">
          <Image
            src="/multimedia/images/logo-and-svg/critical-sounds-logo.png"
            alt="Critical Sounds"
            width={190}
            height={52}
            className="h-[42px] md:h-[52px] w-auto object-contain"
            priority
          />
          <div className="h-6 md:h-7 w-[1px] bg-[#333]" />
          <div className="flex flex-col text-[10px] md:text-[11px] leading-[1.15] tracking-[0.14em] uppercase font-bold text-white font-[family-name:var(--font-open-sans)]">
            <span>Academy</span>
            <span>& Studios</span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8 ml-auto mr-8">
          {links.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-[13px] text-[#aaa] hover:text-white transition-colors"
            >
              {link.name}
            </Link>
          ))}
        </nav>

        <Link
          href="/cursos"
          className="hidden md:flex items-center rounded-full border border-[#444] px-[17px] py-[12px] text-[13px] text-white hover:bg-white/5 transition-colors"
        >
          Ver cursos <span className="ml-[9px] text-[#d7ff54]">↗</span>
        </Link>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-white"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="md:hidden absolute top-[82px] left-0 right-0 bg-[#151516] border-b border-[#333] p-6 flex flex-col gap-4 shadow-xl">
          {links.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="text-lg text-[#aaa] hover:text-white"
            >
              {link.name}
            </Link>
          ))}
          <Link
            href="/cursos"
            onClick={() => setIsOpen(false)}
            className="mt-4 inline-flex items-center justify-center rounded-full border border-[#444] px-6 py-3 text-white"
          >
            Ver cursos <span className="ml-2 text-[#d7ff54]">↗</span>
          </Link>
        </div>
      )}
    </header>
  )
}
