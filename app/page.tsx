import type { Metadata } from 'next'
import type { ReactNode } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import {
  AGES,
  CONTACT,
  NAV_CTA,
  PRACTICE_FAQS,
  PRICING,
  PROVIDER,
  SITE_NAME,
  withBrand,
} from '@/lib/site'
import { JESSICA_PHOTOS, PAGE_IMAGES } from '@/lib/images'
import Container from '@/components/site/Container'
import SectionHeading from '@/components/site/SectionHeading'
import BookingOptions from '@/components/site/BookingOptions'
import Reviews from '@/components/site/Reviews'
import FaqList from '@/components/site/FaqList'
import CrisisNotice from '@/components/site/CrisisNotice'
import CtaBand from '@/components/site/CtaBand'
import { BUTTON } from '@/components/site/SmartLink'
import { ArrowRight, CheckIcon, VideoIcon } from '@/components/site/icons'

const HERO_IMAGE = PAGE_IMAGES['/']
const TITLE = withBrand('Telehealth Psychiatry in Connecticut')
const DESCRIPTION = `Telehealth psychiatric evaluations, medication management, and supportive therapy for teens ${AGES.minimum}+ and adults in Connecticut. Insurance through Alma or Headway.`

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: '/' },
  openGraph: {
    type: 'website',
    url: '/',
    siteName: SITE_NAME,
    locale: 'en_US',
    title: TITLE,
    description: DESCRIPTION,
    images: [{ url: HERO_IMAGE.src, width: 2000, height: 1333, alt: HERO_IMAGE.alt }],
  },
  twitter: {
    card: 'summary_large_image',
    title: TITLE,
    description: DESCRIPTION,
    images: [HERO_IMAGE.src],
  },
}

/* ------------------------------------------------------------------ */
/* Page data                                                           */
/* ------------------------------------------------------------------ */

type IconProps = { className?: string }

const TRUST: { label: string; Icon: (p: IconProps) => ReactNode }[] = [
  { label: 'Board-certified psychiatric NP', Icon: AwardIcon },
  { label: 'Secure video visits', Icon: VideoIcon },
  { label: 'Insurance through Alma & Headway', Icon: ShieldCheckIcon },
  { label: `Teens ${AGES.minimum}+ and adults`, Icon: UsersIcon },
]

// One sentence each, drawn from the practice's own descriptions (FACTS.md section 3).
const SERVICES = [
  {
    href: '/services/psychiatric-evaluation',
    title: 'Psychiatric Evaluation',
    body: 'A thorough first visit about you: your history, current concerns, symptoms, and goals, leading to a personalized treatment plan.',
  },
  {
    href: '/services/medication-management',
    title: 'Medication Management',
    body: 'Regular follow-ups to check your progress and carefully adjust medication when needed. Medication is optional.',
  },
  {
    href: '/services/supportive-therapy',
    title: 'Supportive Therapy',
    body: 'Supportive therapy and practical coping strategies built into your visits, with a referral to a therapist if you need one.',
  },
  {
    href: '/services/telepsychiatry',
    title: 'Telepsychiatry',
    body: 'Every visit happens by secure video, so you can get care from the comfort and privacy of your home.',
  },
  {
    href: '/services/adhd-evaluation',
    title: 'ADHD Evaluation & Treatment',
    body: 'Evaluation and ongoing care for attention difficulties, distractibility, impulsivity, and disorganization in adolescents and adults.',
  },
] as const

// Two larger cards on the first row, three on the second (desktop). On two-column tablets the
// fifth card spans the row.
const SERVICE_SPANS = ['lg:col-span-3', 'lg:col-span-3', 'lg:col-span-2', 'lg:col-span-2', 'sm:col-span-2 lg:col-span-2']

const CONDITIONS = [
  { href: '/conditions/anxiety', label: 'Anxiety & Panic', desc: 'Worry, panic attacks, and social anxiety' },
  { href: '/conditions/depression', label: 'Depression', desc: 'Low mood, low energy, and loss of motivation' },
  { href: '/services/adhd-evaluation', label: 'ADHD', desc: 'Focus, distractibility, and disorganization' },
  { href: '/conditions/bipolar-disorder', label: 'Bipolar Disorder', desc: 'Ongoing care for mood highs and lows' },
  { href: '/conditions/ocd', label: 'OCD', desc: 'Intrusive thoughts and compulsions' },
  { href: '/conditions/ptsd-trauma', label: 'PTSD & Trauma', desc: 'The lasting effects of trauma' },
  { href: '/conditions/schizophrenia-psychosis', label: 'Schizophrenia & Psychosis', desc: 'Outpatient medication management' },
  { href: '/conditions/substance-use', label: 'Substance Use', desc: 'Support for alcohol and substance use' },
  { href: '/conditions/burnout-life-transitions', label: 'Burnout & Life Transitions', desc: 'Stress, burnout, and big changes' },
  { href: '/conditions/autism-spectrum', label: 'Autism Spectrum Support', desc: 'Social, communication, or behavioral challenges' },
] as const

const AUDIENCES = [
  { href: '/who-we-help/teens', label: `Teens ${AGES.minimum}+` },
  { href: '/who-we-help/adults', label: 'Adults' },
  { href: '/who-we-help/older-adults', label: 'Older adults' },
] as const

// Her own phrases (Headway profile), quoted exactly.
const APPROACH_LINE = `She describes her approach as \u201c${PROVIDER.approach[0]},\u201d and her style as \u201c${PROVIDER.approach[1]},\u201d balancing emotional support with \u201c${PROVIDER.approach[2]}.\u201d`

// The practice's own three steps, reworded around a paid intake (no named discovery call).
const STEPS: { title: string; body: ReactNode }[] = [
  {
    title: 'Reach out and book',
    body: (
      <>
        Book with your insurance through Alma or Headway, or send a request for a self-pay appointment. Questions
        first? Call{' '}
        <a href={CONTACT.phoneHref} className="font-semibold text-accent underline-offset-4 hover:underline">
          {CONTACT.phone}
        </a>
        .
      </>
    ),
  },
  {
    title: 'Your psychiatric evaluation',
    body: 'Jessica takes time to learn your history, symptoms, and goals. Together you build a personalized treatment plan, not a one-size-fits-all approach.',
  },
  {
    title: 'Ongoing sessions and support',
    body: "Regular virtual follow-ups to monitor your progress and adjust your plan when needed. You're not left to figure things out alone.",
  },
]

/* ------------------------------------------------------------------ */
/* Page                                                                */
/* ------------------------------------------------------------------ */

export default function HomePage() {
  return (
    <>
      {/* 1. HERO: text on the left over a cream scrim, photo subject on the right (lg+).
          Phones and tablets stack the text above the photo. */}
      <section
        aria-labelledby="home-hero-heading"
        className="relative isolate overflow-hidden bg-cream lg:flex lg:min-h-[40rem] lg:items-center xl:min-h-[44rem]"
      >
        <div className="relative mx-auto w-full max-w-7xl px-4 pb-10 pt-12 sm:px-6 sm:pb-12 sm:pt-16 lg:px-8 lg:py-24">
          <div className="animate-fade-up max-w-xl lg:max-w-[33rem] xl:max-w-xl">
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-accent sm:text-[13px]">
              Online psychiatric care across {CONTACT.state}
            </p>
            <h1
              id="home-hero-heading"
              className="font-cormorant text-[2.5rem] font-semibold leading-[1.05] text-primary sm:text-[3.25rem] lg:text-[3.5rem] xl:text-[4rem]"
            >
              Personalized Psychiatry, From the Comfort of Home
            </h1>
            <p className="mt-5 text-lg leading-relaxed text-ink/80">
              Work one-on-one with <strong className="font-semibold text-ink">{PROVIDER.byline}</strong> for
              psychiatric evaluations, medication management, and supportive therapy through secure video visits. Care
              is available for teens {AGES.minimum}+ and adults throughout {CONTACT.state}, with insurance through Alma
              and Headway or self-pay.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <Link href={NAV_CTA.href} className={`${BUTTON.base} ${BUTTON.lg} ${BUTTON.accent}`}>
                {NAV_CTA.label}
                <ArrowRight />
              </Link>
              <Link href="/insurance" className={`${BUTTON.base} ${BUTTON.lg} ${BUTTON.outlineDark}`}>
                Insurance &amp; Pricing
              </Link>
            </div>

            <ul className="mt-8 grid grid-cols-2 gap-x-4 gap-y-3 border-t border-primary/10 pt-6">
              {TRUST.map(({ label, Icon }) => (
                <li key={label} className="flex items-center gap-2.5 text-[13px] font-medium leading-snug text-ink sm:text-sm">
                  <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-white text-accent shadow-sm ring-1 ring-border sm:h-9 sm:w-9">
                    <Icon className="h-4 w-4 sm:h-[18px] sm:w-[18px]" />
                  </span>
                  {label}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="relative h-72 sm:h-[26rem] lg:absolute lg:inset-0 lg:-z-10 lg:h-auto">
          <Image
            src={HERO_IMAGE.src}
            alt={HERO_IMAGE.alt}
            fill
            priority
            sizes="100vw"
            className="object-cover object-[65%_15%]"
          />
          {/* Phones/tablets: blend the photo into the cream text block above it. */}
          <div aria-hidden="true" className="absolute inset-x-0 top-0 h-16 bg-gradient-to-b from-cream to-cream/0 lg:hidden" />
          {/* Desktop: soft cream scrim from the left, clear over the subject on the right. */}
          <div
            aria-hidden="true"
            className="absolute inset-0 hidden bg-gradient-to-r from-cream from-15% via-cream/85 via-40% to-cream/0 to-70% lg:block"
          />
        </div>
      </section>

      {/* 2. MEET JESSICA: straight after the hero, the provider and the trust signals */}
      <section className="overflow-hidden bg-white py-16 sm:py-24" aria-labelledby="home-jessica-heading">
        <Container>
          <div className="grid items-center gap-14 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] lg:gap-16">
            <div className="relative mx-auto h-72 w-72 sm:h-96 sm:w-96 lg:h-[26rem] lg:w-[26rem]">
              <div aria-hidden="true" className="absolute -inset-3 rounded-full border border-accent/20 sm:-inset-4" />
              <div className="absolute inset-0 overflow-hidden rounded-full bg-gradient-to-b from-peach to-light">
                <Image
                  src={JESSICA_PHOTOS.camelBlazer.src}
                  alt={JESSICA_PHOTOS.camelBlazer.alt}
                  fill
                  sizes="(min-width: 1024px) 416px, (min-width: 640px) 384px, 288px"
                  className="object-cover object-top"
                />
              </div>
              <p className="absolute -bottom-4 left-1/2 flex -translate-x-1/2 items-center gap-2 whitespace-nowrap rounded-full border border-border bg-white px-4 py-2 text-[13px] font-medium text-ink shadow-md">
                <VideoIcon className="h-4 w-4 text-accent" />
                {CONTACT.serviceArea}
              </p>
            </div>

            <div>
              <SectionHeading id="home-jessica-heading" eyebrow="Meet your provider" title={`Meet ${PROVIDER.name}`} />
              <p className="mt-3 text-sm font-semibold uppercase tracking-[0.12em] text-sage">
                {PROVIDER.credentials} <span aria-hidden="true">·</span> {PROVIDER.title}
              </p>

              <blockquote className="mt-7 border-l-2 border-accent/40 pl-5 font-cormorant text-[1.45rem] italic leading-snug text-ink sm:text-[1.7rem]">
                <p>&ldquo;{PROVIDER.ownWords}&rdquo;</p>
              </blockquote>

              <p className="mt-6 text-lg leading-relaxed text-ink/80">{APPROACH_LINE}</p>

              <ul className="mt-6 space-y-3">
                {[PROVIDER.licensure, PROVIDER.education].map((line) => (
                  <li key={line} className="flex items-start gap-3 leading-relaxed text-ink/85">
                    <CheckIcon className="mt-1 h-4 w-4 shrink-0 text-sage" />
                    {line}
                  </li>
                ))}
              </ul>

              <Link href="/about" className={`${BUTTON.base} ${BUTTON.md} ${BUTTON.outlineDark} mt-8`}>
                More about Jessica
                <ArrowRight />
              </Link>
            </div>
          </div>
        </Container>
      </section>

      {/* 3. SERVICES */}
      <section className="bg-cream py-16 sm:py-24" aria-labelledby="home-services-heading">
        <Container>
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <SectionHeading
              id="home-services-heading"
              eyebrow="Services"
              title="How Jessica can help"
              intro="Psychiatric evaluation, medication management, and supportive therapy, all by secure video. Medication is optional."
            />
            <Link
              href="/services"
              className="inline-flex shrink-0 items-center gap-1.5 font-semibold text-accent underline-offset-4 hover:underline"
            >
              See all services
              <ArrowRight />
            </Link>
          </div>

          <ul className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-6">
            {SERVICES.map((s, i) => {
              const img = PAGE_IMAGES[s.href]
              return (
                <li key={s.href} className={`animate-fade-up ${SERVICE_SPANS[i]}`}>
                  <Link
                    href={s.href}
                    className="group flex h-full flex-col overflow-hidden rounded-3xl border border-border bg-white shadow-[0_1px_2px_rgba(46,15,19,0.04),0_12px_32px_-16px_rgba(46,15,19,0.18)] transition duration-300 hover:-translate-y-0.5 hover:shadow-[0_2px_4px_rgba(46,15,19,0.05),0_20px_40px_-18px_rgba(46,15,19,0.28)]"
                  >
                    <div className={`relative h-56 w-full overflow-hidden bg-light ${i < 2 ? 'lg:h-64' : ''}`}>
                      {img && (
                        <Image
                          src={img.src}
                          alt=""
                          fill
                          sizes="(min-width: 1024px) 40vw, (min-width: 640px) 50vw, 100vw"
                          className="object-cover object-[center_15%] transition-transform duration-500 group-hover:scale-[1.03]"
                        />
                      )}
                    </div>
                    <div className="flex flex-1 flex-col p-6">
                      <h3 className="font-cormorant text-2xl font-semibold leading-tight text-primary">{s.title}</h3>
                      <p className="mt-2 flex-1 text-[15px] leading-relaxed text-muted">{s.body}</p>
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

      {/* 4. CONDITIONS */}
      <section className="bg-light py-16 sm:py-24" aria-labelledby="home-conditions-heading">
        <Container>
          <SectionHeading
            id="home-conditions-heading"
            eyebrow="Conditions"
            title="Conditions we treat"
            intro="Evaluation and treatment for anxiety, depression, ADHD, mood disorders, trauma, and more, for adolescents and adults."
            align="center"
          />

          <ul className="mt-12 grid grid-cols-1 gap-3 min-[420px]:grid-cols-2 lg:grid-cols-5 lg:gap-4">
            {CONDITIONS.map((c) => (
              <li key={c.label}>
                <Link
                  href={c.href}
                  className="group flex h-full flex-col rounded-2xl border border-border bg-white p-5 transition duration-300 hover:-translate-y-0.5 hover:border-accent/40 hover:shadow-md"
                >
                  <span className="flex items-start justify-between gap-2">
                    <span className="font-cormorant text-xl font-semibold leading-tight text-primary">{c.label}</span>
                    <ArrowRight className="mt-1 h-4 w-4 shrink-0 text-accent opacity-60 transition group-hover:translate-x-0.5 group-hover:opacity-100" />
                  </span>
                  <span className="mt-1.5 text-sm leading-snug text-muted">{c.desc}</span>
                </Link>
              </li>
            ))}
          </ul>

          <div className="mt-10 flex flex-col items-center gap-5">
            <Link
              href="/conditions"
              className="inline-flex items-center gap-1.5 font-semibold text-accent underline-offset-4 hover:underline"
            >
              See all conditions
              <ArrowRight />
            </Link>
            <div className="flex flex-wrap items-center justify-center gap-2 text-sm text-muted">
              <span className="mr-1">Care for</span>
              {AUDIENCES.map((a) => (
                <Link
                  key={a.href}
                  href={a.href}
                  className="rounded-full border border-border bg-white px-4 py-1.5 font-medium text-ink transition-colors hover:border-accent/40 hover:text-accent"
                >
                  {a.label}
                </Link>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* 5. HOW IT WORKS */}
      <section className="bg-white py-16 sm:py-24" aria-labelledby="home-steps-heading">
        <Container>
          <SectionHeading
            id="home-steps-heading"
            eyebrow="How it works"
            title="Getting started, step by step"
            intro="Three steps, all online, all by secure video."
            align="center"
          />

          <ol className="mt-12 grid gap-6 md:grid-cols-3">
            {STEPS.map((s, i) => (
              <li key={s.title} className="animate-fade-up relative flex flex-col rounded-3xl border border-border bg-cream p-7 sm:p-8">
                <span className="grid h-12 w-12 place-items-center rounded-full bg-peach font-cormorant text-2xl font-semibold text-primary">
                  {i + 1}
                </span>
                <h3 className="mt-5 font-cormorant text-2xl font-semibold leading-tight text-primary">{s.title}</h3>
                <p className="mt-3 leading-relaxed text-ink/80">{s.body}</p>
              </li>
            ))}
          </ol>

          <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link href={NAV_CTA.href} className={`${BUTTON.base} ${BUTTON.lg} ${BUTTON.accent}`}>
              {NAV_CTA.label}
              <ArrowRight />
            </Link>
            <Link href="/new-patients" className={`${BUTTON.base} ${BUTTON.lg} ${BUTTON.outlineDark}`}>
              What to expect at your first visit
            </Link>
          </div>
        </Container>
      </section>

      {/* 6. SERVICES & PRICING (self-pay), followed by the three ways to book */}
      <section className="bg-cream py-16 sm:py-24" aria-labelledby="home-pricing-heading">
        <Container>
          <SectionHeading
            id="home-pricing-heading"
            eyebrow="Self-pay rates"
            title="Services & pricing"
            intro="Paying directly? These are the self-pay rates for each visit."
            align="center"
          />

          <div className="mx-auto mt-12 grid max-w-5xl gap-6 md:grid-cols-2">
            {[PRICING.initialEvaluation, PRICING.followUp].map((p) => (
              <article
                key={p.name}
                className="flex h-full flex-col rounded-3xl border border-border bg-white p-7 shadow-[0_1px_2px_rgba(46,15,19,0.04),0_12px_32px_-16px_rgba(46,15,19,0.18)] sm:p-8"
              >
                <div className="flex items-start justify-between gap-4 border-b border-border pb-5">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">Self-pay</p>
                    <h3 className="mt-2 font-cormorant text-[1.75rem] font-semibold leading-tight text-primary">{p.name}</h3>
                  </div>
                  <p className="font-cormorant text-5xl font-semibold leading-none text-primary">{p.price}</p>
                </div>
                <p className="mt-5 leading-relaxed text-ink/80">{p.description}</p>
              </article>
            ))}
          </div>

          <div className="mx-auto mt-8 max-w-5xl rounded-2xl border border-border bg-white/70 p-5 sm:p-6">
            <ul className="grid gap-3 sm:grid-cols-2">
              <li className="flex items-start gap-3 text-ink/85">
                <CheckIcon className="mt-1 h-4 w-4 shrink-0 text-sage" />
                {PRICING.slidingScale}
              </li>
              <li className="flex items-start gap-3 text-ink/85">
                <CheckIcon className="mt-1 h-4 w-4 shrink-0 text-sage" />
                <span>
                  Using insurance? Book through Alma or Headway.{' '}
                  <Link href="/insurance" className="font-semibold text-accent underline-offset-4 hover:underline">
                    See plans and pricing
                  </Link>
                </span>
              </li>
            </ul>
            <p className="mt-4 border-t border-border pt-4 text-sm leading-relaxed text-muted">{PRICING.goodFaithEstimate}</p>
          </div>
        </Container>
      </section>

      <BookingOptions />

      {/* 7. REVIEWS */}
      <div id="reviews">
        <Reviews />
      </div>

      {/* 8. FAQ */}
      <section className="bg-white py-16 sm:py-24" aria-labelledby="home-faq-heading">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[minmax(0,2fr)_minmax(0,3fr)] lg:gap-16">
            <div className="lg:sticky lg:top-28 lg:self-start">
              <SectionHeading
                id="home-faq-heading"
                eyebrow="FAQ"
                title="Common questions"
                intro="Straight answers about telehealth visits, medication, and what a psychiatric nurse practitioner does."
              />
              <Link
                href="/faq"
                className="mt-6 inline-flex items-center gap-1.5 font-semibold text-accent underline-offset-4 hover:underline"
              >
                See all questions
                <ArrowRight />
              </Link>
            </div>
            <FaqList faqs={PRACTICE_FAQS} withSchema />
          </div>
        </Container>
      </section>

      {/* 9. CRISIS + CLOSING CTA */}
      <section className="bg-cream pt-16 sm:pt-20" aria-label="Crisis information">
        <Container size="medium">
          <CrisisNotice />
        </Container>
      </section>

      <CtaBand
        heading="Ready to take the first step?"
        body={`Book with your insurance through Alma or Headway, or request a self-pay visit. Every visit is by secure video, for patients in ${CONTACT.state}.`}
      />
    </>
  )
}

/* ------------------------------------------------------------------ */
/* Local icons (decorative; the list item text carries the meaning)    */
/* ------------------------------------------------------------------ */

function AwardIcon({ className = 'h-5 w-5' }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} aria-hidden="true" className={className}>
      <circle cx="12" cy="9" r="5.25" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M8.6 13.1L7.5 21l4.5-2.25L16.5 21l-1.1-7.9" />
    </svg>
  )
}

function ShieldCheckIcon({ className = 'h-5 w-5' }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} aria-hidden="true" className={className}>
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 3l7.5 3v5.25c0 4.6-3.1 8.4-7.5 9.75-4.4-1.35-7.5-5.15-7.5-9.75V6L12 3z"
      />
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2.1 2.1L15.2 10" />
    </svg>
  )
}

function UsersIcon({ className = 'h-5 w-5' }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} aria-hidden="true" className={className}>
      <circle cx="9" cy="8" r="3.25" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M3 19.5c0-3.3 2.7-5.5 6-5.5s6 2.2 6 5.5" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M15.5 4.9a3.25 3.25 0 010 6.2M17.5 14.3c2.1.6 3.5 2.5 3.5 5.2" />
    </svg>
  )
}
