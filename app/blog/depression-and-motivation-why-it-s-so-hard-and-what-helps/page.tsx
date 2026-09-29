import type { Metadata } from 'next'
import Link from 'next/link'
import ArticleLayout, { Callout, buildArticleMetadata } from '@/components/blog/ArticleLayout'
import CrisisNotice from '@/components/site/CrisisNotice'
import { imageFor } from '@/lib/images'
import { CONTACT, PRACTICE_FAQS, PROVIDER, SITE_NAME } from '@/lib/site'

const SLUG = 'depression-and-motivation-why-it-s-so-hard-and-what-helps'
const TITLE = "Depression and Motivation: Why It's So Hard and What Helps"
const DESCRIPTION =
  'Why depression can make simple tasks feel impossible, and small, realistic steps that can help you move forward when your motivation is low.'
const IMAGE = imageFor('/conditions/depression')

const MED_OPTIONAL = PRACTICE_FAQS.find((f) => f.q === "What if I don't want to take medication?")!

export const metadata: Metadata = buildArticleMetadata({
  slug: SLUG,
  title: 'Depression and Motivation: What Helps',
  description: DESCRIPTION,
  image: IMAGE,
})

export default function DepressionMotivationArticle() {
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
        { href: '/blog/managing-seasonal-depression-and-winter-blues', label: 'Managing Seasonal Depression and Winter Blues' },
      ]}
    >
      <p>
        You know you need to get out of bed. The laundry is piling up, the emails are waiting, and friends keep asking
        how you are. But doing any of it feels like moving a mountain with your bare hands.
      </p>
      <p>
        That is not laziness, and it is not weakness. When you are living with depression, motivation does not just
        dip. It can seem to disappear. Understanding why, and what actually helps, can be the first step forward.
      </p>

      <CrisisNotice variant="compact" />

      <h2>Why depression drains your motivation</h2>
      <p>
        Depression is more than sadness. It affects the systems in your brain and body that drive motivation,
        pleasure, and energy. A few things tend to happen at once:
      </p>
      <ul>
        <li>
          <strong>Less sense of reward.</strong> Things that used to feel good or exciting can feel flat, so there is
          less pulling you toward them.
        </li>
        <li>
          <strong>Harder planning and decisions.</strong> Depression can make it hard to plan, choose, and get
          started. Even small decisions can feel overwhelming.
        </li>
        <li>
          <strong>Low energy.</strong> Fatigue, poor sleep, and changes in appetite often come with depression. When
          your body is exhausted, everything takes more effort, and the cycle feeds itself.
        </li>
      </ul>

      <blockquote>
        Depression changes how effort and reward feel. Knowing that can help you meet yourself with more compassion
        and more realistic expectations.
      </blockquote>

      <h2>Why “just push through it” does not work</h2>
      <p>
        One of the most harmful myths about depression is that you can simply will your way out of it. Friends may
        mean well when they say “think positive” or “just do it anyway,” but advice that comes with shame or force
        tends to backfire.
      </p>
      <p>
        Telling someone with depression to try harder is like telling someone with a broken leg to walk it off. The
        symptoms are real, and they deserve real care. Forcing yourself to keep a pace you cannot sustain often ends
        in more exhaustion and a deeper sense of failure.
      </p>

      <h2>Action often comes before motivation</h2>
      <p>
        When you are depressed, it makes sense to wait until you feel motivated before doing something. But it often
        works the other way around: <strong>small actions come first, and motivation follows.</strong>
      </p>
      <p>
        This idea is at the heart of an approach called behavioral activation. Instead of waiting for motivation to
        return, you gradually add small, doable activities that have a chance of lifting your mood. The key is making
        each step small enough that you can succeed.
      </p>

      <h2>What helps</h2>
      <ul>
        <li>
          <strong>Start very small.</strong> Instead of “exercise for 30 minutes,” try “put on my shoes” or “walk to the
          mailbox.” Count those wins.
        </li>
        <li>
          <strong>Schedule things you used to enjoy.</strong> Put them on your calendar even if you do not feel like
          it. The feeling can come later.
        </li>
        <li>
          <strong>Protect your sleep routine.</strong> Keep regular sleep and wake times, limit screens before bed, and
          build a calming wind-down.
        </li>
        <li>
          <strong>Stay in touch.</strong> Isolation feeds depression. A short text exchange or a walk with a friend
          counts.
        </li>
        <li>
          <strong>Get professional support.</strong> Therapy and, when it fits, medication can help. Depression is a
          health condition, and it can be treated.
        </li>
        <li>
          <strong>Practice self-compassion.</strong> Being hard on yourself for low motivation only adds weight.
          Treat yourself the way you would treat a friend going through the same thing.
        </li>
      </ul>

      <h2>When to seek professional help</h2>
      <p>
        If you have been dealing with low mood, loss of interest, changes in sleep or appetite, feelings of
        worthlessness, or thoughts of harming yourself, it is important to reach out. You do not have to wait until it
        gets worse. A mental health professional can:
      </p>
      <ul>
        <li>Look at your full history, including sleep, stress, medical history, and any medications you take</li>
        <li>Help you understand what you are experiencing and whether it is depression</li>
        <li>Build a plan with you that may include therapy, medication, daily routines, or a mix</li>
        <li>Follow up with you and adjust the plan as needed</li>
      </ul>
      <p>Asking for help is not a sign of weakness. It is a sign of strength and self-awareness.</p>

      <Callout title={`Depression care at ${SITE_NAME}`}>
        <p>
          {PROVIDER.name}, a {PROVIDER.title.toLowerCase()}, treats depression by secure video for patients in{' '}
          {CONTACT.state}. Care starts with a psychiatric evaluation, then may include supportive therapy and
          medication management, with regular follow-up visits to keep the plan on track.
        </p>
        <p>
          Not sure about medication? In Jessica’s words: “{MED_OPTIONAL.a}” Learn more about{' '}
          <Link href="/conditions/depression">depression treatment</Link>.
        </p>
      </Callout>

      <h2>One small step at a time</h2>
      <p>
        Low motivation with depression can feel like a knot you cannot untangle. With understanding, support, and
        small steps, it can loosen. Progress may be slow, and there will be setbacks, but each step counts.
      </p>
      <p>
        You do not have to figure this out alone. When you are ready,{' '}
        <Link href="/book-appointment">book an appointment</Link>.
      </p>
    </ArticleLayout>
  )
}
