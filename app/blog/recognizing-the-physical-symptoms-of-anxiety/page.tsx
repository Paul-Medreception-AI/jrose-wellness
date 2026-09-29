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

// Autobuilt post, rewritten against FACTS.md: alternative-medicine and "mind, body, and spirit"
// framing removed, blood work reframed as something a primary care clinician may do (the practice
// offers no labs), evidence and outcome claims removed, and the invented clinician byline replaced
// with the practice.

const SLUG = 'recognizing-the-physical-symptoms-of-anxiety'
const post = getPost(SLUG)
const PATH = postHref(SLUG)
// Title tag kept under 60 characters; the H1 stays post.title.
const TITLE = withBrand('Physical Symptoms of Anxiety: What to Know')
const DESCRIPTION =
  'How anxiety shows up in your body, from a racing heart and tight muscles to an upset stomach and poor sleep, and when those symptoms are worth a closer look.'
const IMAGE = imageFor('/conditions')

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
    href: '/blog/panic-attacks-symptoms-triggers-and-treatment-options',
    eyebrow: 'Blog',
    title: 'Panic Attacks: Symptoms, Triggers, and Treatment Options',
    body: 'What a panic attack feels like, what can set one off, and what helps.',
  },
  {
    href: '/services/psychiatric-evaluation',
    eyebrow: 'Services',
    title: 'Psychiatric Evaluation',
    body: 'Your first visit: your history, symptoms, and goals, and a plan that fits you.',
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

export default function PhysicalSymptomsOfAnxietyPost() {
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
              Your heart races for no clear reason. Your palms sweat during an ordinary conversation. Your stomach
              knots up before a routine task. These moments often get brushed off as &ldquo;just nerves,&rdquo; but
              they can be anxiety showing up in your body.
            </p>
            <p>
              Knowing the physical signs of anxiety helps in a few ways. It helps you and your clinicians sort out
              what else might be going on. It reminds you that what you feel is real. And it is often the first step
              toward getting the right kind of help.
            </p>

            <h2 className={H2}>Why anxiety feels so physical</h2>
            <p>
              Anxiety switches on your body&apos;s &ldquo;fight-or-flight&rdquo; response, the built-in alarm that
              helps you react to danger. Stress hormones such as adrenaline and cortisol speed up your heart and
              breathing and tense your muscles so you are ready to act.
            </p>
            <p>
              Most of the time, though, the &ldquo;threat&rdquo; is a work presentation, a crowded room, or a long to-do
              list. Your body gets ready for action with nowhere to put that energy, and the physical symptoms can
              linger long after the moment has passed.
            </p>

            <h2 className={H2}>Common physical symptoms of anxiety</h2>
            <p>Anxiety looks different from person to person, but some physical signs come up again and again.</p>

            <h3 className={H3}>Heart and chest</h3>
            <CheckList
              items={[
                'A rapid heartbeat or palpitations, like your heart is racing or skipping beats',
                'Tightness or pressure in your chest',
                'Blood pressure that rises during anxious moments',
              ]}
            />

            <h3 className={H3}>Breathing</h3>
            <CheckList
              items={[
                'Shortness of breath, or feeling like you cannot get enough air',
                'Fast, shallow breathing (hyperventilation)',
                'A choking feeling or tightness in your throat',
              ]}
            />

            <h3 className={H3}>Muscles</h3>
            <CheckList
              items={[
                'Clenching your jaw or grinding your teeth, especially at night',
                'Tight neck and shoulders, often with tension headaches',
                'Aches and soreness without physical exertion',
                'Trembling or shaking in your hands or legs',
              ]}
            />

            <h3 className={H3}>Stomach and digestion</h3>
            <p>Your digestive system is sensitive to stress, so anxiety often shows up in your gut:</p>
            <CheckList
              items={[
                'Nausea or "butterflies" in your stomach',
                'Diarrhea or a sudden urge to use the bathroom',
                'Losing your appetite, or eating more when stressed',
                'Flare-ups of digestive problems you already have, such as IBS',
              ]}
            />

            <div className="my-10 rounded-r-2xl border-l-4 border-accent bg-light/70 px-6 py-5">
              <p className="font-cormorant text-[1.4rem] leading-snug text-primary">
                Physical symptoms of anxiety are not imaginary. They are your nervous system reacting to a sense of
                threat, and noticing them is a useful first step.
              </p>
            </div>

            <h2 className={H2}>Less obvious signs</h2>
            <p>Anxiety can also show up in quieter ways that are easy to miss:</p>
            <CheckList
              items={[
                <>
                  <strong className={LEAD}>Fatigue:</strong> staying on high alert all day is draining.
                </>,
                <>
                  <strong className={LEAD}>Dizziness or lightheadedness:</strong> often tied to fast or shallow breathing.
                </>,
                <>
                  <strong className={LEAD}>Sweating or chills</strong> that come and go.
                </>,
                <>
                  <strong className={LEAD}>Trouble sleeping:</strong> a busy, worried mind makes it hard to fall or stay asleep.
                </>,
                <>
                  <strong className={LEAD}>Needing to urinate more often</strong> when you feel anxious.
                </>,
                <>
                  <strong className={LEAD}>Skin flare-ups:</strong> stress can worsen skin conditions you already have, such as eczema.
                </>,
              ]}
            />

            <h2 className={H2}>When the symptoms stick around</h2>
            <p>When anxiety lasts for weeks or months, the physical side can wear you down:</p>
            <CheckList
              items={[
                'Tension headaches or back and neck pain that keep coming back',
                'Poor sleep that leaves you tired and foggy during the day',
                'Frequent stomach trouble',
                'Feeling run-down or worn out more often than usual',
              ]}
            />
            <p>
              The longer anxiety goes on without support, the more these patterns can settle in. That is a reason to
              reach out, not a reason to worry more.
            </p>

            <h2 className={H2}>Is it anxiety or something else?</h2>
            <p>
              Anxiety symptoms can look like other health problems. Chest pain can point to the heart. Stomach trouble
              can point to a digestive condition. Ongoing fatigue can have many causes. That is why it matters to have
              your primary care clinician look for other causes. They may examine you, go over your history, and order
              tests if needed.
            </p>
            <p>
              A psychiatric evaluation looks at the mental health side: your symptoms and when they happen, what sets
              them off, your history, and your goals. Anxiety often shows up alongside other health conditions, so it
              helps when every clinician you see knows the full picture. In Jessica&apos;s words, her experience as a
              Family Nurse Practitioner &ldquo;gives me a broader understanding of the connection between physical and
              mental health.&rdquo;
            </p>
            <p>
              If you have chest pain, trouble breathing, or fainting, especially if it is new, call 911 or go to the
              nearest emergency room.
            </p>

            <h2 className={H2}>First steps toward relief</h2>
            <p>Recognizing what anxiety does in your body opens the door to things that help:</p>
            <CheckList
              items={[
                <>
                  <strong className={LEAD}>Track your symptoms:</strong> jot down when they happen, how strong they are, and what was going
                  on at the time.
                </>,
                <>
                  <strong className={LEAD}>Practice slow breathing:</strong> deep breaths from your belly can calm the alarm response.
                </>,
                <>
                  <strong className={LEAD}>Move your body regularly:</strong> walking, stretching, or any movement you enjoy gives stress
                  somewhere to go and can help you sleep.
                </>,
                <>
                  <strong className={LEAD}>Protect your sleep:</strong> keep a steady schedule and a calm wind-down routine.
                </>,
                <>
                  <strong className={LEAD}>Cut back on caffeine, nicotine, and alcohol:</strong> they can make physical anxiety symptoms
                  worse.
                </>,
                <>
                  <strong className={LEAD}>Get professional support:</strong> a clinician can help you understand your symptoms and build a
                  plan.
                </>,
              ]}
            />

            <h2 className={H2}>You don&apos;t have to push through alone</h2>
            <p>
              The physical symptoms of anxiety are real, and they are treatable. They are not a sign of weakness or
              something you have to just push through. Your body is telling you something about your stress, and it is
              worth listening.
            </p>
            <p>
              At {SITE_NAME}, {PROVIDER.byline} sees {AGES.short.toLowerCase()} in {CONTACT.state} by secure video.
              Care can include a{' '}
              <Link href="/services/psychiatric-evaluation" className={LINK}>
                psychiatric evaluation
              </Link>
              ,{' '}
              <Link href="/services/medication-management" className={LINK}>
                medication management
              </Link>{' '}
              when it fits, and{' '}
              <Link href="/services/supportive-therapy" className={LINK}>
                supportive therapy
              </Link>{' '}
              within your visits. Learn more about{' '}
              <Link href="/conditions/anxiety" className={LINK}>
                anxiety care
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
