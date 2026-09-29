import Link from 'next/link'
import ArticleLayout, { Callout, buildArticleMetadata } from '@/components/blog/ArticleLayout'
import CrisisText from '@/components/site/CrisisText'
import { getPost, postHref } from '@/lib/posts'
import { imageFor } from '@/lib/images'
import { AGES, CONTACT, CRISIS, PRACTICE_FAQS, PROVIDER, SITE_NAME } from '@/lib/site'

// Migrated from the practice's Wix post /post/psychiatric-and-family-nurse-practice-in-connecticut
// (August 13, 2025). Edited per FACTS.md section 13: "Success Stories" deleted, "crisis
// intervention" removed as a service, unsourced population and pandemic claims removed, and the FNP
// section reframed as background (the practice offers no primary care).

const SLUG = 'psychiatric-and-family-nurse-practice-in-connecticut'
const post = getPost(SLUG)
const image = imageFor(postHref(SLUG))

// PRACTICE_FAQS: [0] virtual only, [1] what a Psych NP does, [2] therapy and medication, [5] no medication.
const WHAT_A_PSYCH_NP_DOES = PRACTICE_FAQS[1].a
const THERAPY_AND_MEDICATION = PRACTICE_FAQS[2].a
const MEDICATION_OPTIONAL = PRACTICE_FAQS[5].a

// Jessica's own words (Headway profile), background only.
const FNP_BACKGROUND =
  'In addition to my psychiatric background, I also have experience as a Family Nurse Practitioner (FNP), which gives me a broader understanding of the connection between physical and mental health.'

export const metadata = buildArticleMetadata({
  slug: SLUG,
  title: 'Psychiatric Nurse Practitioners in CT',
  description: post.description,
  image,
  date: post.date,
  updated: post.updated,
})

export default function PsychiatricAndFamilyNursePracticePost() {
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
        { href: '/about', label: `About ${PROVIDER.name}` },
        { href: '/services/psychiatric-evaluation', label: 'Psychiatric evaluation' },
        { href: '/services/medication-management', label: 'Medication management' },
        { href: '/faq', label: 'Frequently asked questions' },
      ]}
    >
      <p>
        If you have been told to see a nurse practitioner for anxiety, depression, ADHD or another mental health
        concern, you may be wondering what that means for your care, and how it differs from other kinds of care
        you have had.
      </p>
      <p>
        This article explains what family and psychiatric nurse practitioners do, how their training differs, and how
        a psychiatric nurse practitioner fits into your care at a telehealth practice like {SITE_NAME}.
      </p>

      <h2>What is a nurse practitioner?</h2>
      <p>
        Nurse practitioners (NPs) are advanced practice registered nurses (APRNs). They start as registered nurses,
        then complete graduate education and clinical training in a specialty. Depending on that specialty, NPs assess
        patients, diagnose and treat health conditions, prescribe medications, and teach patients about their health.
      </p>
      <p>Two NP specialties come up often: family practice and psychiatric-mental health care.</p>

      <h3>Family nurse practitioners (FNPs)</h3>
      <p>
        Family nurse practitioners care for people across the lifespan in general health settings. Their work often
        includes:
      </p>
      <ul>
        <li>
          <strong>Health assessments:</strong> evaluations of a person&apos;s overall health.
        </li>
        <li>
          <strong>Ongoing care:</strong> follow-up for long-term health conditions.
        </li>
        <li>
          <strong>Preventive care:</strong> screenings, immunizations and routine check-ups.
        </li>
        <li>
          <strong>Patient education:</strong> guidance on healthy habits and everyday self-care.
        </li>
      </ul>
      <Callout title="What this means at JRose Wellness">
        <p>
          {SITE_NAME} is a psychiatric practice. Jessica&apos;s family nurse practitioner training shapes how she thinks
          about the link between physical and mental health, but the practice does not offer primary care. Keep
          seeing your primary care provider for physicals, vaccines and ongoing medical conditions.
        </p>
      </Callout>

      <h3>Psychiatric-mental health nurse practitioners (PMHNPs)</h3>
      <p>
        Psychiatric-mental health nurse practitioners, often called psych NPs or PMHNPs, specialize in mental health.
        In the practice&apos;s own words:
      </p>
      <blockquote>
        <p>{WHAT_A_PSYCH_NP_DOES}</p>
      </blockquote>
      <p>A psych NP&apos;s work usually includes:</p>
      <ul>
        <li>
          <Link href="/services/psychiatric-evaluation">Psychiatric evaluations</Link>: a thorough first visit to
          understand your symptoms, history and goals, and to make a diagnosis.
        </li>
        <li>
          <Link href="/services/medication-management">Medication management</Link>: prescribing psychiatric
          medication when it is a good fit, then monitoring and adjusting it over time.
        </li>
        <li>
          <Link href="/services/supportive-therapy">Supportive therapy</Link>: therapeutic support and coping skills
          built into your visits, with a referral to a therapist when you need more.
        </li>
      </ul>
      <p>
        Outpatient psychiatric care is planned, ongoing care. <CrisisText text={CRISIS.full} />
      </p>

      <h3>How the two roles differ</h3>
      <p>
        Both are nurse practitioners, but their training points in different directions. A family nurse practitioner
        is trained for general health care across the lifespan. A psychiatric-mental health nurse practitioner is
        trained to evaluate and treat mental health conditions, including prescribing and managing psychiatric
        medication. Some nurse practitioners, like Jessica, hold both credentials.
      </p>

      <h2>Working with your other clinicians</h2>
      <p>
        Mental health care rarely happens in isolation. A psychiatric NP may work alongside your therapist, your
        primary care provider and other clinicians who know you, so the pieces of your care fit together.
      </p>
      <p>At {SITE_NAME}, supportive therapy happens during your visits. In the practice&apos;s words:</p>
      <blockquote>
        <p>{THERAPY_AND_MEDICATION}</p>
      </blockquote>

      <h2>The role of telehealth</h2>
      <p>
        Telehealth has become a common way to see a nurse practitioner, especially for mental health care. Video
        visits can be easier to fit around work, school and family, and they take the drive and the waiting room out
        of the picture.
      </p>
      <p>
        Every visit at {SITE_NAME} happens by secure video, so you can receive care from the comfort and privacy of
        your home. <Link href="/services/telepsychiatry">Learn how telepsychiatry visits work</Link>.
      </p>

      <h2>The path to becoming a nurse practitioner</h2>
      <p>Becoming a nurse practitioner takes years of education and clinical work. The usual steps are:</p>
      <ol>
        <li>
          Earn a nursing degree, such as an Associate Degree in Nursing (ADN) or a Bachelor of Science in Nursing
          (BSN).
        </li>
        <li>Pass the NCLEX-RN, the national licensing exam for registered nurses.</li>
        <li>Work as a registered nurse to gain hands-on patient care experience.</li>
        <li>
          Complete a graduate nursing program, at the master&apos;s level or higher, in a specialty such as family or
          psychiatric-mental health care.
        </li>
        <li>Pass a national board certification exam in that specialty.</li>
        <li>Apply for an advanced practice license in the state where they will practice.</li>
      </ol>
      <p>
        Nurse practitioners also complete continuing education to keep their licenses current and stay up to date
        with best practices.
      </p>

      <h2>About Jessica&apos;s training</h2>
      <p>
        {PROVIDER.name} founded {SITE_NAME} and is its only provider. She is a {PROVIDER.title.toLowerCase()} and a
        family nurse practitioner.
      </p>
      <ul>
        <li>
          <strong>Credentials:</strong> {PROVIDER.credentials}
        </li>
        <li>
          <strong>Education:</strong> {PROVIDER.education}
        </li>
        <li>
          <strong>Licensure:</strong> {PROVIDER.licensure}
        </li>
      </ul>
      <blockquote>
        <p>{FNP_BACKGROUND}</p>
        <cite>{PROVIDER.name}</cite>
      </blockquote>
      <p>
        Care is by secure video for patients in {CONTACT.state}: {AGES.short.toLowerCase()}.{' '}
        <Link href="/about">Read more about Jessica</Link>.
      </p>

      <h2>Is a psychiatric nurse practitioner right for you?</h2>
      <p>
        A psychiatric NP can be a good fit if you want an evaluation for things like ongoing worry, low mood, trouble
        focusing or big mood swings, or if you want help starting, reviewing or adjusting psychiatric medication. You
        do not need a diagnosis before you reach out.
      </p>
      <p>
        If you are not sure you want medication, you can say so. As the practice puts it: “{MEDICATION_OPTIONAL}”
      </p>
      <p>
        See the <Link href="/conditions">conditions Jessica treats</Link>, including{' '}
        <Link href="/conditions/anxiety">anxiety</Link>, <Link href="/conditions/depression">depression</Link> and{' '}
        <Link href="/services/adhd-evaluation">ADHD</Link>, find out{' '}
        <Link href="/new-patients">what to expect at your first visit</Link>, or read{' '}
        <Link href="/faq">answers to common questions</Link>.
      </p>
    </ArticleLayout>
  )
}
