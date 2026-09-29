import type { Metadata } from 'next'
import type { ReactNode } from 'react'
import Link from 'next/link'
import PageHero from '@/components/site/PageHero'
import CrisisNotice from '@/components/site/CrisisNotice'
import JsonLd from '@/components/site/JsonLd'
import { BUTTON } from '@/components/site/SmartLink'
import { ArrowRight, CheckIcon, PhoneIcon } from '@/components/site/icons'
import { AGES, BOOKING, CONTACT, NAV_CTA, PRACTICE_FAQS, PRICING, PROVIDER, SITE_NAME, SITE_URL, withBrand } from '@/lib/site'
import { imageFor } from '@/lib/images'
import { getPost, postHref, postRobots } from '@/lib/posts'

// Autobuilt post, rewritten against FACTS.md: invented visit lengths (60-90 minute evaluation,
// 15-30 minute follow-ups) replaced with the only sourced length (Alma 45-minute intake); "full
// practice authority in most states", controlled-substance prescribing, the outcomes-comparison claim
// and the workforce-shortage claim removed; alternative-medicine framing, dietary changes and complementary
// therapies removed; DBT/trauma-informed care not advertised; city location and invented byline
// removed. The word for the medical-school specialist appears only to explain that a PMHNP is a
// different role.

const SLUG = 'the-role-of-a-psychiatric-nurse-practitioner-in-your-care'
const post = getPost(SLUG)
const PATH = postHref(SLUG)
const TITLE = withBrand(post.title)
const DESCRIPTION =
  'What a psychiatric nurse practitioner does, from evaluation and diagnosis to medication management and supportive therapy, and what to expect at your visits.'
const IMAGE = imageFor('/about')

// PRACTICE_FAQS: [1] what a Psych NP does, [2] therapy and medication, [5] no medication.
const WHAT_A_PSYCH_NP_DOES = PRACTICE_FAQS[1].a
const THERAPY_AND_MEDICATION = PRACTICE_FAQS[2].a
const MEDICATION_OPTIONAL = PRACTICE_FAQS[5].a

// "supportive therapy, cognitive behavioral techniques, ..., and motivational interviewing"
const TECHNIQUES = `${PROVIDER.techniques.slice(0, -1).join(', ')}, and ${PROVIDER.techniques[PROVIDER.techniques.length - 1]}`

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
    href: '/about',
    eyebrow: 'About',
    title: `About ${PROVIDER.name}`,
    body: 'Her training, her approach, and what it is like to work with her.',
  },
  {
    href: '/services/psychiatric-evaluation',
    eyebrow: 'Services',
    title: 'Psychiatric Evaluation',
    body: 'Your first visit: your history, symptoms, and goals, and a plan that fits you.',
  },
  {
    href: '/faq',
    eyebrow: 'FAQ',
    title: 'Frequently Asked Questions',
    body: 'Medication, telehealth, therapy, and more, answered in the practice’s own words.',
  },
]

const H2 = 'mt-14 mb-4 font-cormorant text-[1.9rem] font-semibold leading-tight text-primary sm:text-[2.25rem]'
const H3 = 'mt-8 mb-3 text-xl font-semibold leading-snug text-primary'
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

export default function PsychiatricNursePractitionerRolePost() {
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
              When you start looking for mental health care, you will see a lot of titles: therapists, counselors,
              psychologists, and psychiatric nurse practitioners. Knowing what a psychiatric nurse practitioner does
              can help you decide what kind of care fits you, and what to expect when you get started.
            </p>

            <h2 className={H2}>What is a psychiatric nurse practitioner?</h2>
            <p>
              A psychiatric-mental health nurse practitioner (PMHNP) is an advanced practice registered nurse (APRN)
              who specializes in mental health. In the practice&apos;s own words: &ldquo;{WHAT_A_PSYCH_NP_DOES}&rdquo;
            </p>
            <p>
              PMHNPs start as registered nurses, then complete a graduate nursing degree, such as a Master of Science in
              Nursing (MSN), with specialized training in psychiatric and mental health care. That education typically
              covers:
            </p>
            <CheckList
              items={[
                'How psychiatric medications work, and how to manage them safely',
                'Psychiatric assessment and diagnosis',
                'Therapy techniques used in mental health care',
                'The biology of mental health conditions',
                'Assessing safety and risk',
              ]}
            />
            <p>
              Board certification means passing a national certification exam in the specialty, and every NP must also
              hold a state license. {PROVIDER.byline} is a {PROVIDER.title.toLowerCase()}. Her degree:{' '}
              {PROVIDER.education}. {PROVIDER.licensure}
            </p>

            <h2 className={H2}>What a PMHNP can do</h2>
            <h3 className={H3}>Assessment and diagnosis</h3>
            <p>
              A psychiatric evaluation looks at your current symptoms, your mental and physical health history, your
              family history, and what is going on in your life. From there, a PMHNP can diagnose conditions such as
              depression, anxiety, ADHD, bipolar disorder, PTSD, and others.
            </p>
            <h3 className={H3}>Medication management</h3>
            <p>
              PMHNPs can prescribe psychiatric medications and manage them over time: choosing a medication with you,
              watching for side effects, and adjusting the dose or trying something different when needed. Medication
              is always a choice. In the practice&apos;s words: &ldquo;{MEDICATION_OPTIONAL}&rdquo;
            </p>
            <h3 className={H3}>Therapy within visits</h3>
            <p>
              Many PMHNPs also use therapy skills in their visits. At {SITE_NAME}, Jessica draws on {TECHNIQUES}. In
              her words: &ldquo;{THERAPY_AND_MEDICATION}&rdquo;
            </p>
            <h3 className={H3}>Care coordination</h3>
            <p>
              A PMHNP often works alongside your other clinicians, such as your primary care clinician or a therapist,
              so your care fits together.
            </p>

            <blockquote className="my-10 rounded-r-2xl border-l-4 border-accent bg-light/70 px-6 py-5">
              <p className="font-cormorant text-[1.35rem] leading-snug text-primary">&ldquo;{PROVIDER.ownWords}&rdquo;</p>
              <cite className="mt-2 block text-sm not-italic text-muted">{PROVIDER.byline}</cite>
            </blockquote>

            <h2 className={H2}>The nursing model: whole-person care</h2>
            <p>
              Nurse practitioners are trained in the nursing model of care, which looks at the whole person, not just a
              list of symptoms. That means paying attention to:
            </p>
            <CheckList
              items={[
                'How your physical health affects how you feel',
                'Your relationships, work, and living situation',
                'Sleep, daily routines, and habits',
                'Your culture, background, and values',
                'Your goals, preferences, and lived experience',
              ]}
            />
            <p>
              In practice, that can mean talking through sleep, stress, and coping skills alongside any medication
              decisions, and building a plan that fits your actual life.
            </p>

            <h2 className={H2}>How a PMHNP differs from a psychiatrist</h2>
            <p>
              People often ask how a psychiatric nurse practitioner compares with a psychiatrist. The main difference is
              training. A psychiatrist goes to medical school and then completes a residency in psychiatry. A PMHNP is
              an advanced practice nurse with graduate nursing education and clinical training in psychiatric-mental
              health care.
            </p>
            <p>
              Both evaluate and diagnose mental health conditions, and both prescribe and manage psychiatric
              medication. {PROVIDER.name} is a psychiatric nurse practitioner, not a psychiatrist. The right fit often
              comes down to how comfortable you feel with the person, their approach, and whether they have time to see
              you.
            </p>

            <h2 className={H2}>What to expect when you work with a PMHNP</h2>
            <p>At {SITE_NAME}, care starts with an initial evaluation. In the practice&apos;s own words:</p>
            <blockquote className="my-6 rounded-r-2xl border-l-4 border-accent bg-light/70 px-6 py-5">
              <p className="text-base leading-relaxed text-ink/85">&ldquo;{PRICING.initialEvaluation.description}&rdquo;</p>
            </blockquote>
            <p>During a first evaluation, you can expect to talk about:</p>
            <CheckList
              items={[
                'Your mental and physical health history',
                'Your current symptoms and how they affect daily life',
                'Treatments you have tried before, and how they went',
                'Your goals, and what you hope will change',
                'A plan you build together',
              ]}
            />
            <p>
              {BOOKING.alma.note} After that, follow-up visits keep your plan on track: &ldquo;
              {PRICING.followUp.description}&rdquo;
            </p>
            <p>
              The relationship is a partnership. You should feel heard, respected, and involved in decisions about your
              care. Ask questions, raise concerns, and share your preferences. That open conversation is part of what
              makes treatment work.
            </p>

            <h2 className={H2}>When to consider seeing a PMHNP</h2>
            <p>You might benefit from seeing a psychiatric nurse practitioner if you are dealing with:</p>
            <CheckList
              items={[
                'Ongoing sadness, anxiety, or hopelessness',
                'Changes in sleep, appetite, or energy',
                'Trouble focusing or making decisions',
                'Mood swings or feeling emotionally unsteady',
                'Trauma symptoms or intrusive thoughts',
                'Concerns about alcohol or substance use',
                'Stress at work or in relationships that is tied to how you feel',
              ]}
            />
            <p>
              See the full list of{' '}
              <Link href="/conditions" className={LINK}>
                conditions treated at {SITE_NAME}
              </Link>
              .
            </p>

            <h2 className={H2}>Getting started</h2>
            <p>
              Psychiatric nurse practitioners offer thorough, personal mental health care. Whether you are looking for
              help for the first time or looking for a new provider, a PMHNP can be a good choice.
            </p>
            <p>
              At {SITE_NAME}, {PROVIDER.byline} sees {AGES.short.toLowerCase()} in {CONTACT.state} by secure video.
              Learn more{' '}
              <Link href="/about" className={LINK}>
                about Jessica
              </Link>{' '}
              or about the{' '}
              <Link href="/services/psychiatric-evaluation" className={LINK}>
                psychiatric evaluation
              </Link>
              . Reaching out is a sign of strength, and it is the first step.
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
