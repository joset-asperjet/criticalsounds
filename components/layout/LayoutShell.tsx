'use client'

import { usePathname } from 'next/navigation'
import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'

export function LayoutShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()
  const isPortalHome = pathname === '/'

  return (
    <>
      {!isPortalHome && <Navbar />}
      <main className="min-h-screen">
        {children}
      </main>
      {!isPortalHome && <Footer />}
    </>
  )
}
