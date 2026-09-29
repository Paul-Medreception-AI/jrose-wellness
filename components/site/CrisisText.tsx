import { Fragment } from 'react'

/**
 * Renders crisis copy from lib/site.ts (CRISIS.short / CRISIS.full) with "988" and "911" turned
 * into tap-to-call links, so the wording is never retyped in a component.
 */
const TEL: Record<string, string> = { '988': 'tel:988', '911': 'tel:911' }

export default function CrisisText({
  text,
  linkClassName = 'font-semibold underline underline-offset-2 hover:no-underline',
}: {
  text: string
  linkClassName?: string
}) {
  const parts = text.split(/\b(988|911)\b/)
  return (
    <>
      {parts.map((part, i) =>
        TEL[part] ? (
          <a key={i} href={TEL[part]} className={linkClassName}>
            {part}
          </a>
        ) : (
          <Fragment key={i}>{part}</Fragment>
        ),
      )}
    </>
  )
}
