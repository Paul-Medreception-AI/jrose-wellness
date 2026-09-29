import Image from 'next/image'
import Link from 'next/link'
import type { Metadata } from 'next'
import { AGES, CONTACT, NAV_CTA, PRACTICE_FAQS, PROVIDER, SITE_NAME, withBrand } from '@/lib/site'
import { JESSICA_PHOTOS, PAGE_IMAGES } from '@/lib/images'
import PageHero from '@/components/site/PageHero'
import Container from '@/components/site/Container'
import SectionHeading from '@/components/site/SectionHeading'
import Reviews from '@/components/site/Reviews'
import CrisisNotice from '@/components/site/CrisisNotice'
import CtaBand from '@/components/site/CtaBand'
import { BUTTON } from '@/components/site/SmartLink'
import { ArrowRight, CheckIcon, VideoIcon } from '@/components/site/icons'

const PATH = '/about'
// The About page leads with Jessica herself (navy-blazer photo, 900px original); the white-coat
// studio portrait stays in the intro below so the page never repeats a photo.
const HERO = { src: JESSICA_PHOTOS.navyBlazer.src, alt: JESSICA_PHOTOS.navyBlazer.alt }
const TITLE = withBrand(PROVIDER.byline)
const DESCRIPTION = `Meet ${PROVIDER.byline}, founder of ${SITE_NAME}: a board-certified psychiatric nurse practitioner offering telehealth care in ${CONTACT.state}.`

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: PATH },
  openGraph: {
    type: 'profile',
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
/* Page data (every fact comes from lib/site.ts; quotes are her own    */
/* words from her Headway profile, FACTS.md section 1)                 */
/* ------------------------------------------------------------------ */

const FIRST_NAME = PROVIDER.name.split(' ')[0]

// "Master of Science in Nursing, Pace University" (PROVIDER.education without the abbreviation).
const EDUCATION = PROVIDER.education.replace(/\s*\(MSN\)/, '')

// The letters in PROVIDER.credentials, spelled out. FNP carries no issuer and no "-BC" suffix
// (the certifying body is not verified; FACTS.md section 1).
const CREDENTIAL_NAMES: Record<string, string> = {
  MSN: EDUCATION,
  'PMHNP-BC': 'Psychiatric-Mental Health Nurse Practitioner, Board Certified',
  FNP: 'Family Nurse Practitioner',
}
const CREDENTIALS = PROVIDER.credentials.split(', ').map((abbr) => ({ abbr, name: CREDENTIAL_NAMES[abbr] ?? abbr }))

const MORE_CREDENTIALS = [
  { label: 'Licensure', body: PROVIDER.licensure },
  { label: 'Additional training (certificate)', body: PROVIDER.certificate },
  { label: 'National Provider Identifier', body: `NPI ${PROVIDER.npi}` },
]

// Exact sentences from her Headway profile, built on the phrases kept in PROVIDER.approach.
const APPROACH_QUOTES = [
  { label: 'My approach', quote: `My approach is ${PROVIDER.approach[0]}.` },
  { label: 'My style', quote: `My style is ${PROVIDER.approach[1]}.` },
  {
    label: 'What clients notice',
    quote: `Many of my clients appreciate that I balance emotional support with ${PROVIDER.approach[2]}.`,
  },
]

const capitalize = (s: string) => s.charAt(0).toUpperCase() + s.slice(1)

// Her clinical interests, in her own order (Headway), each linked to the page that covers it.
const INTERESTS = [
  { label: 'anxiety', href: '/conditions/anxiety' },
  { label: 'depression', href: '/conditions/depression' },
  { label: 'ADHD', href: '/services/adhd-evaluation' },
  { label: 'stress and burnout', href: '/conditions/burnout-life-transitions' },
  { label: 'relationship challenges', href: '/services/supportive-therapy' },
  { label: 'trauma', href: '/conditions/ptsd-trauma' },
  { label: 'self-esteem', href: '/services/supportive-therapy' },
  { label: 'life transitions', href: '/conditions/burnout-life-transitions' },
] as const

const INTERESTS_SENTENCE = `My clinical interests include ${INTERESTS.slice(0, -1)
  .map((i) => i.label)
  .join(', ')}, and ${INTERESTS[INTERESTS.length - 1].label}.`

const AUDIENCE_LINKS = [
  { href: '/who-we-help/teens', label: `Teens ${AGES.minimum}+` },
  { href: '/who-we-help/adults', label: 'Adults' },
  { href: '/who-we-help/older-adults', label: 'Older adults' },
] as const

// Background only: the practice offers scheduled telehealth visits, not crisis services.
const EXPERIENCE_QUOTE =
  'I have experience working with adolescents and adults across a variety of mental health settings, including outpatient care, crisis intervention, and medication management. In addition to my psychiatric background, I also have experience as a Family Nurse Practitioner (FNP).'

const LINK = 'font-semibold text-accent underline-offset-4 hover:underline'

/* ------------------------------------------------------------------ */
/* Page                                                                */
/* ------------------------------------------------------------------ */

export default function AboutPage() {
  return (
    <main>
      <PageHero
        priority
        eyebrow="About"
        title={`About ${PROVIDER.byline}`}
        subtitle={`${PROVIDER.title} and Family Nurse Practitioner, and the founder of ${SITE_NAME}. Secure video visits for patients in ${CONTACT.state}.`}
        image={HERO}
        crumbs={[{ label: 'Home', href: '/' }, { label: 'About' }]}
        primaryCta={NAV_CTA}
        secondaryCta={{ label: 'Your first visit', href: '/new-patients' }}
      />

      {/* 1. INTRO: real photo + her own words */}
      <section className="overflow-hidden bg-white py-16 sm:py-24" aria-labelledby="about-intro-heading">
        <Container>
          <div className="grid items-center gap-12 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] lg:gap-16">
            {/* Phones and tablets already see Jessica in the hero directly above, so the second
                photo only appears in the two-column desktop layout. */}
            <div className="relative mx-auto hidden w-full max-w-sm lg:block lg:max-w-md">
              <div
                aria-hidden="true"
                className="absolute -bottom-4 -right-4 left-6 top-6 rounded-[2rem] bg-gradient-to-br from-peach to-light sm:-bottom-5 sm:-right-5"
              />
              <Image
                src={JESSICA_PHOTOS.portrait.src}
                alt={JESSICA_PHOTOS.portrait.alt}
                width={JESSICA_PHOTOS.portrait.width}
                height={JESSICA_PHOTOS.portrait.height}
                priority
                sizes="(min-width: 1024px) 448px, (min-width: 640px) 384px, calc(100vw - 2rem)"
                className="relative h-auto w-full rounded-[2rem] object-cover shadow-[0_24px_48px_-24px_rgba(46,15,19,0.45)]"
              />
            </div>

            <div>
              <SectionHeading id="about-intro-heading" eyebrow="Meet your provider" title={`Hi, I’m ${FIRST_NAME}`} />
              <p className="mt-3 text-sm font-semibold uppercase tracking-[0.12em] text-sage">
                {PROVIDER.credentials} <span aria-hidden="true">·</span> {PROVIDER.title}
              </p>

              <blockquote className="mt-7 border-l-2 border-accent/40 pl-5 font-cormorant text-[1.45rem] italic leading-snug text-ink sm:text-[1.7rem]">
                <p>&ldquo;{PROVIDER.ownWords}&rdquo;</p>
              </blockquote>

              <p className="mt-6 text-lg leading-relaxed text-ink/80">
                {FIRST_NAME} offers psychiatric evaluations, medication management, and supportive therapy by secure
                video. You can use your insurance through Alma or Headway, or pay directly.
              </p>

              <ul className="mt-6 space-y-3">
                <li className="flex items-start gap-3 leading-relaxed text-ink/85">
                  <VideoIcon className="mt-1 h-4 w-4 shrink-0 text-sage" />
                  {CONTACT.serviceArea}
                </li>
                <li className="flex items-start gap-3 leading-relaxed text-ink/85">
                  <CheckIcon className="mt-1 h-4 w-4 shrink-0 text-sage" />
                  {AGES.short}
                </li>
              </ul>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                <Link href={NAV_CTA.href} className={`${BUTTON.base} ${BUTTON.md} ${BUTTON.accent}`}>
                  {NAV_CTA.label}
                  <ArrowRight />
                </Link>
                <Link href="/insurance" className={`${BUTTON.base} ${BUTTON.md} ${BUTTON.outlineDark}`}>
                  Insurance &amp; Pricing
                </Link>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* 2. CREDENTIALS & LICENSURE */}
      <section className="bg-cream py-16 sm:py-24" aria-labelledby="about-credentials-heading">
        <Container>
          <div className="grid gap-10 lg:grid-cols-12 lg:gap-14">
            <div className="lg:col-span-5">
              <SectionHeading
                id="about-credentials-heading"
                eyebrow="Credentials"
                title="Credentials & licensure"
                intro={`What the letters after ${FIRST_NAME}’s name mean, and how she is licensed to practice in ${CONTACT.state}.`}
              />
            </div>

            <div className="lg:col-span-7">
              <dl className="divide-y divide-border overflow-hidden rounded-3xl border border-border bg-white shadow-[0_1px_2px_rgba(46,15,19,0.04),0_12px_32px_-16px_rgba(46,15,19,0.18)]">
                {CREDENTIALS.map((c) => (
                  <div key={c.abbr} className="flex flex-col gap-2 px-6 py-5 sm:flex-row sm:items-center sm:gap-6 sm:px-7">
                    <dt className="shrink-0 sm:w-32">
                      <span className="inline-block rounded-full bg-light px-3 py-1 text-sm font-semibold tracking-wide text-primary">
                        {c.abbr}
                      </span>
                    </dt>
                    <dd className="text-[17px] leading-snug text-ink">{c.name}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>

          <ul className="mt-8 grid gap-6 md:grid-cols-3">
            {MORE_CREDENTIALS.map((item) => (
              <li key={item.label} className="flex h-full flex-col rounded-3xl border border-border bg-white p-6 sm:p-7">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">{item.label}</p>
                <p className="mt-3 leading-relaxed text-ink/85">{item.body}</p>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      {/* 3. MY APPROACH (her own words) */}
      <section className="bg-white py-16 sm:py-24" aria-labelledby="about-approach-heading">
        <Container>
          <SectionHeading
            id="about-approach-heading"
            eyebrow="In her own words"
            title="My approach"
            intro={`How ${FIRST_NAME} describes working with the people she sees.`}
          />

          <ul className="mt-12 grid gap-6 md:grid-cols-3">
            {APPROACH_QUOTES.map((a) => (
              <li key={a.label} className="h-full">
                <figure className="flex h-full flex-col rounded-3xl border border-border bg-cream p-7">
                  <figcaption className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">{a.label}</figcaption>
                  <blockquote className="mt-4 flex-1 font-cormorant text-[1.45rem] leading-snug text-ink">
                    <p>&ldquo;{a.quote}&rdquo;</p>
                  </blockquote>
                </figure>
              </li>
            ))}
          </ul>

          <div className="mt-12 grid gap-10 lg:grid-cols-2 lg:gap-14">
            <div>
              <h3 className="font-cormorant text-[1.75rem] font-semibold leading-tight text-primary">What visits can include</h3>
              <p className="mt-3 leading-relaxed text-ink/80">
                &ldquo;I integrate supportive therapy, cognitive behavioral techniques, mindfulness, psychoeducation, and
                practical coping strategies tailored to each client&rsquo;s individual needs and goals.&rdquo;
              </p>
              <ul className="mt-5 flex flex-wrap gap-2">
                {PROVIDER.techniques.map((t) => (
                  <li key={t} className="rounded-full border border-border bg-light px-4 py-1.5 text-sm font-medium text-ink">
                    {capitalize(t)}
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-3xl border border-border bg-light/60 p-6 sm:p-8">
              <p className="leading-relaxed text-ink/85">
                &ldquo;I want clients to leave sessions not only feeling supported, but also with tools, insight, and a
                clearer understanding of themselves.&rdquo;
              </p>
              <ul className="mt-6 space-y-3 border-t border-border pt-6">
                <li className="flex items-start gap-3 leading-relaxed text-ink/85">
                  <CheckIcon className="mt-1 h-4 w-4 shrink-0 text-sage" />
                  {PRACTICE_FAQS[2].a}
                </li>
                <li className="flex items-start gap-3 leading-relaxed text-ink/85">
                  <CheckIcon className="mt-1 h-4 w-4 shrink-0 text-sage" />
                  {PRACTICE_FAQS[5].a}
                </li>
              </ul>
              <div className="mt-6 flex flex-wrap gap-x-6 gap-y-2 text-sm">
                <Link href="/services/supportive-therapy" className={`inline-flex items-center gap-1.5 ${LINK}`}>
                  Supportive therapy
                  <ArrowRight className="h-3.5 w-3.5" />
                </Link>
                <Link href="/services/medication-management" className={`inline-flex items-center gap-1.5 ${LINK}`}>
                  Medication management
                  <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* 4. WHO I WORK WITH */}
      <section className="bg-light py-16 sm:py-24" aria-labelledby="about-who-heading">
        <Container>
          <div className="grid gap-10 lg:grid-cols-12 lg:gap-14">
            <div className="lg:col-span-5">
              <SectionHeading id="about-who-heading" eyebrow="Who I work with" title="Teens, adults, and older adults" />
              <div className="mt-8 rounded-3xl border border-border bg-white p-6 shadow-[0_12px_32px_-18px_rgba(46,15,19,0.25)] sm:p-7">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">Ages</p>
                <p className="mt-2 font-cormorant text-[1.75rem] font-semibold leading-tight text-primary">{AGES.short}</p>
                <ul className="mt-5 flex flex-wrap gap-2">
                  {AUDIENCE_LINKS.map((a) => (
                    <li key={a.href}>
                      <Link
                        href={a.href}
                        className="inline-flex items-center gap-1.5 rounded-full border border-border bg-cream px-4 py-1.5 text-sm font-medium text-ink transition-colors hover:border-accent/40 hover:text-accent"
                      >
                        {a.label}
                        <ArrowRight className="h-3.5 w-3.5" />
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="lg:col-span-7">
              <blockquote className="border-l-2 border-accent/40 pl-5 font-cormorant text-[1.45rem] italic leading-snug text-ink sm:text-[1.65rem]">
                <p>&ldquo;{INTERESTS_SENTENCE}&rdquo;</p>
              </blockquote>

              <ul className="mt-8 flex flex-wrap gap-2">
                {INTERESTS.map((i) => (
                  <li key={i.label}>
                    <Link
                      href={i.href}
                      className="inline-flex rounded-full border border-border bg-white px-4 py-2 text-sm font-medium text-ink transition-colors hover:border-accent/40 hover:text-accent"
                    >
                      {i.label === 'ADHD' ? i.label : capitalize(i.label)}
                    </Link>
                  </li>
                ))}
              </ul>

              <p className="mt-8 text-lg leading-relaxed text-ink/80">
                {FIRST_NAME} also works with adolescents and adults dealing with insomnia, stress-related conditions,
                mood disorders, and difficulties with focus, motivation, and emotional regulation.
              </p>

              <Link href="/conditions" className={`mt-6 inline-flex items-center gap-1.5 ${LINK}`}>
                See all conditions
                <ArrowRight />
              </Link>
            </div>
          </div>
        </Container>
      </section>

      {/* 5. EXPERIENCE (background only, kept beside the crisis notice) */}
      <section className="bg-white py-16 sm:py-24" aria-labelledby="about-experience-heading">
        <Container size="medium">
          <SectionHeading id="about-experience-heading" eyebrow="Background" title="Experience, in my own words" />

          <blockquote className="mt-8 rounded-3xl border border-border bg-cream p-7 font-cormorant text-[1.35rem] leading-snug text-ink sm:p-9 sm:text-[1.5rem]">
            <p>&ldquo;{EXPERIENCE_QUOTE}&rdquo;</p>
          </blockquote>

          <ul className="mt-8 space-y-3">
            <li className="flex items-start gap-3 leading-relaxed text-ink/85">
              <CheckIcon className="mt-1 h-4 w-4 shrink-0 text-sage" />
              {PROVIDER.licensure}
            </li>
            <li className="flex items-start gap-3 leading-relaxed text-ink/85">
              <CheckIcon className="mt-1 h-4 w-4 shrink-0 text-sage" />
              Today, {SITE_NAME} offers scheduled telehealth visits: psychiatric evaluations, medication management,
              and supportive therapy.
            </li>
          </ul>

          <div className="mt-10">
            <CrisisNotice />
          </div>
        </Container>
      </section>

      <Reviews />

      <CtaBand
        heading={`Ready to meet ${FIRST_NAME}?`}
        body={`Book with your insurance through Alma or Headway, or request a self-pay visit. Every visit is by secure video, for patients in ${CONTACT.state}.`}
      />
    </main>
  )
}
