import Link from 'next/link'
import ArticleLayout, { Callout, buildArticleMetadata } from '@/components/blog/ArticleLayout'
import { imageFor } from '@/lib/images'
import { getPost } from '@/lib/posts'
import { PROVIDER, SITE_NAME } from '@/lib/site'

// Autobuilt post, kept and rewritten against FACTS.md (section 11 framing, evidence and location
// rules). Removed: the alternative-medicine framing and diet guidance as care, a prevalence
// statistic and evidence claims, the city location, the fabricated pull quote and the invented
// publish date. The slug is kept; the title comes from lib/posts.ts (the brand word appears only
// in the practice name).

const SLUG = 'the-role-of-sleep-in-mental-health-and-wellness'
const post = getPost(SLUG)
// No image of its own: the conditions hub hero (a calm lake at dawn).
const image = imageFor('/conditions')

export const metadata = buildArticleMetadata({ slug: SLUG, title: post.title, description: post.description, image })

const RELATED = [
  { href: '/conditions/anxiety', label: 'Anxiety and panic' },
  { href: '/conditions/depression', label: 'Depression' },
  { href: '/services/supportive-therapy', label: 'Supportive therapy' },
]

export default function SleepAndMentalHealthPost() {
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
        Most of us know the foggy, short-fused feeling that follows a bad night. But sleep does more than set
        the tone for one day. Sleep and mental health are closely linked, and trouble with one often shows up in
        the other.
      </p>
      <p>
        Whether you are dealing with stress, anxiety or low mood, or you just want to feel steadier, your sleep is
        worth a closer look. Here is how the two connect, what to watch for, and habits that can help.
      </p>

      <h2>Sleep and mental health affect each other</h2>
      <p>
        The link runs both ways. Poor sleep can make anxiety, low mood and irritability harder to manage. And
        conditions like anxiety, depression and bipolar disorder often disrupt sleep: trouble falling asleep,
        waking in the night, waking too early, or sleeping far more than usual.
      </p>
      <p>
        That is one reason a psychiatric evaluation usually includes questions about your sleep. A change in
        sleep can be an early sign that something else is shifting, and sleeping better is often part of feeling
        better.
      </p>

      <h2>How sleep affects your mood and focus</h2>
      <p>
        Sleep is an active time for the brain. While you sleep, your brain processes the day&apos;s experiences
        and memories. When sleep is short or broken, many people notice they are more reactive, less patient,
        and less able to shake off stress.
      </p>
      <p>
        Short sleep also affects concentration, decision-making and motivation. If you already live with ADHD,
        anxiety or depression, those effects can pile on top of the symptoms you are already managing.
      </p>

      <Callout>
        <p>
          A change in your sleep is worth mentioning at a visit, even if it seems minor. It can be an early sign
          that something else is shifting.
        </p>
      </Callout>

      <h2>Sleep problems worth knowing about</h2>
      <p>
        <strong>Insomnia</strong> means ongoing trouble falling asleep, staying asleep, or waking too early, along
        with feeling unrested during the day. It often travels with anxiety and depression, and it can keep both
        going.
      </p>
      <p>
        <strong>Sleep apnea</strong> is a breathing problem during sleep that breaks up your rest. Loud snoring,
        gasping at night, morning headaches and heavy daytime sleepiness are common clues.
      </p>
      <p>
        <strong>Restless legs and body clock (circadian rhythm) problems</strong> can also cut into your sleep
        and leave you drained.
      </p>
      <p>
        If you suspect a physical sleep disorder like sleep apnea, talk with your primary care clinician about an
        evaluation. Many sleep disorders are treatable, and treating them can make mood and energy easier to
        manage too.
      </p>

      <h2>Habits that support better sleep</h2>
      <p>
        Good sleep habits, sometimes called sleep hygiene, will not fix everything, but they are a solid
        foundation. A few to try:
      </p>
      <ul>
        <li>
          <strong>Keep a steady schedule.</strong> Go to bed and get up around the same time every day, weekends
          included.
        </li>
        <li>
          <strong>Build a wind-down routine.</strong> Reading, a warm shower, gentle stretching or a few minutes
          of slow breathing can signal that the day is over.
        </li>
        <li>
          <strong>Make your bedroom sleep-friendly.</strong> Keep it cool, dark and quiet. Blackout curtains, an
          eye mask, earplugs or a fan can help.
        </li>
        <li>
          <strong>Set screens aside before bed.</strong> Phones and laptops keep your mind busy and the light
          keeps it alert. Give yourself some screen-free time before lights out.
        </li>
        <li>
          <strong>Watch caffeine and alcohol.</strong> Caffeine late in the day can keep you up, and alcohol tends
          to make sleep lighter and more broken later in the night.
        </li>
        <li>
          <strong>Move during the day.</strong> Regular physical activity can help you sleep, ideally not right
          before bed.
        </li>
        <li>
          <strong>Park your worries.</strong> If racing thoughts keep you up, try writing them down earlier in
          the evening, with one small next step for each.
        </li>
        <li>
          <strong>Get up if you cannot sleep.</strong> If you have been lying awake for a long time, get up, do
          something calm in dim light, and go back to bed when you feel sleepy.
        </li>
      </ul>

      <h2>When to get help</h2>
      <p>Consider talking with a professional if:</p>
      <ul>
        <li>You regularly have trouble falling or staying asleep, even with good habits</li>
        <li>Your sleep problems have lasted more than a few weeks</li>
        <li>Daytime tiredness is getting in the way of work, school or relationships</li>
        <li>Poor sleep comes with low mood, anxiety or mood swings</li>
        <li>
          You or a partner notice loud snoring, gasping or pauses in breathing at night (start with your primary
          care clinician)
        </li>
      </ul>
      <p>
        For long-standing insomnia, one option to ask about is cognitive behavioral therapy for insomnia
        (CBT-I), a structured therapy designed specifically for sleep problems.
      </p>

      <h2>How sleep fits into your care at {SITE_NAME}</h2>
      <p>
        {PROVIDER.byline}, works with adolescents and adults whose concerns include insomnia,{' '}
        <Link href="/conditions/anxiety">anxiety</Link>, <Link href="/conditions/depression">depression</Link>,
        stress and mood changes. At your{' '}
        <Link href="/services/psychiatric-evaluation">first visit</Link>, she takes time to learn about your
        history, symptoms, lifestyle and goals, and your sleep is part of that conversation.
      </p>
      <p>
        From there, your plan might include practical sleep strategies,{' '}
        <Link href="/services/supportive-therapy">supportive therapy</Link> techniques for stress and racing
        thoughts, and <Link href="/services/medication-management">medication</Link> if it makes sense for you.
        Medication is always optional.
      </p>
      <p>
        Prioritizing sleep is not self-indulgent. It is one of the most practical things you can do for your
        mental health: clearer thinking, steadier moods, and more room to handle whatever the day brings.
      </p>
    </ArticleLayout>
  )
}
