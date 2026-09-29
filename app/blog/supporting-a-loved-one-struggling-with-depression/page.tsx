import type { Metadata } from 'next'
import type { ReactNode } from 'react'
import Link from 'next/link'
import PageHero from '@/components/site/PageHero'
import CrisisNotice from '@/components/site/CrisisNotice'
import CrisisText from '@/components/site/CrisisText'
import JsonLd from '@/components/site/JsonLd'
import { BUTTON } from '@/components/site/SmartLink'
import { ArrowRight, CheckIcon, PhoneIcon } from '@/components/site/icons'
import { AGES, CONTACT, NAV_CTA, PROVIDER, SITE_NAME, SITE_URL, withBrand } from '@/lib/site'
import { imageFor } from '@/lib/images'
import { getPost, postHref, postRobots } from '@/lib/posts'

// Autobuilt post, rewritten against FACTS.md: prevalence statistic and evidence claims removed, the
// invented clinician byline replaced with the practice, "care for the whole family" and
// alternative-medicine claims removed, and crisis wording aligned with the 988 Suicide & Crisis Lifeline
// and the site's CrisisNotice.

const SLUG = 'supporting-a-loved-one-struggling-with-depression'
const post = getPost(SLUG)
const PATH = postHref(SLUG)
const TITLE = withBrand(post.title)
const DESCRIPTION =
  'How to support someone you love through depression: what to say, what to avoid, how to look after yourself, and when to encourage professional or urgent help.'
const IMAGE = imageFor('/conditions/depression')

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
    href: '/services/psychiatric-evaluation',
    eyebrow: 'Services',
    title: 'Psychiatric Evaluation',
    body: 'What happens at a first visit, and how it leads to a plan that fits.',
  },
  {
    href: '/new-patients',
    eyebrow: 'Getting started',
    title: 'Your First Visit',
    body: 'How to book, what to have ready, and what to expect.',
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

export default function SupportingALovedOnePost() {
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
              Watching someone you care about struggle with depression can feel overwhelming. You want to help, but you
              may worry about saying the wrong thing or making it worse. Your presence and support can matter a great
              deal, even when you feel unsure of what to do.
            </p>
            <p>
              Depression affects more than the person living with it. Partners, family members, and friends often feel
              helpless as they watch someone they love pull away, lose interest in things, or struggle to get through
              the day. Knowing how to offer real support helps both of you.
            </p>

            <h2 className={H2}>Depression is more than sadness</h2>
            <p>
              Depression is not just feeling down or going through a rough patch. It is a health condition that affects
              how a person thinks, feels, and functions. Common signs include a low or empty mood, losing interest in
              things they used to enjoy, changes in sleep and appetite, fatigue, trouble concentrating, and sometimes
              thoughts of death or suicide. When these last most of the day, nearly every day, for two weeks or more, it
              is time to take them seriously.
            </p>
            <p>
              Seeing depression as an illness, not a weakness or a character flaw, is the first step in helping. Your
              loved one is not choosing to feel this way, and they cannot simply &ldquo;snap out of it&rdquo; or
              &ldquo;think positive.&rdquo; Well-meant phrases like these can make someone feel more ashamed and alone.
            </p>

            <h2 className={H2}>What to say, and what not to say</h2>
            <p>
              Words matter a lot when someone is depressed. They can open the door to connection, or quietly add to the
              shame.
            </p>
            <div className="my-8 grid gap-5 sm:grid-cols-2">
              <div className="rounded-2xl border border-border bg-light/60 p-6">
                <h3 className="text-lg font-semibold text-primary">Helpful things to say</h3>
                <ul className="mt-3 space-y-2 text-base leading-relaxed">
                  <li>&ldquo;I&apos;m here for you, and I&apos;m not going anywhere.&rdquo;</li>
                  <li>&ldquo;You&apos;re not alone in this. I care about you.&rdquo;</li>
                  <li>&ldquo;What would help you most today?&rdquo;</li>
                  <li>&ldquo;It&apos;s okay not to be okay right now.&rdquo;</li>
                  <li>&ldquo;Would you think about talking to a professional? I can help you find someone.&rdquo;</li>
                </ul>
              </div>
              <div className="rounded-2xl border border-border bg-white p-6">
                <h3 className="text-lg font-semibold text-primary">Things to avoid</h3>
                <ul className="mt-3 space-y-2 text-base leading-relaxed">
                  <li>&ldquo;Just think positive!&rdquo; or &ldquo;Look on the bright side.&rdquo;</li>
                  <li>&ldquo;Other people have it worse.&rdquo;</li>
                  <li>&ldquo;It&apos;s all in your head.&rdquo;</li>
                  <li>&ldquo;You just need to get out more.&rdquo;</li>
                  <li>&ldquo;Have you tried exercise or meditation?&rdquo; (unless they ask for ideas)</li>
                </ul>
              </div>
            </div>

            <h2 className={H2}>Practical ways to help</h2>
            <p>
              Support for someone with depression usually looks like small, steady things rather than grand gestures.
            </p>
            <div className="my-8 grid gap-5">
              <div className="rounded-2xl border border-border bg-cream p-6">
                <h3 className="text-lg font-semibold leading-snug text-primary">Be present and listen</h3>
                <p className="mt-2 text-base leading-relaxed">
                  Sometimes the most helpful thing you can do is simply be there. Listen without judging, without rushing to
                  fix things, and without unasked-for advice. Let them share when they are ready, and respect their quiet
                  when they are not.
                </p>
              </div>
              <div className="rounded-2xl border border-border bg-cream p-6">
                <h3 className="text-lg font-semibold leading-snug text-primary">Offer specific help</h3>
                <p className="mt-2 text-base leading-relaxed">
                  Instead of &ldquo;Let me know if you need anything,&rdquo; try &ldquo;I&apos;m going to the store. Can I
                  pick up a few things for you?&rdquo; or &ldquo;Can I drop off dinner on Thursday?&rdquo; Specific offers
                  are easier to accept.
                </p>
              </div>
              <div className="rounded-2xl border border-border bg-cream p-6">
                <h3 className="text-lg font-semibold leading-snug text-primary">Stay connected</h3>
                <p className="mt-2 text-base leading-relaxed">
                  Depression often makes people withdraw. Keep reaching out, even if they do not reply or turn down plans.
                  Send a message that needs no answer: &ldquo;Thinking of you today.&rdquo; Your steady presence reminds
                  them they are not forgotten.
                </p>
              </div>
              <div className="rounded-2xl border border-border bg-cream p-6">
                <h3 className="text-lg font-semibold leading-snug text-primary">Help with everyday tasks</h3>
                <p className="mt-2 text-base leading-relaxed">
                  When someone is depressed, even simple tasks can feel huge. Helping with meals, laundry, dishes, or
                  errands can bring real relief without making them feel like they are failing.
                </p>
              </div>
            </div>

            <div className="my-10 rounded-r-2xl border-l-4 border-accent bg-light/70 px-6 py-5">
              <p className="font-cormorant text-[1.4rem] leading-snug text-primary">
                Showing up matters more than saying the perfect thing. It tells your loved one they are worth supporting,
                even when they cannot see it themselves.
              </p>
            </div>

            <h2 className={H2}>Encouraging professional help</h2>
            <p>
              Your support matters, and depression often needs professional care too. Therapy, medication, or both can
              help, and a professional can help your loved one figure out what fits. Bringing it up takes some care.
            </p>
            <p>
              Instead of &ldquo;You need to see someone,&rdquo; try: &ldquo;I&apos;ve noticed you&apos;ve been having a
              hard time, and I care about you. Would you be open to talking with someone who helps people through
              this? I&apos;m happy to help you find someone or set up the first appointment.&rdquo;
            </p>
            <p>
              If they are not ready, do not force it. Keep gently bringing it up over time, offer to help with practical
              hurdles like finding a provider or checking insurance, and remind them that asking for help is a sign of
              strength.
            </p>

            <h2 className={H2}>Know the warning signs of a crisis</h2>
            <p>Take it seriously, and act right away, if your loved one:</p>
            <CheckList
              items={[
                'Talks about suicide, death, or having no reason to live',
                'Looks up ways to die, or gathers the means, such as stockpiling medication',
                'Gives away belongings or says goodbye to people',
                'Seems suddenly calm or better after a period of deep depression',
                'Says they feel like a burden to others',
              ]}
            />
            <p>
              If you see any of these signs, do not leave the person alone.{' '}
              <CrisisText
                text="You can call or text 988 (Suicide & Crisis Lifeline) for help supporting someone else, and call 911 if they are in immediate danger."
                linkClassName={LINK}
              />{' '}
              Acting quickly can save a life.
            </p>
            <div className="mb-6">
              <CrisisNotice />
            </div>

            <h2 className={H2}>Taking care of yourself</h2>
            <p>
              Supporting someone through depression can wear you down. You may feel frustrated, helpless, guilty, or even
              resentful. These feelings are normal. They do not make you a bad person or a bad support.
            </p>
            <p>
              Set limits that protect your own well-being. Make time for rest, keep up your other relationships and
              activities, and consider getting support for yourself, whether that is a therapist, a caregiver support
              group, or honest talks with people you trust.
            </p>
            <p>
              You are not responsible for fixing your loved one&apos;s depression. You can offer support, encouragement,
              and love. Their recovery is still their own.
            </p>

            <h2 className={H2}>Moving forward together</h2>
            <p>
              Depression is treatable. Recovery often takes time and rarely follows a straight line; there may be
              setbacks alongside progress. Through it all, your steady presence sends a powerful message: they matter,
              they are not alone, and there is hope.
            </p>
            <p>
              If your loved one is 15 or older and in {CONTACT.state}, they can see {PROVIDER.byline} by secure video.{' '}
              {SITE_NAME} cares for {AGES.short.toLowerCase()}, and care starts with a{' '}
              <Link href="/services/psychiatric-evaluation" className={LINK}>
                psychiatric evaluation
              </Link>
              . Learn more about{' '}
              <Link href="/conditions/depression" className={LINK}>
                depression care
              </Link>{' '}
              or{' '}
              <Link href="/who-we-help/teens" className={LINK}>
                care for teens 15 and older
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
