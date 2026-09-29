import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import type { ReactNode } from 'react'
import { CONTACT, LEGAL_NAME, NO_MEDICAL_ADVICE, SITE_NAME, SITE_URL, withBrand } from '@/lib/site'
import { BRAND_IMAGES, imageFor } from '@/lib/images'
import Container from '@/components/site/Container'

// Rewritten from the practice's live /privacy-sms (effective September 1st, 2026). Every A2P/SMS
// element of the live page is kept: the opt-in data notice, consent, STOP/HELP, "Message and data
// rates may apply", "Message frequency varies", carriers not liable, and the statement that
// mobile opt-in data is never shared with third parties for marketing. Changes: the canonical
// email and phone from lib/site.ts, the broken "//privacy-policy" link now points here, and the
// website section describes what the contact form actually collects instead of claiming the site
// collects no health information.

const ROUTE = '/privacy-sms'
const TITLE = withBrand('Privacy Policy & SMS Privacy')
const DESCRIPTION =
  'How JRose Wellness PLLC collects, uses, and protects website, contact form, and text message information, including SMS consent, opting out, and your choices.'
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
  { id: 'sms-data-notice', label: 'Text messaging data notice' },
  { id: 'information-we-collect', label: '1. Information we collect' },
  { id: 'how-we-use-information', label: '2. How we use your information' },
  { id: 'sms-messaging', label: '3. SMS messaging & compliance' },
  { id: 'information-sharing', label: '4. Information sharing & disclosure' },
  { id: 'data-security', label: '5. Data security' },
  { id: 'cookies', label: '6. Cookies & analytics' },
  { id: 'your-rights', label: '7. Your rights & choices' },
  { id: 'hipaa', label: '8. Privacy, HIPAA & health information' },
  { id: 'changes', label: '9. Changes to this policy' },
  { id: 'contact-us', label: '10. Contact us' },
]

const H2 = 'scroll-mt-28 font-cormorant text-[1.85rem] font-semibold leading-tight text-primary sm:text-[2.1rem]'
const H3 = 'mt-6 font-semibold text-ink'
const P = 'mt-4 leading-relaxed text-ink/85'
const UL = 'mt-3 list-disc space-y-2 pl-5 leading-relaxed text-ink/85 marker:text-accent'
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

export default function PrivacySmsPage() {
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
              Privacy Policy
            </span>
          </nav>
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">{LEGAL_NAME}</p>
          <h1 className="mt-3 font-cormorant text-[2.6rem] font-semibold leading-[1.05] text-primary sm:text-5xl lg:text-[3.5rem]">
            Privacy Policy
          </h1>
          <p className="mt-4 max-w-2xl text-lg leading-relaxed text-ink/80">
            How we collect, use, and protect information from this website, our contact form, and our text message program.
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
                  <Link href="/terms-sms#sms-terms" className={A}>
                    SMS Terms
                  </Link>
                  .
                </p>
              </nav>
            </aside>

            <article className="max-w-3xl space-y-10 lg:col-span-8 xl:col-span-9">
              <Section id="sms-data-notice" title="Important notice regarding text messaging data">
                <p className={P}>
                  {LEGAL_NAME} (&ldquo;{SITE_NAME},&rdquo; &ldquo;we,&rdquo; &ldquo;us,&rdquo; or &ldquo;our&rdquo;)
                  DOES NOT share customer opt-in information, including phone numbers and consent records, with any
                  affiliates or third parties for marketing, promotional, or any other purposes unrelated to providing
                  our direct services. All text messaging originator opt-in data is kept strictly confidential.
                </p>
              </Section>

              <Section id="information-we-collect" title="1. Information we collect">
                <p className={P}>We collect the following types of information:</p>

                <h3 className={H3}>Information you send through our contact and appointment request form</h3>
                <ul className={UL}>
                  <li>Your name and email address</li>
                  <li>Your phone number, if you give one (it is required only if you ask us to call or text you back)</li>
                  <li>
                    The reason you are reaching out, chosen from a short list (for example, a self-pay appointment request
                    or a billing question)
                  </li>
                  <li>How you would like us to get back to you (phone call, email, or text message)</li>
                  <li>An optional message</li>
                  <li>Which page of the website the form was sent from</li>
                </ul>

                <div role="note" className="mt-6 rounded-2xl border border-border bg-white p-5">
                  <p className="font-semibold text-primary">Please don&rsquo;t send medical details through this website</p>
                  <p className="mt-1 leading-relaxed text-ink/85">
                    The website and its form are for scheduling and general questions, so please leave out symptoms,
                    diagnoses, medications, and other medical details. {NO_MEDICAL_ADVICE} If you do include health
                    information, we keep it confidential and handle it as described in{' '}
                    <a href="#hipaa" className={A}>
                      section 8
                    </a>
                    .
                  </p>
                </div>

                <h3 className={H3}>Other personal information</h3>
                <ul className={UL}>
                  <li>Name, email address, phone number, and mailing address when you call, email, or text us, or become a patient</li>
                  <li>Payment and insurance information needed to schedule and bill for your care</li>
                  <li>Opt-in records and timestamps for all communication channels (SMS, email, etc.)</li>
                </ul>

                <h3 className={H3}>Non-personal information</h3>
                <ul className={UL}>
                  <li>IP address, browser type, device information</li>
                  <li>Website usage patterns and analytics (see section 6)</li>
                  <li>Cookies and similar technologies</li>
                </ul>

                <h3 className={H3}>Customer communication</h3>
                <ul className={UL}>
                  <li>Records of inquiries and service requests</li>
                  <li>Appointment details and preferences</li>
                  <li>Service history and feedback</li>
                </ul>
              </Section>

              <Section id="how-we-use-information" title="2. How we use your information">
                <p className={P}>We use collected data for:</p>
                <ul className={UL}>
                  <li>Providing and improving our services</li>
                  <li>Responding to your questions and scheduling appointments</li>
                  <li>Processing transactions and payments</li>
                  <li>Communicating with you about your inquiries and appointments</li>
                  <li>Enhancing website functionality and user experience</li>
                  <li>Ensuring security and fraud prevention</li>
                  <li>Maintaining records of your communication preferences and consent</li>
                </ul>
              </Section>

              <Section id="sms-messaging" title="3. SMS messaging & compliance">
                <h3 className={H3}>Text message program terms &amp; conditions</h3>
                <p className={P}>
                  By opting into our SMS messaging services, you agree to receive text messages related to our services,
                  including appointment reminders, customer support, and important updates. You can opt in on our{' '}
                  <Link href="/patient-form-sms" className={A}>
                    text message opt-in page
                  </Link>
                  . The full program terms are in our{' '}
                  <Link href="/terms-sms#sms-terms" className={A}>
                    SMS Terms
                  </Link>
                  .
                </p>

                <h3 className={H3}>Opt-in &amp; consent</h3>
                <ul className={UL}>
                  <li>You will only receive messages if you have explicitly opted in</li>
                  <li>We maintain timestamped records of all opt-in actions</li>
                  <li>You must be 18 years or older to participate in our SMS program</li>
                  <li>Consent to receive text messages is not a condition of receiving care</li>
                  <li>We comply with the Telephone Consumer Protection Act (TCPA) and all applicable laws</li>
                </ul>

                <h3 className={H3}>Opt-out instructions</h3>
                <ul className={UL}>
                  <li>You can cancel SMS notifications at any time by replying &ldquo;STOP&rdquo;</li>
                  <li>
                    You will receive a final confirmation message, and no further messages will be sent unless you re-opt in
                  </li>
                  <li>All opt-out requests are processed immediately</li>
                </ul>

                <h3 className={H3}>Message frequency &amp; content</h3>
                <ul className={UL}>
                  <li>Message frequency varies based on your interactions with our business</li>
                  <li>Messages will be directly related to the services you have requested</li>
                  <li>We do not send promotional content without specific consent</li>
                </ul>

                <h3 className={H3}>Help &amp; support</h3>
                <ul className={UL}>
                  <li>
                    Reply &ldquo;HELP&rdquo; for assistance, or contact us at{' '}
                    <a href={`mailto:${CONTACT.email}`} className={`${A} break-all`}>
                      {CONTACT.email}
                    </a>{' '}
                    or{' '}
                    <a href={CONTACT.phoneHref} className={A}>
                      {CONTACT.phone}
                    </a>
                  </li>
                </ul>

                <h3 className={H3}>Carrier information</h3>
                <ul className={UL}>
                  <li>Message and data rates may apply</li>
                  <li>Carriers are not liable for delayed or undelivered messages</li>
                  <li>Supported carriers include AT&amp;T, Verizon, T-Mobile, and most regional carriers</li>
                </ul>

                <h3 className={H3}>SMS data protection statement</h3>
                <p className={P}>
                  No mobile information will be shared with third parties/affiliates for marketing/promotional purposes.
                  Information sharing to subcontractors in support services, such as customer service, is permitted. All
                  other use case categories exclude text messaging originator opt-in data and consent; this information
                  will not be shared with any third parties.
                </p>
                <p className={P}>
                  We implement strict data protection measures to safeguard your SMS opt-in information and consent
                  records.
                </p>
              </Section>

              <Section id="information-sharing" title="4. Information sharing & disclosure">
                <p className={P}>
                  We do not sell, rent, or trade personal information or Protected Health Information. We may share
                  information with:
                </p>

                <h3 className={H3}>Healthcare operations</h3>
                <ul className={UL}>
                  <li>Other healthcare providers involved in your care for treatment coordination purposes</li>
                  <li>Health insurance companies and third-party payers for billing and claims processing</li>
                  <li>Healthcare clearinghouses as necessary for payment processing</li>
                </ul>

                <h3 className={H3}>Service providers</h3>
                <ul className={UL}>
                  <li>
                    Third-party vendors who assist in our operations (for example, the systems that receive our phone
                    calls, text messages, and website form messages, payment processing, appointment scheduling, and
                    electronic health records) under Business Associate Agreements where required
                  </li>
                  <li>SMS aggregators and providers solely for the purpose of delivering messages you&rsquo;ve consented to receive</li>
                  <li>
                    All service providers are contractually obligated to maintain confidentiality, security, and HIPAA
                    compliance where applicable
                  </li>
                </ul>

                <h3 className={H3}>Booking platforms</h3>
                <p className={P}>
                  If you book with insurance through Alma or Headway, those platforms collect and handle your information
                  under their own privacy policies.
                </p>

                <h3 className={H3}>Legal requirements</h3>
                <ul className={UL}>
                  <li>When required by law, regulation, or legal process</li>
                  <li>To public health authorities as required or permitted by law</li>
                  <li>For health oversight activities, judicial proceedings, or law enforcement purposes as permitted by HIPAA</li>
                </ul>

                <h3 className={H3}>Business transfers</h3>
                <ul className={UL}>
                  <li>In case of mergers, acquisitions, or sale of assets</li>
                  <li>In such cases, your data remains protected under the terms of this policy and applicable law</li>
                </ul>

                <p className={P}>
                  All the above categories exclude text messaging originator opt-in data and consent; this information
                  will not be shared with any third parties, excluding aggregators and providers of the Text Message
                  services.
                </p>
              </Section>

              <Section id="data-security" title="5. Data security">
                <p className={P}>We implement and maintain reasonable security measures to protect your personal information:</p>
                <ul className={UL}>
                  <li>Encryption of sensitive data in transit and at rest</li>
                  <li>Secure access controls and authentication mechanisms</li>
                  <li>Regular security reviews and updates</li>
                  <li>Data protection training for anyone who handles your information</li>
                  <li>Breach notification protocols in accordance with applicable laws</li>
                  <li>Secure backup systems and disaster recovery procedures</li>
                </ul>
                <p className={P}>
                  Despite these measures, no method of transmission over the Internet or electronic storage is 100%
                  secure. We strive to use commercially acceptable means to protect your personal information but cannot
                  guarantee absolute security.
                </p>
              </Section>

              <Section id="cookies" title="6. Cookies & analytics">
                <p className={P}>We use cookies and similar technologies to:</p>
                <ul className={UL}>
                  <li>Analyze site traffic and how visitors use the site</li>
                  <li>Remember your preferences</li>
                  <li>Improve website functionality and user experience</li>
                </ul>

                <h3 className={H3}>Google Analytics</h3>
                <p className={P}>
                  This website uses Google Analytics, a web analytics service from Google. It uses cookies to tell us
                  which pages are visited, how visitors reach the site, and general information about the device,
                  browser, and approximate location (such as city or region). We use these reports only to understand
                  and improve the website. What you type into our contact form is not sent to Google Analytics. Google
                  handles this information under its own privacy policy.
                </p>
                <p className={P}>
                  You may control cookies through your browser settings, or opt out of Google Analytics with the{' '}
                  <a href="https://tools.google.com/dlpage/gaoptout" target="_blank" rel="noopener noreferrer" className={A}>
                    Google Analytics opt-out browser add-on
                  </a>
                  . Disabling cookies may limit your ability to use certain features of our website.
                </p>
              </Section>

              <Section id="your-rights" title="7. Your rights & choices">
                <p className={P}>You have the right to:</p>
                <ul className={UL}>
                  <li>Access, update, or delete your personal information</li>
                  <li>Opt out of any marketing emails by clicking &ldquo;unsubscribe&rdquo; in those emails</li>
                  <li>Opt out of SMS messages by replying &ldquo;STOP&rdquo;</li>
                  <li>Request information on how we process your data</li>
                  <li>Withdraw consent at any time for future communications</li>
                  <li>Lodge a complaint with a supervisory authority if you believe your rights have been violated</li>
                </ul>
                <p className={P}>
                  To exercise these rights, please contact us using the information in{' '}
                  <a href="#contact-us" className={A}>
                    section 10
                  </a>
                  .
                </p>
              </Section>

              <Section id="hipaa" title="8. Privacy, HIPAA & health information">
                <p className={P}>
                  For privacy-related inquiries, please refer to this Privacy Policy at{' '}
                  <Link href={ROUTE} className={A}>
                    {SITE_HOST}
                    {ROUTE}
                  </Link>{' '}
                  or contact us.
                </p>
                <p className={P}>
                  As a healthcare provider, we are committed to protecting your Protected Health Information (PHI) in
                  accordance with the Health Insurance Portability and Accountability Act (HIPAA).
                </p>
                <ul className={UL}>
                  <li>
                    SMS is not a fully encrypted communication method. We minimize the amount of health information
                    included in text messages to protect your privacy.
                  </li>
                  <li>
                    We will not include detailed medical records, diagnoses, lab results, or other sensitive clinical data in
                    SMS messages.
                  </li>
                  <li>
                    By opting in, you acknowledge that standard SMS messages may be intercepted or read by unauthorized
                    parties due to the nature of wireless communications, and you accept this risk for the convenience of
                    receiving appointment-related text messages.
                  </li>
                  <li>
                    Your consent to receive SMS messages is separate from and does not replace any HIPAA authorizations or
                    medical consent forms.
                  </li>
                  <li>
                    Website forms and regular email are not a secure way to share medical information. Please share health
                    details with Jessica during your visit instead.
                  </li>
                  <li>
                    We comply with the Telephone Consumer Protection Act (TCPA), HIPAA, CTIA guidelines, and all applicable
                    federal and state regulations regarding SMS communications and health information.
                  </li>
                </ul>
              </Section>

              <Section id="changes" title="9. Changes to this Privacy Policy">
                <p className={P}>
                  We may update this policy periodically. The latest version will always be available on our website with
                  the effective date. For significant changes, we will notify you by email or through a notice on our
                  website.
                </p>
              </Section>

              <Section id="contact-us" title="10. Contact us">
                <p className={P}>
                  If you have questions about this Privacy Policy or how your information is handled, contact us at:
                </p>
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

                <p className={P}>To file a HIPAA complaint, you may also contact:</p>
                <div className="mt-5 rounded-2xl border border-border bg-white p-6 leading-relaxed">
                  <p className="font-semibold text-primary">U.S. Department of Health and Human Services</p>
                  <p className="mt-2 text-ink/85">Office for Civil Rights</p>
                  <p className="text-ink/85">
                    Website:{' '}
                    <a href="https://www.hhs.gov/ocr" target="_blank" rel="noopener noreferrer" className={A}>
                      www.hhs.gov/ocr
                    </a>
                  </p>
                </div>

                <p className={P}>
                  By using our website and services, you consent to this Privacy Policy. This policy does not replace or
                  modify the informed consent process for medical treatment or our HIPAA Notice of Privacy Practices.
                </p>
              </Section>
            </article>
          </div>
        </Container>
      </div>
    </main>
  )
}
