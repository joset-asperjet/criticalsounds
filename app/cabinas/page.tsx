import { cabins } from '@/lib/data/cabins'
import Link from 'next/link'

export default function CabinasPage() {
  return (
    <div className="flex flex-col min-h-screen bg-[#1a1a1b] text-[#f5f3ef]">
      <section className="py-24 px-8 lg:px-[8vw] border-b border-[#292929]">
        <div className="max-w-2xl">
          <h1 className="text-[clamp(40px,5.7vw,82px)] leading-[0.92] font-light tracking-tight mb-8">
            Salas de <span className="text-[#d7ff54]">Práctica DJ</span>
          </h1>
          <p className="text-[#999] text-[17px] leading-relaxed mb-8">
            Practica como si estuvieras en una cabina profesional. Tienes acceso a cabinas DJ profesionales diseñadas para entrenar, preparar tus sets y llevar tu performance al siguiente nivel.
          </p>
          <p className="text-[#bbb] text-[15px] leading-relaxed">
            Todas nuestras salas cuentan con grabación multicámara 4K, audio y video Full HD, tratamiento acústico, aire acondicionado, iluminación RGB y más.
          </p>
        </div>
      </section>

      <section className="py-24 px-8 lg:px-[8vw] bg-[#101011]">
        <div className="grid lg:grid-cols-3 gap-8">
          {cabins.map(cabin => (
            <div key={cabin.id} className="bg-[#1c1c1d] rounded-sm overflow-hidden flex flex-col hover:bg-[#252526] transition-colors shadow-xl">
              <div className="p-8 border-b border-[#333]">
                <h3 className="text-[28px] font-light tracking-tight text-white mb-2">{cabin.name}</h3>
                <p className="text-[#999] text-[14px] leading-relaxed">{cabin.subtitle}</p>
              </div>
              
              <div className="p-8 flex-1">
                <h4 className="text-[12px] uppercase tracking-widest text-[#d7ff54] mb-4">Setup Incluido</h4>
                <ul className="space-y-2 mb-8">
                  {cabin.setup.map((item, i) => (
                    <li key={i} className="text-[#bbb] text-[13px] flex items-start gap-2">
                      <span className="text-[#d7ff54] mt-0.5">•</span>
                      {item}
                    </li>
                  ))}
                </ul>

                <h4 className="text-[12px] uppercase tracking-widest text-[#a9eff1] mb-4">Tarifas / hora</h4>
                <div className="space-y-4 mb-8">
                  {cabin.prices.map((price, i) => (
                    <div key={i} className="flex flex-col text-[13px] border-b border-[#333] pb-2 last:border-0">
                      <span className="text-white mb-1">{price.schedule}</span>
                      <div className="flex justify-between text-[#888]">
                        <span>Práctica: <span className="text-[#d7ff54]">{price.practica}</span></span>
                        <span>Full: <span className="text-[#a9eff1]">{price.audioVideo}</span></span>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="space-y-1 mb-8 p-4 bg-[#0d0d0e] rounded text-[11px] text-[#aaa]">
                  {cabin.discounts.map((discount, i) => (
                    <p key={i}>{discount}</p>
                  ))}
                </div>
                
                <button className="w-full rounded-full border border-[#d7ff54] text-[#d7ff54] px-6 py-4 text-[13px] hover:bg-[#d7ff54] hover:text-[#0d0d0e] transition-colors">
                  Reservar {cabin.name}
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="py-24 px-8 lg:px-[8vw] bg-[#0d0d0e] border-t border-[#292929]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-[40px] font-light mb-6">Graba tu sesión</h2>
          <p className="text-[#999] mb-12 max-w-2xl mx-auto">
            Convierte tu práctica en contenido. Nuestras cabinas cuentan con un sistema de grabación multicámara que te permite registrar tu sesión mientras practicas (Streaming en vivo disponible).
          </p>
          <div className="flex flex-col items-center gap-4 text-[#bbb] text-[14px]">
            <p>Video 2.7K a 60 fps → <b>+$110.000/h</b></p>
            <p>Video 4K a 60 fps → <b>+$190.000/h</b></p>
            <p>Sesiones B2B (Dos DJs) → <b>+$10.000/h</b></p>
          </div>
        </div>
      </section>
    </div>
  )
}
