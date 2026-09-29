import type { Metadata } from 'next'
import type { ReactNode } from 'react'
import { AGES, CONTACT, SITE_NAME, SITE_URL, withBrand } from '@/lib/site'
import { BRAND_IMAGES } from '@/lib/images'
import { POSTS, postHref, postRobots } from '@/lib/posts'
import PageHero from '@/components/site/PageHero'
import Container from '@/components/site/Container'
import CrisisNotice from '@/components/site/CrisisNotice'
import CtaBand from '@/components/site/CtaBand'
import JsonLd from '@/components/site/JsonLd'
import SmartLink from '@/components/site/SmartLink'
import { ArrowRight } from '@/components/site/icons'

export type RelatedLink = { href: string; label: string }

export type ArticleLayoutProps = {
  /** The H1 and the Article headline. */
  title: string
  /** Hero subtitle and Article description (use the page's meta description). */
  description: string
  /** ISO date (yyyy-mm-dd) first published. Shown as "Published August 13, 2025". */
  date?: string
  /** ISO date (yyyy-mm-dd) of the last substantive edit. Shown as "Updated September 2026". */
  updated?: string
  /** Hero image: imageFor(postHref(slug)) from lib/images.ts. */
  image: { src: string; alt: string }
  /** Eyebrow above the H1 (a POST_CATEGORIES value). */
  category?: string
  children: ReactNode
  /** "Keep reading" links under the article (service, condition or other blog pages). */
  related?: RelatedLink[]
  /** The post's slug, for the canonical URL in the Article schema. Looked up in POSTS by title if omitted. */
  slug?: string
  /** Optional full-width section between the article and the closing CTA (e.g. <BookingOptions />). */
  after?: ReactNode
  ctaHeading?: string
  ctaBody?: string
}

const MONTHS = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
]

// Parsed by hand so a date never shifts a day with the server's time zone.
function parseIsoDate(iso: string) {
  const m = /^(\d{4})-(\d{2})(?:-(\d{2}))?/.exec(iso)
  if (!m) return null
  const month = MONTHS[Number(m[2]) - 1]
  if (!month) return null
  return { year: m[1], month, day: m[3] ? String(Number(m[3])) : undefined }
}

/** "2025-08-13" -> "August 13, 2025" (US style). */
export function formatDate(iso: string): string {
  const d = parseIsoDate(iso)
  if (!d) return iso
  return d.day ? `${d.month} ${d.day}, ${d.year}` : `${d.month} ${d.year}`
}

/** "2026-09-29" -> "September 2026". */
export function formatMonth(iso: string): string {
  const d = parseIsoDate(iso)
  return d ? `${d.month} ${d.year}` : iso
}

const abs = (path: string) => new URL(path, SITE_URL).toString()

/**
 * Page metadata for a blog post: branded title, description, relative canonical, and Open Graph
 * article data using the hero image.
 *
 *   export const metadata = buildArticleMetadata({ slug, title: 'Short title tag', description, image, date, updated })
 */
export function buildArticleMetadata({
  slug,
  title,
  description,
  image,
  date,
  updated,
}: {
  slug: string
  /** Title tag before branding; withBrand() adds "| JRose Wellness" when it fits. */
  title: string
  description: string
  image: { src: string; alt: string }
  date?: string
  updated?: string
}): Metadata {
  const fullTitle = withBrand(title)
  const path = postHref(slug)
  // Dates default to the post's lib/posts.ts entry, so every post carries its real edit date.
  const post = POSTS.find((p) => p.slug === slug)
  date = date ?? post?.date
  updated = updated ?? post?.updated
  return {
    title: fullTitle,
    // Autobuilt posts stay noindex until Jessica reviews them (INDEXED_POST_SLUGS in lib/posts.ts).
    ...postRobots(slug),
    description,
    alternates: { canonical: path },
    openGraph: {
      title: fullTitle,
      description,
      url: path,
      siteName: SITE_NAME,
      type: 'article',
      ...(date ? { publishedTime: date } : {}),
      ...(updated || date ? { modifiedTime: updated ?? date } : {}),
      images: [{ url: image.src, alt: image.alt }],
    },
    twitter: { card: 'summary_large_image', title: fullTitle, description, images: [image.src] },
  }
}

// Reading-column typography (the site has no typography plugin). Block rules target direct
// children only, so a Callout or other component inside the article keeps its own spacing.
const PROSE = [
  'text-[1.0625rem] leading-[1.8] text-ink/85 sm:text-lg sm:leading-[1.8]',
  '[&>*:first-child]:mt-0',
  '[&>p]:mt-5',
  '[&>h2]:mt-14 [&>h2]:font-cormorant [&>h2]:text-[1.9rem] [&>h2]:font-semibold [&>h2]:leading-[1.15] [&>h2]:text-primary sm:[&>h2]:text-[2.25rem]',
  '[&>h3]:mt-9 [&>h3]:text-xl [&>h3]:font-semibold [&>h3]:leading-snug [&>h3]:text-primary',
  '[&>h2+p]:mt-4 [&>h3+p]:mt-2 [&>h3+ul]:mt-3 [&>h3+ol]:mt-3',
  '[&>ul]:mt-5 [&>ul]:list-disc [&>ul]:space-y-2.5 [&>ul]:pl-6',
  '[&>ol]:mt-5 [&>ol]:list-decimal [&>ol]:space-y-2.5 [&>ol]:pl-6',
  '[&_li]:pl-1.5 [&_li::marker]:font-semibold [&_li::marker]:text-accent',
  '[&_strong]:font-semibold [&_strong]:text-ink',
  '[&>blockquote]:mt-7 [&>blockquote]:rounded-r-2xl [&>blockquote]:border-l-4 [&>blockquote]:border-accent [&>blockquote]:bg-light/70 [&>blockquote]:px-6 [&>blockquote]:py-5 [&>blockquote]:font-cormorant [&>blockquote]:text-[1.35rem] [&>blockquote]:leading-snug [&>blockquote]:text-primary',
  '[&>blockquote_cite]:mt-2 [&>blockquote_cite]:block [&>blockquote_cite]:font-sans [&>blockquote_cite]:text-sm [&>blockquote_cite]:not-italic [&>blockquote_cite]:text-muted',
  '[&>p_a]:font-semibold [&>p_a]:text-accent [&>p_a]:underline [&>p_a]:decoration-accent/40 [&>p_a]:underline-offset-[3px] [&>p_a:hover]:decoration-accent',
  '[&_li_a]:font-semibold [&_li_a]:text-accent [&_li_a]:underline [&_li_a]:decoration-accent/40 [&_li_a]:underline-offset-[3px] [&_li_a:hover]:decoration-accent',
].join(' ')

/** A highlighted box inside an article (prices, a key point, a quick summary). */
export function Callout({ title, children }: { title?: string; children: ReactNode }) {
  return (
    <aside className="mt-8 rounded-2xl border border-border bg-light/70 p-6 text-base leading-relaxed text-ink/85 sm:p-7 [&_a]:font-semibold [&_a]:text-accent [&_a]:underline [&_a]:decoration-accent/40 [&_a]:underline-offset-[3px] [&_a:hover]:decoration-accent [&_p+p]:mt-3">
      {title && <p className="font-cormorant text-2xl font-semibold leading-tight text-primary">{title}</p>}
      <div className={title ? 'mt-3' : ''}>{children}</div>
    </aside>
  )
}

/**
 * Blog article page: photo hero with breadcrumbs, a readable prose column, a compact crisis
 * notice, related links and a closing CTA, plus Article JSON-LD. Byline is the practice.
 */
export default function ArticleLayout({
  title,
  description,
  date,
  updated,
  image,
  category,
  children,
  related,
  slug,
  after,
  ctaHeading = 'Talk with a psychiatric nurse practitioner',
  ctaBody = `Secure video visits for ${AGES.short.toLowerCase()} in ${CONTACT.state}. Book with insurance through Alma or Headway, or request a self-pay appointment.`,
}: ArticleLayoutProps) {
  const postSlug = slug ?? POSTS.find((p) => p.title.toLowerCase() === title.toLowerCase())?.slug
  const url = postSlug ? abs(postHref(postSlug)) : undefined
  // Dates not passed as props come from the post's lib/posts.ts entry.
  const post = postSlug ? POSTS.find((p) => p.slug === postSlug) : undefined
  date = date ?? post?.date
  updated = updated ?? post?.updated
  const modified = updated ?? date

  const articleSchema = {
    '@type': 'Article',
    headline: title.length > 110 ? `${title.slice(0, 107)}...` : title,
    description,
    image: [abs(image.src)],
    inLanguage: 'en-US',
    ...(date ? { datePublished: date } : {}),
    ...(modified ? { dateModified: modified } : {}),
    ...(category ? { articleSection: category } : {}),
    author: { '@type': 'Organization', name: SITE_NAME, url: SITE_URL },
    publisher: {
      '@type': 'Organization',
      name: SITE_NAME,
      url: SITE_URL,
      logo: {
        '@type': 'ImageObject',
        url: abs(BRAND_IMAGES.logo.src),
        width: BRAND_IMAGES.logo.width,
        height: BRAND_IMAGES.logo.height,
      },
    },
    ...(url ? { url, mainEntityOfPage: { '@type': 'WebPage', '@id': url } } : {}),
  }

  return (
    <main>
      <JsonLd data={articleSchema} />
      <PageHero
        size="md"
        eyebrow={category}
        title={title}
        subtitle={description}
        image={image}
        priority
        crumbs={[{ label: 'Home', href: '/' }, { label: 'Blog', href: '/blog' }, { label: title }]}
      />

      <section className="bg-white py-12 sm:py-16">
        <Container size="narrow">
          <p className="flex flex-wrap items-center gap-x-3 gap-y-1 border-b border-border pb-6 text-sm text-muted">
            <span>
              By <span className="font-semibold text-ink">{SITE_NAME}</span>
            </span>
            {date && (
              <>
                <span aria-hidden="true" className="text-muted/50">
                  &middot;
                </span>
                <span>
                  Published <time dateTime={date}>{formatDate(date)}</time>
                </span>
              </>
            )}
            {updated && (
              <>
                <span aria-hidden="true" className="text-muted/50">
                  &middot;
                </span>
                <span>
                  Updated <time dateTime={updated}>{formatMonth(updated)}</time>
                </span>
              </>
            )}
          </p>

          <article className={`mt-10 ${PROSE}`}>{children}</article>

          <div className="mt-14 space-y-4 border-t border-border pt-8">
            <p className="text-sm leading-relaxed text-muted">
              This article is general information from {SITE_NAME}, not medical advice for your situation. Talk with
              your own clinician before starting, stopping or changing any treatment.
            </p>
            <CrisisNotice variant="compact" />
          </div>
        </Container>
      </section>

      {related && related.length > 0 && (
        <section className="bg-cream py-14 sm:py-16" aria-labelledby="related-heading">
          <Container size="medium">
            <h2 id="related-heading" className="font-cormorant text-3xl font-semibold leading-tight text-primary sm:text-[2.25rem]">
              Keep reading
            </h2>
            <ul className="mt-6 grid gap-3 sm:grid-cols-2">
              {related.map((r) => (
                <li key={r.href}>
                  <SmartLink
                    href={r.href}
                    className="group flex h-full items-center justify-between gap-4 rounded-2xl border border-border bg-white px-5 py-4 font-medium leading-snug text-ink transition-colors hover:border-accent/40 hover:text-primary"
                  >
                    <span>{r.label}</span>
                    <ArrowRight className="h-4 w-4 shrink-0 text-accent transition-transform group-hover:translate-x-0.5" />
                  </SmartLink>
                </li>
              ))}
            </ul>
          </Container>
        </section>
      )}

      {after}

      <CtaBand heading={ctaHeading} body={ctaBody} />
    </main>
  )
}
