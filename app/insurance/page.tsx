import Link from 'next/link'
import type { Metadata } from 'next'
import {
  BOOKING,
  CONTACT,
  INSURANCE_ALMA,
  INSURANCE_AS_OF,
  INSURANCE_HEADLINE,
  INSURANCE_HEADWAY,
  NAV_CTA,
  PRICING,
  PROVIDER,
  SITE_NAME,
  withBrand,
} from '@/lib/site'
import { PAGE_IMAGES } from '@/lib/images'
import PageHero from '@/components/site/PageHero'
import Container from '@/components/site/Container'
import SectionHeading from '@/components/site/SectionHeading'
import BookingOptions from '@/components/site/BookingOptions'
import FaqList from '@/components/site/FaqList'
import CtaBand from '@/components/site/CtaBand'
import SmartLink, { BUTTON } from '@/components/site/SmartLink'
import { ArrowRight, CheckIcon, ExternalIcon, PhoneIcon } from '@/components/site/icons'

const PATH = '/insurance'
const HERO = PAGE_IMAGES[PATH]
const TITLE = withBrand('Insurance & Self-Pay Pricing, CT')
const DESCRIPTION = `Use ${INSURANCE_HEADLINE.slice(0, 3).join(', ')} and more through Alma or Headway, or self-pay: ${PRICING.initialEvaluation.price} initial evaluation and ${PRICING.followUp.price} follow-up visits.`

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: PATH },
  openGraph: {
    type: 'website',
    url: PATH,
    siteName: SITE_NAME,
    locale: 'en_US',
    title: TITLE,
    description: DESCRIPTION,
    images: [{ url: HERO.src, alt: HERO.alt }],
  },
  twitter: { card: 'summary_large_image', title: TITLE, description: DESCRIPTION, images: [HERO.src] },
}

/* ------------------------------------------------------------------ */
/* Page data                                                           */
/* ------------------------------------------------------------------ */

const FIRST_NAME = PROVIDER.name.split(' ')[0]
const LINK = 'font-semibold text-accent underline-offset-4 hover:underline'
const AS_OF_NOTE = `Plans listed as of ${INSURANCE_AS_OF}. Check your coverage on Alma or Headway before booking.`

type Platform = {
  name: string
  plans: readonly string[]
  note: string
  cta: { label: string; href: string }
  listClass: string
}

const PLATFORMS: Platform[] = [
  {
    name: 'Alma',
    plans: INSURANCE_ALMA,
    note: BOOKING.alma.note,
    cta: BOOKING.alma,
    listClass: 'sm:columns-2 sm:gap-x-6',
  },
  {
    name: 'Headway',
    plans: INSURANCE_HEADWAY,
    note: BOOKING.headway.note,
    cta: BOOKING.headway,
    listClass: '',
  },
]

const HOW_IT_WORKS = [
  {
    title: 'Find your plan',
    body: `Look for your plan in the lists above. If it appears on Alma, Headway, or both, you can use your insurance with ${FIRST_NAME} by booking through a platform that lists it.`,
  },
  {
    title: 'Check your coverage',
    body: `Open ${FIRST_NAME}’s profile on that platform and add your insurance. The platform checks your coverage and shows an estimate of what you will pay per visit.`,
  },
  {
    title: 'Book and pay there',
    body: 'Book your visit on the platform. It bills your insurance plan, and you pay any copay or coinsurance there.',
  },
]

// Built from FACTS.md section 10 (approved new answers), using lib/site.ts values.
const FAQS = [
  {
    q: 'Do you take insurance?',
    a: `Yes, by booking through Alma or Headway. The plans listed on each profile are shown on this page, as of ${INSURANCE_AS_OF}.`,
  },
  {
    q: 'How much does it cost?',
    a: `Self-pay visits are ${PRICING.initialEvaluation.price} for the initial evaluation and ${PRICING.followUp.price} for follow-up and medication management. With insurance through Alma or Headway, your cost depends on your plan.`,
  },
  { q: 'Is there a sliding scale?', a: `Yes. ${PRICING.slidingScale}` },
]

/* ------------------------------------------------------------------ */
/* Page                                                                */
/* ------------------------------------------------------------------ */

export default function InsurancePage() {
  return (
    <main>
      <PageHero
        priority
        eyebrow="Insurance & Pricing"
        title="Insurance and Self-Pay Pricing for Telehealth Psychiatry"
        subtitle={`Use your insurance by booking through Alma or Headway, or pay directly. Here are the plans listed on ${FIRST_NAME}’s profiles, plus the self-pay rates.`}
        image={HERO}
        crumbs={[{ label: 'Home', href: '/' }, { label: 'Insurance & Pricing' }]}
        primaryCta={NAV_CTA}
        secondaryCta={{ label: 'See self-pay rates', href: '#self-pay' }}
      />

      {/* 1. PLANS: Alma and Headway, verbatim */}
      <section className="bg-white py-16 sm:py-24" aria-labelledby="ins-plans-heading">
        <Container>
          <SectionHeading
            id="ins-plans-heading"
            eyebrow="Using insurance"
            title="Use your insurance through Alma or Headway"
            intro={`${SITE_NAME} works with two booking platforms for insurance. Find your plan below, then book through the platform that lists it.`}
          />

          <p className="mt-6 flex flex-wrap items-center gap-2 text-sm text-muted">
            <span className="mr-1 font-medium text-ink">On both profiles:</span>
            {INSURANCE_HEADLINE.map((p) => (
              <span key={p} className="rounded-full border border-border bg-cream px-3 py-1 text-[13px] text-ink">
                {p}
              </span>
            ))}
          </p>

          <div className="mt-10 grid gap-6 lg:grid-cols-[minmax(0,3fr)_minmax(0,2fr)]">
            {PLATFORMS.map((p) => (
              <article
                key={p.name}
                aria-labelledby={`ins-${p.name.toLowerCase()}-heading`}
                className="flex h-full flex-col rounded-3xl border border-border bg-white p-6 shadow-[0_1px_2px_rgba(46,15,19,0.04),0_12px_32px_-16px_rgba(46,15,19,0.18)] sm:p-8"
              >
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">Insurance</p>
                <h3
                  id={`ins-${p.name.toLowerCase()}-heading`}
                  className="mt-2 font-cormorant text-[1.75rem] font-semibold leading-tight text-primary"
                >
                  Through {p.name}
                </h3>
                <p className="mt-1 text-sm text-muted">Plans listed on {FIRST_NAME}&rsquo;s {p.name} profile</p>

                <ul className={`mt-6 flex-1 ${p.listClass}`}>
                  {p.plans.map((plan) => (
                    <li key={plan} className="flex break-inside-avoid items-start gap-2.5 py-1.5 text-[15px] leading-snug text-ink">
                      <CheckIcon className="mt-0.5 h-4 w-4 shrink-0 text-sage" />
                      {plan}
                    </li>
                  ))}
                </ul>

                <div className="mt-6 border-t border-border pt-6">
                  <p className="text-sm leading-relaxed text-muted">{p.note}</p>
                  <SmartLink href={p.cta.href} className={`${BUTTON.base} ${BUTTON.md} ${BUTTON.accent} mt-4 w-full sm:w-auto`}>
                    {p.cta.label}
                    <ExternalIcon />
                  </SmartLink>
                </div>
              </article>
            ))}
          </div>

          <p role="note" className="mt-8 rounded-2xl border border-border bg-cream px-5 py-4 text-sm leading-relaxed text-ink/85 sm:px-6">
            {AS_OF_NOTE}
          </p>
        </Container>
      </section>

      {/* 2. HOW USING INSURANCE WORKS */}
      <section className="bg-cream py-16 sm:py-24" aria-labelledby="ins-how-heading">
        <Container>
          <SectionHeading
            id="ins-how-heading"
            eyebrow="How it works"
            title="How using insurance works"
            intro="Alma and Headway handle the insurance side, so booking with your plan takes three steps."
            align="center"
          />

          <ol className="mt-12 grid gap-6 md:grid-cols-3">
            {HOW_IT_WORKS.map((s, i) => (
              <li key={s.title} className="flex flex-col rounded-3xl border border-border bg-white p-7 sm:p-8">
                <span className="grid h-12 w-12 place-items-center rounded-full bg-peach font-cormorant text-2xl font-semibold text-primary">
                  {i + 1}
                </span>
                <h3 className="mt-5 font-cormorant text-2xl font-semibold leading-tight text-primary">{s.title}</h3>
                <p className="mt-3 leading-relaxed text-ink/80">{s.body}</p>
              </li>
            ))}
          </ol>

          <div className="mx-auto mt-8 flex max-w-5xl flex-col gap-4 rounded-3xl border border-border bg-white p-6 sm:flex-row sm:items-center sm:justify-between sm:p-8">
            <div className="max-w-2xl">
              <h3 className="font-cormorant text-2xl font-semibold leading-tight text-primary">Don&rsquo;t see your plan?</h3>
              <p className="mt-2 leading-relaxed text-ink/80">
                You can still see {FIRST_NAME} as a self-pay patient. {PRICING.slidingScale} Questions about your
                options? Call{' '}
                <a href={CONTACT.phoneHref} className={LINK}>
                  {CONTACT.phone}
                </a>
                .
              </p>
            </div>
            <a href="#self-pay" className={`${BUTTON.base} ${BUTTON.md} ${BUTTON.outlineDark} shrink-0`}>
              Self-pay rates
              <ArrowRight />
            </a>
          </div>
        </Container>
      </section>

      {/* 3. SELF-PAY */}
      <section id="self-pay" className="scroll-mt-24 bg-white py-16 sm:py-24" aria-labelledby="ins-selfpay-heading">
        <Container>
          <SectionHeading
            id="ins-selfpay-heading"
            eyebrow="Self-pay"
            title="Self-pay rates"
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

          <div className="mx-auto mt-8 max-w-5xl rounded-2xl border border-border bg-cream p-5 sm:p-6">
            <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
              <p className="flex items-start gap-3 text-ink/85">
                <CheckIcon className="mt-1 h-4 w-4 shrink-0 text-sage" />
                {PRICING.slidingScale}
              </p>
              <div className="flex flex-col gap-3 sm:flex-row">
                <Link href={BOOKING.request.href} className={`${BUTTON.base} ${BUTTON.sm} ${BUTTON.accent}`}>
                  {BOOKING.request.label}
                </Link>
                <a href={CONTACT.phoneHref} className={`${BUTTON.base} ${BUTTON.sm} ${BUTTON.outlineDark}`}>
                  <PhoneIcon />
                  Call {CONTACT.phone}
                </a>
              </div>
            </div>
          </div>

          <div
            role="note"
            aria-labelledby="ins-gfe-heading"
            className="mx-auto mt-6 max-w-5xl rounded-2xl border border-accent/25 border-l-4 border-l-accent bg-white p-5 sm:p-6"
          >
            <p id="ins-gfe-heading" className="font-semibold text-primary">
              Good Faith Estimate
            </p>
            <p className="mt-1 leading-relaxed text-ink/85">{PRICING.goodFaithEstimate}</p>
          </div>
        </Container>
      </section>

      <BookingOptions heading="Ready to book?" />

      {/* 4. FAQ */}
      <section className="bg-white py-16 sm:py-24" aria-labelledby="ins-faq-heading">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[minmax(0,2fr)_minmax(0,3fr)] lg:gap-16">
            <div className="lg:sticky lg:top-28 lg:self-start">
              <SectionHeading
                id="ins-faq-heading"
                eyebrow="FAQ"
                title="Insurance and cost questions"
                intro="Short answers about insurance, self-pay rates, and the sliding scale."
              />
              <Link href="/faq" className={`mt-6 inline-flex items-center gap-1.5 ${LINK}`}>
                See all questions
                <ArrowRight />
              </Link>
            </div>
            <FaqList faqs={FAQS} withSchema />
          </div>
        </Container>
      </section>

      <CtaBand
        heading="Ready to take the first step?"
        body={`Book with your insurance through Alma or Headway, or request a self-pay visit. Every visit is by secure video, for patients in ${CONTACT.state}.`}
      />
    </main>
  )
}
