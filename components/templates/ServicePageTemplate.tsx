import Link from 'next/link'
import Image from 'next/image'
import type { Metadata } from 'next'

export type FAQ = { q: string; a: string }
export type RelatedLink = { href: string; label: string; eyebrow?: string; body?: string }
export type IconCard = { title: string; body: string; iconPath?: string }
export type MediaVideo = { videoId: string; title: string }

// Canonical silo schema (required core) + optional rich sections.
export type ServicePageContent = {
  slug: string
  siteUrl: string
  siteName: string
  ctaLabel: string
  ctaHref: string
  hubLabel: string
  hubHref: string
  badge?: string
  title: string
  headline: string
  description: string
  bullets: string[]
  benefits: { title: string; body: string }[]
  stats?: { stat: string; label: string }[]
  faqs?: FAQ[]
  relatedLinks?: RelatedLink[]
  metaTitle?: string
  heroSubhead?: string
  heroImage?: { src: string; alt: string }
  featuredVideo?: { videoId: string; title: string; heading?: string; subhead?: string }
  introHeading?: string
  intro?: string[]
  signsHeading?: string
  signsList?: string[]
  approachHeading?: string
  approachSubhead?: string
  approach?: IconCard[]
  premiumHeading?: string
  premiumIntro?: string
  premiumOptions?: { title: string; body: string }[]
  timelineHeading?: string
  timeline?: { title: string; body: string }[]
  extraSections?: { heading: string; body: string[] }[]
  videoLibraryHeading?: string
  videoLibrarySubhead?: string
  videoLibrary?: MediaVideo[]
  ctaHeading?: string
  ctaBody?: string
}

export function buildServiceMetadata(c: ServicePageContent): Metadata {
  return {
    title: c.metaTitle || (c.title + ' | ' + c.siteName),
    description: c.description,
    alternates: { canonical: c.siteUrl + c.hubHref + '/' + c.slug },
  }
}

// Server-component YouTube embed. 1080p + captions off + no related videos by default.
function Video({ videoId, title }: { videoId: string; title: string }) {
  const src = 'https://www.youtube-nocookie.com/embed/' + videoId + '?rel=0&vq=hd1080&cc_load_policy=0&iv_load_policy=3'
  return (
    <div className="relative w-full aspect-video rounded-2xl overflow-hidden shadow-lg bg-black">
      <iframe
        className="absolute inset-0 w-full h-full"
        src={src}
        title={title}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
        loading="lazy"
      />
    </div>
  )
}

const CHECK = (
  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
  </svg>
)
const DEFAULT_ICON = 'M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09z'

export function ServicePageTemplate({ c }: { c: ServicePageContent }) {
  const schemaBreadcrumb = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: c.siteUrl },
      { '@type': 'ListItem', position: 2, name: c.hubLabel, item: c.siteUrl + c.hubHref },
      { '@type': 'ListItem', position: 3, name: c.title, item: c.siteUrl + c.hubHref + '/' + c.slug },
    ],
  }
  const schemaFaq = c.faqs && c.faqs.length ? {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: c.faqs.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
  } : null

  return (
    <main className="min-h-screen">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaBreadcrumb) }} />
      {schemaFaq && <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaFaq) }} />}

      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] py-20 text-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-10 items-center">
            <div className="w-full lg:w-3/5">
              <nav className="text-sm mb-6 opacity-90">
                <a href="/" className="hover:underline">Home</a>
                <span className="mx-2">›</span>
                <a href={c.hubHref} className="hover:underline">{c.hubLabel}</a>
                <span className="mx-2">›</span>
                <span>{c.title}</span>
              </nav>
              <h1 className="text-4xl md:text-5xl font-semibold mb-6 leading-tight">{c.headline}</h1>
              <p className="text-xl opacity-95 max-w-3xl leading-relaxed">{c.heroSubhead || c.description}</p>
            </div>
            {c.heroImage && (
              <div className="relative w-full max-w-md lg:w-2/5 lg:max-w-none h-96 lg:h-[28rem] rounded-2xl overflow-hidden shadow-2xl">
                <Image src={c.heroImage.src} alt={c.heroImage.alt} fill priority quality={90} sizes="(max-width: 768px) 100vw, 384px" className="object-cover" />
              </div>
            )}
          </div>
        </div>
      </section>

      {c.featuredVideo && (
        <section className="bg-white py-16">
          <div className="max-w-4xl mx-auto px-6">
            {c.featuredVideo.heading && <h2 className="text-3xl md:text-4xl font-semibold mb-3 text-[var(--color-ink)] text-center">{c.featuredVideo.heading}</h2>}
            {c.featuredVideo.subhead && <p className="text-center text-[var(--color-muted)] mb-8 max-w-2xl mx-auto">{c.featuredVideo.subhead}</p>}
            <Video videoId={c.featuredVideo.videoId} title={c.featuredVideo.title} />
          </div>
        </section>
      )}

      {(c.intro && c.intro.length) || (c.signsList && c.signsList.length) ? (
        <section className="bg-[var(--color-cream)] py-20">
          <div className="max-w-4xl mx-auto px-6">
            {c.introHeading && <h2 className="text-3xl md:text-4xl font-semibold mb-8 text-[var(--color-ink)]">{c.introHeading}</h2>}
            {c.intro && c.intro.length ? (
              <div className="space-y-6 text-lg leading-relaxed text-[var(--color-ink)]">
                {c.intro.map((p, i) => <p key={i}>{p}</p>)}
              </div>
            ) : null}
            {c.signsList && c.signsList.length ? (
              <div className="mt-12 bg-white rounded-xl p-8 shadow-sm">
                {c.signsHeading && <h3 className="text-2xl font-semibold mb-6 text-[var(--color-ink)]">{c.signsHeading}</h3>}
                <ul className="space-y-4">
                  {c.signsList.map((s, i) => <li key={i} className="flex items-start gap-3">{CHECK}<span className="text-[var(--color-ink)]">{s}</span></li>)}
                </ul>
              </div>
            ) : null}
          </div>
        </section>
      ) : null}

      {c.bullets && c.bullets.length ? (
        <section className="bg-white py-16">
          <div className="max-w-4xl mx-auto px-6">
            <h2 className="text-3xl md:text-4xl font-semibold mb-8 text-[var(--color-ink)] text-center">What to Expect</h2>
            <ul className="space-y-4 max-w-2xl mx-auto">
              {c.bullets.map((b, i) => <li key={i} className="flex items-start gap-3">{CHECK}<span className="text-[var(--color-ink)] text-lg">{b}</span></li>)}
            </ul>
          </div>
        </section>
      ) : null}

      {c.approach && c.approach.length ? (
        <section className="bg-white py-20">
          <div className="max-w-7xl mx-auto px-6">
            {c.approachHeading && <h2 className="text-3xl md:text-4xl font-semibold mb-4 text-[var(--color-ink)] text-center">{c.approachHeading}</h2>}
            {c.approachSubhead && <p className="text-xl text-[var(--color-muted)] text-center mb-16 max-w-3xl mx-auto">{c.approachSubhead}</p>}
            <div className="grid md:grid-cols-3 gap-8">
              {c.approach.map((card, i) => (
                <div key={i} className="bg-[var(--color-cream)] rounded-xl p-8 hover:shadow-lg transition-shadow animate-fade-up">
                  <div className="mb-6">
                    <svg className="w-12 h-12 text-[var(--color-primary)]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d={card.iconPath || DEFAULT_ICON} />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-semibold mb-4 text-[var(--color-ink)]">{card.title}</h3>
                  <p className="text-[var(--color-muted)] leading-relaxed">{card.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      ) : null}

      {c.premiumOptions && c.premiumOptions.length ? (
        <section className="bg-white pb-20">
          <div className="max-w-7xl mx-auto px-6">
            <div className="bg-[var(--color-light)] rounded-2xl p-10 max-w-4xl mx-auto">
              {c.premiumHeading && <h3 className="text-3xl font-semibold mb-6 text-[var(--color-ink)]">{c.premiumHeading}</h3>}
              {c.premiumIntro && <p className="text-lg text-[var(--color-ink)] mb-8 leading-relaxed">{c.premiumIntro}</p>}
              <div className="grid md:grid-cols-2 gap-6">
                {c.premiumOptions.map((o, i) => (
                  <div key={i} className="bg-white rounded-lg p-6">
                    <h4 className="text-xl font-semibold mb-3 text-[var(--color-ink)]">{o.title}</h4>
                    <p className="text-[var(--color-muted)]">{o.body}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      ) : null}

      {c.benefits && c.benefits.length ? (
        <section className="bg-[var(--color-cream)] py-20">
          <div className="max-w-5xl mx-auto px-6">
            <h2 className="text-3xl md:text-4xl font-semibold mb-12 text-[var(--color-ink)] text-center">Benefits</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {c.benefits.map((b, i) => (
                <div key={i} className="bg-white rounded-xl p-8 shadow-sm animate-fade-up">
                  <h3 className="text-xl font-semibold mb-3 text-[var(--color-ink)]">{b.title}</h3>
                  <p className="text-[var(--color-muted)] leading-relaxed">{b.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      ) : null}

      {c.timeline && c.timeline.length ? (
        <section className="bg-white py-20">
          <div className="max-w-3xl mx-auto px-6">
            <div className="bg-[var(--color-light)] rounded-2xl p-12">
              {c.timelineHeading && <h2 className="text-3xl md:text-4xl font-semibold mb-8 text-[var(--color-ink)] text-center">{c.timelineHeading}</h2>}
              <div className="space-y-8">
                {c.timeline.map((step, i) => (
                  <div key={i} className="border-l-4 border-[var(--color-primary)] pl-6">
                    <h3 className="text-2xl font-semibold mb-3 text-[var(--color-ink)]">{step.title}</h3>
                    <p className="text-[var(--color-muted)] leading-relaxed">{step.body}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      ) : null}

      {c.extraSections && c.extraSections.length ? (
        <section className="bg-[var(--color-cream)] py-20">
          <div className="max-w-4xl mx-auto px-6 space-y-14">
            {c.extraSections.map((s, i) => (
              <div key={i}>
                <h2 className="text-3xl md:text-4xl font-semibold mb-6 text-[var(--color-ink)]">{s.heading}</h2>
                <div className="space-y-4 text-lg leading-relaxed text-[var(--color-ink)]">
                  {s.body.map((p, j) => <p key={j}>{p}</p>)}
                </div>
              </div>
            ))}
          </div>
        </section>
      ) : null}

      {c.videoLibrary && c.videoLibrary.length ? (
        <section className="bg-white py-20">
          <div className="max-w-6xl mx-auto px-6">
            {c.videoLibraryHeading && <h2 className="text-3xl md:text-4xl font-semibold mb-4 text-[var(--color-ink)] text-center">{c.videoLibraryHeading}</h2>}
            {c.videoLibrarySubhead && <p className="text-center text-[var(--color-muted)] mb-12 max-w-2xl mx-auto">{c.videoLibrarySubhead}</p>}
            <div className="grid md:grid-cols-3 gap-6">
              {c.videoLibrary.map((v, i) => <Video key={i} videoId={v.videoId} title={v.title} />)}
            </div>
          </div>
        </section>
      ) : null}

      {c.faqs && c.faqs.length ? (
        <section className="bg-[var(--color-cream)] py-20">
          <div className="max-w-4xl mx-auto px-6">
            <h2 className="text-3xl md:text-4xl font-semibold mb-12 text-[var(--color-ink)] text-center">Common Questions About {c.title}</h2>
            <div className="space-y-4">
              {c.faqs.map((f, i) => (
                <details key={i} className="bg-white rounded-lg shadow-sm group">
                  <summary className="cursor-pointer list-none p-6 font-semibold text-lg text-[var(--color-ink)] hover:text-[var(--color-primary)] transition-colors">
                    <div className="flex items-center justify-between">
                      <span>{f.q}</span>
                      <svg className="w-5 h-5 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                  </summary>
                  <div className="px-6 pb-6 text-[var(--color-muted)] leading-relaxed"><p>{f.a}</p></div>
                </details>
              ))}
            </div>
          </div>
        </section>
      ) : null}

      {c.relatedLinks && c.relatedLinks.length ? (
        <section className="bg-white py-16">
          <div className="max-w-7xl mx-auto px-6">
            <h3 className="text-3xl font-semibold mb-10 text-[var(--color-ink)] text-center">Related {c.hubLabel}</h3>
            <div className="grid md:grid-cols-3 gap-8">
              {c.relatedLinks.map((r, i) => (
                <a key={i} href={r.href} className="group bg-[var(--color-cream)] rounded-xl p-8 hover:shadow-xl transition-all hover:-translate-y-1">
                  {r.eyebrow && <p className="text-xs font-semibold uppercase tracking-widest text-[var(--color-muted)] mb-2">{r.eyebrow}</p>}
                  <h4 className="text-xl font-semibold mb-3 text-[var(--color-ink)] group-hover:text-[var(--color-primary)] transition-colors">{r.label}</h4>
                  {r.body && <p className="text-[var(--color-muted)] leading-relaxed">{r.body}</p>}
                </a>
              ))}
            </div>
          </div>
        </section>
      ) : null}

      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] py-20 text-white text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-semibold mb-6">{c.ctaHeading || 'Ready to Get Started?'}</h2>
          {c.ctaBody && <p className="text-xl mb-8 opacity-95 leading-relaxed">{c.ctaBody}</p>}
          <a href={c.ctaHref} className="inline-block bg-white text-[var(--color-primary)] px-8 py-4 rounded-lg font-semibold text-lg hover:bg-[var(--color-cream)] transition-colors">{c.ctaLabel}</a>
        </div>
      </section>
    </main>
  )
}
