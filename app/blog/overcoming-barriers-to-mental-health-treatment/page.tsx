import type { Metadata } from 'next'
import Link from 'next/link'
import ArticleLayout, { Callout, buildArticleMetadata } from '@/components/blog/ArticleLayout'
import CrisisNotice from '@/components/site/CrisisNotice'
import { imageFor } from '@/lib/images'
import { AGES, BOOKING, CONTACT, INSURANCE_AS_OF, INSURANCE_HEADLINE, PRACTICE_FAQS, PRICING, SITE_NAME } from '@/lib/site'

const SLUG = 'overcoming-barriers-to-mental-health-treatment'
const TITLE = 'Overcoming Barriers to Mental Health Treatment'
const DESCRIPTION =
  'Common barriers to mental health care, including stigma, cost, and time, and practical ways to get past them and find care that fits your life.'
const IMAGE = imageFor('/book-appointment')

const WHAT_NP_DOES = PRACTICE_FAQS.find((f) => f.q === 'What does a psychiatric nurse practitioner (Psych NP) do?')!

/** "a, b, c, and d" */
const listOf = (items: readonly string[]) =>
  items.length < 3 ? items.join(' and ') : `${items.slice(0, -1).join(', ')}, and ${items[items.length - 1]}`

export const metadata: Metadata = buildArticleMetadata({
  slug: SLUG,
  title: 'Overcoming Barriers to Mental Health Care',
  description: DESCRIPTION,
  image: IMAGE,
})

export default function BarriersArticle() {
  return (
    <ArticleLayout
      slug={SLUG}
      title={TITLE}
      description={DESCRIPTION}
      image={IMAGE}
      category="Getting Care"
      related={[
        { href: '/insurance', label: 'Insurance & Pricing' },
        { href: '/services/telepsychiatry', label: 'How Telepsychiatry Works' },
        { href: '/new-patients', label: 'Your First Visit' },
        { href: '/blog/breaking-the-stigma-why-seeking-help-for-substance-use-is-st', label: 'Breaking the Stigma: Why Seeking Help for Substance Use Is Strength' },
      ]}
    >
      <p>
        Plenty of people who could use mental health care never get it. The gap is not only about whether help
        exists. It is a tangle of obstacles that can feel impossible to get past when you are already struggling.
      </p>
      <p>
        Whether you are thinking about care for the first time or have hit roadblocks before, naming what is in your
        way can help you move forward. Every barrier has a way through it.
      </p>

      <h2>Stigma: getting past shame and silence</h2>
      <p>
        Stigma is one of the biggest barriers: the fear of being judged, labeled, or seen as weak. Many people
        carry negative beliefs about mental health and suffer in silence rather than ask for help.
      </p>
      <p>
        Stigma can come from family, work, community, or our own beliefs about what it means to struggle. It often
        leads to waiting longer, symptoms getting heavier, and missed chances to feel better.
      </p>
      <p>
        <strong>Ways to push back on stigma:</strong>
      </p>
      <ul>
        <li>Learn about mental health conditions as health issues, not character flaws</li>
        <li>Start by telling one trusted person. You do not have to tell everyone.</li>
        <li>Remind yourself that asking for help takes strength and self-awareness</li>
        <li>If privacy is a big concern, consider telehealth, so you can meet from home</li>
      </ul>

      <h2>Cost: navigating insurance and fees</h2>
      <p>
        Cost is a real barrier for many people. Even with insurance, copays and deductibles add up, and paying out of
        pocket can feel out of reach. There are often more options than people realize.
      </p>
      <p>
        <strong>Ways to manage cost:</strong>
      </p>
      <ul>
        <li>Check your insurance benefits for mental health coverage</li>
        <li>Ask whether a sliding scale is available</li>
        <li>Look into community mental health centers, which often offer reduced fees</li>
        <li>Ask whether your employer offers an Employee Assistance Program (EAP)</li>
        <li>If you pay out of pocket, ask for a Good Faith Estimate of your costs before your visit</li>
      </ul>

      <Callout title={`Paying for care at ${SITE_NAME}`}>
        <p>
          You can use insurance by booking through{' '}
          <a href={BOOKING.alma.href} target="_blank" rel="noopener noreferrer">
            Alma
          </a>{' '}
          or{' '}
          <a href={BOOKING.headway.href} target="_blank" rel="noopener noreferrer">
            Headway
          </a>
          . Plans listed on both include {listOf(INSURANCE_HEADLINE)}. Plans listed as of {INSURANCE_AS_OF}.
        </p>
        <p>
          Self-pay rates are {PRICING.initialEvaluation.price} for the initial evaluation and {PRICING.followUp.price}{' '}
          for follow-up and medication management visits. {PRICING.slidingScale} Ask whether it applies to your visits
          when you reach out.
        </p>
        <p>
          See the full plan lists on the <Link href="/insurance">insurance and pricing page</Link>.
        </p>
      </Callout>

      <blockquote>
        Not getting help has costs too: in relationships, work, health, and quality of life.
      </blockquote>

      <h2>Access: when care is hard to find</h2>
      <p>
        Even when you are ready and able to pay, finding someone available can be frustrating. Wait lists and too
        few clinicians in some areas make access harder, especially in rural areas and for specialized care.
      </p>
      <p>
        <strong>Ways to widen your options:</strong>
      </p>
      <ul>
        <li>Consider telehealth, which lets you see clinicians who are not nearby</li>
        <li>Ask to be put on a cancellation list for an earlier appointment</li>
        <li>
          Consider different kinds of clinicians. Psychiatric nurse practitioners, psychologists, licensed clinical
          social workers, and counselors all play different roles.
        </li>
        <li>Start with your primary care provider, who can help and refer you</li>
      </ul>
      <p>
        Not sure what a psychiatric nurse practitioner does? In the practice’s words: “{WHAT_NP_DOES.a}”
      </p>
      <p>If you are in crisis, do not wait for an appointment:</p>
      <CrisisNotice variant="compact" />

      <h2>Cultural and systemic barriers</h2>
      <p>
        Language differences, different cultural ideas about illness and care, too few clinicians who share or
        understand your background, and past mistrust of health care can all make it harder to get care that feels
        right. People from marginalized communities may also face discrimination or clinicians who do not understand
        their experiences.
      </p>
      <p>
        <strong>Finding care that fits you:</strong>
      </p>
      <ul>
        <li>Look for clinicians with experience in your community or concerns</li>
        <li>Use directories that let you search by background, language, or approach</li>
        <li>Ask prospective clinicians directly about their experience with concerns like yours</li>
        <li>Connect with community organizations that offer support tailored to your background</li>
      </ul>

      <h2>Time and logistics</h2>
      <p>
        Work schedules, family responsibilities, and transportation keep many people from getting care. These
        obstacles may seem small next to stigma or cost, but they are just as real. Taking time off can feel
        impossible, and getting to appointments is harder without reliable transportation.
      </p>
      <p>
        <strong>Practical solutions:</strong>
      </p>
      <ul>
        <li>Use telehealth to skip the commute and the waiting room</li>
        <li>Ask about appointment times that work with your schedule</li>
        <li>Check whether your employer’s EAP offers flexible options</li>
        <li>Block the time on your calendar like any other appointment, and plan a private spot to take the call</li>
      </ul>

      <h2>Taking the first step</h2>
      <p>
        Understanding the barriers is useful, but the goal is getting past them. Whatever you are facing, others have
        faced it too and found a way through.
      </p>
      <p>
        The first step does not have to be perfect. It might be a call to your primary care provider or a little
        research on your options. What matters is moving toward care, even when it is hard.
      </p>
      <p>
        {SITE_NAME} offers psychiatric care by secure video for patients in {CONTACT.state}, for{' '}
        {AGES.short.toLowerCase()}. When you are ready, <Link href="/book-appointment">book an appointment</Link>.
      </p>
    </ArticleLayout>
  )
}
