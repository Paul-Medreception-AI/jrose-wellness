import Link from 'next/link'
import type { Metadata } from 'next'
import { Fragment, type ReactNode } from 'react'
import { NAV_CTA, SITE_NAME, withBrand } from '@/lib/site'
import { imageFor } from '@/lib/images'
import PageHero from '@/components/site/PageHero'
import Container from '@/components/site/Container'
import SectionHeading from '@/components/site/SectionHeading'
import CrisisNotice from '@/components/site/CrisisNotice'
import FaqList from '@/components/site/FaqList'
import BookingOptions from '@/components/site/BookingOptions'
import CtaBand from '@/components/site/CtaBand'
import { ArrowRight, CheckIcon } from '@/components/site/icons'

export type FAQ = { q: string; a: string }
export type RelatedLink = { href: string; label: string; eyebrow?: string; body?: string }
export type IconCard = { title: string; body: string; iconPath?: string }
export type MediaVideo = { videoId: string; title: string }

/**
 * Content for a service, condition or audience (/who-we-help/*) page. The required core is kept
 * from the autobuild schema so existing data files still type-check; everything else is optional
 * and a section only renders when its data is present.
 *
 * Notes for content authors:
 * - headline is the H1; title is the short name used in breadcrumbs and "Common questions about".
 * - heroImage defaults to imageFor(`${hubHref}/${slug}`) from lib/images.ts.
 * - crisis: true adds the CRISIS notice near the top (required on depression, bipolar, PTSD,
 *   schizophrenia/psychosis and substance-use pages).
 * - stats is accepted for backwards compatibility but never rendered (no statistics on this site).
 */
export type ServicePageContent = {
  slug: string
  siteUrl: string
  siteName: string
  ctaLabel: string
  ctaHref: string
  hubLabel: string
  hubHref: string
  badge?: string
  title: string
  headline: string
  description: string
  bullets: string[]
  benefits: { title: string; body: string }[]
  stats?: { stat: string; label: string }[]
  faqs?: FAQ[]
  relatedLinks?: RelatedLink[]
  metaTitle?: string
  heroEyebrow?: string
  heroSubhead?: string
  heroImage?: { src: string; alt: string }
  featuredVideo?: { videoId: string; title: string; heading?: string; subhead?: string }
  introHeading?: string
  intro?: string[]
  signsHeading?: string
  signsList?: string[]
  bulletsHeading?: string
  approachHeading?: string
  approachSubhead?: string
  approach?: IconCard[]
  premiumHeading?: string
  premiumIntro?: string
  premiumOptions?: { title: string; body: string }[]
  benefitsHeading?: string
  timelineHeading?: string
  timeline?: { title: string; body: string }[]
  extraSections?: { heading: string; body: string[] }[]
  videoLibraryHeading?: string
  videoLibrarySubhead?: string
  videoLibrary?: MediaVideo[]
  crisis?: boolean
  faqHeading?: string
  relatedHeading?: string
  ctaHeading?: string
  ctaBody?: string
}

const pagePath = (c: ServicePageContent) => `${c.hubHref}/${c.slug}`

export function buildServiceMetadata(c: ServicePageContent): Metadata {
  // metaTitle may arrive pre-branded ("X | JRose Wellness"); strip any "| ..." suffix and brand once.
  const base = (c.metaTitle ?? '').replace(/\s*\|.*$/, '').trim() || c.title
  const title = withBrand(base)
  const path = pagePath(c)
  const img = c.heroImage ?? imageFor(path)
  return {
    title,
    description: c.description,
    alternates: { canonical: path },
    openGraph: {
      title,
      description: c.description,
      url: path,
      siteName: SITE_NAME,
      type: 'website',
      images: [{ url: img.src, alt: img.alt }],
    },
    twitter: { card: 'summary_large_image', title, description: c.description, images: [img.src] },
  }
}

// Server-component YouTube embed. No related videos, captions off by default.
function Video({ videoId, title }: { videoId: string; title: string }) {
  const src = 'https://www.youtube-nocookie.com/embed/' + videoId + '?rel=0&cc_load_policy=0&iv_load_policy=3'
  return (
    <div className="relative aspect-video w-full overflow-hidden rounded-2xl bg-black shadow-lg">
      <iframe
        className="absolute inset-0 h-full w-full"
        src={src}
        title={title}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
        loading="lazy"
      />
    </div>
  )
}

const DEFAULT_ICON =
  'M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z'

type Tone = 'cream' | 'white'
const SECTION_BG: Record<Tone, string> = { cream: 'bg-cream', white: 'bg-white' }
// Cards sit on the opposite surface so they always read as cards.
const CARD_BG: Record<Tone, string> = { cream: 'bg-white', white: 'bg-cream' }

const has = <T,>(a?: T[] | null): a is T[] => Array.isArray(a) && a.length > 0

function Section({ tone, children, className = '' }: { tone: Tone; children: ReactNode; className?: string }) {
  return <section className={`${SECTION_BG[tone]} py-16 sm:py-20 ${className}`}>{children}</section>
}

export function ServicePageTemplate({ c }: { c: ServicePageContent }) {
  const path = pagePath(c)
  const image = c.heroImage ?? imageFor(path)

  // Each optional block renders only when it has data; backgrounds alternate cream/white over
  // whatever is present so two sections of the same color never touch.
  const blocks: { key: string; render: (tone: Tone) => ReactNode }[] = []

  if (has(c.intro) || has(c.signsList)) {
    blocks.push({
      key: 'intro',
      render: (tone) => (
        <Section tone={tone}>
          <Container>
            <div className={has(c.intro) && has(c.signsList) ? 'grid items-start gap-10 lg:grid-cols-12 lg:gap-14' : 'max-w-3xl'}>
              {has(c.intro) && (
                <div className="lg:col-span-7">
                  {c.introHeading && <SectionHeading title={c.introHeading} />}
                  <div className={`space-y-5 text-lg leading-relaxed text-ink/85 ${c.introHeading ? 'mt-6' : ''}`}>
                    {c.intro.map((p, i) => (
                      <p key={i}>{p}</p>
                    ))}
                  </div>
                  {c.crisis && (
                    <div className="mt-8">
                      <CrisisNotice />
                    </div>
                  )}
                </div>
              )}
              {has(c.signsList) && (
                <aside
                  className={`rounded-3xl border border-border ${CARD_BG[tone]} p-6 shadow-[0_12px_32px_-18px_rgba(46,15,19,0.25)] sm:p-8 lg:sticky lg:top-28 lg:col-span-5`}
                >
                  <h2 className="font-cormorant text-[1.75rem] font-semibold leading-tight text-primary">
                    {c.signsHeading ?? 'Signs to look for'}
                  </h2>
                  <ul className="mt-5 space-y-3.5">
                    {c.signsList.map((s, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <span className="mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-full bg-light text-accent">
                          <CheckIcon className="h-3.5 w-3.5" />
                        </span>
                        <span className="leading-relaxed text-ink/85">{s}</span>
                      </li>
                    ))}
                  </ul>
                </aside>
              )}
            </div>
            {c.crisis && !has(c.intro) && (
              <div className="mt-8 max-w-3xl">
                <CrisisNotice />
              </div>
            )}
          </Container>
        </Section>
      ),
    })
  } else if (c.crisis) {
    blocks.push({
      key: 'crisis',
      render: (tone) => (
        <Section tone={tone} className="!py-10">
          <Container size="medium">
            <CrisisNotice />
          </Container>
        </Section>
      ),
    })
  }

  if (c.featuredVideo) {
    const v = c.featuredVideo
    blocks.push({
      key: 'video',
      render: (tone) => (
        <Section tone={tone}>
          <Container size="medium">
            {v.heading && <SectionHeading title={v.heading} intro={v.subhead} align="center" />}
            <div className="mt-10">
              <Video videoId={v.videoId} title={v.title} />
            </div>
          </Container>
        </Section>
      ),
    })
  }

  if (has(c.bullets)) {
    blocks.push({
      key: 'bullets',
      render: (tone) => (
        <Section tone={tone}>
          <Container size="medium">
            <SectionHeading title={c.bulletsHeading ?? 'What to expect'} align="center" />
            <ul className="mx-auto mt-10 grid max-w-4xl gap-4 sm:grid-cols-2">
              {c.bullets.map((b, i) => (
                <li key={i} className={`flex items-start gap-3 rounded-2xl border border-border ${CARD_BG[tone]} p-5`}>
                  <span className="mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-full bg-light text-accent">
                    <CheckIcon className="h-3.5 w-3.5" />
                  </span>
                  <span className="leading-relaxed text-ink/85">{b}</span>
                </li>
              ))}
            </ul>
          </Container>
        </Section>
      ),
    })
  }

  if (has(c.approach)) {
    const n = c.approach.length
    const cols = n === 2 || n === 4 ? 'md:grid-cols-2' : 'md:grid-cols-2 lg:grid-cols-3'
    blocks.push({
      key: 'approach',
      render: (tone) => (
        <Section tone={tone}>
          <Container>
            {c.approachHeading && <SectionHeading title={c.approachHeading} intro={c.approachSubhead} align="center" />}
            <div className={`mt-12 grid gap-6 ${cols}`}>
              {c.approach.map((card, i) => (
                <div key={i} className={`animate-fade-up rounded-3xl border border-border ${CARD_BG[tone]} p-7 sm:p-8`}>
                  <span className="grid h-12 w-12 place-items-center rounded-2xl bg-light text-accent">
                    <svg className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth={1.6} viewBox="0 0 24 24" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" d={card.iconPath || DEFAULT_ICON} />
                    </svg>
                  </span>
                  <h3 className="mt-5 font-cormorant text-2xl font-semibold leading-tight text-primary">{card.title}</h3>
                  <p className="mt-3 leading-relaxed text-ink/80">{card.body}</p>
                </div>
              ))}
            </div>
          </Container>
        </Section>
      ),
    })
  }

  if (has(c.premiumOptions)) {
    blocks.push({
      key: 'premium',
      render: (tone) => (
        <Section tone={tone}>
          <Container size="medium">
            <div className="rounded-3xl bg-light p-8 sm:p-10">
              {c.premiumHeading && (
                <h2 className="font-cormorant text-3xl font-semibold leading-tight text-primary">{c.premiumHeading}</h2>
              )}
              {c.premiumIntro && <p className="mt-4 text-lg leading-relaxed text-ink/85">{c.premiumIntro}</p>}
              <div className="mt-8 grid gap-5 md:grid-cols-2">
                {c.premiumOptions.map((o, i) => (
                  <div key={i} className="rounded-2xl bg-white p-6">
                    <h3 className="text-lg font-semibold text-ink">{o.title}</h3>
                    <p className="mt-2 leading-relaxed text-muted">{o.body}</p>
                  </div>
                ))}
              </div>
            </div>
          </Container>
        </Section>
      ),
    })
  }

  if (has(c.benefits)) {
    blocks.push({
      key: 'benefits',
      render: (tone) => (
        <Section tone={tone}>
          <Container size="medium">
            <SectionHeading title={c.benefitsHeading ?? 'How care can help'} align="center" />
            <div className="mt-12 grid gap-5 md:grid-cols-2">
              {c.benefits.map((b, i) => (
                <div key={i} className={`animate-fade-up rounded-2xl border border-border border-l-4 border-l-accent ${CARD_BG[tone]} p-6 sm:p-7`}>
                  <h3 className="text-lg font-semibold text-primary">{b.title}</h3>
                  <p className="mt-2 leading-relaxed text-ink/80">{b.body}</p>
                </div>
              ))}
            </div>
          </Container>
        </Section>
      ),
    })
  }

  if (has(c.timeline)) {
    blocks.push({
      key: 'timeline',
      render: (tone) => (
        <Section tone={tone}>
          <Container size="narrow">
            {c.timelineHeading && <SectionHeading title={c.timelineHeading} align="center" />}
            <ol className="relative mt-12 space-y-8 before:absolute before:bottom-6 before:left-5 before:top-6 before:w-px before:bg-border">
              {c.timeline.map((step, i) => (
                <li key={i} className="relative flex gap-5">
                  <span className="relative z-10 grid h-10 w-10 shrink-0 place-items-center rounded-full bg-primary font-cormorant text-lg font-semibold text-white">
                    {i + 1}
                  </span>
                  <div className={`flex-1 rounded-2xl border border-border ${CARD_BG[tone]} p-5 sm:p-6`}>
                    <h3 className="text-lg font-semibold text-primary">{step.title}</h3>
                    <p className="mt-2 leading-relaxed text-ink/80">{step.body}</p>
                  </div>
                </li>
              ))}
            </ol>
          </Container>
        </Section>
      ),
    })
  }

  if (has(c.extraSections)) {
    blocks.push({
      key: 'extra',
      render: (tone) => (
        <Section tone={tone}>
          <Container size="narrow" className="space-y-14">
            {c.extraSections.map((s, i) => (
              <div key={i}>
                <SectionHeading title={s.heading} />
                <div className="mt-5 space-y-4 text-lg leading-relaxed text-ink/85">
                  {s.body.map((p, j) => (
                    <p key={j}>{p}</p>
                  ))}
                </div>
              </div>
            ))}
          </Container>
        </Section>
      ),
    })
  }

  if (has(c.videoLibrary)) {
    blocks.push({
      key: 'videos',
      render: (tone) => (
        <Section tone={tone}>
          <Container>
            {c.videoLibraryHeading && (
              <SectionHeading title={c.videoLibraryHeading} intro={c.videoLibrarySubhead} align="center" />
            )}
            <div className="mt-12 grid gap-6 md:grid-cols-3">
              {c.videoLibrary.map((v, i) => (
                <Video key={i} videoId={v.videoId} title={v.title} />
              ))}
            </div>
          </Container>
        </Section>
      ),
    })
  }

  if (has(c.faqs)) {
    blocks.push({
      key: 'faq',
      render: (tone) => (
        <Section tone={tone}>
          <Container size="narrow">
            <FaqList faqs={c.faqs} withSchema heading={c.faqHeading ?? `Common questions about ${c.title}`} />
          </Container>
        </Section>
      ),
    })
  }

  if (has(c.relatedLinks)) {
    blocks.push({
      key: 'related',
      render: (tone) => (
        <Section tone={tone}>
          <Container>
            <SectionHeading title={c.relatedHeading ?? 'Keep exploring'} align="center" />
            <div className="mt-12 grid gap-5 md:grid-cols-3">
              {c.relatedLinks.map((r, i) => (
                <Link
                  key={i}
                  href={r.href}
                  className={`group flex h-full flex-col rounded-3xl border border-border ${CARD_BG[tone]} p-7 transition hover:-translate-y-0.5 hover:border-accent/40 hover:shadow-[0_16px_40px_-20px_rgba(46,15,19,0.35)]`}
                >
                  {r.eyebrow && (
                    <span className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">{r.eyebrow}</span>
                  )}
                  <span className="mt-2 font-cormorant text-2xl font-semibold leading-tight text-primary">{r.label}</span>
                  {r.body && <span className="mt-3 flex-1 leading-relaxed text-ink/75">{r.body}</span>}
                  <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-accent">
                    Learn more
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                  </span>
                </Link>
              ))}
            </div>
          </Container>
        </Section>
      ),
    })
  }

  return (
    <main>
      <PageHero
        size="md"
        priority
        eyebrow={c.heroEyebrow ?? c.badge ?? c.hubLabel}
        title={c.headline || c.title}
        subtitle={c.heroSubhead || c.description}
        image={image}
        crumbs={[{ label: 'Home', href: '/' }, { label: c.hubLabel, href: c.hubHref }, { label: c.title }]}
        primaryCta={NAV_CTA}
        secondaryCta={{ label: 'Insurance & Pricing', href: '/insurance' }}
      />

      {blocks.map((b, i) => (
        <Fragment key={b.key}>{b.render(i % 2 === 0 ? 'cream' : 'white')}</Fragment>
      ))}

      <BookingOptions />

      <CtaBand
        heading={c.ctaHeading || 'Ready to take the first step?'}
        body={c.ctaBody}
        primary={{ label: c.ctaLabel || NAV_CTA.label, href: c.ctaHref || NAV_CTA.href }}
      />
    </main>
  )
}
