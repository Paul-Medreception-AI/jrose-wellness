import type { Metadata } from 'next'
import Link from 'next/link'
import ArticleLayout, { Callout, buildArticleMetadata } from '@/components/blog/ArticleLayout'
import { imageFor } from '@/lib/images'
import { CONTACT, PRACTICE_FAQS, PRICING, PROVIDER, SITE_NAME } from '@/lib/site'

const SLUG = 'medication-myths-common-misconceptions-about-psychiatric-med'
const TITLE = 'Medication Myths: Common Misconceptions About Psychiatric Medications'
const DESCRIPTION =
  'Common myths about psychiatric medications, what taking medication really involves, and questions worth asking your provider before you start.'
const IMAGE = imageFor('/services/medication-management')

const MED_OPTIONAL = PRACTICE_FAQS.find((f) => f.q === "What if I don't want to take medication?")!
const HOW_DECIDE = PRACTICE_FAQS.find((f) => f.q === 'How do you decide which medication is right for me?')!

export const metadata: Metadata = buildArticleMetadata({
  slug: SLUG,
  title: 'Psychiatric Medication Myths and Facts',
  description: DESCRIPTION,
  image: IMAGE,
})

export default function MedicationMythsArticle() {
  return (
    <ArticleLayout
      slug={SLUG}
      title={TITLE}
      description={DESCRIPTION}
      image={IMAGE}
      category="Medication"
      related={[
        { href: '/services/medication-management', label: 'Medication Management' },
        { href: '/services/psychiatric-evaluation', label: 'Psychiatric Evaluation' },
        { href: '/faq', label: 'Frequently Asked Questions' },
        { href: '/blog/how-personalized-treatment-plans-improve-mental-health-outco', label: 'How Personalized Treatment Plans Shape Mental Health Care' },
      ]}
    >
      <p>
        Misinformation about psychiatric medication is everywhere, from well-meaning friends to alarming headlines.
        Myths can create fear and keep people from getting help that could make a real difference.
      </p>
      <p>
        If you have wondered whether medication is right for you, or worried about what others might think, you are
        not alone. Here are some of the most common myths, and what is actually true.
      </p>

      <h2>Myth: Medication will change your personality</h2>
      <p>
        Psychiatric medications are meant to ease symptoms like persistent low mood, constant worry, or racing
        thoughts. They are not meant to change who you are.
      </p>
      <p>
        When depression dulls your ability to enjoy things, or anxiety keeps you from being present with the people
        you love, the right treatment can help you feel more like yourself again. If you ever feel flat, numb, or not
        like yourself on a medication, tell your prescriber. It usually means the dose or the medication needs a
        second look.
      </p>

      <h2>Myth: Taking medication means you are weak</h2>
      <p>
        Mental health conditions are health conditions. Nobody would call someone weak for taking medication for
        their thyroid or blood pressure. Depression, anxiety, bipolar disorder, and other conditions involve biology,
        life experiences, and environment. Needing support for them says nothing about your character.
      </p>
      <blockquote>
        Getting help, including medication when you need it, is a way of taking your health seriously. That takes
        strength.
      </blockquote>

      <h2>Myth: Once you see a prescriber, you have to take medication</h2>
      <p>
        Seeing a psychiatric nurse practitioner does not commit you to medication. It is a conversation, and the
        decision is yours. In Jessica’s words:
      </p>
      <blockquote>
        {MED_OPTIONAL.a}
        <cite>
          {PROVIDER.name}, {PROVIDER.credentials}
        </cite>
      </blockquote>

      <h2>Myth: You will be on medication forever</h2>
      <p>
        Starting a medication does not automatically mean a lifetime commitment. Some people benefit from long-term
        treatment. Others take medication for a period of time and then, with their prescriber, taper off when it makes
        sense.
      </p>
      <p>
        How long you stay on a medication depends on your condition, how you respond, your history, and your goals.
        What matters most is that you are part of the conversation. Regular check-ins give you a chance to talk about
        how treatment is going and whether changes, including stopping, make sense. Stopping on your own, especially
        suddenly, can cause problems, so make that plan together.
      </p>

      <h2>Myth: The same medication works the same for everyone</h2>
      <p>
        People respond differently to the same medication, and finding the right fit can take some adjustment. Asked
        how she decides which medication is right for someone, Jessica says: “{HOW_DECIDE.a}”
      </p>
      <p>
        If the first medication you try is not a good fit, that does not mean nothing will work. It means you have
        learned something useful for the next step.
      </p>

      <h2>Myth: Medication is a quick fix</h2>
      <p>
        On the other side of the fear is the hope that medication will fix everything overnight. The reality is more
        gradual. Many psychiatric medications, including antidepressants, take several weeks to show their full
        effect, and some side effects can show up before the benefits do. That is why follow-up and open
        communication matter so much.
      </p>
      <p>
        Medication can be a big help, and it often works best alongside therapy, coping skills, support from other
        people, and steady daily routines.
      </p>

      <h2>What to realistically expect</h2>
      <ul>
        <li>
          <strong>A thorough evaluation first.</strong> Your symptoms, history, past medications, and goals are part of
          deciding whether medication makes sense at all.
        </li>
        <li>
          <strong>A careful start.</strong> Prescribers often begin with a lower dose and adjust from there, to find
          what works while keeping side effects in check.
        </li>
        <li>
          <strong>Follow-up visits.</strong> Regular check-ins to see how you are responding and to talk through any
          concerns.
        </li>
        <li>
          <strong>Honest communication.</strong> Tell your prescriber about improvements, side effects, and anything
          else you take, including over-the-counter medicines and vitamins, since some can interact.
        </li>
        <li>
          <strong>Support beyond the prescription.</strong> Therapy, coping strategies, and daily habits work
          alongside medication.
        </li>
      </ul>

      <Callout title={`Medication management at ${SITE_NAME}`}>
        <p>{PRICING.followUp.description}</p>
        <p>
          {PROVIDER.name}, a {PROVIDER.title.toLowerCase()}, provides medication management by secure video for
          patients in {CONTACT.state}. Learn more about{' '}
          <Link href="/services/medication-management">medication management</Link>, or read answers to{' '}
          <Link href="/faq">common questions about medication</Link>.
        </p>
      </Callout>

      <h2>Moving forward with confidence</h2>
      <p>
        Knowing the facts about psychiatric medication helps you make informed choices. Whether medication is right
        for you is a personal decision, best made with a clinician who knows your situation.
      </p>
      <p>
        If myths have kept you from getting help, you deserve support, and taking the first step is something to be
        proud of. If you have questions about medication or any part of treatment,{' '}
        <Link href="/book-appointment">book an appointment</Link> to talk it through.
      </p>
    </ArticleLayout>
  )
}
