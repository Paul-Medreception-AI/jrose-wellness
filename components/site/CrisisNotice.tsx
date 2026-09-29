import { CRISIS } from '@/lib/site'
import CrisisText from './CrisisText'
import { LifebuoyIcon } from './icons'

/**
 * Required safety language. Use variant="inline" (default) on contact/booking pages and on the
 * depression, bipolar, PTSD, schizophrenia/psychosis and substance-use pages; "compact" is a
 * one-line version for tight spots.
 */
export default function CrisisNotice({ variant = 'inline' }: { variant?: 'inline' | 'compact' }) {
  if (variant === 'compact') {
    return (
      <p role="note" className="flex items-start gap-2 text-sm leading-relaxed text-ink/80">
        <LifebuoyIcon className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
        <span>
          <CrisisText text={CRISIS.short} linkClassName="font-semibold text-accent underline underline-offset-2 hover:no-underline" />
        </span>
      </p>
    )
  }

  return (
    <div
      role="note"
      aria-label="Crisis and emergency information"
      className="flex gap-4 rounded-2xl border border-accent/25 border-l-4 border-l-accent bg-white p-5 shadow-sm sm:p-6"
    >
      <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-light text-accent">
        <LifebuoyIcon />
      </span>
      <div>
        <p className="font-semibold text-primary">Need help right now?</p>
        <p className="mt-1 leading-relaxed text-ink/85">
          <CrisisText text={CRISIS.full} linkClassName="font-semibold text-accent underline underline-offset-2 hover:no-underline" />
        </p>
      </div>
    </div>
  )
}
