import Link from 'next/link'
import ArticleLayout, { buildArticleMetadata } from '@/components/blog/ArticleLayout'
import { imageFor } from '@/lib/images'
import { getPost, postHref } from '@/lib/posts'
import { PRACTICE_FAQS, PRICING, PROVIDER, SITE_NAME } from '@/lib/site'

// Autobuilt post, kept and rewritten against FACTS.md. Removed: lab monitoring (not confirmed),
// evidence claims, "best outcomes", the blanket "not addictive" claim, and dead links to
// /services/mental-health and /services/therapy. The practice's own FAQ answers are quoted verbatim
// from lib/site.ts, including the controlled-substance answer (and nothing beyond it).

const SLUG = 'understanding-medication-management-in-psychiatric-care'
const post = getPost(SLUG)
const image = imageFor('/services/medication-management')

export const metadata = buildArticleMetadata({ slug: SLUG, title: post.title, description: post.description, image })

// PRACTICE_FAQS: [3] controlled substances, [4] how medication is chosen, [5] medication is optional.
const CONTROLLED_SUBSTANCES = PRACTICE_FAQS[3].a
const HOW_MEDICATION_IS_CHOSEN = PRACTICE_FAQS[4].a
const MEDICATION_OPTIONAL = PRACTICE_FAQS[5].a

// Jessica's own words (Headway profile, "What you can expect from me").
const SHARED_DECISIONS =
  'If medication management is appropriate, we will discuss options thoughtfully, including benefits, risks, and your comfort level with treatment. I believe clients should feel informed and actively involved in decisions about their care.'

const RELATED = [
  { href: '/services/medication-management', label: 'Medication management' },
  { href: '/services/psychiatric-evaluation', label: 'Psychiatric evaluation' },
  { href: postHref('when-to-consider-changing-your-mental-health-treatment'), label: 'When to consider changing your treatment' },
]

export default function MedicationManagementPost() {
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
        If you have been struggling with anxiety, depression or another mental health condition, medication may
        have come up as an option. That can bring a mix of feelings: hope for relief, and a lot of questions. How
        do these medications work? What should you expect? How do you know if it is right for you?
      </p>
      <p>
        Medication management is a collaborative, ongoing process. It is not about writing a prescription and
        sending you on your way. It is a partnership aimed at finding what actually helps, with as few side
        effects as possible.
      </p>

      <h2>What is psychiatric medication management?</h2>
      <p>
        Medication management means prescribing, monitoring and adjusting medications for mental health
        conditions. These can include antidepressants, anti-anxiety medications, mood stabilizers, antipsychotics
        and medications for ADHD.
      </p>
      <p>
        It starts with a thorough evaluation of your symptoms, history, current medications and goals. You talk
        through the possible benefits and risks together, so you can make an informed choice about whether
        medication is right for you.
      </p>
      <p>
        Once you start, your progress is followed over time and the plan is adjusted as needed. What works for
        one person may not work for another, so finding the right fit can take patience and good communication.
      </p>
      <blockquote>
        <p>&ldquo;{SHARED_DECISIONS}&rdquo;</p>
        <cite>{PROVIDER.byline}</cite>
      </blockquote>

      <h2>When is medication a good fit?</h2>
      <p>
        Medication can be an important part of care, but it is not always needed. Things that usually factor
        into the decision:
      </p>
      <ul>
        <li>
          <strong>How much your symptoms affect daily life.</strong> Symptoms that get in the way of work, school,
          sleep or relationships are worth taking seriously.
        </li>
        <li>
          <strong>What you have tried before.</strong> Past treatment, including how you responded to any past
          medications, helps guide next steps.
        </li>
        <li>
          <strong>The type of condition.</strong> For some conditions, like bipolar disorder or schizophrenia,
          medication is usually a core part of treatment.
        </li>
        <li>
          <strong>Safety.</strong> Some situations call for acting sooner rather than later.
        </li>
        <li>
          <strong>Your preferences.</strong> Your comfort level and goals are central to the decision.
        </li>
      </ul>
      <p>
        At {SITE_NAME}, the answer to &ldquo;How do you decide which medication is right for me?&rdquo; is:
        &ldquo;{HOW_MEDICATION_IS_CHOSEN}&rdquo;
      </p>
      <p>
        Many people use medication alongside therapy. Feeling steadier can make it easier to practice coping
        skills and make changes that matter to you.
      </p>

      <h2>What the process looks like</h2>
      <h3>An evaluation</h3>
      <p>
        Your first visit covers your mental health history, current symptoms, physical health conditions,
        allergies, and everything you currently take, including over-the-counter products. That helps identify
        the safest options for you.
      </p>
      <h3>Education and consent</h3>
      <p>
        Before you start anything, you should understand how a medication works, what it may help with, common
        side effects, and what to watch for. There is always time for your questions.
      </p>
      <h3>Starting a medication</h3>
      <p>
        Many psychiatric medications are started at a low dose and adjusted gradually, which can help limit side
        effects. Some take several weeks to reach their full effect, so ask what timeline to expect for yours.
      </p>
      <h3>Follow-up visits</h3>
      <p>
        Regular check-ins are how the plan stays on track. In the practice&apos;s own words:
      </p>
      <blockquote>
        <p>&ldquo;{PRICING.followUp.description}&rdquo;</p>
        <cite>{SITE_NAME}</cite>
      </blockquote>
      <h3>Adjusting the plan</h3>
      <p>
        If a medication is not helping enough or the side effects are bothersome, the dose may be changed, a
        different medication tried, or another one added. This trial-and-adjust stage is a normal part of
        finding the right fit.
      </p>

      <h2>Common questions and concerns</h2>
      <h3>Will I become dependent on it?</h3>
      <p>
        Many commonly prescribed psychiatric medications, including most antidepressants, are not considered
        habit-forming. A few types can lead to dependence, and some medications need to be tapered rather than
        stopped all at once. Ask about this for any medication you are offered.
      </p>
      <h3>Will you prescribe controlled substances?</h3>
      <p>The practice&apos;s answer: &ldquo;{CONTROLLED_SUBSTANCES}&rdquo;</p>
      <h3>Will medication change my personality?</h3>
      <p>
        Psychiatric medications are meant to ease symptoms, not change who you are. Many people say they feel
        more like themselves once their symptoms settle. If a medication makes you feel flat or not like
        yourself, tell your prescriber.
      </p>
      <h3>What about side effects?</h3>
      <p>
        Any medication can cause side effects. Many are mild and fade with time, but you should never have to
        just put up with them. Report side effects instead of stopping on your own. There are often other
        options to try.
      </p>
      <h3>Will I need to take it forever?</h3>
      <p>
        Not necessarily. Some people take medication for a period of time, while others find longer-term
        treatment helps keep symptoms from coming back. Whether to continue or stop is a decision you make
        together, based on your situation.
      </p>
      <h3>What if I do not want to take medication?</h3>
      <p>&ldquo;{MEDICATION_OPTIONAL}&rdquo;</p>

      <h2>Tips for getting the most from medication management</h2>
      <ul>
        <li>
          <strong>Be honest</strong> about your symptoms, side effects and concerns. Open communication makes
          everything else work better.
        </li>
        <li>
          <strong>Take medication as prescribed.</strong> If you miss doses or have trouble remembering, say so.
          There may be simpler options.
        </li>
        <li>
          <strong>Keep a simple log</strong> of your mood, sleep, energy and any side effects. It gives your
          prescriber concrete information to work with.
        </li>
        <li>
          <strong>Keep your follow-up visits,</strong> even when you feel better. That is when the plan gets
          fine-tuned.
        </li>
        <li>
          <strong>Do not stop suddenly</strong> without talking to your prescriber. Some medications need to be
          tapered to avoid withdrawal symptoms.
        </li>
        <li>
          <strong>Support your treatment with daily habits,</strong> like regular sleep, movement, stress
          management and time with people you care about.
        </li>
      </ul>

      <h2>Medication is one part of your care</h2>
      <p>
        Medication can be a helpful tool, but it is one part of a broader plan that may also include therapy,
        coping skills, daily routines and support from the people in your life. At {SITE_NAME}, visits can
        include <Link href="/services/supportive-therapy">supportive therapy</Link> as well as{' '}
        <Link href="/services/medication-management">medication management</Link>.
      </p>
      <p>
        If you are thinking about medication, or you have questions about what you take now, a{' '}
        <Link href="/services/psychiatric-evaluation">psychiatric evaluation</Link> is a good place to start.
      </p>
    </ArticleLayout>
  )
}
