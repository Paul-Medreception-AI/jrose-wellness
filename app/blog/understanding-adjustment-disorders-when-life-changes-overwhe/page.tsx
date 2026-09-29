import Link from 'next/link'
import ArticleLayout, { Callout, buildArticleMetadata } from '@/components/blog/ArticleLayout'
import CrisisNotice from '@/components/site/CrisisNotice'
import { imageFor } from '@/lib/images'
import { getPost, postHref } from '@/lib/posts'
import { SITE_NAME } from '@/lib/site'

// Autobuilt post, kept and rewritten against FACTS.md (section 11 framing, evidence and location
// rules). Removed: the alternative-medicine framing, a prevalence statistic and evidence claims,
// the recovery-time promise, the city location, and the invented date and team byline. Added the
// crisis note (the post mentions thoughts of self-harm).

const SLUG = 'understanding-adjustment-disorders-when-life-changes-overwhe'
const post = getPost(SLUG)
const image = imageFor('/conditions/burnout-life-transitions')

export const metadata = buildArticleMetadata({
  slug: SLUG,
  title: 'Understanding Adjustment Disorders',
  description: post.description,
  image,
})

const RELATED = [
  { href: '/conditions/burnout-life-transitions', label: 'Burnout and life transitions' },
  { href: '/services/supportive-therapy', label: 'Supportive therapy' },
  { href: postHref('when-worry-becomes-problematic-recognizing-generalized-anxie'), label: 'When worry becomes a problem' },
]

export default function AdjustmentDisordersPost() {
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
        A new job. A breakup or divorce. The loss of someone you love. A move. Change is part of life, but some
        changes knock you off balance harder, or for longer, than you expected.
      </p>
      <p>
        When the stress of a change starts getting in the way of daily life, it may be an adjustment disorder.
        It is a common and often misunderstood condition, and many people are unsure whether what they feel is
        &quot;normal&quot; or worth getting help for. Here is what the term means and what can help.
      </p>

      <h2>What is an adjustment disorder?</h2>
      <p>
        An adjustment disorder is a stress-related condition. It happens when your emotional or behavioral
        reaction to a specific stressor is stronger than expected, or when it makes it hard to keep up with
        work, school, relationships or everyday tasks.
      </p>
      <p>
        Symptoms usually start within a few months of the change. They often ease as you adapt or as the
        stressor resolves, but they can linger when the stress is ongoing, such as a long illness or continuing
        money problems.
      </p>
      <p>
        It looks different from person to person. For some people it is mostly low mood. For others it is
        mostly anxiety, a mix of both, or changes in behavior.
      </p>

      <h2>Common triggers</h2>
      <p>Almost any major change can be a trigger, including:</p>
      <ul>
        <li>Relationship changes, such as a breakup, a divorce or ongoing conflict at home</li>
        <li>Work and school changes, such as a job loss, a new role, retirement or starting college</li>
        <li>Health news, such as a new diagnosis for you or someone close to you</li>
        <li>Big transitions, such as moving, becoming a parent or an empty nest</li>
        <li>Money stress, such as debt or a sudden drop in income</li>
        <li>Loss and grief, including the death of a loved one or the end of an important friendship</li>
      </ul>
      <p>
        It can happen at any age. Teens and young adults often face several transitions at once, like school,
        work and moving out, and that can pile up quickly.
      </p>

      <Callout>
        <p>
          Having a hard time with a big change does not mean you are weak. It means the change matters, and
          support can help you find your footing again.
        </p>
      </Callout>

      <h2>Signs to watch for</h2>
      <p>
        Symptoms vary, but they usually feel out of proportion to the change or get in the way of daily life.
      </p>
      <h3>Emotional signs</h3>
      <ul>
        <li>Sadness, hopelessness or crying more than usual</li>
        <li>Worry, nervousness or feeling overwhelmed</li>
        <li>Losing interest in things you usually enjoy</li>
        <li>Feeling like you cannot cope</li>
      </ul>
      <h3>Changes in behavior</h3>
      <ul>
        <li>Pulling away from friends, family and activities</li>
        <li>Trouble concentrating or making decisions</li>
        <li>Sleeping much more or much less than usual</li>
        <li>Changes in appetite</li>
        <li>Falling behind at work or school</li>
        <li>Acting more impulsively or taking risks you normally would not</li>
      </ul>
      <p>
        Adjustment disorders differ from ongoing conditions like{' '}
        <Link href="/conditions/depression">depression</Link> or{' '}
        <Link href={postHref('when-worry-becomes-problematic-recognizing-generalized-anxie')}>
          generalized anxiety disorder
        </Link>{' '}
        because they are tied to an identifiable stressor. Sorting out which is which is part of a psychiatric
        evaluation, and it matters because it shapes the plan.
      </p>

      <h2>Why it is worth getting support</h2>
      <p>
        Many people try to tough it out and wait for things to pass. Sometimes they do. But when symptoms drag
        on or get worse, they can wear down your relationships, your work and your health, and they can turn
        into depression or anxiety that is harder to shake.
      </p>
      <p>
        You do not have to wait until things are at their worst. Talking it through can help you make sense of
        what happened, work through hard feelings and build skills for the next challenge.
      </p>
      <p>
        Care for an adjustment disorder usually centers on therapy and practical coping strategies. In some
        cases, medication can help for a time with specific symptoms, such as trouble sleeping or anxiety. That
        is a decision you make together, and medication is always optional.
      </p>
      <p>
        At {SITE_NAME}, visits include <Link href="/services/supportive-therapy">supportive therapy</Link>{' '}
        alongside <Link href="/services/medication-management">medication management</Link> when it is needed.
        Jessica&apos;s clinical interests include stress and burnout, relationship challenges and{' '}
        <Link href="/conditions/burnout-life-transitions">life transitions</Link>.
      </p>

      <h2>Ways to cope day to day</h2>
      <p>Professional support helps, and so do small, steady habits:</p>
      <ul>
        <li>
          <strong>Keep a routine.</strong> Regular sleep, meals and activity give you structure when everything
          else feels uncertain.
        </li>
        <li>
          <strong>Stay connected.</strong> Reach out to people who support you. Isolation tends to make symptoms
          worse.
        </li>
        <li>
          <strong>Try a calming practice.</strong> Mindfulness, slow breathing or gentle movement can take the
          edge off stress.
        </li>
        <li>
          <strong>Go easy on alcohol and avoid drugs.</strong> They can worsen symptoms and get in the way of
          healthy coping.
        </li>
        <li>
          <strong>Break things into small steps.</strong> When you feel overwhelmed, focus on one small,
          doable task at a time.
        </li>
        <li>
          <strong>Be patient with yourself.</strong> Adjusting takes time. Notice your feelings without judging
          them.
        </li>
        <li>
          <strong>Make room for things you enjoy.</strong> Even when you do not feel like it, a little time on a
          hobby can lift your mood.
        </li>
      </ul>

      <h2>Moving forward</h2>
      <p>
        Adjustment disorders are treatable, and the coping skills you build now can help with the next big change
        too.
      </p>
      <p>
        The key is noticing when your distress has gone beyond ordinary stress and is getting in the way of
        your life. If you have been struggling for more than a few weeks after a big change, or things are
        getting worse instead of better, it is time to reach out.
      </p>
      <p>If you are having thoughts of harming yourself, do not wait for an appointment. Get help now:</p>
      <div className="mt-4">
        <CrisisNotice variant="compact" />
      </div>
      <p>
        Asking for support is not a failure. It is an act of courage and self-care, and you do not have to face
        a big change alone.
      </p>
    </ArticleLayout>
  )
}
