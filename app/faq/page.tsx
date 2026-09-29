import Link from 'next/link'
import type { Metadata } from 'next'
import { CONTACT, NAV_CTA, NO_MEDICAL_ADVICE, PRACTICE_FAQS, PROVIDER, SITE_NAME, withBrand } from '@/lib/site'
import { PAGE_IMAGES } from '@/lib/images'
import { GETTING_STARTED, NP_ROLE, type Faq } from '@/lib/faqs'
import PageHero from '@/components/site/PageHero'
import Container from '@/components/site/Container'
import FaqList from '@/components/site/FaqList'
import JsonLd from '@/components/site/JsonLd'
import CrisisNotice from '@/components/site/CrisisNotice'
import CtaBand from '@/components/site/CtaBand'
import { ArrowRight, PhoneIcon } from '@/components/site/icons'

const PATH = '/faq'
const HERO = PAGE_IMAGES[PATH]
const TITLE = withBrand('Psychiatric NP Telehealth FAQ')
const DESCRIPTION = `Answers about telehealth psychiatry at ${SITE_NAME}: what a psychiatric NP does, therapy vs. medication, controlled substances, insurance, and ages we see.`

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

// NP_ROLE and GETTING_STARTED (FACTS.md section 10) live in lib/faqs.ts so other pages reuse the
// same wording and FaqList can skip them when it adds FAQPage markup. The unanswered questions listed
// there (consultations, school/work forms, where you must be during visits, cancellations,
// availability) stay off the page until the practice answers them.

const GROUPS: { id: string; title: string; intro: string; faqs: Faq[] }[] = [
  {
    id: 'about-the-practice',
    title: 'About the practice',
    intro: 'Telehealth visits, and what a psychiatric nurse practitioner does.',
    // NP_ROLE sits right after "What does a Psych NP do?" so the two answers read together.
    faqs: [PRACTICE_FAQS[0], PRACTICE_FAQS[1], NP_ROLE, PRACTICE_FAQS[2]],
  },
  {
    id: 'medication',
    title: 'Medication',
    intro: 'How medication decisions are made, and your choices.',
    faqs: [PRACTICE_FAQS[3], PRACTICE_FAQS[4], PRACTICE_FAQS[5]],
  },
  {
    id: 'getting-started',
    title: 'Getting started & cost',
    intro: 'Ages, visit length, insurance, pricing, and safety.',
    faqs: GETTING_STARTED,
  },
]

// One FAQPage block for every question shown on the page (a FAQPage per group would duplicate it).
const FAQ_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: GROUPS.flatMap((g) => g.faqs).map((f) => ({
    '@type': 'Question',
    name: f.q,
    acceptedAnswer: { '@type': 'Answer', text: f.a },
  })),
}

const LINK = 'font-semibold text-accent underline-offset-4 hover:underline'

/* ------------------------------------------------------------------ */
/* Page                                                                */
/* ------------------------------------------------------------------ */

export default function FaqPage() {
  return (
    <main>
      <JsonLd data={FAQ_SCHEMA} />

      <PageHero
        priority
        eyebrow="FAQ"
        title="Frequently Asked Questions About Telehealth Psychiatric Care"
        subtitle="Straight answers about video visits, medication, cost, and what a psychiatric nurse practitioner does."
        image={HERO}
        crumbs={[{ label: 'Home', href: '/' }, { label: 'FAQ' }]}
        primaryCta={NAV_CTA}
        secondaryCta={{ label: 'Your first visit', href: '/new-patients' }}
      />

      <section className="bg-white py-16 sm:py-24" aria-label="Frequently asked questions">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,2.4fr)] lg:gap-16">
            {/* Jump links + contact (sticky on desktop) */}
            <aside className="lg:sticky lg:top-28 lg:self-start">
              <nav aria-label="FAQ topics" className="rounded-3xl border border-border bg-cream p-6">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">Topics</p>
                <ul className="mt-4 space-y-1">
                  {GROUPS.map((g) => (
                    <li key={g.id}>
                      <a
                        href={`#${g.id}`}
                        className="flex items-center justify-between gap-3 rounded-xl px-3 py-2.5 font-medium text-ink transition-colors hover:bg-white hover:text-accent"
                      >
                        {g.title}
                        <ArrowRight className="h-3.5 w-3.5 shrink-0 text-accent" />
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>

              <div className="mt-6 rounded-3xl border border-border bg-white p-6">
                <p className="font-cormorant text-2xl font-semibold leading-tight text-primary">Still have a question?</p>
                <a
                  href={CONTACT.phoneHref}
                  className="mt-3 inline-flex items-center gap-2 font-semibold text-accent underline-offset-4 hover:underline"
                >
                  <PhoneIcon />
                  {CONTACT.phone}
                </a>
                <p className="mt-3 text-sm leading-relaxed text-muted">{NO_MEDICAL_ADVICE}</p>
                <Link href="/contact" className={`mt-4 inline-flex items-center gap-1.5 text-sm ${LINK}`}>
                  Contact the practice
                  <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            </aside>

            <div className="space-y-14">
              {GROUPS.map((g) => (
                <section key={g.id} id={g.id} className="scroll-mt-28" aria-labelledby={`${g.id}-heading`}>
                  <h2
                    id={`${g.id}-heading`}
                    className="font-cormorant text-[2rem] font-semibold leading-[1.1] text-primary sm:text-4xl"
                  >
                    {g.title}
                  </h2>
                  <p className="mt-2 text-muted">{g.intro}</p>
                  <div className="mt-6">
                    <FaqList faqs={g.faqs} />
                  </div>
                </section>
              ))}

              <div className="flex flex-wrap gap-x-6 gap-y-2 border-t border-border pt-8 text-sm">
                <Link href="/insurance" className={`inline-flex items-center gap-1.5 ${LINK}`}>
                  Insurance &amp; Pricing
                  <ArrowRight className="h-3.5 w-3.5" />
                </Link>
                <Link href="/new-patients" className={`inline-flex items-center gap-1.5 ${LINK}`}>
                  Your first visit
                  <ArrowRight className="h-3.5 w-3.5" />
                </Link>
                <Link href="/about" className={`inline-flex items-center gap-1.5 ${LINK}`}>
                  About {FIRST_NAME}
                  <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-cream pt-16 sm:pt-20" aria-label="Crisis information">
        <Container size="medium">
          <CrisisNotice />
        </Container>
      </section>

      <CtaBand
        heading="Ready to take the first step?"
        body={`Book with your insurance through Alma or Headway, or request a self-pay visit. Every visit is by secure video, for patients in ${CONTACT.state}.`}
      />
    </main>
  )
}
