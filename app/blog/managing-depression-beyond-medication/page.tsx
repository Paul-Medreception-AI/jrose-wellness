import type { Metadata } from 'next'
import Link from 'next/link'
import ArticleLayout, { Callout, buildArticleMetadata } from '@/components/blog/ArticleLayout'
import CrisisNotice from '@/components/site/CrisisNotice'
import { imageFor } from '@/lib/images'
import { CONTACT, PRACTICE_FAQS, PROVIDER, SITE_NAME } from '@/lib/site'

const SLUG = 'managing-depression-beyond-medication'
const TITLE = 'Managing Depression: Beyond Medication'
// lib/posts.ts carries a 136-character version of this description; this one meets the 140-160 range.
const DESCRIPTION =
  'Ways to manage depression alongside medication or without it, including supportive therapy, daily routines, social connection, and professional help.'
const IMAGE = imageFor('/conditions/depression')

const MED_OPTIONAL = PRACTICE_FAQS.find((f) => f.q === "What if I don't want to take medication?")!
const THERAPY_OR_MEDS = PRACTICE_FAQS.find((f) => f.q === 'Do you provide therapy, medication management, or both?')!

export const metadata: Metadata = buildArticleMetadata({
  slug: SLUG,
  title: TITLE,
  description: DESCRIPTION,
  image: IMAGE,
})

export default function DepressionBeyondMedicationArticle() {
  return (
    <ArticleLayout
      slug={SLUG}
      title={TITLE}
      description={DESCRIPTION}
      image={IMAGE}
      category="Depression"
      related={[
        { href: '/conditions/depression', label: 'Depression Treatment' },
        { href: '/services/supportive-therapy', label: 'Supportive Therapy' },
        { href: '/blog/depression-and-motivation-why-it-s-so-hard-and-what-helps', label: "Depression and Motivation: Why It's So Hard and What Helps" },
        { href: '/blog/managing-seasonal-depression-and-winter-blues', label: 'Managing Seasonal Depression and Winter Blues' },
      ]}
    >
      <p>
        Depression can cast a shadow over everything. Medication helps many people, and for some it is an important
        part of getting better. But it is not the only tool, and it is not always the whole answer.
      </p>
      <p>
        Whether you want to add to your current treatment or would rather start without medication, it helps to know
        the full range of options. As Jessica tells patients:
      </p>
      <blockquote>
        {MED_OPTIONAL.a}
        <cite>
          {PROVIDER.name}, {PROVIDER.credentials}
        </cite>
      </blockquote>

      <CrisisNotice variant="compact" />

      <h2>Depression has many parts</h2>
      <p>
        Depression is not just a “chemical imbalance.” Biology, life experiences, stress, sleep, relationships, and
        daily routines all play a role, and they affect each other. That is why a one-size-fits-all approach rarely
        works.
      </p>
      <p>
        Antidepressants can make a real difference for many people, but they do not address every part of the
        picture. Other approaches can work alongside medication or, depending on your symptoms and preferences, in
        place of it. A good plan fits your needs, your preferences, and your life.
      </p>

      <h2>Talk therapy and supportive therapy</h2>
      <p>
        Talking with a trained professional gives you a safe place to sort through feelings, build coping skills, and
        notice patterns that keep you stuck. Cognitive behavioral techniques, for example, help you spot and change
        thought patterns and habits that feed low mood.
      </p>
      <p>
        At a psychiatric visit, therapy and medication are not either-or. In Jessica’s words: “{THERAPY_OR_MEDS.a}”
      </p>

      <blockquote>
        Recovery from depression is rarely a straight line, but every small step toward self-care, connection, and
        support builds momentum.
      </blockquote>

      <h2>Daily routines that support your mood</h2>
      <p>
        Daily habits will not cure severe depression on their own, but they give you a steadier base to work from.
      </p>
      <ul>
        <li>
          <strong>Movement.</strong> Regular physical activity can lift mood and help with sleep. Walking, swimming,
          dancing, or stretching all count. Pick something you enjoy so it feels like support, not pressure.
        </li>
        <li>
          <strong>Sleep.</strong> Depression disrupts sleep, and poor sleep deepens depression. Regular sleep and wake
          times, a relaxing bedtime routine, and fewer screens at night can help break the cycle.
        </li>
        <li>
          <strong>Structure.</strong> A loose daily plan, with a few small tasks and something to look forward to,
          can make days feel more manageable.
        </li>
      </ul>

      <h2>The role of connection</h2>
      <p>
        Isolation often deepens depression, yet depression makes reaching out feel hardest exactly when you need it
        most. You do not need a big social circle. One or two people who make you feel seen and heard can make a real
        difference.
      </p>
      <p>
        If reaching out feels like too much, start small: a text to a friend, a short call, or a class or group with a
        built-in reason to show up. Support groups for depression can also connect you with people who understand.
      </p>

      <h2>Mindfulness</h2>
      <p>
        Mindfulness helps you notice difficult thoughts and feelings without getting pulled under by them. Over time,
        it can make rumination, the loop of going over the same painful thoughts, a little easier to step out of.
        Mindfulness is one of the techniques Jessica uses in visits.
      </p>
      <p>
        If your low mood follows the seasons, read more about{' '}
        <Link href="/blog/managing-seasonal-depression-and-winter-blues">seasonal depression and the winter blues</Link>.
      </p>

      <h2>Practical steps you can start today</h2>
      <ul>
        <li>
          <strong>Start with one change.</strong> Trying to overhaul everything at once leads to overwhelm. Pick one
          thing, like a short daily walk or a steady bedtime, and build from there.
        </li>
        <li>
          <strong>Keep a mood journal.</strong> Tracking your mood, sleep, and activities can show you patterns and
          gives you something concrete to bring to your visits.
        </li>
        <li>
          <strong>Get professional support.</strong> A clinician can help you build a plan, check how it is going, and
          adjust it as needed.
        </li>
        <li>
          <strong>Be patient with yourself.</strong> Progress is not always steady. Notice small wins, and treat
          setbacks as information, not failure.
        </li>
        <li>
          <strong>Do not stop medication on your own.</strong> If you take an antidepressant and want to explore other
          options, talk with your prescriber first. Stopping suddenly can cause uncomfortable symptoms and can
          bring depression back.
        </li>
      </ul>

      <Callout title={`Depression care at ${SITE_NAME}`}>
        <p>
          {PROVIDER.name}, a {PROVIDER.title.toLowerCase()}, treats depression by secure video for patients in{' '}
          {CONTACT.state}. Care starts with a psychiatric evaluation and can include supportive therapy, medication
          management if you choose it, and regular follow-ups.
        </p>
        <p>
          Learn more about <Link href="/conditions/depression">depression treatment</Link> and{' '}
          <Link href="/services/supportive-therapy">supportive therapy</Link>.
        </p>
      </Callout>

      <h2>You do not have to do this alone</h2>
      <p>
        Depression is serious, and it can be treated. Medication is one option in a bigger toolkit. Working on it
        from several angles at once gives you more ways to feel better.
      </p>
      <p>
        Reaching out for help is a courageous step. When you are ready,{' '}
        <Link href="/book-appointment">book an appointment</Link>.
      </p>
    </ArticleLayout>
  )
}
