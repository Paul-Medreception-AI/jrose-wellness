import type { Metadata } from 'next'
import type { ReactNode } from 'react'
import Link from 'next/link'
import PageHero from '@/components/site/PageHero'
import CrisisNotice from '@/components/site/CrisisNotice'
import CrisisText from '@/components/site/CrisisText'
import JsonLd from '@/components/site/JsonLd'
import { BUTTON } from '@/components/site/SmartLink'
import { ArrowRight, CheckIcon, PhoneIcon } from '@/components/site/icons'
import { AGES, CONTACT, NAV_CTA, NO_MEDICAL_ADVICE, PROVIDER, SITE_NAME, SITE_URL, withBrand } from '@/lib/site'
import { imageFor } from '@/lib/images'
import { getPost, postHref, postRobots } from '@/lib/posts'

// Autobuilt post, rewritten against FACTS.md: the journal percentage statistic and evidence claims
// removed, "provider" used throughout, alternative-medicine framing and the city location claim removed,
// the invented publish date removed, and examples moved from general medicine to psychiatric care
// (side effects, missed doses, alcohol, sleep, safety).

const SLUG = 'the-importance-of-honest-communication-with-your-provider'
const post = getPost(SLUG)
const PATH = postHref(SLUG)
const TITLE = withBrand(post.title)
const DESCRIPTION =
  'Why honest conversations with your provider matter, what to share at your visits, and how to bring up side effects, missed doses, or slow progress.'
const IMAGE = imageFor('/services/psychiatric-evaluation')

// Jessica's own words (Headway profile).
const HONESTY_IN_HER_WORDS =
  'I work closely with clients to create a supportive and nonjudgmental environment where they feel comfortable being honest, vulnerable, and fully themselves.'
const INFORMED_IN_HER_WORDS =
  'If medication management is appropriate, we will discuss options thoughtfully, including benefits, risks, and your comfort level with treatment. I believe clients should feel informed and actively involved in decisions about their care.'

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
    href: '/services/psychiatric-evaluation',
    eyebrow: 'Services',
    title: 'Psychiatric Evaluation',
    body: 'What happens at a first visit, and how it leads to a plan that fits.',
  },
  {
    href: '/blog/the-role-of-a-psychiatric-nurse-practitioner-in-your-care',
    eyebrow: 'Blog',
    title: 'The Role of a Psychiatric Nurse Practitioner in Your Care',
    body: 'What a PMHNP does, from evaluation to medication management and supportive therapy.',
  },
  {
    href: '/faq',
    eyebrow: 'FAQ',
    title: 'Frequently Asked Questions',
    body: 'Medication, telehealth, therapy, and more, answered in the practice’s own words.',
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

export default function HonestCommunicationPost() {
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
              You are in the middle of a visit with your provider, and something is on the tip of your tongue. Then you
              hold back. Maybe it feels embarrassing. Maybe you worry about being judged, or you don&apos;t want to seem
              difficult. That small moment of holding back can shape the care you get.
            </p>
            <p>
              Good mental health care is built on trust, and trust grows from honest, open conversation. Knowing why it
              matters, and how to make it easier, can help you get care that truly fits.
            </p>

            <h2 className={H2}>Why people hold back</h2>
            <p>
              Holding things back from a provider is very common. People worry about being judged for their habits,
              feel embarrassed about symptoms, don&apos;t want to waste the provider&apos;s time, or feel anxious about
              what the answer might mean.
            </p>
            <p>
              Some people downplay symptoms, hoping they will pass. Some don&apos;t mention alcohol or other substances.
              Many find it hard to admit they have skipped doses or stopped a medication. These small gaps can lead to
              the wrong dose, a medication that is not working, or side effects nobody knows about.
            </p>

            <div className="my-10 rounded-r-2xl border-l-4 border-accent bg-light/70 px-6 py-5">
              <p className="font-cormorant text-[1.4rem] leading-snug text-primary">
                Your provider can only help as well as the information they have. Honest communication is part of
                keeping your care safe and effective.
              </p>
            </div>

            <h2 className={H2}>The cost of an incomplete picture</h2>
            <p>
              When your provider is working with only part of the story, it is harder to get things right. A symptom
              that seems minor to you might be an important clue. Something you take over the counter might interact
              with a prescription. A habit you are embarrassed to mention might explain why you still feel stuck.
            </p>
            <p>
              Over time, missing information can lead to a plan that does not fit, changes that do not help, and longer
              struggles than necessary. Mental health care in particular depends on the full picture: your symptoms,
              sleep, stress, relationships, substance use, and what daily life actually looks like.
            </p>

            <h2 className={H2}>What honest communication looks like</h2>
            <p>
              Honesty does not mean sharing every detail of your life. It means answering questions truthfully,
              mentioning things that might matter, and being willing to talk about uncomfortable topics when they affect
              your care.
            </p>
            <CheckList
              items={[
                <>
                  <strong className={LEAD}>Be specific about symptoms.</strong> Instead of &ldquo;I feel off,&rdquo; try &ldquo;I&apos;ve
                  been waking up at 3 a.m. most nights for two weeks and can&apos;t fall back asleep.&rdquo;
                </>,
                <>
                  <strong className={LEAD}>Share everything you take.</strong> That includes over-the-counter medicines, vitamins, and
                  anything else, plus alcohol, cannabis, or other substances. A written list helps.
                </>,
                <>
                  <strong className={LEAD}>Say so if you have not followed the plan.</strong> If you skipped doses or stopped a medication,
                  your provider needs to know to adjust your care safely.
                </>,
                <>
                  <strong className={LEAD}>Bring up side effects, even awkward ones.</strong> Changes in sleep, appetite, weight, energy, or
                  sexual function are clinical information. They are not a judgment on you.
                </>,
                <>
                  <strong className={LEAD}>Mention thoughts of harming yourself.</strong> This can be the hardest thing to say, and one of
                  the most important. A good provider will respond with care, not judgment. If the thoughts feel urgent,
                  don&apos;t wait for a visit:{' '}
                  <CrisisText text="call or text 988, or call 911." linkClassName={LINK} />
                </>,
                <>
                  <strong className={LEAD}>Ask when something is unclear.</strong> If a term or recommendation does not make sense, speak up.
                  Good communication goes both ways.
                </>,
              ]}
            />

            <h2 className={H2}>Making honesty easier</h2>
            <p>
              If speaking up is hard for you, you are not alone, and there are ways to make it easier. Providers who
              work in mental health have heard it all. What feels shocking or embarrassing to you is usually familiar
              to them.
            </p>
            <p>
              If anxiety makes it hard to talk during visits, write your concerns down beforehand and keep the list next
              to you. You can simply start with &ldquo;There&apos;s something hard I want to bring up.&rdquo;
            </p>
            <p>
              The right fit matters, too. A provider who listens, takes your concerns seriously, explains things clearly,
              and treats you as a partner makes honesty much easier. If you consistently feel judged, dismissed, or
              rushed, it may be time to look for someone else. You deserve care where it feels safe to be honest.
            </p>
            <blockquote className="my-8 rounded-r-2xl border-l-4 border-accent bg-light/70 px-6 py-5">
              <p className="font-cormorant text-[1.35rem] leading-snug text-primary">
                &ldquo;{HONESTY_IN_HER_WORDS}&rdquo;
              </p>
              <cite className="mt-2 block text-sm not-italic text-muted">{PROVIDER.byline}</cite>
            </blockquote>

            <h2 className={H2}>A partnership, not a performance</h2>
            <p>
              The best care is not a performance where you show only your &ldquo;best&rdquo; self. It is a partnership.
              Your provider brings clinical training. You bring your own experience and what you know about yourself.
              Both matter.
            </p>
            <p>
              When you are open about what is really happening, your provider can adjust your care based on what is
              actually working, not on assumptions. In Jessica&apos;s words: &ldquo;{INFORMED_IN_HER_WORDS}&rdquo;
            </p>

            <h2 className={H2}>A note about texts, emails, and forms</h2>
            <p>
              Honest conversation belongs in your visit, where your provider can respond properly. {NO_MEDICAL_ADVICE}
            </p>

            <h2 className={H2}>Moving forward with confidence</h2>
            <p>
              If you have held something back before, it is never too late to start fresh. At your next visit, you might
              say, &ldquo;There are a few things I should have mentioned.&rdquo; Most providers will be glad you did.
            </p>
            <p>
              Honesty gets easier with practice. Each time you share something hard and are met with care instead of
              judgment, the next time is a little easier. Over time, that builds the kind of trust that makes treatment
              work.
            </p>
            <p>
              At {SITE_NAME}, {PROVIDER.byline} sees {AGES.short.toLowerCase()} in {CONTACT.state} by secure video. Care
              starts with a{' '}
              <Link href="/services/psychiatric-evaluation" className={LINK}>
                psychiatric evaluation
              </Link>
              , and you can read answers to common questions on the{' '}
              <Link href="/faq" className={LINK}>
                FAQ page
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
