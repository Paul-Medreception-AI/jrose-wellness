import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { CONTACT, NAV_CTA, withBrand } from '@/lib/site'
import { BRAND_IMAGES } from '@/lib/images'
import Container from '@/components/site/Container'
import { ArrowRight, PhoneIcon } from '@/components/site/icons'

export const metadata: Metadata = {
  title: withBrand('Page Not Found'),
  description:
    'We could not find that page. Explore telehealth psychiatry services and conditions treated, or book an appointment with JRose Wellness in Connecticut.',
  robots: { index: false, follow: true },
}

const LINKS = [
  { label: 'Services', href: '/services', body: 'Psychiatric evaluation, medication management and supportive therapy.' },
  { label: 'Conditions', href: '/conditions', body: 'Anxiety, depression, ADHD, bipolar disorder and more.' },
  { label: NAV_CTA.label, href: NAV_CTA.href, body: 'Book with insurance through Alma or Headway, or self-pay.' },
]

export default function NotFound() {
  return (
    <main className="relative isolate overflow-hidden bg-cream py-20 sm:py-28">
      <Image
        src={BRAND_IMAGES.rose.src}
        alt=""
        width={BRAND_IMAGES.rose.width}
        height={BRAND_IMAGES.rose.height}
        className="pointer-events-none absolute -right-16 -top-10 -z-10 h-auto w-64 opacity-20 sm:w-80"
      />
      <Container size="medium" className="text-center">
        <p aria-hidden="true" className="font-cormorant text-8xl font-semibold leading-none text-peach sm:text-9xl">
          404
        </p>
        <h1 className="mt-4 font-cormorant text-4xl font-semibold text-primary sm:text-5xl">We couldn&rsquo;t find that page</h1>
        <p className="mx-auto mt-4 max-w-xl text-lg leading-relaxed text-muted">
          The link may be old or the page may have moved. These are good places to pick up from.
        </p>

        <ul className="mt-12 grid gap-5 text-left md:grid-cols-3">
          {LINKS.map((l) => (
            <li key={l.href}>
              <Link
                href={l.href}
                className="group flex h-full flex-col rounded-3xl border border-border bg-white p-6 transition hover:-translate-y-0.5 hover:border-accent/40 hover:shadow-[0_16px_40px_-20px_rgba(46,15,19,0.35)]"
              >
                <span className="font-cormorant text-2xl font-semibold text-primary">{l.label}</span>
                <span className="mt-2 flex-1 text-[15px] leading-relaxed text-ink/75">{l.body}</span>
                <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-accent">
                  Go there
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                </span>
              </Link>
            </li>
          ))}
        </ul>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-x-6 gap-y-3 text-[15px]">
          <Link href="/" className="font-semibold text-primary underline-offset-4 hover:underline">
            Back to the home page
          </Link>
          <a href={CONTACT.phoneHref} className="inline-flex items-center gap-2 font-semibold text-primary hover:text-accent">
            <PhoneIcon className="h-4 w-4" />
            {CONTACT.phone}
          </a>
        </div>
      </Container>
    </main>
  )
}
