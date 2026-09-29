import Image from 'next/image'
import Link from 'next/link'
import { SITE_URL } from '@/lib/site'
import JsonLd from './JsonLd'
import SmartLink, { BUTTON, isExternal } from './SmartLink'
import { ExternalIcon } from './icons'

type Cta = { label: string; href: string }
type Crumb = { label: string; href?: string }

export type PageHeroProps = {
  eyebrow?: string
  title: string
  subtitle?: string
  image: { src: string; alt: string }
  crumbs?: Crumb[]
  primaryCta?: Cta
  secondaryCta?: Cta
  size?: 'lg' | 'md'
  align?: 'left' | 'center'
  priority?: boolean
}

function breadcrumbSchema(crumbs: Crumb[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: crumbs.map((c, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: c.label,
      // The current page (last crumb) may omit "item"; every other crumb carries its absolute URL.
      ...(c.href ? { item: new URL(c.href, SITE_URL).toString() } : {}),
    })),
  }
}

/**
 * Split hero for subpages and hubs: breadcrumbs, eyebrow, H1, subtitle and CTAs in a text column
 * NEXT TO the photo (never over it), so the copy never competes with the image for contrast.
 * Phones and tablets stack the text above the photo. The image comes from lib/images.ts
 * (imageFor(route)); faces in the stock photos sit in the upper third, so the crop is anchored
 * there. `align` is kept for API compatibility; the layout is always text-left, photo-right.
 */
export default function PageHero({
  eyebrow,
  title,
  subtitle,
  image,
  crumbs,
  primaryCta,
  secondaryCta,
  size = 'md',
  priority = false,
}: PageHeroProps) {
  const imageHeight = size === 'lg' ? 'h-64 sm:h-80 lg:h-[30rem]' : 'h-60 sm:h-72 lg:h-[26rem]'

  return (
    <section className="relative overflow-hidden border-b border-border bg-cream">
      {/* Soft brand wash behind the photo column (desktop only). */}
      <div
        aria-hidden="true"
        className="absolute inset-y-0 right-0 hidden w-[38%] bg-gradient-to-b from-light to-peach/40 lg:block"
      />

      <div className="relative mx-auto grid w-full max-w-7xl items-center gap-10 px-4 py-10 sm:px-6 sm:py-14 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] lg:gap-14 lg:px-8 lg:py-16">
        <div className="animate-fade-up">
          {crumbs && crumbs.length > 0 && (
            <>
              <JsonLd data={breadcrumbSchema(crumbs)} />
              <nav aria-label="Breadcrumb" className="mb-5">
                <ol className="flex flex-wrap items-center gap-x-2 gap-y-1 text-sm text-muted">
                  {crumbs.map((c, i) => {
                    const last = i === crumbs.length - 1
                    return (
                      <li key={`${c.label}-${i}`} className="flex items-center gap-2">
                        {c.href && !last ? (
                          <Link href={c.href} className="underline-offset-4 transition-colors hover:text-accent hover:underline">
                            {c.label}
                          </Link>
                        ) : (
                          <span aria-current={last ? 'page' : undefined} className={last ? 'text-ink' : ''}>
                            {c.label}
                          </span>
                        )}
                        {!last && (
                          <span aria-hidden="true" className="text-muted/60">
                            /
                          </span>
                        )}
                      </li>
                    )
                  })}
                </ol>
              </nav>
            </>
          )}

          {eyebrow && (
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-accent sm:text-[13px]">{eyebrow}</p>
          )}

          <h1
            className={`font-cormorant font-semibold leading-[1.06] text-primary ${
              size === 'lg' ? 'text-[2.5rem] sm:text-[3.25rem] lg:text-[3.75rem]' : 'text-[2.25rem] sm:text-5xl lg:text-[3.25rem]'
            }`}
          >
            {title}
          </h1>

          {subtitle && <p className="mt-5 max-w-xl text-lg leading-relaxed text-ink/80">{subtitle}</p>}

          {(primaryCta || secondaryCta) && (
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              {primaryCta && (
                <SmartLink href={primaryCta.href} className={`${BUTTON.base} ${BUTTON.lg} ${BUTTON.accent}`}>
                  {primaryCta.label}
                  {isExternal(primaryCta.href) && <ExternalIcon />}
                </SmartLink>
              )}
              {secondaryCta && (
                <SmartLink href={secondaryCta.href} className={`${BUTTON.base} ${BUTTON.lg} ${BUTTON.outlineDark}`}>
                  {secondaryCta.label}
                  {isExternal(secondaryCta.href) && <ExternalIcon />}
                </SmartLink>
              )}
            </div>
          )}
        </div>

        <div className="relative">
          <div
            aria-hidden="true"
            className="absolute -bottom-3 -right-3 hidden h-full w-full rounded-[2rem] border border-accent/20 sm:block"
          />
          <div
            className={`relative w-full overflow-hidden rounded-[2rem] bg-light shadow-[0_2px_4px_rgba(46,15,19,0.05),0_24px_48px_-24px_rgba(46,15,19,0.35)] ${imageHeight}`}
          >
            <Image
              src={image.src}
              alt={image.alt}
              fill
              priority={priority}
              sizes="(min-width: 1024px) 600px, 100vw"
              className="object-cover object-[center_25%]"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
