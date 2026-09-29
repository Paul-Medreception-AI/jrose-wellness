import type { Metadata } from 'next'
import Link from 'next/link'
import ArticleLayout, { Callout, buildArticleMetadata } from '@/components/blog/ArticleLayout'
import CrisisNotice from '@/components/site/CrisisNotice'
import { imageFor } from '@/lib/images'
import { CONTACT, PROVIDER, SITE_NAME } from '@/lib/site'

const SLUG = 'coping-strategies-for-managing-daily-anxiety'
const TITLE = 'Coping Strategies for Managing Daily Anxiety'
const DESCRIPTION =
  'Practical coping strategies for everyday anxiety, including breathing exercises, mindfulness, and daily habits that can help you feel steadier.'
const IMAGE = imageFor('/services/supportive-therapy')

export const metadata: Metadata = buildArticleMetadata({
  slug: SLUG,
  title: 'Coping Strategies for Daily Anxiety',
  description: DESCRIPTION,
  image: IMAGE,
})

export default function CopingWithAnxietyArticle() {
  return (
    <ArticleLayout
      slug={SLUG}
      title={TITLE}
      description={DESCRIPTION}
      image={IMAGE}
      category="Anxiety"
      related={[
        { href: '/conditions/anxiety', label: 'Anxiety & Panic' },
        { href: '/services/supportive-therapy', label: 'Supportive Therapy' },
        { href: '/blog/anxiety-vs-stress-how-to-tell-the-difference-and-when-to-see', label: 'Anxiety vs. Stress: How to Tell the Difference' },
        { href: '/blog/building-resilience-strengthening-your-mental-health-foundat', label: 'Building Resilience: Strengthening Your Mental Health Foundation' },
      ]}
    >
      <p>
        For many people, anxiety is a daily companion. It is the racing thoughts before a meeting, the knot in your
        stomach before a phone call, the loop of “what ifs” that keeps you up at night. These experiences are
        personal, and they are also very common.
      </p>
      <p>
        The good news is that anxiety can be managed. Below are practical tools you can start using today, plus signs
        that it is time to get more support.
      </p>

      <h2>Understanding daily anxiety</h2>
      <p>
        Daily anxiety can show up as constant worry, tension in your body, trouble concentrating, irritability, and
        poor sleep. Unlike occasional nerves, it tends to stick around and can wear on your work, relationships, and
        sense of well-being.
      </p>
      <p>
        Anxiety is a common human experience, not a personal failing. Seeing it that way is the first step toward
        managing it.
      </p>

      <h2>Breathing techniques that calm your body</h2>
      <p>
        When you are anxious, your breathing tends to get fast and shallow, which feeds the body’s alarm response.
        Slowing your breath on purpose tells your body it is safe to settle. A few to try:
      </p>
      <ul>
        <li>
          <strong>Belly breathing:</strong> put one hand on your chest and one on your belly. Breathe in slowly so
          that mostly your belly hand rises, then breathe out slowly.
        </li>
        <li>
          <strong>Box breathing:</strong> breathe in for a count of four, hold for four, breathe out for four, and hold
          for four. Repeat a few rounds.
        </li>
        <li>
          <strong>Longer exhale:</strong> breathe in through your nose, then let the breath out a little longer than
          you breathed in.
        </li>
      </ul>

      <blockquote>When you change your breathing, you can change how you feel.</blockquote>

      <h2>Grounding techniques for anxious moments</h2>
      <p>
        When anxiety spikes, grounding pulls your attention away from racing thoughts and back to the present moment.
      </p>
      <p>
        Try the 5-4-3-2-1 exercise: name 5 things you can see, 4 things you can touch, 3 things you can hear, 2 things
        you can smell, and 1 thing you can taste.
      </p>
      <p>
        Other options include splashing cool water on your face, progressive muscle relaxation (tensing and then
        releasing one muscle group at a time), or counting backward from 100 by sevens. Find the ones that work for
        you, and practice them before you need them.
      </p>

      <h2>Daily habits that help</h2>
      <p>Quick techniques help in the moment. Steady daily habits make anxiety easier to manage over time:</p>
      <ul>
        <li>
          <strong>Sleep:</strong> keep regular sleep and wake times, keep your bedroom cool and dark, and put screens
          away before bed. Poor sleep makes anxiety harder to handle.
        </li>
        <li>
          <strong>Movement:</strong> regular physical activity can ease tension and help you sleep. Pick something you
          enjoy so it sticks.
        </li>
        <li>
          <strong>Caffeine and alcohol:</strong> both can make anxiety and sleep worse. Notice how they affect you.
        </li>
        <li>
          <strong>Connection:</strong> isolation tends to make anxiety louder. Regular time with supportive people
          gives you perspective and a sense of belonging.
        </li>
      </ul>

      <h2>Rethinking anxious thoughts</h2>
      <p>
        Anxiety often runs on thinking traps: patterns of thought that do not match what is really happening.
        Cognitive behavioral techniques can help you spot and question them.
      </p>
      <p>
        Common traps include catastrophizing (jumping to the worst outcome), black-and-white thinking,
        overgeneralizing, and mind-reading (assuming you know what others think). When you notice an anxious thought,
        ask yourself:
      </p>
      <ul>
        <li>What evidence supports this thought? What evidence goes against it?</li>
        <li>What would I tell a friend who was thinking this?</li>
        <li>What is a more balanced way to see it?</li>
      </ul>
      <p>
        Writing anxious thoughts down and working through these questions puts a little distance between you and the
        thought. Over time, it gets easier to remember that thoughts are not facts.
      </p>

      <h2>Mindfulness and acceptance</h2>
      <p>
        Where cognitive techniques focus on changing thoughts, mindfulness is about noticing them without judgment.
        The goal is not to make anxiety disappear. It is to change your relationship with it, so you can notice
        anxious feelings without being swept away by them.
      </p>
      <p>
        Mindfulness can be formal meditation, but it can also be as simple as paying full attention while you walk,
        eat, or wash the dishes. Like exercise, it gets easier with practice. A few minutes a day is a fine start.
      </p>

      <h2>When to seek professional support</h2>
      <p>
        Self-help tools are valuable, but they are not always enough. Consider reaching out if anxiety gets in the way
        of work, relationships, or daily life; if you avoid important situations because of it; if you have panic
        attacks; or if anxiety comes with low mood, substance use, or thoughts of harming yourself.
      </p>
      <CrisisNotice variant="compact" />

      <Callout title={`Anxiety care at ${SITE_NAME}`}>
        <p>
          {PROVIDER.name}, a {PROVIDER.title.toLowerCase()}, treats anxiety, including panic and social anxiety, by
          secure video for patients in {CONTACT.state}.
        </p>
        <p>
          Visits include supportive therapy with the same kinds of tools in this article: cognitive behavioral
          techniques, mindfulness, and practical coping strategies. If medication could help, you talk it through
          together. Medication is optional. Learn more about <Link href="/conditions/anxiety">anxiety treatment</Link>.
        </p>
      </Callout>

      <h2>Be patient with yourself</h2>
      <p>
        Managing anxiety is a skill that grows with practice. Some days will be harder than others, and that is
        normal. What matters is having a set of tools to reach for, and the self-compassion to use them without
        judgment.
      </p>
      <p>
        If you would like help building that toolkit, <Link href="/book-appointment">book an appointment</Link>.
      </p>
    </ArticleLayout>
  )
}
