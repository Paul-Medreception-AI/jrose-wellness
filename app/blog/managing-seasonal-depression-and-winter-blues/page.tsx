import type { Metadata } from 'next'
import Link from 'next/link'
import ArticleLayout, { Callout, buildArticleMetadata } from '@/components/blog/ArticleLayout'
import CrisisNotice from '@/components/site/CrisisNotice'
import { imageFor } from '@/lib/images'
import { CONTACT, PROVIDER, SITE_NAME } from '@/lib/site'

const SLUG = 'managing-seasonal-depression-and-winter-blues'
const TITLE = 'Managing Seasonal Depression and Winter Blues'
const DESCRIPTION =
  'How to tell the winter blues from seasonal depression, practical ways to cope with shorter days, and when to reach out for professional help.'
const IMAGE = imageFor('/faq')

export const metadata: Metadata = buildArticleMetadata({
  slug: SLUG,
  title: 'Seasonal Depression and the Winter Blues',
  description: DESCRIPTION,
  image: IMAGE,
})

export default function SeasonalDepressionArticle() {
  return (
    <ArticleLayout
      slug={SLUG}
      title={TITLE}
      description={DESCRIPTION}
      image={IMAGE}
      category="Depression"
      related={[
        { href: '/conditions/depression', label: 'Depression Treatment' },
        { href: '/services/medication-management', label: 'Medication Management' },
        { href: '/blog/managing-depression-beyond-medication', label: 'Managing Depression: Beyond Medication' },
        { href: '/blog/depression-and-motivation-why-it-s-so-hard-and-what-helps', label: "Depression and Motivation: Why It's So Hard and What Helps" },
      ]}
    >
      <p>
        As the days get shorter, many people notice a shift in their mood and energy. For some, it is a mild slump.
        For others, it is a real depression that arrives with the darker months and lifts in spring.
      </p>
      <p>
        If you feel persistently sad, tired, or withdrawn every winter, you are not alone, and there are practical
        ways to cope.
      </p>

      <CrisisNotice variant="compact" />

      <h2>What is seasonal depression?</h2>
      <p>
        Seasonal affective disorder (SAD) is a type of depression that follows a seasonal pattern. It most often shows
        up in fall and winter, when daylight is shortest. It is a recognized condition, not just a case of the
        “winter blues.”
      </p>
      <p>
        Less daylight can throw off your body’s internal clock, which affects sleep, energy, and mood. That is one
        reason symptoms tend to track the seasons.
      </p>

      <h2>Winter blues or seasonal depression?</h2>
      <p>
        The winter blues are common and fairly mild: you might feel a bit low, crave comfort, and want to stay in. You
        can still do what you need to do. Seasonal depression is heavier. It gets in the way of work, relationships,
        and daily life, and it tends to come back around the same time each year.
      </p>

      <h2>Recognizing the signs</h2>
      <p>
        Seasonal depression can look a little different from other kinds of depression. Instead of sleeping less and
        eating less, many people with winter-pattern depression do the opposite. Common signs include:
      </p>
      <ul>
        <li>Low mood or hopelessness that shows up as the days get shorter</li>
        <li>Sleeping more than usual, or having a hard time getting up</li>
        <li>Craving starchy or sweet foods, and weight changes</li>
        <li>Fatigue and low energy, even after plenty of sleep</li>
        <li>Pulling away from people and losing interest in things you usually enjoy</li>
        <li>Trouble concentrating or finishing tasks</li>
      </ul>
      <p>
        If you notice the same pattern year after year, it is worth bringing up with a clinician.
      </p>

      <h2>About light therapy</h2>
      <p>
        Light therapy, using a light box made for this purpose, is a common treatment for seasonal depression. It
        usually means sitting near the light for a set time each morning while you read, eat breakfast, or work.
      </p>
      <p>
        It is not right for everyone. Certain eye conditions, some medications, and some mood conditions, including
        bipolar disorder, call for extra care. Talk with a clinician before you start, so you can choose a device and a
        routine that are safe for you.
      </p>

      <blockquote>
        Seasonal depression is a real health condition, not a character flaw or something you just need to get over.
      </blockquote>

      <h2>Everyday strategies that help</h2>
      <p>These work best when you keep them up, and ideally start before your symptoms usually begin.</p>
      <ul>
        <li>
          <strong>Get more daylight.</strong> Spend time outside during the day, even when it is cloudy. Morning light
          is especially helpful for your sleep and wake rhythm. Indoors, open the blinds and sit near a window.
        </li>
        <li>
          <strong>Keep moving.</strong> Regular activity can lift your mood, and exercising outdoors in daylight gives
          you both at once. A brisk walk counts.
        </li>
        <li>
          <strong>Keep a steady sleep schedule.</strong> Seasonal depression can make you want to sleep more. Going to
          bed and waking up at the same time each day, weekends included, helps keep your rhythm on track.
        </li>
        <li>
          <strong>Stay connected.</strong> The pull to hibernate can deepen low mood. Make plans with friends and
          family, even when you do not feel like it. Often the dread beforehand is worse than the plan itself.
        </li>
        <li>
          <strong>Plan things to look forward to.</strong> A regular class, a standing call, or a winter outing can
          give the season some shape.
        </li>
      </ul>

      <h2>When to seek professional help</h2>
      <p>
        Self-care can go a long way for mild seasonal slumps. Reach out to a professional if your symptoms get in the
        way of daily life, if you have thoughts of harming yourself, or if self-help has not helped after a few weeks.
      </p>
      <p>
        Treatment for seasonal depression may include therapy that uses cognitive behavioral techniques, medication,
        light therapy, or a combination. If your low mood follows a clear seasonal pattern, it is worth planning ahead
        with your clinician before the darker months arrive.
      </p>

      <Callout title={`Depression care at ${SITE_NAME}`}>
        <p>
          {PROVIDER.name}, a {PROVIDER.title.toLowerCase()}, treats depression by secure video for patients in{' '}
          {CONTACT.state}, so you can get care from home on the darkest, coldest days.
        </p>
        <p>
          Care can include supportive therapy, medication management if you choose it, and regular follow-ups. Learn
          more about <Link href="/conditions/depression">depression treatment</Link>.
        </p>
      </Callout>

      <h2>Looking toward brighter days</h2>
      <p>
        With the right mix of daylight, routines, and support when you need it, winter does not have to be a season
        you just survive.
      </p>
      <p>
        If seasonal changes are affecting your daily life, do not wait until symptoms get severe. Getting support
        early can make the season easier. <Link href="/book-appointment">Book an appointment</Link> to talk it
        through.
      </p>
    </ArticleLayout>
  )
}
