import Link from 'next/link'
import type { ReactNode } from 'react'
import { BOOKING, CONTACT, INSURANCE_AS_OF, INSURANCE_HEADLINE, INSURANCE_HEADWAY, PRICING } from '@/lib/site'
import Container from './Container'
import SectionHeading from './SectionHeading'
import SmartLink, { BUTTON } from './SmartLink'
import { ArrowRight, CheckIcon, ExternalIcon, PhoneIcon } from './icons'

/**
 * The three ways to book: insurance through Alma, insurance through Headway, or self-pay.
 * Renders a full-width section with its own container. Cards are equal height with the
 * button pinned to the bottom.
 */
export default function BookingOptions({
  heading = 'Three ways to book',
  intro = 'Use your insurance by booking through Alma or Headway, or book a self-pay visit directly with the practice. Every visit is by secure video.',
  showRequest = true,
}: {
  heading?: string
  intro?: string
  showRequest?: boolean
}) {
  return (
    <section className="bg-light py-16 sm:py-20" aria-labelledby="booking-options-heading">
      <Container>
        <SectionHeading id="booking-options-heading" eyebrow="Book a visit" title={heading} intro={intro} align="center" />

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          <Card
            eyebrow="Insurance"
            title="Through Alma"
            body={
              <>
                <PlanChips plans={INSURANCE_HEADLINE} />
                <p className="mt-4 text-sm leading-relaxed text-muted">{BOOKING.alma.note}</p>
              </>
            }
            action={
              <SmartLink href={BOOKING.alma.href} className={`${BUTTON.base} ${BUTTON.sm} ${BUTTON.accent} w-full`}>
                {BOOKING.alma.label}
                <ExternalIcon />
              </SmartLink>
            }
          />

          <Card
            eyebrow="Insurance"
            title="Through Headway"
            body={
              <>
                <PlanChips plans={INSURANCE_HEADWAY.slice(0, 4)} />
                <p className="mt-4 text-sm leading-relaxed text-muted">{BOOKING.headway.note}</p>
              </>
            }
            action={
              <SmartLink href={BOOKING.headway.href} className={`${BUTTON.base} ${BUTTON.sm} ${BUTTON.accent} w-full`}>
                {BOOKING.headway.label}
                <ExternalIcon />
              </SmartLink>
            }
          />

          <Card
            eyebrow="Self-pay"
            title="Pay directly"
            body={
              <>
                <dl className="divide-y divide-border rounded-xl border border-border bg-cream">
                  {[PRICING.initialEvaluation, PRICING.followUp].map((p) => (
                    <div key={p.name} className="flex items-baseline justify-between gap-4 px-4 py-3">
                      <dt className="text-sm font-medium text-ink">{p.name}</dt>
                      <dd className="font-cormorant text-2xl font-semibold text-primary">{p.price}</dd>
                    </div>
                  ))}
                </dl>
                <p className="mt-4 flex items-start gap-2 text-sm leading-relaxed text-muted">
                  <CheckIcon className="mt-0.5 h-4 w-4 shrink-0 text-sage" />
                  {PRICING.slidingScale}
                </p>
              </>
            }
            action={
              <div className="space-y-3">
                {showRequest && (
                  <SmartLink href={BOOKING.request.href} className={`${BUTTON.base} ${BUTTON.sm} ${BUTTON.accent} w-full`}>
                    {BOOKING.request.label}
                  </SmartLink>
                )}
                <a
                  href={CONTACT.phoneHref}
                  className={`${BUTTON.base} ${BUTTON.sm} ${showRequest ? BUTTON.outlineDark : BUTTON.accent} w-full`}
                >
                  <PhoneIcon />
                  Call {CONTACT.phone}
                </a>
              </div>
            }
          />
        </div>

        <p className="mt-8 text-center text-sm text-muted">
          Plans listed as of {INSURANCE_AS_OF}.{' '}
          <Link
            href="/insurance"
            className="inline-flex items-center gap-1 font-semibold text-accent underline-offset-4 hover:underline"
          >
            See every plan and self-pay detail
            <ArrowRight className="h-3.5 w-3.5" />
          </Link>
        </p>
      </Container>
    </section>
  )
}

function Card({ eyebrow, title, body, action }: { eyebrow: string; title: string; body: ReactNode; action: ReactNode }) {
  return (
    <div className="flex h-full flex-col rounded-3xl border border-border bg-white p-6 shadow-[0_1px_2px_rgba(46,15,19,0.04),0_12px_32px_-16px_rgba(46,15,19,0.18)] sm:p-7">
      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">{eyebrow}</p>
      <h3 className="mt-2 font-cormorant text-[1.75rem] font-semibold leading-tight text-primary">{title}</h3>
      <div className="mt-5 flex-1">{body}</div>
      <div className="mt-6">{action}</div>
    </div>
  )
}

function PlanChips({ plans }: { plans: readonly string[] }) {
  return (
    <>
      <p className="text-sm font-medium text-ink">Plans include</p>
      <ul className="mt-3 flex flex-wrap gap-2">
        {plans.map((p) => (
          <li key={p} className="rounded-full border border-border bg-cream px-3 py-1 text-[13px] text-ink">
            {p}
          </li>
        ))}
        <li className="px-1 py-1 text-[13px] text-muted">and more</li>
      </ul>
    </>
  )
}
