import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { CONTACT, LEGAL_NAME, SITE_NAME, withBrand } from '@/lib/site'
import { BRAND_IMAGES, imageFor } from '@/lib/images'
import Container from '@/components/site/Container'
import { CheckIcon, MailIcon, PhoneIcon } from '@/components/site/icons'

const ROUTE = '/accessibility'
const TITLE = withBrand('Accessibility Statement')
const DESCRIPTION =
  'JRose Wellness is committed to an accessible website for all visitors. Read our accessibility statement and how to reach us if you have trouble using the site.'
const OG = imageFor(ROUTE)
const LAST_REVIEWED = 'September 29th, 2026'

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: ROUTE },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: ROUTE,
    siteName: SITE_NAME,
    type: 'website',
    images: [{ url: OG.src, alt: OG.alt }],
  },
  twitter: { card: 'summary_large_image', title: TITLE, description: DESCRIPTION, images: [OG.src] },
}

// Only what the site actually does (see SiteHeader, globals.css, ContactForm). No claim of
// certified conformance: WCAG 2.1 AA is stated as the target.
const MEASURES = [
  'A "Skip to content" link at the top of every page, and headings and page regions that screen readers can navigate by',
  'Menus, forms, and question lists that work with a keyboard alone, with a visible outline showing where you are',
  'Text descriptions for meaningful images, and decorative images hidden from screen readers',
  'Text and background colors chosen for readable contrast',
  'Form fields with visible labels, required fields marked, and error messages that say what to fix',
  'Pages that reflow on phones and tablets and allow you to zoom and enlarge text',
  'Reduced animation for visitors who turn on the "reduce motion" setting on their device',
  'Phone numbers you can tap to call',
]

const H2 = 'font-cormorant text-[1.85rem] font-semibold leading-tight text-primary sm:text-[2.1rem]'
const P = 'mt-3 leading-relaxed text-ink/85'
const A = 'font-semibold text-accent underline underline-offset-2 hover:text-accent-dark'

export default function AccessibilityPage() {
  return (
    <main>
      <header className="relative isolate overflow-hidden bg-light">
        <Image
          src={BRAND_IMAGES.rose.src}
          alt=""
          width={BRAND_IMAGES.rose.width}
          height={BRAND_IMAGES.rose.height}
          sizes="(min-width: 1024px) 320px, 176px"
          priority
          className="pointer-events-none absolute -bottom-12 -right-10 -z-10 h-auto w-44 opacity-30 sm:w-60 lg:w-80 lg:opacity-40"
        />
        <Container className="py-14 sm:py-16 lg:py-20">
          <nav aria-label="Breadcrumb" className="mb-6 text-sm text-muted">
            <Link href="/" className="underline-offset-4 hover:text-primary hover:underline">
              Home
            </Link>
            <span aria-hidden="true" className="mx-2 text-muted/60">
              /
            </span>
            <span aria-current="page" className="text-ink">
              Accessibility
            </span>
          </nav>
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">{SITE_NAME}</p>
          <h1 className="mt-3 font-cormorant text-[2.6rem] font-semibold leading-[1.05] text-primary sm:text-5xl lg:text-[3.5rem]">
            Accessibility Statement
          </h1>
          <p className="mt-4 max-w-2xl text-lg leading-relaxed text-ink/80">
            Everyone should be able to find information about care and get in touch with us, however they use the web.
          </p>
          <p className="mt-6 inline-flex rounded-full border border-border bg-white px-4 py-1.5 text-sm font-semibold text-primary">
            Last reviewed: {LAST_REVIEWED}
          </p>
        </Container>
      </header>

      <div className="bg-cream py-14 sm:py-16">
        <Container size="narrow">
          <article className="space-y-12">
            <section aria-labelledby="commitment">
              <h2 id="commitment" className={H2}>
                Our commitment
              </h2>
              <p className={P}>
                {LEGAL_NAME} wants this website to be usable by as many people as possible, including people who use
                screen readers, keyboard navigation, magnification, voice control, or other assistive technology.
              </p>
              <p className={P}>
                We aim to meet the Web Content Accessibility Guidelines (WCAG) 2.1, Level AA. That is our target, not a
                claim of certified conformance, and we keep working on it as the site changes.
              </p>
            </section>

            <section aria-labelledby="measures">
              <h2 id="measures" className={H2}>
                What we have done
              </h2>
              <ul className="mt-5 space-y-3">
                {MEASURES.map((m) => (
                  <li key={m} className="flex gap-3 leading-relaxed text-ink/85">
                    <CheckIcon className="mt-1 h-4 w-4 shrink-0 text-sage" />
                    <span>{m}</span>
                  </li>
                ))}
              </ul>
            </section>

            <section aria-labelledby="limitations">
              <h2 id="limitations" className={H2}>
                Known limitations
              </h2>
              <p className={P}>
                Some parts of the experience are run by other companies, and we cannot control how accessible they are.
                These include booking with insurance on Alma or Headway and the text message sign-up form on our{' '}
                <Link href="/patient-form-sms" className={A}>
                  opt-in page
                </Link>
                . If any of these are hard to use, call us and we will help you book or sign up another way.
              </p>
            </section>

            <section aria-labelledby="report" className="rounded-3xl border border-border bg-white p-6 sm:p-8">
              <h2 id="report" className={H2}>
                Tell us about a problem
              </h2>
              <p className={P}>
                If something on this site is hard to use, or you need information in another format, please let us know.
                Tell us the page and what went wrong, and we will do our best to fix it or get you the information another
                way.
              </p>
              <ul className="mt-6 space-y-3">
                <li>
                  <a href={CONTACT.phoneHref} className="inline-flex items-center gap-3 font-semibold text-primary hover:text-accent-dark">
                    <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-light text-accent">
                      <PhoneIcon />
                    </span>
                    {CONTACT.phone}
                  </a>
                </li>
                <li>
                  <a
                    href={`mailto:${CONTACT.email}`}
                    className="inline-flex items-center gap-3 break-all font-semibold text-primary hover:text-accent-dark"
                  >
                    <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-light text-accent">
                      <MailIcon />
                    </span>
                    {CONTACT.email}
                  </a>
                </li>
              </ul>
              <p className="mt-6 text-[15px] leading-relaxed text-muted">
                You can also use our{' '}
                <Link href="/contact" className={A}>
                  contact form
                </Link>
                . Please don&rsquo;t include medical details.
              </p>
            </section>
          </article>
        </Container>
      </div>
    </main>
  )
}
