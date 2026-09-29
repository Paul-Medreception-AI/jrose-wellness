'use client'

import { useEffect, useId, useRef, useState, type FormEvent } from 'react'
import { AGES, CONTACT, CRISIS, NO_MEDICAL_ADVICE } from '@/lib/site'
import CrisisText from './CrisisText'

// Posts to /api/contact, which forwards to MedReception Studio server-side. The Studio token never
// reaches the browser. See app/api/contact/route.ts and lib/deliver.ts.
//
// Ported from guardian-primary-care/components/ContactForm.tsx. Kept from there on purpose:
// the autofill-safe honeypot (hp_leave_blank), the submit timer measured from mount, and an error
// that always hands the patient the phone number.
//
// This form must not solicit health information: no condition checkboxes, no diagnosis or
// symptom fields. The message box says so, and the practice's own "no medical details" line and
// the crisis line sit directly under it.

const REASONS = [
  // Short enough to show in full in a phone-width select. Keep the "New patient" / "Current patient"
  // prefixes: app/api/contact/route.ts patientTypeFor() reads them.
  { key: 'self-pay', label: 'New patient: self-pay visit' },
  { key: 'insurance', label: 'New patient: using insurance' },
  { key: 'current-patient', label: 'Current patient: scheduling' },
  { key: 'billing', label: 'Billing or insurance question' },
  { key: 'other', label: 'Something else' },
] as const

const METHODS = [
  { value: 'phone', label: 'Phone call' },
  { value: 'email', label: 'Email' },
  { value: 'text', label: 'Text message' },
] as const

type Method = (typeof METHODS)[number]['value'] | ''
type Field = 'name' | 'email' | 'phone' | 'reason'
type Values = { name: string; email: string; phone: string; reason: string; message: string; preferred: Method }
type Errors = Partial<Record<Field, string>>
type Status =
  | { kind: 'idle' }
  | { kind: 'sending' }
  | { kind: 'sent'; message: string }
  | { kind: 'error'; message: string }

const FIELD_ORDER: Field[] = ['name', 'email', 'phone', 'reason']
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
const FALLBACK_ERROR = `We could not send your message. Please call us at ${CONTACT.phone}.`

/** Same rule as toE164() in lib/deliver.ts, so the form never accepts a number the server rejects. */
function phoneOk(raw: string): boolean {
  const digits = raw.replace(/\D/g, '')
  if (!digits) return false
  if (digits.length === 10) return true
  if (digits.length === 11 && digits.startsWith('1')) return true
  return raw.trim().startsWith('+')
}

/** `defaultReason` may be a short key ("self-pay", "insurance", "current-patient", "billing",
 *  "other") or the full option label. Anything else leaves the select on its placeholder. */
function resolveReason(input?: string): string {
  if (!input) return ''
  const want = input.trim().toLowerCase()
  const hit = REASONS.find((r) => r.key === want || r.label.toLowerCase() === want)
  return hit ? hit.label : ''
}

function validate(v: Values): Errors {
  const e: Errors = {}
  if (!v.name.trim()) e.name = 'Please enter your name.'
  if (!v.email.trim()) e.email = 'Please enter your email address.'
  else if (!EMAIL_RE.test(v.email.trim())) e.email = 'Please enter a valid email address, like name@example.com.'
  if (v.phone.trim() && !phoneOk(v.phone)) {
    e.phone = 'Please enter a 10-digit phone number, including the area code.'
  } else if (!v.phone.trim() && (v.preferred === 'phone' || v.preferred === 'text')) {
    e.phone = v.preferred === 'text' ? 'Add a mobile number so we can text you back.' : 'Add a phone number so we can call you back.'
  }
  if (!v.reason) e.reason = 'Please choose what we can help with.'
  return e
}

/** Render a message with the practice phone number as a tap-to-call link. */
function withPhoneLink(message: string, linkClass: string) {
  const at = message.indexOf(CONTACT.phone)
  const link = (
    <a href={CONTACT.phoneHref} className={linkClass}>
      {CONTACT.phone}
    </a>
  )
  if (at === -1) {
    return (
      <>
        {message} You can also call us at {link}.
      </>
    )
  }
  return (
    <>
      {message.slice(0, at)}
      {link}
      {message.slice(at + CONTACT.phone.length)}
    </>
  )
}

const LINK =
  'font-semibold text-[var(--color-primary)] underline underline-offset-2 hover:text-[var(--color-accent-dark)]'

export default function ContactForm({
  source,
  defaultReason,
  compact = false,
}: {
  /** Where this copy of the form sits, e.g. "contact" or "book-appointment". Shown to the practice. */
  source?: string
  /** Pre-selects "What can we help with?". A key ("self-pay", "insurance", "current-patient",
   *  "billing", "other") or the full option label. */
  defaultReason?: string
  /** Tighter spacing and a single column, for sidebars and narrow panels. */
  compact?: boolean
}) {
  const uid = useId()
  const id = (f: string) => `${uid}-${f}`

  const initial: Values = { name: '', email: '', phone: '', reason: resolveReason(defaultReason), message: '', preferred: '' }
  const [values, setValues] = useState<Values>(initial)
  const [errors, setErrors] = useState<Errors>({})
  const [touched, setTouched] = useState<Partial<Record<Field, boolean>>>({})
  const [status, setStatus] = useState<Status>({ kind: 'idle' })
  const [ready, setReady] = useState(false)
  const mountedAt = useRef<number>(0)
  const doneRef = useRef<HTMLDivElement>(null)

  // Measured from when the form is on screen, not from page load, so a slow network does not make
  // a real person look like a bot to the timing check. The button stays disabled until this has
  // run: before hydration a native submit would put what the patient typed into the page URL.
  useEffect(() => {
    mountedAt.current = Date.now()
    setReady(true)
  }, [])

  useEffect(() => {
    if (status.kind === 'sent') doneRef.current?.focus()
  }, [status.kind])

  function update<K extends keyof Values>(key: K, value: Values[K]) {
    const next = { ...values, [key]: value }
    setValues(next)
    // Refresh (or clear) an error as soon as the person fixes it, but do not nag about a field
    // before they have left it once. Choosing phone or text marks the phone label required
    // straight away; the error itself waits for blur or submit.
    const all = validate(next)
    setErrors((prev) => {
      const out: Errors = {}
      for (const f of FIELD_ORDER) if ((prev[f] || touched[f]) && all[f]) out[f] = all[f]
      return out
    })
  }

  function onBlur(field: Field) {
    setTouched((t) => ({ ...t, [field]: true }))
    const all = validate(values)
    setErrors((prev) => ({ ...prev, [field]: all[field] }))
  }

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    if (status.kind === 'sending') return

    const found = validate(values)
    setTouched({ name: true, email: true, phone: true, reason: true })
    setErrors(found)
    const first = FIELD_ORDER.find((f) => found[f])
    if (first) {
      document.getElementById(id(first))?.focus()
      return
    }

    const form = e.currentTarget
    const trap = new FormData(form).get('hp_leave_blank')
    setStatus({ kind: 'sending' })
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: values.name,
          email: values.email,
          phone: values.phone,
          reason: values.reason,
          message: values.message,
          preferredContact: values.preferred || undefined,
          formSource: source,
          hp_leave_blank: typeof trap === 'string' ? trap : '',
          pagePath: window.location.pathname,
          timeElapsedMs: Date.now() - mountedAt.current,
        }),
      })
      const json = await res.json().catch(() => ({}))
      if (!res.ok) {
        setStatus({ kind: 'error', message: (json && json.error) || FALLBACK_ERROR })
        return
      }
      form.reset()
      setValues(initial)
      setErrors({})
      setTouched({})
      setStatus({ kind: 'sent', message: (json && json.message) || "Thank you. We got your message and will be in touch soon." })
    } catch {
      setStatus({ kind: 'error', message: FALLBACK_ERROR })
    }
  }

  if (status.kind === 'sent') {
    return (
      <div
        ref={doneRef}
        tabIndex={-1}
        role="status"
        className={`rounded-2xl border border-[var(--color-border)] bg-[var(--color-light)] text-center outline-none ${compact ? 'p-6' : 'p-8'}`}
      >
        <p className="font-cormorant text-3xl font-semibold text-[var(--color-ink)] mb-2">Message sent</p>
        <p className="text-[var(--color-ink)]">{status.message}</p>
        <p className="mt-4 text-sm text-[var(--color-muted)]">
          Need to reach us sooner? Call{' '}
          <a href={CONTACT.phoneHref} className={LINK}>
            {CONTACT.phone}
          </a>
          .
        </p>
        <p className="mt-3 text-sm font-semibold text-[var(--color-primary)]">
          <CrisisText text={CRISIS.short} linkClassName="underline underline-offset-2" />
        </p>
        <button
          type="button"
          onClick={() => setStatus({ kind: 'idle' })}
          className="mt-6 text-sm font-semibold text-[var(--color-primary)] underline underline-offset-2 hover:text-[var(--color-accent-dark)]"
        >
          Send another message
        </button>
      </div>
    )
  }

  const sending = status.kind === 'sending'
  const phoneNeeded = values.preferred === 'phone' || values.preferred === 'text'
  const gap = compact ? 'space-y-4' : 'space-y-6'
  const FIELD = `block w-full rounded-xl border bg-white px-4 ${compact ? 'py-2.5' : 'py-3'} font-sans text-base text-[var(--color-ink)] placeholder:text-[var(--color-muted)] focus:outline-none focus:ring-2 transition-shadow`
  const fieldClass = (f?: Field) =>
    `${FIELD} ${
      f && errors[f]
        ? 'border-red-700 focus:ring-red-700'
        : 'border-[var(--color-border)] focus:ring-[var(--color-primary)]'
    }`
  const LABEL = 'block text-sm font-semibold text-[var(--color-ink)] mb-2'
  const HINT = 'font-normal text-[var(--color-muted)]'
  // The asterisk is visual only; `required` on the control is what assistive tech announces.
  const req = (
    <span aria-hidden="true" className="text-[var(--color-accent)]">
      {' '}
      *
    </span>
  )
  const errorText = (f: Field) =>
    errors[f] ? (
      <p id={id(`${f}-error`)} className="mt-2 text-sm text-red-700">
        {errors[f]}
      </p>
    ) : null
  const describedBy = (f: Field) => (errors[f] ? id(`${f}-error`) : undefined)

  return (
    <form onSubmit={onSubmit} method="post" noValidate className="font-sans" aria-busy={sending}>
      <div className={gap}>
        <p className="text-sm text-[var(--color-muted)]">
          Fields marked <span className="text-[var(--color-accent)]">*</span> are required.
        </p>

        <div>
          <label htmlFor={id('name')} className={LABEL}>
            Full name
            {req}
          </label>
          <input
            type="text"
            id={id('name')}
            name="name"
            required
            maxLength={120}
            autoComplete="name"
            value={values.name}
            onChange={(e) => update('name', e.target.value)}
            onBlur={() => onBlur('name')}
            aria-invalid={errors.name ? true : undefined}
            aria-describedby={describedBy('name')}
            className={fieldClass('name')}
          />
          {errorText('name')}
        </div>

        <div className={compact ? gap : 'grid gap-6 sm:grid-cols-2'}>
          <div>
            <label htmlFor={id('email')} className={LABEL}>
              Email
              {req}
            </label>
            <input
              type="email"
              id={id('email')}
              name="email"
              required
              maxLength={200}
              autoComplete="email"
              inputMode="email"
              value={values.email}
              onChange={(e) => update('email', e.target.value)}
              onBlur={() => onBlur('email')}
              aria-invalid={errors.email ? true : undefined}
              aria-describedby={describedBy('email')}
              className={fieldClass('email')}
            />
            {errorText('email')}
          </div>

          <div>
            <label htmlFor={id('phone')} className={LABEL}>
              Phone
              {phoneNeeded ? req : <span className={HINT}> (optional)</span>}
            </label>
            <input
              type="tel"
              id={id('phone')}
              name="phone"
              required={phoneNeeded}
              maxLength={40}
              autoComplete="tel"
              inputMode="tel"
              value={values.phone}
              onChange={(e) => update('phone', e.target.value)}
              onBlur={() => onBlur('phone')}
              aria-invalid={errors.phone ? true : undefined}
              aria-describedby={describedBy('phone')}
              className={fieldClass('phone')}
            />
            {errorText('phone')}
          </div>
        </div>

        <div>
          <label htmlFor={id('reason')} className={LABEL}>
            What can we help with?
            {req}
          </label>
          <select
            id={id('reason')}
            name="reason"
            required
            value={values.reason}
            onChange={(e) => update('reason', e.target.value)}
            onBlur={() => onBlur('reason')}
            aria-invalid={errors.reason ? true : undefined}
            aria-describedby={describedBy('reason')}
            className={fieldClass('reason')}
          >
            <option value="">Choose one...</option>
            {REASONS.map((r) => (
              <option key={r.key} value={r.label}>
                {r.label}
              </option>
            ))}
          </select>
          {errorText('reason')}
        </div>

        <fieldset>
          <legend className={LABEL}>
            How should we get back to you?<span className={HINT}> (optional)</span>
          </legend>
          <div className="flex flex-wrap gap-2">
            {METHODS.map((m) => {
              const on = values.preferred === m.value
              return (
                <label
                  key={m.value}
                  className={`inline-flex cursor-pointer items-center gap-2 rounded-full border px-4 py-2 text-sm transition-colors focus-within:ring-2 focus-within:ring-[var(--color-primary)] ${
                    on
                      ? 'border-[var(--color-primary)] bg-[var(--color-light)] font-semibold text-[var(--color-primary)]'
                      : 'border-[var(--color-border)] bg-white text-[var(--color-ink)] hover:border-[var(--color-primary)]'
                  }`}
                >
                  <input
                    type="radio"
                    name="preferredContact"
                    value={m.value}
                    checked={on}
                    onChange={() => update('preferred', m.value)}
                    className="h-4 w-4 accent-[var(--color-accent)]"
                  />
                  {m.label}
                </label>
              )
            })}
          </div>
          {values.preferred === 'text' && (
            <p className="mt-2 text-sm text-[var(--color-muted)]">{AGES.smsNote}</p>
          )}
        </fieldset>

        <div>
          <label htmlFor={id('message')} className={LABEL}>
            Message<span className={HINT}> (optional)</span>
          </label>
          <textarea
            id={id('message')}
            name="message"
            rows={compact ? 3 : 5}
            maxLength={4000}
            autoComplete="off"
            placeholder="Anything that helps with scheduling, like days or times that work for you. Please don't include medical details."
            value={values.message}
            onChange={(e) => update('message', e.target.value)}
            aria-describedby={id('message-help')}
            className={`${fieldClass()} resize-y`}
          />
          <div id={id('message-help')} className="mt-2 space-y-1 text-sm leading-relaxed">
            <p className="text-[var(--color-muted)]">{NO_MEDICAL_ADVICE}</p>
            <p className="font-semibold text-[var(--color-primary)]">
              <CrisisText text={CRISIS.short} linkClassName="underline underline-offset-2" />
            </p>
          </div>
        </div>

        {/* Honeypot. Hidden from people and from assistive tech; bots fill every field.
            Not type=hidden, which many bots skip.

            NOTHING IN ITS NAME, ID OR LABEL MAY LOOK LIKE A REAL FIELD. On Guardian it was called
            "company_website" / "Company website", and Chrome's autofill classifies anything
            containing "company" as the company name (autocomplete="off" does not stop it), so a
            person who autofilled the form filled the trap too, and the route dropped their
            message behind a fake "Message sent". Both of Paul's live tests on 2026-09-16 were
            lost that way. The route checks only this name. */}
        <div aria-hidden="true" className="absolute -left-[9999px] w-px h-px overflow-hidden">
          <label htmlFor={id('hp')}>Leave this empty</label>
          <input
            type="text"
            id={id('hp')}
            name="hp_leave_blank"
            tabIndex={-1}
            autoComplete="off"
            defaultValue=""
            data-1p-ignore
            data-lpignore="true"
            data-bwignore
          />
        </div>

        {status.kind === 'error' && (
          <p role="alert" className="rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm leading-relaxed text-red-800">
            {withPhoneLink(status.message, 'font-semibold text-red-900 underline underline-offset-2')}
          </p>
        )}

        <noscript>
          <p className="rounded-xl border border-[var(--color-border)] bg-[var(--color-light)] px-4 py-3 text-sm text-[var(--color-ink)]">
            This form needs JavaScript. Please call us at{' '}
            <a href={CONTACT.phoneHref} className={LINK}>
              {CONTACT.phone}
            </a>{' '}
            or email{' '}
            <a href={`mailto:${CONTACT.email}`} className={LINK}>
              {CONTACT.email}
            </a>
            .
          </p>
        </noscript>

        <button
          type="submit"
          disabled={!ready || sending}
          className={`${compact ? 'w-full py-3' : 'w-full sm:w-auto sm:px-10 py-4'} rounded-xl bg-[var(--color-accent)] px-6 font-semibold text-white transition-colors hover:bg-[var(--color-accent-dark)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-primary)] disabled:cursor-not-allowed disabled:opacity-60`}
        >
          {sending ? 'Sending...' : 'Send message'}
        </button>
      </div>
    </form>
  )
}
