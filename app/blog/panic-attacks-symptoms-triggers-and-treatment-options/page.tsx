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

// Autobuilt post, rewritten against FACTS.md: statistics and evidence claims removed, the
// sedative-medication mention removed (no controlled-substance promises), and treatment tied to what
// the practice offers (evaluation, medication management, supportive therapy within visits).

const SLUG = 'panic-attacks-symptoms-triggers-and-treatment-options'
const post = getPost(SLUG)
const PATH = postHref(SLUG)
const TITLE = withBrand(post.title)
const DESCRIPTION =
  'What a panic attack feels like, common triggers, and how panic is treated, from coping skills you can use in the moment to psychiatric medication management.'
const IMAGE = imageFor('/conditions/anxiety')

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
    body: 'How Jessica evaluates and treats anxiety, panic attacks, and social anxiety by secure video.',
  },
  {
    href: '/services/psychiatric-evaluation',
    eyebrow: 'Services',
    title: 'Psychiatric Evaluation',
    body: 'Your first visit: your history, symptoms, and goals, and a plan that fits you.',
  },
  {
    href: '/blog/recognizing-the-physical-symptoms-of-anxiety',
    eyebrow: 'Blog',
    title: 'Recognizing the Physical Symptoms of Anxiety',
    body: 'How anxiety can show up in your body, and when those symptoms are worth a closer look.',
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

export default function PanicAttacksPost() {
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
              Your heart pounds. You can&apos;t catch your breath. A wave of fear tells you something terrible is
              happening. Then, minutes later, it fades and leaves you shaken. If this has happened to you, you are not
              alone, and it does not mean you are weak or &ldquo;losing it.&rdquo; Panic attacks are common, and they
              are treatable.
            </p>

            <h2 className={H2}>What is a panic attack?</h2>
            <p>
              A panic attack is a sudden surge of intense fear or discomfort that builds fast, usually peaking within
              minutes. Everyday anxiety tends to build slowly. Panic hits all at once, and it can feel as physical as
              it is emotional.
            </p>
            <p>
              One panic attack does not mean you have panic disorder. When attacks keep coming back, and you start to
              worry about the next one or change your routine to avoid them, it is worth getting evaluated.
            </p>

            <h2 className={H2}>Recognizing the symptoms</h2>
            <p>During a panic attack, you may notice several of these at once:</p>
            <CheckList
              items={[
                'A racing or pounding heartbeat (palpitations)',
                'Sweating, trembling, or shaking',
                'Shortness of breath or a feeling of being smothered',
                'Chest pain or discomfort',
                'Nausea or an upset stomach',
                'Dizziness, lightheadedness, or feeling faint',
                'Chills or hot flashes',
                'Numbness or tingling',
                'Feeling unreal (derealization) or detached from yourself (depersonalization)',
                'Fear of losing control',
                'Fear of dying',
              ]}
            />
            <p>
              Many people having their first panic attack think it is a heart attack. The symptoms are real, and they
              deserve to be taken seriously. If you have chest pain or trouble breathing that is new or different, call
              911 or go to the nearest emergency room. Your primary care clinician can also help rule out other
              medical causes, such as thyroid or heart rhythm problems.
            </p>

            <div className="my-10 rounded-r-2xl border-l-4 border-accent bg-light/70 px-6 py-5">
              <p className="font-cormorant text-[1.4rem] leading-snug text-primary">
                Panic attacks are frightening, but they pass. Understanding what is happening in your body is often
                the first step toward taking back some control.
              </p>
            </div>

            <h2 className={H2}>Common triggers and risk factors</h2>
            <p>
              Some panic attacks seem to come out of nowhere. Others are tied to certain places or situations. Noticing
              your own patterns gives you and your clinician something concrete to work with.
            </p>
            <h3 className={H3}>Situations that can set off panic</h3>
            <CheckList
              items={[
                'Crowded places or public transportation',
                'Enclosed spaces, such as elevators or tunnels',
                'Social situations or public speaking',
                'Driving, especially on highways or bridges',
                'Stressful events or big life transitions',
              ]}
            />
            <h3 className={H3}>Things that can make panic more likely</h3>
            <CheckList
              items={[
                'A family history of panic or anxiety',
                'Ongoing stress or past trauma',
                'Major life changes, such as a move, a job loss, or a breakup',
                'Certain medical conditions, such as thyroid or heart rhythm problems',
                'Caffeine, alcohol, nicotine, or other substances',
                'Stopping certain medications suddenly',
              ]}
            />

            <h2 className={H2}>How panic can affect daily life</h2>
            <p>
              Beyond the attacks themselves, many people start to dread the next one. That fear can lead to avoidance:
              skipping the grocery store, the highway, or the meeting where an attack happened before. Little by little,
              your world can start to feel smaller.
            </p>
            <p>
              For some people, avoidance grows into agoraphobia, a fear of places where escape might feel hard. Panic
              can also show up alongside low mood or heavier drinking. These are all good reasons to reach out sooner
              rather than later.
            </p>

            <h2 className={H2}>Treatment options</h2>
            <p>
              Panic attacks and panic disorder are treatable. Treatment is personal, and it often combines more than
              one approach.
            </p>
            <h3 className={H3}>Cognitive behavioral techniques</h3>
            <p>
              Cognitive behavioral therapy (CBT) helps you notice the thoughts that turn a racing heart into
              &ldquo;something is terribly wrong,&rdquo; and practice new ways of responding. A key part is gradually
              and safely facing the sensations and situations you have been avoiding, so you learn that panic is
              uncomfortable but passes.
            </p>
            <p>
              At {SITE_NAME}, Jessica uses cognitive behavioral techniques, mindfulness, and practical coping
              strategies within your visits. In her words: &ldquo;{THERAPY_AND_MEDICATION}&rdquo;
            </p>
            <h3 className={H3}>Medication</h3>
            <p>
              Medication can make panic attacks less frequent and less intense for some people. Antidepressants such as
              SSRIs and SNRIs are commonly used for panic disorder. Any medication decision should be made with a
              qualified prescriber who knows your full history.
            </p>
            <p>
              How Jessica approaches it: &ldquo;{HOW_MEDICATION_IS_CHOSEN}&rdquo; Medication is always optional. Learn
              more about{' '}
              <Link href="/services/medication-management" className={LINK}>
                medication management
              </Link>
              .
            </p>
            <h3 className={H3}>Daily habits that support treatment</h3>
            <p>
              Regular movement, steady sleep, and cutting back on caffeine and alcohol can make your body less reactive.
              Mindfulness and slow breathing can help you ride out symptoms. These habits support treatment. They do
              not replace it.
            </p>

            <h2 className={H2}>What to do during a panic attack</h2>
            <p>Professional care helps over the long run. In the moment, these steps can help:</p>
            <CheckList
              items={[
                <>
                  <strong className="font-semibold text-ink">Slow your breathing:</strong> breathe in through your nose
                  for a count of four, hold for four, then breathe out through your mouth for a count of six.
                </>,
                <>
                  <strong className="font-semibold text-ink">Ground yourself:</strong> name five things you can see,
                  four you can touch, three you can hear, two you can smell, and one you can taste.
                </>,
                <>
                  <strong className="font-semibold text-ink">Talk to yourself kindly:</strong> &ldquo;This is
                  uncomfortable, and it will pass.&rdquo;
                </>,
                <>
                  <strong className="font-semibold text-ink">Stay in the present:</strong> notice what is happening now
                  instead of what might happen next.
                </>,
                <>
                  <strong className="font-semibold text-ink">Stay put if it is safe:</strong> leaving brings quick
                  relief but teaches your brain the situation is dangerous. Letting the wave pass shows you it ends on its
                  own.
                </>,
              ]}
            />

            <h2 className={H2}>When to seek professional help</h2>
            <p>
              If you have had more than one panic attack, you live in fear of the next one, or you have started avoiding
              places because of panic, it is a good time to talk with a professional. You don&apos;t have to wait until
              it gets worse.
            </p>
            <p>
              A{' '}
              <Link href="/services/psychiatric-evaluation" className={LINK}>
                psychiatric evaluation
              </Link>{' '}
              looks at your symptoms, history, and goals, and ends with a plan that fits you. At {SITE_NAME},{' '}
              {PROVIDER.byline}, a board-certified psychiatric nurse practitioner, sees {AGES.short.toLowerCase()} in{' '}
              {CONTACT.state} by secure video. Read more about{' '}
              <Link href="/conditions/anxiety" className={LINK}>
                how anxiety and panic are treated
              </Link>
              .
            </p>
            <p>
              Living with panic can feel isolating. Reaching out is a sign of strength, and it is the first step toward
              feeling steadier.
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
