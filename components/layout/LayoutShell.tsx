'use client'

import { usePathname } from 'next/navigation'
import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'
import { FloatingWhatsAppButton } from '@/components/ui/FloatingWhatsAppButton'

export function LayoutShell({
  children,
  isAcademyDomain = false,
}: {
  children: React.ReactNode
  isAcademyDomain?: boolean
}) {
  const pathname = usePathname()
  // Si estamos en criticalsounds.academy, "/" es la academia (debe mostrar Navbar y Footer).
  // Solo se ocultan Navbar y Footer si NO estamos en academy y estamos en la raíz "/" (es decir, el Portal de 4 divisiones).
  const isPortalHome = !isAcademyDomain && pathname === '/'

  return (
    <>
      {!isPortalHome && <Navbar />}
      <main className={`min-h-screen ${!isPortalHome ? 'pt-[82px]' : ''}`}>
        {children}
      </main>
      {!isPortalHome && <Footer />}
      {!isPortalHome && <FloatingWhatsAppButton />}
    </>
  )
}
