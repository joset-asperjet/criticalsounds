'use client'

import Link from 'next/link'
import { Course } from '@/lib/data/courses'

export function CourseCard({ course }: { course: Course }) {
  return (
    <Link 
      href={`/cursos/${course.slug}`}
      className="group flex flex-col bg-[#1c1c1d] rounded-none overflow-hidden"
    >
      <div className="relative aspect-[16/10] sm:aspect-[16/9] w-full overflow-hidden bg-[#161618] rounded-none">
        {course.image && (
          <img 
            src={course.image} 
            alt={course.name}
            className="w-full h-full object-cover object-[center_35%] opacity-90"
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-[#1c1c1d] via-black/30 to-transparent z-10" />
        
        <span className="absolute top-4 left-4 z-20 text-white border border-white/80 bg-black/40 backdrop-blur-md px-3 py-1 rounded-full text-[10px] font-mono font-medium uppercase tracking-wider">
          {course.tag}
        </span>
      </div>
      
      <div className="p-6 flex flex-col flex-1">
        <p className="text-[#777] text-[10px] uppercase tracking-widest mb-4">
          {course.duration}
        </p>
        <h3 className="text-[30px] font-light tracking-tight mb-2 text-white">
          {course.name}
        </h3>
        <p className="text-[#999] text-[13px] leading-relaxed mb-6 flex-1">
          {course.description}
        </p>
        
        <div className="flex flex-col sm:flex-row sm:items-center justify-between pt-4 border-t border-[#333] gap-3">
          <div>
            <span className="text-[13px] font-mono font-light text-[#d4d4d8] tracking-wider">{course.price}</span>
          </div>
          <div className="flex flex-col sm:flex-row w-full sm:w-auto items-stretch sm:items-center gap-2">
            <span
              onClick={(e) => {
                e.preventDefault()
                e.stopPropagation()
                const msg = encodeURIComponent(`Hola! Quiero apartar mi cupo / espacio para el curso: ${course.name}`)
                window.open(`https://wa.me/573226393861?text=${msg}`, '_blank')
              }}
              className="inline-flex items-center justify-center text-[12px] font-mono font-medium text-white bg-transparent hover:bg-white hover:text-black border border-white px-3 py-1.5 rounded-full transition-all duration-300 cursor-pointer"
            >
              Quiero mi espacio
            </span>
            <span className="inline-flex items-center justify-center gap-1.5 text-[12px] font-mono font-medium text-white bg-transparent border border-white/40 px-3.5 py-1.5 rounded-full transition-all duration-300 group-hover:bg-white group-hover:text-black group-hover:border-white">
              Ver ruta →
            </span>
          </div>
        </div>
      </div>
    </Link>
  )
}
