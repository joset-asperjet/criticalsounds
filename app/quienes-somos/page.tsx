import { team } from '@/lib/data/team'
import { ScrollRevealText } from '@/components/ui/ScrollRevealText'
import { TeamCard } from '@/components/sections/TeamCard'

export default function QuienesSomosPage() {
  return (
    <div className="flex flex-col min-h-screen bg-[#f5f3ef] text-[#0d0d0e]">
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
    </div>
  )
}
