import Link from 'next/link'
import type { Metadata } from 'next'
import type { ReactNode } from 'react'
import {
  AGES,
  BOOKING,
  CONTACT,
  NAV_CTA,
  NO_MEDICAL_ADVICE,
  PRACTICE_FAQS,
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
import CrisisNotice from '@/components/site/CrisisNotice'
import CtaBand from '@/components/site/CtaBand'
import SmartLink from '@/components/site/SmartLink'
import { ArrowRight, CheckIcon, ExternalIcon, PhoneIcon, VideoIcon } from '@/components/site/icons'

const PATH = '/new-patients'
const HERO = PAGE_IMAGES[PATH]
const TITLE = withBrand('Your First Telehealth Psychiatric Visit')
const DESCRIPTION = `New to ${SITE_NAME}? See how to book, what happens at your first telehealth psychiatric visit, what to have ready, and how follow-up care works in CT.`

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

const STEPS: { title: string; body: ReactNode }[] = [
  {
    title: 'Choose how to book',
    body: (
      <>
        Using insurance? Book through{' '}
        <SmartLink href={BOOKING.alma.href} className={`inline-flex items-center gap-1 ${LINK}`}>
          Alma
          <ExternalIcon className="h-3 w-3" />
        </SmartLink>{' '}
        or{' '}
        <SmartLink href={BOOKING.headway.href} className={`inline-flex items-center gap-1 ${LINK}`}>
          Headway
          <ExternalIcon className="h-3 w-3" />
        </SmartLink>
        , whichever lists your plan. Paying directly?{' '}
        <Link href={BOOKING.request.href} className={LINK}>
          Send a self-pay request
        </Link>{' '}
        or call{' '}
        <a href={CONTACT.phoneHref} className={LINK}>
          {CONTACT.phone}
        </a>
        .
      </>
    ),
  },
  {
    title: 'Get ready for your visit',
    body: (
      <>
        Gather your insurance card (if you&rsquo;re using insurance), a list of your medications, and your
        treatment history. Plan to be somewhere private.{' '}
        <a href="#what-to-have-ready" className={LINK}>
          See the checklist
        </a>
        .
      </>
    ),
  },
  {
    title: `Meet ${FIRST_NAME} by video`,
    body: `Your first visit is a full psychiatric evaluation. You leave with a clearer picture of next steps, and ${FIRST_NAME} follows up with you by video from there.`,
  },
]

const READY = [
  {
    title: 'Your insurance card',
    body: 'If you are using insurance, keep your card or plan details handy when you book and at your visit.',
  },
  {
    title: 'Your current medications',
    body: 'A list of what you take now, plus any medications you have tried before and how they worked for you.',
  },
  {
    title: 'Your treatment history',
    body: 'Any past diagnoses, therapy, or psychiatric care. Rough dates are fine.',
  },
  {
    title: 'A private space and a device',
    body: 'A quiet spot where you can talk openly, and a phone, tablet, or computer with a camera, a microphone, and a steady internet connection.',
  },
]

// What the first appointment covers, in Jessica's words (Headway profile).
const EVAL_TOPICS = [
  'What brings you in',
  'Your current concerns and symptoms',
  'Relevant medical and mental health history',
  'Lifestyle factors',
  'Any goals you have for treatment',
]

// Answers are the practice's own (PRACTICE_FAQS) or built from lib/site.ts values (FACTS.md section 10).
const FAQS = [
  PRACTICE_FAQS[0],
  {
    q: 'How long is the first visit?',
    a: `${BOOKING.alma.note} If you book another way, ask about visit length when you schedule.`,
  },
  { q: 'What ages do you see?', a: `${FIRST_NAME} sees ${AGES.short.toLowerCase()}.` },
  {
    q: 'Do you take insurance?',
    a: 'Yes, by booking through Alma or Headway. Plans are listed on our Insurance & Pricing page.',
  },
  {
    q: 'How much does it cost?',
    a: `Self-pay visits are ${PRICING.initialEvaluation.price} for the initial evaluation and ${PRICING.followUp.price} for follow-up and medication management. With insurance through Alma or Headway, your cost depends on your plan.`,
  },
  PRACTICE_FAQS[5],
  PRACTICE_FAQS[2],
]

/* ------------------------------------------------------------------ */
/* Page                                                                */
/* ------------------------------------------------------------------ */

export default function NewPatientsPage() {
  return (
    <main>
      <PageHero
        priority
        eyebrow="Your First Visit"
        title="Your First Visit: Getting Started With Telehealth Psychiatric Care"
        subtitle={`How to book, what to have ready, and what happens at your first appointment with ${FIRST_NAME}. Every visit is by secure video, for patients in ${CONTACT.state}.`}
        image={HERO}
        crumbs={[{ label: 'Home', href: '/' }, { label: 'Your First Visit' }]}
        primaryCta={NAV_CTA}
        secondaryCta={{ label: 'Insurance & Pricing', href: '/insurance' }}
      />

      {/* 1. STEPS */}
      <section className="bg-white py-16 sm:py-24" aria-labelledby="np-steps-heading">
        <Container>
          <SectionHeading
            id="np-steps-heading"
            eyebrow="Getting started"
            title="Three steps to your first visit"
            intro="Everything happens online, and every visit is by secure video."
            align="center"
          />

          <ol className="mt-12 grid gap-6 md:grid-cols-3">
            {STEPS.map((s, i) => (
              <li key={s.title} className="flex flex-col rounded-3xl border border-border bg-cream p-7 sm:p-8">
                <span className="grid h-12 w-12 place-items-center rounded-full bg-peach font-cormorant text-2xl font-semibold text-primary">
                  {i + 1}
                </span>
                <h3 className="mt-5 font-cormorant text-2xl font-semibold leading-tight text-primary">{s.title}</h3>
                <p className="mt-3 leading-relaxed text-ink/80">{s.body}</p>
              </li>
            ))}
          </ol>
        </Container>
      </section>

      {/* 2. WHAT TO HAVE READY */}
      <section
        id="what-to-have-ready"
        className="scroll-mt-24 bg-cream py-16 sm:py-24"
        aria-labelledby="np-ready-heading"
      >
        <Container>
          <div className="grid gap-10 lg:grid-cols-12 lg:gap-14">
            <div className="lg:col-span-5">
              <SectionHeading
                id="np-ready-heading"
                eyebrow="Before your visit"
                title="What to have ready"
                intro="A little preparation helps your first visit go smoothly."
              />
            </div>
            <ul className="grid gap-4 sm:grid-cols-2 lg:col-span-7">
              {READY.map((r) => (
                <li key={r.title} className="flex h-full flex-col rounded-3xl border border-border bg-white p-6">
                  <span className="grid h-9 w-9 place-items-center rounded-full bg-light text-accent">
                    <CheckIcon className="h-4 w-4" />
                  </span>
                  <h3 className="mt-4 text-[17px] font-semibold leading-snug text-ink">{r.title}</h3>
                  <p className="mt-2 text-[15px] leading-relaxed text-muted">{r.body}</p>
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </section>

      {/* 3. THE EVALUATION */}
      <section className="bg-white py-16 sm:py-24" aria-labelledby="np-eval-heading">
        <Container>
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
            <div>
              <SectionHeading id="np-eval-heading" eyebrow="Your first appointment" title="What happens at your evaluation" />
              <p className="mt-6 text-lg leading-relaxed text-ink/80">{PRICING.initialEvaluation.description}</p>

              <h3 className="mt-8 text-[17px] font-semibold text-ink">What you&rsquo;ll talk about</h3>
              <ul className="mt-4 space-y-3">
                {EVAL_TOPICS.map((t) => (
                  <li key={t} className="flex items-start gap-3 leading-relaxed text-ink/85">
                    <CheckIcon className="mt-1 h-4 w-4 shrink-0 text-sage" />
                    {t}
                  </li>
                ))}
              </ul>

              <div className="mt-8 flex flex-wrap gap-3">
                <p className="inline-flex items-center gap-2 rounded-full border border-border bg-cream px-4 py-2 text-sm text-ink">
                  <VideoIcon className="h-4 w-4 text-accent" />
                  {BOOKING.alma.note}
                </p>
                <p className="inline-flex items-center gap-2 rounded-full border border-border bg-cream px-4 py-2 text-sm text-ink">
                  Self-pay: <strong className="font-semibold text-primary">{PRICING.initialEvaluation.price}</strong>
                </p>
              </div>
            </div>

            <div className="space-y-6">
              <figure className="rounded-3xl border border-border bg-light/60 p-7 sm:p-8">
                <figcaption className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">
                  In {FIRST_NAME}&rsquo;s words
                </figcaption>
                <blockquote className="mt-4 space-y-4 font-cormorant text-[1.35rem] leading-snug text-ink">
                  <p>
                    &ldquo;I know starting therapy or psychiatric care can feel intimidating, so I approach each session
                    with compassion, curiosity, and openness.&rdquo;
                  </p>
                  <p>
                    &ldquo;If medication management is appropriate, we will discuss options thoughtfully, including
                    benefits, risks, and your comfort level with treatment. I believe clients should feel informed and
                    actively involved in decisions about their care.&rdquo;
                  </p>
                </blockquote>
              </figure>

              <div className="rounded-3xl border border-border bg-white p-7 shadow-[0_1px_2px_rgba(46,15,19,0.04),0_12px_32px_-16px_rgba(46,15,19,0.18)] sm:p-8">
                <h3 className="font-cormorant text-2xl font-semibold leading-tight text-primary">What you&rsquo;ll leave with</h3>
                <p className="mt-3 leading-relaxed text-ink/80">
                  A clearer understanding of possible next steps, initial treatment goals, and practical strategies or
                  recommendations to begin working toward feeling better.
                </p>
                <Link
                  href="/services/psychiatric-evaluation"
                  className={`mt-5 inline-flex items-center gap-1.5 ${LINK}`}
                >
                  More about the psychiatric evaluation
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* 4. AFTER THE FIRST VISIT */}
      <section className="bg-light py-16 sm:py-24" aria-labelledby="np-after-heading">
        <Container>
          <SectionHeading
            id="np-after-heading"
            eyebrow="After your first visit"
            title="Ongoing care, at your pace"
            intro={`${FIRST_NAME} meets with you regularly by video to monitor your progress, make adjustments, and provide continuous support.`}
            align="center"
          />

          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            <article className="flex h-full flex-col rounded-3xl border border-border bg-white p-7 sm:p-8 lg:col-span-2">
              <div className="flex flex-wrap items-start justify-between gap-4">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">Follow-up visits</p>
                  <h3 className="mt-2 font-cormorant text-[1.75rem] font-semibold leading-tight text-primary">
                    {PRICING.followUp.name}
                  </h3>
                </div>
                <p className="rounded-full bg-cream px-4 py-1.5 text-sm text-ink">
                  Self-pay <strong className="font-semibold text-primary">{PRICING.followUp.price}</strong>
                </p>
              </div>
              <p className="mt-5 flex-1 leading-relaxed text-ink/80">{PRICING.followUp.description}</p>
              <Link href="/services/medication-management" className={`mt-6 inline-flex items-center gap-1.5 ${LINK}`}>
                More about medication management
                <ArrowRight className="h-4 w-4" />
              </Link>
            </article>

            <div className="grid gap-6">
              <article className="rounded-3xl border border-border bg-white p-7">
                <h3 className="font-cormorant text-2xl font-semibold leading-tight text-primary">Medication is optional</h3>
                <p className="mt-3 leading-relaxed text-ink/80">{PRACTICE_FAQS[5].a}</p>
              </article>
              <article className="rounded-3xl border border-border bg-white p-7">
                <h3 className="font-cormorant text-2xl font-semibold leading-tight text-primary">Support in every visit</h3>
                <p className="mt-3 leading-relaxed text-ink/80">{PRACTICE_FAQS[2].a}</p>
                <Link href="/services/supportive-therapy" className={`mt-4 inline-flex items-center gap-1.5 text-sm ${LINK}`}>
                  Supportive therapy
                  <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </article>
            </div>
          </div>
        </Container>
      </section>

      {/* 5. AGES & GUARDIANS + TELEHEALTH REQUIREMENTS */}
      <section className="bg-white py-16 sm:py-24" aria-label="Ages and telehealth requirements">
        <Container>
          <div className="grid gap-6 md:grid-cols-2">
            <article className="flex h-full flex-col rounded-3xl border border-border bg-cream p-7 sm:p-9" aria-labelledby="np-ages-heading">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">Ages and guardians</p>
              <h2 id="np-ages-heading" className="mt-2 font-cormorant text-[2rem] font-semibold leading-[1.1] text-primary">
                {AGES.short}
              </h2>
              <p className="mt-4 leading-relaxed text-ink/80">
                Booking for a teen aged {AGES.minimum} to 17? Call{' '}
                <a href={CONTACT.phoneHref} className={LINK}>
                  {CONTACT.phone}
                </a>{' '}
                with any questions about how a parent or guardian takes part in booking and consent.
              </p>
              <p className="mt-4 leading-relaxed text-ink/80">{AGES.smsNote}</p>
              <div className="mt-auto flex flex-wrap gap-x-6 gap-y-2 pt-6 text-sm">
                <Link href="/who-we-help/teens" className={`inline-flex items-center gap-1.5 ${LINK}`}>
                  Care for teens
                  <ArrowRight className="h-3.5 w-3.5" />
                </Link>
                <Link href="/who-we-help/adults" className={`inline-flex items-center gap-1.5 ${LINK}`}>
                  Adults
                  <ArrowRight className="h-3.5 w-3.5" />
                </Link>
                <Link href="/who-we-help/older-adults" className={`inline-flex items-center gap-1.5 ${LINK}`}>
                  Older adults
                  <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            </article>

            <article className="flex h-full flex-col rounded-3xl border border-border bg-cream p-7 sm:p-9" aria-labelledby="np-tech-heading">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">Telehealth requirements</p>
              <h2 id="np-tech-heading" className="mt-2 font-cormorant text-[2rem] font-semibold leading-[1.1] text-primary">
                What you need for a video visit
              </h2>
              <p className="mt-4 leading-relaxed text-ink/80">
                All sessions are conducted securely through telehealth, so you get care from the comfort and privacy of
                your home.
              </p>
              <ul className="mt-5 space-y-3">
                {[
                  'A phone, tablet, or computer with a camera and a microphone',
                  'A steady internet connection',
                  'A private space where you can talk openly',
                  CONTACT.serviceArea,
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 leading-relaxed text-ink/85">
                    <CheckIcon className="mt-1 h-4 w-4 shrink-0 text-sage" />
                    {item}
                  </li>
                ))}
              </ul>
              <div className="mt-auto pt-6 text-sm">
                <Link href="/services/telepsychiatry" className={`inline-flex items-center gap-1.5 ${LINK}`}>
                  How video visits work
                  <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            </article>
          </div>
        </Container>
      </section>

      <BookingOptions heading="Ready to book?" />

      {/* 6. FAQ */}
      <section className="bg-white py-16 sm:py-24" aria-labelledby="np-faq-heading">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[minmax(0,2fr)_minmax(0,3fr)] lg:gap-16">
            <div className="lg:sticky lg:top-28 lg:self-start">
              <SectionHeading
                id="np-faq-heading"
                eyebrow="FAQ"
                title="Questions before your first visit"
                intro="Quick answers about visits, ages, insurance, and cost."
              />
              <Link href="/faq" className={`mt-6 inline-flex items-center gap-1.5 ${LINK}`}>
                See all questions
                <ArrowRight />
              </Link>
            </div>
            <FaqList faqs={FAQS} />
          </div>
        </Container>
      </section>

      {/* 7. QUESTIONS + CRISIS */}
      <section className="bg-cream pt-16 sm:pt-20" aria-label="Questions and crisis information">
        <Container size="medium" className="space-y-6">
          <div className="flex flex-col gap-4 rounded-2xl border border-border bg-white p-5 sm:flex-row sm:items-center sm:justify-between sm:p-6">
            <div>
              <p className="font-semibold text-primary">Questions before you book?</p>
              <p className="mt-1 text-sm leading-relaxed text-muted">{NO_MEDICAL_ADVICE}</p>
            </div>
            <a
              href={CONTACT.phoneHref}
              className="inline-flex shrink-0 items-center gap-2 font-semibold text-accent underline-offset-4 hover:underline"
            >
              <PhoneIcon />
              {CONTACT.phone}
            </a>
          </div>
          <CrisisNotice />
        </Container>
      </section>

      <CtaBand
        heading="Take the first step"
        body={`Book with your insurance through Alma or Headway, or request a self-pay visit. Every visit is by secure video, for patients in ${CONTACT.state}.`}
      />
    </main>
  )
}
