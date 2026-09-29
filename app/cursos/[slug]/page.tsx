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
      <section className="py-24 px-8 lg:px-[8vw] border-b border-[#292929] relative overflow-hidden">
        {/* Background Tone */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full blur-[150px] opacity-20 pointer-events-none" 
             style={{ backgroundColor: course.tone === 'cyan' ? '#a9eff1' : course.tone === 'lime' ? '#d7ff54' : course.tone === 'violet' ? '#b4a2ff' : '#80b7ff' }} />
        
        <div className="relative z-10 max-w-3xl">
          <Link href="/cursos" className="inline-flex items-center text-[#777] text-[12px] hover:text-white mb-12 uppercase tracking-widest">
            ← Volver a Cursos
          </Link>
          
          <div className="inline-block bg-white/10 text-white px-3 py-1 rounded-full text-[11px] uppercase tracking-widest mb-6">
            {course.tag}
          </div>
          
          <h1 className="text-[clamp(50px,6vw,90px)] leading-[0.9] font-light tracking-tight mb-8 text-white">
            {course.name}
          </h1>
          
          <p className="text-[#bbb] text-[18px] leading-relaxed mb-12 max-w-2xl">
            {course.description}
          </p>
          
          <div className="flex flex-wrap items-end gap-8 border-t border-[#333] pt-8">
            <div>
              <p className="text-[#777] text-[11px] uppercase tracking-widest mb-1">Inversión</p>
              <div className="flex items-center gap-4">
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
            <button className="rounded-full bg-white text-[#0d0d0e] px-8 py-4 text-[14px] font-medium hover:bg-white/90 transition-colors ml-auto">
              Quiero inscribirme
            </button>
          </div>
        </div>
      </section>

      <section className="py-24 px-8 lg:px-[8vw] grid md:grid-cols-2 gap-16 lg:gap-[8vw]">
        <div>
          <h2 className="text-[32px] font-light tracking-tight mb-8 border-b border-[#292929] pb-4 text-[#d7ff54]">
            ¿Qué aprenderás?
          </h2>
          <ul className="space-y-6">
            {course.learning.map((item, i) => (
              <li key={i} className="flex items-start gap-4 text-[#bbb] text-[16px]">
                <span className="text-white bg-[#222] w-6 h-6 rounded-full flex items-center justify-center text-[10px] mt-0.5 shrink-0">
                  {i + 1}
                </span>
                {item}
              </li>
            ))}
          </ul>
        </div>
        
        <div>
          <h2 className="text-[32px] font-light tracking-tight mb-8 border-b border-[#292929] pb-4 text-[#a9eff1]">
            Equipos principales
          </h2>
          <div className="grid grid-cols-2 gap-4">
            {course.equipment.map((eq, i) => (
              <div key={i} className="bg-[#1c1c1d] p-4 rounded text-[#ccc] text-[14px] border border-[#333]">
                {eq}
              </div>
            ))}
          </div>
          
          <div className="mt-12 bg-[#174f55]/20 border border-[#174f55] p-6 rounded">
            <h3 className="text-[#a9eff1] text-[16px] mb-2 font-bold">BONUS VIP</h3>
            <p className="text-[#bbb] text-[14px]">
              15% de descuento de por vida en todos los servicios de Critical Sounds al completar este curso.
            </p>
          </div>
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
