import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import type { ReactNode } from 'react'
import { AGES, CONTACT, CRISIS, LEGAL_NAME, SITE_NAME, SITE_URL, withBrand } from '@/lib/site'
import { BRAND_IMAGES, imageFor } from '@/lib/images'
import Container from '@/components/site/Container'
import CrisisText from '@/components/site/CrisisText'

// Rewritten from the practice's live /terms-sms (effective September 1st, 2026). The SMS section
// keeps every A2P element of the live page: program description, STOP, HELP, carriers not
// liable, "Message and data rates may apply", "Message frequency varies", and the 18+ clause.
// Changes: canonical email and phone from lib/site.ts, the broken "//privacy-policy" link now
// points to /privacy-sms, the blanks the live template left in the company name and governing law
// are filled in, and a section on medical information, emergencies and telehealth scope is added.
// The live "Registration & Passwords" section is dropped: this site has no accounts.

const ROUTE = '/terms-sms'
const TITLE = withBrand('Terms of Service & SMS Terms')
const DESCRIPTION =
  'Terms of service for the JRose Wellness website and text messaging program, including SMS consent, message frequency, STOP and HELP keywords, and disclaimers.'
const OG = imageFor(ROUTE)
const EFFECTIVE = 'September 1st, 2026'
const SITE_HOST = SITE_URL.replace(/^https?:\/\//, '')

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

const TOC = [
  { id: 'sms-terms', label: 'SMS messaging terms & compliance' },
  { id: 'general-terms', label: 'General terms' },
  { id: 'medical-information', label: 'Medical information & emergencies' },
  { id: 'intellectual-property', label: 'Intellectual property rights' },
  { id: 'disclaimers', label: 'Disclaimers' },
  { id: 'third-party-services', label: 'Third-party services' },
  { id: 'termination', label: 'Termination' },
  { id: 'governing-law', label: 'Governing law' },
  { id: 'changes', label: 'Changes to these terms' },
  { id: 'contact', label: 'Contact' },
]

const H2 = 'scroll-mt-28 font-cormorant text-[1.85rem] font-semibold leading-tight text-primary sm:text-[2.1rem]'
const H3 = 'mt-7 scroll-mt-28 font-semibold text-ink'
const P = 'mt-3 leading-relaxed text-ink/85'
const A = 'font-semibold text-accent underline underline-offset-2 hover:text-accent-dark'

function Section({ id, title, children }: { id: string; title: string; children: ReactNode }) {
  return (
    <section aria-labelledby={id} className="border-t border-border pt-10 first:border-t-0 first:pt-0">
      <h2 id={id} className={H2}>
        {title}
      </h2>
      {children}
    </section>
  )
}

export default function TermsSmsPage() {
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
              Terms of Service
            </span>
          </nav>
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">{LEGAL_NAME}</p>
          <h1 className="mt-3 font-cormorant text-[2.6rem] font-semibold leading-[1.05] text-primary sm:text-5xl lg:text-[3.5rem]">
            Terms of Service
          </h1>
          <p className="mt-4 max-w-2xl text-lg leading-relaxed text-ink/80">
            Terms for using this website and for our text message program, including SMS consent, STOP and HELP.
          </p>
          <p className="mt-6 inline-flex rounded-full border border-border bg-white px-4 py-1.5 text-sm font-semibold text-primary">
            Effective Date: {EFFECTIVE}
          </p>
        </Container>
      </header>

      <div className="bg-cream py-14 sm:py-16">
        <Container>
          <div className="grid gap-10 lg:grid-cols-12 lg:gap-12">
            <aside className="lg:col-span-4 xl:col-span-3">
              <nav aria-label="On this page" className="rounded-2xl border border-border bg-white p-5 lg:sticky lg:top-28">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-muted">On this page</p>
                <ul className="mt-3 space-y-2 text-[15px]">
                  {TOC.map((t) => (
                    <li key={t.id}>
                      <a href={`#${t.id}`} className="text-ink/80 underline-offset-4 hover:text-primary hover:underline">
                        {t.label}
                      </a>
                    </li>
                  ))}
                </ul>
                <p className="mt-5 border-t border-border pt-4 text-sm text-muted">
                  See also our{' '}
                  <Link href="/privacy-sms" className={A}>
                    Privacy Policy
                  </Link>
                  .
                </p>
              </nav>
            </aside>

            <article className="max-w-3xl space-y-10 lg:col-span-8 xl:col-span-9">
              <Section id="sms-terms" title="SMS messaging terms & compliance">
                <h3 id="program-description" className={H3}>
                  1. Program description
                </h3>
                <p className={P}>
                  This messaging program sends appointment confirmation and reminder messages to patients who have booked
                  an appointment with {LEGAL_NAME} through our website at{' '}
                  <Link href="/" className={A}>
                    {SITE_HOST}
                  </Link>
                  , or via our scheduling forms, and have explicitly opted in to receive SMS notifications. Opt-in is
                  collected via web forms with a dedicated checkbox for SMS consent, such as the one on our{' '}
                  <Link href="/patient-form-sms" className={A}>
                    text message opt-in page
                  </Link>
                  . Messages include scheduling confirmations, appointment reminders, rescheduling updates, and customer
                  support communications.
                </p>

                <h3 id="cancellation" className={H3}>
                  2. Cancellation instructions
                </h3>
                <p className={P}>
                  You can cancel the SMS service at any time. Simply text &ldquo;STOP&rdquo; to the same number that sent
                  you messages. Upon sending &ldquo;STOP,&rdquo; we will confirm your unsubscribe status via SMS. Following
                  this confirmation, you will no longer receive SMS messages from us. To rejoin, sign up as you did
                  initially, and we will resume sending SMS messages to you.
                </p>

                <h3 id="support" className={H3}>
                  3. Support information
                </h3>
                <p className={P}>
                  If you experience issues with the messaging program, reply with the keyword &ldquo;HELP&rdquo; for more
                  assistance, or reach out directly to{' '}
                  <a href={`mailto:${CONTACT.email}`} className={`${A} break-all`}>
                    {CONTACT.email}
                  </a>{' '}
                  or call{' '}
                  <a href={CONTACT.phoneHref} className={A}>
                    {CONTACT.phone}
                  </a>
                  .
                </p>

                <h3 id="carrier-liability" className={H3}>
                  4. Carrier liability
                </h3>
                <p className={P}>Carriers are not liable for delayed or undelivered messages.</p>

                <h3 id="rates" className={H3}>
                  5. Message &amp; data rates
                </h3>
                <p className={P}>
                  Message and data rates may apply for messages sent to you from us and to us from you. Message frequency
                  varies based on your service usage and appointment schedule. For questions about your text plan or data
                  plan, contact your wireless provider.
                </p>

                <h3 id="supported-carriers" className={H3}>
                  6. Supported carriers
                </h3>
                <p className={P}>
                  Our SMS program works with all major U.S. wireless carriers, including AT&amp;T, T-Mobile, Verizon, and
                  most regional carriers.
                </p>

                <h3 id="age-restriction" className={H3}>
                  7. Age restriction
                </h3>
                <p className={P}>
                  You must be 18 years or older to participate in our SMS program. {AGES.smsNote}
                </p>

                <h3 id="consent" className={H3}>
                  8. Consent is optional
                </h3>
                <p className={P}>
                  Consent to receive text messages is not a condition of receiving care. You can still reach us by phone
                  or email.
                </p>

                <h3 id="sms-privacy" className={H3}>
                  9. Privacy policy
                </h3>
                <p className={P}>
                  For privacy-related inquiries, please refer to our{' '}
                  <Link href="/privacy-sms" className={A}>
                    Privacy Policy
                  </Link>{' '}
                  at {SITE_HOST}/privacy-sms. No mobile information will be shared with third parties or affiliates for
                  marketing or promotional purposes.
                </p>
                <p className={P}>
                  We comply with all applicable laws and regulations, including the Telephone Consumer Protection Act
                  (TCPA) and CTIA guidelines, regarding the use of SMS communications.
                </p>
              </Section>

              <Section id="general-terms" title="General terms">
                <p className={P}>
                  This website (the &ldquo;Site&rdquo;) is owned and operated by {LEGAL_NAME} (&ldquo;{SITE_NAME},&rdquo;
                  &ldquo;we,&rdquo; or &ldquo;us&rdquo;). By using the Site, you agree to be bound by these Terms of Service
                  and to use the Site in accordance with these Terms of Service, our{' '}
                  <Link href="/privacy-sms" className={A}>
                    Privacy Policy
                  </Link>
                  , and any additional terms and conditions that may apply to specific sections of the Site or to services
                  available through the Site or from {LEGAL_NAME}.
                </p>
                <p className={P}>
                  Accessing the Site, in any manner, whether automated or otherwise, constitutes use of the Site and your
                  agreement to be bound by these Terms of Service.
                </p>
                <p className={P}>
                  We reserve the right to change these Terms of Service or to impose new conditions on the use of the Site
                  from time to time, in which case we will post the revised Terms of Service on this website. By continuing
                  to use the Site after we post any such changes, you accept the Terms of Service, as modified.
                </p>
              </Section>

              <Section id="medical-information" title="Medical information & emergencies">
                <p className={P}>
                  The information on this Site is general and educational. It is not medical advice, and reading it or
                  contacting us through the Site does not create a provider-patient relationship. Care begins only after
                  you are evaluated and accepted as a patient.
                </p>
                <p className={P}>
                  Visits are by secure video. {CONTACT.serviceArea}.
                </p>
                <div role="note" className="mt-5 rounded-2xl border border-accent/25 border-l-4 border-l-accent bg-white p-5">
                  <p className="leading-relaxed text-ink/85">
                    <CrisisText text={CRISIS.full} linkClassName={A} />
                  </p>
                </div>
              </Section>

              <Section id="intellectual-property" title="Intellectual property rights">
                <h3 className={H3}>Our limited license to you</h3>
                <p className={P}>
                  This Site and all the materials available on the Site are the property of {LEGAL_NAME} and/or our
                  affiliates or licensors and are protected by copyright, trademark, and other intellectual property laws.
                  The Site is provided solely for your personal non-commercial use.
                </p>
                <p className={P}>
                  You may not use the Site or the materials available on the Site in a manner that constitutes an
                  infringement of our rights or that has not been authorized by us.
                </p>
                <p className={P}>
                  Unless explicitly authorized, you may not modify, copy, reproduce, republish, upload, post, transmit,
                  translate, sell, create derivative works, exploit, or distribute in any manner or medium any material from
                  the Site. However, you may download and/or print one copy of individual pages for your personal,
                  non-commercial use, provided that you keep intact all copyright and other proprietary notices.
                </p>

                <h3 className={H3}>Your license to us</h3>
                <p className={P}>
                  By posting or submitting any material (including comments, social media posts, photos, and videos) to us
                  via the Site, internet groups, or other digital venues, you represent that you own the material or have
                  obtained the necessary permissions. You grant us a royalty-free, perpetual, irrevocable, non-exclusive,
                  worldwide license to use, modify, transmit, sell, exploit, create derivative works from, distribute, and
                  publicly perform or display such material. This does not apply to health information or to messages you
                  send us about scheduling or your care, which we handle as described in our Privacy Policy.
                </p>
              </Section>

              <Section id="disclaimers" title="Disclaimers">
                <p className={P}>
                  Throughout the Site, we may provide links and pointers to Internet sites maintained by third parties. Our
                  linking to such third-party sites does not imply an endorsement or sponsorship of such sites or the
                  information, products, or services offered on or through the sites.
                </p>
                <p className={P}>
                  The information and services offered on or through the Site are provided &ldquo;as is&rdquo; and without
                  warranties of any kind, either express or implied. To the fullest extent permissible pursuant to applicable
                  law, we disclaim all warranties, including implied warranties of merchantability and fitness for a
                  particular purpose.
                </p>
                <p className={P}>
                  You agree at all times to indemnify and hold harmless {LEGAL_NAME}, its affiliates, and their respective
                  officers, directors, agents, and employees from any claims, causes of action, damages, liabilities, costs,
                  and expenses arising out of or related to your breach of any obligation, warranty, or representation under
                  these Terms of Service.
                </p>
              </Section>

              <Section id="third-party-services" title="Third-party services">
                <p className={P}>
                  Certain sections of the Site link to third-party services, such as Alma and Headway for booking with
                  insurance. We are not responsible for the quality, accuracy, timeliness, reliability, or any other aspect
                  of those services. When you use a third-party service linked through the Site, the information you provide,
                  including payment information, may be collected by both that service and us.
                </p>
                <p className={P}>
                  Your use of any third-party service is governed by its own terms and privacy policy. {LEGAL_NAME} shall not
                  be responsible for any loss or damage incurred as a result of such dealings.
                </p>
              </Section>

              <Section id="termination" title="Termination">
                <p className={P}>
                  We reserve the right to terminate or suspend your access to the Site, without notice, if we determine that
                  you have violated these Terms of Service or engaged in conduct that we deem inappropriate or unlawful. Upon
                  termination, you must cease all use of the Site and any content obtained from it.
                </p>
              </Section>

              <Section id="governing-law" title="Governing law">
                <p className={P}>
                  These Terms of Service shall be governed by and construed in accordance with the laws of the State of{' '}
                  {CONTACT.state}. Any dispute arising under these Terms shall be resolved exclusively through binding
                  arbitration in that jurisdiction.
                </p>
              </Section>

              <Section id="changes" title="Changes to Terms of Service">
                <p className={P}>
                  We may update these Terms of Service from time to time. The latest version will always be available on our
                  website with the effective date.
                </p>
              </Section>

              <Section id="contact" title="Contact">
                <p className={P}>For any questions regarding these Terms of Service, please contact us at:</p>
                <address className="mt-5 rounded-2xl border border-border bg-white p-6 not-italic leading-relaxed">
                  <p className="font-semibold text-primary">{LEGAL_NAME}</p>
                  <p className="mt-2 text-ink/85">
                    Phone:{' '}
                    <a href={CONTACT.phoneHref} className={A}>
                      {CONTACT.phone}
                    </a>
                  </p>
                  <p className="text-ink/85">
                    Email:{' '}
                    <a href={`mailto:${CONTACT.email}`} className={`${A} break-all`}>
                      {CONTACT.email}
                    </a>
                  </p>
                  <p className="text-ink/85">
                    Website:{' '}
                    <Link href="/" className={A}>
                      {SITE_HOST}
                    </Link>
                  </p>
                </address>
                <p className={P}>By using our website and services, you consent to these Terms of Service.</p>
              </Section>
            </article>
          </div>
        </Container>
      </div>
    </main>
  )
}
