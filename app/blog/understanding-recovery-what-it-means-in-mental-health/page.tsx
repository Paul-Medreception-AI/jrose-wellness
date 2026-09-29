import Link from 'next/link'
import ArticleLayout, { Callout, buildArticleMetadata } from '@/components/blog/ArticleLayout'
import { imageFor } from '@/lib/images'
import { getPost, postHref } from '@/lib/posts'
import { CONTACT, PROVIDER, SITE_NAME } from '@/lib/site'

// Autobuilt post, kept and rewritten against FACTS.md (section 11 framing and evidence rules).
// Removed: the evidence section (a cited study and hospitalization outcome claims), a prevalence
// statistic, the alternative-medicine framing, and the invented date. SAMHSA's recovery definition
// and four dimensions are paraphrased, not quoted.

const SLUG = 'understanding-recovery-what-it-means-in-mental-health'
const post = getPost(SLUG)
// No image of its own: the trauma page hero (a sunlit forest path).
const image = imageFor('/conditions/ptsd-trauma')

export const metadata = buildArticleMetadata({ slug: SLUG, title: post.title, description: post.description, image })

// Jessica's own words (Headway profile, "My approach to therapy").
const MEANINGFUL_PROGRESS =
  'I believe meaningful progress comes from combining evidence-based care with genuine human connection. My goal is to help clients build resilience, improve daily functioning, strengthen relationships, and feel more confident navigating life’s challenges.'

const RELATED = [
  { href: '/services/supportive-therapy', label: 'Supportive therapy' },
  { href: postHref('understanding-dual-diagnosis-mental-health-and-substance-use'), label: 'Understanding dual diagnosis' },
  { href: '/conditions', label: 'Conditions treated' },
]

export default function RecoveryPost() {
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
        &quot;Recovery&quot; means different things to different people. When a broken bone heals, you are back
        to where you were. In mental health, recovery is usually more personal and more ongoing. It is not only
        about symptoms going away. It is about building a life that feels meaningful and manageable, even if
        some challenges remain.
      </p>
      <p>
        Seeing recovery this way can change how you set goals and how you measure progress. Here is what it can
        look like.
      </p>

      <h2>What recovery really means</h2>
      <p>
        SAMHSA, the federal agency that leads public efforts on mental health and substance use, describes
        recovery as a process of change in which people improve their health, live self-directed lives, and
        strive to reach their full potential.
      </p>
      <p>A few ideas stand out:</p>
      <ul>
        <li>
          <strong>Recovery is personal.</strong> There is no single path or timeline. What works for one person
          may not work for another, and that is normal.
        </li>
        <li>
          <strong>Recovery is ongoing.</strong> It is less a finish line than a continuing process of growth,
          learning and adjusting.
        </li>
        <li>
          <strong>Recovery builds on strengths.</strong> It is about coping skills, relationships and meaningful
          experiences, not only about symptoms.
        </li>
        <li>
          <strong>Recovery is self-directed.</strong> You are the expert on your own experience, and you get to
          shape where you are headed.
        </li>
      </ul>
      <p>
        This shifts the focus from &quot;being cured&quot; to &quot;living well.&quot; That can take pressure
        off, because you do not have to reach a perfect endpoint to be making real progress.
      </p>

      <h2>Who recovery is for</h2>
      <p>Recovery applies to anyone who has faced mental health challenges, including:</p>
      <ul>
        <li>
          People living with <Link href="/conditions/depression">depression</Link>,{' '}
          <Link href="/conditions/anxiety">anxiety</Link>,{' '}
          <Link href="/conditions/bipolar-disorder">bipolar disorder</Link>,{' '}
          <Link href="/conditions/schizophrenia-psychosis">schizophrenia</Link> or{' '}
          <Link href="/conditions/ptsd-trauma">PTSD</Link>
        </li>
        <li>
          People dealing with <Link href="/conditions/substance-use">substance use</Link> or co-occurring
          conditions
        </li>
        <li>People going through grief, trauma or big life transitions</li>
        <li>Family members, friends and caregivers who support someone they love</li>
      </ul>
      <p>
        Recovery is not only for people with severe or long-term conditions. It is a helpful way for anyone to
        think about improving their mental health and quality of life.
      </p>

      <Callout>
        <p>
          Recovery is not about going back to exactly how things were. It is about moving toward a life that feels
          full and meaningful, on your own terms.
        </p>
      </Callout>

      <h2>Four areas that support recovery</h2>
      <p>
        SAMHSA also describes four areas that support a life in recovery. They can help you notice where you are
        doing well and where you might want more support.
      </p>
      <h3>1. Health: managing your condition</h3>
      <p>
        Making informed choices that support your physical and emotional health. That can mean working with a
        clinician, taking medication as prescribed if it is part of your plan, going to therapy, and building
        routines that keep you steady.
      </p>
      <h3>2. Home: a safe and stable place to live</h3>
      <p>
        Stability at home is a foundation. It does not have to mean owning a home. It means having a place where
        you feel safe, can rest, and have the privacy to focus on your health.
      </p>
      <h3>3. Purpose: meaningful things to do</h3>
      <p>
        Purpose can come from work, school, volunteering, creative projects or caring for others. Roles and
        activities that matter to you give your days meaning and structure.
      </p>
      <h3>4. Community: relationships and support</h3>
      <p>
        Recovery grows through connection. Supportive relationships with family, friends, peers or support
        groups offer encouragement, ease isolation and help you feel like you belong.
      </p>
      <p>
        You do not need to work on all four at once. A small step in one area often makes the next one easier.
      </p>

      <h2>Progress rarely follows a straight line</h2>
      <p>
        Setbacks are part of recovery, not proof that you have failed. A hard week after a good month does not
        erase your progress. It often helps to look at the overall direction over months rather than judging
        yourself day to day.
      </p>
      <p>
        Progress can be quiet. It might look like getting out of bed a little more easily, keeping an
        appointment, reaching out to a friend, or bouncing back from a bad day a bit faster than before. Those
        moments count.
      </p>

      <h2>Practical ways to support your recovery</h2>
      <p>Wherever you are, these steps can help:</p>
      <ul>
        <li>
          <strong>Set goals that mean something to you.</strong> Beyond easing symptoms, think about what matters
          most: getting back to a hobby, repairing a relationship, or returning to work or school.
        </li>
        <li>
          <strong>Build your support network.</strong> Lean on people you trust, join a support group, or connect
          with others who understand what you are going through.
        </li>
        <li>
          <strong>Create a coping toolbox.</strong> Keep a short list of things that help you manage stress and
          stay grounded, like journaling, mindfulness, movement or creative outlets.
        </li>
        <li>
          <strong>Work with a clinician who treats you as a partner.</strong> Look for someone who respects your
          choices and pays attention to your strengths as well as your struggles.
        </li>
        <li>
          <strong>Practice self-compassion.</strong> Treat yourself with the kindness you would offer a friend in
          the same spot.
        </li>
        <li>
          <strong>Notice small wins.</strong> Getting up, showing up, reaching out. Acknowledge them.
        </li>
      </ul>

      <h2>When to seek professional support</h2>
      <p>
        Recovery is personal, but you do not have to do it alone. Consider reaching out to a mental health
        professional if:
      </p>
      <ul>
        <li>Symptoms keep getting in the way of daily life</li>
        <li>You are not sure where to start, or the process feels overwhelming</li>
        <li>You are ready to explore therapy, medication or both</li>
        <li>You want a plan built around your goals and strategies that fit your life</li>
      </ul>
      <blockquote>
        <p>&ldquo;{MEANINGFUL_PROGRESS}&rdquo;</p>
        <cite>{PROVIDER.byline}</cite>
      </blockquote>
      <p>
        At {SITE_NAME}, care is built around your goals: a{' '}
        <Link href="/services/psychiatric-evaluation">psychiatric evaluation</Link>,{' '}
        <Link href="/services/medication-management">medication management</Link> when it is appropriate, and{' '}
        <Link href="/services/supportive-therapy">supportive therapy</Link> within visits, all by secure video
        for patients in {CONTACT.state}.
      </p>
      <p>
        Recovery is not about erasing the past or getting everything right. It is about taking back a sense of
        control, building a life that reflects your values, and finding hope even when things are hard. If you
        are ready to explore what that could look like for you, support is here.
      </p>
    </ArticleLayout>
  )
}
