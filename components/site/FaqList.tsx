import JsonLd from './JsonLd'
import { ChevronDown } from './icons'

type Faq = { q: string; a: string }

/**
 * Accessible FAQ accordion built on <details>/<summary> (works without JavaScript).
 * withSchema adds FAQPage JSON-LD for exactly the questions shown. Renders a block, not a
 * full-width section: place it inside your own section/container.
 */
export default function FaqList({
  faqs,
  withSchema = false,
  heading,
}: {
  faqs: ReadonlyArray<Faq>
  withSchema?: boolean
  heading?: string
}) {
  if (!faqs || faqs.length === 0) return null

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a },
    })),
  }

  return (
    <div>
      {withSchema && <JsonLd data={schema} />}
      {heading && (
        <h2 className="mb-8 font-cormorant text-[2rem] font-semibold leading-[1.1] text-primary sm:text-4xl">{heading}</h2>
      )}
      <div className="divide-y divide-border overflow-hidden rounded-2xl border border-border bg-white">
        {faqs.map((f, i) => (
          <details key={`${f.q}-${i}`} className="group">
            <summary className="flex cursor-pointer items-start justify-between gap-6 px-5 py-5 text-left transition-colors hover:bg-cream sm:px-7">
              <span className="text-[17px] font-semibold leading-snug text-ink group-open:text-primary">{f.q}</span>
              <span className="mt-0.5 grid h-7 w-7 shrink-0 place-items-center rounded-full bg-light text-accent transition-transform duration-200 group-open:rotate-180">
                <ChevronDown className="h-4 w-4" />
              </span>
            </summary>
            <div className="px-5 pb-6 text-base leading-relaxed text-ink/80 sm:px-7">
              <p>{f.a}</p>
            </div>
          </details>
        ))}
      </div>
    </div>
  )
}
