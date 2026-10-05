import { courses } from '@/lib/data/courses'
import { EquipmentGallery } from '@/components/ui/EquipmentGallery'
import { CourseAccordion } from '@/components/ui/CourseAccordion'
import { notFound } from 'next/navigation'
import Link from 'next/link'

export default async function CourseDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const course = courses.find(c => c.slug === slug)

  if (!course) {
    notFound()
  }

  return (
    <div className="flex flex-col min-h-screen bg-[#0d0d0e] text-[#f5f3ef]">


      {/* Main Two-Column Layout (Left Sidebar on Desktop + Content Area) */}
      <div className="flex-1 flex flex-col lg:flex-row items-stretch">
        {/* Left Sticky Sidebar for Courses on Desktop */}
        <aside className="hidden lg:flex w-[290px] xl:w-[320px] shrink-0 border-r border-[#242428] bg-[#09090b] flex-col p-6 sticky top-[82px] h-[calc(100vh-82px)] overflow-y-auto">
          <div className="mb-6 pb-4 border-b border-[#222]">
            <Link 
              href="/academy-studios#cursos" 
              className="inline-flex items-center gap-1.5 text-[11px] font-mono uppercase tracking-widest text-[#777] hover:text-white transition-colors"
            >
              <span>←</span>
              <span>Volver a Academy</span>
            </Link>
            <h2 className="text-[13px] font-mono uppercase tracking-wider text-white mt-4 font-semibold">
              Rutas &amp; Cursos DJ
            </h2>
            <p className="text-[12px] text-[#666] mt-1 font-mono">
              Selecciona para ver detalles
            </p>
          </div>

          {/* Navigation Links for All 7 Courses */}
          <nav className="flex flex-col gap-1.5 flex-1">
            <style>{`
              @keyframes meshBlobA {
                0%   { transform: translate(-30%, -30%) scale(1); }
                33%  { transform: translate(40%, -10%) scale(1.25); }
                66%  { transform: translate(10%, 45%) scale(0.9); }
                100% { transform: translate(-30%, -30%) scale(1); }
              }
              @keyframes meshBlobB {
                0%   { transform: translate(45%, 40%) scale(1.1); }
                33%  { transform: translate(-35%, 30%) scale(0.85); }
                66%  { transform: translate(-10%, -40%) scale(1.3); }
                100% { transform: translate(45%, 40%) scale(1.1); }
              }
              @keyframes meshBlobC {
                0%   { transform: translate(40%, -40%) scale(0.9); }
                33%  { transform: translate(20%, 45%) scale(1.2); }
                66%  { transform: translate(-40%, 0%) scale(1); }
                100% { transform: translate(40%, -40%) scale(0.9); }
              }
              .mesh-blob {
                position: absolute;
                inset: 0;
                width: 100%;
                height: 100%;
                border-radius: 9999px;
                filter: blur(7px);
                mix-blend-mode: screen;
                will-change: transform;
              }
              .mesh-blob-a { animation: meshBlobA 6s ease-in-out infinite; }
              .mesh-blob-b { animation: meshBlobB 7.5s ease-in-out infinite; }
              .mesh-blob-c { animation: meshBlobC 9s ease-in-out infinite; }
              .group:hover .mesh-blob { animation-duration: 3s; }
            `}</style>
            {courses.map(c => {
              const isActive = c.slug === slug

              // Harmonious palettes per course: [base, blobA, blobB, blobC]
              const meshPalettes: Record<string, [string, string, string, string]> = {
                'social-dj':     ['#04182b', '#00e0ff', '#2563eb', '#10b981'], // cyan / azul / esmeralda
                'club-dj':       ['#0a1a0c', '#d7ff54', '#22c55e', '#06b6d4'], // lima / verde / turquesa
                'vinyl-dj':      ['#1a0726', '#d946ef', '#7c3aed', '#f472b6'], // orquídea / violeta / rosa
                'digital-dj':    ['#220c02', '#fbbf24', '#f97316', '#ef4444'], // ámbar / naranja / rojo
                '360-dj':        ['#260611', '#fb7185', '#a855f7', '#f59e0b'], // coral / púrpura / dorado
                'master-dj':     ['#070f2b', '#38bdf8', '#6366f1', '#a78bfa'], // zafiro / índigo / lavanda
                'master-efx-dj': ['#240508', '#ff1f5a', '#ff7a00', '#c026d3'], // carmesí / fuego / magenta
              }

              const [base, colA, colB, colC] = meshPalettes[c.slug] || meshPalettes['social-dj']

              return (
                <Link
                  key={c.slug}
                  href={`/cursos/${c.slug}`}
                  className={`group relative flex items-center justify-between px-3 py-2.5 rounded-none border text-[13px] transition-all duration-200 ${
                    isActive
                      ? 'bg-white/10 text-white border-white/40 shadow-[0_0_15px_rgba(255,255,255,0.06)]'
                      : 'text-[#888] border-transparent hover:text-white hover:bg-white/[0.04] hover:border-[#27272a]'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    {/* Animated mesh gradient: square, no border, blurred color blobs drifting */}
                    <div 
                      className={`w-9 h-9 shrink-0 rounded-none relative overflow-hidden transition-all duration-300 ${
                        isActive 
                          ? 'scale-105' 
                          : 'opacity-90 group-hover:opacity-100 group-hover:scale-105'
                      }`}
                      style={{ backgroundColor: base }}
                    >
                      <span className="mesh-blob mesh-blob-a" style={{ backgroundColor: colA }} />
                      <span className="mesh-blob mesh-blob-b" style={{ backgroundColor: colB }} />
                      <span className="mesh-blob mesh-blob-c" style={{ backgroundColor: colC }} />
                    </div>

                    <div className="flex flex-col">
                      <span className={`font-medium ${isActive ? 'text-white' : 'text-[#aaa] group-hover:text-white'}`}>
                        {c.name}
                      </span>
                      <span className="text-[11px] font-mono text-[#666]">
                        {c.duration}
                      </span>
                    </div>
                  </div>

                  {isActive ? (
                    <span className="text-[#a9eff1] text-[12px] font-mono">●</span>
                  ) : (
                    <span className="text-[#444] group-hover:text-[#888] text-[14px] transition-transform group-hover:translate-x-0.5">→</span>
                  )}
                </Link>
              )
            })}
          </nav>

          {/* Sidebar Footer Help Box */}
          <div className="pt-6 mt-6 border-t border-[#222]">
            <div className="bg-[#121215] border border-[#27272a] p-4 text-[12px]">
              <span className="text-[#a9eff1] font-mono uppercase text-[11px] block mb-1 font-semibold">
                ¿Dudas sobre tu nivel?
              </span>
              <p className="text-[#888] text-[12px] leading-relaxed mb-3">
                Habla con nuestros profesores para audicionar tu nivel actual.
              </p>
              <a
                href="https://wa.me/573226393861?text=Hola!%20Quisiera%20asesoria%20para%20elegir%20mi%20curso%20de%20DJ"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#a9eff1] hover:underline font-mono text-[11px] block"
              >
                Asesoría WhatsApp →
              </a>
            </div>
          </div>
        </aside>

        {/* Right Content Area */}
        <div className="flex-1 flex flex-col min-w-0">
          <section className="py-12 md:py-20 px-6 sm:px-8 lg:px-12 border-b border-[#292929] relative overflow-hidden">
            {/* Background Tone */}
            <div 
              className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full blur-[140px] opacity-20 pointer-events-none" 
              style={{ backgroundColor: course.tone === 'cyan' ? '#a9eff1' : course.tone === 'lime' ? '#d7ff54' : course.tone === 'violet' ? '#b4a2ff' : '#80b7ff' }} 
            />
            
            <div className="relative z-10">
              <div className="flex flex-wrap lg:hidden items-center gap-2 pb-5 mb-6 border-b border-[#222] w-full">
                <span className="text-[#666] text-[10.5px] font-mono uppercase tracking-widest font-semibold shrink-0 mr-1 w-full basis-full mb-1">
                  Explorar cursos:
                </span>
                {courses.map(c => {
                  const isActive = c.slug === slug
                  return (
                    <Link 
                      key={c.slug} 
                      href={`/cursos/${c.slug}`}
                      className={`text-[11.5px] font-mono px-3.5 py-1.5 rounded-full border transition-all duration-200 inline-flex items-center justify-center ${
                        isActive 
                          ? 'bg-white !text-black border-white font-bold shadow-[0_0_12px_rgba(255,255,255,0.4)]' 
                          : 'text-[#888] border-[#292929] hover:text-white hover:border-[#444] bg-[#121215]'
                      }`}
                    >
                      <span className={isActive ? '!text-black font-semibold' : ''}>
                        {c.name}
                      </span>
                    </Link>
                  )
                })}
              </div>

              <Link href="/academy-studios#cursos" className="inline-flex items-center text-[#777] text-[12px] hover:text-white mb-8 uppercase tracking-widest font-mono">
                ← Volver a Cursos
              </Link>
          
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-start">
            {/* Left: Image & Equipment */}
            <div className="lg:col-span-5 flex flex-col gap-8 min-w-0">
              <div className="relative aspect-[16/10] w-full rounded-none overflow-hidden border border-[#333] shadow-2xl bg-[#1a1a1b]">
                {course.image && (
                  <img 
                    src={course.image} 
                    alt={course.name}
                    className="w-full h-full object-cover object-[center_35%] opacity-90 rounded-none"
                  />
                )}
              </div>
              
              <div className="hidden lg:block">
                <EquipmentGallery
                  equipment={course.equipment}
                  title="Equipos de cabina incluidos"
                  titleClassName="text-[16px] font-medium tracking-tight text-[#a9eff1] mb-3 block"
                  cardWidth="w-[110px]"
                  cardHeight="h-[100px]"
                />
              </div>
            </div>

            {/* Right: Info */}
            <div className="lg:col-span-7 flex flex-col min-w-0">
              <div className="inline-block bg-white/10 text-white px-3 py-1 rounded-none text-[11px] uppercase tracking-widest mb-4 w-max border border-white/20">
                {course.tag}
              </div>
              
              <h1 className="text-[clamp(36px,4vw,60px)] leading-[1] font-light tracking-tight mb-2 text-white">
                {course.name}
              </h1>

              {course.subtitle && (
                <p className="text-[#a9eff1] text-[16px] sm:text-[18px] font-light mb-4">
                  {course.subtitle}
                </p>
              )}
              
              <p className="text-[#bbb] text-[15px] lg:text-[16px] leading-relaxed mb-8">
                {course.extendedDescription || course.description}
              </p>

              {/* ¿Qué aprenderás? - Acordeón Colapsable por Niveles */}
              <div className="mb-8">
                <h3 className="text-[20px] font-medium tracking-tight mb-4 text-[#a9eff1]">
                  ¿Qué aprenderás?
                </h3>
                <CourseAccordion levels={course.syllabusLevels} />
              </div>

              {/* Al finalizar podrás: */}
              {course.outcomes && course.outcomes.length > 0 && (
                <div className="mb-8 pt-6 border-t border-[#292929]">
                  <h3 className="text-[17px] font-medium tracking-tight mb-4 text-[#a9eff1]">
                    Al finalizar podrás:
                  </h3>
                  <div className="grid sm:grid-cols-2 gap-3">
                    {course.outcomes.map((outcome, idx) => (
                      <div key={idx} className="flex items-center gap-2.5 text-[#ccc] text-[13px]">
                        <span className="text-white text-[14px]">✓</span>
                        <span>{outcome}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
              
              <div className="flex flex-wrap items-end gap-6 border-t border-[#333] pt-6 mb-8">
                <div>
                  <p className="text-[#777] text-[11px] uppercase tracking-widest mb-1">Inversión</p>
                  <div className="flex items-center gap-3">
                    <strong className="text-[32px] font-normal text-white">{course.price}</strong>
                    {course.oldPrice && (
                      <del className="text-[#666] text-[16px]">{course.oldPrice}</del>
                    )}
                  </div>
                </div>
                <div>
                  <p className="text-[#777] text-[11px] uppercase tracking-widest mb-1">Duración</p>
                  <span className="text-[20px] text-white">{course.duration}</span>
                </div>
                {course.modality && (
                  <div>
                    <p className="text-[#777] text-[11px] uppercase tracking-widest mb-1">Modalidad</p>
                    <span className="text-[13px] text-[#aaa] font-mono">{course.modality}</span>
                  </div>
                )}
              </div>

              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                <a 
                  href={`https://wa.me/573226393861?text=${encodeURIComponent(`Hola! Quiero apartar mi cupo / espacio para el curso: ${course.name}`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group w-full sm:w-auto text-center rounded-full bg-transparent border-2 border-white px-8 py-3.5 text-[14px] font-semibold hover:bg-white transition-colors duration-200 shrink-0 flex items-center justify-center"
                >
                  <span className="text-white group-hover:text-black transition-colors duration-200">
                    {course.ctaText || 'Quiero mi espacio'}
                  </span>
                </a>
                
                {/* Coupon / Voucher style box with white dotted border */}
                <div className="relative border-2 border-dashed border-[#fde047]/50 hover:border-[#fde047]/80 bg-[#121215] px-4 py-3 rounded-none flex items-center justify-center gap-2.5 transition-colors flex-1 min-w-0">
                  {/* Ticket / Coupon SVG Icon */}
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    viewBox="0 0 24 24" 
                    fill="none" 
                    stroke="currentColor" 
                    strokeWidth="1.75" 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    className="w-4 h-4 text-[#fde047] shrink-0"
                  >
                    <path d="M2 9a3 3 0 0 1 0 6v2a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-2a3 3 0 0 1 0-6V7a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z" />
                    <path d="M13 5v2" />
                    <path d="M13 11v2" />
                    <path d="M13 17v2" />
                  </svg>

                  <p className="text-[#e4e4e7] text-[12px] font-mono leading-snug m-0">
                    <strong className="text-[#fde047] font-semibold">15% OFF de por vida</strong> en todos los servicios Critical Sounds
                  </p>
                </div>
              </div>

              <div className="mt-8 lg:hidden min-w-0 w-full overflow-hidden">
                <EquipmentGallery
                  equipment={course.equipment}
                  title="Equipos de cabina incluidos"
                  titleClassName="text-[16px] font-medium tracking-tight text-[#a9eff1] mb-3 block"
                  cardWidth="w-[100px]"
                  cardHeight="h-[94px]"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>

      {/* Clases Personalizadas CTA */}
      <section className="py-24 px-8 lg:px-[8vw] bg-[#121215] border-t border-[#292929]">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-block bg-white/10 text-white px-3 py-1 rounded-full text-[11px] uppercase tracking-widest mb-6">
            A tu medida
          </div>
          <h2 className="text-[clamp(32px,4vw,56px)] leading-[1] font-light tracking-tight mb-6 text-white">
            Clases <span className="text-[#a9eff1]">Personalizadas</span>
          </h2>
          <p className="text-[#999] text-[16px] leading-relaxed mb-10">
            Un entrenamiento diseñado alrededor de ti. Trabaja específicamente en los aspectos que quieres mejorar, con contenidos y metodología adaptados a tus objetivos y nivel.
          </p>
          <a 
            href="https://wa.me/573226393861?text=Hola!%20Me%20interesan%20las%20Clases%20Personalizadas"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex rounded-full bg-transparent border-2 border-white px-8 py-4 text-[14px] font-semibold hover:bg-white transition-colors duration-200"
          >
            <span className="text-white group-hover:text-black transition-colors duration-200">
              Hablar con un asesor
            </span>
          </a>
        </div>
      </section>
    </div>
  )
}

export function generateStaticParams() {
  return courses.map((course) => ({
    slug: course.slug,
  }))
}
