import Link from 'next/link'
import ArticleLayout, { buildArticleMetadata } from '@/components/blog/ArticleLayout'
import { imageFor } from '@/lib/images'
import { getPost, postHref } from '@/lib/posts'
import { AGES, CONTACT, PRACTICE_FAQS, PRICING, PROVIDER, SITE_NAME } from '@/lib/site'

// Autobuilt post, kept and rewritten against FACTS.md as a psychiatric-care article. Removed: the
// alternative-medicine section, chronic pain and digestive examples, diet and over-the-counter
// product examples, "root causes" wording, the evidence section (journal studies, outcome and cost
// claims), dead links to two blog slugs that never existed, and the invented date and team byline.
// Practice wording comes from lib/site.ts.

const SLUG = 'what-makes-a-treatment-plan-personalized'
const post = getPost(SLUG)
const image = imageFor('/new-patients')

export const metadata = buildArticleMetadata({ slug: SLUG, title: post.title, description: post.description, image })

// PRACTICE_FAQS: [4] how medication is chosen, [5] medication is optional.
const HOW_MEDICATION_IS_CHOSEN = PRACTICE_FAQS[4].a
const MEDICATION_OPTIONAL = PRACTICE_FAQS[5].a

const joinList = (items: readonly string[]) =>
  items.length < 3 ? items.join(' and ') : `${items.slice(0, -1).join(', ')}, and ${items[items.length - 1]}`

const RELATED = [
  { href: '/services/psychiatric-evaluation', label: 'Psychiatric evaluation' },
  { href: '/new-patients', label: 'Your first visit' },
  { href: postHref('what-to-expect-during-your-first-psychiatric-evaluation'), label: 'What to expect at your first evaluation' },
]

export default function PersonalizedTreatmentPlanPost() {
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
        Maybe you have had appointments where you felt like a chart number: a quick look at your file, a
        standard plan, and out the door. But your history, your life and your goals are not standard. Your
        mental health care should not be either.
      </p>
      <p>
        A personalized treatment plan starts from who you are, not just a diagnosis. Here is what goes into one,
        and how it changes over time.
      </p>

      <h2>Beyond the diagnosis: your whole story</h2>
      <p>
        A personalized plan begins before any decision about medication. It starts with understanding you: your
        symptoms and history, and also your work or school schedule, your responsibilities at home, your values,
        your past experiences with care, and what you want to change.
      </p>
      <p>
        Two people with the same diagnosis can need very different plans. Their schedules, health, past
        treatment and priorities all shape what will actually work.
      </p>
      <p>
        That is why a good evaluation asks about sleep, stress, daily routines, the support you have, and what
        you have already tried. Each piece helps build a plan that fits.
      </p>
      <p>This is how {SITE_NAME} describes the first visit:</p>
      <blockquote>
        <p>&ldquo;{PRICING.initialEvaluation.description}&rdquo;</p>
        <cite>
          {SITE_NAME}, on the {PRICING.initialEvaluation.name.toLowerCase()}
        </cite>
      </blockquote>

      <h2>The core elements of a personalized plan</h2>
      <p>A few things turn a standard approach into a plan built for you:</p>
      <ul>
        <li>
          <strong>A thorough assessment.</strong> Understanding your symptoms, what contributes to them, and how
          they have changed over time.
        </li>
        <li>
          <strong>Shared goal-setting.</strong> Goals that matter to you, not just a checklist of symptoms.
        </li>
        <li>
          <strong>A mix of approaches that fits you.</strong> Medication when it is appropriate, therapy and coping
          skills, and practical changes to your daily routine.
        </li>
        <li>
          <strong>Flexibility.</strong> Regular check-ins and adjustments as you respond and as your life changes.
        </li>
        <li>
          <strong>Education.</strong> A clear understanding of your condition and your options, so you can take an
          active part in your care.
        </li>
      </ul>
      <p>Together, these make care feel collaborative rather than handed down to you.</p>

      <h2>How medication decisions are personalized</h2>
      <p>
        When medication is part of the conversation, personalization matters a great deal. The practice&apos;s
        answer to &ldquo;How do you decide which medication is right for me?&rdquo; is: &ldquo;
        {HOW_MEDICATION_IS_CHOSEN}&rdquo;
      </p>
      <p>
        And if you would rather not take medication, the practice&apos;s answer is: &ldquo;{MEDICATION_OPTIONAL}
        &rdquo;
      </p>
      <p>
        Visits can also include <Link href="/services/supportive-therapy">supportive therapy</Link>. Jessica
        draws on {joinList(PROVIDER.techniques)}, tailored to what you need.
      </p>

      <h2>Your active role</h2>
      <p>
        In personalized care, you are not a passive recipient. Your observations, feedback and daily choices
        shape the plan.
      </p>
      <p>
        That means being honest about what is working and what is not. If a medication gives you side effects,
        if a coping strategy is not helping, or if a change feels impossible to keep up, say so. That is not
        failure. It is useful information that helps refine your plan.
      </p>
      <p>It also means asking questions:</p>
      <ul>
        <li>Why is this recommended?</li>
        <li>What are we trying to achieve?</li>
        <li>What are the alternatives?</li>
        <li>What should I expect, and when?</li>
        <li>How will we know if it is working?</li>
      </ul>
      <p>A personalized plan should make sense to you, in plain language.</p>

      <h2>How your plan changes over time</h2>
      <p>
        A personalized plan is not written once and filed away. Follow-up visits are where it keeps fitting you:
        checking your progress, talking about how you are feeling, and adjusting what is not working. Learn more
        about <Link href="/services/medication-management">follow-up and medication management</Link>.
      </p>
      <p>
        Your life changes too. A new job, a move, a loss or a new diagnosis can all shift what you need, and your
        plan should shift with it.
      </p>

      <h2>Finding care that fits</h2>
      <p>
        When you look for a mental health provider, watch for signs of real personalization. Do they give you
        enough time? Do they ask about your life beyond your symptoms? Do they explain their reasoning and
        welcome your input? Do they check how things are going and adjust when needed?
      </p>
      <p>
        Jessica describes her approach as &ldquo;{PROVIDER.approach[0]}&rdquo; and her style as &ldquo;
        {PROVIDER.approach[1]}.&rdquo; Care at {SITE_NAME} is by secure video for{' '}
        {AGES.short.toLowerCase()} in {CONTACT.state}.
      </p>
      <p>
        You deserve a treatment plan that recognizes you as an individual, respects your goals, and meets you
        where you are.
      </p>
    </ArticleLayout>
  )
}
