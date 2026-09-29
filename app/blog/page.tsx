import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { PROVIDER, SITE_NAME, SITE_URL, withBrand } from '@/lib/site'
import { PAGE_IMAGES, imageFor } from '@/lib/images'
import { POSTS, POST_CATEGORIES, REAL_POST_SLUGS, categoryId, postHref, type PostMeta } from '@/lib/posts'
import { formatDate, formatMonth } from '@/components/blog/ArticleLayout'
import PageHero from '@/components/site/PageHero'
import Container from '@/components/site/Container'
import SectionHeading from '@/components/site/SectionHeading'
import CtaBand from '@/components/site/CtaBand'
import JsonLd from '@/components/site/JsonLd'
import { ArrowRight } from '@/components/site/icons'

const TITLE = withBrand('Psychiatric Care Blog, Connecticut')
const DESCRIPTION =
  'Articles from JRose Wellness on psychiatric nurse practitioner care, medication management, and telehealth mental health treatment for Connecticut patients.'
const HERO_IMAGE = PAGE_IMAGES['/blog']

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: '/blog' },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: '/blog',
    siteName: SITE_NAME,
    type: 'website',
    images: [{ url: HERO_IMAGE.src, alt: HERO_IMAGE.alt }],
  },
  twitter: { card: 'summary_large_image', title: TITLE, description: DESCRIPTION, images: [HERO_IMAGE.src] },
}

const isReal = (p: PostMeta) => (REAL_POST_SLUGS as readonly string[]).includes(p.slug)

/** The route's image from lib/images.ts, unless the post names a different one (then decorative). */
function cardImage(p: PostMeta) {
  const fromRoute = imageFor(postHref(p.slug))
  return !p.image || p.image === fromRoute.src ? fromRoute : { src: p.image, alt: '' }
}

function PostDates({ post }: { post: PostMeta }) {
  if (!post.date && !post.updated) return null
  return (
    <p className="text-sm text-muted">
      {post.date && (
        <>
          Published <time dateTime={post.date}>{formatDate(post.date)}</time>
        </>
      )}
      {post.date && post.updated && (
        <span aria-hidden="true" className="mx-2 text-muted/50">
          &middot;
        </span>
      )}
      {post.updated && (
        <>
          Updated <time dateTime={post.updated}>{formatMonth(post.updated)}</time>
        </>
      )}
    </p>
  )
}

function FeaturedCard({ post }: { post: PostMeta }) {
  const img = cardImage(post)
  return (
    <article className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-border bg-white shadow-[0_1px_2px_rgba(46,15,19,0.04),0_12px_32px_-16px_rgba(46,15,19,0.18)] transition-shadow hover:shadow-[0_1px_2px_rgba(46,15,19,0.06),0_18px_40px_-16px_rgba(46,15,19,0.28)]">
      <div className="relative h-56 overflow-hidden bg-light sm:h-60">
        <Image
          src={img.src}
          alt={img.alt}
          fill
          sizes="(min-width: 1024px) 400px, (min-width: 768px) 50vw, 100vw"
          className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
        />
      </div>
      <div className="flex flex-1 flex-col p-6 sm:p-7">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">{post.category}</p>
        <h3 className="mt-3 font-cormorant text-[1.75rem] font-semibold leading-tight text-primary">
          <Link
            href={postHref(post.slug)}
            className="after:absolute after:inset-0 after:rounded-3xl focus-visible:outline-none focus-visible:after:outline focus-visible:after:outline-2 focus-visible:after:outline-offset-2 focus-visible:after:outline-accent"
          >
            {post.title}
          </Link>
        </h3>
        <p className="mt-3 flex-1 leading-relaxed text-ink/80">{post.description}</p>
        <div className="mt-5">
          <PostDates post={post} />
        </div>
        <span className="mt-4 inline-flex items-center gap-1.5 text-[15px] font-semibold text-accent">
          Read article
          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
        </span>
      </div>
    </article>
  )
}

function PostCard({ post }: { post: PostMeta }) {
  return (
    <article className="group relative flex h-full flex-col rounded-2xl border border-border bg-cream p-6 transition-colors hover:border-accent/40 hover:bg-white">
      <h4 className="font-cormorant text-[1.45rem] font-semibold leading-snug text-primary">
        <Link
          href={postHref(post.slug)}
          className="after:absolute after:inset-0 after:rounded-2xl focus-visible:outline-none focus-visible:after:outline focus-visible:after:outline-2 focus-visible:after:outline-offset-2 focus-visible:after:outline-accent"
        >
          {post.title}
        </Link>
      </h4>
      <p className="mt-3 flex-1 text-[15px] leading-relaxed text-ink/75">{post.description}</p>
      <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-accent">
        Read article
        <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
      </span>
    </article>
  )
}

export default function BlogPage() {
  const featured = POSTS.filter(isReal)
  const others = POSTS.filter((p) => !isReal(p))

  // Known categories in their set order, then any category not in POST_CATEGORIES.
  const known = POST_CATEGORIES as readonly string[]
  const extra = Array.from(new Set(others.map((p) => p.category))).filter((c) => !known.includes(c))
  const groups = [...known, ...extra]
    .map((category) => ({ category, posts: others.filter((p) => p.category === category) }))
    .filter((g) => g.posts.length > 0)

  const blogSchema = {
    '@type': 'Blog',
    '@id': `${SITE_URL}/blog#blog`,
    name: `${SITE_NAME} Blog`,
    url: `${SITE_URL}/blog`,
    description: DESCRIPTION,
    inLanguage: 'en-US',
    publisher: { '@type': 'Organization', name: SITE_NAME, url: SITE_URL },
    blogPost: POSTS.map((p) => ({
      '@type': 'BlogPosting',
      headline: p.title,
      url: `${SITE_URL}${postHref(p.slug)}`,
      ...(p.date ? { datePublished: p.date } : {}),
      ...(p.updated ? { dateModified: p.updated } : {}),
    })),
  }

  return (
    <>
      <JsonLd data={blogSchema} />
      <PageHero
        size="md"
        eyebrow="Blog"
        title="Psychiatric Care Blog"
        subtitle="Plain-language articles on seeing a psychiatric nurse practitioner, medication management, and telehealth visits, for patients in Connecticut."
        image={HERO_IMAGE}
        priority
        crumbs={[{ label: 'Home', href: '/' }, { label: 'Blog' }]}
      />

      {featured.length > 0 && (
        <section className="bg-cream py-16 sm:py-20" aria-labelledby="featured-heading">
          <Container>
            <SectionHeading
              id="featured-heading"
              eyebrow="From the practice"
              title="Featured articles"
              intro="What a psychiatric nurse practitioner does, how self-pay compares with insurance, and what whole-person medication management looks like."
            />
            <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {featured.map((post) => (
                <FeaturedCard key={post.slug} post={post} />
              ))}
            </div>
          </Container>
        </section>
      )}

      {groups.length > 0 && (
        <section className="bg-white py-16 sm:py-20" aria-labelledby="topics-heading">
          <Container>
            <SectionHeading
              id="topics-heading"
              eyebrow="Browse by topic"
              title="More articles"
              intro="General information about mental health and psychiatric care. It is not medical advice for your situation, so bring your questions to your visits."
            />

            <nav aria-label="Article topics" className="mt-8">
              <ul className="flex flex-wrap gap-2">
                {groups.map((g) => (
                  <li key={g.category}>
                    <a
                      href={`#${categoryId(g.category)}`}
                      className="inline-flex items-center gap-2 rounded-full border border-border bg-cream px-4 py-2 text-sm font-medium text-ink transition-colors hover:border-accent/40 hover:bg-light hover:text-primary"
                    >
                      {g.category}
                      <span className="rounded-full bg-white px-2 py-0.5 text-xs text-muted">
                        {g.posts.length}
                        <span className="sr-only"> {g.posts.length === 1 ? 'article' : 'articles'}</span>
                      </span>
                    </a>
                  </li>
                ))}
              </ul>
            </nav>

            <div className="mt-14 space-y-16">
              {groups.map((g) => (
                <section key={g.category} id={categoryId(g.category)} aria-labelledby={`${categoryId(g.category)}-heading`}>
                  <div className="flex items-baseline justify-between gap-4 border-b border-border pb-3">
                    <h3
                      id={`${categoryId(g.category)}-heading`}
                      className="font-cormorant text-3xl font-semibold leading-tight text-primary"
                    >
                      {g.category}
                    </h3>
                    <p className="text-sm text-muted">
                      {g.posts.length} {g.posts.length === 1 ? 'article' : 'articles'}
                    </p>
                  </div>
                  <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                    {g.posts.map((post) => (
                      <PostCard key={post.slug} post={post} />
                    ))}
                  </div>
                </section>
              ))}
            </div>
          </Container>
        </section>
      )}

      <CtaBand
        heading="Ready to talk with someone?"
        body={`Secure video visits with ${PROVIDER.name}, a ${PROVIDER.title.toLowerCase()}. Book with insurance through Alma or Headway, or request a self-pay appointment.`}
      />
    </>
  )
}
