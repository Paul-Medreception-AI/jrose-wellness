import type { Metadata } from 'next'
import type { ReactNode } from 'react'
import Link from 'next/link'
import PageHero from '@/components/site/PageHero'
import CrisisNotice from '@/components/site/CrisisNotice'
import JsonLd from '@/components/site/JsonLd'
import { BUTTON } from '@/components/site/SmartLink'
import { ArrowRight, CheckIcon, PhoneIcon } from '@/components/site/icons'
import { AGES, CONTACT, NAV_CTA, PROVIDER, SITE_NAME, SITE_URL, withBrand } from '@/lib/site'
import { imageFor } from '@/lib/images'
import { getPost, postHref, postRobots } from '@/lib/posts'

// Autobuilt post, rewritten against FACTS.md: brain-imaging and evidence claims removed, alternative
// therapies and EMDR removed, "root causes" framing and the city location claim removed. Stress care
// is framed as support alongside psychiatric care.

const SLUG = 'the-connection-between-chronic-stress-and-mental-health'
const post = getPost(SLUG)
const PATH = postHref(SLUG)
const TITLE = withBrand(post.title)
const DESCRIPTION =
  'How long-term stress affects your mood, sleep, and focus, the signs it is taking a toll, and practical ways to manage stress before it builds into more.'
const IMAGE = imageFor('/conditions/burnout-life-transitions')

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
    href: '/conditions/burnout-life-transitions',
    eyebrow: 'Conditions',
    title: 'Burnout & Life Transitions',
    body: 'Support when stress, burnout, or a big change has left you running on empty.',
  },
  {
    href: '/blog/self-care-isn-t-selfish-prioritizing-mental-health',
    eyebrow: 'Blog',
    title: "Self-Care Isn't Selfish: Prioritizing Mental Health",
    body: 'Practical ways to make room for your own needs without guilt.',
  },
  {
    href: '/conditions/anxiety',
    eyebrow: 'Conditions',
    title: 'Anxiety & Panic',
    body: 'When worry, tension, or panic have become part of every day.',
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

export default function ChronicStressPost() {
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
              Everyone deals with stress. A deadline, an unexpected bill, a hard conversation: these moments set off
              your body&apos;s stress response, and then they pass. When stress becomes chronic and lingers day after
              day, it does more than make you feel tense. It can change how you sleep, how you think, and how you feel
              about your life.
            </p>
            <p>
              Understanding how long-term stress affects your mental health is a first step toward breaking the cycle
              and feeling more like yourself again.
            </p>

            <h2 className={H2}>What is chronic stress?</h2>
            <p>
              Short-term stress is your body&apos;s &ldquo;fight-or-flight&rdquo; response to a specific event. Stress
              hormones such as adrenaline and cortisol help you react, and once the moment passes, your body settles
              back down.
            </p>
            <p>
              Chronic stress is different. It happens when the pressure does not let up for weeks, months, or longer:
              ongoing work demands, money worries, relationship strain, caregiving, or unresolved trauma. When your
              stress response never fully switches off, it starts to wear on both body and mind.
            </p>

            <h2 className={H2}>What long-term stress does to how you feel</h2>
            <p>
              Your stress response is meant to switch on and off. When it stays on, you may feel keyed up and exhausted
              at the same time. It gets harder to concentrate, make decisions, sleep well, and keep things in
              perspective. Small frustrations can start to feel huge.
            </p>
            <p>
              Over time, ongoing stress can also set the stage for anxiety or depression, or make symptoms you already
              have harder to manage. That is one reason it deserves attention before it builds.
            </p>

            <div className="my-10 rounded-r-2xl border-l-4 border-accent bg-light/70 px-6 py-5">
              <p className="font-cormorant text-[1.4rem] leading-snug text-primary">
                Chronic stress is not a personal failing. It is what happens when the demands on you outpace the time
                and support you have to recover.
              </p>
            </div>

            <h2 className={H2}>Signs stress is taking a toll</h2>
            <p>The effects of chronic stress can creep in slowly, which makes them easy to brush off. Watch for:</p>
            <CheckList
              items={[
                <>
                  <strong className={LEAD}>Ongoing worry or anxiety</strong> that feels bigger than the situation, often with muscle tension,
                  a racing heart, or shallow breathing.
                </>,
                <>
                  <strong className={LEAD}>Low mood</strong>, losing interest in things you usually enjoy, feeling hopeless, or changes in
                  appetite.
                </>,
                <>
                  <strong className={LEAD}>Trouble thinking clearly:</strong> brain fog, poor concentration, forgetfulness, or feeling
                  overwhelmed by simple tasks.
                </>,
                <>
                  <strong className={LEAD}>Sleep problems</strong> such as trouble falling asleep, restless sleep, or waking often during the
                  night.
                </>,
                <>
                  <strong className={LEAD}>Irritability</strong> or a short fuse that strains your relationships.
                </>,
                <>
                  <strong className={LEAD}>Physical symptoms</strong> such as headaches, stomach trouble, aches, or getting sick more often.
                </>,
              ]}
            />
            <p>
              These symptoms can feed each other. Stress wears down your mood and sleep, which leaves you less able to
              cope with stress, which adds more strain. Breaking that cycle often takes intentional change, and
              sometimes professional support.
            </p>

            <h2 className={H2}>Who is most affected?</h2>
            <p>
              Anyone can live with chronic stress. It is especially common among caregivers, health care workers,
              parents juggling many responsibilities, people in high-pressure jobs, people facing financial strain, and
              people with a history of trauma.
            </p>
            <p>
              Stress also comes from forces outside your control, such as discrimination, money insecurity, or trouble
              getting health care. Recognizing that some stress is structural can ease the self-blame that often comes
              with it.
            </p>

            <h2 className={H2}>Practical ways to manage chronic stress</h2>
            <p>
              You cannot remove every source of stress, but you can change how much it builds up. Things that often
              help:
            </p>
            <CheckList
              items={[
                <>
                  <strong className={LEAD}>Mindfulness and slow breathing:</strong> a few minutes a day can help your body shift out of high
                  alert.
                </>,
                <>
                  <strong className={LEAD}>Physical activity:</strong> walking, stretching, or any movement you enjoy gives stress somewhere to
                  go and can lift your mood.
                </>,
                <>
                  <strong className={LEAD}>Sleep:</strong> a steady sleep schedule and a calm wind-down routine help you recover from hard
                  days.
                </>,
                <>
                  <strong className={LEAD}>Connection:</strong> time with people who support you makes stress easier to carry.
                </>,
                <>
                  <strong className={LEAD}>Limits:</strong> saying no, handing things off, and protecting some time that is yours.
                </>,
                <>
                  <strong className={LEAD}>Professional support:</strong> therapy, cognitive behavioral techniques, and, when it fits,
                  medication for anxiety or depression can help you get out of the cycle.
                </>,
              ]}
            />

            <h2 className={H2}>When to seek professional help</h2>
            <p>
              If stress is affecting your daily life, your relationships, or your health, it is time to reach out.
              Warning signs include feeling hopeless most of the time, pulling away from people and activities, being
              unable to keep up with daily tasks, or physical symptoms that do not ease with rest.
            </p>
            <p>If you are having thoughts of harming yourself, please get help now:</p>
            <div className="mb-6">
              <CrisisNotice />
            </div>
            <p>
              Stress and burnout are among {PROVIDER.name}&apos;s clinical interests. At {SITE_NAME}, she sees{' '}
              {AGES.short.toLowerCase()} in {CONTACT.state} by secure video, starting with a{' '}
              <Link href="/services/psychiatric-evaluation" className={LINK}>
                psychiatric evaluation
              </Link>{' '}
              that looks at your symptoms, sleep, stressors, history, and goals. Care can include{' '}
              <Link href="/services/supportive-therapy" className={LINK}>
                supportive therapy
              </Link>{' '}
              within your visits and{' '}
              <Link href="/services/medication-management" className={LINK}>
                medication management
              </Link>{' '}
              when it fits. Learn more about{' '}
              <Link href="/conditions/burnout-life-transitions" className={LINK}>
                support for burnout and life transitions
              </Link>
              .
            </p>
            <p>You do not have to carry this alone. Support is available, and things can get better.</p>
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
