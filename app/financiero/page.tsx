export default function FinancieroPage() {
  return (
    <div className="flex flex-col min-h-screen bg-[#0d0d0e] text-[#f5f3ef]">
      <section className="py-24 px-8 lg:px-[8vw]">
        <div className="text-[10px] tracking-widest uppercase text-[#777] mb-12">FINANCIERO</div>
        <div className="max-w-2xl">
          <h1 className="text-[clamp(40px,5.7vw,82px)] leading-[0.92] font-light tracking-tight mb-8">
            Opciones de <span className="text-[#d7ff54]">Financiación</span>
          </h1>
          <p className="text-[#999] text-[17px] leading-relaxed mb-8">
            No dejes que el dinero sea un impedimento para tu carrera musical. Conoce nuestras opciones de financiación con Sistecrédito.
          </p>
        </div>
        
        <div className="mt-16 bg-[#1c1c1d] border border-[#333] p-12 max-w-3xl rounded-sm">
          <h2 className="text-[28px] font-light text-white mb-6">Financiación con Sistecrédito</h2>
          <p className="text-[#bbb] mb-8 leading-relaxed">
            Financia cualquiera de nuestros cursos, desde Social DJ hasta la ruta completa de DJ Digital & Vinyl. 
            El proceso es 100% digital, rápido y sin papeleos.
          </p>
          <ul className="space-y-4 text-[#999] mb-8">
            <li className="flex gap-3 items-center"><span className="text-[#d7ff54]">✓</span> Aprobación en minutos.</li>
            <li className="flex gap-3 items-center"><span className="text-[#d7ff54]">✓</span> Paga a cuotas cómodas.</li>
            <li className="flex gap-3 items-center"><span className="text-[#d7ff54]">✓</span> Sin tarjeta de crédito.</li>
          </ul>
          <a href="https://wa.me/573226393861" target="_blank" rel="noopener noreferrer" className="inline-block rounded-full bg-[#d7ff54] text-[#0d0d0e] px-8 py-4 font-medium hover:bg-white transition-colors">
            Solicitar estudio de crédito
          </a>
        </div>
      </section>
    </div>
  )
}
