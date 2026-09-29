import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import type { ReactNode } from 'react'
import { AGES, BOOKING, CONTACT, PRICING, PROVIDER, SITE_NAME, withBrand } from '@/lib/site'
import { JESSICA_PHOTOS, PAGE_IMAGES } from '@/lib/images'
import PageHero from '@/components/site/PageHero'
import Container from '@/components/site/Container'
import SectionHeading from '@/components/site/SectionHeading'
import BookingOptions from '@/components/site/BookingOptions'
import ContactForm from '@/components/site/ContactForm'
import CrisisNotice from '@/components/site/CrisisNotice'
import SmartLink, { BUTTON } from '@/components/site/SmartLink'
import { ArrowRight, CheckIcon, ExternalIcon, PhoneIcon, VideoIcon } from '@/components/site/icons'

const TITLE = withBrand('Book a Telehealth Psychiatry Appointment')
const DESCRIPTION =
  'Book a telehealth psychiatry appointment in Connecticut: request a self-pay visit, or use your insurance by booking Jessica Logel through Alma or Headway.'
const HERO = PAGE_IMAGES['/book-appointment']

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: '/book-appointment' },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: '/book-appointment',
    siteName: SITE_NAME,
    type: 'website',
    images: [{ url: HERO.src, alt: HERO.alt }],
  },
  twitter: { card: 'summary_large_image', title: TITLE, description: DESCRIPTION, images: [HERO.src] },
}

const FACTS = [
  { icon: VideoIcon, text: 'Secure video visits from home' },
  { icon: CheckIcon, text: AGES.short },
  { icon: CheckIcon, text: CONTACT.serviceArea },
]

const LINK = 'font-semibold text-accent underline underline-offset-2 hover:text-accent-dark'

export default function BookAppointmentPage() {
  return (
    <main>
      <PageHero
        size="md"
        priority
        eyebrow="Book an appointment"
        title="Book a Telehealth Psychiatry Appointment"
        subtitle="Use your insurance by booking through Alma or Headway, or request a self-pay visit directly with the practice. Pick the path that fits you."
        image={HERO}
        crumbs={[{ label: 'Home', href: '/' }, { label: 'Book an Appointment' }]}
        primaryCta={{ label: BOOKING.request.label, href: '#request' }}
        secondaryCta={{ label: `Call ${CONTACT.phone}`, href: CONTACT.phoneHref }}
      />

      {/* At a glance */}
      <div className="border-b border-border bg-white">
        <Container>
          <ul className="flex flex-col gap-3 py-5 text-[15px] text-ink sm:flex-row sm:flex-wrap sm:items-center sm:justify-center sm:gap-x-10">
            {FACTS.map(({ icon: Icon, text }) => (
              <li key={text} className="flex items-center gap-2.5">
                <Icon className="h-4 w-4 shrink-0 text-accent" />
                {text}
              </li>
            ))}
          </ul>
        </Container>
      </div>

      <BookingOptions />

      {/* Self-pay request */}
      <section id="request" className="bg-cream py-16 sm:py-20" aria-labelledby="request-heading">
        <Container>
          <div className="grid gap-10 lg:grid-cols-12 lg:gap-12">
            <div className="lg:col-span-5">
              <SectionHeading
                id="request-heading"
                eyebrow="Self-pay"
                title="Request a self-pay appointment"
                intro="Send a request with this form. We will follow up by phone or email to find a time that works for you and get your visit on the schedule."
              />

              <dl className="mt-8 divide-y divide-border rounded-2xl border border-border bg-white">
                {[PRICING.initialEvaluation, PRICING.followUp].map((p) => (
                  <div key={p.name} className="flex items-baseline justify-between gap-4 px-5 py-4">
                    <dt className="font-medium text-ink">{p.name}</dt>
                    <dd className="font-cormorant text-3xl font-semibold text-primary">{p.price}</dd>
                  </div>
                ))}
              </dl>

              <ul className="mt-6 space-y-3 text-[15px] leading-relaxed text-ink/85">
                <li className="flex gap-3">
                  <CheckIcon className="mt-1 h-4 w-4 shrink-0 text-sage" />
                  <span>{PRICING.slidingScale} Ask about it when we follow up.</span>
                </li>
                <li className="flex gap-3">
                  <CheckIcon className="mt-1 h-4 w-4 shrink-0 text-sage" />
                  <span>{PRICING.goodFaithEstimate}</span>
                </li>
                <li className="flex gap-3">
                  <CheckIcon className="mt-1 h-4 w-4 shrink-0 text-sage" />
                  <span>
                    Prefer to talk it through? Call{' '}
                    <a href={CONTACT.phoneHref} className={LINK}>
                      {CONTACT.phone}
                    </a>
                    .
                  </span>
                </li>
              </ul>

              <p className="mt-6 text-[15px] leading-relaxed text-muted">
                Using insurance instead? Book through{' '}
                <a href={BOOKING.alma.href} target="_blank" rel="noopener noreferrer" className={LINK}>
                  Alma
                </a>{' '}
                or{' '}
                <a href={BOOKING.headway.href} target="_blank" rel="noopener noreferrer" className={LINK}>
                  Headway
                </a>
                , where you can see open times and check your coverage.{' '}
                <Link href="/insurance" className={LINK}>
                  See the plans
                </Link>
                .
              </p>
            </div>

            <div className="space-y-6 lg:col-span-7">
              <CrisisNotice />
              <div className="rounded-3xl border border-border bg-white p-6 shadow-[0_1px_2px_rgba(46,15,19,0.04),0_12px_32px_-16px_rgba(46,15,19,0.18)] sm:p-8 lg:p-10">
                <h3 className="font-cormorant text-[1.9rem] font-semibold leading-tight text-primary sm:text-[2.1rem]">
                  Your appointment request
                </h3>
                <p className="mt-3 mb-8 leading-relaxed text-muted">
                  Share your contact details and any days or times that tend to work for you. Please leave medical details
                  out of the form. You can go over those with Jessica at your visit.
                </p>
                <ContactForm source="book-appointment" defaultReason="New patient: self-pay appointment request" />
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* What happens next */}
      <section className="bg-white py-16 sm:py-20" aria-labelledby="next-heading">
        <Container>
          <SectionHeading
            id="next-heading"
            eyebrow="What to expect"
            title="What happens after you book"
            intro="Whichever path you choose, here is how getting started works."
          />

          <ol className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            <Step n={1} title="Choose how to book">
              Using insurance? Book through Alma or Headway. Paying for yourself? Send the request form above or give
              us a call.
            </Step>
            <Step n={2} title="Get scheduled">
              On Alma or Headway, you pick an open time as you book. On Alma, if none of the listed times work, you can
              continue without choosing one and Jessica will reach out to schedule your intake. For a self-pay request,
              we follow up by phone or email to set up your visit.
            </Step>
            <Step n={3} title="Get ready">
              If you are using insurance, keep your insurance information handy. It also helps to jot down the
              medications you take now and any you have tried before. Find a private, quiet spot with a phone, tablet,
              or computer that has a camera.
            </Step>
            <Step n={4} title="Your first visit">
              Your first session is all about you: what brings you in, your current concerns and symptoms, your
              history, lifestyle, and goals. {BOOKING.alma.note}
            </Step>
          </ol>

          {/* In Jessica's own words (Headway profile, "What you can expect from me"). */}
          <figure className="mt-14 grid items-center gap-8 overflow-hidden rounded-[2rem] bg-light p-6 sm:p-10 md:grid-cols-[auto_1fr] lg:p-12">
            <div className="relative mx-auto h-56 w-44 overflow-hidden rounded-3xl bg-peach sm:h-64 sm:w-52">
              <Image
                src={JESSICA_PHOTOS.portrait.src}
                alt={JESSICA_PHOTOS.portrait.alt}
                fill
                sizes="(min-width: 640px) 208px, 176px"
                className="object-cover object-top"
              />
            </div>
            <div>
              <blockquote className="space-y-4 font-cormorant text-[1.45rem] leading-snug text-ink sm:text-[1.65rem]">
                <p>
                  &ldquo;I know starting therapy or psychiatric care can feel intimidating, so I approach each session
                  with compassion, curiosity, and openness.&rdquo;
                </p>
                <p className="text-[1.2rem] leading-relaxed text-ink/80 sm:text-[1.3rem]">
                  &ldquo;By the end of the session, clients can typically expect to leave with a clearer understanding
                  of possible next steps, initial treatment goals, and practical strategies or recommendations to begin
                  working toward feeling better.&rdquo;
                </p>
              </blockquote>
              <figcaption className="mt-6 text-sm font-semibold text-primary">
                {PROVIDER.byline}
                <span className="block font-normal text-muted">{PROVIDER.title}</span>
              </figcaption>
              <Link
                href="/new-patients"
                className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-accent underline-offset-4 hover:underline"
              >
                More about your first visit
                <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </div>
          </figure>
        </Container>
      </section>

      {/* Ages */}
      <section className="bg-cream py-16 sm:py-20" aria-labelledby="ages-heading">
        <Container>
          <div className="grid gap-10 lg:grid-cols-12 lg:gap-12">
            <div className="lg:col-span-5">
              <SectionHeading
                id="ages-heading"
                eyebrow="Who can book"
                title="Adolescents 15 and older and adults"
                intro={`Jessica sees ${AGES.short.toLowerCase()}, all by secure video, for patients in ${CONTACT.state}.`}
              />
            </div>
            <div className="space-y-4 lg:col-span-7">
              <div className="rounded-2xl border border-border bg-white p-6">
                <p className="font-semibold text-primary">Booking for a teen aged 15 to 17?</p>
                <p className="mt-2 leading-relaxed text-ink/85">
                  Call us or send a request, and we will walk you through how scheduling works for adolescents.{' '}
                  {AGES.smsNote}
                </p>
              </div>
              <ul className="grid gap-3 sm:grid-cols-3">
                {[
                  { label: 'Teens (15+)', href: '/who-we-help/teens' },
                  { label: 'Adults', href: '/who-we-help/adults' },
                  { label: 'Older adults', href: '/who-we-help/older-adults' },
                ].map((a) => (
                  <li key={a.href}>
                    <Link
                      href={a.href}
                      className="group flex h-full items-center justify-between gap-3 rounded-2xl border border-border bg-white px-5 py-4 font-semibold text-primary transition hover:border-accent/40 hover:shadow-sm"
                    >
                      {a.label}
                      <ArrowRight className="h-4 w-4 shrink-0 text-accent transition-transform group-hover:translate-x-0.5" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Container>
      </section>

      {/* Questions first */}
      <section className="bg-light py-14 sm:py-16" aria-labelledby="questions-heading">
        <Container size="medium">
          <div className="text-center">
            <h2 id="questions-heading" className="font-cormorant text-[2rem] font-semibold leading-tight text-primary sm:text-4xl">
              Questions before you book?
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg leading-relaxed text-muted">
              Read about{' '}
              <Link href="/insurance" className={LINK}>
                insurance and pricing
              </Link>
              , browse the{' '}
              <Link href="/faq" className={LINK}>
                FAQ
              </Link>
              , or get in touch.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <SmartLink href="/contact" className={`${BUTTON.base} ${BUTTON.lg} ${BUTTON.accent}`}>
                Contact us
                <ArrowRight />
              </SmartLink>
              <SmartLink href={CONTACT.phoneHref} className={`${BUTTON.base} ${BUTTON.lg} ${BUTTON.outlineDark}`}>
                <PhoneIcon />
                Call {CONTACT.phone}
              </SmartLink>
              <SmartLink href={BOOKING.alma.href} className={`${BUTTON.base} ${BUTTON.lg} ${BUTTON.outlineDark}`}>
                {BOOKING.alma.label}
                <ExternalIcon />
              </SmartLink>
            </div>
          </div>
        </Container>
      </section>
    </main>
  )
}

function Step({ n, title, children }: { n: number; title: string; children: ReactNode }) {
  return (
    <li className="flex h-full flex-col rounded-3xl border border-border bg-cream p-6 sm:p-7">
      <span className="grid h-10 w-10 place-items-center rounded-full bg-primary font-cormorant text-xl font-semibold text-white">
        {n}
      </span>
      <h3 className="mt-5 font-cormorant text-[1.6rem] font-semibold leading-tight text-primary">{title}</h3>
      <p className="mt-3 leading-relaxed text-ink/80">{children}</p>
    </li>
  )
}
