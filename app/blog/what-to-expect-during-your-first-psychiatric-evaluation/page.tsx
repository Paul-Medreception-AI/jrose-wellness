import Link from 'next/link'
import ArticleLayout, { buildArticleMetadata } from '@/components/blog/ArticleLayout'
import CrisisNotice from '@/components/site/CrisisNotice'
import { imageFor } from '@/lib/images'
import { getPost } from '@/lib/posts'
import { BOOKING, PRACTICE_FAQS, PRICING, PROVIDER, SITE_NAME } from '@/lib/site'

// Autobuilt post, kept and rewritten against FACTS.md. Removed: the invented 60 to 90 minute
// length (only the Alma 45-minute intake is sourced, via BOOKING.alma.note), blood work and
// standardized questionnaires as next steps, office details (arriving early, paperwork), a
// prevalence statistic and evidence claims, the city location, and the alternative-medicine
// framing. Jessica's own words are from her Headway profile ("What you can expect from me").

const SLUG = 'what-to-expect-during-your-first-psychiatric-evaluation'
const post = getPost(SLUG)
const image = imageFor('/services/psychiatric-evaluation')

export const metadata = buildArticleMetadata({ slug: SLUG, title: post.title, description: post.description, image })

// PRACTICE_FAQS[2]: "Do you provide therapy, medication management, or both?"
const THERAPY_AND_MEDICATION = PRACTICE_FAQS[2].a

// Jessica's own words (Headway profile, "What you can expect from me").
const WELCOME =
  'Clients can expect a welcoming, supportive, and judgment-free environment during their first session. My goal is to help clients feel comfortable, heard, and understood from the very beginning. I know starting therapy or psychiatric care can feel intimidating, so I approach each session with compassion, curiosity, and openness.'
const LEAVE_WITH =
  'By the end of the session, clients can typically expect to leave with a clearer understanding of possible next steps, initial treatment goals, and practical strategies or recommendations to begin working toward feeling better.'

const RELATED = [
  { href: '/services/psychiatric-evaluation', label: 'Psychiatric evaluation' },
  { href: '/new-patients', label: 'New patients' },
  { href: '/insurance', label: 'Insurance and pricing' },
]

export default function FirstPsychiatricEvaluationPost() {
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
        Booking your first psychiatric evaluation is a real step toward feeling better. Not knowing what will
        happen can make it feel bigger than it is. Knowing what to expect, and how to prepare, can make the
        visit feel more manageable and more useful.
      </p>
      <p>
        A psychiatric evaluation is a thorough conversation about your mental health history, your current
        symptoms and your overall well-being. It is a conversation, not an interrogation, and it is the starting
        point for your diagnosis and treatment plan.
      </p>

      <h2>What is a psychiatric evaluation?</h2>
      <p>
        A psychiatric evaluation is an in-depth clinical interview with a professional trained to assess,
        diagnose and treat mental health conditions. At {SITE_NAME}, that is {PROVIDER.byline}, a{' '}
        {PROVIDER.title.toLowerCase()}. Every visit is by secure video.
      </p>
      <p>How long does it take? It depends on how you book. {BOOKING.alma.note}</p>
      <p>
        It goes deeper than a quick check-in at a primary care visit. You will talk about your thoughts,
        feelings, behavior, relationships and life circumstances, along with your symptoms, health history,
        family background and any treatment you have had before.
      </p>
      <p>
        The goal is not to judge or label you. It is to understand what you are going through so you can build a
        plan together.
      </p>
      <blockquote>
        <p>&ldquo;{WELCOME}&rdquo;</p>
        <cite>{PROVIDER.byline}</cite>
      </blockquote>

      <h2>What questions will be asked?</h2>
      <p>
        Every evaluation is tailored to the person, but these topics usually come up:
      </p>
      <ul>
        <li>
          <strong>What brings you in:</strong> the symptoms or concerns that are bothering you most right now
        </li>
        <li>
          <strong>Symptom history:</strong> when things started, how they have changed, and what makes them
          better or worse
        </li>
        <li>
          <strong>Medical history:</strong> ongoing health conditions, past surgeries, and anything else that
          could affect your mental health
        </li>
        <li>
          <strong>Mental health history:</strong> past diagnoses, hospital stays, and treatments you have tried
        </li>
        <li>
          <strong>Medications:</strong> everything you take, including over-the-counter products
        </li>
        <li>
          <strong>Family history:</strong> mental health conditions or substance use in your family
        </li>
        <li>
          <strong>Substance use:</strong> alcohol, tobacco, cannabis or other drugs, and how often
        </li>
        <li>
          <strong>Your life now:</strong> your living situation, work or school, relationships, and major
          stressors or trauma
        </li>
        <li>
          <strong>Safety:</strong> whether you have had thoughts of harming yourself or others
        </li>
      </ul>
      <p>
        Some of these questions can feel personal. They are asked of everyone, and honest answers help you get
        the right care.
      </p>
      <p>If you are having thoughts of harming yourself, do not wait for an appointment. Get help now:</p>
      <div className="mt-4">
        <CrisisNotice variant="compact" />
      </div>

      <h2>The mental status exam</h2>
      <p>
        Along with asking questions, your clinician makes a mental status exam: a structured set of observations
        about how you are doing in the moment. It usually covers:
      </p>
      <ul>
        <li><strong>Appearance and behavior:</strong> how you present, your eye contact and your level of engagement</li>
        <li><strong>Speech:</strong> tone, pace, volume and flow</li>
        <li><strong>Mood and affect:</strong> how you say you feel and the emotions you show</li>
        <li><strong>Thought process:</strong> whether your thinking feels organized or scattered</li>
        <li><strong>Thought content:</strong> worries, obsessions, unusual beliefs, or thoughts of self-harm</li>
        <li><strong>Perception:</strong> whether you hear or see things others do not</li>
        <li><strong>Cognition:</strong> memory, attention and concentration</li>
        <li><strong>Insight and judgment:</strong> how you understand what is happening and how you make decisions</li>
      </ul>
      <p>
        This is not a test you need to study for. It is simply part of the conversation, and it works the same way
        over video.
      </p>

      <h2>How to prepare</h2>
      <p>A little preparation can make the visit more useful and ease some nerves:</p>
      <ul>
        <li>
          <strong>List your symptoms.</strong> Write down what you have noticed, when it started, and how it
          affects your daily life.
        </li>
        <li>
          <strong>Gather records.</strong> If you have seen other clinicians, have past evaluations, discharge
          summaries or results handy.
        </li>
        <li>
          <strong>List everything you take,</strong> including prescriptions, over-the-counter products and
          doses.
        </li>
        <li>
          <strong>Note your family history,</strong> if you know of mental health conditions in your family.
        </li>
        <li>
          <strong>Write down your questions,</strong> so you do not forget them in the moment.
        </li>
        <li>
          <strong>Set up your space.</strong> Find a private, quiet spot, check your device, camera and internet,
          and join a few minutes early. Read more about{' '}
          <Link href="/services/telepsychiatry">how video visits work</Link>.
        </li>
        <li>
          <strong>Be honest.</strong> The more complete your answers, the better your plan can fit you.
        </li>
      </ul>

      <h2>What happens after the evaluation?</h2>
      <p>In Jessica&apos;s words:</p>
      <blockquote>
        <p>&ldquo;{LEAVE_WITH}&rdquo;</p>
        <cite>{PROVIDER.byline}</cite>
      </blockquote>
      <p>
        Your plan may include medication, supportive therapy, practical changes, or a combination. You will talk
        through the benefits and risks of each option, and medication is always optional.
      </p>
      <p>
        Asked whether she provides therapy, medication management or both, Jessica says: &ldquo;
        {THERAPY_AND_MEDICATION}&rdquo;
      </p>
      <p>
        From there, <Link href="/services/medication-management">follow-up visits</Link> check on your progress
        and adjust your plan as needed.
      </p>

      <h2>Why it matters</h2>
      <p>
        Mental health conditions are common, treatable and nothing to be ashamed of. Still, many people put off
        getting help because of stigma, fear, or not knowing what the process looks like.
      </p>
      <p>
        A thorough evaluation lets you and your clinician see the full picture, including your symptoms, your
        history, your strengths and your challenges, so your treatment fits you.
      </p>
      <p>
        <strong>Ready to take the next step?</strong> If symptoms like ongoing sadness, anxiety, mood swings or
        trouble focusing are getting in the way of your life, a{' '}
        <Link href="/services/psychiatric-evaluation">psychiatric evaluation</Link> can offer clarity and a path
        forward. You can book with insurance through Alma or Headway, or self-pay (
        {PRICING.initialEvaluation.price} for the {PRICING.initialEvaluation.name.toLowerCase()}). See{' '}
        <Link href="/insurance">insurance and pricing</Link>.
      </p>
    </ArticleLayout>
  )
}
