'use client'

import { useState } from 'react'
import { Video, X, ChevronRight } from 'lucide-react'

export function FloatingRecordSessionModal() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      {/* Trigger Button - Floating at bottom right, directly above WhatsApp */}
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-24 right-6 z-50 flex items-center gap-3 bg-[#18181b] hover:bg-[#222226] text-white border border-[#333] hover:border-[#d7ff54]/50 px-4 py-3 rounded-none shadow-[0_8px_30px_rgba(0,0,0,0.6)] hover:shadow-[0_10px_35px_rgba(215,255,84,0.15)] transition-all duration-300 group focus:outline-none focus:ring-2 focus:ring-[#d7ff54]"
        aria-label="Graba tu sesión"
      >
        <span className="relative flex h-3 w-3">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#ff4d4d] opacity-75"></span>
          <span className="relative inline-flex rounded-full h-3 w-3 bg-[#ff4d4d]"></span>
        </span>
        <span className="text-[12.5px] font-medium tracking-wide">Graba tu sesión</span>
        <ChevronRight className="w-4 h-4 text-[#d7ff54] transition-transform duration-300 group-hover:translate-x-0.5" />
      </button>

      {/* Slide-over Drawer / Modal from Right */}
      {isOpen && (
        <div className="fixed inset-0 z-[110] flex justify-end">
          {/* Backdrop Overlay */}
          <div
            onClick={() => setIsOpen(false)}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm transition-opacity animate-fadeIn"
          />

          {/* Sliding Panel */}
          <div className="relative z-10 w-full max-w-md bg-[#121214] border-l border-[#26262a] text-[#f5f3ef] p-6 sm:p-8 flex flex-col justify-between shadow-2xl animate-slideLeft rounded-none">
            <div>
              {/* Header */}
              <div className="flex items-center justify-between pb-6 border-b border-[#26262a] mb-6">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-none bg-[#ff4d4d]/10 border border-[#ff4d4d]/30 flex items-center justify-center text-[#ff4d4d]">
                    <Video className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[#d7ff54] text-[11px] font-mono uppercase tracking-widest block">
                      Servicio Adicional
                    </span>
                    <h3 className="text-[22px] font-light text-white tracking-tight m-0">
                      Graba tu sesión
                    </h3>
                  </div>
                </div>

                <button
                  onClick={() => setIsOpen(false)}
                  className="w-9 h-9 rounded-none bg-[#1e1e22] hover:bg-white text-white hover:text-black flex items-center justify-center transition-colors"
                  aria-label="Cerrar modal"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Description */}
              <p className="text-[#aaa] text-[14.5px] leading-relaxed mb-8">
                Convierte tu práctica en contenido. Nuestras cabinas cuentan con un sistema de grabación multicámara que te permite registrar tu sesión mientras practicas (Streaming en vivo disponible).
              </p>

              {/* Pricing Cards */}
              <div className="space-y-3 mb-8">
                <div className="p-4 bg-[#1a1a1e] border border-[#2a2a30] rounded-none flex items-center justify-between">
                  <div>
                    <p className="text-white text-[14px] font-medium m-0">Video 2.7K a 60 fps</p>
                    <p className="text-[#888] text-[12px] font-mono m-0">Grabación multicámara HD</p>
                  </div>
                  <span className="text-[#d7ff54] font-mono text-[14px] font-semibold">
                    +$110.000/h
                  </span>
                </div>

                <div className="p-4 bg-[#1a1a1e] border border-[#2a2a30] rounded-none flex items-center justify-between">
                  <div>
                    <p className="text-white text-[14px] font-medium m-0">Video 4K a 60 fps</p>
                    <p className="text-[#888] text-[12px] font-mono m-0">Máxima resolución & detalle</p>
                  </div>
                  <span className="text-[#a9eff1] font-mono text-[14px] font-semibold">
                    +$190.000/h
                  </span>
                </div>

                <div className="p-4 bg-[#1a1a1e] border border-[#2a2a30] rounded-none flex items-center justify-between">
                  <div>
                    <p className="text-white text-[14px] font-medium m-0">Sesiones B2B (Dos DJs)</p>
                    <p className="text-[#888] text-[12px] font-mono m-0">Cabina compartida</p>
                  </div>
                  <span className="text-[#fde047] font-mono text-[14px] font-semibold">
                    +$10.000/h
                  </span>
                </div>
              </div>
            </div>

            {/* CTA WhatsApp Button */}
            <div className="pt-4 border-t border-[#26262a]">
              <a
                href={`https://wa.me/573226393861?text=${encodeURIComponent('Hola! Quiero solicitar la grabación de mi sesión de práctica.')}`}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsOpen(false)}
                className="w-full group inline-flex items-center justify-center gap-2 rounded-none bg-[#d7ff54] text-[#0d0d0e] hover:bg-white px-6 py-4 text-[14px] font-semibold transition-colors shadow-lg"
              >
                <span>Solicitar Grabación por WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
