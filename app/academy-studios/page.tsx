import { team } from '@/lib/data/team'
import { courses } from '@/lib/data/courses'
import { CourseCard } from '@/components/sections/CourseCard'
import { AcademyHero } from '@/components/sections/AcademyHero'
import { ScrollRevealText } from '@/components/ui/ScrollRevealText'
import { TeamCard } from '@/components/sections/TeamCard'
import FrostedTypeBand from '@/components/ui/FrostedTypeBand'
import Link from 'next/link'

export default function AcademyStudiosPage() {
  return (
    <div className="flex flex-col min-h-screen bg-[#f5f3ef] text-[#0d0d0e]">
      {/* High-impact Sticky Parallax Video Hero */}
      <AcademyHero />

      {/* TEXTO ARRIBA CON EFECTO DE ESCLARECIMIENTO AL SCROLL */}
      <section className="py-24 lg:py-32 px-8 lg:px-[8vw]">
        <div className="max-w-5xl">
          <ScrollRevealText />
        </div>
      </section>

      {/* EL TEAM */}
      <section className="py-24 px-8 lg:px-[8vw] bg-[#0d0d0e] text-white">
        <h2 className="text-[clamp(40px,5.7vw,82px)] leading-[0.92] font-light tracking-tight mb-12">
          Aprende de quienes<br />
          <span className="text-[#7c7d78]">siguen en la pista.</span>
        </h2>

        {/* Texto histórico y trayectoria abajo del título */}
        <div className="grid md:grid-cols-3 gap-8 mb-20 text-[#aaa] text-[15px] leading-relaxed border-b border-[#222] pb-16">
          <p>
            En estos 15 años de trayectoria, hemos tenido la fortuna de trabajar con los nombres más importantes del Trance, Techno, Melodic Techno, Progressive y PSY. Además de nuestro impresionante book de artistas soportado por nuestra marca Critical Artist.
          </p>
          <p>
            En 2021 cambia de nombre, reorganiza y se convierte en lo que hoy es Critical Sounds; operando exclusivamente desde Colombia con Steve Dekay como A&R. Hoy en día somos una plataforma 360 para artistas de música electrónica.
          </p>
          <p>
            Actualmente Critical Sounds cuenta con un catálogo con más de 1650 singles y más de 600 lanzamientos. Hemos creado nuestra academia de DJ, Critical Academy, y nuestros estudios con equipos de última generación para grabación y producción.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 items-stretch">
          {team.map((member) => (
            <TeamCard key={member.id} member={member} />
          ))}
        </div>
      </section>

      {/* Method Section */}
      <section className="bg-[#e7ff9b] text-[#0d0d0e] py-24 px-8 lg:px-[8vw] overflow-hidden">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-[6vw] items-center">
          <h2 className="text-[clamp(40px,5.7vw,82px)] leading-[0.92] font-light tracking-tight m-0 text-black">
            Aprende.<br />
            <span className="text-black">Practica. Evoluciona.</span>
          </h2>
          <div className="w-full h-[220px] md:h-[260px] lg:h-[280px] relative overflow-hidden rounded-2xl">
            <FrostedTypeBand
              textColor="#0d0d0e"
              items={[
                { text: "APRENDE" },
                { text: "PRACTICA" },
                { text: "EVOLUCIONA" },
                { text: "CRITICAL" },
              ]}
              speed={75}
              tilt={-4}
              gap={70}
              glass={{
                blur: 30,
                tint: "rgba(231, 255, 155, 0.35)",
                refraction: 45,
                grain: 0
              }}
            />
          </div>
        </div>
        
        <div className="grid md:grid-cols-3 gap-px bg-[#a4ba68] mt-20">
          {[
            ['Aprende', 'Fundamentos sólidos, ritmo, tonalidad y manejo de equipos Pioneer.'],
            ['Practica', 'Sesiones reales en cabinas profesionales, con feedback constante.'],
            ['Evoluciona', 'Construye tu identidad sonora y prepárate para cualquier escenario.']
          ].map(([title, text], i) => (
            <article key={title} className="bg-[#e7ff9b] border-t border-[#819d42] p-6 pb-10 relative group hover:bg-[#d4f57c] transition-colors">
              <span className="text-[11px] text-[#65734a]">0{i + 1}</span>
              <h3 className="text-[35px] font-light tracking-tight mt-12 mb-4">{title}</h3>
              <p className="max-w-[210px] text-[#536039] text-[14px] leading-relaxed">{text}</p>
              <i className="absolute right-6 bottom-8 text-[25px] not-italic group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform">↗</i>
            </article>
          ))}
        </div>
      </section>

      {/* Courses Preview Section */}
      <section className="bg-[#101011] text-[#f5f3ef] py-24 px-8 lg:px-[8vw]">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-[8vw] mb-16">
          <h2 className="text-[clamp(40px,5.7vw,82px)] leading-[0.92] font-light tracking-tight m-0">
            Encuentra tu<br />
            <span className="text-[#d7ff54]">frecuencia.</span>
          </h2>
          <p className="text-[#999] text-[17px] leading-snug max-w-[360px]">
            Rutas de formación para todos los niveles. Entrena con equipos Pioneer profesionales, instructores certificados y práctica real.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {courses.slice(0, 3).map(course => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>
        
        <div className="mt-12 flex justify-center">
          <Link href="/cursos" className="rounded-full border border-[#666] text-white px-6 py-4 text-[13px] hover:bg-white/5 transition-colors">
            Ver todos los programas →
          </Link>
        </div>
      </section>
      
      {/* Cabins Preview */}
      <section className="bg-[#1a1a1b] text-[#f5f3ef] py-24 px-8 lg:px-[8vw] grid lg:grid-cols-2 gap-12 lg:gap-[8vw] items-center">
        <div className="relative h-[300px] lg:h-[440px] bg-[radial-gradient(circle_at_50%_35%,#395f61_0%,#151a1b_45%,#090909_100%)] border border-[#333] overflow-hidden">
          <div className="absolute w-[420px] h-[420px] rounded-full border border-[#d7ff5438] left-[13%] top-[15%] shadow-[0_0_50px_#d7ff5419]" />
          <div className="absolute left-[20%] top-[36%] w-[60%] h-[180px] bg-[#222d2d] border-[10px] border-[#374848] shadow-[0_12px_40px_#000] text-[#87ffff] p-6 text-[15px] [transform:perspective(200px)_rotateX(12deg)]">
            PIONEER<br />
            <b className="text-[#d7ff54] text-[24px]">CRITICAL</b>
          </div>
        </div>
        <div>
          <h2 className="text-[clamp(40px,5.7vw,82px)] leading-[0.92] font-light tracking-tight mb-6">
            Equipos de verdad.<br />
            <span className="text-[#a9eff1]">Práctica de verdad.</span>
          </h2>
          <p className="text-[#999] text-[15px] leading-relaxed max-w-[490px] mb-8">
            Entrena con configuraciones Pioneer profesionales: XDJ-XZ, CDJ-3000, DJM-A9, DJM-V10, RMX-1000 y más. La misma cabina que encontrarás en los mejores clubs.
          </p>
          <Link href="/cabinas" className="inline-block rounded-full border border-[#666] text-white px-6 py-4 text-[13px] hover:bg-white/5 transition-colors">
            Reservar sala →
          </Link>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-[#a9eff1] text-[#0d0d0e] py-24 lg:py-32 px-8 lg:px-[8vw] relative overflow-hidden">
        <h2 className="text-[clamp(40px,6vw,90px)] font-light leading-[0.92] tracking-tight mb-10 z-10 relative">
          El próximo track<br />
          <em className="not-italic text-[#347c80]">empieza contigo.</em>
        </h2>
        <Link href="/cursos" className="inline-flex rounded-full bg-[#0d0d0e] text-white px-8 py-4 text-[13px] font-medium hover:opacity-90 transition-opacity z-10 relative items-center group">
          Elegir mi curso
          <b className="text-[19px] ml-4 font-normal group-hover:translate-x-1 transition-transform">→</b>
        </Link>
        
        <div className="absolute right-[10%] top-[30%] text-[120px] lg:text-[180px] text-white/30 select-none z-0">
          ✦
        </div>
      </section>
    </div>
  )
}
