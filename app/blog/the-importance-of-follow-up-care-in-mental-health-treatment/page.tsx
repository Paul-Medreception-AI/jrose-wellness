import type { Metadata } from 'next'
import type { ReactNode } from 'react'
import Link from 'next/link'
import PageHero from '@/components/site/PageHero'
import CrisisNotice from '@/components/site/CrisisNotice'
import CrisisText from '@/components/site/CrisisText'
import JsonLd from '@/components/site/JsonLd'
import { BUTTON } from '@/components/site/SmartLink'
import { ArrowRight, CheckIcon, PhoneIcon } from '@/components/site/icons'
import { AGES, CONTACT, NAV_CTA, PRICING, PROVIDER, SITE_NAME, SITE_URL, withBrand } from '@/lib/site'
import { imageFor } from '@/lib/images'
import { getPost, postHref, postRobots } from '@/lib/posts'

// Autobuilt post, rewritten against FACTS.md: evidence and relapse-rate claims removed, "life
// coaching" and alternative-medicine visit types removed, the invented visit schedule (weekly to biweekly
// to monthly, "every few months") removed, "standardized measures" and "crisis planning" as services
// removed. Uses the practice's own description of follow-up visits (PRICING.followUp) and the
// sliding-scale note.

const SLUG = 'the-importance-of-follow-up-care-in-mental-health-treatment'
const post = getPost(SLUG)
const PATH = postHref(SLUG)
const TITLE = withBrand(post.title)
const DESCRIPTION =
  'Why follow-up visits matter in mental health care, what happens at a follow-up, and how regular check-ins keep your treatment plan working as things change.'
const IMAGE = imageFor('/services/medication-management')

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
    href: '/blog/the-benefits-of-continuity-of-care-in-mental-health-treatmen',
    eyebrow: 'Blog',
    title: 'The Benefits of Continuity of Care in Mental Health Treatment',
    body: 'Why seeing the same provider over time makes a difference.',
  },
  {
    href: '/insurance',
    eyebrow: 'Insurance & pricing',
    title: 'Insurance and Self-Pay',
    body: 'Use your insurance through Alma or Headway, or pay for your visits yourself.',
  },
]

const H2 = 'mt-14 mb-4 font-cormorant text-[1.9rem] font-semibold leading-tight text-primary sm:text-[2.25rem]'
const H3 = 'mt-8 mb-3 text-xl font-semibold leading-snug text-primary'
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

export default function FollowUpCarePost() {
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
              Starting mental health treatment takes courage, and it is only the beginning. Lasting progress usually
              depends on what happens next: steady follow-up care, ongoing support, and adjustments along the way. Yet
              many people stop treatment early, right when the real work of settling into a plan is underway.
            </p>
            <p>
              Understanding why follow-up care matters can help you stay with your plan and get more out of it,
              whether you are managing anxiety, depression, trauma, or another concern.
            </p>

            <h2 className={H2}>What is follow-up care?</h2>
            <p>
              Follow-up care is the ongoing visits and check-ins that come after your first evaluation. Depending on
              your plan, it might include medication management visits, therapy sessions, or both.
            </p>
            <p>
              Mental health treatment often takes time. Medications can take a while to work, new coping skills take
              practice, and old patterns shift gradually. Follow-up care gives that process structure.
            </p>
            <blockquote className="my-8 rounded-r-2xl border-l-4 border-accent bg-light/70 px-6 py-5">
              <p className="font-cormorant text-[1.35rem] leading-snug text-primary">
                &ldquo;{PRICING.followUp.description}&rdquo;
              </p>
              <cite className="mt-2 block text-sm not-italic text-muted">
                {SITE_NAME}, on {PRICING.followUp.name.toLowerCase()} visits
              </cite>
            </blockquote>

            <h2 className={H2}>Why follow-up care matters</h2>
            <h3 className={H3}>Seeing whether treatment is working</h3>
            <p>
              Mental health treatment is not one-size-fits-all. What helps one person may not help another, and even a
              good plan may need changes over time. Follow-up visits let you and your provider look at your progress,
              see what is working, and adjust.
            </p>
            <p>
              If you take medication for depression, for example, follow-ups are when side effects get addressed,
              improvement gets tracked, and the dose can be adjusted if needed.
            </p>
            <h3 className={H3}>Catching setbacks early</h3>
            <p>
              Many mental health conditions come and go, or come back after a good stretch. Staying in touch with your
              provider, even when you feel better, makes it easier to notice early warning signs and respond before a
              setback grows.
            </p>

            <div className="my-10 rounded-r-2xl border-l-4 border-accent bg-light/70 px-6 py-5">
              <p className="font-cormorant text-[1.4rem] leading-snug text-primary">
                Recovery is an ongoing process, not a single destination. Follow-up care is the support that helps you
                keep your progress.
              </p>
            </div>

            <h3 className={H3}>Building trust</h3>
            <p>
              Your relationship with your provider is a big part of treatment, and it grows with steady contact. As
              trust builds, it gets easier to talk about hard things and to be honest about what is and is not helping.
              Stopping care suddenly means losing that connection, and maybe starting over with someone new if symptoms
              return.
            </p>

            <h2 className={H2}>Common barriers, and ways around them</h2>
            <CheckList
              items={[
                <>
                  <strong className={LEAD}>Feeling better:</strong> when symptoms ease, it is tempting to think you are done. That is often
                  when steady follow-up matters most. Talk with your provider before stopping any medication.
                </>,
                <>
                  <strong className={LEAD}>Cost:</strong> at {SITE_NAME}, you can use insurance by booking through Alma or Headway, or pay for
                  visits yourself. {PRICING.slidingScale} Ask whether it applies to your visits. See{' '}
                  <Link href="/insurance" className={LINK}>
                    insurance and pricing
                  </Link>
                  .
                </>,
                <>
                  <strong className={LEAD}>Scheduling:</strong> video visits from home cut out the commute and the waiting room, so they are
                  easier to fit into a busy week.
                </>,
                <>
                  <strong className={LEAD}>Stigma:</strong> ongoing care can feel like a label. Taking care of your mental health is a sign of
                  strength.
                </>,
                <>
                  <strong className={LEAD}>Slow progress:</strong> change can be gradual. Small steps add up, and your provider can help you
                  see them.
                </>,
              ]}
            />

            <h2 className={H2}>What a good follow-up looks like</h2>
            <p>Good follow-up care is personal, collaborative, and focused on where you are now. It usually includes:</p>
            <CheckList
              items={[
                <>
                  <strong className={LEAD}>Checking in:</strong> how you are feeling, how you are sleeping, and how daily life is going.
                </>,
                <>
                  <strong className={LEAD}>Shared goals:</strong> you and your provider set realistic goals together and update them as you
                  go.
                </>,
                <>
                  <strong className={LEAD}>Medication review:</strong> if medication is part of your care, making sure it is safe, working,
                  and still needed.
                </>,
                <>
                  <strong className={LEAD}>Skills and support:</strong> practicing coping strategies and talking through what has come up
                  since your last visit.
                </>,
                <>
                  <strong className={LEAD}>A plan for hard days:</strong> what to do between visits if symptoms get worse, including{' '}
                  <CrisisText text="when to call or text 988 or call 911." linkClassName={LINK} />
                </>,
              ]}
            />

            <h2 className={H2}>How to stay engaged</h2>
            <CheckList
              items={[
                <>
                  <strong className={LEAD}>Book your next visit before you log off:</strong> it keeps the momentum going.
                </>,
                <>
                  <strong className={LEAD}>Set reminders:</strong> use your phone or calendar for appointments and medications.
                </>,
                <>
                  <strong className={LEAD}>Track how you feel:</strong> a few notes on mood, sleep, and good days help you and your provider
                  see change over time.
                </>,
                <>
                  <strong className={LEAD}>Speak up:</strong> if visits do not feel helpful, or something gets in the way, say so instead of
                  quietly stopping.
                </>,
                <>
                  <strong className={LEAD}>Lean on your people:</strong> ask a friend or family member to help you stay on track.
                </>,
                <>
                  <strong className={LEAD}>Remember your why:</strong> when motivation dips, think back to why you started.
                </>,
              ]}
            />

            <h2 className={H2}>How often you meet can change</h2>
            <p>
              How often you have follow-up visits is not fixed. Visits are often closer together while you are starting
              or adjusting a treatment and can spread out as things settle. The key is to make those changes together
              with your provider, based on how you are doing, rather than stopping care abruptly because you feel
              better.
            </p>

            <h2 className={H2}>Moving forward with confidence</h2>
            <p>
              Recovery is rarely a straight line. There will be setbacks, plateaus, and breakthroughs. Follow-up care
              gives you steady support and guidance through all of it.
            </p>
            <p>
              If you are in treatment now, keep your next appointment. If you have drifted away from care, reaching
              back out is a good step. At {SITE_NAME}, every follow-up is with {PROVIDER.byline}, by secure video, for{' '}
              {AGES.short.toLowerCase()} in {CONTACT.state}. Learn more about{' '}
              <Link href="/services/medication-management" className={LINK}>
                follow-up and medication management
              </Link>
              .
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
