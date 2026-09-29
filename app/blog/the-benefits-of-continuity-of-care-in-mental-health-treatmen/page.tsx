import type { Metadata } from 'next'
import type { ReactNode } from 'react'
import Link from 'next/link'
import PageHero from '@/components/site/PageHero'
import CrisisNotice from '@/components/site/CrisisNotice'
import JsonLd from '@/components/site/JsonLd'
import { BUTTON } from '@/components/site/SmartLink'
import { ArrowRight, CheckIcon, PhoneIcon } from '@/components/site/icons'
import { AGES, CONTACT, NAV_CTA, PRACTICE_FAQS, PROVIDER, SITE_NAME, SITE_URL, withBrand } from '@/lib/site'
import { imageFor } from '@/lib/images'
import { getPost, postHref, postRobots } from '@/lib/posts'

// Autobuilt post, rewritten against FACTS.md: city location claim removed, evidence and cost-savings
// claims removed, references to other clinician types and "one roof" care settings removed. Adds the
// one true practice fact about continuity: Jessica is the only provider, so every visit is with her.

const SLUG = 'the-benefits-of-continuity-of-care-in-mental-health-treatmen'
const post = getPost(SLUG)
const PATH = postHref(SLUG)
// Title tag kept under 60 characters; the H1 stays post.title.
const TITLE = withBrand('Why Continuity of Care Matters in Mental Health')
const DESCRIPTION =
  'Why seeing the same provider over time matters in mental health care, from building trust to adjusting your treatment plan as your life and your needs change.'
const IMAGE = imageFor('/who-we-help/adults')

// PRACTICE_FAQS: [2] therapy and medication (includes referral to a therapist when needed).
const THERAPY_AND_MEDICATION = PRACTICE_FAQS[2].a

export const metadata: Metadata = {
  title: TITLE,
  // Noindex until Jessica reviews this autobuilt post (INDEXED_POST_SLUGS in lib/posts.ts).
  ...postRobots(SLUG),
  description: DESCRIPTION,
  alternates: { canonical: PATH },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: PATH,
    siteName: SITE_NAME,
    type: 'article',
    images: [{ url: IMAGE.src, alt: IMAGE.alt }],
  },
  twitter: { card: 'summary_large_image', title: TITLE, description: DESCRIPTION, images: [IMAGE.src] },
}

const RELATED = [
  {
    href: '/services/medication-management',
    eyebrow: 'Services',
    title: 'Medication Management',
    body: 'Follow-up visits to check your progress and adjust treatment when needed.',
  },
  {
    href: '/blog/the-importance-of-follow-up-care-in-mental-health-treatment',
    eyebrow: 'Blog',
    title: 'The Importance of Follow-Up Care in Mental Health Treatment',
    body: 'What happens at a follow-up, and how regular check-ins keep your plan on track.',
  },
  {
    href: '/about',
    eyebrow: 'About',
    title: `About ${PROVIDER.name}`,
    body: 'Her training, her approach, and what it is like to work with her.',
  },
]

const H2 = 'mt-14 mb-4 font-cormorant text-[1.9rem] font-semibold leading-tight text-primary sm:text-[2.25rem]'
const LEAD = 'font-semibold text-ink'
const LINK = 'font-semibold text-accent underline decoration-accent/40 underline-offset-[3px] hover:decoration-accent'

function CheckList({ items }: { items: ReactNode[] }) {
  return (
    <ul className="mb-6 space-y-3">
      {items.map((item, i) => (
        <li key={i} className="flex items-start gap-3">
          <CheckIcon className="mt-1 h-5 w-5 shrink-0 text-accent" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  )
}

const articleSchema = {
  '@type': 'Article',
  headline: post.title,
  ...(post.updated ? { dateModified: post.updated } : {}),
  description: DESCRIPTION,
  image: [new URL(IMAGE.src, SITE_URL).toString()],
  inLanguage: 'en-US',
  author: { '@type': 'Organization', name: SITE_NAME, url: SITE_URL },
  publisher: { '@type': 'Organization', name: SITE_NAME, url: SITE_URL },
  mainEntityOfPage: new URL(PATH, SITE_URL).toString(),
}

export default function ContinuityOfCarePost() {
  return (
    <main>
      <JsonLd data={articleSchema} />
      <PageHero
        eyebrow={post.category}
        title={post.title}
        subtitle={DESCRIPTION}
        image={IMAGE}
        priority
        crumbs={[{ label: 'Home', href: '/' }, { label: 'Blog', href: '/blog' }, { label: post.title }]}
      />

      <article className="bg-white py-14 sm:py-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6">
          <p className="border-b border-border pb-6 text-sm text-muted">
            By <span className="font-semibold text-ink">{SITE_NAME}</span>
          </p>

          <div className="mt-10 text-[1.0625rem] leading-[1.8] text-ink/85 [&>p]:mb-5">
            <p className="text-xl leading-relaxed text-ink">
              Imagine sharing your hardest struggles with someone new, only to start over with a different person a
              few months later. For many people looking for mental health care, that is not hypothetical. It is
              exhausting, and it can make it harder to keep going with treatment.
            </p>
            <p>
              Continuity of care means having an ongoing relationship with the same provider over time. In mental
              health, that steady connection builds trust and understanding that is hard to recreate in scattered,
              one-off visits. Whether you are dealing with anxiety, depression, trauma, or something else, it is worth
              understanding why it matters.
            </p>

            <h2 className={H2}>What is continuity of care?</h2>
            <p>
              Continuity of care means seeing the same provider consistently throughout your treatment. Instead of being
              passed between clinicians, or starting over after a gap, you keep working with someone who knows your
              history, understands your challenges, and follows your progress over time.
            </p>
            <p>
              It can take different forms: months or years with the same therapist, or regular follow-ups with the same
              prescriber, who can adjust your medication based on changes they have watched unfold. The common thread is
              a relationship that deepens with each visit.
            </p>
            <p>
              At {SITE_NAME}, this is built in. {PROVIDER.name} is the practice&apos;s only provider, so the person who
              does your first evaluation is the person you see at every follow-up.
            </p>

            <h2 className={H2}>Why a steady relationship matters</h2>
            <p>
              Mental health care asks a lot of you. Talking about painful experiences, patterns you want to change, or
              dark thoughts takes courage, and it is easier with someone who already knows and accepts you.
            </p>
            <p>
              A provider who has worked with you over time knows how you communicate, what you have already tried, and
              the small shifts in mood or behavior that can signal progress or trouble. They remember that the holidays
              were hard last year. They know which coping strategies have helped before. You do not have to explain your
              whole story again.
            </p>

            <div className="my-10 rounded-r-2xl border-l-4 border-accent bg-light/70 px-6 py-5">
              <p className="font-cormorant text-[1.4rem] leading-snug text-primary">
                Trust and safety do not happen instantly. They are built visit by visit, conversation by conversation.
              </p>
            </div>

            <h2 className={H2}>Care that fits you better over time</h2>
            <p>
              Mental health conditions are personal. What helps one person with depression may not help another, and
              the same anxiety can look very different depending on your life, your history, and your support system.
            </p>
            <p>
              Continuity lets your provider move past a generic approach. Over time, they learn what motivates you, what
              tends to trigger setbacks, and how you respond to different treatments, and they can fine-tune your care
              based on what is actually happening instead of starting from scratch.
            </p>
            <p>
              This matters for medication, too. Finding the right medication and dose often takes careful adjustment,
              and people respond differently. A prescriber who follows you over time can spot patterns, notice side
              effects early, and make thoughtful changes.
            </p>
            <p>
              Just as important, continuity helps you see your progress. Recovery rarely follows a straight line. There
              are setbacks, plateaus, and slow improvements that are hard to see in any single visit but clear over
              months. Someone who has been with you along the way can help you see how far you have come.
            </p>

            <h2 className={H2}>Fewer barriers, more momentum</h2>
            <p>
              Starting care is hard. Building a new relationship, explaining your history, and learning to trust someone
              takes energy that can be in short supply when you are struggling. Having to do it again and again is a
              real barrier.
            </p>
            <p>
              Continuity removes that barrier. Once you have a provider you trust, showing up gets easier. When
              depression makes it hard to get out of bed, or anxiety makes everything feel like too much, a standing
              appointment with someone familiar can be the thread that keeps you connected to care. Video visits from
              home can make that thread easier to hold on a hard week.
            </p>

            <h2 className={H2}>Practical benefits</h2>
            <CheckList
              items={[
                <>
                  <strong className={LEAD}>Coordinated care:</strong> a provider who sees the full picture can help connect the pieces and
                  refer you when you need something more. In Jessica&apos;s words: &ldquo;{THERAPY_AND_MEDICATION}&rdquo;
                </>,
                <>
                  <strong className={LEAD}>More useful visits:</strong> less time repeating your history, more time on what is happening now.
                </>,
                <>
                  <strong className={LEAD}>Earlier course corrections:</strong> someone who knows you well is more likely to notice warning
                  signs before they grow.
                </>,
                <>
                  <strong className={LEAD}>Accountability:</strong> an ongoing relationship makes it easier to stay with your goals.
                </>,
              ]}
            />

            <h2 className={H2}>How to build continuity into your care</h2>
            <CheckList
              items={[
                <>
                  <strong className={LEAD}>Ask about ongoing care:</strong> when you are choosing a provider, ask how they handle follow-up
                  and who you will see at each visit.
                </>,
                <>
                  <strong className={LEAD}>Keep regular appointments:</strong> even when you feel better, steady check-ins protect the
                  relationship and prevent long gaps.
                </>,
                <>
                  <strong className={LEAD}>Say what you need:</strong> if continuity matters to you, tell your provider and talk about what
                  ongoing care could look like.
                </>,
                <>
                  <strong className={LEAD}>Give it time:</strong> trust takes a little while. Give the relationship a fair chance before
                  deciding whether it is the right fit.
                </>,
              ]}
            />

            <h2 className={H2}>The path forward</h2>
            <p>
              Mental health care is not a quick fix. It unfolds over time, and progress is about more than fewer
              symptoms: it is also resilience, self-understanding, and changes that last. Continuity of care respects
              that.
            </p>
            <p>
              Working with the same provider turns treatment into a partnership, a place where setbacks do not mean
              starting over and someone stays invested in how you are doing.
            </p>
            <p>
              {SITE_NAME} offers secure video visits with {PROVIDER.byline} for {AGES.short.toLowerCase()} in{' '}
              {CONTACT.state}. Care starts with a{' '}
              <Link href="/services/psychiatric-evaluation" className={LINK}>
                psychiatric evaluation
              </Link>{' '}
              and continues with{' '}
              <Link href="/services/medication-management" className={LINK}>
                follow-up and medication management
              </Link>{' '}
              visits, always with Jessica.
            </p>
          </div>

          <aside className="mt-14 rounded-2xl bg-cream p-6 sm:p-8">
            <p className="font-semibold text-ink">About this article</p>
            <p className="mt-2 text-sm leading-relaxed text-muted">
              This article is general information from {SITE_NAME}, not medical advice for your situation. Talk with
              your own clinician before starting, stopping, or changing any treatment.
            </p>
            <div className="mt-4">
              <CrisisNotice variant="compact" />
            </div>
          </aside>
        </div>
      </article>

      <section className="bg-cream py-16 sm:py-20" aria-labelledby="related-heading">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 id="related-heading" className="text-center font-cormorant text-3xl font-semibold text-primary sm:text-4xl">
            Related resources
          </h2>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {RELATED.map((r) => (
              <Link
                key={r.href}
                href={r.href}
                className="group flex flex-col rounded-2xl border border-border bg-white p-7 shadow-sm transition-shadow hover:shadow-md"
              >
                <span className="text-xs font-semibold uppercase tracking-wider text-accent">{r.eyebrow}</span>
                <h3 className="mt-2 font-cormorant text-2xl font-semibold leading-snug text-ink transition-colors group-hover:text-primary">
                  {r.title}
                </h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">{r.body}</p>
                <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-accent">
                  Read more <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-br from-dark to-primary py-20 text-center text-white">
        <div className="mx-auto max-w-3xl px-4 sm:px-6">
          <h2 className="font-cormorant text-4xl font-semibold leading-tight sm:text-5xl">Ready to take the next step?</h2>
          <p className="mt-4 text-lg leading-relaxed text-white/90">
            Secure video visits with {PROVIDER.byline} for {AGES.short.toLowerCase()} in {CONTACT.state}. Book with
            insurance through Alma or Headway, or request a self-pay appointment.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Link href={NAV_CTA.href} className={`${BUTTON.base} ${BUTTON.lg} ${BUTTON.accent}`}>
              {NAV_CTA.label}
            </Link>
            <a href={CONTACT.phoneHref} className={`${BUTTON.base} ${BUTTON.lg} ${BUTTON.outlineLight}`}>
              <PhoneIcon />
              Call {CONTACT.phone}
            </a>
          </div>
        </div>
      </section>
    </main>
  )
}
