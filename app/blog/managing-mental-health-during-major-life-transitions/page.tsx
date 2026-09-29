import type { Metadata } from 'next'
import Link from 'next/link'
import ArticleLayout, { Callout, buildArticleMetadata } from '@/components/blog/ArticleLayout'
import CrisisNotice from '@/components/site/CrisisNotice'
import { imageFor } from '@/lib/images'
import { CONTACT, PROVIDER, SITE_NAME } from '@/lib/site'

const SLUG = 'managing-mental-health-during-major-life-transitions'
const TITLE = 'Managing Mental Health During Major Life Transitions'
const DESCRIPTION =
  'How big life changes can affect your mental health, and practical ways to protect your well-being through a move, a new job, a loss, or a new chapter.'
const IMAGE = imageFor('/who-we-help/adults')

export const metadata: Metadata = buildArticleMetadata({
  slug: SLUG,
  title: 'Mental Health During Major Life Transitions',
  description: DESCRIPTION,
  image: IMAGE,
})

export default function LifeTransitionsArticle() {
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
        { href: '/blog/addressing-burnout-more-than-just-stress', label: 'Addressing Burnout: More Than Just Stress' },
        { href: '/blog/building-resilience-strengthening-your-mental-health-foundat', label: 'Building Resilience: Strengthening Your Mental Health Foundation' },
      ]}
    >
      <p>
        A new job, a move, a breakup, a new baby, retirement, a loss. Big life changes shape who we are, and even the
        good ones can stir up a lot underneath the excitement or relief.
      </p>
      <p>
        Every transition involves some loss. You are leaving behind familiar routines that gave your days structure
        and comfort. That can bring stress, anxiety, and uncertainty, whether you chose the change or it was thrust on
        you. Knowing these feelings are a normal part of change is the first step toward managing them.
      </p>

      <h2>Why transitions are hard on your mental health</h2>
      <p>
        Change, even change you wanted, can be one of the most stressful things you go through. Divorce, a new job,
        and a move are familiar examples.
      </p>
      <p>
        Part of the reason is routine. Familiar routines let you get through the day on autopilot. When a transition
        disrupts them, your mind has to work harder to take in new information, build new habits, and reset
        expectations. That extra load can show up as mental fatigue, trouble concentrating, and a shorter fuse.
      </p>
      <p>
        Transitions can also shake your sense of who you are. Much of how we see ourselves is tied to our roles,
        relationships, and surroundings. When those shift, it is common to feel unsure of yourself for a while.
      </p>

      <h2>Common reactions to change</h2>
      <p>Knowing what is normal can ease the extra worry about how you are reacting. During a big change you might notice:</p>
      <ul>
        <li>
          <strong>Anxiety and worry</strong> about the unknown, about making the right choices, or about failing in
          your new situation
        </li>
        <li>
          <strong>Grief and sadness</strong> for what you are leaving behind, even when the change is a good one
        </li>
        <li>
          <strong>Irritability and mood swings</strong> as you cope with more stress than usual
        </li>
        <li>
          <strong>Physical changes</strong> in sleep, appetite, and energy
        </li>
        <li>
          <strong>Pulling back from people</strong> while you process what is happening
        </li>
        <li>
          <strong>Trouble making decisions</strong> when your mental energy is already stretched
        </li>
      </ul>
      <p>
        Mild to moderate reactions that ease as you settle in are typical. Reactions that are severe, keep going, or
        get in the way of daily life are a reason to get support.
      </p>

      <h2>Strategies for getting through change</h2>
      <ul>
        <li>
          <strong>Name your feelings.</strong> Pushing feelings down tends to make them louder. Try naming what you
          feel, without judging it. Putting a feeling into words can take some of the edge off.
        </li>
        <li>
          <strong>Keep some anchors.</strong> When a lot is changing, hold on to what you can: your morning routine,
          old friendships, a regular walk. These anchors give you a sense of continuity.
        </li>
        <li>
          <strong>Practice self-compassion.</strong> Change comes with mistakes, awkward moments, and a learning curve.
          Treat yourself the way you would treat a friend going through the same thing.
        </li>
        <li>
          <strong>Set realistic expectations.</strong> Adjusting takes time, often longer than you expect. Discomfort
          now does not mean you made the wrong choice.
        </li>
      </ul>

      <h2>Building your support system</h2>
      <p>
        Support from other people matters a great deal during transitions, but reaching out can be hard when you
        already feel stretched thin. A few ideas:
      </p>
      <ul>
        <li>Tell people specifically what would help, instead of waiting for them to guess</li>
        <li>Talk with others who have been through a similar change</li>
        <li>Look for a support group, in your community or online, focused on your type of transition</li>
        <li>Consider professional support, even if you do not have a diagnosis</li>
      </ul>

      <h2>Small daily practices</h2>
      <ul>
        <li>
          <strong>Cover the basics.</strong> Protect your sleep, eat regular meals, and move your body. When your mind
          is stretched, how your body feels has an even bigger effect on your mood.
        </li>
        <li>
          <strong>Create structure.</strong> When outside structure changes, build some of your own: a morning
          routine, set work hours, or a weekly plan with a friend. Structure cuts down on decisions and gives you a
          sense of control.
        </li>
        <li>
          <strong>Try mindfulness or grounding.</strong> Transitions can keep your mind bouncing between the past and
          the future. Mindfulness brings you back to the present, where you have the most say.
        </li>
        <li>
          <strong>Write it down.</strong> Journaling about the hard parts and the new possibilities can help you sort
          out your thoughts and see how far you have come.
        </li>
      </ul>

      <h2>When to seek professional help</h2>
      <p>Some distress during a transition is normal. Consider talking with a professional if you notice:</p>
      <ul>
        <li>Symptoms that get worse over time instead of slowly easing</li>
        <li>Trouble with basics like work, self-care, or keeping up relationships</li>
        <li>Thoughts of harming yourself</li>
        <li>Turning to alcohol or other substances to cope</li>
        <li>Pulling away from everyone, or losing important relationships</li>
        <li>Physical symptoms that affect your quality of life</li>
      </ul>
      <CrisisNotice variant="compact" />

      <Callout title={`How ${SITE_NAME} can help`}>
        <p>
          Life transitions, stress, relationship challenges, and self-esteem are among the clinical interests of{' '}
          {PROVIDER.name}, a {PROVIDER.title.toLowerCase()}. Visits happen by secure video for patients in{' '}
          {CONTACT.state}.
        </p>
        <p>
          Care can include supportive therapy with cognitive behavioral techniques, mindfulness, and practical coping
          strategies, and medication management if anxiety or depression is part of the picture. Learn more about{' '}
          <Link href="/conditions/burnout-life-transitions">care for burnout and life transitions</Link>.
        </p>
      </Callout>

      <h2>Finding growth in change</h2>
      <p>
        Transitions are hard, and they can also open doors. When familiar patterns are disrupted, you get to choose
        which ones to rebuild and which to leave behind. You may discover strengths you did not know you had, get
        clearer on what matters to you, or make new connections.
      </p>
      <p>
        The goal is not to rush through a transition or erase every uncomfortable feeling. It is to move through it
        with awareness, self-compassion, and the right support. If you would like help with that,{' '}
        <Link href="/book-appointment">book an appointment</Link>.
      </p>
    </ArticleLayout>
  )
}
