import Link from 'next/link'
import ArticleLayout, { Callout, buildArticleMetadata } from '@/components/blog/ArticleLayout'
import CrisisNotice from '@/components/site/CrisisNotice'
import { imageFor } from '@/lib/images'
import { getPost, postHref } from '@/lib/posts'
import { SITE_NAME } from '@/lib/site'

// Autobuilt post, kept and rewritten against FACTS.md (section 11 framing, evidence and location
// rules). Removed: the fabricated patient story, prevalence figures and evidence claims, medication
// for withdrawal or cravings (no MAT or withdrawal management at this practice), DBT as an offered
// protocol, the alternative-medicine framing, the city location, and the invented date and team
// byline. Added the crisis note. Scope wording matches the substance-use condition page.

const SLUG = 'understanding-dual-diagnosis-mental-health-and-substance-use'
const post = getPost(SLUG)
const image = imageFor('/conditions/substance-use')

export const metadata = buildArticleMetadata({
  slug: SLUG,
  title: 'Dual Diagnosis: Mental Health and Substance Use',
  description: post.description,
  image,
})

const RELATED = [
  { href: '/conditions/substance-use', label: 'Substance use' },
  { href: postHref('understanding-recovery-what-it-means-in-mental-health'), label: 'What recovery means' },
  { href: '/services/psychiatric-evaluation', label: 'Psychiatric evaluation' },
]

export default function DualDiagnosisPost() {
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
        Some people start drinking to take the edge off anxiety. Others notice that a low mood gets heavier the
        more they use. When a mental health condition and a substance use problem show up together, it is often
        called a dual diagnosis, or co-occurring conditions.
      </p>
      <p>
        The two tend to feed each other, which is why it helps to look at both at the same time. Here is what a
        dual diagnosis means, why it happens, and how to take a first step.
      </p>

      <h2>What is a dual diagnosis?</h2>
      <p>
        A dual diagnosis means someone is living with a mental health condition and a substance use problem at
        the same time. It is not just two separate problems side by side. Each one can change the course of the
        other.
      </p>
      <p>
        Conditions that often come up alongside substance use include{' '}
        <Link href="/conditions/depression">depression</Link>, <Link href="/conditions/anxiety">anxiety</Link>,{' '}
        <Link href="/conditions/ptsd-trauma">PTSD</Link>,{' '}
        <Link href="/conditions/bipolar-disorder">bipolar disorder</Link> and{' '}
        <Link href="/services/adhd-evaluation">ADHD</Link>. The substances range from alcohol and cannabis to
        prescription medications and other drugs.
      </p>
      <p>
        One condition can also hide or mimic the other. Low mood can come from coming down off a substance or
        from depression. Drinking can mask anxiety until someone cuts back. That is why a careful evaluation
        matters.
      </p>

      <Callout>
        <p>
          Getting better does not mean choosing which problem to work on first. It means understanding how they
          are connected and working on both.
        </p>
      </Callout>

      <h2>You are not alone</h2>
      <p>
        Mental health conditions and substance use problems often occur together, and there is no shame in it.
        They share many of the same risk factors, so it makes sense that they show up side by side.
        Understanding that can make it easier to ask for help with both.
      </p>

      <h2>Why they happen together</h2>
      <p>There are a few common ways the two become linked:</p>
      <p>
        <strong>Coping with symptoms.</strong> Many people use alcohol or drugs to get through hard feelings,
        such as a drink before a social event to calm nerves, or something to fall asleep after a nightmare. The
        relief is short-lived, and over time it often makes symptoms worse.
      </p>
      <p>
        <strong>Effects of the substance itself.</strong> Regular substance use can bring on or worsen mental
        health symptoms. Heavy drinking can deepen low mood, and some drugs can trigger anxiety or, in some
        cases, psychotic symptoms.
      </p>
      <p>
        <strong>Shared risk factors.</strong> Family history, trauma and ongoing stress raise the chances of both.
      </p>
      <p>
        <strong>A cycle that feeds itself.</strong> Once both are present, each can keep the other going.
        Depression leads to more drinking, which deepens the depression. Anxiety drives use, and coming down
        brings more anxiety.
      </p>

      <h2>Signs it may be a dual diagnosis</h2>
      <p>These patterns are worth talking about with a professional:</p>
      <ul>
        <li>Using alcohol or drugs to cope with feelings, memories or social situations</li>
        <li>Depression, anxiety or mood swings that get worse with use or while coming down</li>
        <li>A history of trauma along with current substance use</li>
        <li>Past treatment that focused on only one of the two problems</li>
        <li>A family history of mental health conditions or addiction</li>
        <li>Trouble keeping up with relationships, work or daily responsibilities</li>
        <li>Mental health symptoms that stick around even during periods without using</li>
      </ul>

      <h2>Why it helps to address both</h2>
      <p>
        For a long time, mental health care and substance use care happened in separate places, with different
        providers who did not always talk to each other. When only one condition gets attention, the other can
        keep pulling you back.
      </p>
      <p>
        Looking at both together helps you and your clinician see the whole picture and build a plan that fits.
        Depending on your needs, that plan can include:
      </p>
      <ul>
        <li>A careful evaluation of your mental health and your substance use</li>
        <li>Therapy and coping skills for stress, triggers and cravings</li>
        <li>Medication management for mental health symptoms, when it is appropriate</li>
        <li>Peer support or recovery groups</li>
        <li>Involving family or friends you trust</li>
      </ul>
      <p>
        <strong>A safety note:</strong> stopping some substances suddenly, including alcohol, can be dangerous
        without medical support. If you drink heavily or use regularly, talk with a medical professional before
        you stop.
      </p>
      <p>If you or someone else is in danger, or you have signs of severe withdrawal, get help right away:</p>
      <div className="mt-4">
        <CrisisNotice variant="compact" />
      </div>

      <h2>How {SITE_NAME} can help</h2>
      <p>
        {SITE_NAME} offers <Link href="/conditions/substance-use">support for alcohol and substance use</Link> as
        part of outpatient psychiatric care by secure video: a{' '}
        <Link href="/services/psychiatric-evaluation">psychiatric evaluation</Link> that looks at your mental
        health and substance use together,{' '}
        <Link href="/services/medication-management">medication management</Link> for conditions like anxiety and
        depression when it is appropriate, and{' '}
        <Link href="/services/supportive-therapy">supportive therapy</Link> within visits.
      </p>
      <p>
        Detox and medically supervised withdrawal are outside the scope of telehealth care. If you need that
        level of care, Jessica can help you connect with the right level of care.
      </p>

      <h2>Moving forward</h2>
      <p>
        A dual diagnosis is complex, but people do recover. If you are dealing with both mental health and
        substance use concerns, or you are worried about someone who is, you are not alone, and reaching out is
        a strong first step.
      </p>
      <p>
        Recovery looks different for everyone. It often means learning new ways to cope, building supportive
        relationships, working through trauma or stress, and creating a life that supports both your mental
        health and your goals around substance use. With patience and the right support, it is within reach.
      </p>
    </ArticleLayout>
  )
}
