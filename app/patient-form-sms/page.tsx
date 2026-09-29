import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import Script from 'next/script'
import { AGES, CONTACT, LEGAL_NAME, NO_MEDICAL_ADVICE, SITE_NAME, withBrand } from '@/lib/site'
import { BRAND_IMAGES, imageFor } from '@/lib/images'
import Container from '@/components/site/Container'
import CrisisNotice from '@/components/site/CrisisNotice'

const ROUTE = '/patient-form-sms'
const TITLE = withBrand('Text Message Opt-In')
const DESCRIPTION =
  'Opt in to appointment-related text messages from JRose Wellness. Message frequency varies, message and data rates may apply, and you can reply STOP to opt out.'
const OG = imageFor(ROUTE)

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: ROUTE },
  // noindex, as on the practice's live site: a consent form is not a page anyone should land on
  // from search. Links stay followable so crawlers still reach the privacy and SMS terms pages.
  robots: { index: false, follow: true },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: ROUTE,
    siteName: SITE_NAME,
    type: 'website',
    images: [{ url: OG.src, alt: OG.alt }],
  },
}

// The consent form is served by MedReception and embedded exactly as on the practice's live
// /patient-form-sms (form "Form A2P New"). It is embedded rather than rebuilt on purpose: the
// hosted form records the exact wording the person agreed to and when, which a carrier reviewer
// or a TCPA complaint asks for, and hosting it inside this page keeps the consent URL on the
// practice's own domain. form_embed.js resizes the frame to the form's rendered height; the
// 788px is the form's own data-height, so the frame is the right size before the script loads.
const FORM_ID = 'dTOiSYQchL2T825b6brP'
const FORM_SRC = `https://api.medreception.ai/widget/form/${FORM_ID}`

const A = 'font-semibold text-accent underline underline-offset-2 hover:text-accent-dark'

export default function PatientFormSmsPage() {
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
        <Container size="medium" className="py-14 sm:py-16">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">{LEGAL_NAME}</p>
          <h1 className="mt-3 font-cormorant text-[2.6rem] font-semibold leading-[1.05] text-primary sm:text-5xl">
            Text Message Opt-In
          </h1>
          <p className="mt-4 max-w-2xl text-lg leading-relaxed text-ink/80">
            Sign up to get appointment confirmations, reminders, rescheduling updates, and support messages from{' '}
            {SITE_NAME} by text. Consent is not a condition of receiving care, and you can stop at any time.
          </p>
        </Container>
      </header>

      <div className="bg-cream py-12 sm:py-16">
        <Container size="medium">
          <div className="grid gap-10 lg:grid-cols-12 lg:gap-12">
            <div className="lg:col-span-7">
              <div className="rounded-3xl border border-border bg-white p-3 shadow-[0_1px_2px_rgba(46,15,19,0.04),0_12px_32px_-16px_rgba(46,15,19,0.18)] sm:p-5">
                <iframe
                  src={FORM_SRC}
                  id={`inline-${FORM_ID}`}
                  title="Text message opt-in form"
                  className="block h-[788px] w-full rounded-[3px] border-0"
                  data-layout="{'id':'INLINE'}"
                  data-trigger-type="alwaysShow"
                  data-trigger-value=""
                  data-activation-type="alwaysActivated"
                  data-activation-value=""
                  data-deactivation-type="neverDeactivate"
                  data-deactivation-value=""
                  data-form-name="Form A2P New"
                  data-height="788"
                  data-layout-iframe-id={`inline-${FORM_ID}`}
                  data-form-id={FORM_ID}
                  data-cookie-consent="true"
                  data-cookie-consent-provider="auto"
                />
              </div>
              <Script src="https://api.medreception.ai/js/form_embed.js" strategy="afterInteractive" />
              <p className="mt-4 text-sm leading-relaxed text-muted">
                Trouble with the form? Call us at{' '}
                <a href={CONTACT.phoneHref} className={A}>
                  {CONTACT.phone}
                </a>{' '}
                or email{' '}
                <a href={`mailto:${CONTACT.email}`} className={`${A} break-words`}>
                  {CONTACT.email}
                </a>
                .
              </p>
            </div>

            {/* The disclosures a carrier reviewer checks, stated on the page as well as inside the
                form, so they are visible even before the embedded form loads. */}
            <aside className="space-y-6 lg:col-span-5">
              <div className="rounded-3xl border border-border bg-white p-6 sm:p-7">
                <h2 className="font-cormorant text-[1.75rem] font-semibold leading-tight text-primary">Before you sign up</h2>
                <ul className="mt-4 list-disc space-y-3 pl-5 text-[15px] leading-relaxed text-ink/85 marker:text-accent">
                  <li>
                    <strong className="text-ink">Message frequency varies.</strong> Message and data rates may apply.
                  </li>
                  <li>
                    Reply <strong className="text-ink">STOP</strong> to any message to opt out, or{' '}
                    <strong className="text-ink">HELP</strong> for help.
                  </li>
                  <li>Carriers are not liable for delayed or undelivered messages.</li>
                  <li>You must be 18 years or older to participate. {AGES.smsNote}</li>
                  <li>
                    We never share your mobile number or opt-in information with third parties or affiliates for
                    marketing.
                  </li>
                </ul>
                <p className="mt-5 text-[15px] leading-relaxed text-ink/85">
                  Read our{' '}
                  <Link href="/privacy-sms" className={A}>
                    Privacy Policy
                  </Link>{' '}
                  and{' '}
                  <Link href="/terms-sms#sms-terms" className={A}>
                    SMS Terms
                  </Link>
                  .
                </p>
              </div>

              <p className="rounded-2xl border border-border bg-light p-5 text-[15px] leading-relaxed text-ink/85">
                {NO_MEDICAL_ADVICE}
              </p>

              <CrisisNotice variant="compact" />
            </aside>
          </div>
        </Container>
      </div>
    </main>
  )
}
