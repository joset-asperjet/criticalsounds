'use client'

import React, { useState, useEffect } from 'react'
import Image from 'next/image'

export function FloatingWhatsAppButton() {
  const [showMascot, setShowMascot] = useState(false)
  const [showBubble, setShowBubble] = useState(false)
  const [isBouncing, setIsBouncing] = useState(false)
  const [bubbleDismissed, setBubbleDismissed] = useState(false)

  useEffect(() => {
    // Tras 10 segundos, se intercambia por la mascota, sale el globo "¿Necesitas ayuda?" y vibra 3 veces
    const timer = setTimeout(() => {
      setShowMascot(true)
      setShowBubble(true)
      setIsBouncing(true)
    }, 10000)

    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="fixed bottom-6 right-6 z-50 flex items-center select-none">
      {/* Speech bubble: ¿Necesitas ayuda? */}
      {showMascot && showBubble && !bubbleDismissed && (
        <div className="absolute right-[calc(100%+14px)] flex items-center animate-bubble-pop">
          <a
            href="https://wa.me/573226393861"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Contactar para ayuda por WhatsApp"
            className="relative flex items-center gap-2.5 px-3.5 py-2 sm:py-2.5 rounded-2xl bg-[#121215]/95 backdrop-blur-md border border-[#25D366]/45 shadow-[0_10px_32px_rgba(0,0,0,0.65),0_0_20px_rgba(37,211,102,0.2)] text-white whitespace-nowrap cursor-pointer hover:border-[#25D366]/80 hover:shadow-[0_12px_36px_rgba(0,0,0,0.7),0_0_25px_rgba(37,211,102,0.35)] transition-all group"
          >
            <span className="w-2 h-2 rounded-full bg-[#25D366] shadow-[0_0_8px_#25D366] animate-pulse shrink-0" />
            <span className="text-xs sm:text-sm font-semibold tracking-wide text-white group-hover:text-[#d7ff54] transition-colors">
              ¿Necesitas ayuda?
            </span>

            {/* Botón de cierre para descartar el globo de texto */}
            <button
              type="button"
              onClick={(e) => {
                e.preventDefault()
                e.stopPropagation()
                setBubbleDismissed(true)
              }}
              aria-label="Cerrar mensaje"
              className="ml-1 p-0.5 text-neutral-400 hover:text-white rounded-full hover:bg-white/10 transition-colors"
            >
              <svg
                className="w-3.5 h-3.5"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </button>

            {/* Flecha indicadora apuntando al personaje */}
            <div className="absolute -right-1.5 top-1/2 -translate-y-1/2 w-3 h-3 rotate-45 bg-[#121215] border-t border-r border-[#25D366]/45" />
          </a>
        </div>
      )}

      {/* Botón Flotante: WhatsApp clásico primeros 10s, luego la Mascota */}
      <a
        href="https://wa.me/573226393861"
        target="_blank"
        rel="noopener noreferrer"
        aria-label={showMascot ? 'Asistente Critical Sounds - WhatsApp' : 'Contactar por WhatsApp'}
        onAnimationEnd={() => setIsBouncing(false)}
        className={`relative flex items-center justify-center transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-[#25D366]/40 ${
          showMascot
            ? `w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-[radial-gradient(circle_at_center,_rgba(37,211,102,0.25)_0%,_rgba(15,15,18,0.98)_75%)] border-2 border-[#25D366] shadow-[0_4px_24px_rgba(37,211,102,0.45)] hover:shadow-[0_6px_32px_rgba(37,211,102,0.65)] hover:scale-110 active:scale-95 ${
                isBouncing ? 'animate-mascot-bouncy' : ''
              }`
            : 'w-14 h-14 bg-[#25D366] hover:bg-[#20bd5a] text-white rounded-full shadow-[0_4px_24px_rgba(37,211,102,0.45)] hover:shadow-[0_6px_30px_rgba(37,211,102,0.6)] hover:scale-110 active:scale-95'
        }`}
      >
        {showMascot ? (
          <>
            {/* Contenedor circular con bordes redondeados y personaje bajado para que se vea su cabeza */}
            <div className="relative w-full h-full rounded-full overflow-hidden flex items-center justify-center pointer-events-none">
              <Image
                src="/multimedia/images/critical-academy/mascot.png"
                alt="Critical Mascot"
                width={74}
                height={74}
                className="w-[112%] h-[112%] max-w-none object-contain translate-y-[5px] select-none drop-shadow-[0_2px_8px_rgba(0,0,0,0.85)]"
                priority
              />
            </div>

            {/* Insignia mini de WhatsApp en la esquina inferior */}
            <div className="absolute -bottom-0.5 -right-0.5 w-5 h-5 bg-[#25D366] text-white rounded-full border-2 border-[#0d0d0e] flex items-center justify-center shadow-md">
              <svg viewBox="0 0 24 24" width="11" height="11" fill="currentColor">
                <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981z" />
              </svg>
            </div>
          </>
        ) : (
          /* Ícono original SVG de WhatsApp durante los primeros 10s */
          <svg
            viewBox="0 0 24 24"
            width="30"
            height="30"
            fill="currentColor"
            className="relative z-10 transition-transform duration-300 hover:scale-105"
          >
            <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
          </svg>
        )}
      </a>
    </div>
  )
}
