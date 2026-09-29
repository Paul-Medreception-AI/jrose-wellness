import Link from 'next/link'
import ArticleLayout, { Callout, buildArticleMetadata } from '@/components/blog/ArticleLayout'
import BookingOptions from '@/components/site/BookingOptions'
import { getPost, postHref } from '@/lib/posts'
import { imageFor } from '@/lib/images'
import { BOOKING, CONTACT, INSURANCE_AS_OF, INSURANCE_HEADLINE, PRACTICE_FAQS, PRICING, SITE_NAME } from '@/lib/site'

// Migrated from the practice's Wix post /post/cash-only-medication-management-for-psychiatric-conditions
// (August 13, 2025). The slug is kept for link equity; the H1 is "Self-Pay Medication Management for
// Psychiatric Conditions" (FACTS.md section 13). Rewritten because the original mixed up paying the
// pharmacy with paying the provider and predates insurance through Alma and Headway. Deleted: both
// fabricated case studies, and the cost-savings, pharmacy-discount, "fewer restrictions" and
// better-outcome claims.

const SLUG = 'cash-only-medication-management-for-psychiatric-conditions'
const post = getPost(SLUG)
const image = imageFor(postHref(SLUG))

// PRACTICE_FAQS: [4] how medication is chosen, [5] medication is optional.
const HOW_MEDICATION_IS_CHOSEN = PRACTICE_FAQS[4].a
const MEDICATION_OPTIONAL = PRACTICE_FAQS[5].a

const joinList = (items: readonly string[]) =>
  items.length < 3 ? items.join(' and ') : `${items.slice(0, -1).join(', ')}, and ${items[items.length - 1]}`

export const metadata = buildArticleMetadata({
  slug: SLUG,
  title: 'Self-Pay Psychiatric Medication Management',
  description: post.description,
  image,
  date: post.date,
  updated: post.updated,
})

export default function SelfPayMedicationManagementPost() {
  return (
    <ArticleLayout
      slug={SLUG}
      title={post.title}
      description={post.description}
      date={post.date}
      updated={post.updated}
      image={image}
      category={post.category}
      related={[
        { href: '/insurance', label: 'Insurance and self-pay pricing' },
        { href: '/services/medication-management', label: 'Medication management' },
        { href: '/services/psychiatric-evaluation', label: 'Psychiatric evaluation' },
        { href: '/new-patients', label: 'Your first visit' },
      ]}
      after={
        <BookingOptions
          heading="Self-pay or insurance: your choice"
          intro="Use your insurance by booking through Alma or Headway, or request a self-pay visit directly with the practice. Every visit is by secure video."
        />
      }
    >
      <p>
        Paying for psychiatric care yourself, without billing insurance, is usually called self-pay or private pay.
        At {SITE_NAME} it is one of two ways to see Jessica. The other is using your insurance by booking through
        Alma or through Headway.
      </p>
      <p>
        This article explains what self-pay medication management means, why some people choose it, what it costs,
        and how to decide between self-pay and insurance.
      </p>
      <Callout title="A note on this article">
        <p>
          This article was first published in August 2025 as “Cash-Only Medication Management for Psychiatric
          Conditions.” It has been rewritten to reflect how the practice works now: you can book with insurance
          through Alma or Headway, or you can choose self-pay.
        </p>
      </Callout>

      <h2>What self-pay medication management means</h2>
      <p>
        Medication management is the ongoing part of psychiatric care. It starts with a{' '}
        <Link href="/services/psychiatric-evaluation">psychiatric evaluation</Link>, then continues with follow-up
        visits where your provider checks how you are doing, looks at how your treatment plan is working, and adjusts
        medication when needed. It can be part of care for{' '}
        <Link href="/conditions/anxiety">anxiety</Link>, <Link href="/conditions/depression">depression</Link>,{' '}
        <Link href="/services/adhd-evaluation">ADHD</Link>,{' '}
        <Link href="/conditions/bipolar-disorder">bipolar disorder</Link> and{' '}
        <Link href="/conditions">other conditions</Link>.
      </p>
      <p>
        With self-pay, you pay the practice directly for those visits instead of having them billed to an insurance
        plan.
      </p>
      <p>
        Self-pay covers your visits, not your prescriptions. You fill prescriptions at a pharmacy, and how they are
        paid for is a separate question between you, your pharmacy and your prescription coverage.
      </p>

      <h2>Self-pay prices at {SITE_NAME}</h2>
      <Callout title="Self-pay visits">
        <dl className="divide-y divide-border">
          {[PRICING.initialEvaluation, PRICING.followUp].map((item) => (
            <div key={item.name} className="py-4 first:pt-0 last:pb-0">
              <dt className="flex items-baseline justify-between gap-4">
                <span className="font-semibold text-ink">{item.name}</span>
                <span className="font-cormorant text-2xl font-semibold text-primary">{item.price}</span>
              </dt>
              <dd className="mt-1 text-[15px] leading-relaxed text-ink/80">{item.description}</dd>
            </div>
          ))}
        </dl>
      </Callout>
      <p>{PRICING.slidingScale} Ask whether it applies to your visits when you reach out.</p>
      <p>{PRICING.goodFaithEstimate}</p>
      <p>
        See the <Link href="/insurance">insurance and pricing page</Link> for every detail in one place.
      </p>

      <h2>Why some people choose self-pay</h2>
      <p>People choose self-pay for different reasons. A few common ones:</p>
      <ul>
        <li>
          <strong>Clear pricing.</strong> You know the price of each visit before you book.
        </li>
        <li>
          <strong>Privacy.</strong> Some people prefer to keep their mental health visits between themselves and their
          provider, without a claim going to an insurance plan.
        </li>
        <li>
          <strong>Your plan is not listed.</strong> If your insurance is not one of the plans available through Alma
          or Headway, self-pay is another way to be seen.
        </li>
        <li>
          <strong>Less paperwork.</strong> Some people would rather not deal with claims, copays and plan rules for
          their mental health visits.
        </li>
      </ul>
      <p>
        Self-pay is not the right choice for everyone. Depending on your plan, using insurance may cost you less per
        visit, so it is worth comparing before you decide.
      </p>

      <h2>Using insurance instead: Alma and Headway</h2>
      <p>
        If you would rather use insurance, you can book with Jessica through Alma or through Headway. Plans available
        through both include {joinList(INSURANCE_HEADLINE)}. Plans listed as of {INSURANCE_AS_OF}.
      </p>
      <ul>
        <li>
          <a href={BOOKING.alma.href} target="_blank" rel="noopener noreferrer">
            {BOOKING.alma.label}
          </a>
          . {BOOKING.alma.note}
        </li>
        <li>
          <a href={BOOKING.headway.href} target="_blank" rel="noopener noreferrer">
            {BOOKING.headway.label}
          </a>
          . {BOOKING.headway.note}
        </li>
      </ul>
      <p>
        The full list for each platform is on the <Link href="/insurance">insurance page</Link>.
      </p>

      <h2>How to decide between self-pay and insurance</h2>
      <ol>
        <li>
          <strong>Check your plan.</strong> Look for your insurance on the{' '}
          <Link href="/insurance">insurance page</Link>, or enter your plan on Alma or Headway to see what applies to
          you.
        </li>
        <li>
          <strong>Compare costs.</strong> With insurance, what you pay depends on your plan&apos;s copay, coinsurance
          and deductible. With self-pay, it is {PRICING.initialEvaluation.price} for the initial evaluation and{' '}
          {PRICING.followUp.price} for each follow-up.
        </li>
        <li>
          <strong>Ask about the sliding scale</strong> if cost is a barrier.
        </li>
        <li>
          <strong>Ask for a Good Faith Estimate</strong> if you plan to pay yourself, so you know the expected cost
          before your visit.
        </li>
        <li>
          <strong>Think about prescriptions separately.</strong> Ask your pharmacy or plan how your medications are
          covered. If the cost of a medication is a problem, tell Jessica so you can talk through the options.
        </li>
        <li>
          <strong>Keep track of what you spend</strong> on visits and prescriptions so you can budget for ongoing
          care.
        </li>
      </ol>

      <h2>Stay informed about your medications</h2>
      <p>
        However you pay, it helps to understand the medications you take: what each one is for, common side effects,
        and what to watch for. Bring your questions to your visits. Medication decisions are personal. In the
        practice&apos;s words:
      </p>
      <blockquote>
        <p>{HOW_MEDICATION_IS_CHOSEN}</p>
      </blockquote>
      <p>
        And if you would rather not take medication, you can say so: “{MEDICATION_OPTIONAL}”{' '}
        <Link href="/services/medication-management">Learn how medication management works</Link>.
      </p>

      <h2>Common questions</h2>
      <h3>Is self-pay more expensive than using insurance?</h3>
      <p>
        It depends on your plan. For some people insurance costs less per visit. For others, a high deductible or a
        plan that is not available through Alma or Headway makes self-pay the simpler option. Comparing the two is
        the best way to know.
      </p>
      <h3>Is my care different if I pay myself?</h3>
      <p>
        Your care follows the same path either way: a psychiatric evaluation first, then follow-up visits to check
        your progress and adjust your plan. Every visit is by secure video.
      </p>
      <h3>What if I can&apos;t afford my medications?</h3>
      <p>
        Tell Jessica. Cost is a fair part of choosing a treatment plan, and there may be lower-cost options to
        discuss.
      </p>
      <h3>How do I book a self-pay visit?</h3>
      <p>
        Send a <Link href={BOOKING.request.href}>self-pay appointment request</Link> or call{' '}
        <a href={CONTACT.phoneHref}>{CONTACT.phone}</a>. To use insurance instead, book through Alma or Headway
        using the links above.
      </p>
    </ArticleLayout>
  )
}
