export default function GaleriaPage() {
  return (
    <div className="flex flex-col min-h-screen bg-[#0d0d0e] text-[#f5f3ef]">
      <section className="py-24 px-8 lg:px-[8vw] border-b border-[#292929]">
        <div className="max-w-2xl">
          <h1 className="text-[clamp(40px,5.7vw,82px)] leading-[0.92] font-light tracking-tight mb-8">
            Nuestra <span className="text-[#a9eff1]">Esencia</span>
          </h1>
          <p className="text-[#999] text-[17px] leading-relaxed mb-8">
            Conoce nuestras instalaciones, cabinas, estudios y vive la experiencia de Critical Sounds a través de nuestra galería audiovisual.
          </p>
        </div>
      </section>

      <section className="py-24 px-8 lg:px-[8vw]">
        <div className="grid md:grid-cols-2 gap-16">
          <a 
            href="https://drive.google.com/drive/folders/10wfGNrEX2P-9lEFA_EXpJCz3gwQqaAlO" 
            target="_blank" 
            rel="noopener noreferrer"
            className="group block bg-[#1c1c1d] border border-[#333] p-12 hover:bg-[#252526] transition-colors"
          >
            <h2 className="text-[32px] font-light text-white mb-4 flex items-center justify-between">
              Fotos <span className="text-[#d7ff54] group-hover:translate-x-2 transition-transform">→</span>
            </h2>
            <p className="text-[#999]">
              Explora nuestra galería de fotos con imágenes de alta calidad de nuestras cabinas, eventos y masterclasses.
            </p>
          </a>
          
          <a 
            href="https://www.youtube.com/@CriticalSounds" 
            target="_blank" 
            rel="noopener noreferrer"
            className="group block bg-[#1c1c1d] border border-[#333] p-12 hover:bg-[#252526] transition-colors"
          >
            <h2 className="text-[32px] font-light text-white mb-4 flex items-center justify-between">
              YouTube <span className="text-[#a9eff1] group-hover:translate-x-2 transition-transform">→</span>
            </h2>
            <p className="text-[#999]">
              Visita nuestro canal oficial para ver sesiones en vivo, tutoriales, entrevistas y todo el contenido de Critical Sounds.
            </p>
          </a>
        </div>
      </section>
    </div>
  )
}
