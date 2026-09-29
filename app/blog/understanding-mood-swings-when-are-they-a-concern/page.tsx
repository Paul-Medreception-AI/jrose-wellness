import Link from 'next/link'
import ArticleLayout, { Callout, buildArticleMetadata } from '@/components/blog/ArticleLayout'
import CrisisNotice from '@/components/site/CrisisNotice'
import { imageFor } from '@/lib/images'
import { getPost } from '@/lib/posts'
import { AGES, CONTACT, PROVIDER, SITE_NAME } from '@/lib/site'

// Autobuilt post, kept and rewritten against FACTS.md (section 11 framing, evidence and location
// rules). Removed: the alternative-medicine section (diet, vitamin levels and similar findings as
// part of the evaluation), a prevalence claim, evidence and outcome claims, the city location and
// the invented date. Added the crisis note.

const SLUG = 'understanding-mood-swings-when-are-they-a-concern'
const post = getPost(SLUG)
const image = imageFor('/conditions/bipolar-disorder')

export const metadata = buildArticleMetadata({ slug: SLUG, title: post.title, description: post.description, image })

const RELATED = [
  { href: '/conditions/bipolar-disorder', label: 'Bipolar disorder' },
  { href: '/conditions/depression', label: 'Depression' },
  { href: '/services/psychiatric-evaluation', label: 'Psychiatric evaluation' },
]

export default function MoodSwingsPost() {
  return (
    <ArticleLayout
      slug={SLUG}
      title={post.title}
      description={post.description}
      image={image}
      category={post.category}
      related={RELATED}
    >
      <p>
        One moment you feel energized and upbeat, the next you are irritable or flat. Everyone has ups and
        downs. So when do mood changes become something worth a closer look?
      </p>
      <p>
        Many people are not sure whether their mood shifts are &quot;normal&quot; or a sign of something more,
        and that uncertainty can keep them from asking for help. Here is what mood swings are, what can cause
        them, and when to reach out.
      </p>

      <h2>What are mood swings?</h2>
      <p>
        Mood swings are quick or intense changes in how you feel. You might go from happy and energetic to sad,
        anxious or irritable in a short time. Everyone&apos;s mood responds to life events. Mood swings stand out
        because of how intense or frequent they are, or because they seem disconnected from what is going on
        around you.
      </p>
      <p>
        Feeling sad after disappointing news, or excited before a big event, is a healthy emotional response.
        Mood swings become a concern when they are out of proportion to the situation, happen without a clear
        trigger, get in the way of daily life, or cause you real distress.
      </p>
      <p>
        People experience them differently. Some describe an emotional roller coaster. Others notice small
        shifts that add up over time. What matters most is how the changes affect your life, your relationships
        and your ability to function.
      </p>

      <h2>Common causes</h2>
      <p>
        Mood swings can come from many places, from temporary life circumstances to underlying health
        conditions. Knowing the possibilities is a first step toward sorting them out.
      </p>
      <p>
        <strong>Sleep.</strong> Even one bad night can make you more irritable and reactive. Ongoing sleep
        problems can create a cycle where poor sleep worsens mood, and a low or anxious mood makes sleep harder.
      </p>
      <p>
        <strong>Stress and life circumstances.</strong> Big transitions, relationship strain, work pressure and
        money worries all affect mood. Those reactions are normal, but ongoing stress without a way to recover
        can lead to bigger mood problems.
      </p>
      <p>
        <strong>Physical health and medications.</strong> Some medical conditions, such as thyroid problems, and
        hormonal changes can affect mood. So can some medications, including steroids. If mood changes are new,
        it is worth checking in with your primary care clinician too.
      </p>
      <p>
        <strong>Mental health conditions.</strong> Mood instability is part of several conditions.{' '}
        <Link href="/conditions/bipolar-disorder">Bipolar disorder</Link> involves distinct periods of elevated or
        irritable mood and periods of depression. <Link href="/conditions/depression">Depression</Link>,{' '}
        <Link href="/conditions/anxiety">anxiety</Link> and{' '}
        <Link href="/conditions/ptsd-trauma">trauma</Link> can also bring strong mood shifts.
      </p>
      <p>
        <strong>Alcohol and other substances.</strong> Substances affect mood directly, both while using and
        while coming down. <Link href="/conditions/substance-use">Support for substance use</Link> can be part of
        getting your mood steadier.
      </p>

      <Callout>
        <p>
          Everyone&apos;s mood changes. The real question is whether those changes are getting in the way of the
          life you want to live.
        </p>
      </Callout>

      <h2>When should you be concerned?</h2>
      <p>
        There is no single cutoff, but these signs suggest it is time for an evaluation, especially if you
        recognize more than one:
      </p>
      <ul>
        <li>
          <strong>Daily life is disrupted.</strong> Mood changes get in the way of work, school or routine tasks.
        </li>
        <li>
          <strong>Relationships are strained.</strong> Family, friends or coworkers have mentioned concern about
          your moods or how unpredictable they feel.
        </li>
        <li>
          <strong>Impulsive or risky behavior.</strong> During mood shifts you do things you later regret, like
          overspending, using substances or making reckless decisions.
        </li>
        <li>
          <strong>Periods of unusually high energy.</strong> You need much less sleep than usual, your thoughts
          race, or you talk faster and take on far more than usual.
        </li>
        <li>
          <strong>Intensity out of proportion.</strong> Your reactions feel overwhelming compared with the
          situation.
        </li>
        <li>
          <strong>Frequency and duration.</strong> The swings happen often and have gone on for weeks or months.
        </li>
        <li>
          <strong>Physical changes.</strong> Your appetite, sleep or energy shift along with your mood.
        </li>
      </ul>
      <p>
        Thoughts of harming yourself or someone else need help right away, not a scheduled appointment:
      </p>
      <div className="mt-4">
        <CrisisNotice variant="compact" />
      </div>
      <p>
        Trust your instincts. If something feels off, or people you trust are worried, that is reason enough to
        get checked out. It is easier to sort things out before they build up.
      </p>

      <h2>What helps</h2>
      <p>
        Steadier moods usually come from several things working together, not one fix.
      </p>
      <p>
        <strong>Daily foundations.</strong> Regular movement, steady routines, and going easy on caffeine and
        alcohol can make moods more predictable.
      </p>
      <p>
        <strong>Sleep.</strong> Consistent sleep and wake times and a calming bedtime routine are some of the
        most practical steps you can take. For many people, better sleep makes a noticeable difference in mood.
      </p>
      <p>
        <strong>Coping skills.</strong> Mindfulness, slow breathing and progressive muscle relaxation can help
        create space between a trigger and your reaction. They get easier with practice.
      </p>
      <p>
        <strong>Professional care.</strong> Depending on the cause, care may include therapy, medication or both.
        Cognitive behavioral techniques can help you notice patterns and respond differently. When mood changes
        are part of a condition like bipolar disorder or depression, medication is often an important part of
        the plan.
      </p>
      <p>
        A psychiatric evaluation looks at the full picture: your symptoms and history, your sleep and stress,
        substance use, medications and physical health. That is how you and your clinician figure out what is
        driving the changes.
      </p>

      <h2>Taking the first step</h2>
      <p>
        If you are dealing with mood swings that worry you, reaching out is a sign of strength, not weakness.
        Many people wait because they downplay what they are going through, fear being judged, or hope it will
        pass. Some mood problems do ease with lifestyle changes, but persistent or severe mood swings usually
        deserve a professional look.
      </p>
      <p>
        Start by writing things down. A simple mood journal, noting when changes happen, how strong they are,
        possible triggers and how long they last, gives your clinician a clearer picture of your patterns.
      </p>
      <p>
        Be open about everything that might play a role, including sleep, stress, alcohol or other substances,
        and every medication or over-the-counter product you take.
      </p>
      <p>
        Finding the right approach can take time and some adjusting along the way. That is normal.
      </p>
      <p>
        Mood swings do not have to run your life. At {SITE_NAME}, {PROVIDER.byline}, offers{' '}
        <Link href="/services/psychiatric-evaluation">psychiatric evaluation</Link>,{' '}
        <Link href="/services/medication-management">medication management</Link> and{' '}
        <Link href="/services/supportive-therapy">supportive therapy</Link> by secure video for{' '}
        {AGES.short.toLowerCase()} in {CONTACT.state}.
      </p>
    </ArticleLayout>
  )
}
