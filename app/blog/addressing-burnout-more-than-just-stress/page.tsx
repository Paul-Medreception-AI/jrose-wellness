import type { Metadata } from 'next'
import Link from 'next/link'
import ArticleLayout, { Callout, buildArticleMetadata } from '@/components/blog/ArticleLayout'
import { imageFor } from '@/lib/images'
import { CONTACT, PROVIDER, SITE_NAME } from '@/lib/site'

const SLUG = 'addressing-burnout-more-than-just-stress'
const TITLE = 'Addressing Burnout: More Than Just Stress'
const DESCRIPTION =
  'How burnout differs from everyday stress, the warning signs to watch for, and practical steps to recover your energy and balance at work and at home.'
const IMAGE = imageFor('/conditions/burnout-life-transitions')

export const metadata: Metadata = buildArticleMetadata({
  slug: SLUG,
  title: 'Burnout vs. Stress: Signs and What Helps',
  description: DESCRIPTION,
  image: IMAGE,
})

export default function BurnoutArticle() {
  return (
    <ArticleLayout
      slug={SLUG}
      title={TITLE}
      description={DESCRIPTION}
      image={IMAGE}
      category="Wellbeing"
      related={[
        { href: '/conditions/burnout-life-transitions', label: 'Burnout & Life Transitions' },
        { href: '/services/supportive-therapy', label: 'Supportive Therapy' },
        { href: '/blog/managing-mental-health-during-major-life-transitions', label: 'Managing Mental Health During Major Life Transitions' },
        { href: '/blog/building-resilience-strengthening-your-mental-health-foundat', label: 'Building Resilience: Strengthening Your Mental Health Foundation' },
      ]}
    >
      <p>
        You wake up tired after a full night’s sleep. Work you used to care about feels like a treadmill. You snap
        at the people you love over small things, and “running on empty” has started to feel normal.
      </p>
      <p>
        If that sounds familiar, you may be dealing with burnout. It goes beyond ordinary stress, and it deserves
        real attention. Many people write it off as stress and keep pushing, so the warning signs get missed until
        something gives. Knowing the difference helps you respond sooner.
      </p>

      <h2>What is burnout, really?</h2>
      <p>
        Burnout is emotional, physical, and mental exhaustion that builds up when stress goes on too long. Ordinary
        stress usually has a clear cause and eases once the pressure passes. Burnout creeps in over months, sometimes
        years, until it changes how you feel about your work and your life.
      </p>
      <p>
        It is often described in three parts: exhaustion, feeling detached or cynical about your work, and a sense
        that nothing you do makes a difference. Put simply, you feel drained, you stop caring, and you wonder whether
        any of it matters.
      </p>
      <p>
        Stress tends to feel like <em>too much</em>: too many demands, too much urgency. Burnout tends to feel like{' '}
        <em>not enough</em>: not enough energy, meaning, or hope. That difference matters, because what helps is
        different too.
      </p>

      <blockquote>
        Burnout is not a sign of weakness or failure. It is a signal that something in your life needs to change.
      </blockquote>

      <h2>Recognizing the warning signs</h2>
      <p>Burnout looks different from person to person, but these patterns are common:</p>
      <ul>
        <li>
          <strong>In your body:</strong> tiredness that rest does not fix, headaches, tension you carry all day, and
          trouble sleeping.
        </li>
        <li>
          <strong>In your emotions:</strong> numbness or detachment, irritability, cynicism, or a sense of
          helplessness. Many people say they feel like they are just going through the motions.
        </li>
        <li>
          <strong>In your thinking:</strong> trouble concentrating, harder decisions, and mistakes that are not like
          you. Simple tasks can feel impossible to start.
        </li>
        <li>
          <strong>In what you do:</strong> pulling away from people and responsibilities, putting things off, or
          leaning on food, alcohol, or other substances to cope.
        </li>
      </ul>

      <h2>Who is at risk?</h2>
      <p>
        Burnout is often linked with caregiving work such as healthcare and teaching, but anyone under long-term
        pressure at work or at home can burn out, including parents, caregivers, and students. A few things raise the
        risk:
      </p>
      <ul>
        <li>Heavy responsibilities with little control over decisions or outcomes</li>
        <li>Little recognition, or no clear picture of what success looks like</li>
        <li>Not enough resources, or a workplace that clashes with your values</li>
        <li>Perfectionism, trouble setting boundaries, or always putting other people’s needs first</li>
        <li>Tying your whole sense of who you are to your work</li>
      </ul>

      <h2>Practical steps toward recovery</h2>
      <p>
        Recovering from burnout takes more than a vacation. It starts with an honest look at what is not working and
        a willingness to change some of it. These steps can help:
      </p>
      <ul>
        <li>
          <strong>Set firm boundaries.</strong> Say no to what is not essential, and protect time for rest the way you
          protect a deadline. That is not selfish. It is how you keep going.
        </li>
        <li>
          <strong>Take care of the basics.</strong> A regular sleep schedule, movement you enjoy, and regular meals
          give you more to work with on hard days.
        </li>
        <li>
          <strong>Reconnect with what matters.</strong> Think about what drew you to your work or commitments in the
          first place. Burnout can be a sign you have drifted from your own values.
        </li>
        <li>
          <strong>Lean on people.</strong> Burnout grows in isolation. Reach out to friends, family, or colleagues you
          trust.
        </li>
        <li>
          <strong>Slow down on purpose.</strong> A few minutes of mindfulness or slow breathing each day can help you
          notice stress before it piles up.
        </li>
        <li>
          <strong>Get professional support.</strong> Cognitive behavioral techniques can help you spot unhelpful
          thought patterns and build better ways to cope.
        </li>
      </ul>

      <h2>When burnout overlaps with anxiety or depression</h2>
      <p>
        Burnout is not a diagnosis on its own, but it often travels with{' '}
        <Link href="/conditions/anxiety">anxiety</Link> or <Link href="/conditions/depression">depression</Link>, and
        the signs can blur together. If the exhaustion, low mood, or worry does not lift with rest or time off, or it
        is affecting your sleep, relationships, or ability to get through the day, it is a good time to get an
        evaluation.
      </p>

      <Callout title={`How ${SITE_NAME} can help`}>
        <p>
          Stress and burnout are among the clinical interests of {PROVIDER.name}, a{' '}
          {PROVIDER.title.toLowerCase()}. Visits happen by secure video for patients in {CONTACT.state}.
        </p>
        <p>
          Your first visit looks at your stressors, sleep, work, relationships, and goals, and checks whether anxiety
          or depression is part of the picture. Care can include supportive therapy with cognitive behavioral
          techniques, mindfulness, and practical coping strategies. If medication would help, you decide together. It
          is always your choice.
        </p>
        <p>
          Learn more about <Link href="/conditions/burnout-life-transitions">burnout and life transitions care</Link>.
        </p>
      </Callout>

      <h2>Moving forward</h2>
      <p>
        Recovery from burnout takes time. Be patient with yourself. Progress is rarely a straight line, and a setback
        does not mean you have failed. What matters is noticing where you are, taking it seriously, and choosing
        changes you can keep up instead of just powering through.
      </p>
      <p>
        Sometimes recovery means harder decisions, like changing jobs, renegotiating commitments, or rethinking how
        you spend your time and energy. Those choices are not easy, but they are often worth it.
      </p>
      <p>
        You are not alone, and help is available. If you are ready to talk it through,{' '}
        <Link href="/book-appointment">book an appointment</Link>.
      </p>
    </ArticleLayout>
  )
}
