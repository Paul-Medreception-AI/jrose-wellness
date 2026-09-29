import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import { CONDITIONS, getCondition } from '@/lib/data/conditions'
import { ConditionPageTemplate, buildConditionMetadata } from '@/components/templates/ConditionPageTemplate'

type Props = { params: Promise<{ slug: string }> }

// Only the nine condition pages exist; any other slug is a 404 (old slugs are redirected).
export const dynamicParams = false

export function generateStaticParams() {
  return CONDITIONS.map((x) => ({ slug: x.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const x = getCondition(slug)
  if (!x) return {}
  return buildConditionMetadata(x)
}

export default async function Page({ params }: Props) {
  const { slug } = await params
  const x = getCondition(slug)
  if (!x) notFound()
  return <ConditionPageTemplate c={x} />
}
