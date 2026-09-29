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
 * Full-bleed photo hero with a wine scrim, H1, optional breadcrumbs (visual + BreadcrumbList
 * JSON-LD) and up to two CTAs. The image comes from lib/images.ts (imageFor(route)).
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
  align = 'left',
  priority = false,
}: PageHeroProps) {
  const centered = align === 'center'
  const height = size === 'lg' ? 'min-h-[560px] lg:min-h-[640px]' : 'min-h-[380px] sm:min-h-[440px]'

  return (
    <section className={`relative isolate flex items-center overflow-hidden bg-dark ${height}`}>
      <Image
        src={image.src}
        alt={image.alt}
        fill
        priority={priority}
        sizes="100vw"
        className="-z-20 object-cover object-center"
      />
      {/* Scrim: deep wine, strongest behind the text. On phones the text spans the full width,
          so the whole image is darkened; from sm up the gradient fades toward the photo side. */}
      {centered ? (
        <div aria-hidden="true" className="absolute inset-0 -z-10 bg-dark/65" />
      ) : (
        <>
          <div
            aria-hidden="true"
            className="absolute inset-0 -z-10 bg-dark/70 sm:bg-transparent sm:bg-gradient-to-r sm:from-dark/90 sm:via-dark/70 sm:to-dark/15"
          />
          <div aria-hidden="true" className="absolute inset-x-0 bottom-0 -z-10 h-1/3 bg-gradient-to-t from-dark/40 to-transparent" />
        </>
      )}

      <div className="mx-auto w-full max-w-7xl px-4 py-14 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
        <div className={centered ? 'mx-auto max-w-3xl text-center' : 'max-w-2xl'}>
          {crumbs && crumbs.length > 0 && (
            <>
              <JsonLd data={breadcrumbSchema(crumbs)} />
              <nav aria-label="Breadcrumb" className="mb-6">
                <ol
                  className={`flex flex-wrap items-center gap-x-2 gap-y-1 text-sm text-white/80 ${
                    centered ? 'justify-center' : ''
                  }`}
                >
                  {crumbs.map((c, i) => {
                    const last = i === crumbs.length - 1
                    return (
                      <li key={`${c.label}-${i}`} className="flex items-center gap-2">
                        {c.href && !last ? (
                          <Link href={c.href} className="underline-offset-4 transition-colors hover:text-white hover:underline">
                            {c.label}
                          </Link>
                        ) : (
                          <span aria-current={last ? 'page' : undefined} className={last ? 'text-white' : ''}>
                            {c.label}
                          </span>
                        )}
                        {!last && (
                          <span aria-hidden="true" className="text-white/50">
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
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-peach sm:text-[13px]">{eyebrow}</p>
          )}

          <h1
            className={`font-cormorant font-semibold leading-[1.05] text-white ${
              size === 'lg' ? 'text-[2.6rem] sm:text-6xl lg:text-[4.25rem]' : 'text-[2.4rem] sm:text-5xl lg:text-[3.5rem]'
            }`}
          >
            {title}
          </h1>

          {subtitle && (
            <p
              className={`mt-5 text-lg leading-relaxed text-white/90 sm:text-xl ${
                centered ? 'mx-auto max-w-2xl' : 'max-w-xl'
              }`}
            >
              {subtitle}
            </p>
          )}

          {(primaryCta || secondaryCta) && (
            <div className={`mt-8 flex flex-wrap gap-3 ${centered ? 'justify-center' : ''}`}>
              {primaryCta && (
                <SmartLink href={primaryCta.href} className={`${BUTTON.base} ${BUTTON.lg} ${BUTTON.accent}`}>
                  {primaryCta.label}
                  {isExternal(primaryCta.href) && <ExternalIcon />}
                </SmartLink>
              )}
              {secondaryCta && (
                <SmartLink href={secondaryCta.href} className={`${BUTTON.base} ${BUTTON.lg} ${BUTTON.outlineLight}`}>
                  {secondaryCta.label}
                  {isExternal(secondaryCta.href) && <ExternalIcon />}
                </SmartLink>
              )}
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
