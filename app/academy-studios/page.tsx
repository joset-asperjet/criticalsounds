import { team } from '@/lib/data/team'
import { courses } from '@/lib/data/courses'
import { CourseCard } from '@/components/sections/CourseCard'
import { AcademyHero } from '@/components/sections/AcademyHero'
import { ScrollRevealText } from '@/components/ui/ScrollRevealText'
import { TeamCard } from '@/components/sections/TeamCard'
import { LevelUpBoxAnimation } from '@/components/ui/LevelUpBoxAnimation'
import { ComboSwitchCard } from '@/components/sections/ComboSwitchCard'
import { PixelCardTrail } from '@/components/ui/PixelCardTrail'
import { EnclosingTextCircle } from '@/components/ui/EnclosingTextCircle'
import { FaWhatsapp } from 'react-icons/fa6'
import Link from 'next/link'

export default function AcademyStudiosPage() {
  return (
    <div className="flex flex-col min-h-screen bg-[#f5f3ef] text-[#0d0d0e]">
      {/* High-impact Sticky Parallax Video Hero */}
      <AcademyHero />

      {/* TEXTO ARRIBA CON EFECTO DE ESCLARECIMIENTO AL SCROLL (QUIÉNES SOMOS) */}
      <section id="quienes-somos" className="py-24 lg:py-32 px-8 lg:px-[8vw] scroll-mt-24">
        <div className="max-w-5xl">
          <ScrollRevealText />
        </div>
      </section>

      {/* EL TEAM */}
      <section className="py-24 px-8 lg:px-[8vw] bg-[#0d0d0e] text-white">
        <h2 className="text-[clamp(40px,5.7vw,82px)] leading-[0.92] font-light tracking-tight mb-12">
          El Team
        </h2>

        {/* Texto histórico y trayectoria abajo del título */}
        <div className="grid md:grid-cols-3 gap-8 mb-16 text-[#aaa] text-[15px] leading-relaxed">
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
      <section className="bg-[#0a0a0b] text-[#f5f3ef] py-16 sm:py-24 px-4 sm:px-8 lg:px-[8vw] overflow-hidden border-t border-b border-[#1f1f22]">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-[6vw] items-center">
          <div>
            <h2 className="text-[clamp(32px,5vw,56px)] lg:text-[clamp(44px,5.5vw,82px)] leading-[1.1] lg:leading-[0.92] font-light tracking-tight m-0 text-white whitespace-nowrap lg:whitespace-normal">
              Aprende. <br className="hidden lg:block" />
              <span className="text-[#a9eff1]">Practica.</span>{' '}
              <span className="text-[#d7ff54]">Evoluciona.</span>
            </h2>
            <div className="mt-8 space-y-4 text-[#aaa] text-[15px] sm:text-[16px] leading-relaxed max-w-xl">
              <p>
                En Critical Sounds Academy &amp; Studios creemos que aprender DJ no se trata solo de aprender a mezclar canciones. Se trata de desarrollar técnica, criterio musical, creatividad y una identidad propia frente a los decks.
              </p>
              <p>
                Por eso hemos creado diferentes rutas de formación para acompañarte desde tus primeros pasos hasta un nivel avanzado, siempre con práctica real y acompañamiento profesional.
              </p>
            </div>
          </div>
          <div className="w-full">
            <LevelUpBoxAnimation />
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-px bg-[#242428] mt-20 border border-[#242428]">
          {[
            ['Aprende', 'Fundamentos sólidos, ritmo, tonalidad y manejo de equipos Pioneer.', '#a9eff1'],
            ['Practica', 'Sesiones reales en cabinas profesionales, con feedback constante.', '#d7ff54'],
            ['Evoluciona', 'Construye tu identidad sonora y prepárate para cualquier escenario.', '#ffffff']
          ].map(([title, text, accentColor], i) => (
            <article
              key={title}
              className="bg-[#121215] p-8 pb-12 relative group hover:bg-[#18181d] transition-all duration-300 overflow-hidden"
            >
              <PixelCardTrail color={accentColor} />
              <div className="flex items-center justify-between relative z-20">
                <span className="text-[12px] font-mono tracking-widest text-[#777]">0{i + 1}</span>
                <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: accentColor }} />
              </div>
              <p className="max-w-[200px] text-[#9a9a9f] text-[14px] leading-relaxed relative z-20 mt-10">
                {text}
              </p>
            </article>
          ))}
        </div>
      </section>

      {/* Courses Preview Section */}
      <section id="cursos" className="bg-[#101011] text-[#f5f3ef] py-24 px-4 sm:px-8 lg:px-[8vw] scroll-mt-20">
        <div className="mb-20">
          <h2 className="text-[clamp(40px,5.7vw,82px)] leading-[0.92] font-light tracking-tight m-0">
            De cero a profesional.<br className="hidden sm:block" />
            <span className="text-[#d7ff54]">A tu ritmo, con equipos reales.</span>
          </h2>
          <div className="mt-8 max-w-4xl">
            <p className="text-[#ccc] text-[16px] sm:text-[17px] leading-relaxed mb-4">
              En Critical Sounds Academy &amp; Studios diseñamos nuestras rutas de formación para que puedas aprender DJ desde cero, desarrollar una técnica sólida y avanzar hacia un nivel profesional.
            </p>
            <p className="text-[#999] text-[15px] sm:text-[16px] leading-relaxed">
              Entrena con equipos Pioneer profesionales, aprende de instructores certificados y embajadores Pioneer y, sobre todo, lleva cada concepto directamente a la práctica.
            </p>
          </div>
        </div>

        {/* 1. Categoría: CURSOS DE CERO */}
        <div className="mb-20">
          <div className="mb-8 border-b border-[#242428] pb-4">
            <h3 className="text-[24px] md:text-[28px] font-light tracking-tight text-white uppercase">Cursos de Cero</h3>
            <p className="text-[#888] text-[14px] font-mono mt-1">Tres caminos para comenzar tu formación como DJ.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {courses.filter(c => c.category === 'cero').map(course => (
              <CourseCard key={course.id} course={course} />
            ))}
          </div>
        </div>

        {/* 2. Categoría: COMBOS DE CERO (con Toggle Switch) */}
        <div>
          <ComboSwitchCard combos={courses.filter(c => c.category === 'combo')} />
        </div>
      </section>



      {/* Final CTA */}
      <section className="bg-white text-[#0d0d0e] py-24 lg:py-32 px-8 lg:px-[8vw] relative overflow-hidden border-t border-[#e5e5e5]">
        <h2 className="text-[clamp(40px,6vw,90px)] font-light leading-[0.92] tracking-tight mb-10 z-10 relative text-[#0d0d0e]">
          El próximo track<br />
          <em className="not-italic text-[#666]">empieza contigo.</em>
        </h2>
        <a
          href={`https://wa.me/573226393861?text=${encodeURIComponent('Hola! Quiero hablar con un asesor sobre los cursos de Critical Sounds.')}`}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-3 rounded-full bg-transparent hover:bg-[#0d0d0e] text-[#0d0d0e] hover:text-white border-2 border-[#0d0d0e] px-8 py-4 text-[14px] font-medium tracking-wide transition-all duration-300 z-10 relative shadow-[0_4px_16px_rgba(0,0,0,0.06)] hover:shadow-[0_6px_24px_rgba(0,0,0,0.2)] group"
        >
          <FaWhatsapp className="text-[20px] transition-transform group-hover:scale-110" />
          <span>Hablar con un asesor</span>
        </a>

        <div className="absolute right-[10%] top-[30%] text-[120px] lg:text-[180px] text-black/[0.04] select-none z-0">
          ✦
        </div>
      </section>
    </div>
  )
}
