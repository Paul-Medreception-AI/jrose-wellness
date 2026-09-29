import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import { SERVICES } from '@/lib/data/services'
import { ServicePageTemplate, buildServiceMetadata } from '@/components/templates/ServicePageTemplate'

type Props = { params: Promise<{ slug: string }> }

// Only the five service slugs in lib/data/services.ts exist; anything else is a 404.
export const dynamicParams = false

export function generateStaticParams() {
  return SERVICES.map((x) => ({ slug: x.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const x = SERVICES.find((x) => x.slug === slug)
  if (!x) return {}
  return buildServiceMetadata(x)
}

export default async function Page({ params }: Props) {
  const { slug } = await params
  const x = SERVICES.find((x) => x.slug === slug)
  if (!x) notFound()
  return <ServicePageTemplate c={x} />
}
