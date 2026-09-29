import type { Metadata } from 'next'
import Link from 'next/link'
import ArticleLayout, { Callout, buildArticleMetadata } from '@/components/blog/ArticleLayout'
import { imageFor } from '@/lib/images'
import { BOOKING, CONTACT, NO_MEDICAL_ADVICE, PRACTICE_FAQS, PRICING, SITE_NAME } from '@/lib/site'

const SLUG = 'how-to-prepare-for-your-first-telehealth-appointment'
const TITLE = 'How to Prepare for Your First Telehealth Appointment'
// lib/posts.ts carries a 139-character version of this description; this one meets the 140-160 range.
const DESCRIPTION =
  'What to expect at your first telehealth visit, how to set up your space and technology, and what to have ready so your video appointment goes smoothly.'
const IMAGE = imageFor('/services/telepsychiatry')

const VIRTUAL_ONLY = PRACTICE_FAQS.find((f) => f.q === 'Do you offer virtual appointments only?')!

export const metadata: Metadata = buildArticleMetadata({
  slug: SLUG,
  title: 'Preparing for Your First Telehealth Visit',
  description: DESCRIPTION,
  image: IMAGE,
})

export default function TelehealthPrepArticle() {
  return (
    <ArticleLayout
      slug={SLUG}
      title={TITLE}
      description={DESCRIPTION}
      image={IMAGE}
      category="Telehealth"
      related={[
        { href: '/services/telepsychiatry', label: 'How Telepsychiatry Works' },
        { href: '/new-patients', label: 'Your First Visit' },
        { href: '/insurance', label: 'Insurance & Pricing' },
        { href: '/blog/how-personalized-treatment-plans-improve-mental-health-outco', label: 'How Personalized Treatment Plans Shape Mental Health Care' },
      ]}
    >
      <p>
        If you have never had a video visit, it is normal to wonder what to expect. A little preparation goes a long
        way. It helps the visit run smoothly and leaves more of your time for what matters: talking about how you
        are doing.
      </p>
      <p>
        Many people find a video visit from home more relaxed than they expected. Here is how to get ready.
      </p>

      <h2>What a telehealth visit is</h2>
      <p>
        A telehealth visit is a live video appointment with your clinician on a computer, tablet, or smartphone. It
        is a real, face-to-face conversation, just on a screen. Your clinician can see you, listen, ask questions,
        and talk through a plan with you.
      </p>
      <p>
        At {SITE_NAME}, every visit happens this way. In the practice’s words: “{VIRTUAL_ONLY.a}”
      </p>

      <h2>Check your technology ahead of time</h2>
      <p>
        A steady internet connection matters most. Test your camera, microphone, and speakers before the day of
        your visit. Follow the joining instructions you receive when you book, and plan to join a few minutes early in
        case anything needs fixing.
      </p>
      <h3>Technology checklist</h3>
      <ul>
        <li>Test your camera, microphone, and speakers in advance</li>
        <li>Charge your device or keep it plugged in</li>
        <li>Download any app you have been asked to use ahead of time</li>
        <li>Have a backup device nearby, such as your phone</li>
        <li>
          Keep our number handy in case of connection trouble: <a href={CONTACT.phoneHref}>{CONTACT.phone}</a>
        </li>
      </ul>

      <h2>Set up a private, comfortable space</h2>
      <p>
        Mental health visits go best when you can speak freely. Choose a quiet, private spot where you will not be
        overheard or interrupted. Headphones can add privacy. If you share your home, let others know you will be busy
        for a while.
      </p>
      <p>
        Face a window or lamp so your face is well lit, and avoid sitting with a bright window behind you. If you can,
        set the camera at eye level and sit close enough that your face and shoulders are in view. Most of all, pick
        a place where you feel at ease.
      </p>

      <h2>What to have ready</h2>
      <ul>
        <li>
          <strong>Your current medications:</strong> names and doses, including vitamins and over-the-counter
          products you take regularly.
        </li>
        <li>
          <strong>Past medications:</strong> psychiatric medications you have tried before, and how they worked or
          did not work for you.
        </li>
        <li>
          <strong>Your history:</strong> past diagnoses, therapy, or psychiatric care. Rough dates are fine.
        </li>
        <li>
          <strong>Notes on your symptoms:</strong> for a few days beforehand, jot down when symptoms show up, how
          strong they are, and what makes them better or worse.
        </li>
        <li>
          <strong>Your questions:</strong> write them down so nothing slips your mind.
        </li>
        <li>
          <strong>Your insurance information,</strong> if you are booking with insurance through Alma or Headway.
        </li>
        <li>
          <strong>Your preferred pharmacy,</strong> in case medication becomes part of your plan.
        </li>
      </ul>

      <blockquote>
        Coming prepared with your questions and history helps your clinician understand you, even through a screen.
      </blockquote>

      <h2>What to expect at a first psychiatric visit</h2>
      <p>Here is how {SITE_NAME} describes the first visit:</p>
      <blockquote>{PRICING.initialEvaluation.description}</blockquote>
      <p>
        Expect questions about what brings you in, your current symptoms, your medical and mental health history,
        your daily life, and your goals. There is no physical exam over video. {BOOKING.alma.note}
      </p>
      <p>
        By the end, you should have a clearer picture of next steps. Depending on what you and your clinician decide,
        that might include medication, supportive therapy, or both, along with a follow-up visit.
      </p>

      <h2>Making the most of your visit</h2>
      <ul>
        <li>Silence your phone and close other apps and tabs.</li>
        <li>Be honest about what you are experiencing, even if it feels awkward to say out loud.</li>
        <li>Take notes, or ask your clinician to repeat anything that was unclear.</li>
        <li>Ask questions. The video format does not change the fact that your input matters.</li>
      </ul>

      <h2>After your appointment</h2>
      <ul>
        <li>Review your plan and any notes you took.</li>
        <li>If medication is part of your plan, confirm it went to the pharmacy you chose.</li>
        <li>Book your follow-up visit.</li>
        <li>Reach out if you have scheduling questions.</li>
      </ul>
      <Callout title="A note about phone, text, and email">
        <p>{NO_MEDICAL_ADVICE}</p>
      </Callout>

      <h2>Ready to book?</h2>
      <p>
        {SITE_NAME} offers psychiatric care by secure video for patients in {CONTACT.state}. See{' '}
        <Link href="/services/telepsychiatry">how telepsychiatry works</Link>, read more about{' '}
        <Link href="/new-patients">your first visit</Link>, or check{' '}
        <Link href="/insurance">insurance and pricing</Link>. When you are ready,{' '}
        <Link href="/book-appointment">book an appointment</Link>.
      </p>
    </ArticleLayout>
  )
}
