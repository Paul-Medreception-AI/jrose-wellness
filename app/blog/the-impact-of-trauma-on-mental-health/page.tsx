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

// Autobuilt post, rewritten against FACTS.md: brain-imaging evidence claims, "the body keeps the
// score", somatic therapy and an unattributed quote removed; CPT/EMDR not advertised (not confirmed as
// offered); "trauma-informed care" as a designation and the city location claim removed; broken links
// to three blog posts that never existed replaced. Uses Jessica's own words (Headway) for what a
// first visit feels like.

const SLUG = 'the-impact-of-trauma-on-mental-health'
const post = getPost(SLUG)
const PATH = postHref(SLUG)
const TITLE = withBrand(post.title)
const DESCRIPTION =
  'How trauma can affect your mood, sleep, relationships, and sense of safety, common signs of PTSD, and how psychiatric care can support you as you heal.'
const IMAGE = imageFor('/conditions/ptsd-trauma')

// PRACTICE_FAQS: [2] therapy and medication, [4] how medication is chosen.
const THERAPY_AND_MEDICATION = PRACTICE_FAQS[2].a
const HOW_MEDICATION_IS_CHOSEN = PRACTICE_FAQS[4].a

// Jessica's own words (Headway profile, "What you can expect from me").
const FIRST_VISIT_IN_HER_WORDS =
  'Clients can expect a welcoming, supportive, and judgment-free environment during their first session. My goal is to help clients feel comfortable, heard, and understood from the very beginning.'

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
    href: '/conditions/ptsd-trauma',
    eyebrow: 'Conditions',
    title: 'PTSD & Trauma',
    body: 'How Jessica evaluates and treats trauma-related symptoms by secure video.',
  },
  {
    href: '/services/supportive-therapy',
    eyebrow: 'Services',
    title: 'Supportive Therapy',
    body: 'Coping skills and support built into your visits, with referral to a therapist when needed.',
  },
  {
    href: '/services/psychiatric-evaluation',
    eyebrow: 'Services',
    title: 'Psychiatric Evaluation',
    body: 'Your first visit: your history, symptoms, and goals, at a pace that feels safe.',
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

export default function TraumaImpactPost() {
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
              Trauma can leave a mark that lasts long after the moment itself. Whether it comes from one overwhelming
              event or from painful circumstances that went on for a long time, trauma can change how you think, feel,
              and move through the world. Understanding that connection is an important step toward healing.
            </p>

            <h2 className={H2}>What is trauma?</h2>
            <p>
              Trauma is the emotional and psychological response to an event, or a series of events, that overwhelms
              your ability to cope. People often think of life-threatening situations like accidents, violence, or
              disasters. Trauma can also come from experiences that threaten your sense of safety, control, or identity.
            </p>
            <p>
              Trauma can look different depending on what happened. Some people live through a single event, such as a
              car accident or an assault. Others go through repeated or long-lasting experiences, such as ongoing abuse
              or neglect. Some experience many traumatic events, often involving the people closest to them and often
              early in life.
            </p>
            <p>
              What is traumatic for one person may not be for another. Your past experiences, your support, and your
              circumstances all shape how an event affects you. Trauma is defined less by what happened and more by its
              impact on you.
            </p>

            <h2 className={H2}>How trauma affects your body and reactions</h2>
            <p>
              When you face danger, your body&apos;s alarm system kicks in. It triggers the fight, flight, or freeze
              response and floods you with stress hormones such as adrenaline and cortisol. That response is protective
              in the moment.
            </p>
            <p>
              After trauma, the alarm can stay switched on. That helps explain why many people live with unwanted
              memories, feel jumpy or on guard, have trouble concentrating, or struggle to sleep, even when they know
              they are safe now. Trauma can also show up physically, through tension, fatigue, stomach trouble, and a
              lower tolerance for stress.
            </p>

            <div className="my-10 rounded-r-2xl border-l-4 border-accent bg-light/70 px-6 py-5">
              <p className="font-cormorant text-[1.4rem] leading-snug text-primary">
                Trauma responses are not a character flaw. They are ways your mind and body tried to protect you.
              </p>
            </div>

            <h2 className={H2}>How trauma can affect mental health</h2>
            <p>
              Post-traumatic stress disorder (PTSD) is the best-known result of trauma. It can include unwanted memories
              or nightmares, avoiding reminders of what happened, negative changes in how you think and feel, and being
              easily startled or on edge. Trauma can affect mental health in other ways, too:
            </p>
            <CheckList
              items={[
                <>
                  <strong className={LEAD}>Depression:</strong> feelings of worthlessness, guilt, numbness, or losing interest in things you
                  used to enjoy.
                </>,
                <>
                  <strong className={LEAD}>Anxiety:</strong> ongoing worry, panic attacks, or social anxiety when your nervous system stays on
                  high alert.
                </>,
                <>
                  <strong className={LEAD}>Alcohol or substance use:</strong> some people use alcohol or drugs to numb painful memories or
                  feelings, which can make everything harder over time. Learn about{' '}
                  <Link href="/conditions/substance-use" className={LINK}>
                    support for substance use
                  </Link>
                  .
                </>,
                <>
                  <strong className={LEAD}>Relationships:</strong> trouble with trust, closeness, setting boundaries, or managing emotions
                  with others.
                </>,
                <>
                  <strong className={LEAD}>Feeling disconnected:</strong> some people feel detached from themselves or their surroundings, a
                  way the mind protects itself from overwhelming feelings.
                </>,
              ]}
            />

            <h2 className={H2}>Trauma early in life</h2>
            <p>
              Painful experiences early in life, such as abuse, neglect, or growing up around violence or chaos, can
              shape how a person sees themselves, other people, and the world. Someone may learn that the world is not
              safe, that their needs do not matter, or that people cannot be relied on. Those beliefs can carry into
              adulthood.
            </p>
            <p>
              The encouraging part is that people keep learning and changing throughout life. With the right support,
              healing and growth are possible at any age.
            </p>

            <h2 className={H2}>Pathways to healing</h2>
            <p>
              Recovery from trauma is rarely a straight line, and it looks different for everyone. It is possible.
              Care often combines more than one of these:
            </p>
            <CheckList
              items={[
                <>
                  <strong className={LEAD}>Supportive therapy within your visits:</strong> at {SITE_NAME}, Jessica uses supportive therapy,
                  psychoeducation, mindfulness, and practical coping strategies. In her words: &ldquo;
                  {THERAPY_AND_MEDICATION}&rdquo;
                </>,
                <>
                  <strong className={LEAD}>Trauma-focused therapy with a therapist:</strong> several structured therapies are designed
                  specifically for trauma. If one could help you, a referral can be part of your plan.
                </>,
                <>
                  <strong className={LEAD}>Medication:</strong> medication can help with some trauma-related symptoms, such as poor sleep,
                  anxiety, or low mood. How Jessica decides: &ldquo;{HOW_MEDICATION_IS_CHOSEN}&rdquo;
                </>,
                <>
                  <strong className={LEAD}>Grounding and mindfulness skills:</strong> ways to stay in the present and ride out overwhelming
                  feelings.
                </>,
                <>
                  <strong className={LEAD}>Connection and peer support:</strong> support groups and trusted people can remind you that you
                  are not alone.
                </>,
              ]}
            />
            <p>
              Outside of formal care, a sense of safety, a steady routine, supportive relationships, movement, sleep,
              and self-compassion all help. Healing tends to happen in connection: with yourself, with others, and with
              people who respect your experience.
            </p>

            <p>
              If you are having thoughts of harming yourself, or you feel unsafe right now, do not wait for an
              appointment:
            </p>
            <div className="mb-6">
              <CrisisNotice />
            </div>

            <h2 className={H2}>Moving forward</h2>
            <p>
              If you see yourself in these descriptions, the effects of trauma do not mean you are broken. Your
              reactions were ways of surviving. With support, it is possible to work through what happened, build new
              ways of coping, feel safer, and take back parts of your life that trauma has crowded out.
            </p>
            <blockquote className="my-8 rounded-r-2xl border-l-4 border-accent bg-light/70 px-6 py-5">
              <p className="font-cormorant text-[1.35rem] leading-snug text-primary">
                &ldquo;{FIRST_VISIT_IN_HER_WORDS}&rdquo;
              </p>
              <cite className="mt-2 block text-sm not-italic text-muted">{PROVIDER.byline}</cite>
            </blockquote>
            <p>
              {SITE_NAME} offers secure video visits for {AGES.short.toLowerCase()} in {CONTACT.state}. You can talk
              from a place where you already feel safe, and you decide how much to share and when. Care starts with a{' '}
              <Link href="/services/psychiatric-evaluation" className={LINK}>
                psychiatric evaluation
              </Link>
              . Learn more about{' '}
              <Link href="/conditions/ptsd-trauma" className={LINK}>
                care for PTSD and trauma
              </Link>
              .
            </p>
            <p>Asking for help is a sign of strength. Healing is possible, and you deserve support along the way.</p>
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
