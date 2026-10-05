import { courses } from '@/lib/data/courses'
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
              @keyframes meshShift {
                0% { background-position: 0% 50%; }
                50% { background-position: 100% 50%; }
                100% { background-position: 0% 50%; }
              }
              .animate-mesh-gradient {
                background-size: 250% 250%;
                animation: meshShift 6s ease infinite;
              }
            `}</style>
            {courses.map(c => {
              const isActive = c.slug === slug

              // Custom vivid animated mesh gradients tailored for each course
              const meshGradients: Record<string, string> = {
                'social-dj': 'radial-gradient(at 0% 0%, #00f2fe 0px, transparent 55%), radial-gradient(at 100% 0%, #4facfe 0px, transparent 50%), radial-gradient(at 100% 100%, #0052d4 0px, transparent 55%), radial-gradient(at 0% 100%, #43e97b 0px, transparent 55%), #051937',
                'club-dj': 'radial-gradient(at 0% 0%, #d7ff54 0px, transparent 55%), radial-gradient(at 100% 0%, #00f2fe 0px, transparent 50%), radial-gradient(at 100% 100%, #11998e 0px, transparent 55%), radial-gradient(at 0% 100%, #38ef7d 0px, transparent 55%), #092015',
                'vinyl-dj': 'radial-gradient(at 0% 0%, #c471ed 0px, transparent 55%), radial-gradient(at 100% 0%, #f64f59 0px, transparent 50%), radial-gradient(at 100% 100%, #12c2e9 0px, transparent 55%), radial-gradient(at 0% 100%, #7f00ff 0px, transparent 55%), #1a0826',
                'digital-dj': 'radial-gradient(at 0% 0%, #ff9900 0px, transparent 55%), radial-gradient(at 100% 0%, #ff5e36 0px, transparent 50%), radial-gradient(at 100% 100%, #f12711 0px, transparent 55%), radial-gradient(at 0% 100%, #f5af19 0px, transparent 55%), #2a1103',
                '360-dj': 'radial-gradient(at 0% 0%, #ff0844 0px, transparent 55%), radial-gradient(at 100% 0%, #ffb199 0px, transparent 50%), radial-gradient(at 100% 100%, #9055ff 0px, transparent 55%), radial-gradient(at 0% 100%, #ff4e50 0px, transparent 55%), #2e0821',
                'master-dj': 'radial-gradient(at 0% 0%, #3a7bd5 0px, transparent 55%), radial-gradient(at 100% 0%, #00d2ff 0px, transparent 50%), radial-gradient(at 100% 100%, #4a00e0 0px, transparent 55%), radial-gradient(at 0% 100%, #8e2de2 0px, transparent 55%), #0c1435',
                'master-efx-dj': 'radial-gradient(at 0% 0%, #ff0055 0px, transparent 55%), radial-gradient(at 100% 0%, #ff5252 0px, transparent 50%), radial-gradient(at 100% 100%, #d50000 0px, transparent 55%), radial-gradient(at 0% 100%, #ff7700 0px, transparent 55%), #30060e',
              }

              const bgMesh = meshGradients[c.slug] || meshGradients['social-dj']

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
                    {/* Animated Mesh Gradient Box for desktop only */}
                    <div 
                      className={`w-9 h-9 shrink-0 rounded-[6px] border border-white/20 shadow-md relative overflow-hidden animate-mesh-gradient transition-all duration-300 ${
                        isActive 
                          ? 'ring-2 ring-white/50 scale-105 shadow-[0_0_12px_rgba(255,255,255,0.25)]' 
                          : 'group-hover:scale-105 group-hover:border-white/40 opacity-90 group-hover:opacity-100'
                      }`}
                      style={{ backgroundImage: bgMesh }}
                    >
                      {/* Subtle glossy glass reflection overlay */}
                      <div className="absolute inset-0 bg-gradient-to-tr from-black/25 via-transparent to-white/35 pointer-events-none" />
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
                    <span className="text-[#d7ff54] text-[12px] font-mono">●</span>
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
                className="text-[#d7ff54] hover:underline font-mono text-[11px] block"
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
              {/* Courses Horizontal Breadcrumbs on Desktop (above Volver a Cursos) */}
              <div className="hidden lg:flex items-center gap-3 pb-6 mb-6 border-b border-[#222] overflow-x-auto whitespace-nowrap">
                <span className="text-[#666] text-[11px] font-mono uppercase tracking-widest font-semibold shrink-0">
                  Cursos:
                </span>
                <div className="flex flex-wrap items-center gap-2">
                  {courses.map(c => {
                    const isActive = c.slug === slug
                    return (
                      <Link 
                        key={c.slug} 
                        href={`/cursos/${c.slug}`}
                        className={`text-[12px] font-mono px-3 py-1 rounded-none border transition-all duration-200 ${
                          isActive 
                            ? 'bg-white text-[#0d0d0e] border-white font-semibold shadow-[0_0_15px_rgba(255,255,255,0.2)]' 
                            : 'text-[#888] border-[#292929] hover:text-white hover:border-[#444] bg-[#121215]'
                        }`}
                      >
                        {c.name}
                      </Link>
                    )
                  })}
                </div>
              </div>

              <Link href="/academy-studios#cursos" className="inline-flex items-center text-[#777] text-[12px] hover:text-white mb-8 uppercase tracking-widest font-mono">
                ← Volver a Cursos
              </Link>
          
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-start">
            {/* Left: Image & Equipment */}
            <div className="lg:col-span-5 flex flex-col gap-8">
              <div className="relative aspect-[16/10] w-full rounded-xl overflow-hidden border border-[#333] shadow-2xl bg-[#1a1a1b]">
                {course.image && (
                  <img 
                    src={course.image} 
                    alt={course.name}
                    className="w-full h-full object-cover object-[center_35%] opacity-90"
                  />
                )}
              </div>
              
              <div className="hidden lg:block">
                <h3 className="text-[18px] font-medium tracking-tight mb-4 text-[#a9eff1]">
                  Equipos principales
                </h3>
                <div className="flex flex-wrap gap-2">
                  {course.equipment.map((eq, i) => (
                    <span key={i} className="bg-[#1c1c1d] px-3 py-1.5 rounded-md text-[#ccc] text-[13px] border border-[#333]">
                      {eq}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Right: Info */}
            <div className="lg:col-span-7 flex flex-col">
              <div className="inline-block bg-white/10 text-white px-3 py-1 rounded-full text-[11px] uppercase tracking-widest mb-4 w-max">
                {course.tag}
              </div>
              
              <h1 className="text-[clamp(36px,4vw,60px)] leading-[1] font-light tracking-tight mb-2 text-white">
                {course.name}
              </h1>

              {course.subtitle && (
                <p className="text-[#d7ff54] text-[16px] sm:text-[18px] font-light mb-4">
                  {course.subtitle}
                </p>
              )}
              
              <p className="text-[#bbb] text-[15px] lg:text-[16px] leading-relaxed mb-8">
                {course.extendedDescription || course.description}
              </p>

              {/* ¿Qué aprenderás? - Niveles o Lista */}
              <div className="mb-8">
                <h3 className="text-[20px] font-medium tracking-tight mb-5 text-[#d7ff54]">
                  ¿Qué aprenderás?
                </h3>
                {course.syllabusLevels && course.syllabusLevels.length > 0 ? (
                  <div className="space-y-4">
                    {course.syllabusLevels.map((lvl, i) => (
                      <div key={i} className="bg-[#121215] border border-[#27272a] p-4.5">
                        <span className="text-white font-mono text-[13px] font-medium block mb-1">
                          {lvl.title}
                        </span>
                        <p className="text-[#aaa] text-[13px] leading-relaxed">
                          {lvl.topics}
                        </p>
                      </div>
                    ))}
                  </div>
                ) : (
                  <ul className="grid sm:grid-cols-2 gap-4">
                    {course.learning.map((item, i) => (
                      <li key={i} className="flex items-start gap-3 text-[#bbb] text-[14px] leading-relaxed">
                        <span className="text-white bg-[#222] w-5 h-5 rounded-full flex items-center justify-center text-[10px] mt-0.5 shrink-0">
                          {i + 1}
                        </span>
                        {item}
                      </li>
                    ))}
                  </ul>
                )}
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
                        <span className="text-[#d7ff54] text-[14px]">✓</span>
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

              <div className="flex flex-col sm:flex-row items-center gap-4">
                <a 
                  href={`https://wa.me/573226393861?text=${encodeURIComponent(`Hola! Quiero apartar mi cupo / espacio para el curso: ${course.name}`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto text-center rounded-full bg-[#d7ff54] text-[#0d0d0e] px-8 py-4 text-[14px] font-medium hover:bg-[#c5f03d] transition-colors"
                >
                  {course.ctaText || 'Quiero mi espacio'}
                </a>
                
                <div className="bg-[#174f55]/20 border border-[#174f55] px-4 py-3 rounded-lg flex-1 w-full">
                  <span className="text-[#a9eff1] text-[12px] font-bold block mb-1">BONUS VIP</span>
                  <p className="text-[#bbb] text-[12px] leading-snug">
                    15% OFF de por vida en todos los servicios de Critical Sounds al completar.
                  </p>
                </div>
              </div>

              <div className="mt-8 lg:hidden">
                <h3 className="text-[18px] font-medium tracking-tight mb-4 text-[#a9eff1]">
                  Equipos principales
                </h3>
                <div className="flex flex-wrap gap-2">
                  {course.equipment.map((eq, i) => (
                    <span key={i} className="bg-[#1c1c1d] px-3 py-1.5 rounded-md text-[#ccc] text-[13px] border border-[#333]">
                      {eq}
                    </span>
                  ))}
                </div>
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
            className="inline-flex rounded-full bg-white text-[#0d0d0e] px-8 py-4 text-[14px] font-medium hover:bg-white/90 transition-colors"
          >
            Hablar con un asesor
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
