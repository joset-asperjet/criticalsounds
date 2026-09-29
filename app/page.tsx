'use client'

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { PixelTrail } from '@/components/ui/PixelTrail'

interface Division {
  num: string
  title: string
  description: string
  image: string
  active: boolean
  href: string
}

function DivisionCard({ item, index }: { item: Division; index: number }) {
  const cardContent = (
    <div
      style={{ animationDelay: `${index * 130}ms` }}
      className={`relative h-full w-full px-5 py-3.5 sm:px-6 sm:py-5 md:p-10 flex flex-col justify-between border-b md:border-b-0 md:border-r border-white/10 transition-all duration-500 overflow-hidden cursor-pointer group animate-entrance-desktop animate-entrance-mobile ${
        item.active
          ? 'bg-neutral-950/70 hover:bg-neutral-900/90'
          : 'bg-black/80 hover:bg-neutral-950/90'
      }`}
    >
      {/* Background Image: Clean, high resolution, no hyperzoom */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <Image
          src={item.image}
          alt={item.title}
          fill
          className="object-cover transition-opacity duration-500 opacity-60 group-hover:opacity-85"
          priority
        />
        {/* Contrast overlay: darker at bottom for legibility, lighter at top/center */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/15 transition-opacity duration-500 group-hover:opacity-75 pointer-events-none" />
      </div>

      {/* Interactive Pixel Trail: follows mouse movement with sampled image colors and micro-pixels */}
      <PixelTrail imageSrc={item.image} />

      {/* Top Row: Number 01, 02.. */}
      <div className="relative z-10 flex items-center justify-between pointer-events-none">
        <span className="text-[11px] md:text-sm font-light text-white/60 tracking-widest font-mono drop-shadow-md">
          {item.num}
        </span>
      </div>

      {/* Bottom Section: Logos with uniform alignment + title & description */}
      <div className="relative z-10 mt-auto flex flex-col pointer-events-none">
        <div className="h-12 sm:h-14 md:h-20 flex items-center mb-1 md:mb-3">
          <Image
            src="/multimedia/images/logo-and-svg/critical-sounds-logo.png"
            alt="Critical Sounds"
            width={340}
            height={90}
            className={`h-11 sm:h-12 md:h-14 lg:h-16 w-auto object-contain transition-all duration-300 origin-left drop-shadow-[0_2px_12px_rgba(0,0,0,0.8)] ${
              item.active
                ? 'opacity-95 group-hover:opacity-100'
                : 'opacity-60 group-hover:opacity-90'
            }`}
            priority
          />
        </div>

        <div className="md:h-10 flex items-center mb-1 md:mb-2">
          <h2 className="text-base sm:text-lg md:text-xl lg:text-[22px] font-bold tracking-wider text-white uppercase leading-tight drop-shadow-md">
            {item.title}
          </h2>
        </div>

        <div className="md:h-24">
          <p className="text-[11px] sm:text-xs md:text-[13px] text-neutral-300 font-light leading-snug md:leading-relaxed line-clamp-2 md:line-clamp-4 max-w-sm drop-shadow-sm">
            {item.description}
          </p>
        </div>
      </div>
    </div>
  )

  if (item.active) {
    return (
      <Link href={item.href} className="h-full w-full block overflow-hidden">
        {cardContent}
      </Link>
    )
  }

  return (
    <div className="h-full w-full block overflow-hidden">
      {cardContent}
    </div>
  )
}

export default function PortalPage() {
  const divisions: Division[] = [
    {
      num: '01',
      title: 'Label',
      description: 'Sello discográfico holding con más de 1650 singles y 600 lanzamientos en 4 sublabels (Overload, State, Fusion, Uprising).',
      image: '/multimedia/images/home-sections/critical-sounds-label.webp',
      active: false,
      href: '#',
    },
    {
      num: '02',
      title: 'Academy & Studios',
      description: 'Academia de DJ y cabinas profesionales con equipos de última generación, además de un estudio de producción y grabación musical 360°.',
      image: '/multimedia/images/home-sections/critical-sounds-academy.webp',
      active: true,
      href: '/academy-studios',
    },
    {
      num: '03',
      title: 'Artist',
      description: 'Agencia encargada de gestionar y realizar el booking de artistas de música electrónica a nivel nacional e internacional.',
      image: '/multimedia/images/home-sections/critical-sounds-artist.webp',
      active: false,
      href: '#',
    },
    {
      num: '04',
      title: 'Radioshow',
      description: 'Programa de radio y podcast de música electrónica con miles de reproducciones semanales y un nuevo estudio con formato Face to Face.',
      image: '/multimedia/images/home-sections/critical-sounds-radioshow.webp',
      active: false,
      href: '#',
    },
  ]

  return (
    <div className="h-screen h-[100dvh] w-full bg-black text-white flex flex-col font-[family-name:var(--font-public-sans)] select-none overflow-hidden fixed inset-0">
      {/* 4 divisions: exactly 25% height in mobile (4 rows) / 4 full columns in desktop */}
      <div className="h-full w-full grid grid-cols-1 md:grid-cols-4 grid-rows-4 md:grid-rows-1">
        {divisions.map((item, index) => (
          <DivisionCard key={item.num} item={item} index={index} />
        ))}
      </div>
    </div>
  )
}
