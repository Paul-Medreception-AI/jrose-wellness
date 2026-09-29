import Image from 'next/image'
import Link from 'next/link'
import { CONTACT, CRISIS, LEGAL_NAME, NAV, NAV_CTA, NO_MEDICAL_ADVICE, PROVIDER, SITE_NAME, SOCIAL, type NavChild } from '@/lib/site'
import { BRAND_IMAGES } from '@/lib/images'
import Container from './Container'
import CrisisText from './CrisisText'
import { FacebookIcon, InstagramIcon, LifebuoyIcon, MailIcon, PhoneIcon, VideoIcon } from './icons'

const byLabel = (label: string) => NAV.find((n) => n.label === label)
const kids = (label: string): NavChild[] => byLabel(label)?.children ?? []

const LEGAL_LINKS = [
  { label: 'Privacy Policy & SMS Privacy', href: '/privacy-sms' },
  { label: 'Terms & SMS Terms', href: '/terms-sms' },
  { label: 'Accessibility', href: '/accessibility' },
  { label: 'Text Message Opt-In', href: '/patient-form-sms' },
]

function Column({ title, links }: { title: string; links: NavChild[] }) {
  return (
    <div>
      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-peach">{title}</p>
      <ul className="mt-4 space-y-2.5">
        {links.map((l) => (
          <li key={l.href + l.label}>
            <Link href={l.href} className="text-[15px] text-white/75 transition-colors hover:text-white">
              {l.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default function SiteFooter() {
  const year = new Date().getFullYear()
  const services = kids('Services')
  const conditions = kids('Conditions')
  const audiences = kids('Who We Help')
  const contact = byLabel('Contact')
  // Practice: About, Your First Visit, Insurance & Pricing, FAQ, Blog (from the About menu) + Contact.
  const practice: NavChild[] = [...kids('About'), ...(contact ? [{ label: contact.label, href: contact.href }] : [])]

  return (
    <footer className="bg-dark text-white">
      <Container className="py-16 lg:py-20">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-8">
          {/* Brand + contact */}
          <div className="lg:col-span-4">
            <Link href="/" className="inline-flex items-center gap-3" aria-label={`${SITE_NAME}, home`}>
              <Image
                src={BRAND_IMAGES.logo.src}
                alt=""
                width={112}
                height={112}
                className="h-14 w-14 rounded-full ring-1 ring-white/20"
              />
              <span className="font-cormorant text-[1.85rem] font-semibold leading-none text-white">{SITE_NAME}</span>
            </Link>
            <p className="mt-5 max-w-sm text-[15px] leading-relaxed text-white/75">
              Telehealth psychiatric care for adolescents 15 and older and adults in Connecticut, with {PROVIDER.byline}.
            </p>

            <ul className="mt-6 space-y-3 text-[15px]">
              <li>
                <a href={CONTACT.phoneHref} className="inline-flex items-center gap-3 text-white/85 transition-colors hover:text-white">
                  <PhoneIcon className="h-4 w-4 text-peach" />
                  {CONTACT.phone}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${CONTACT.email}`}
                  className="inline-flex items-center gap-3 break-all text-white/85 transition-colors hover:text-white"
                >
                  <MailIcon className="h-4 w-4 shrink-0 text-peach" />
                  {CONTACT.email}
                </a>
              </li>
              <li className="flex items-center gap-3 text-white/85">
                <VideoIcon className="h-4 w-4 shrink-0 text-peach" />
                {CONTACT.serviceArea}
              </li>
            </ul>

            <div className="mt-6 flex items-center gap-3">
              <a
                href={SOCIAL.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${SITE_NAME} on Instagram (opens in a new tab)`}
                className="grid h-10 w-10 place-items-center rounded-full border border-white/20 text-white/80 transition-colors hover:border-white hover:text-white"
              >
                <InstagramIcon className="h-[18px] w-[18px]" />
              </a>
              <a
                href={SOCIAL.facebook}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${SITE_NAME} on Facebook (opens in a new tab)`}
                className="grid h-10 w-10 place-items-center rounded-full border border-white/20 text-white/80 transition-colors hover:border-white hover:text-white"
              >
                <FacebookIcon className="h-[18px] w-[18px]" />
              </a>
            </div>
          </div>

          <nav aria-label="Footer" className="grid gap-10 sm:grid-cols-3 lg:col-span-8 lg:gap-8">
            <div className="space-y-10">
              <Column title="Services" links={services} />
              {audiences.length > 0 && <Column title="Who We Help" links={audiences} />}
            </div>
            <Column title="Conditions" links={conditions} />
            <div>
              <Column title="Practice" links={practice} />
              <Link
                href={NAV_CTA.href}
                className="mt-8 inline-flex rounded-full bg-accent px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-accent-dark"
              >
                {NAV_CTA.label}
              </Link>
            </div>
          </nav>
        </div>

        {/* Safety + scope notes */}
        <div className="mt-14 grid gap-4 lg:grid-cols-2">
          <div role="note" className="flex gap-3 rounded-2xl border border-white/15 bg-white/[0.06] p-5">
            <LifebuoyIcon className="mt-0.5 h-5 w-5 shrink-0 text-peach" />
            <p className="text-[15px] leading-relaxed text-white/90">
              <CrisisText text={CRISIS.full} linkClassName="font-semibold text-white underline underline-offset-2 hover:text-peach" />
            </p>
          </div>
          <div className="flex items-center rounded-2xl border border-white/10 p-5">
            <p className="text-sm leading-relaxed text-white/70">{NO_MEDICAL_ADVICE}</p>
          </div>
        </div>
      </Container>

      <div className="border-t border-white/10">
        <Container className="flex flex-col gap-4 py-6 text-sm text-white/60 lg:flex-row lg:items-center lg:justify-between">
          <p>
            &copy; {year} {LEGAL_NAME}. All rights reserved.
          </p>
          <ul className="flex flex-wrap gap-x-6 gap-y-2">
            {LEGAL_LINKS.map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="transition-colors hover:text-white">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </Container>
      </div>
    </footer>
  )
}
