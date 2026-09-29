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

// Autobuilt post, rewritten against FACTS.md: prevalence and income statistics removed, evidence and
// "gold standard" claims removed, the alternative-approaches section reframed as coping skills and
// daily habits, and treatment tied to what the practice offers.

const SLUG = 'social-anxiety-more-than-just-shyness'
const post = getPost(SLUG)
const PATH = postHref(SLUG)
const TITLE = withBrand(post.title)
const DESCRIPTION =
  'The difference between shyness and social anxiety, the signs to watch for, and how treatment can help you feel more at ease around people at school and at work.'
const IMAGE = imageFor('/services/supportive-therapy')

// PRACTICE_FAQS: [2] therapy and medication, [4] how medication is chosen.
const THERAPY_AND_MEDICATION = PRACTICE_FAQS[2].a
const HOW_MEDICATION_IS_CHOSEN = PRACTICE_FAQS[4].a

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
    href: '/conditions/anxiety',
    eyebrow: 'Conditions',
    title: 'Anxiety & Panic',
    body: 'How Jessica evaluates and treats ongoing worry, panic attacks, and social anxiety by secure video.',
  },
  {
    href: '/who-we-help/teens',
    eyebrow: 'Who we help',
    title: 'Teens (15+)',
    body: 'Psychiatric care for adolescents 15 and older, from the privacy of home.',
  },
  {
    href: '/services/supportive-therapy',
    eyebrow: 'Services',
    title: 'Supportive Therapy',
    body: 'Coping skills and support built into your visits with Jessica.',
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

export default function SocialAnxietyPost() {
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
              Walking into a crowded room should not feel like stepping onto a stage under hot lights. For people
              living with social anxiety, everyday moments like ordering coffee, making small talk, or speaking up in a
              meeting can bring a wave of fear and self-consciousness that goes far beyond ordinary nerves.
            </p>
            <p>
              Everyone feels shy or awkward sometimes. Social anxiety disorder is different: it is a persistent mental
              health condition that can shape your relationships, your schooling, and your work. Knowing the difference
              is the first step toward getting the right help.
            </p>

            <h2 className={H2}>What is social anxiety disorder?</h2>
            <p>
              Social anxiety disorder, sometimes called social phobia, is an intense, lasting fear of situations where
              you might be judged, embarrassed, or watched by others. The fear is out of proportion to the actual
              situation, and it often leads people to avoid those situations altogether.
            </p>
            <p>
              Social anxiety often starts in the teen years, though it can begin at any age. Many people with social
              anxiety know their fear is bigger than the situation calls for, yet still feel unable to control it.
            </p>
            <p>
              Shyness is a personality trait. It may make a first meeting uncomfortable, but it does not usually get in
              the way of daily life. Social anxiety causes real distress and makes it harder to do the things you want
              and need to do.
            </p>

            <h2 className={H2}>Recognizing the signs</h2>
            <p>Social anxiety can show up before, during, and after social situations:</p>
            <CheckList
              items={[
                <>
                  <strong className={LEAD}>Emotional:</strong> intense fear of being judged, worry about embarrassing yourself or offending
                  someone, dreading an event for days or weeks ahead.
                </>,
                <>
                  <strong className={LEAD}>Physical:</strong> racing heart, sweating, trembling, nausea, trouble breathing, dizziness,
                  muscle tension, blushing.
                </>,
                <>
                  <strong className={LEAD}>Behavioral:</strong> avoiding social situations, needing someone with you, over-preparing or
                  rehearsing, using alcohol or other substances to get through.
                </>,
                <>
                  <strong className={LEAD}>Thinking patterns:</strong> harsh self-talk, expecting the worst, replaying conversations over and
                  over afterward.
                </>,
              ]}
            />
            <p>
              These feelings can come up when speaking in public, eating in front of others, meeting new people, making
              phone calls, or being the center of attention. For some people, the anxiety is tied to performing. For
              others, it shows up in almost every social setting.
            </p>

            <div className="my-10 rounded-r-2xl border-l-4 border-accent bg-light/70 px-6 py-5">
              <p className="font-cormorant text-[1.4rem] leading-snug text-primary">
                Social anxiety is not a character flaw or a weakness. It is a treatable mental health condition.
              </p>
            </div>

            <h2 className={H2}>How it can affect daily life</h2>
            <p>
              <strong className={LEAD}>School and work:</strong> students may avoid speaking in class, group projects, or presentations. At
              work, meetings, networking, and speaking up can feel out of reach, which can hold you back from
              opportunities you want.
            </p>
            <p>
              <strong className={LEAD}>Relationships:</strong> fear of rejection can make it hard to make friends, date, or stay close to
              people. Over time, this can lead to loneliness and low mood. Loved ones may mistake avoidance for a lack
              of interest.
            </p>
            <p>
              <strong className={LEAD}>Overall health:</strong> social anxiety often shows up alongside depression, other anxiety
              conditions, or heavier drinking. The ongoing stress can also take a toll on sleep and energy.
            </p>

            <h2 className={H2}>Treatment options</h2>
            <p>Social anxiety is treatable, and treatment is tailored to you.</p>
            <h3 className={H3}>Cognitive behavioral techniques</h3>
            <p>
              Cognitive behavioral therapy (CBT) helps you spot and question the thoughts that fuel social fear, see
              social situations more realistically, and gradually face the situations you have been avoiding.
            </p>
            <p>
              Jessica uses cognitive behavioral techniques, mindfulness, and practical coping strategies within your
              visits. In her words: &ldquo;{THERAPY_AND_MEDICATION}&rdquo;
            </p>
            <h3 className={H3}>Medication</h3>
            <p>
              Medication can reduce social anxiety for some people. Antidepressants such as SSRIs are commonly used.
              For anxiety tied mainly to performing, such as public speaking, a prescriber may discuss a medication
              taken beforehand to calm physical symptoms like a racing heart or shaking.
            </p>
            <p>
              How Jessica approaches it: &ldquo;{HOW_MEDICATION_IS_CHOSEN}&rdquo; Medication is always optional. Learn
              more about{' '}
              <Link href="/services/medication-management" className={LINK}>
                medication management
              </Link>
              .
            </p>
            <h3 className={H3}>Coping skills and daily habits</h3>
            <p>
              Mindfulness, slow breathing, and relaxing your muscles one group at a time can take the edge off anxiety
              in the moment. Regular exercise, steady sleep, and keeping caffeine and alcohol in check can support the
              rest of your treatment.
            </p>

            <h2 className={H2}>Practical steps you can take</h2>
            <p>Alongside professional care, you can start practicing these today:</p>
            <CheckList
              items={[
                <>
                  <strong className={LEAD}>Question the worst-case story:</strong> when an anxious thought shows up, ask what the evidence is
                  and what you would tell a friend in the same spot.
                </>,
                <>
                  <strong className={LEAD}>Start small:</strong> face easier situations first and build up to harder ones. Notice each small
                  win.
                </>,
                <>
                  <strong className={LEAD}>Be kind to yourself:</strong> everyone has awkward moments. They matter much less to other people
                  than they feel like they do to you.
                </>,
                <>
                  <strong className={LEAD}>Have a grounding routine:</strong> slow breathing or the 5-4-3-2-1 senses exercise can help you
                  settle in the moment.
                </>,
                <>
                  <strong className={LEAD}>Ease off safety behaviors:</strong> drinking to cope, over-preparing, or always bringing someone
                  along can feel helpful but keep anxiety going over time.
                </>,
                <>
                  <strong className={LEAD}>Turn your attention outward:</strong> get curious about the other person. Ask questions and
                  listen. Most people are thinking about themselves, not judging you.
                </>,
              ]}
            />

            <h2 className={H2}>When to seek professional help</h2>
            <p>
              If social anxiety is getting in the way of work, school, relationships, or things you care about, it is a
              good time to reach out. You do not have to wait until it becomes severe.
            </p>
            <p>
              For many people with social anxiety, a video visit from home feels easier than walking into an office. At{' '}
              {SITE_NAME}, all visits are by{' '}
              <Link href="/services/telepsychiatry" className={LINK}>
                secure video
              </Link>
              . {PROVIDER.byline} sees {AGES.short.toLowerCase()} in {CONTACT.state}, and care starts with a{' '}
              <Link href="/services/psychiatric-evaluation" className={LINK}>
                psychiatric evaluation
              </Link>{' '}
              that looks at your symptoms, history, and goals. Read more about{' '}
              <Link href="/conditions/anxiety" className={LINK}>
                anxiety care
              </Link>
              .
            </p>
            <p>
              Asking for help is a sign of strength. You deserve to move through the world without constant fear of
              judgment.
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
