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

// Autobuilt post, rewritten against FACTS.md: city/office location claims removed, the "evidence"
// section (study and brain-change claims) replaced with plain guidance, and alternative-medicine framing
// removed. Self-care is framed as support, not as treatment.

const SLUG = 'self-care-isn-t-selfish-prioritizing-mental-health'
const post = getPost(SLUG)
const PATH = postHref(SLUG)
const TITLE = withBrand(post.title)
const DESCRIPTION =
  'Why self-care matters for your mental health, what it looks like day to day, and practical ways to make room for your own needs without feeling guilty about it.'
const IMAGE = imageFor('/faq')

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
    href: '/blog/the-connection-between-chronic-stress-and-mental-health',
    eyebrow: 'Blog',
    title: 'The Connection Between Chronic Stress and Mental Health',
    body: 'How long-term stress affects your mood, sleep, and focus, and what helps.',
  },
  {
    href: '/services/supportive-therapy',
    eyebrow: 'Services',
    title: 'Supportive Therapy',
    body: 'Coping skills and support built into your visits with Jessica.',
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

export default function SelfCarePost() {
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
              When life keeps asking for more (more work, more availability, more of you), taking time for yourself can
              feel uncomfortable, even wrong. Many people carry a quiet belief that meeting their own needs is selfish.
              The opposite is closer to the truth.
            </p>
            <p>
              Self-care is not a luxury. It is part of how you protect your mental health, handle stress, and keep
              showing up for the people and responsibilities that matter to you. When you look after yourself, you are
              not taking anything away from others. You are making sure you have something left to give.
            </p>

            <h2 className={H2}>What self-care really means</h2>
            <p>
              Self-care is more than bubble baths and spa days, though those can be part of it. At its core, it is any
              intentional thing you do to protect or improve how you feel, physically and emotionally. That starts with
              the basics: enough sleep, regular meals, and some movement. It also includes the things that help you
              feel like yourself again.
            </p>
            <p>
              Self-care can be as simple as setting limits on your time, saying no to commitments that drain you,
              asking for help when you are struggling, or taking a few quiet minutes each day. It means noticing your
              limits and respecting them. You are human, and refilling your tank is necessary.
            </p>

            <div className="my-10 rounded-r-2xl border-l-4 border-accent bg-light/70 px-6 py-5">
              <p className="font-cormorant text-[1.4rem] leading-snug text-primary">
                You can&apos;t pour from an empty cup. Taking care of yourself is the foundation for taking care of
                everything else.
              </p>
            </div>

            <h2 className={H2}>The cost of always putting yourself last</h2>
            <p>
              When your own needs stay at the bottom of the list, the strain adds up. Ongoing stress without time to
              recover can lead to burnout: feeling emotionally, physically, and mentally exhausted in a way that
              touches every part of your life. It can also make anxiety, low mood, and irritability harder to manage.
            </p>
            <p>
              There is an irony here. When you give up your own well-being for others, you often become less able to
              help them. A parent running on empty has less patience. A caregiver who never rests starts to feel
              resentful. A professional who never switches off finds it harder to focus.
            </p>
            <p>
              The guilt many people feel about self-care often comes from deep beliefs about worth, productivity, and
              what it means to be a &ldquo;good&rdquo; person. Noticing those beliefs, and questioning them, can be a
              real turning point.
            </p>

            <h2 className={H2}>Why it matters for your mental health</h2>
            <p>
              Sleep, rest, connection, and time for things you enjoy all affect how steady you feel. When they are in
              short supply, stress hits harder, emotions run closer to the surface, and small problems can feel huge.
              When they are protected, you have more room to cope.
            </p>
            <p>
              Self-compassion matters too: treating yourself with the kindness you would offer a friend. It is not
              self-indulgent. It gives you a steadier place to stand when things are hard.
            </p>
            <p>
              Self-care supports your mental health, but it is not a cure. If you are doing all the &ldquo;right&rdquo;
              things and still struggling, that is not a personal failure. It may be a sign that it is time to talk
              with a professional.
            </p>

            <h2 className={H2}>Practical self-care strategies</h2>
            <p>
              Sustainable self-care does not require big life changes. Small, steady actions in your daily routine can
              make a real difference. The key is finding what actually restores you, not what looks good on social
              media.
            </p>
            <CheckList
              items={[
                <>
                  <strong className={LEAD}>Set boundaries you keep.</strong> Protect time for rest, meals, and sleep. Say what you need
                  clearly, and practice saying no to requests that crowd those things out.
                </>,
                <>
                  <strong className={LEAD}>Protect your sleep.</strong> Keep a steady sleep schedule, build a calming bedtime routine, and
                  make your bedroom a comfortable place to rest.
                </>,
                <>
                  <strong className={LEAD}>Move your body.</strong> Find movement you enjoy, such as walking, dancing, yoga, or swimming, and
                  make it a regular part of your week.
                </>,
                <>
                  <strong className={LEAD}>Stay connected.</strong> Make time for people who support you, and reach out when you need them.
                </>,
                <>
                  <strong className={LEAD}>Practice mindfulness.</strong> A few minutes of slow breathing or simply noticing your surroundings
                  can take the edge off stress. Start small.
                </>,
                <>
                  <strong className={LEAD}>Do things you enjoy.</strong> Hobbies, creative projects, and time outdoors are not frivolous. They
                  help you feel like yourself.
                </>,
                <>
                  <strong className={LEAD}>Get professional support when you need it.</strong> Talking with a mental health professional is
                  not a sign of weakness. It is one of the most useful forms of self-care there is.
                </>,
              ]}
            />

            <h2 className={H2}>Getting past the barriers</h2>
            <p>
              Even when self-care makes sense in theory, doing it can be hard. Common barriers include time, money,
              caregiving duties, and guilt. Naming them makes it easier to work around them.
            </p>
            <p>
              If time is tight, remember that self-care does not require hours. Five minutes of slow breathing, a short
              walk, or a pause before you say yes all count. If money is tight, lean on low-cost options: a walk
              outside, a call with a friend, or a few minutes of quiet. If you care for others, remember that you are
              more patient and present when your own needs are met, and that you are showing them how to care for
              themselves too.
            </p>
            <p>
              For the guilt, try asking yourself: Would I judge a friend for resting when they are tired? Would I expect
              someone I love to give endlessly without ever refilling? Offering yourself the same compassion is not
              selfish. It is wise.
            </p>

            <h2 className={H2}>Making self-care last</h2>
            <p>
              Self-care is not a one-time fix. It is an ongoing way of treating yourself with kindness and respect. It
              needs adjusting as life changes, and patience with yourself when you fall short. Start small, notice
              progress, and remember that you do not have to earn care before you are allowed to have it.
            </p>
            <p>
              If stress, anxiety, or low mood are making it hard to look after yourself, professional support can help.
              At {SITE_NAME}, {PROVIDER.byline} sees {AGES.short.toLowerCase()} in {CONTACT.state} by secure video for{' '}
              <Link href="/services/psychiatric-evaluation" className={LINK}>
                psychiatric evaluation
              </Link>
              , medication management when it fits, and{' '}
              <Link href="/services/supportive-therapy" className={LINK}>
                supportive therapy
              </Link>{' '}
              within visits. Reaching out is itself an act of self-care.
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
