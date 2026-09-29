import type { Metadata } from 'next'
import Link from 'next/link'
import ArticleLayout, { Callout, buildArticleMetadata } from '@/components/blog/ArticleLayout'
import { imageFor } from '@/lib/images'
import { CONTACT, PRACTICE_FAQS, PRICING, PROVIDER, SITE_NAME } from '@/lib/site'

const SLUG = 'how-personalized-treatment-plans-improve-mental-health-outco'
const TITLE = 'How Personalized Treatment Plans Shape Mental Health Care'
const DESCRIPTION =
  'Why a treatment plan built around your symptoms, history, and goals matters, and what personalized psychiatric care looks like from visit to visit.'
const IMAGE = imageFor('/services/psychiatric-evaluation')

const HOW_DECIDE = PRACTICE_FAQS.find((f) => f.q === 'How do you decide which medication is right for me?')!
const MED_OPTIONAL = PRACTICE_FAQS.find((f) => f.q === "What if I don't want to take medication?")!

export const metadata: Metadata = buildArticleMetadata({
  slug: SLUG,
  title: 'Personalized Mental Health Treatment Plans',
  description: DESCRIPTION,
  image: IMAGE,
})

export default function PersonalizedPlansArticle() {
  return (
    <ArticleLayout
      slug={SLUG}
      title={TITLE}
      description={DESCRIPTION}
      image={IMAGE}
      category="Getting Care"
      related={[
        { href: '/services/psychiatric-evaluation', label: 'Psychiatric Evaluation' },
        { href: '/services/medication-management', label: 'Medication Management' },
        { href: '/blog/medication-myths-common-misconceptions-about-psychiatric-med', label: 'Medication Myths: Common Misconceptions About Psychiatric Medications' },
        { href: '/blog/how-to-prepare-for-your-first-telehealth-appointment', label: 'How to Prepare for Your First Telehealth Appointment' },
      ]}
    >
      <p>
        In mental health care, no single approach works for everyone. Each person brings a different mix of
        experiences, history, circumstances, and strengths. The same medication at the same dose, or the same set of
        steps for everyone, often misses what matters most about you.
      </p>
      <p>
        A personalized treatment plan starts from the other direction: from you. Whether you are dealing with
        depression, anxiety, trauma, or something else, here is what that looks like and why it matters.
      </p>

      <h2>What is a personalized treatment plan?</h2>
      <p>
        A personalized plan is built around your history, symptoms, daily life, preferences, culture, and goals.
        Instead of following a fixed script, you and your clinician build it together, and it changes as you do.
      </p>
      <p>Here is how {SITE_NAME} describes the first visit, where that plan begins:</p>
      <blockquote>
        {PRICING.initialEvaluation.description}
        <cite>{SITE_NAME}, on the initial evaluation</cite>
      </blockquote>

      <h2>Why one-size-fits-all falls short</h2>
      <p>
        Standard approaches can be a useful starting point, but people are not standard. What helps one person with
        anxiety may not help another, even when their symptoms look alike on paper. Two people can respond very
        differently to the same medication. Past experiences, trauma, support at home, and personal values all shape
        what will work.
      </p>
      <p>
        When care does not account for those differences, people can feel unheard or discouraged. Some stop treatment
        altogether, believing nothing will help, when they simply have not found the right fit yet.
      </p>

      <h2>How medication decisions get made</h2>
      <p>
        If medication is part of the conversation, personalization matters just as much. Asked how she decides which
        medication is right for someone, {PROVIDER.name} puts it this way:
      </p>
      <blockquote>
        {HOW_DECIDE.a}
        <cite>
          {PROVIDER.name}, {PROVIDER.credentials}
        </cite>
      </blockquote>
      <p>And if you would rather not take medication at all: “{MED_OPTIONAL.a}”</p>

      <h2>What goes into a good plan</h2>
      <ul>
        <li>
          <strong>A thorough evaluation.</strong> Your mental health history, medical history, current symptoms,
          daily life, and what you want to feel different.
        </li>
        <li>
          <strong>Goals you set together.</strong> You and your clinician agree on what progress looks like for you.
        </li>
        <li>
          <strong>Options that fit.</strong> Medication, supportive therapy, practical coping strategies, or a mix,
          chosen for your situation and your preferences.
        </li>
        <li>
          <strong>Follow-up and adjustment.</strong> Regular check-ins to see what is working and change what is not.
        </li>
        <li>
          <strong>Your whole day, not just symptoms.</strong> Sleep, stress, relationships, and routines are part of
          the conversation.
        </li>
        <li>
          <strong>Respect for who you are.</strong> Your culture, values, and beliefs shape your care.
        </li>
      </ul>

      <h2>Who benefits most?</h2>
      <p>Everyone deserves care that fits, but a personalized plan matters especially if:</p>
      <ul>
        <li>
          <strong>Past treatment has not helped.</strong> A fresh look can turn up things that were missed, like sleep
          problems, substance use, side effects, or past trauma.
        </li>
        <li>
          <strong>You are dealing with more than one thing.</strong> Depression and anxiety, or anxiety and substance
          use, often affect each other. A plan can address them together instead of one at a time.
        </li>
        <li>
          <strong>Your life has its own constraints.</strong> Parents, caregivers, shift workers, students, and people
          in the middle of big life changes all need care that fits their real days.
        </li>
      </ul>

      <h2>How to advocate for yourself</h2>
      <p>You have every right to take an active part in your care. A few ways to do that:</p>
      <ul>
        <li>Share your full story, including past treatments and what did and did not help.</li>
        <li>Ask why a treatment is recommended, and ask about alternatives if something does not feel right.</li>
        <li>Speak up about side effects, slow progress, or life changes that affect your treatment.</li>
        <li>Look for a clinician who makes decisions with you and treats you as a partner.</li>
      </ul>

      <Callout title="Follow-up visits keep the plan current">
        <p>{PRICING.followUp.description}</p>
        <p>
          {SITE_NAME} offers care by secure video for patients in {CONTACT.state}. Learn more about{' '}
          <Link href="/services/psychiatric-evaluation">psychiatric evaluation</Link> and{' '}
          <Link href="/services/medication-management">medication management</Link>.
        </p>
      </Callout>

      <h2>Care that sees you</h2>
      <p>
        You are more than a diagnosis. If you have felt stuck or unheard in past treatment, a plan built around you
        can help you move forward with more clarity and confidence.
      </p>
      <p>
        If you are ready to start that conversation, <Link href="/book-appointment">book an appointment</Link>.
      </p>
    </ArticleLayout>
  )
}
