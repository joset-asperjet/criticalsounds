import { headers } from 'next/headers'
import PortalPageClient from '@/components/portal/PortalPageClient'
import AcademyStudiosPage from '@/app/academy-studios/page'

interface PageProps {
  searchParams?: Promise<{ [key: string]: string | string[] | undefined }>
}

export default async function Page({ searchParams }: PageProps) {
  const headersList = await headers()
  const host = headersList.get('host') || ''
  const resolvedParams = searchParams ? await searchParams : {}

  // Si entra desde el dominio de academy (o ?view=academy para pruebas)
  const isAcademy =
    host.includes('criticalsounds.academy') ||
    resolvedParams?.view === 'academy'

  if (isAcademy) {
    return <AcademyStudiosPage />
  }

  // Por defecto (ej. criticalsounds.co, www.criticalsounds.co o localhost), muestra el Portal principal
  return <PortalPageClient />
}
