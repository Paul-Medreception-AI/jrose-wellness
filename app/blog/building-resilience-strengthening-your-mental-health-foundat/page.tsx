import type { Metadata } from 'next'
import Link from 'next/link'
import ArticleLayout, { Callout, buildArticleMetadata } from '@/components/blog/ArticleLayout'
import CrisisNotice from '@/components/site/CrisisNotice'
import { imageFor } from '@/lib/images'
import { CONTACT, PROVIDER, SITE_NAME } from '@/lib/site'

const SLUG = 'building-resilience-strengthening-your-mental-health-foundat'
const TITLE = 'Building Resilience: Strengthening Your Mental Health Foundation'
const DESCRIPTION =
  'Practical ways to build resilience, manage stress, and recover from setbacks, and how support from a mental health professional can help along the way.'
const IMAGE = imageFor('/conditions')

export const metadata: Metadata = buildArticleMetadata({
  slug: SLUG,
  title: 'Building Resilience for Your Mental Health',
  description: DESCRIPTION,
  image: IMAGE,
})

export default function ResilienceArticle() {
  return (
    <ArticleLayout
      slug={SLUG}
      title={TITLE}
      description={DESCRIPTION}
      image={IMAGE}
      category="Wellbeing"
      related={[
        { href: '/services/supportive-therapy', label: 'Supportive Therapy' },
        { href: '/conditions/burnout-life-transitions', label: 'Burnout & Life Transitions' },
        { href: '/blog/coping-strategies-for-managing-daily-anxiety', label: 'Coping Strategies for Managing Daily Anxiety' },
        { href: '/blog/lifestyle-factors-that-impact-mental-health', label: 'Lifestyle Factors That Impact Mental Health' },
      ]}
    >
      <p>
        Life does not come with a promise of smooth sailing. Everyone faces setbacks and stretches that test them.
        Some people seem to bounce back more easily, and it is not luck. It is resilience, and the good news is that
        it can be built.
      </p>
      <p>
        Resilience is not “toughing it out” or ignoring your feelings. It is the ability to adapt to stress and
        hardship while keeping your footing. Think of it as a foundation that helps you weather hard times without
        losing yourself.
      </p>

      <h2>More than bouncing back</h2>
      <p>
        Resilience is not a fixed trait you either have or do not have. It is a set of skills, attitudes, and habits
        you can practice. It is not about never feeling overwhelmed. It is about how you respond to challenges and how
        you find your balance again.
      </p>
      <p>
        That makes resilience something you <em>do</em>, not something you <em>are</em>: an ongoing practice of
        managing emotions, staying connected, and moving forward despite obstacles.
      </p>

      <blockquote>
        Resilience is not about avoiding the waves. It is about learning to ride them.
      </blockquote>

      <h2>Core building blocks</h2>
      <ul>
        <li>
          <strong>Strong relationships.</strong> Invest in people who offer real support and understanding. Connection
          is one of the best buffers you have.
        </li>
        <li>
          <strong>Self-awareness.</strong> Knowing your emotional patterns and triggers gives you room to choose a
          different response. Journaling, mindfulness, or therapy can all help.
        </li>
        <li>
          <strong>A growth mindset.</strong> Try to see challenges as chances to learn rather than walls you cannot
          get past.
        </li>
        <li>
          <strong>The physical basics.</strong> Regular sleep, movement, and regular meals give your mind more to work
          with when things get hard.
        </li>
        <li>
          <strong>Acceptance.</strong> Resilient people do not pretend everything is fine. They acknowledge what is
          hard and still trust they can cope.
        </li>
        <li>
          <strong>Meaning and purpose.</strong> Work, relationships, creativity, or service can give you direction
          even in difficult times.
        </li>
      </ul>

      <h2>Daily practices that build resilience</h2>
      <p>Resilience grows through small, steady practice. A few places to start:</p>
      <ul>
        <li>
          <strong>Start a short mindfulness practice.</strong> Even a few minutes of quiet breathing each day can help
          you stay present when stress hits.
        </li>
        <li>
          <strong>Reframe unhelpful thoughts.</strong> When you catch yourself expecting the worst or thinking in
          all-or-nothing terms, pause and ask: Is there another way to see this? What would I tell a friend? This is a
          core cognitive behavioral technique.
        </li>
        <li>
          <strong>Set realistic goals.</strong> Break big challenges into small steps. Each small action builds
          confidence and a sense of control.
        </li>
        <li>
          <strong>Notice what is going right.</strong> Naming a few things you are grateful for does not erase hard
          things. It helps you keep perspective.
        </li>
        <li>
          <strong>Learn from experience.</strong> After a hard stretch, ask yourself: What helped? What would I do
          differently? What did I learn about myself?
        </li>
      </ul>

      <h2>Knowing when you need support</h2>
      <p>
        Building resilience does not mean handling everything alone. Knowing when to ask for help is part of being
        resilient. Reach out to a professional if you are dealing with ongoing hopelessness, anxiety that gets in the
        way of daily life, trouble functioning at work or home, or thoughts of harming yourself.
      </p>
      <CrisisNotice variant="compact" />
      <p>
        A mental health professional can help you build coping skills that fit your life, and can check whether
        anxiety, depression, or trauma is making it harder to cope.
      </p>

      <Callout title={`How ${SITE_NAME} can help`}>
        <p>
          {PROVIDER.name}, a {PROVIDER.title.toLowerCase()}, sees patients by secure video in {CONTACT.state}. Visits
          include supportive therapy built on cognitive behavioral techniques, mindfulness, psychoeducation, and
          practical coping strategies, with medication management available if it would help.
        </p>
        <p>
          Learn more about <Link href="/services/supportive-therapy">supportive therapy</Link> or{' '}
          <Link href="/conditions/burnout-life-transitions">care for burnout and life transitions</Link>.
        </p>
      </Callout>

      <h2>Moving forward</h2>
      <p>
        Building resilience is ongoing. There will be setbacks and days when small things feel huge. That is normal,
        and it does not mean you have failed. Part of resilience is meeting those moments with self-compassion
        instead of self-criticism.
      </p>
      <p>
        Start where you are. You do not need every strategy at once. Pick one or two that feel doable and stick with
        them. Over time, you may notice you recover a little faster from disappointments or feel steadier when things
        are uncertain.
      </p>
      <p>
        If building resilience feels hard on your own, or you are facing something that feels overwhelming right now,
        support can help. <Link href="/book-appointment">Book an appointment</Link> when you are ready.
      </p>
    </ArticleLayout>
  )
}
