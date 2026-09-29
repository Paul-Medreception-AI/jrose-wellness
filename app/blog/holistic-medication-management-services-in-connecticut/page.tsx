import Link from 'next/link'
import ArticleLayout, { buildArticleMetadata } from '@/components/blog/ArticleLayout'
import { getPost, postHref } from '@/lib/posts'
import { imageFor } from '@/lib/images'
import { AGES, CONTACT, PRACTICE_FAQS, PROVIDER, SITE_NAME } from '@/lib/site'

// Migrated from the practice's Wix post at the same slug under /post/ (August 13, 2025). The slug
// is kept for link equity; the title is now "Whole-Person Medication Management in Connecticut".
// Rewritten into psychiatric whole-person framing per FACTS.md section 13. Deleted: all three
// fabricated case studies (anxiety, chronic pain, diabetes), the alternative-therapy claims listed
// in FACTS.md section 13, lab tests and physical exams as part of the service, the non-psychiatric
// care team, and the unsourced evidence and outcome claims.

const SLUG = 'holistic-medication-management-services-in-connecticut'
const post = getPost(SLUG)
const image = imageFor(postHref(SLUG))

// PRACTICE_FAQS: [2] therapy and medication, [4] how medication is chosen, [5] medication is optional.
const THERAPY_AND_MEDICATION = PRACTICE_FAQS[2].a
const HOW_MEDICATION_IS_CHOSEN = PRACTICE_FAQS[4].a
const MEDICATION_OPTIONAL = PRACTICE_FAQS[5].a

// Jessica's own words (Headway profile, "What you can expect from me").
const SHARED_DECISIONS =
  'If medication management is appropriate, we will discuss options thoughtfully, including benefits, risks, and your comfort level with treatment. I believe clients should feel informed and actively involved in decisions about their care.'

const joinList = (items: readonly string[]) =>
  items.length < 3 ? items.join(' and ') : `${items.slice(0, -1).join(', ')}, and ${items[items.length - 1]}`

export const metadata = buildArticleMetadata({
  slug: SLUG,
  title: 'Whole-Person Medication Management in CT',
  description: post.description,
  image,
  date: post.date,
  updated: post.updated,
})

export default function WholePersonMedicationManagementPost() {
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
        { href: '/services/medication-management', label: 'Medication management' },
        { href: '/services/supportive-therapy', label: 'Supportive therapy' },
        { href: '/about', label: `About ${PROVIDER.name}` },
        {
          href: postHref('cash-only-medication-management-for-psychiatric-conditions'),
          label: 'Self-pay medication management',
        },
      ]}
    >
      <p>
        Managing your mental health can feel overwhelming, especially when medication is part of the picture. There
        are choices to make, side effects to weigh, and questions about what comes next.
      </p>
      <p>
        Whole-person medication management means your medication plan is built around you: your symptoms, your
        history, your goals and your daily life, not just a diagnosis. It is how {SITE_NAME} approaches psychiatric
        care.
      </p>
      <blockquote>
        <p>{PROVIDER.ownWords}</p>
        <cite>{PROVIDER.byline}</cite>
      </blockquote>

      <h2>What whole-person medication management means</h2>
      <p>In a whole-person approach, medication is one part of a larger plan. Here is what that looks like.</p>

      <h3>Care that is personal to you</h3>
      <p>
        No two people experience <Link href="/conditions/anxiety">anxiety</Link>,{' '}
        <Link href="/conditions/depression">depression</Link> or <Link href="/services/adhd-evaluation">ADHD</Link>{' '}
        in the same way, so no two treatment plans should look the same. Your first visit is about getting to know
        you, so your plan fits your needs rather than a one-size-fits-all approach.
      </p>

      <h3>How medications are chosen</h3>
      <p>When medication makes sense, the choice is careful and individual. In the practice&apos;s words:</p>
      <blockquote>
        <p>{HOW_MEDICATION_IS_CHOSEN}</p>
      </blockquote>

      <h3>Decisions you make together</h3>
      <p>You stay involved in every decision about your treatment. Jessica describes it this way:</p>
      <blockquote>
        <p>{SHARED_DECISIONS}</p>
        <cite>{PROVIDER.name}</cite>
      </blockquote>

      <h3>Medication is optional</h3>
      <p>You are never required to take medication. In the practice&apos;s words: “{MEDICATION_OPTIONAL}”</p>

      <h3>Learning about your treatment</h3>
      <p>
        Understanding your medications helps you take an active part in your care. That means plain explanations of
        what a medication is for, how to take it and which side effects to watch for, and room to ask questions at
        every visit.
      </p>

      <h2>Sleep, stress and daily habits</h2>
      <p>
        How you sleep, the stress you carry, how much you move and the shape of your days all affect how you feel.
        That is why these topics often come up in visits alongside medication.
      </p>
      <p>
        Jessica is also a family nurse practitioner, and she describes that background as giving her a broader
        understanding of the connection between physical and mental health. These conversations are part of your
        regular visits, not a separate program. Your primary care provider remains the right place for physical
        health questions.
      </p>
      <p>
        Visits can also include practical tools. Jessica draws on {joinList(PROVIDER.techniques)}. The goal is for
        you to leave each visit feeling supported, with tools you can use in daily life. Learn more about{' '}
        <Link href="/services/supportive-therapy">supportive therapy</Link>.
      </p>

      <h2>How it works</h2>
      <ol>
        <li>
          <strong>An initial evaluation.</strong> Your first visit is a{' '}
          <Link href="/services/psychiatric-evaluation">psychiatric evaluation</Link>: time to talk through your
          history, current concerns, symptoms, lifestyle and goals.
        </li>
        <li>
          <strong>A personalized plan.</strong> Together you decide on next steps. Your plan may include medication,
          supportive therapy within your visits, practical coping strategies, or a referral to a therapist.
        </li>
        <li>
          <strong>Follow-up visits.</strong>{' '}
          <Link href="/services/medication-management">Follow-up and medication management</Link> visits check on your
          progress and how your plan is working. If medication is part of your care, it is adjusted when needed so it
          stays safe and effective for you.
        </li>
        <li>
          <strong>Changes as your life changes.</strong> Your plan is not fixed. As your needs change, it changes with
          them.
        </li>
      </ol>
      <p>Therapy and medication work side by side. In the practice&apos;s words:</p>
      <blockquote>
        <p>{THERAPY_AND_MEDICATION}</p>
      </blockquote>

      <h2>What to expect from your visits</h2>
      <ul>
        <li>
          <strong>Open communication.</strong> You can ask questions and raise concerns about side effects, progress
          or cost.
        </li>
        <li>
          <strong>A focus on your goals.</strong> Your plan is built around what you want to change.
        </li>
        <li>
          <strong>A supportive, judgment-free space.</strong> Jessica describes her approach as {PROVIDER.approach[0]},
          and her style as {PROVIDER.approach[1]}.
        </li>
        <li>
          <strong>Secure video visits.</strong> Every visit is by{' '}
          <Link href="/services/telepsychiatry">telehealth</Link>, from the comfort and privacy of your home.
        </li>
      </ul>

      <h2>Finding the right fit in Connecticut</h2>
      <p>If you are looking for medication management, a few questions can help you choose a provider.</p>
      <ul>
        <li>
          <strong>Check credentials and licensure.</strong> Look for a clinician licensed in {CONTACT.state} with
          training in psychiatric care. Jessica&apos;s credentials: {PROVIDER.credentials}. {PROVIDER.licensure}
        </li>
        <li>
          <strong>Ask how visits work.</strong> Find out how visits happen, how follow-ups are scheduled, and how
          medication decisions are made.
        </li>
        <li>
          <strong>Check how you will pay.</strong> At {SITE_NAME} you can use insurance through Alma or Headway, or
          choose self-pay. See <Link href="/insurance">insurance and pricing</Link>.
        </li>
        <li>
          <strong>Trust your instincts.</strong> Choose someone who makes you feel comfortable and understood.
        </li>
      </ul>
      <p>
        Care is by secure video for patients in {CONTACT.state}: {AGES.short.toLowerCase()}. Have a question before
        you book? Call <a href={CONTACT.phoneHref}>{CONTACT.phone}</a> or read{' '}
        <Link href="/new-patients">what to expect at your first visit</Link>.
      </p>
    </ArticleLayout>
  )
}
