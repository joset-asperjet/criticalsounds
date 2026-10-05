'use client'

import { usePathname } from 'next/navigation'
import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'
import { FloatingWhatsAppButton } from '@/components/ui/FloatingWhatsAppButton'

export function LayoutShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()
  const isPortalHome = pathname === '/'

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
