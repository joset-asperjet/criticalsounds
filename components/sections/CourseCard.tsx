import Link from 'next/link'
import { Course } from '@/lib/data/courses'

export function CourseCard({ course }: { course: Course }) {
  const toneColors = {
    cyan: 'border-[#a9eff1] shadow-[#a9eff1]/20',
    lime: 'border-[#d7ff54] shadow-[#d7ff54]/20',
    violet: 'border-[#b4a2ff] shadow-[#b4a2ff]/20',
    orange: 'border-[#ff9d59] shadow-[#ff9d59]/20',
    pink: 'border-[#fa9ebc] shadow-[#fa9ebc]/20',
    blue: 'border-[#80b7ff] shadow-[#80b7ff]/20',
    red: 'border-[#ff7b68] shadow-[#ff7b68]/20',
  }

  const toneBg = {
    cyan: 'bg-[#4a5531]', // Just using the original tailwind specific bg or fallback
    lime: 'bg-[#4a5531]',
    violet: 'bg-[#433b67]',
    orange: 'bg-[#77451d]',
    pink: 'bg-[#733f52]',
    blue: 'bg-[#274e70]',
    red: 'bg-[#71352f]',
  }

  return (
    <Link 
      href={`/cursos/${course.slug}`}
      className="group flex flex-col bg-[#1c1c1d] rounded-sm overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:bg-[#252526] hover:shadow-2xl"
    >
      <div className={`relative h-[170px] overflow-hidden ${toneBg[course.tone as keyof typeof toneBg] || 'bg-[#26353a]'}`}>
        <div className="absolute inset-0 bg-gradient-to-br from-transparent to-black/60 z-10" />
        <span className="absolute top-4 left-4 z-20 text-[#111] bg-[#d7ff54] px-2.5 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-wider">
          {course.tag}
        </span>
        <span className="absolute bottom-3 right-4 z-20 text-white/50 text-[42px] font-light">
          {course.id}
        </span>
        
        {/* Decorative waves */}
        <div className="absolute top-8 left-[35%] w-[210px] h-[210px] rounded-full border-[20px] border-[#a9eff1] opacity-75 shadow-[0_0_0_18px_#a9eff122,0_0_0_37px_#a9eff111]" />
        <div className="absolute top-0 left-[10%] w-[75px] h-[75px] rounded-full border-[20px] border-[#d7ff54] opacity-75" />
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
        
        <div className="flex items-end justify-between pt-4 border-t border-[#333]">
          <div>
            <strong className="text-[16px] font-normal text-white">{course.price}</strong>
            {course.oldPrice && (
              <del className="block text-[#666] text-[11px] mt-1">{course.oldPrice}</del>
            )}
          </div>
          <span className="text-[#d7ff54] text-[24px] group-hover:translate-x-1 transition-transform">
            →
          </span>
        </div>
      </div>
    </Link>
  )
}
