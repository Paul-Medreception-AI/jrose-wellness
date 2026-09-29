import Image from 'next/image'
import Link from 'next/link'
import type { ReactNode } from 'react'
import { NAV_CTA } from '@/lib/site'
import { JESSICA_PHOTOS } from '@/lib/images'
import PageHero from '@/components/site/PageHero'
import Container from '@/components/site/Container'
import SectionHeading from '@/components/site/SectionHeading'
import CrisisNotice from '@/components/site/CrisisNotice'
import FaqList from '@/components/site/FaqList'
import BookingOptions from '@/components/site/BookingOptions'
import { ArrowRight, CheckIcon } from '@/components/site/icons'
import { COMPARE_HUB, GUIDES, type GuideMeta } from '../_lib/guides'

/**
 * Layout for a /compare guide. Each page passes its own copy; the template keeps the structure
 * the same across guides: hero, intro with "at a glance", side-by-side table, a closer look at
 * each option, an optional middle section, how to decide, how it works at the practice, FAQ,
 * related pages, the other guides, and booking options.
 */

export type GuideTableRow = { label: string; a: ReactNode; b: ReactNode }
export type GuideSide = { eyebrow: string; title: string; body: ReactNode[] }
export type GuideCard = { title: string; body: ReactNode }
export type GuideRelated = { href: string; label: string; body: string }

export type GuideContent = {
  meta: GuideMeta
  hero: { subtitle: string; secondaryCta?: { label: string; href: string } }
  intro: { eyebrow?: string; heading: string; body: ReactNode[] }
  takeaways: string[]
  /** Adds the crisis notice under the intro (required on the depression and anxiety guides). */
  crisis?: boolean
  table: { heading: string; intro?: string; columns: [string, string]; rows: GuideTableRow[]; note?: string }
  sides: [GuideSide, GuideSide]
  middle?: { eyebrow?: string; heading: string; intro?: ReactNode; cards?: GuideCard[]; body?: ReactNode[] }
  decide: {
    heading: string
    intro?: string
    a: { title: string; items: string[] }
    b: { title: string; items: string[] }
    note?: ReactNode
  }
  practice: {
    eyebrow?: string
    heading: string
    body: ReactNode[]
    quote?: { text: string; cite: string }
    links: { href: string; label: string }[]
  }
  faqs: { q: string; a: string }[]
  related: GuideRelated[]
  booking?: { heading?: string; intro?: string }
}

/** Inline text link for body copy. */
export function TextLink({ href, children }: { href: string; children: ReactNode }) {
  return (
    <Link href={href} className="font-semibold text-accent underline decoration-accent/40 underline-offset-4 transition-colors hover:decoration-accent">
      {children}
    </Link>
  )
}

const CARD_SHADOW = 'shadow-[0_1px_2px_rgba(46,15,19,0.04),0_12px_32px_-16px_rgba(46,15,19,0.18)]'

function Paragraphs({ items, className = 'space-y-5 text-lg leading-relaxed text-ink/85' }: { items: ReactNode[]; className?: string }) {
  return (
    <div className={className}>
      {items.map((p, i) => (
        <p key={i}>{p}</p>
      ))}
    </div>
  )
}

function CheckList({ items }: { items: string[] }) {
  return (
    <ul className="space-y-3">
      {items.map((item) => (
        <li key={item} className="flex items-start gap-3">
          <span className="mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-full bg-light text-accent">
            <CheckIcon className="h-3.5 w-3.5" />
          </span>
          <span className="leading-relaxed text-ink/85">{item}</span>
        </li>
      ))}
    </ul>
  )
}

function ComparisonTable({ table }: { table: GuideContent['table'] }) {
  const [colA, colB] = table.columns
  return (
    <>
      {/* Tablet and up: a real table. */}
      <div className={`mt-10 hidden overflow-hidden rounded-3xl border border-border bg-white md:block ${CARD_SHADOW}`}>
        <table className="w-full table-fixed border-collapse text-left">
          <caption className="sr-only">
            {colA} compared with {colB}
          </caption>
          <colgroup>
            <col className="w-[22%]" />
            <col />
            <col />
          </colgroup>
          <thead className="bg-primary text-white">
            <tr>
              <th scope="col" className="px-6 py-4 text-xs font-semibold uppercase tracking-[0.16em] text-peach">
                Topic
              </th>
              <th scope="col" className="px-6 py-4 font-cormorant text-2xl font-semibold leading-tight">
                {colA}
              </th>
              <th scope="col" className="px-6 py-4 font-cormorant text-2xl font-semibold leading-tight">
                {colB}
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-border">
            {table.rows.map((r) => (
              <tr key={r.label}>
                <th scope="row" className="bg-light px-6 py-5 align-top text-[15px] font-semibold leading-snug text-primary">
                  {r.label}
                </th>
                <td className="px-6 py-5 align-top leading-relaxed text-ink/85">{r.a}</td>
                <td className="bg-cream/70 px-6 py-5 align-top leading-relaxed text-ink/85">{r.b}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Phones: one card per topic. */}
      <div className="mt-8 space-y-4 md:hidden">
        {table.rows.map((r) => (
          <div key={r.label} className="rounded-2xl border border-border bg-white p-5">
            <h3 className="font-cormorant text-2xl font-semibold leading-tight text-primary">{r.label}</h3>
            <dl className="mt-4 space-y-4">
              <div>
                <dt className="text-xs font-semibold uppercase tracking-[0.14em] text-accent">{colA}</dt>
                <dd className="mt-1 leading-relaxed text-ink/85">{r.a}</dd>
              </div>
              <div className="border-t border-border pt-4">
                <dt className="text-xs font-semibold uppercase tracking-[0.14em] text-accent">{colB}</dt>
                <dd className="mt-1 leading-relaxed text-ink/85">{r.b}</dd>
              </div>
            </dl>
          </div>
        ))}
      </div>
    </>
  )
}

function OtherGuides({ current }: { current: string }) {
  const others = GUIDES.filter((g) => g.slug !== current)
  return (
    <ul className="mt-8 grid gap-6 md:grid-cols-3">
      {others.map((g) => (
        <li key={g.slug}>
          <Link
            href={g.href}
            className={`group flex h-full flex-col overflow-hidden rounded-3xl border border-border bg-white transition hover:-translate-y-0.5 hover:border-accent/40 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent ${CARD_SHADOW}`}
          >
            <div className="relative h-40 w-full overflow-hidden bg-light">
              <Image
                src={g.image.src}
                alt=""
                fill
                sizes="(min-width: 1024px) 400px, (min-width: 768px) 33vw, 100vw"
                className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
              />
            </div>
            <div className="flex flex-1 flex-col p-6">
              <h3 className="font-cormorant text-2xl font-semibold leading-tight text-primary">{g.cardTitle}</h3>
              <p className="mt-2 flex-1 leading-relaxed text-ink/80">{g.blurb}</p>
              <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-accent">
                Read the guide
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </span>
            </div>
          </Link>
        </li>
      ))}
    </ul>
  )
}

export function GuideTemplate({ c }: { c: GuideContent }) {
  const { meta } = c

  return (
    <main>
      <PageHero
        size="md"
        priority
        eyebrow="Guide"
        title={meta.h1}
        subtitle={c.hero.subtitle}
        image={meta.image}
        crumbs={[{ label: 'Home', href: '/' }, { label: COMPARE_HUB.label, href: COMPARE_HUB.href }, { label: meta.cardTitle }]}
        primaryCta={NAV_CTA}
        secondaryCta={c.hero.secondaryCta}
      />

      {/* Intro + at a glance */}
      <section className="bg-cream py-16 sm:py-20" aria-labelledby="guide-intro-heading">
        <Container>
          <div className="grid items-start gap-10 lg:grid-cols-12 lg:gap-14">
            <div className="lg:col-span-7">
              <SectionHeading id="guide-intro-heading" eyebrow={c.intro.eyebrow ?? 'The short version'} title={c.intro.heading} />
              <div className="mt-8">
                <Paragraphs items={c.intro.body} />
              </div>
            </div>
            <aside className={`rounded-3xl border border-border bg-white p-6 sm:p-8 lg:col-span-5 ${CARD_SHADOW}`} aria-label="At a glance">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">At a glance</p>
              <div className="mt-5">
                <CheckList items={c.takeaways} />
              </div>
            </aside>
          </div>
          {c.crisis && (
            <div className="mt-12">
              <CrisisNotice />
            </div>
          )}
        </Container>
      </section>

      {/* Side by side */}
      <section className="bg-white py-16 sm:py-20" aria-labelledby="guide-table-heading">
        <Container size="medium">
          <SectionHeading id="guide-table-heading" eyebrow="Side by side" title={c.table.heading} intro={c.table.intro} align="center" />
          <ComparisonTable table={c.table} />
          {c.table.note && <p className="mx-auto mt-6 max-w-3xl text-center text-sm leading-relaxed text-muted">{c.table.note}</p>}
        </Container>
      </section>

      {/* A closer look at each option */}
      <section className="bg-cream py-16 sm:py-20" aria-labelledby="guide-closer-heading">
        <Container>
          <SectionHeading id="guide-closer-heading" eyebrow="A closer look" title="Understanding each option" />
          <div className="mt-10 grid gap-6 lg:grid-cols-2">
            {c.sides.map((s) => (
              <article key={s.title} className={`flex h-full flex-col rounded-3xl border border-border bg-white p-6 sm:p-8 ${CARD_SHADOW}`}>
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">{s.eyebrow}</p>
                <h3 className="mt-2 font-cormorant text-[1.9rem] font-semibold leading-tight text-primary">{s.title}</h3>
                <div className="mt-5">
                  <Paragraphs items={s.body} className="space-y-4 leading-relaxed text-ink/85" />
                </div>
              </article>
            ))}
          </div>
        </Container>
      </section>

      {/* Optional middle section */}
      {c.middle && (
        <section className="bg-white py-16 sm:py-20" aria-labelledby="guide-middle-heading">
          <Container>
            <SectionHeading id="guide-middle-heading" eyebrow={c.middle.eyebrow} title={c.middle.heading} intro={c.middle.intro} />
            {c.middle.body && c.middle.body.length > 0 && (
              <div className="mt-8 max-w-3xl">
                <Paragraphs items={c.middle.body} />
              </div>
            )}
            {c.middle.cards && c.middle.cards.length > 0 && (
              <ul className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                {c.middle.cards.map((card) => (
                  <li key={card.title} className="rounded-2xl border border-border bg-cream p-6">
                    <h3 className="font-cormorant text-2xl font-semibold leading-tight text-primary">{card.title}</h3>
                    <p className="mt-2 leading-relaxed text-ink/85">{card.body}</p>
                  </li>
                ))}
              </ul>
            )}
          </Container>
        </section>
      )}

      {/* How to decide */}
      <section className="bg-light py-16 sm:py-20" aria-labelledby="guide-decide-heading">
        <Container>
          <SectionHeading id="guide-decide-heading" eyebrow="How to decide" title={c.decide.heading} intro={c.decide.intro} />
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {[c.decide.a, c.decide.b].map((col) => (
              <div key={col.title} className={`h-full rounded-3xl border border-border bg-white p-6 sm:p-8 ${CARD_SHADOW}`}>
                <h3 className="font-cormorant text-[1.75rem] font-semibold leading-tight text-primary">{col.title}</h3>
                <div className="mt-5">
                  <CheckList items={col.items} />
                </div>
              </div>
            ))}
          </div>
          {c.decide.note && <p className="mt-8 max-w-3xl text-lg leading-relaxed text-ink/85">{c.decide.note}</p>}
        </Container>
      </section>

      {/* At the practice */}
      <section className="bg-white py-16 sm:py-20" aria-labelledby="guide-practice-heading">
        <Container>
          <div className="grid items-center gap-10 lg:grid-cols-12 lg:gap-14">
            <div className="lg:col-span-4">
              <div className="mx-auto max-w-xs overflow-hidden rounded-[2rem] border border-border bg-light lg:max-w-none">
                <Image
                  src={JESSICA_PHOTOS.portrait.src}
                  alt={JESSICA_PHOTOS.portrait.alt}
                  width={JESSICA_PHOTOS.portrait.width}
                  height={JESSICA_PHOTOS.portrait.height}
                  sizes="(min-width: 1024px) 380px, 320px"
                  className="h-auto w-full"
                />
              </div>
            </div>
            <div className="lg:col-span-8">
              <SectionHeading id="guide-practice-heading" eyebrow={c.practice.eyebrow ?? 'At JRose Wellness'} title={c.practice.heading} />
              <div className="mt-8">
                <Paragraphs items={c.practice.body} />
              </div>
              {c.practice.quote && (
                <blockquote className="mt-8 border-l-4 border-accent pl-5 sm:pl-6">
                  <p className="font-cormorant text-2xl leading-snug text-primary sm:text-[1.75rem]">&ldquo;{c.practice.quote.text}&rdquo;</p>
                  <footer className="mt-3 text-sm text-muted">{c.practice.quote.cite}</footer>
                </blockquote>
              )}
              <ul className="mt-8 flex flex-wrap gap-3">
                {c.practice.links.map((l) => (
                  <li key={l.href}>
                    <Link
                      href={l.href}
                      className="inline-flex items-center gap-1.5 rounded-full border border-primary/25 bg-white px-4 py-2 text-sm font-semibold text-primary transition-colors hover:border-accent hover:text-accent"
                    >
                      {l.label}
                      <ArrowRight className="h-3.5 w-3.5" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Container>
      </section>

      {/* FAQ */}
      <section className="bg-cream py-16 sm:py-20" aria-labelledby="guide-faq-heading">
        <Container size="narrow">
          <SectionHeading id="guide-faq-heading" eyebrow="Questions" title="Common questions" />
          <div className="mt-8">
            {/* No FAQPage markup here: the guides repeat practice FAQs and near-duplicates of service
                page questions, and a Q&A may be marked up only once across the site (see lib/faqs.ts). */}
            <FaqList faqs={c.faqs} />
          </div>
        </Container>
      </section>

      {/* Related pages + other guides */}
      <section className="bg-white py-16 sm:py-20" aria-labelledby="guide-related-heading">
        <Container>
          <SectionHeading id="guide-related-heading" eyebrow="Keep reading" title="Related care and resources" />
          <ul className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {c.related.map((r) => (
              <li key={r.href}>
                <Link
                  href={r.href}
                  className="group flex h-full flex-col rounded-2xl border border-border bg-cream p-5 transition hover:border-accent/40 hover:bg-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
                >
                  <span className="font-cormorant text-xl font-semibold leading-tight text-primary">{r.label}</span>
                  <span className="mt-2 flex-1 text-sm leading-relaxed text-ink/80">{r.body}</span>
                  <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-accent">
                    Learn more
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                  </span>
                </Link>
              </li>
            ))}
          </ul>

          <div className="mt-16 flex flex-wrap items-end justify-between gap-4">
            <h2 className="font-cormorant text-[2rem] font-semibold leading-[1.1] text-primary sm:text-4xl">More guides</h2>
            <Link
              href={COMPARE_HUB.href}
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-accent underline-offset-4 hover:underline"
            >
              All guides
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <OtherGuides current={meta.slug} />

          <div className="mt-12 max-w-3xl space-y-3 border-t border-border pt-6">
            <p className="text-sm leading-relaxed text-muted">
              This guide is general education, not medical advice, and it does not replace an evaluation with a licensed clinician.
            </p>
            <CrisisNotice variant="compact" />
          </div>
        </Container>
      </section>

      <BookingOptions heading={c.booking?.heading ?? 'Ready to talk it through?'} intro={c.booking?.intro} />
    </main>
  )
}
