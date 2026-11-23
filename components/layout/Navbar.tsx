'use client'

import Link from 'next/link'
import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import Image from 'next/image'

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const links = [
    { name: 'Quiénes somos', href: '/academy-studios#quienes-somos' },
    { name: 'Team', href: '/team' },
    { name: 'Cursos', href: '/cursos/social-dj' },
    { name: 'Cabinas', href: '/cabinas' },
    { name: 'Galería', href: '/galeria' },
  ]

  const whatsappReservaUrl = `https://wa.me/573226393861?text=${encodeURIComponent(
    'Hola! Quiero reservar mi primera clase gratis en Critical Academy.'
  )}`

  const whatsappFinanciacionUrl = `https://wa.me/573226393861?text=${encodeURIComponent(
    'Hola! Quiero información sobre los planes de financiación para los cursos de DJ.'
  )}`

  return (
    <header className="fixed top-0 left-0 right-0 z-[100] w-full border-b border-white/[0.08] bg-[#0d0d0e]/85 backdrop-blur-2xl shadow-[0_8px_32px_0_rgba(0,0,0,0.5)] transition-all duration-300">
      <div className="flex h-[82px] items-center justify-between px-6 lg:px-12">
        <Link href="/academy-studios" className="flex items-center hover:opacity-85 transition-opacity shrink-0">
          <Image
            src="/multimedia/images/logo-and-svg/critical-sounds-logo-academy.png"
            alt="Critical Sounds"
            width={240}
            height={68}
            className="h-[52px] md:h-[64px] w-auto object-contain"
            priority
          />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden xl:flex items-center gap-7 2xl:gap-8 ml-auto">
          {links.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-[13px] text-[#aaa] hover:text-white transition-colors"
            >
              {link.name}
            </Link>
          ))}
          <a
            href={whatsappFinanciacionUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[13px] text-[#aaa] hover:text-white transition-colors"
          >
            Financiación
          </a>

          {/* Botón Souvenirs (sin enlace aún) */}
          <a
            href="#souvenirs"
            onClick={(e) => e.preventDefault()}
            className="text-[13px] text-[#aaa] hover:text-white transition-colors cursor-pointer select-none"
            title="Próximamente"
          >
            Souvenirs
          </a>

          {/* Botón CTA: Reserva tu primera clase gratis (hollow verde, texto blanco, sin brillo) */}
          <a
            href={whatsappReservaUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-[#d7ff54] bg-transparent hover:bg-[#d7ff54]/10 text-white text-[13px] font-medium tracking-wide transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] whitespace-nowrap ml-1 cursor-pointer"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#d7ff54] shrink-0" />
            <span>Reserva tu primera clase gratis</span>
          </a>
        </nav>

        {/* Nav para pantallas medianas (md a lg) con espaciado compacto */}
        <nav className="hidden md:flex xl:hidden items-center gap-4 lg:gap-5 ml-auto">
          {links.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-[12px] lg:text-[13px] text-[#aaa] hover:text-white transition-colors"
            >
              {link.name}
            </Link>
          ))}
          <a
            href={whatsappFinanciacionUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[12px] lg:text-[13px] text-[#aaa] hover:text-white transition-colors"
          >
            Financiación
          </a>
          <a
            href="#souvenirs"
            onClick={(e) => e.preventDefault()}
            className="text-[12px] lg:text-[13px] text-[#aaa] hover:text-white transition-colors cursor-pointer select-none"
            title="Próximamente"
          >
            Souvenirs
          </a>
          <a
            href={whatsappReservaUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative inline-flex items-center gap-1.5 px-3.5 lg:px-4 py-2 rounded-full border border-[#d7ff54] bg-transparent hover:bg-[#d7ff54]/10 text-white text-[12px] font-medium tracking-wide transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] whitespace-nowrap ml-1 cursor-pointer"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#d7ff54] shrink-0" />
            <span>Clase gratis</span>
          </a>
        </nav>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-white p-2 focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="md:hidden absolute top-[82px] left-0 right-0 bg-[#151516] border-b border-[#333] p-6 flex flex-col gap-4 shadow-xl animate-in fade-in slide-in-from-top-2 duration-200">
          {links.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="text-base text-[#aaa] hover:text-white transition-colors"
            >
              {link.name}
            </Link>
          ))}
          <a
            href={whatsappFinanciacionUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setIsOpen(false)}
            className="text-base text-[#aaa] hover:text-white transition-colors"
          >
            Financiación
          </a>
          <a
            href="#souvenirs"
            onClick={(e) => {
              e.preventDefault()
              setIsOpen(false)
            }}
            className="text-base text-[#aaa] hover:text-white transition-colors cursor-pointer select-none"
          >
            Souvenirs
          </a>

          {/* CTA Mobile Button (hollow verde, texto blanco, sin brillo) */}
          <div className="pt-2">
            <a
              href={whatsappReservaUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setIsOpen(false)}
              className="w-full flex items-center justify-center gap-2 px-6 py-3.5 rounded-full border border-[#d7ff54] bg-transparent hover:bg-[#d7ff54]/10 text-white font-medium text-[14px] tracking-wide active:scale-[0.98] transition-all cursor-pointer"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-[#d7ff54] shrink-0" />
              <span>Reserva tu primera clase gratis</span>
            </a>
          </div>
        </div>
      )}
    </header>
  )
}
