import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import { CONDITIONS } from '@/lib/data/conditions'
import { ConditionPageTemplate, buildConditionMetadata } from '@/components/templates/ConditionPageTemplate'

type Props = { params: Promise<{ slug: string }> }

export function generateStaticParams() {
  return CONDITIONS.map((x) => ({ slug: x.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const x = CONDITIONS.find((x) => x.slug === slug)
  if (!x) return { title: 'Not Found' }
  return buildConditionMetadata(x)
}

export default async function Page({ params }: Props) {
  const { slug } = await params
  const x = CONDITIONS.find((x) => x.slug === slug)
  if (!x) notFound()
  return <ConditionPageTemplate c={x} />
}
