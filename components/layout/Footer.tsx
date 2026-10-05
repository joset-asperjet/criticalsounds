'use client'

import React, { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import lottie, { AnimationItem } from 'lottie-web'
import { 
  FaInstagram, 
  FaYoutube, 
  FaTiktok, 
  FaFacebookF, 
  FaEnvelope, 
  FaPhone, 
  FaLocationDot,
  FaArrowRight,
  FaXmark
} from 'react-icons/fa6'

export function Footer() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const lottieContainerRef = useRef<HTMLDivElement>(null)
  const animInstance = useRef<AnimationItem | null>(null)

  useEffect(() => {
    if (!lottieContainerRef.current) return

    animInstance.current = lottie.loadAnimation({
      container: lottieContainerRef.current,
      renderer: 'svg',
      loop: false,
      autoplay: false,
      path: '/multimedia/images/logo-and-svg/lootie-animated-folder.json'
    })

    return () => {
      animInstance.current?.destroy()
    }
  }, [])

  return (
    <>
      <footer className="relative bg-[#09090b] text-[#9a9aa2] overflow-hidden pt-16 lg:pt-24 select-none">
        
        {/* Background Image Container - Absolutely positioned at the bottom of the footer */}
        <div className="absolute bottom-0 left-0 right-0 w-full flex justify-center pointer-events-none z-0">
          <div className="w-full relative" style={{ height: '55vh', maxHeight: '550px', minHeight: '400px' }}>
            {/* Mobile: 0 margins. Desktop (sm+): match px-8 lg:px-[8vw] */}
            <div className="absolute bottom-0 left-0 sm:left-8 lg:left-[8vw] right-0 sm:right-8 lg:right-[8vw] top-0 overflow-hidden">
              <Image
                src="/multimedia/images/critical-academy/critical-sounds-image-foooter.webp"
                alt="Medellín Provenza - Critical Sounds"
                fill
                className="object-cover object-bottom"
                sizes="100vw"
                priority={false}
              />
            </div>
          </div>
        </div>

        <div className="w-full px-8 lg:px-[8vw] relative z-10">
          {/* Content Layout: 4 Columns (Brand & Contact, Cursos, Academy, Ayuda & Contacto) */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 relative z-10">
            
            {/* Col 1: Brand & Contact Info (lg:col-span-4) */}
            <div className="lg:col-span-4 flex flex-col justify-between">
              <div>
                <Link href="/academy-studios" className="inline-block mb-4 hover:opacity-90 transition-opacity">
                  <Image
                    src="/multimedia/images/logo-and-svg/critical-sounds-logo.png"
                    alt="Critical Sounds"
                    width={160}
                    height={42}
                    className="h-8 sm:h-9 w-auto object-contain"
                  />
                </Link>

                {/* Direct Contacts */}
                <div className="space-y-2.5 text-[12.5px] text-[#b0b0b8] mt-2">
                  <a 
                    href="mailto:info@criticalsounds.com" 
                    className="flex items-center gap-2.5 hover:text-white transition-colors"
                  >
                    <FaEnvelope className="w-3.5 h-3.5 text-white shrink-0" />
                    <span>info@criticalsounds.com</span>
                  </a>

                  <a 
                    href="https://wa.me/573226393861" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-2.5 hover:text-white transition-colors"
                  >
                    <FaPhone className="w-3.5 h-3.5 text-white shrink-0" />
                    <span>+57 322 639 3861</span>
                  </a>

                  {/* Animated Made in Medellín badge */}
                  <div className="pt-2 pb-1">
                    <div className="inline-flex items-center gap-2.5 select-none -rotate-[2deg] hover:rotate-0 transition-transform duration-300">
                      {/* Painted Colombia flag */}
                      <span className="relative flex items-center justify-center filter drop-shadow-[0_2px_8px_rgba(0,0,0,0.6)]">
                        <svg width="22" height="17" viewBox="0 0 32 24" fill="none" className="overflow-visible">
                          <path
                            d="M2 5.5 C8 4, 18 3.5, 30 5 C30.5 7.5, 29 8.5, 2 8 C1.5 6.5, 1.8 5.8, 2 5.5 Z"
                            fill="#FCD116"
                            className="animate-handwritten opacity-95"
                          />
                          <path
                            d="M2.5 10.5 C9 9.8, 20 9.5, 29.5 11 C29 13.5, 27.5 14, 3 13.5 C2.3 12.5, 2.2 11.2, 2.5 10.5 Z"
                            fill="#0044B5"
                            className="animate-handwritten opacity-95"
                            style={{ animationDelay: '0.08s' }}
                          />
                          <path
                            d="M3 16 C10 15.5, 21 15.8, 29 17 C28.5 19.5, 26 20.2, 3.5 19.5 C2.8 18.5, 2.6 17, 3 16 Z"
                            fill="#CE1126"
                            className="animate-handwritten opacity-95"
                            style={{ animationDelay: '0.15s' }}
                          />
                        </svg>
                      </span>

                      {/* Handwritten Made in Medellín text */}
                      <span className="animate-handwritten inline-block text-[20px] leading-none text-white tracking-wide font-medium font-['Caveat',cursive]">
                        Made in Medellín
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Social Icons Strip (Squared buttons) */}
              <div className="flex items-center gap-2.5 mt-8 pt-2">
                <a
                  href="https://www.instagram.com/criticalsoundsstudios/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  className="w-8 h-8 rounded-none bg-[#141418] hover:bg-white text-[#999] hover:text-black border border-[#27272e] hover:border-white flex items-center justify-center transition-all duration-300 shadow-sm"
                >
                  <FaInstagram className="text-[13px]" />
                </a>
                <a
                  href="https://www.youtube.com/@CriticalSounds"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="YouTube"
                  className="w-8 h-8 rounded-none bg-[#141418] hover:bg-white text-[#999] hover:text-black border border-[#27272e] hover:border-white flex items-center justify-center transition-all duration-300 shadow-sm"
                >
                  <FaYoutube className="text-[13px]" />
                </a>
                <a
                  href="https://www.tiktok.com/@critical.sounds"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="TikTok"
                  className="w-8 h-8 rounded-none bg-[#141418] hover:bg-white text-[#999] hover:text-black border border-[#27272e] hover:border-white flex items-center justify-center transition-all duration-300 shadow-sm"
                >
                  <FaTiktok className="text-[12px]" />
                </a>
                <a
                  href="https://www.facebook.com/criticalsoundsstudios"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                  className="w-8 h-8 rounded-none bg-[#141418] hover:bg-white text-[#999] hover:text-black border border-[#27272e] hover:border-white flex items-center justify-center transition-all duration-300 shadow-sm"
                >
                  <FaFacebookF className="text-[12px]" />
                </a>
              </div>
            </div>

            {/* Col 2: CURSOS (lg:col-span-3) */}
            <div className="lg:col-span-3">
              <h4 className="text-[11px] tracking-widest uppercase text-white font-semibold mb-4 border-b border-[#24242a] pb-2">
                CURSOS
              </h4>
              <ul className="space-y-2.5 text-[13px]">
                <li>
                  <Link href="/cursos/social-dj" className="hover:text-white transition-colors">
                    Social DJ
                  </Link>
                </li>
                <li>
                  <Link href="/cursos/club-dj" className="hover:text-white transition-colors">
                    Club DJ
                  </Link>
                </li>
                <li>
                  <Link href="/cursos/vinyl-dj" className="hover:text-white transition-colors">
                    Vinyl DJ
                  </Link>
                </li>
                <li>
                  <Link href="/cursos/digital-dj" className="hover:text-white transition-colors">
                    DJ Completo — Digital
                  </Link>
                </li>
                <li>
                  <Link href="/cursos/360-dj" className="hover:text-white transition-colors">
                    DJ Completo — 360°
                  </Link>
                </li>
                <li>
                  <Link href="/cursos/master-dj" className="hover:text-white transition-colors">
                    Master DJ
                  </Link>
                </li>
                <li>
                  <Link href="/cursos/master-efx-dj" className="hover:text-white transition-colors">
                    Master EFX DJ
                  </Link>
                </li>
              </ul>
            </div>

            {/* Col 3: ACADEMY & STUDIOS (lg:col-span-3) */}
            <div className="lg:col-span-3">
              <h4 className="text-[11px] tracking-widest uppercase text-white font-semibold mb-4 border-b border-[#24242a] pb-2">
                ACADEMY
              </h4>
              <ul className="space-y-2.5 text-[13px]">
                <li>
                  <Link href="/academy-studios#quienes-somos" className="hover:text-white transition-colors">
                    Quiénes Somos
                  </Link>
                </li>
                <li>
                  <Link href="/academy-studios#cursos" className="hover:text-white transition-colors">
                    Rutas de Formación
                  </Link>
                </li>
                <li>
                  <Link href="/academy-studios#quienes-somos" className="hover:text-white transition-colors">
                    Nuestro Team
                  </Link>
                </li>
                <li>
                  <Link href="/financiero" className="hover:text-white transition-colors">
                    Financiamiento
                  </Link>
                </li>
                <li>
                  <a 
                    href="https://wa.me/573226393861?text=Hola!%20Quiero%20conocer%20las%20cabinas%20de%20practica" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="hover:text-white transition-colors"
                  >
                    Cabinas de Práctica
                  </a>
                </li>
                <li>
                  <a 
                    href="https://wa.me/573226393861?text=Hola!%20Quiero%20grabar%20mi%20set%20de%20audio%20y%20video" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="hover:text-white transition-colors"
                  >
                    Grabación Sets 4K
                  </a>
                </li>
              </ul>
            </div>

            {/* Col 4: AYUDA & SOPORTE (lg:col-span-2) */}
            <div className="lg:col-span-2">
              <h4 className="text-[11px] tracking-widest uppercase text-white font-semibold mb-4 border-b border-[#24242a] pb-2">
                AYUDA &amp; SEDE
              </h4>
              <ul className="space-y-2.5 text-[13px]">
                <li>
                  <a 
                    href="https://wa.me/573226393861?text=Hola!%20Tengo%20preguntas%20frecuentes%20sobre%20la%20academia"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-white transition-colors"
                  >
                    Preguntas Frecuentes
                  </a>
                </li>
                <li>
                  <a 
                    href="https://maps.google.com/?q=Cra.+33+%2329-105,+Medell%C3%ADn,+Antioquia" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="hover:text-white transition-colors"
                  >
                    Cómo Llegar a la Sede
                  </a>
                </li>
                <li>
                  <a 
                    href="https://wa.me/573226393861?text=Hola!%20Quiero%20agendar%20una%20visita%20a%20la%20academia" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="hover:text-white transition-colors"
                  >
                    Agendar Visita
                  </a>
                </li>

                {/* Animated Lottie Folder Trigger */}
                <li className="pt-2">
                  <button 
                    onClick={() => setIsModalOpen(true)}
                    onMouseEnter={() => {
                      if (animInstance.current) {
                        animInstance.current.setDirection(1)
                        animInstance.current.play()
                      }
                    }}
                    onMouseLeave={() => {
                      if (animInstance.current) {
                        animInstance.current.setDirection(-1)
                        animInstance.current.play()
                      }
                    }}
                    className="group flex items-center gap-2.5 hover:text-white transition-colors text-left outline-none cursor-pointer"
                  >
                    <div 
                      ref={lottieContainerRef} 
                      className="w-10 h-10 shrink-0 pointer-events-none flex items-center justify-center"
                    />
                    <span className="text-[12px] tracking-wide font-medium text-white/90 group-hover:text-white transition-colors">
                      Políticas de agendamiento
                    </span>
                  </button>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom copyright stamp inside the max-w-7xl so it aligns with content */}
          <div className="border-t border-[#1a1a20] pt-6 flex flex-col items-center sm:flex-row sm:justify-between text-[11px] text-white/40 relative z-10 mt-12 gap-2 text-center sm:text-left">
            <span>© {new Date().getFullYear()} Critical Sounds · Medellín, Colombia</span>
            <span className="flex flex-wrap items-center justify-center gap-1">
              Diseñado con amor y javascript por{' '}
              <a 
                href="https://josetportfolio-delta.vercel.app/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-white/60 hover:text-[#d7ff54] transition-colors font-medium"
              >
                Joset
              </a>
            </span>
          </div>

          {/* HUGE SPACER to forcefully push content above image details */}
          <div style={{ height: '50vh', minHeight: '400px' }} className="w-full pointer-events-none" />
        </div>
      </footer>

      {/* Payment Forms Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fadeIn">
          <div className="relative w-full max-w-2xl bg-[#111113] border border-[#24242a] text-[#a1a1aa] p-8 lg:p-12 shadow-2xl rounded-none max-h-[90vh] overflow-y-auto">
            
            <button 
              onClick={() => setIsModalOpen(false)}
              className="absolute top-6 right-6 text-[#666] hover:text-white transition-colors p-2 cursor-pointer"
            >
              <FaXmark size={20} />
            </button>

            <div className="mb-10">
              <h2 className="text-2xl font-semibold text-white mb-6 tracking-tight">Formas de pago</h2>
              <p className="mb-2">Aceptamos: Bre-B · PSE · Nequi · Mercado Pago · Tarjeta débito/crédito · Transferencia bancaria</p>
              <p className="mb-2">No aceptamos efectivo.</p>
              <p className="text-[#d7ff54]">Pagos con tarjeta o Mercado Pago: aplica una comisión del 5,3%.</p>
            </div>

            <div className="mb-10">
              <h3 className="text-lg font-medium text-white mb-4">Reserva</h3>
              <p className="mb-2">Para confirmar tu reserva debes realizar un anticipo del 50% y enviar el comprobante por WhatsApp.</p>
              <p className="mb-2">Saldo restante: se paga al finalizar la sesión.</p>
              <p className="font-semibold text-white">Importante: el anticipo no es reembolsable.</p>
            </div>

            <div>
              <h3 className="text-lg font-medium text-white mb-4">Políticas de reserva</h3>
              <p className="mb-6">Para garantizar una buena experiencia para todos:</p>

              <div className="space-y-6">
                <div>
                  <h4 className="text-white font-medium mb-1">Llegada</h4>
                  <p>Te recomendamos llegar 15 minutos antes. El tiempo de retraso se descuenta de la sesión.</p>
                </div>
                
                <div>
                  <h4 className="text-white font-medium mb-1">Reprogramaciones</h4>
                  <p className="mb-1">Puedes reprogramar o ceder tu reserva con mínimo 2 horas de anticipación.</p>
                  <p>La reserva puede reprogramarse una sola vez, con un plazo máximo de 30 días.</p>
                </div>

                <div>
                  <h4 className="text-white font-medium mb-1">Cancelaciones tardías / No show</h4>
                  <p>Si cancelas con menos de 2 horas de anticipación o no te presentas, pierdes la reserva y el anticipo.</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      )}
    </>
  )
}
