// The questions answered on /faq, shared so other pages reuse the same wording and so FAQPage
// structured data is emitted once. Google allows one marked-up instance of a given Q&A across a
// site: /faq owns every question here, and FaqList's `withSchema` on any other page marks up only
// the questions that are not in SITE_FAQ_QS.
//
// NP_ROLE and GETTING_STARTED are the new answers from FACTS.md section 10. They are built from
// lib/site.ts values and still need Jessica's approval (see CONFIRM_BEFORE_LAUNCH).

import { AGES, BOOKING, CONTACT, CRISIS, PRACTICE_FAQS, PRICING, PROVIDER } from '@/lib/site'

export type Faq = { q: string; a: string }

const FIRST_NAME = PROVIDER.name.split(' ')[0]

export const NP_ROLE: Faq = {
  q: 'Is a psychiatric NP a psychiatrist?',
  a: `No. ${FIRST_NAME} is a board-certified psychiatric-mental health nurse practitioner (an APRN), not a physician, and is licensed in ${CONTACT.state} to evaluate, diagnose, treat, and prescribe.`,
}

export const GETTING_STARTED: Faq[] = [
  { q: 'What ages do you see?', a: `${FIRST_NAME} sees ${AGES.short.toLowerCase()}.` },
  {
    q: 'How long is the first visit?',
    a: `${BOOKING.alma.note} If you book another way, ask about visit length when you schedule.`,
  },
  {
    q: 'Do you take insurance?',
    a: 'Yes, by booking through Alma or Headway. Plans are listed on our Insurance & Pricing page.',
  },
  {
    q: 'How much does it cost?',
    a: `Self-pay visits are ${PRICING.initialEvaluation.price} for the initial evaluation and ${PRICING.followUp.price} for follow-up and medication management. With insurance through Alma or Headway, your cost depends on your plan.`,
  },
  { q: 'Is there a sliding scale?', a: `Yes. ${PRICING.slidingScale}` },
  { q: 'Is this an emergency service?', a: `No. ${CRISIS.full}` },
]

/** Every question shown (and marked up) on /faq. */
export const SITE_FAQ_QS: ReadonlySet<string> = new Set(
  [...PRACTICE_FAQS, NP_ROLE, ...GETTING_STARTED].map((f) => f.q),
)

/** The questions on a page that /faq does not already mark up. */
export function uniqueToPage<T extends Faq>(faqs: ReadonlyArray<T>): T[] {
  return faqs.filter((f) => !SITE_FAQ_QS.has(f.q))
}
