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

// Autobuilt post, rewritten against FACTS.md. The original used alternative-medicine framing
// (inflammation, gut microbiome, diet-based interventions, mind-body practices) with statistics and
// links to services that do not exist (/services/stress-management, /services/pain-management).
// Kept because the underlying topic (the mental health side of living with a physical condition)
// is psychiatric care; rewritten so the practice treats only the mental health side, the FNP
// background appears as background only (Jessica's own Headway words), and no primary care is implied.

const SLUG = 'the-connection-between-physical-health-conditions-and-mental'
const post = getPost(SLUG)
const PATH = postHref(SLUG)
// Title tag kept under 60 characters; the H1 stays post.title.
const TITLE = withBrand('How Physical Health Affects Mental Health')
const DESCRIPTION =
  'How a physical health condition can affect your mental health, how mood can affect your physical care, and why it helps to talk about both with your clinicians.'
const IMAGE = imageFor('/who-we-help/older-adults')

// PRACTICE_FAQS: [4] how medication is chosen.
const HOW_MEDICATION_IS_CHOSEN = PRACTICE_FAQS[4].a

// Jessica's own words (Headway profile). Background only: the practice offers no primary care.
const FNP_BACKGROUND =
  'In addition to my psychiatric background, I also have experience as a Family Nurse Practitioner (FNP), which gives me a broader understanding of the connection between physical and mental health.'

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
    href: '/conditions/depression',
    eyebrow: 'Conditions',
    title: 'Depression',
    body: 'How Jessica evaluates and treats depression by secure video, with or without medication.',
  },
  {
    href: '/services/medication-management',
    eyebrow: 'Services',
    title: 'Medication Management',
    body: 'Follow-up visits to check your progress and adjust treatment safely.',
  },
  {
    href: '/who-we-help/older-adults',
    eyebrow: 'Who we help',
    title: 'Older Adults',
    body: 'Telehealth psychiatric care for adults 65 and older, from home.',
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

export default function PhysicalHealthConditionsPost() {
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
              When you are diagnosed with a long-term physical health condition, the conversation usually centers on
              symptoms, treatments, and test results. Something just as important often gets less attention: how
              living with that condition affects your mood, your stress, and your sense of yourself.
            </p>
            <p>
              The connection runs both ways. A physical condition can take a toll on your mental health, and your
              mental health can shape how you manage a physical condition. Seeing both sides helps you get care that
              fits your whole life.
            </p>

            <h2 className={H2}>Why physical and mental health are connected</h2>
            <p>
              Your body and mind are not separate systems. Pain, fatigue, and poor sleep affect mood and concentration.
              Worry and low mood affect energy, sleep, and how your body feels. Your stress response ties the two
              together: when you are under strain for a long time, both your body and your mood feel it.
            </p>
            <p>
              A health condition also changes your day-to-day life: your routines, your work, your plans, and sometimes
              your sense of who you are. Those changes are stressful on their own.
            </p>

            <h2 className={H2}>How a physical condition can affect mental health</h2>
            <p>Living with an ongoing health condition often means carrying a lot at once:</p>
            <CheckList
              items={[
                'Managing symptoms, medications, and appointments',
                'Pain or fatigue that wears you down',
                'Adjusting to limits on what you can do',
                'Money stress from medical costs or changes at work',
                'Feeling isolated when others do not understand what you are going through',
              ]}
            />
            <p>
              It is common for depression or anxiety to show up alongside a long-term health condition, including heart
              disease, diabetes, chronic pain, and neurological conditions. That is not weakness or failure. It is an
              understandable response to a big change, and it deserves care of its own.
            </p>

            <div className="my-10 rounded-r-2xl border-l-4 border-accent bg-light/70 px-6 py-5">
              <p className="font-cormorant text-[1.4rem] leading-snug text-primary">
                Struggling emotionally with a physical illness is not a sign that you are coping badly. It is a signal
                that you deserve support for that part, too.
              </p>
            </div>

            <h2 className={H2}>How mental health can affect your physical care</h2>
            <p>
              The influence goes the other way as well. Depression can make it harder to keep up with exercise, regular
              meals, medications, and appointments. Anxiety can lead some people to put off medical care they need.
              Sleep problems, common with both depression and anxiety, can make pain, energy, and mood worse.
            </p>
            <p>
              That is why treating the mental health side is not only about feeling better emotionally. It can also make
              it easier to take care of the rest of your health.
            </p>

            <h2 className={H2}>Care that looks at both</h2>
            <p>
              Care works best when your clinicians know the whole picture. Your primary care clinician and specialists
              treat the physical condition. A psychiatric clinician focuses on the mental health side: evaluating
              symptoms like low mood, worry, irritability, or poor sleep, and offering medication management and
              supportive therapy when they fit.
            </p>
            <blockquote className="my-8 rounded-r-2xl border-l-4 border-accent bg-light/70 px-6 py-5">
              <p className="font-cormorant text-[1.35rem] leading-snug text-primary">&ldquo;{FNP_BACKGROUND}&rdquo;</p>
              <cite className="mt-2 block text-sm not-italic text-muted">{PROVIDER.byline}</cite>
            </blockquote>
            <p>
              Care at {SITE_NAME} focuses on mental health. Your primary care clinician and specialists keep managing
              your physical health, and it helps when each of them knows about the other.
            </p>
            <p>
              If you take medications for a physical condition, share the full list with anyone who prescribes for your
              mental health. Some medications interact, and some physical conditions change which psychiatric
              medications are a good fit. How Jessica approaches it: &ldquo;{HOW_MEDICATION_IS_CHOSEN}&rdquo;
            </p>

            <h2 className={H2}>Practical steps forward</h2>
            <CheckList
              items={[
                <>
                  <strong className={LEAD}>Talk about both with each clinician.</strong> Many people hesitate to bring up mood or stress at a
                  medical visit, or physical symptoms at a mental health visit. Both belong in the conversation.
                </>,
                <>
                  <strong className={LEAD}>Keep an up-to-date medication list</strong>, including over-the-counter medicines and vitamins, and
                  bring it to every visit.
                </>,
                <>
                  <strong className={LEAD}>Ask your clinicians to coordinate.</strong> With your permission, they can share information so your
                  care fits together.
                </>,
                <>
                  <strong className={LEAD}>Consider mental health support</strong> as part of managing your condition, not as a sign that you
                  are failing.
                </>,
                <>
                  <strong className={LEAD}>Lean on your people.</strong> Friends, family, and support groups for your condition can ease the
                  isolation.
                </>,
                <>
                  <strong className={LEAD}>Be patient with yourself.</strong> Adjusting takes time. Small, steady steps count.
                </>,
              ]}
            />

            <h2 className={H2}>Moving forward</h2>
            <p>
              Living with a physical health condition is hard, and the emotional side of it is real. When you give both
              sides attention, you make room for more than managing symptoms: you make room for a better day-to-day
              life.
            </p>
            <p>
              {SITE_NAME} offers secure video visits with {PROVIDER.byline} for {AGES.short.toLowerCase()} in{' '}
              {CONTACT.state}, so you can get mental health care from home without adding another trip to your week.
              Care starts with a{' '}
              <Link href="/services/psychiatric-evaluation" className={LINK}>
                psychiatric evaluation
              </Link>{' '}
              and can include{' '}
              <Link href="/services/medication-management" className={LINK}>
                medication management
              </Link>{' '}
              and{' '}
              <Link href="/services/supportive-therapy" className={LINK}>
                supportive therapy
              </Link>{' '}
              within your visits.
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
