import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { AGES, BOOKING, CONTACT, NAV, NAV_CTA, PRACTICE_FAQS, PRICING, PROVIDER, SITE_NAME, withBrand } from '@/lib/site'
import { PAGE_IMAGES } from '@/lib/images'
import { SERVICES } from '@/lib/data/services'
import PageHero from '@/components/site/PageHero'
import Container from '@/components/site/Container'
import SectionHeading from '@/components/site/SectionHeading'
import BookingOptions from '@/components/site/BookingOptions'
import CtaBand from '@/components/site/CtaBand'
import CrisisNotice from '@/components/site/CrisisNotice'
import { ArrowRight, CheckIcon, VideoIcon } from '@/components/site/icons'

const TITLE = withBrand('Telehealth Psychiatric Services in CT')
const DESCRIPTION =
  'Explore telehealth psychiatric services in Connecticut: psychiatric evaluations, medication management, supportive therapy, and ADHD care by secure video.'
const HERO = PAGE_IMAGES['/services']

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: '/services' },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: '/services',
    siteName: SITE_NAME,
    type: 'website',
    images: [{ url: HERO.src, alt: HERO.alt }],
  },
  twitter: { card: 'summary_large_image', title: TITLE, description: DESCRIPTION, images: [HERO.src] },
}

// One or two sentences per service for the hub cards, keyed by slug. Card order follows SERVICES.
const CARD_COPY: Record<string, { blurb: string; price?: string }> = {
  'psychiatric-evaluation': {
    blurb:
      'Your first session is all about you: your history, current concerns, symptoms, lifestyle, and goals. You leave with a personalized plan, not a one-size-fits-all approach.',
    price: PRICING.initialEvaluation.price,
  },
  'medication-management': {
    blurb:
      'Follow-up visits check on your progress and how your plan is working. If medication is part of your care, it is carefully managed and adjusted when needed.',
    price: PRICING.followUp.price,
  },
  'supportive-therapy': {
    blurb:
      'Supportive therapy during your visits, using cognitive behavioral techniques, mindfulness, and practical coping strategies, with a referral to a therapist if needed.',
  },
  telepsychiatry: {
    blurb:
      'Every visit is by secure video, so you can receive care from the comfort and privacy of your home. No commuting or long waiting rooms.',
  },
  'adhd-evaluation': {
    blurb:
      'Evaluation and management of attention difficulties, distractibility, impulsivity, and disorganization, for teens and adults, with support at school, work, and home.',
  },
}

// Layout for five cards: two wide cards on top, three below (lg); the last card spans the row on md.
const CARD_LAYOUT = [
  { span: 'lg:col-span-3', img: 'h-60 sm:h-64', sizes: '(min-width: 1024px) 600px, (min-width: 768px) 50vw, 100vw' },
  { span: 'lg:col-span-3', img: 'h-60 sm:h-64', sizes: '(min-width: 1024px) 600px, (min-width: 768px) 50vw, 100vw' },
  { span: 'lg:col-span-2', img: 'h-52', sizes: '(min-width: 1024px) 400px, (min-width: 768px) 50vw, 100vw' },
  { span: 'lg:col-span-2', img: 'h-52', sizes: '(min-width: 1024px) 400px, (min-width: 768px) 50vw, 100vw' },
  { span: 'md:col-span-2 lg:col-span-2', img: 'h-52', sizes: '(min-width: 1024px) 400px, 100vw' },
]

// Factors from the practice's own FAQ answer ("How do you decide which medication is right for me?").
const MEDICATION_FACTORS = [
  'Symptoms',
  'History',
  'Past medication responses',
  'Side-effect sensitivity',
  'Lifestyle',
  'Preferences',
]

const CONDITION_LINKS = (NAV.find((n) => n.href === '/conditions')?.children ?? []).filter((c) => c.href !== '/conditions')

export default function ServicesPage() {
  const choosingMedication = PRACTICE_FAQS[4]
  const noMedication = PRACTICE_FAQS[5]
  const therapyOrMedication = PRACTICE_FAQS[2]

  return (
    <main>
      <PageHero
        size="md"
        priority
        eyebrow="Services"
        title="Telehealth Psychiatric Services in Connecticut"
        subtitle={`Psychiatric evaluation, medication management, and supportive therapy by secure video, for ${AGES.short.toLowerCase()} in ${CONTACT.state}.`}
        image={HERO}
        crumbs={[{ label: 'Home', href: '/' }, { label: 'Services' }]}
        primaryCta={NAV_CTA}
        secondaryCta={{ label: 'Insurance & Pricing', href: '/insurance' }}
      />

      {/* Services */}
      <section className="bg-cream py-16 sm:py-20" aria-labelledby="services-heading">
        <Container>
          <SectionHeading
            id="services-heading"
            eyebrow="How Jessica can help"
            title="Care from your first evaluation to every follow-up"
            intro={`Every service is provided by ${PROVIDER.byline}, by secure video, for patients in ${CONTACT.state}. Care combines medication management and supportive therapy, so it stays thoughtful, balanced, and centered around you.`}
          />

          <ul className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-6">
            {SERVICES.map((s, i) => {
              const copy = CARD_COPY[s.slug]
              const layout = CARD_LAYOUT[i] ?? CARD_LAYOUT[CARD_LAYOUT.length - 1]
              const img = s.heroImage ?? PAGE_IMAGES[`/services/${s.slug}`] ?? HERO
              return (
                <li key={s.slug} className={layout.span}>
                  <Link
                    href={`/services/${s.slug}`}
                    className="group flex h-full flex-col overflow-hidden rounded-3xl border border-border bg-white shadow-[0_1px_2px_rgba(46,15,19,0.04),0_12px_32px_-16px_rgba(46,15,19,0.18)] transition hover:-translate-y-0.5 hover:border-accent/40 hover:shadow-[0_16px_40px_-20px_rgba(46,15,19,0.35)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
                  >
                    <div className={`relative w-full overflow-hidden bg-light ${layout.img}`}>
                      <Image
                        src={img.src}
                        alt=""
                        fill
                        sizes={layout.sizes}
                        className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                      />
                      {copy?.price && (
                        <span className="absolute left-4 top-4 rounded-full bg-white/95 px-3 py-1 text-xs font-semibold text-primary shadow-sm">
                          Self-pay {copy.price}
                        </span>
                      )}
                    </div>
                    <div className="flex flex-1 flex-col p-6 sm:p-7">
                      <h3 className="font-cormorant text-[1.75rem] font-semibold leading-tight text-primary">{s.title}</h3>
                      <p className="mt-3 flex-1 leading-relaxed text-ink/80">{copy?.blurb ?? s.description}</p>
                      <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-accent">
                        Learn more
                        <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                      </span>
                    </div>
                  </Link>
                </li>
              )
            })}
          </ul>
        </Container>
      </section>

      {/* Medication is your choice */}
      <section className="bg-white py-16 sm:py-20" aria-labelledby="medication-choice-heading">
        <Container>
          <div className="grid items-start gap-10 lg:grid-cols-12 lg:gap-14">
            <div className="lg:col-span-7">
              <SectionHeading id="medication-choice-heading" eyebrow="Your care, your choice" title="Medication is always your choice" />
              <blockquote className="mt-8 border-l-4 border-accent pl-5 sm:pl-6">
                <p className="font-cormorant text-2xl leading-snug text-primary sm:text-[1.75rem]">&ldquo;{noMedication.a}&rdquo;</p>
              </blockquote>
              <div className="mt-8 space-y-5 text-lg leading-relaxed text-ink/85">
                <p>
                  Supportive therapy is part of your visits either way. In Jessica&apos;s words: &ldquo;{therapyOrMedication.a}&rdquo;
                </p>
                <p>
                  <Link
                    href="/services/supportive-therapy"
                    className="inline-flex items-center gap-1.5 font-semibold text-accent underline-offset-4 hover:underline"
                  >
                    How supportive therapy works
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </p>
              </div>
            </div>

            <aside className="rounded-3xl border border-border bg-cream p-6 shadow-[0_12px_32px_-18px_rgba(46,15,19,0.25)] sm:p-8 lg:col-span-5">
              <h3 className="font-cormorant text-[1.75rem] font-semibold leading-tight text-primary">
                How medication decisions are made
              </h3>
              <p className="mt-3 leading-relaxed text-ink/80">{choosingMedication.a}</p>
              <ul className="mt-5 grid gap-3 sm:grid-cols-2">
                {MEDICATION_FACTORS.map((f) => (
                  <li key={f} className="flex items-start gap-3">
                    <span className="mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-full bg-light text-accent">
                      <CheckIcon className="h-3.5 w-3.5" />
                    </span>
                    <span className="leading-relaxed text-ink/85">{f}</span>
                  </li>
                ))}
              </ul>
            </aside>
          </div>
        </Container>
      </section>

      {/* Pricing */}
      <section className="bg-cream py-16 sm:py-20" aria-labelledby="pricing-heading">
        <Container size="medium">
          <SectionHeading
            id="pricing-heading"
            eyebrow="Pricing"
            title="Pricing at a glance"
            intro="Self-pay rates for visits booked directly with the practice. With insurance, your cost depends on your plan when you book through Alma or Headway."
            align="center"
          />

          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {[PRICING.initialEvaluation, PRICING.followUp].map((p) => (
              <div
                key={p.name}
                className="flex h-full flex-col rounded-3xl border border-border bg-white p-6 shadow-[0_1px_2px_rgba(46,15,19,0.04),0_12px_32px_-16px_rgba(46,15,19,0.18)] sm:p-8"
              >
                <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-2">
                  <h3 className="font-cormorant text-[1.75rem] font-semibold leading-tight text-primary">{p.name}</h3>
                  <p className="whitespace-nowrap">
                    <span className="font-cormorant text-4xl font-semibold text-primary">{p.price}</span>
                    <span className="ml-1.5 text-sm text-muted">self-pay</span>
                  </p>
                </div>
                <p className="mt-4 leading-relaxed text-ink/80">{p.description}</p>
              </div>
            ))}
          </div>

          <ul className="mx-auto mt-8 grid max-w-4xl gap-4 sm:grid-cols-2">
            <li className="flex items-start gap-3 rounded-2xl border border-border bg-white p-5">
              <span className="mt-0.5 grid h-7 w-7 shrink-0 place-items-center rounded-full bg-light text-accent">
                <CheckIcon className="h-4 w-4" />
              </span>
              <span className="leading-relaxed text-ink/85">
                Self-pay visits are booked by request.{' '}
                <Link href={BOOKING.request.href} className="font-semibold text-accent underline-offset-4 hover:underline">
                  {BOOKING.request.label}
                </Link>
                {' '}or call {CONTACT.phone}.
              </span>
            </li>
            <li className="flex items-start gap-3 rounded-2xl border border-border bg-white p-5">
              <span className="mt-0.5 grid h-7 w-7 shrink-0 place-items-center rounded-full bg-light text-accent">
                <VideoIcon className="h-4 w-4" />
              </span>
              <span className="leading-relaxed text-ink/85">{BOOKING.alma.note}</span>
            </li>
          </ul>

          <p className="mx-auto mt-6 max-w-3xl text-center text-sm leading-relaxed text-muted">{PRICING.goodFaithEstimate}</p>
        </Container>
      </section>

      <BookingOptions />

      {/* Conditions */}
      <section className="bg-white py-16 sm:py-20" aria-labelledby="conditions-heading">
        <Container>
          <SectionHeading
            id="conditions-heading"
            eyebrow="Conditions"
            title="Conditions we treat"
            intro="Learn how evaluation, medication management, and supportive therapy fit each condition."
            align="center"
          />
          <ul className="mx-auto mt-10 flex max-w-4xl flex-wrap justify-center gap-3">
            {CONDITION_LINKS.map((c) => (
              <li key={c.href}>
                <Link
                  href={c.href}
                  className="inline-flex items-center rounded-full border border-border bg-cream px-4 py-2 text-[15px] font-medium text-primary transition-colors hover:border-accent/50 hover:bg-light focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
                >
                  {c.label}
                </Link>
              </li>
            ))}
          </ul>
          <p className="mt-8 text-center">
            <Link
              href="/conditions"
              className="inline-flex items-center gap-1.5 font-semibold text-accent underline-offset-4 hover:underline"
            >
              See all conditions
              <ArrowRight className="h-4 w-4" />
            </Link>
          </p>
          <div className="mx-auto mt-12 max-w-3xl">
            <CrisisNotice variant="compact" />
          </div>
        </Container>
      </section>

      <CtaBand
        heading="Ready to take the first step?"
        body="Book with insurance through Alma or Headway, or request a self-pay visit. Every visit is by secure video."
      />
    </main>
  )
}
