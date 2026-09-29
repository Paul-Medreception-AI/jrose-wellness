import { NextRequest, NextResponse } from 'next/server'
import { deliver, toE164, NotConfiguredError } from '@/lib/deliver'
import { CONTACT } from '@/lib/site'

// Server-side handler for the public contact and appointment-request form
// (components/site/ContactForm.tsx). Ported from guardian-primary-care/app/api/contact/route.ts.
//
// The Studio token stays SERVER-side. Studio's ingest endpoint deliberately has no CORS, and a
// secret in the browser bundle can be read and replayed by anyone. A sibling practice site wired
// its webhook into the client and spent July 2026 receiving gibberish-name leads. Two cheap
// checks run before anything is forwarded:
//   1. honeypot       a hidden field only a bot fills (hp_leave_blank)
//   2. submit timing  a person cannot complete this form in under 1.5s
// Both answer with a FAKE success so a bot does not learn it was caught and retry.
//
// Never logged: the request body (it holds what a patient typed) and the Studio token.

export const runtime = 'nodejs'

const MIN_SUBMIT_MS = 1500
const OFFICE_PHONE = CONTACT.phone
const SITE = 'www.jrosewellness.com'

const FAILED = `We could not send your message. Please call us at ${OFFICE_PHONE}.`

type ContactBody = {
  name?: string
  email?: string
  phone?: string
  reason?: string
  message?: string
  preferredContact?: string
  pagePath?: string
  // Which placement of the form this came from (the component's `source` prop), e.g. "contact".
  formSource?: string
  // The honeypot, hidden in the UI. Real users never fill this in, provided its name gives
  // browser autofill nothing to recognise. See components/site/ContactForm.tsx.
  hp_leave_blank?: string
  // Milliseconds between the form mounting and submit.
  timeElapsedMs?: number
}

const PREFERRED: Record<string, string> = {
  phone: 'Phone call',
  email: 'Email',
  text: 'Text message',
}

const clip = (v: unknown, n: number) => String(v ?? '').trim().slice(0, n)

/**
 * The board's New / Existing patient tag, derived from the reason the patient picked. Studio
 * reads `patient_type` (app/phone.py VISIT_KIND_KEYS). Derived here from our own option wording,
 * never taken from the request, so a crafted post cannot label a card. Billing and "something
 * else" state no status, so they send none rather than a guess.
 */
function patientTypeFor(reason: string): string | undefined {
  const r = reason.toLowerCase()
  if (r.startsWith('new patient')) return 'New patient'
  if (r.startsWith('current patient')) return 'Existing patient'
  return undefined
}

export async function POST(request: NextRequest) {
  let body: ContactBody
  try {
    body = await request.json()
  } catch {
    return NextResponse.json({ error: 'Invalid request' }, { status: 400 })
  }
  if (!body || typeof body !== 'object' || Array.isArray(body)) {
    return NextResponse.json({ error: 'Invalid request' }, { status: 400 })
  }

  // Only this field name. Guardian's first trap, company_website, was filled by Chrome autofill
  // for real people and their messages were dropped behind a fake "Message sent".
  if (typeof body.hp_leave_blank === 'string' && body.hp_leave_blank.trim()) {
    console.warn('[contact] honeypot triggered, dropped')
    return NextResponse.json({ success: true }, { status: 200 })
  }

  // A MISSING value is a bot too. Our own form always sends it, so its absence means the caller
  // is not our form, and a bot posting directly would otherwise just omit the field.
  if (typeof body.timeElapsedMs !== 'number' || body.timeElapsedMs < MIN_SUBMIT_MS) {
    const t =
      typeof body.timeElapsedMs === 'number'
        ? Math.round(body.timeElapsedMs)
        : body.timeElapsedMs === undefined
          ? 'missing'
          : 'not a number'
    console.warn(`[contact] bad or missing timing (${t}), dropped`)
    return NextResponse.json({ success: true }, { status: 200 })
  }

  const name = clip(body.name, 120)
  const email = clip(body.email, 200)
  if (!name || !email) {
    return NextResponse.json({ error: 'Please provide your name and email.' }, { status: 400 })
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return NextResponse.json({ error: 'Please enter a valid email address.' }, { status: 400 })
  }

  const rawPhone = clip(body.phone, 40)
  const phone = toE164(rawPhone)
  if (rawPhone && !phone) {
    return NextResponse.json(
      { error: 'Please check your phone number, including the area code.' },
      { status: 400 },
    )
  }

  const preferredKey = clip(body.preferredContact, 20).toLowerCase()
  const preferred = PREFERRED[preferredKey]
  if ((preferredKey === 'phone' || preferredKey === 'text') && !phone) {
    return NextResponse.json(
      { error: 'Please add a phone number so we can reach you the way you asked.' },
      { status: 400 },
    )
  }

  const reason = clip(body.reason, 120)

  // Field names match Studio's contract (medreception-studio app/store.py web_submission): name,
  // email, phone and message become columns on the card; everything else is kept verbatim as
  // details, so the reason for the enquiry and how to reply reach the practice instead of being
  // dropped. No health fields exist on this form by design: the site does not solicit them.
  const payload: Record<string, unknown> = {
    name,
    email,
    phone,
    message: clip(body.message, 4000) || undefined,
    reason_for_visit: reason || undefined,
    patient_type: patientTypeFor(reason),
    preferred_contact: preferred,
    form: clip(body.formSource, 60) || undefined,
    page_path: clip(body.pagePath, 300) || undefined,
    site: SITE,
  }

  try {
    await deliver('web_form', payload)
  } catch (error) {
    if (error instanceof NotConfiguredError) {
      // Until the Studio token is attached there is nowhere to send this. Say so plainly and
      // give the patient the phone number, rather than pretend it went through.
      console.error('[contact] Studio ingest is not configured; submission NOT delivered')
    } else {
      // Name and message only: never the payload, never the token.
      const what = error instanceof Error ? `${error.name}: ${error.message}` : 'unknown error'
      console.error(`[contact] Studio delivery failed; submission NOT delivered (${what})`)
    }
    return NextResponse.json({ error: FAILED }, { status: 503 })
  }

  return NextResponse.json(
    { success: true, message: "Thank you. We got your message and will be in touch soon." },
    { status: 200 },
  )
}
