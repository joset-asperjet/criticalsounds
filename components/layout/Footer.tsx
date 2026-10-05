import Link from 'next/link'
import Image from 'next/image'
import { FaInstagram, FaYoutube, FaTiktok, FaFacebookF } from 'react-icons/fa6'

export function Footer() {
  return (
    <footer className="border-t border-[#292929] bg-[#0d0d0e] text-[#888]">
      {/* Top Footer Section: Location & Google Map */}
      <div className="px-6 py-12 lg:px-12 lg:py-16 border-b border-[#1f1f22]">
        <div className="grid lg:grid-cols-12 gap-8 items-center">
          {/* Sede Info */}
          <div className="lg:col-span-5 flex flex-col justify-center">
            <span className="text-[#a9eff1] text-[11px] font-mono tracking-widest uppercase block mb-2">
              Sede Principal
            </span>
            <h3 className="text-[26px] md:text-[32px] font-light tracking-tight text-white mb-4">
              Medellín, Colombia
            </h3>
            <p className="text-[#999] text-[14px] leading-relaxed mb-4">
              Halcones de San Diego, Cra. 33 #29-105, Medellín, Antioquia (Sótano 4).
            </p>
            <p className="text-[#777] text-[13px] leading-relaxed mb-6">
              Nuestras instalaciones cuentan con cabinas insonorizadas equipadas con la más alta gama de Pioneer DJ y estudio de grabación profesional.
            </p>
            <div>
              <a
                href="https://maps.google.com/?q=Cra.+33+%2329-105,+Medell%C3%ADn,+Antioquia"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-[12px] font-mono text-[#d7ff54] hover:text-[#c5f03d] transition-colors"
              >
                <span>Abrir en Google Maps</span>
                <span>↗</span>
              </a>
            </div>
          </div>

          {/* Map Embed */}
          <div className="lg:col-span-7 w-full h-[220px] sm:h-[260px] rounded-none overflow-hidden border border-[#27272a] shadow-lg">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.196014298188!2d-75.5683933!3d6.2378873!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e44284d7cb27993%3A0xc3fec3f638aeb3d1!2sCra.%2033%20%2329-105%2C%20Buenos%20Aires%2C%20Medell%C3%ADn%2C%20Antioquia!5e0!3m2!1ses!2sco!4v1700000000000!5m2!1ses!2sco"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>

      {/* Bottom Bar: Brand & Social Links */}
      <div className="px-6 py-8 lg:px-12 flex flex-col lg:flex-row items-start lg:items-center justify-between text-[11px] gap-6">
        <Link href="/academy-studios" className="hover:opacity-85 transition-opacity">
          <Image
            src="/multimedia/images/logo-and-svg/critical-sounds-logo.png"
            alt="Critical Sounds"
            width={150}
            height={40}
            className="h-8 md:h-9 w-auto object-contain"
          />
        </Link>
        
        <p>© {new Date().getFullYear()} Critical Sounds · Academy &amp; Studios</p>
        
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2.5">
            <a
              href="https://www.instagram.com/criticalsoundsstudios/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram de Critical Sounds"
              className="w-9 h-9 flex items-center justify-center rounded-none bg-[#161619] hover:bg-white text-[#aaa] hover:text-[#0d0d0e] border border-[#27272a] hover:border-white transition-all duration-300"
            >
              <FaInstagram className="text-[15px]" />
            </a>
            <a
              href="https://www.youtube.com/@CriticalSounds"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="YouTube de Critical Sounds"
              className="w-9 h-9 flex items-center justify-center rounded-none bg-[#161619] hover:bg-white text-[#aaa] hover:text-[#0d0d0e] border border-[#27272a] hover:border-white transition-all duration-300"
            >
              <FaYoutube className="text-[15px]" />
            </a>
            <a
              href="https://www.tiktok.com/@critical.sounds"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="TikTok de Critical Sounds"
              className="w-9 h-9 flex items-center justify-center rounded-none bg-[#161619] hover:bg-white text-[#aaa] hover:text-[#0d0d0e] border border-[#27272a] hover:border-white transition-all duration-300"
            >
              <FaTiktok className="text-[14px]" />
            </a>
            <a
              href="https://www.facebook.com/criticalsoundsstudios"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook de Critical Sounds"
              className="w-9 h-9 flex items-center justify-center rounded-none bg-[#161619] hover:bg-white text-[#aaa] hover:text-[#0d0d0e] border border-[#27272a] hover:border-white transition-all duration-300"
            >
              <FaFacebookF className="text-[14px]" />
            </a>
          </div>

          <div className="w-[1px] h-4 bg-[#27272a] mx-1" />

          <Link href="/politicas" className="hover:text-white transition-colors text-[11px] font-mono">
            Políticas
          </Link>
        </div>
      </div>
    </footer>
  )
}
