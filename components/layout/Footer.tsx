import Link from 'next/link'
import Image from 'next/image'

export function Footer() {
  return (
    <footer className="border-t border-[#292929] px-6 py-10 lg:px-12 lg:py-12 flex flex-col lg:flex-row items-start lg:items-center justify-between text-[11px] text-[#888] gap-6 bg-[#0d0d0e]">
      <Link href="/academy-studios" className="hover:opacity-85 transition-opacity">
        <Image
          src="/multimedia/images/logo-and-svg/critical-sounds-logo.png"
          alt="Critical Sounds"
          width={150}
          height={40}
          className="h-8 md:h-9 w-auto object-contain"
        />
      </Link>
      
      <p>Academy & Studios · Medellín, Colombia</p>
      
      <div className="flex flex-wrap gap-6">
        <a href="https://www.instagram.com/criticalsoundsstudios/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Instagram</a>
        <a href="https://www.youtube.com/@CriticalSounds" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">YouTube</a>
        <a href="https://www.tiktok.com/@critical.sounds" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">TikTok</a>
        <a href="https://www.facebook.com/criticalsoundsstudios" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Facebook</a>
        <Link href="/politicas" className="hover:text-white transition-colors">Políticas</Link>
      </div>
    </footer>
  )
}
