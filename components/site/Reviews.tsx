import { REVIEWS } from '@/lib/site'
import Container from './Container'
import SectionHeading from './SectionHeading'

/**
 * Patient quotes from lib/site.ts, attributed by month only. No names, stars, counts or
 * Review/AggregateRating schema (see FACTS.md section 9). Renders a full-width section.
 */
export default function Reviews({ heading = 'In patients’ own words' }: { heading?: string }) {
  if (!REVIEWS.length) return null
  return (
    <section className="bg-cream py-16 sm:py-20" aria-labelledby="reviews-heading">
      <Container>
        <SectionHeading id="reviews-heading" eyebrow="Patient reviews" title={heading} align="center" />
        <ul className="mt-12 grid gap-6 md:grid-cols-3">
          {REVIEWS.map((r) => (
            <li key={r.quote} className="h-full">
              <figure className="relative flex h-full flex-col rounded-3xl border border-border bg-white p-7 pt-10 shadow-sm">
                <span
                  aria-hidden="true"
                  className="absolute left-6 top-2 font-cormorant text-7xl leading-none text-peach"
                >
                  &ldquo;
                </span>
                <blockquote className="relative flex-1 font-cormorant text-[1.35rem] leading-snug text-ink">
                  <p>{r.quote}</p>
                </blockquote>
                <figcaption className="mt-6 border-t border-border pt-4 text-sm text-muted">
                  Patient review, {r.when}
                </figcaption>
              </figure>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  )
}
