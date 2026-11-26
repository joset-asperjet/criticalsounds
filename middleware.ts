import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  const host = request.headers.get('host') || ''
  const { pathname } = request.nextUrl

  // Si entra a /academy en cualquier dominio, redirigir a https://criticalsounds.academy/
  if (pathname === '/academy') {
    return NextResponse.redirect(new URL('https://criticalsounds.academy/', request.url), 308)
  }

  // Si está en el dominio academy y entra directamente a /academy-studios, llevar a la raíz limpia /
  if (host.includes('criticalsounds.academy') && pathname === '/academy-studios') {
    return NextResponse.redirect(new URL('/', request.url), 308)
  }

  return NextResponse.next()
}

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|multimedia|favicon.ico|sitemap.xml|robots.txt).*)'],
}
