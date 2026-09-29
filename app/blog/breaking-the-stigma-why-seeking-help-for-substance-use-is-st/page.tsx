import type { Metadata } from 'next'
import Link from 'next/link'
import ArticleLayout, { Callout, buildArticleMetadata } from '@/components/blog/ArticleLayout'
import CrisisNotice from '@/components/site/CrisisNotice'
import { imageFor } from '@/lib/images'
import { CONTACT, PROVIDER, SITE_NAME } from '@/lib/site'

const SLUG = 'breaking-the-stigma-why-seeking-help-for-substance-use-is-st'
const TITLE = 'Breaking the Stigma: Why Seeking Help for Substance Use Is Strength'
const DESCRIPTION =
  'Why reaching out for support with alcohol or substance use takes courage, how stigma keeps people from asking, and how to take a first step.'
const IMAGE = imageFor('/conditions/substance-use')

export const metadata: Metadata = buildArticleMetadata({
  slug: SLUG,
  title: 'Seeking Help for Substance Use Is Strength',
  description: DESCRIPTION,
  image: IMAGE,
})

export default function SubstanceUseStigmaArticle() {
  return (
    <ArticleLayout
      slug={SLUG}
      title={TITLE}
      description={DESCRIPTION}
      image={IMAGE}
      category="Substance Use"
      related={[
        { href: '/conditions/substance-use', label: 'Substance Use Care' },
        { href: '/conditions/depression', label: 'Depression' },
        { href: '/conditions/anxiety', label: 'Anxiety & Panic' },
        { href: '/blog/overcoming-barriers-to-mental-health-treatment', label: 'Overcoming Barriers to Mental Health Treatment' },
      ]}
    >
      <p>
        Many people struggle with alcohol or substance use in silence. What holds them back is often not a lack of
        options. It is fear: fear of judgment, of shame, of being labeled.
      </p>
      <p>
        Here is the truth: asking for help with substance use is not a sign of weakness. It is one of the most
        courageous decisions a person can make. Understanding where stigma comes from, and why it is wrong, is a good
        place to start.
      </p>

      <CrisisNotice variant="compact" />

      <h2>Where the stigma comes from</h2>
      <p>
        Stigma around substance use grew out of moral judgments and a misunderstanding of what addiction is. For a
        long time, it was treated as a character flaw rather than what it is: a health condition shaped by many
        things at once.
      </p>
      <p>
        That judgment does real harm. When people take it in, it becomes self-stigma, an inner voice that says they
        are broken or do not deserve help. Shame keeps them from reaching out, and struggling alone deepens the shame.
        Stigma is one of the biggest reasons people wait to ask for help.
      </p>

      <h2>A health condition, not a character flaw</h2>
      <p>
        Substance use disorders involve changes in how the brain handles reward, motivation, and self-control. They
        are shaped by genetics, stress, trauma, mental health, and environment, not by willpower alone. Like other
        long-term health conditions, they can involve setbacks and periods of progress, and they can be treated.
      </p>
      <p>
        Seeing it this way takes the moral judgment out of the picture. It also makes room for the kind of care
        people actually need.
      </p>

      <blockquote>
        Seeking help is not admitting defeat. It is the first step toward reclaiming your life, your health, and your
        future.
      </blockquote>

      <h2>Why asking for help takes courage</h2>
      <p>
        Reaching out means admitting that something is not working, in a culture that prizes self-reliance. It can
        mean risking judgment and facing an uncertain road.
      </p>
      <p>
        That vulnerability is exactly where the strength is. Think about what seeking help involves: noticing the
        problem, pushing past fear, looking into options, making the call, showing up, being honest with someone new,
        and committing to change. Each step takes real resilience.
      </p>

      <h2>Recovery is possible</h2>
      <p>
        One of stigma’s most damaging messages is that people do not get better. They do. Recovery looks different
        for different people. For some it means not using at all. For others it starts with cutting back, repairing
        relationships, getting sleep and health back on track, and building stability.
      </p>
      <p>
        Setbacks are common, and they are not failure. What matters is getting support that fits where you are.
      </p>

      <h2>Mental health and substance use often go together</h2>
      <p>
        Substance use is often tangled up with anxiety, depression, trauma, or stress. Sometimes drinking or using
        starts as a way to cope with those feelings. Caring for your mental health and your substance use together
        can make both easier to work on.
      </p>

      <Callout title={`How ${SITE_NAME} can help`}>
        <p>
          {PROVIDER.name}, a {PROVIDER.title.toLowerCase()}, offers non-judgmental care for alcohol and substance use
          by secure video for patients in {CONTACT.state}. Care starts with an honest, private evaluation. You do not
          have to arrive ready to quit.
        </p>
        <p>
          From there, support can include treatment planning, motivational interviewing, practical coping strategies,
          and care for anxiety, depression, or trauma alongside your recovery. Learn more about{' '}
          <Link href="/conditions/substance-use">substance use care</Link>.
        </p>
        <p>
          Detox and medically supervised withdrawal are outside the scope of telehealth care. Stopping some
          substances suddenly, including alcohol, can be dangerous without medical support, so talk with a medical
          professional before you stop.
        </p>
      </Callout>

      <h2>Practical first steps</h2>
      <p>If you or someone you care about is thinking about getting help, here are some places to start:</p>
      <ul>
        <li>
          <strong>Talk with your primary care provider.</strong> They can look at your overall health and help you
          find the right level of care.
        </li>
        <li>
          <strong>See a mental health professional.</strong> A psychiatric nurse practitioner can evaluate both your
          substance use and any anxiety, depression, or trauma underneath it, and build a plan with you.
        </li>
        <li>
          <strong>Look into peer support groups.</strong> Hearing from people who have been there can make you feel
          less alone.
        </li>
        <li>
          <strong>Tell someone you trust.</strong> A friend, family member, or mentor can offer support and help you
          stay on track.
        </li>
        <li>
          <strong>Be patient with yourself.</strong> Getting help is a process, not a single moment. Every step
          counts.
        </li>
      </ul>

      <h2>Building a culture of support</h2>
      <p>
        Breaking stigma is not only up to the person who is struggling. All of us can help make asking for help feel
        normal:
      </p>
      <ul>
        <li>Use person-first language, such as “a person with a substance use disorder” instead of labels</li>
        <li>Learn about substance use as a health condition</li>
        <li>Speak up when you hear judgmental comments</li>
        <li>Respond with compassion and respect for the courage it takes to ask for help</li>
      </ul>
      <p>
        When we trade judgment for support and shame for compassion, more people get help when they need it most.
      </p>

      <h2>Your next step</h2>
      <p>
        If you recognize yourself or someone you love in these words, taking the next step, whatever it looks like
        for you, is an act of courage. Your struggle does not define your worth, and you do not need all the answers
        before you begin.
      </p>
      <p>
        It can start with one conversation. When you are ready,{' '}
        <Link href="/book-appointment">book an appointment</Link>.
      </p>
    </ArticleLayout>
  )
}
