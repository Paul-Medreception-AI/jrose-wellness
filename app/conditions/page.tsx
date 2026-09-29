import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { AGES, CONTACT, NAV_CTA, PROVIDER, SITE_NAME, withBrand } from '@/lib/site'
import { JESSICA_PHOTOS, PAGE_IMAGES, imageFor, type SiteImage } from '@/lib/images'
import { CONDITIONS } from '@/lib/data/conditions'
import PageHero from '@/components/site/PageHero'
import Container from '@/components/site/Container'
import SectionHeading from '@/components/site/SectionHeading'
import CrisisNotice from '@/components/site/CrisisNotice'
import BookingOptions from '@/components/site/BookingOptions'
import CtaBand from '@/components/site/CtaBand'
import { ArrowRight } from '@/components/site/icons'

const TITLE = withBrand('Conditions We Treat via Telehealth, CT')
const DESCRIPTION =
  'Telehealth psychiatric care in Connecticut for anxiety, depression, ADHD, bipolar disorder, OCD, PTSD, psychosis, substance use, burnout, and life transitions.'
const HERO = PAGE_IMAGES['/conditions'] ?? imageFor('/conditions')

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: '/conditions' },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: '/conditions',
    siteName: SITE_NAME,
    type: 'website',
    images: [{ url: HERO.src, alt: HERO.alt }],
  },
  twitter: { card: 'summary_large_image', title: TITLE, description: DESCRIPTION, images: [HERO.src] },
}

/** "a", "a and b", "a, b, and c" */
function list(items: readonly string[]): string {
  if (items.length <= 1) return items.join('')
  if (items.length === 2) return `${items[0]} and ${items[1]}`
  return `${items.slice(0, -1).join(', ')}, and ${items[items.length - 1]}`
}

type Tile = { href: string; label: string; eyebrow: string; summary: string; image: SiteImage }

const conditionTiles: Tile[] = CONDITIONS.map((c) => ({
  href: `/conditions/${c.slug}`,
  label: c.title,
  eyebrow: 'Condition',
  summary: c.summary,
  image: c.heroImage ?? imageFor(`/conditions/${c.slug}`),
}))

// ADHD has its own service page (evaluation and treatment); it sits third, as in the site navigation.
const ADHD_TILE: Tile = {
  href: '/services/adhd-evaluation',
  label: 'ADHD',
  eyebrow: 'Evaluation & treatment',
  summary:
    'Evaluation and management of attention difficulties, distractibility, impulsivity, and disorganization in both adolescents and adults.',
  image: imageFor('/services/adhd-evaluation'),
}

const TILES: Tile[] = [...conditionTiles.slice(0, 2), ADHD_TILE, ...conditionTiles.slice(2)]

const CARE = [
  {
    href: '/services/psychiatric-evaluation',
    label: 'Psychiatric Evaluation',
    body: 'Your first visit is all about you: your history, current concerns, symptoms, lifestyle, and goals, leading to a personalized treatment plan.',
  },
  {
    href: '/services/medication-management',
    label: 'Medication Management',
    body: 'If medication is part of your care, follow-up visits monitor how it is working and adjust it carefully when needed. Medication is always optional.',
  },
  {
    href: '/services/supportive-therapy',
    label: 'Supportive Therapy',
    body: `Built into your visits: ${list(PROVIDER.techniques)}.`,
  },
] as const

const AUDIENCES = [
  { href: '/who-we-help/teens', label: `Teens (${AGES.minimum}+)` },
  { href: '/who-we-help/adults', label: 'Adults' },
  { href: '/who-we-help/older-adults', label: 'Older Adults' },
] as const

const CARD_SHADOW = 'hover:shadow-[0_16px_40px_-20px_rgba(46,15,19,0.35)]'

export default function ConditionsPage() {
  return (
    <main>
      <PageHero
        size="md"
        priority
        eyebrow="Conditions we treat"
        title="Mental Health Conditions We Treat by Telehealth in Connecticut"
        subtitle={`Psychiatric evaluation, medication management, and supportive therapy by secure video, for ${AGES.short.toLowerCase()} in ${CONTACT.state}.`}
        image={HERO}
        crumbs={[{ label: 'Home', href: '/' }, { label: 'Conditions' }]}
        primaryCta={NAV_CTA}
        secondaryCta={{ label: 'Insurance & Pricing', href: '/insurance' }}
      />

      {/* Intro + Jessica's own summary of what she treats (Alma bio) */}
      <section className="bg-cream py-16 sm:py-20">
        <Container>
          <div className="grid items-center gap-10 lg:grid-cols-12 lg:gap-14">
            <div className="lg:col-span-7">
              <SectionHeading eyebrow="Telehealth psychiatry" title="Care for the concerns that bring people in" />
              <div className="mt-6 space-y-5 text-lg leading-relaxed text-ink/85">
                <p>
                  {PROVIDER.name}, {PROVIDER.credentials}, is a {PROVIDER.title.toLowerCase()} who sees{' '}
                  {AGES.short.toLowerCase()} by secure video, for patients in {CONTACT.state}.
                </p>
                <p>
                  Every plan starts with a psychiatric evaluation and can include medication management, supportive
                  therapy within your visits, or both. Medication is always optional, and decisions are made together.
                </p>
                <p>
                  Each page below explains what a condition can feel like, what care involves, and what to expect. The
                  pages are general education, not a diagnosis.
                </p>
              </div>
            </div>

            <figure className="rounded-3xl border border-border bg-white p-7 shadow-[0_12px_32px_-18px_rgba(46,15,19,0.25)] sm:p-9 lg:col-span-5">
              <blockquote className="font-cormorant text-[1.65rem] font-medium leading-snug text-primary sm:text-3xl">
                &ldquo;I provide psychiatric medication management and supportive therapy for anxiety, depression, ADHD,
                OCD, trauma, burnout, and life transitions.&rdquo;
              </blockquote>
              <figcaption className="mt-6 flex items-center gap-4">
                <Image
                  src={JESSICA_PHOTOS.portrait.src}
                  alt={JESSICA_PHOTOS.portrait.alt}
                  width={JESSICA_PHOTOS.portrait.width}
                  height={JESSICA_PHOTOS.portrait.height}
                  sizes="64px"
                  className="h-16 w-16 shrink-0 rounded-full object-cover object-top"
                />
                <span>
                  <span className="block font-semibold text-ink">{PROVIDER.byline}</span>
                  <span className="block text-sm text-muted">{PROVIDER.title}</span>
                </span>
              </figcaption>
            </figure>
          </div>
        </Container>
      </section>

      {/* Condition cards */}
      <section className="bg-white py-16 sm:py-20" aria-labelledby="conditions-grid-heading">
        <Container>
          <SectionHeading
            id="conditions-grid-heading"
            eyebrow="Explore"
            title="Conditions we treat"
            intro="Choose a topic to learn more. You do not need to know which one fits before you reach out."
            align="center"
          />
          <ul className="mt-12 grid gap-5 md:grid-cols-2">
            {TILES.map((t) => (
              <li key={t.href}>
                <Link
                  href={t.href}
                  className={`group flex h-full flex-col overflow-hidden rounded-3xl border border-border bg-cream transition hover:-translate-y-0.5 hover:border-accent/40 sm:flex-row ${CARD_SHADOW}`}
                >
                  <div className="relative h-44 w-full shrink-0 overflow-hidden sm:h-auto sm:min-h-[12rem] sm:w-44">
                    <Image
                      src={t.image.src}
                      alt=""
                      fill
                      sizes="(min-width: 640px) 176px, 100vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="flex flex-1 flex-col p-6 sm:p-7">
                    <span className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">{t.eyebrow}</span>
                    <h3 className="mt-2 font-cormorant text-2xl font-semibold leading-tight text-primary">{t.label}</h3>
                    <p className="mt-2 flex-1 leading-relaxed text-ink/75">{t.summary}</p>
                    <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-accent">
                      Learn more
                      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                    </span>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      {/* Not sure where you fit + also supported + crisis */}
      <section className="bg-cream py-16 sm:py-20">
        <Container>
          <div className="grid items-start gap-10 lg:grid-cols-12 lg:gap-14">
            <div className="lg:col-span-7">
              <SectionHeading title="Not sure where you fit?" />
              <div className="mt-6 space-y-5 text-lg leading-relaxed text-ink/85">
                <p>
                  You do not need a diagnosis, or even the right words, to reach out. Many people come in with a mix of
                  concerns, like stress that turned into anxiety, or low mood alongside trouble focusing.
                </p>
                <p>
                  Your first visit is where you and Jessica sort it out together. It covers your history, current
                  concerns, symptoms, lifestyle, and goals, and you leave with a clearer understanding of possible next
                  steps.
                </p>
              </div>
              <div className="mt-8 flex flex-wrap gap-x-6 gap-y-3">
                <Link
                  href="/services/psychiatric-evaluation"
                  className="inline-flex items-center gap-1.5 font-semibold text-accent underline-offset-4 hover:underline"
                >
                  About the psychiatric evaluation
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-1.5 font-semibold text-accent underline-offset-4 hover:underline"
                >
                  Ask a question
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
              <div className="mt-10">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-muted">Who we help</p>
                <ul className="mt-3 flex flex-wrap gap-2">
                  {AUDIENCES.map((a) => (
                    <li key={a.href}>
                      <Link
                        href={a.href}
                        className="inline-flex rounded-full border border-border bg-white px-4 py-2 text-sm font-medium text-primary transition-colors hover:border-accent/50 hover:text-accent"
                      >
                        {a.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="space-y-6 lg:col-span-5">
              <div className="rounded-3xl border border-border bg-white p-7 sm:p-8">
                <h3 className="font-cormorant text-[1.75rem] font-semibold leading-tight text-primary">Also supported</h3>
                <p className="mt-3 leading-relaxed text-ink/80">
                  Jessica also sees people for insomnia and other sleep concerns, and for mood disorders more broadly.
                  Mention them when you book, and they will be part of your evaluation.
                </p>
              </div>
              <CrisisNotice />
            </div>
          </div>
        </Container>
      </section>

      {/* How care works, linking to the three core services */}
      <section className="bg-white py-16 sm:py-20">
        <Container>
          <SectionHeading
            eyebrow="How care works"
            title="One approach, shaped around you"
            intro="Whatever brings you in, care is built from the same three pieces, in the proportions that fit you."
            align="center"
          />
          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {CARE.map((s) => (
              <Link
                key={s.href}
                href={s.href}
                className={`group flex h-full flex-col rounded-3xl border border-border bg-cream p-7 transition hover:-translate-y-0.5 hover:border-accent/40 ${CARD_SHADOW}`}
              >
                <span className="font-cormorant text-2xl font-semibold leading-tight text-primary">{s.label}</span>
                <span className="mt-3 flex-1 leading-relaxed text-ink/75">{s.body}</span>
                <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-accent">
                  Learn more
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                </span>
              </Link>
            ))}
          </div>
          <p className="mt-8 text-center text-muted">
            Every visit is by secure video.{' '}
            <Link
              href="/services/telepsychiatry"
              className="font-semibold text-accent underline-offset-4 hover:underline"
            >
              See how telepsychiatry works
            </Link>
          </p>
        </Container>
      </section>

      <BookingOptions />

      <CtaBand
        heading="Ready to take the first step?"
        body="Book a secure video visit through Alma or Headway, or request a self-pay appointment. You do not need a diagnosis to get started."
      />
    </main>
  )
}
