import Image from 'next/image'
import { CONTACT, NAV_CTA } from '@/lib/site'
import { BRAND_IMAGES } from '@/lib/images'
import Container from './Container'
import SmartLink, { BUTTON, isExternal } from './SmartLink'
import { ExternalIcon, PhoneIcon } from './icons'

type Cta = { label: string; href: string }

/**
 * Closing call to action. primary defaults to NAV_CTA (Book an Appointment); secondary
 * defaults to calling the practice. Renders a full-width section.
 */
export default function CtaBand({
  heading,
  body,
  primary = NAV_CTA,
  secondary = { label: `Call ${CONTACT.phone}`, href: CONTACT.phoneHref },
}: {
  heading: string
  body?: string
  primary?: Cta
  secondary?: Cta
}) {
  return (
    <section className="bg-cream py-16 sm:py-20">
      <Container>
        <div className="relative isolate overflow-hidden rounded-[2rem] bg-gradient-to-br from-peach via-light to-light px-6 py-12 sm:px-12 sm:py-14 lg:px-16">
          <Image
            src={BRAND_IMAGES.rose.src}
            alt=""
            width={BRAND_IMAGES.rose.width}
            height={BRAND_IMAGES.rose.height}
            sizes="(min-width: 1024px) 288px, 160px"
            className="pointer-events-none absolute -bottom-10 -right-8 -z-10 h-auto w-40 opacity-25 sm:w-56 lg:-right-4 lg:w-72 lg:opacity-40"
          />
          <div className="max-w-2xl">
            <h2 className="font-cormorant text-[2rem] font-semibold leading-[1.1] text-primary sm:text-4xl lg:text-[2.75rem]">
              {heading}
            </h2>
            {body && <p className="mt-4 text-lg leading-relaxed text-ink/80">{body}</p>}
            <div className="mt-8 flex flex-wrap gap-3">
              <SmartLink href={primary.href} className={`${BUTTON.base} ${BUTTON.lg} ${BUTTON.accent}`}>
                {primary.label}
                {isExternal(primary.href) && <ExternalIcon />}
              </SmartLink>
              {secondary && (
                <SmartLink href={secondary.href} className={`${BUTTON.base} ${BUTTON.lg} ${BUTTON.outlineDark}`}>
                  {secondary.href.startsWith('tel:') && <PhoneIcon />}
                  {secondary.label}
                  {isExternal(secondary.href) && <ExternalIcon />}
                </SmartLink>
              )}
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}
