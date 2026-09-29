import type { Metadata } from 'next'
import Link from 'next/link'
import ArticleLayout, { Callout, buildArticleMetadata } from '@/components/blog/ArticleLayout'
import { imageFor } from '@/lib/images'
import { CONTACT, PRACTICE_FAQS, PROVIDER, SITE_NAME } from '@/lib/site'

const SLUG = 'lifestyle-factors-that-impact-mental-health'
const TITLE = 'Lifestyle Factors That Impact Mental Health'
// lib/posts.ts carries a 138-character version of this description; this one meets the 140-160 range.
const DESCRIPTION =
  'How sleep, movement, stress, social connection, and daily routines can affect your mood, and simple habits that can support your mental health care.'
const IMAGE = imageFor('/who-we-help')

const WHAT_NP_DOES = PRACTICE_FAQS.find((f) => f.q === 'What does a psychiatric nurse practitioner (Psych NP) do?')!
const MED_OPTIONAL = PRACTICE_FAQS.find((f) => f.q === "What if I don't want to take medication?")!

export const metadata: Metadata = buildArticleMetadata({
  slug: SLUG,
  title: TITLE,
  description: DESCRIPTION,
  image: IMAGE,
})

export default function LifestyleFactorsArticle() {
  return (
    <ArticleLayout
      slug={SLUG}
      title={TITLE}
      description={DESCRIPTION}
      image={IMAGE}
      category="Wellbeing"
      related={[
        { href: '/services/supportive-therapy', label: 'Supportive Therapy' },
        { href: '/conditions/depression', label: 'Depression' },
        { href: '/blog/building-resilience-strengthening-your-mental-health-foundat', label: 'Building Resilience: Strengthening Your Mental Health Foundation' },
        { href: '/blog/managing-depression-beyond-medication', label: 'Managing Depression: Beyond Medication' },
      ]}
    >
      <p>
        When people think about mental health care, they usually think of therapy or medication. Those matter. But
        everyday routines, like how you sleep, move, connect with people, and handle stress, also affect how you feel
        from day to day.
      </p>
      <p>
        These habits do not replace treatment when you need it. They work alongside it, and they are usually part of
        the conversation at a psychiatric visit. As {SITE_NAME} explains it: “{WHAT_NP_DOES.a}”
      </p>

      <h2>Sleep and mood</h2>
      <p>
        Sleep and mental health affect each other. Poor sleep can make anxiety, low mood, and stress harder to
        handle, and anxiety or depression can make it harder to sleep. Short nights can also leave you more reactive
        and less patient.
      </p>
      <p>A few habits that support better sleep:</p>
      <ul>
        <li>Go to bed and wake up at about the same time every day, weekends included</li>
        <li>Build a calming wind-down routine</li>
        <li>Put screens away for a while before bed</li>
        <li>Keep your bedroom cool, dark, and quiet</li>
      </ul>
      <p>
        If sleep problems keep going despite good habits, mention them at your next visit. Sleep is worth treating in
        its own right.
      </p>

      <h2>Movement</h2>
      <p>
        Regular physical activity can lift your mood, ease stress and tension, and help you sleep. You do not need
        intense workouts. Walking, gardening, dancing, or stretching all count. The best kind of movement is the kind
        you enjoy enough to keep doing.
      </p>

      <blockquote>
        Small, steady changes in daily habits tend to last longer than big overhauls you cannot keep up.
      </blockquote>

      <h2>Social connection</h2>
      <p>
        People need people. Loneliness and isolation can make depression and anxiety worse, while a few close,
        supportive relationships can help you feel understood and less alone.
      </p>
      <p>
        Quality matters more than quantity. Staying connected takes some intention: regular calls or visits with
        people you trust, community activities, volunteering, or a group built around something you enjoy.
      </p>

      <h2>Stress and recovery time</h2>
      <p>
        Long-term stress wears on your mental health and can feed anxiety, low mood, and burnout. You cannot remove
        every stressor, but you can change how you respond and how much recovery time you build in.
      </p>
      <ul>
        <li>Mindfulness, slow breathing, or progressive muscle relaxation</li>
        <li>Time outdoors</li>
        <li>Short breaks during the day</li>
        <li>Hobbies and time off that you protect</li>
        <li>Clear boundaries around work</li>
      </ul>

      <h2>Alcohol, caffeine, and screens</h2>
      <p>
        Alcohol can seem to take the edge off, but it often makes mood, anxiety, and sleep worse, especially when you
        use it to manage feelings. Caffeine late in the day can keep you up and leave you jittery. Late-night scrolling
        can cut into sleep. Noticing how each of these affects you is a useful first step.
      </p>

      <h2>Practical steps to start this week</h2>
      <p>You do not need to change everything at once. Small, realistic steps add up:</p>
      <ul>
        <li>Keep a steady sleep schedule, even on weekends</li>
        <li>Take a short walk each day and build from there</li>
        <li>Schedule regular check-ins with a friend or family member</li>
        <li>Try a few minutes of slow breathing or mindfulness each day</li>
        <li>Cut back on alcohol, and avoid using it to manage emotions</li>
        <li>Create screen-free time, especially before bed and at meals</li>
      </ul>

      <h2>Where professional care fits</h2>
      <p>
        Daily habits are a strong support, but they are not a substitute for care when symptoms persist. If low mood,
        anxiety, or other concerns are getting in the way of daily life, it is time to talk with a professional.
      </p>
      <p>
        If you would prefer to start without medication, that is a conversation worth having too. In Jessica’s
        words: “{MED_OPTIONAL.a}”
      </p>

      <Callout title={`How ${SITE_NAME} can help`}>
        <p>
          {PROVIDER.name}, a {PROVIDER.title.toLowerCase()}, sees patients by secure video in {CONTACT.state}. Sleep,
          stress, and daily routines are part of the conversation, alongside supportive therapy and medication
          management when it helps.
        </p>
        <p>
          Learn more about <Link href="/services/supportive-therapy">supportive therapy</Link>, or{' '}
          <Link href="/book-appointment">book an appointment</Link>.
        </p>
      </Callout>

      <p>
        Taking care of your mental health is not selfish. It is part of living well and being there for the people
        who matter to you. The small choices you make each day can support your care and help you build resilience
        for whatever comes next.
      </p>
    </ArticleLayout>
  )
}
