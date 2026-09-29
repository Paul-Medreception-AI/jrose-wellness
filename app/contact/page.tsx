import type { Metadata } from 'next'
import Link from 'next/link'
import { CONTACT, NAV_CTA, NO_MEDICAL_ADVICE, PROVIDER, SITE_NAME, withBrand } from '@/lib/site'
import { PAGE_IMAGES } from '@/lib/images'
import PageHero from '@/components/site/PageHero'
import Container from '@/components/site/Container'
import SectionHeading from '@/components/site/SectionHeading'
import ContactForm from '@/components/site/ContactForm'
import CrisisNotice from '@/components/site/CrisisNotice'
import SmartLink, { BUTTON } from '@/components/site/SmartLink'
import { ArrowRight, MailIcon, PhoneIcon, VideoIcon } from '@/components/site/icons'

const TITLE = withBrand('Contact a Telehealth Psychiatric NP in CT')
const DESCRIPTION = `Contact ${SITE_NAME} for telehealth psychiatric care in Connecticut. Call ${CONTACT.phone} or email us about visits, insurance, or getting started.`
const HERO = PAGE_IMAGES['/contact']

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: '/contact' },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: '/contact',
    siteName: SITE_NAME,
    type: 'website',
    images: [{ url: HERO.src, alt: HERO.alt }],
  },
  twitter: { card: 'summary_large_image', title: TITLE, description: DESCRIPTION, images: [HERO.src] },
}

const CARD =
  'flex items-start gap-4 rounded-2xl border border-border bg-white p-5 shadow-[0_1px_2px_rgba(46,15,19,0.04),0_12px_32px_-16px_rgba(46,15,19,0.18)] sm:p-6'
const ICON_WRAP = 'grid h-11 w-11 shrink-0 place-items-center rounded-full bg-light text-accent'

// Short answers to "where do I start?" so a visitor with a simple question can skip the form.
const HELPFUL_LINKS = [
  { label: 'Insurance & pricing', href: '/insurance', blurb: 'Plans through Alma and Headway, and self-pay rates' },
  { label: 'Your first visit', href: '/new-patients', blurb: 'What to expect and how to get started' },
  { label: 'Frequently asked questions', href: '/faq', blurb: 'Medication, telehealth, and more' },
]

export default function ContactPage() {
  return (
    <main>
      <PageHero
        size="md"
        priority
        eyebrow="Contact"
        title={`Contact ${SITE_NAME}`}
        subtitle={`Questions about visits, insurance, or getting started? Call, email, or send a message below. Every visit is by secure video, for patients in ${CONTACT.state}.`}
        image={HERO}
        crumbs={[{ label: 'Home', href: '/' }, { label: 'Contact' }]}
        primaryCta={NAV_CTA}
        secondaryCta={{ label: `Call ${CONTACT.phone}`, href: CONTACT.phoneHref }}
      />

      <section className="bg-cream py-16 sm:py-20" aria-labelledby="contact-heading">
        <Container>
          <div className="mx-auto max-w-4xl">
            <CrisisNotice />
          </div>

          <div className="mt-12 grid gap-10 lg:mt-16 lg:grid-cols-12 lg:gap-12">
            {/* Ways to reach the practice */}
            <div className="lg:col-span-5">
              <SectionHeading
                id="contact-heading"
                eyebrow="Get in touch"
                title="Reach the practice"
                intro={`${SITE_NAME} is the telehealth practice of ${PROVIDER.byline}. Call or email with scheduling and general questions, or use the form.`}
              />

              <ul className="mt-8 space-y-4">
                <li className={CARD}>
                  <span className={ICON_WRAP}>
                    <PhoneIcon className="h-5 w-5" />
                  </span>
                  <div className="min-w-0">
                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-muted">Phone</p>
                    <a
                      href={CONTACT.phoneHref}
                      className="mt-1 inline-block font-cormorant text-[1.75rem] font-semibold leading-tight text-primary underline-offset-4 hover:text-accent-dark hover:underline"
                    >
                      {CONTACT.phone}
                    </a>
                  </div>
                </li>
                <li className={CARD}>
                  <span className={ICON_WRAP}>
                    <MailIcon className="h-5 w-5" />
                  </span>
                  <div className="min-w-0">
                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-muted">Email</p>
                    <a
                      href={`mailto:${CONTACT.email}`}
                      className="mt-1 inline-block break-all text-lg font-semibold text-primary underline-offset-4 hover:text-accent-dark hover:underline"
                    >
                      {CONTACT.email}
                    </a>
                  </div>
                </li>
                <li className={CARD}>
                  <span className={ICON_WRAP}>
                    <VideoIcon className="h-5 w-5" />
                  </span>
                  <div className="min-w-0">
                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-muted">Where care happens</p>
                    <p className="mt-1 text-lg font-semibold text-primary">{CONTACT.serviceArea}</p>
                    <p className="mt-1 text-[15px] leading-relaxed text-ink/75">
                      All visits are by secure video, so you can be seen from the comfort and privacy of your home.
                    </p>
                  </div>
                </li>
              </ul>

              <div role="note" className="mt-6 rounded-2xl border border-border bg-light p-5 text-[15px] leading-relaxed text-ink/85 sm:p-6">
                <p className="font-semibold text-primary">Please keep medical details out of messages</p>
                <p className="mt-1">{NO_MEDICAL_ADVICE}</p>
              </div>
            </div>

            {/* Form */}
            <div className="lg:col-span-7">
              <div className="rounded-3xl border border-border bg-white p-6 shadow-[0_1px_2px_rgba(46,15,19,0.04),0_12px_32px_-16px_rgba(46,15,19,0.18)] sm:p-8 lg:p-10">
                <h2 className="font-cormorant text-[2rem] font-semibold leading-tight text-primary sm:text-4xl">Send a message</h2>
                <p className="mt-3 mb-8 leading-relaxed text-muted">
                  For scheduling and general questions. Tell us how you would like us to get back to you, and we will
                  reply that way.
                </p>
                <ContactForm source="contact" />
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Booking handoff */}
      <section className="bg-light py-16 sm:py-20" aria-labelledby="ready-heading">
        <Container>
          <div className="grid gap-10 lg:grid-cols-12 lg:items-center lg:gap-12">
            <div className="lg:col-span-6">
              <SectionHeading
                id="ready-heading"
                eyebrow="Ready to book?"
                title="Book with insurance or as self-pay"
                intro="Use your insurance by booking through Alma or Headway, or request a self-pay appointment. The booking page lays out all three options side by side."
              />
              <div className="mt-8 flex flex-wrap gap-3">
                <SmartLink href={NAV_CTA.href} className={`${BUTTON.base} ${BUTTON.lg} ${BUTTON.accent}`}>
                  See booking options
                  <ArrowRight />
                </SmartLink>
                <SmartLink href={CONTACT.phoneHref} className={`${BUTTON.base} ${BUTTON.lg} ${BUTTON.outlineDark}`}>
                  <PhoneIcon />
                  Call {CONTACT.phone}
                </SmartLink>
              </div>
            </div>

            <ul className="grid gap-4 lg:col-span-6">
              {HELPFUL_LINKS.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="group flex items-center justify-between gap-4 rounded-2xl border border-border bg-white p-5 transition hover:border-accent/40 hover:shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent sm:p-6"
                  >
                    <span>
                      <span className="block font-cormorant text-2xl font-semibold leading-tight text-primary">{l.label}</span>
                      <span className="mt-1 block text-[15px] text-muted">{l.blurb}</span>
                    </span>
                    <ArrowRight className="h-5 w-5 shrink-0 text-accent transition-transform group-hover:translate-x-0.5" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </section>
    </main>
  )
}
