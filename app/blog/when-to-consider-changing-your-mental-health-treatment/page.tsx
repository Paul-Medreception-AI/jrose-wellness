import Link from 'next/link'
import ArticleLayout, { Callout, buildArticleMetadata } from '@/components/blog/ArticleLayout'
import { imageFor } from '@/lib/images'
import { getPost, postHref } from '@/lib/posts'
import { CONTACT, NO_MEDICAL_ADVICE, PRACTICE_FAQS, SITE_NAME } from '@/lib/site'

// Autobuilt post, kept and rewritten against FACTS.md (section 11 framing, evidence and location
// rules). Removed: the alternative-medicine sections (diet and over-the-counter products as
// treatment, "as effective as medication"), EMDR and somatic therapy as options, the invented
// week-count timelines, the city location and the invented date. Added a note never to stop
// medication suddenly, the practice's FAQ answer on choosing medication, and the crisis note.

const SLUG = 'when-to-consider-changing-your-mental-health-treatment'
const post = getPost(SLUG)
// No image of its own: the supportive therapy hero (writing in a journal by a window).
const image = imageFor('/services/supportive-therapy')

export const metadata = buildArticleMetadata({ slug: SLUG, title: post.title, description: post.description, image })

// PRACTICE_FAQS[4]: "How do you decide which medication is right for me?"
const HOW_MEDICATION_IS_CHOSEN = PRACTICE_FAQS[4].a

const RELATED = [
  { href: '/services/medication-management', label: 'Medication management' },
  { href: postHref('understanding-medication-management-in-psychiatric-care'), label: 'Understanding medication management' },
  { href: '/services/psychiatric-evaluation', label: 'Psychiatric evaluation' },
]

export default function ChangingTreatmentPost() {
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
        Starting mental health treatment takes courage. But what if the treatment that used to help does not
        seem to be working anymore? Or the side effects are getting hard to live with?
      </p>
      <p>
        Treatment is rarely one-size-fits-all, and your needs can change over time. Knowing when and how to
        revisit your plan is a normal part of care, and it can be the difference between feeling stuck and
        moving forward.
      </p>

      <h2>Signs your treatment may need a change</h2>
      <p>
        These signs do not mean you or your provider did something wrong. They mean it is time to take another
        look.
      </p>
      <ul>
        <li>
          <strong>No improvement after a fair trial.</strong> Many treatments take several weeks to show their
          full effect. If you have given yours the time you and your provider agreed on and nothing has changed,
          bring it up.
        </li>
        <li>
          <strong>Side effects outweigh the benefits.</strong> Every treatment can have side effects, but when
          they seriously affect your quality of life, it is time to talk about adjustments.
        </li>
        <li>
          <strong>A partial response.</strong> You feel somewhat better, but not as much as you hoped. That often
          means the plan is on the right track and needs fine-tuning.
        </li>
        <li>
          <strong>Your life has changed.</strong> Pregnancy, a new job, a new diagnosis or a new medication from
          another clinician can all change what you need.
        </li>
        <li>
          <strong>You do not feel heard.</strong> Good care depends on trust. If you keep feeling dismissed or
          misunderstood, it is reasonable to look at other options.
        </li>
      </ul>

      <h2>How long to give a treatment</h2>
      <p>
        One of the hardest parts is knowing how long to wait before making a change. The answer depends on the
        treatment.
      </p>
      <p>
        Many antidepressant and anti-anxiety medications take several weeks before you notice a difference, and
        longer to reach their full effect. Ask your prescriber what timeline to expect for yours, and when you
        will check in on it together.
      </p>
      <p>
        Therapy can bring some relief early on, while deeper change usually takes steady work over time. Habits
        like regular sleep, movement and stress management can help a little right away and add up over the
        following weeks.
      </p>

      <Callout>
        <p>
          Treatment is a partnership. Your feedback about what is working, and what is not, is exactly the
          information your provider needs to guide your care.
        </p>
      </Callout>

      <h2>Kinds of changes to consider</h2>
      <p>
        When your current plan is not meeting your needs, there are several directions to explore with your
        provider.
      </p>
      <p>
        <strong>Medication adjustments</strong> can include changing the dose, switching to a different
        medication, adding one, or trying a different approach altogether. The right choice depends on how you
        have responded so far and which side effects you have had.
      </p>
      <p>
        <strong>Therapy changes</strong> might mean meeting more or less often, trying a different therapy
        approach, or finding a therapist whose style fits you better.
      </p>
      <p>
        <strong>Daily habits and coping skills,</strong> like sleep routines, movement, mindfulness and practical
        coping strategies, can support whatever else you are doing. They work alongside treatment, not in place
        of it.
      </p>
      <p>
        <strong>An important safety note:</strong> do not stop or change a medication on your own. Some need to
        be tapered gradually, and stopping suddenly can cause withdrawal symptoms or bring symptoms back. Talk
        with your prescriber first.
      </p>

      <h2>How to talk to your provider about making a change</h2>
      <p>
        Speaking up for yourself takes energy, especially when you are already struggling. These steps can make
        the conversation easier and more productive:
      </p>
      <ul>
        <li>
          <strong>Track your symptoms.</strong> A quick daily note on your mood, energy, sleep and side effects
          gives your provider something concrete to work with.
        </li>
        <li>
          <strong>Be specific.</strong> Instead of &quot;This isn&apos;t working,&quot; try something like
          &quot;I&apos;m still having panic attacks most weeks, and the medication makes me too drowsy to focus at
          work.&quot;
        </li>
        <li>
          <strong>Ask about all your options,</strong> including both medication and non-medication approaches.
        </li>
        <li>
          <strong>Ask about timelines.</strong> How long should a new approach take to help, and how will you
          both know it is working?
        </li>
        <li>
          <strong>Trust your instincts.</strong> If your concerns are brushed aside or changes are never on the
          table, getting a second opinion is reasonable.
        </li>
      </ul>

      <h2>Revisiting your plan at {SITE_NAME}</h2>
      <p>
        Checking how your plan is working is what follow-up visits are for. With Jessica, they are a time to
        look at your progress, talk about how you are feeling, and adjust your plan when something is not
        working. Learn more about <Link href="/services/medication-management">medication management</Link>.
      </p>
      <p>
        When medication is part of the plan, the practice&apos;s approach is: &ldquo;{HOW_MEDICATION_IS_CHOSEN}
        &rdquo; And medication is always optional.
      </p>
      <p>
        If you are working with another clinician and want a fresh look at your care, a{' '}
        <Link href="/services/psychiatric-evaluation">psychiatric evaluation</Link> is one way to start.
      </p>
      <p>
        Already a patient? Bring it up at your next visit, or call{' '}
        <a href={CONTACT.phoneHref}>{CONTACT.phone}</a> to schedule one sooner.{' '}
        {NO_MEDICAL_ADVICE}
      </p>

      <h2>Moving forward with confidence</h2>
      <p>
        Realizing your treatment needs an adjustment is not a setback. It is self-awareness, and an important
        step toward finding what works for you. Finding the right combination often takes patience and a few
        changes along the way.
      </p>
      <p>
        The most important thing is to keep talking with your care team. Share your experience honestly, ask
        questions when something is unclear, and remember that you are the expert on your own life. A good
        provider will welcome your input and work with you to refine the plan.
      </p>
    </ArticleLayout>
  )
}
