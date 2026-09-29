import type { Metadata } from 'next'
import type { ReactNode } from 'react'
import Link from 'next/link'
import PageHero from '@/components/site/PageHero'
import CrisisNotice from '@/components/site/CrisisNotice'
import CrisisText from '@/components/site/CrisisText'
import JsonLd from '@/components/site/JsonLd'
import { BUTTON } from '@/components/site/SmartLink'
import { ArrowRight, CheckIcon, PhoneIcon } from '@/components/site/icons'
import { AGES, BOOKING, CONTACT, NAV_CTA, PRACTICE_FAQS, PROVIDER, SITE_NAME, SITE_URL, withBrand } from '@/lib/site'
import { imageFor } from '@/lib/images'
import { getPost, postHref, postRobots } from '@/lib/posts'

// Autobuilt post, rewritten against FACTS.md: effectiveness claims removed, evening/weekend hours and
// phone or messaging visits removed (video only, no hours published), the named-compliance platform
// claim removed (platform unconfirmed), "see your provider wherever you move" removed (licensed in
// Connecticut only), the city location claim and invented byline removed, and the broken
// /services/mental-health-counseling link replaced.

const SLUG = 'the-benefits-of-telehealth-for-mental-health-care'
const post = getPost(SLUG)
const PATH = postHref(SLUG)
const TITLE = withBrand(post.title)
const DESCRIPTION =
  'How telehealth makes mental health care easier to fit into your life: secure video visits from home, no commute, a private space, and when video may not fit.'
const IMAGE = imageFor('/services/telepsychiatry')

// PRACTICE_FAQS: [0] virtual appointments only.
const VIDEO_ONLY = PRACTICE_FAQS[0].a

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
    href: '/services/telepsychiatry',
    eyebrow: 'Services',
    title: 'Telepsychiatry',
    body: 'How secure video visits with Jessica work, from booking to follow-up.',
  },
  {
    href: '/insurance',
    eyebrow: 'Insurance & pricing',
    title: 'Insurance and Self-Pay',
    body: 'Use your insurance through Alma or Headway, or pay for your visits yourself.',
  },
  {
    href: '/new-patients',
    eyebrow: 'Getting started',
    title: 'Your First Visit',
    body: 'How to book, what to have ready, and what to expect.',
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

export default function TelehealthBenefitsPost() {
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
              For a long time, getting mental health care meant clearing a lot of hurdles first: the drive, the time off
              work, the waiting room, and the courage it takes to walk through the door. Those hurdles keep many people
              from getting help. Telehealth removes a lot of them.
            </p>
            <p>
              Whether you are dealing with anxiety, depression, stress, or another concern, video visits can make care
              easier to fit into your life. Here is what to know about how telehealth works and whether it may be a good
              fit for you.
            </p>

            <h2 className={H2}>What is telehealth for mental health?</h2>
            <p>
              Telehealth mental health care means meeting with a licensed clinician over a secure video connection
              instead of in an office. Many kinds of care can happen this way, including psychiatric evaluations,
              medication management, and therapy.
            </p>
            <p>
              At {SITE_NAME}, every visit is by video. Asked whether appointments are virtual only, the practice
              answers: &ldquo;{VIDEO_ONLY}&rdquo;
            </p>

            <h2 className={H2}>Easier to get to, easier to keep</h2>
            <p>
              One of the biggest advantages of telehealth is that it removes many of the everyday barriers to care.
              Distance, transportation, mobility limits, and a packed schedule matter less when your appointment is a
              video call.
            </p>
            <p>
              If mental health care is scarce where you live, telehealth can widen your options. If you are juggling
              work, family, or caregiving, a video visit from home saves the commute and the waiting room. And if
              anxiety makes leaving the house hard, getting care from home can be the difference between reaching out
              and going without.
            </p>

            <div className="my-10 rounded-r-2xl border-l-4 border-accent bg-light/70 px-6 py-5">
              <p className="font-cormorant text-[1.4rem] leading-snug text-primary">
                Telehealth makes it possible for more people to get support when they need it, without the logistics
                that used to stand in the way.
              </p>
            </div>

            <h2 className={H2}>Comfort, privacy, and less stigma</h2>
            <p>
              For many people, worries about stigma are still a real barrier. Being seen walking into a mental health
              office, or running into someone you know in a waiting room, can be enough to keep someone from booking.
              With telehealth, you choose the room, and no one needs to know where you are going.
            </p>
            <p>
              Some people also find it easier to open up from a familiar space. The comfort of your own home can make
              hard conversations feel a little more manageable.
            </p>

            <h2 className={H2}>Keeping up with your care</h2>
            <p>
              Mental health care works best when you can stay with it. Because video visits take less time out of your
              day, it can be easier to keep follow-up appointments during busy or difficult weeks, which helps you
              build a steady relationship with your provider.
            </p>
            <p>
              One thing to know: clinicians are licensed by state. {PROVIDER.name} is licensed in {CONTACT.state}, and{' '}
              {SITE_NAME} offers telehealth for patients in {CONTACT.state}.
            </p>

            <h2 className={H2}>Is telehealth right for you?</h2>
            <p>Video visits work well for many people and many kinds of care. They are a good fit when you:</p>
            <CheckList
              items={[
                'Want a psychiatric evaluation, medication management, or supportive therapy',
                'Have a private, quiet space and a reliable internet connection',
                'Prefer to fit care around work, school, or family without a commute',
              ]}
            />
            <p>
              Telehealth is not the right fit for emergencies. If you or someone you love is in crisis, do not wait for
              an appointment:{' '}
              <CrisisText
                text="call or text 988, call 911, or go to the nearest emergency room."
                linkClassName={LINK}
              />{' '}
              And if you need a physical exam or hands-on care, that part of your care belongs with your primary care
              clinician.
            </p>

            <h2 className={H2}>Tips for getting started</h2>
            <CheckList
              items={[
                <>
                  <strong className={LEAD}>Find a licensed provider:</strong> look for someone licensed in your state who offers telehealth.
                </>,
                <>
                  <strong className={LEAD}>Check your coverage:</strong> many insurance plans cover telehealth mental health care. At{' '}
                  {SITE_NAME}, you can use insurance by booking through Alma or Headway, or pay for visits yourself. See{' '}
                  <Link href="/insurance" className={LINK}>
                    insurance and pricing
                  </Link>
                  .
                </>,
                <>
                  <strong className={LEAD}>Set up a private, comfortable space:</strong> choose a quiet spot where you can talk openly.
                  Headphones can help with privacy.
                </>,
                <>
                  <strong className={LEAD}>Test your technology:</strong> check your internet connection, camera, and microphone before your
                  first visit.
                </>,
                <>
                  <strong className={LEAD}>Be open and honest:</strong> just as in any visit, your care is only as good as what you share.
                </>,
                <>
                  <strong className={LEAD}>Give it time:</strong> it can take a few visits to feel comfortable. Be patient with yourself and
                  the process.
                </>,
              ]}
            />

            <h2 className={H2}>Take the first step</h2>
            <p>
              Telehealth has made mental health care easier to reach and easier to keep. Whether you are struggling
              with anxiety, depression, a big life change, or you simply want support, a video visit is a practical
              place to start.
            </p>
            <p>
              {SITE_NAME} offers secure video visits with {PROVIDER.byline} for {AGES.short.toLowerCase()} in{' '}
              {CONTACT.state}. {BOOKING.alma.note} Learn how{' '}
              <Link href="/services/telepsychiatry" className={LINK}>
                telepsychiatry at {SITE_NAME}
              </Link>{' '}
              works, or see{' '}
              <Link href="/new-patients" className={LINK}>
                what to expect at your first visit
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
