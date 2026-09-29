import { courses } from '@/lib/data/courses'
import { CourseCard } from '@/components/sections/CourseCard'

export default function CursosPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <section className="bg-[#101011] py-24 px-8 lg:px-[8vw] border-b border-[#292929]">
        <div className="max-w-2xl">
          <h1 className="text-[clamp(40px,5.7vw,82px)] leading-[0.92] font-light tracking-tight mb-8">
            Nuestros <span className="text-[#a9eff1]">Cursos</span>
          </h1>
          <p className="text-[#999] text-[17px] leading-relaxed mb-8">
            Diseñamos nuestras rutas de formación para que puedas aprender DJ desde cero, desarrollar una técnica sólida y avanzar hacia un nivel profesional.
          </p>
          <p className="text-[#bbb] text-[15px] leading-relaxed">
            Entrena con equipos Pioneer profesionales, aprende de instructores certificados y embajadores Pioneer y lleva cada concepto a la práctica.
          </p>
        </div>
      </section>

      <section className="py-24 px-8 lg:px-[8vw] bg-[#0d0d0e]">
        <h2 className="text-[32px] font-light tracking-tight mb-12 border-b border-[#292929] pb-6">
          De Cero a Profesional
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-24">
          {courses.filter(c => c.level === 'Cero' && !c.tag.includes('Combo')).map(course => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>

        <h2 className="text-[32px] font-light tracking-tight mb-12 border-b border-[#292929] pb-6">
          Rutas Completas (Combos)
        </h2>
        <div className="grid md:grid-cols-2 gap-6 mb-24">
          {courses.filter(c => c.tag.includes('Combo') || c.tag.includes('ahorro')).map(course => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>

        <h2 className="text-[32px] font-light tracking-tight mb-12 border-b border-[#292929] pb-6">
          Masterclass
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          {courses.filter(c => c.level === 'Avanzado').map(course => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>
      </section>
    </div>
  )
}
