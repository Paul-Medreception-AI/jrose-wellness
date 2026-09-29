import Link from 'next/link'
import ArticleLayout, { Callout, buildArticleMetadata } from '@/components/blog/ArticleLayout'
import { imageFor } from '@/lib/images'
import { getPost, postHref } from '@/lib/posts'
import { AGES, CONTACT, PROVIDER, SITE_NAME } from '@/lib/site'

// Autobuilt post, kept and rewritten against FACTS.md (section 11 framing, evidence and location
// rules). Removed: prevalence statistics, evidence and outcome claims, diet as treatment, early
// onset wording, the fake clinician-team byline, the city location and the invented date. The title
// tag is shortened; the H1 keeps the full post title from lib/posts.ts.

const SLUG = 'when-worry-becomes-problematic-recognizing-generalized-anxie'
const post = getPost(SLUG)
const image = imageFor('/conditions/anxiety')

export const metadata = buildArticleMetadata({
  slug: SLUG,
  title: 'Worry vs. Generalized Anxiety Disorder',
  description: post.description,
  image,
})

const joinList = (items: readonly string[]) =>
  items.length < 3 ? items.join(' and ') : `${items.slice(0, -1).join(', ')}, and ${items[items.length - 1]}`

const RELATED = [
  { href: '/conditions/anxiety', label: 'Anxiety and panic' },
  { href: '/services/supportive-therapy', label: 'Supportive therapy' },
  { href: postHref('the-role-of-sleep-in-mental-health-and-wellness'), label: 'The role of sleep in mental health' },
]

export default function GeneralizedAnxietyPost() {
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
        Everyone worries. A job interview, a loved one&apos;s health, a big decision: worry is part of being
        human. But for some people, worry is not an occasional visitor. It is a constant, exhausting companion
        that colors every part of the day.
      </p>
      <p>
        When does everyday worry become something more? Knowing the difference between ordinary anxiety and
        generalized anxiety disorder (GAD) can be a first step toward feeling calmer.
      </p>

      <h2>What is generalized anxiety disorder?</h2>
      <p>
        GAD is persistent, excessive worry about many different things, such as work, health, money, family, or
        even small everyday tasks, that is hard to control. Unlike worry that fades once a stressful situation
        passes, GAD sticks around. Clinicians usually look for worry on more days than not for at least six
        months.
      </p>
      <p>
        People with GAD often describe a mind that races from one worry to the next. The worry is usually bigger
        than the actual risk, and it gets in the way of concentration, decisions and simply enjoying life.
      </p>
      <p>GAD can begin at any age, including the teen years, and it often builds gradually.</p>

      <h2>Signs and symptoms</h2>
      <p>
        On the mental side, GAD can look like worry that feels impossible to switch off, feeling on edge or keyed
        up, trouble concentrating or your mind going blank, irritability, and difficulty making decisions for
        fear of getting it wrong.
      </p>
      <p>GAD also shows up in the body. Physical symptoms are often what lead people to seek care first:</p>
      <ul>
        <li>Muscle tension, especially in the neck, shoulders and back</li>
        <li>Trouble falling or staying asleep</li>
        <li>Fatigue and tiring easily</li>
        <li>Restlessness and feeling unable to relax</li>
        <li>Stomach upset, such as nausea or diarrhea</li>
        <li>Headaches and other aches and pains</li>
      </ul>
      <p>
        Having some worry, or a few of these symptoms, does not mean you have GAD. What matters is how
        persistent and intense the worry is, and how much it gets in the way of your life.
      </p>

      <Callout>
        <p>
          The worry in GAD is not just frequent. It is persistent, hard to control and exhausting. Recognizing the
          pattern is the first step toward relief.
        </p>
      </Callout>

      <h2>How GAD affects daily life</h2>
      <p>
        GAD rarely stays in one corner of life. At work or school, constant worry can make it hard to focus, get
        things done or make decisions. Relationships can suffer too, whether because you pull back from
        situations that trigger anxiety or because people close to you brush it off as &quot;just worrying too
        much.&quot;
      </p>
      <p>
        Your body feels it as well. Ongoing stress and poor sleep feed each other, which can leave you both
        exhausted and more anxious.
      </p>
      <p>
        Many people with GAD also experience <Link href="/conditions/depression">depression</Link>. The weight of
        constant worry can lead to hopelessness and sadness, and depression can make anxiety worse. When both
        are present, it helps to look at them together.
      </p>

      <h2>What causes GAD?</h2>
      <p>
        Like many mental health conditions, GAD comes from a mix of biological, psychological and life factors.
        Brain chemistry plays a part, and having relatives with anxiety raises the chances.
      </p>
      <p>
        Temperament matters too. People who tend to be more cautious, or who lean toward negative thinking
        patterns, may be more prone to it.
      </p>
      <p>
        Life experiences can trigger or worsen anxiety: ongoing stress, trauma, big life changes, or hard
        experiences growing up. Even happy changes, like a wedding or a new job, can tip worry into overdrive.
      </p>

      <h2>Treatment and management</h2>
      <p>GAD is treatable, and there are several ways to approach it.</p>
      <p>
        <strong>Therapy and coping skills.</strong> Cognitive behavioral techniques help you notice anxious
        thought patterns and practice responding to them differently, with practical skills for managing worry.
      </p>
      <p>
        <strong>Medication.</strong> Certain antidepressants, known as SSRIs and SNRIs, are commonly used for GAD.
        Many people use therapy and medication together. Whether medication is part of your plan is your choice,
        made with your clinician.
      </p>
      <p>
        <strong>Everyday habits.</strong> These can support treatment:
      </p>
      <ul>
        <li>Mindfulness practice to ease rumination</li>
        <li>Regular physical activity</li>
        <li>Cutting back on caffeine</li>
        <li>Steady sleep habits to help with insomnia</li>
        <li>Relaxation exercises, like slow breathing or progressive muscle relaxation</li>
      </ul>
      <p>
        At {SITE_NAME}, care for <Link href="/conditions/anxiety">anxiety</Link> includes a{' '}
        <Link href="/services/psychiatric-evaluation">psychiatric evaluation</Link>,{' '}
        <Link href="/services/medication-management">medication management</Link> when it is appropriate, and{' '}
        <Link href="/services/supportive-therapy">supportive therapy</Link> within visits. Jessica draws on{' '}
        {joinList(PROVIDER.techniques)}.
      </p>

      <h2>When to seek help</h2>
      <p>
        If worry has become a constant presence, getting in the way of work, relationships or simply enjoying
        your day, it is worth talking with a professional. You do not have to wait until it feels overwhelming.
      </p>
      <p>Consider reaching out if you have noticed:</p>
      <ul>
        <li>Worry on most days for several months</li>
        <li>Physical symptoms that have been checked medically without a clear physical cause</li>
        <li>Trouble sleeping because of racing thoughts</li>
        <li>Avoiding activities or situations because of anxiety</li>
        <li>Loved ones telling you they are worried about how anxious you seem</li>
      </ul>
      <p>
        Asking for help is not a sign of weakness. It is a practical step toward feeling better. With the right
        diagnosis and support, you can learn to manage worry instead of letting it run your day.
      </p>
      <p>
        Anxiety is one of Jessica&apos;s main clinical interests. She sees {AGES.short.toLowerCase()} by secure
        video, for patients in {CONTACT.state}.
      </p>
    </ArticleLayout>
  )
}
