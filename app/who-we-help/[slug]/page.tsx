import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import { AUDIENCES } from '@/lib/data/audiences'
import { ServicePageTemplate, buildServiceMetadata } from '@/components/templates/ServicePageTemplate'

type Props = { params: Promise<{ slug: string }> }

// Only /who-we-help/{teens,adults,older-adults} exist; anything else is a 404.
export const dynamicParams = false

export function generateStaticParams() {
  return AUDIENCES.map((a) => ({ slug: a.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const audience = AUDIENCES.find((a) => a.slug === slug)
  if (!audience) return { title: 'Not Found' }
  return buildServiceMetadata(audience)
}

export default async function AudiencePage({ params }: Props) {
  const { slug } = await params
  const audience = AUDIENCES.find((a) => a.slug === slug)
  if (!audience) notFound()
  return <ServicePageTemplate c={audience} />
}
