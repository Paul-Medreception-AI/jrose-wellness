import type { Metadata } from 'next'
import Link from 'next/link'
import ArticleLayout, { Callout, buildArticleMetadata } from '@/components/blog/ArticleLayout'
import CrisisNotice from '@/components/site/CrisisNotice'
import { imageFor } from '@/lib/images'
import { CONTACT, PROVIDER, SITE_NAME } from '@/lib/site'

const SLUG = 'anxiety-vs-stress-how-to-tell-the-difference-and-when-to-see'
const TITLE = 'Anxiety vs. Stress: How to Tell the Difference and When to Seek Help'
const DESCRIPTION =
  'The key differences between anxiety and stress, how each shows up in your body and mind, and signs it may be time to talk with a professional.'
const IMAGE = imageFor('/conditions/anxiety')

export const metadata: Metadata = buildArticleMetadata({
  slug: SLUG,
  title: 'Anxiety vs. Stress: How to Tell Them Apart',
  description: DESCRIPTION,
  image: IMAGE,
})

export default function AnxietyVsStressArticle() {
  return (
    <ArticleLayout
      slug={SLUG}
      title={TITLE}
      description={DESCRIPTION}
      image={IMAGE}
      category="Anxiety"
      related={[
        { href: '/conditions/anxiety', label: 'Anxiety & Panic' },
        { href: '/services/psychiatric-evaluation', label: 'Psychiatric Evaluation' },
        { href: '/blog/coping-strategies-for-managing-daily-anxiety', label: 'Coping Strategies for Managing Daily Anxiety' },
        { href: '/blog/addressing-burnout-more-than-just-stress', label: 'Addressing Burnout: More Than Just Stress' },
      ]}
    >
      <p>
        It is 2 a.m. and your mind is racing: tomorrow’s presentation, next month’s bills, a conversation from three
        weeks ago. Your heart pounds and your shoulders ache. Is this normal stress, or something more?
      </p>
      <p>
        Stress and anxiety can feel a lot alike. Both can bring racing thoughts, tension, and fatigue. But they are
        different experiences, and they call for different responses. Knowing which one you are dealing with is a
        good first step toward feeling better and knowing when to reach out.
      </p>

      <h2>What is stress?</h2>
      <p>
        Stress is your body’s response to outside demands or pressure. It is usually tied to something specific: a
        deadline, money worries, a conflict, or a big change like a move, a new job, or a loss. When the pressure
        eases, stress usually eases too.
      </p>
      <p>
        In small doses, stress can even help. It pushes you to meet deadlines and rise to a challenge. The trouble
        starts when stress becomes chronic and your body stays on high alert with no break.
      </p>

      <h2>What is anxiety?</h2>
      <p>
        Anxiety is more internal. It is ongoing worry, fear, or dread that feels bigger than the situation calls for.
        It does not always need an outside trigger. It can show up out of nowhere and stick around even when life is
        fairly calm.
      </p>
      <p>
        People with anxiety often describe expecting the worst, even when there is little reason to. The worry is hard
        to switch off and can get in the way of work, relationships, and sleep.
      </p>
      <p>
        Everyone feels anxious sometimes. Anxiety disorders, such as generalized anxiety disorder (GAD), panic
        disorder, or social anxiety disorder, sit at the far end of that range, where symptoms become frequent,
        intense, and hard to live with.
      </p>

      <blockquote>
        Stress is usually tied to a specific situation. Anxiety lingers, even when the stressor is gone, or when there
        was never a clear stressor at all.
      </blockquote>

      <h2>Key differences between stress and anxiety</h2>
      <ul>
        <li>
          <strong>Trigger:</strong> stress has a clear cause. Anxiety may not have an obvious one.
        </li>
        <li>
          <strong>How long it lasts:</strong> stress tends to fade when the situation improves. Anxiety can persist
          when life is stable.
        </li>
        <li>
          <strong>Focus:</strong> stress is usually about right now (“I have too much to do”). Anxiety is often about
          the future (“What if something terrible happens?”).
        </li>
        <li>
          <strong>Symptoms:</strong> both cause tension and restlessness, but anxiety is more likely to include panic
          attacks, intrusive thoughts, and avoiding situations.
        </li>
        <li>
          <strong>Effect on you:</strong> a little stress can motivate you. Anxiety rarely does, and it can make
          decisions feel impossible.
        </li>
      </ul>

      <h2>Physical and emotional signs</h2>
      <p>Stress and anxiety share many signs, including:</p>
      <ul>
        <li>Muscle tension, especially in the neck, shoulders, and jaw</li>
        <li>Headaches</li>
        <li>Stomach trouble, such as nausea or an upset stomach</li>
        <li>Trouble falling or staying asleep</li>
        <li>Irritability, restlessness, or feeling on edge</li>
        <li>Trouble concentrating</li>
        <li>Fatigue</li>
      </ul>
      <p>Signs that point more toward anxiety include:</p>
      <ul>
        <li>Intense worry that is hard to control</li>
        <li>
          Panic attacks: sudden waves of fear with physical symptoms like a pounding heart, dizziness, or shortness of
          breath
        </li>
        <li>Avoiding places, people, or situations because of anxious feelings</li>
        <li>Racing or intrusive thoughts</li>
        <li>A constant sense of dread</li>
      </ul>
      <p>
        Chest pain or trouble breathing can have medical causes too, so get new or severe symptoms checked by a
        medical professional.
      </p>

      <h2>When to seek professional help</h2>
      <p>
        Many people wave off their symptoms and tell themselves they should handle it alone. Asking for help is a
        sign of strength, and reaching out sooner can keep things from getting harder. Consider talking with a
        professional if:
      </p>
      <ul>
        <li>Your symptoms have lasted more than a few weeks</li>
        <li>Your worry feels out of proportion to what is going on</li>
        <li>You avoid activities, places, or people because of anxiety</li>
        <li>Your symptoms get in the way of work, school, relationships, or daily life</li>
        <li>You have panic attacks</li>
        <li>You are turning to alcohol or other substances to cope</li>
        <li>You have thoughts of harming yourself</li>
      </ul>
      <CrisisNotice variant="compact" />

      <Callout title={`Anxiety care at ${SITE_NAME}`}>
        <p>
          {PROVIDER.name}, a {PROVIDER.title.toLowerCase()}, treats anxiety, including panic and social anxiety, by
          secure video for patients in {CONTACT.state}. Your first visit is a psychiatric evaluation that looks at
          your symptoms, history, and goals.
        </p>
        <p>
          Care can include supportive therapy with cognitive behavioral techniques, mindfulness, and practical coping
          strategies, plus medication management if it makes sense for you. Medication is optional. Learn more about{' '}
          <Link href="/conditions/anxiety">anxiety treatment</Link>.
        </p>
      </Callout>

      <h2>Practical steps you can take today</h2>
      <p>Whether you are dealing with stress, anxiety, or both, these steps can help:</p>
      <ul>
        <li>
          <strong>Breathe slowly.</strong> Slow breaths from your belly, with a longer exhale than inhale, help your
          body settle.
        </li>
        <li>
          <strong>Move your body.</strong> Regular movement can ease tension and help you sleep.
        </li>
        <li>
          <strong>Go easy on caffeine and alcohol.</strong> Both can make anxiety and sleep worse.
        </li>
        <li>
          <strong>Protect your sleep.</strong> Keep a regular bedtime and wake time. Poor sleep makes stress and
          anxiety harder to manage.
        </li>
        <li>
          <strong>Stay connected.</strong> Talking with people you trust helps. Try not to pull away.
        </li>
        <li>
          <strong>Set boundaries.</strong> Say no to commitments that drain you, and protect time to rest.
        </li>
        <li>
          <strong>Question worst-case thinking.</strong> When your thoughts spiral, ask: What evidence do I have? What
          would I tell a friend?
        </li>
      </ul>

      <h2>You do not have to sort this out alone</h2>
      <p>
        Stress and anxiety both deserve attention. Noticing when everyday stress has turned into something more
        persistent can be the turning point toward relief.
      </p>
      <p>
        If anxiety is affecting your quality of life, reaching out is an act of self-compassion.{' '}
        <Link href="/book-appointment">Book an appointment</Link> to talk it through.
      </p>
    </ArticleLayout>
  )
}
