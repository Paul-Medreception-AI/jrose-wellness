import type { Metadata } from 'next'
import { AGES, CONTACT, PRACTICE_FAQS, PROVIDER } from '@/lib/site'
import { GuideTemplate, TextLink, type GuideContent } from '../_components/GuideTemplate'
import { buildGuideMetadata, getGuide } from '../_lib/guides'
import { NP_ROLE } from '@/lib/faqs'

const GUIDE = getGuide('psychiatric-nurse-practitioner-vs-psychiatrist')

export const metadata: Metadata = buildGuideMetadata(GUIDE)

const [, whatPsychNpDoes, therapyOrMeds, controlled] = PRACTICE_FAQS

// Balanced and factual. A psychiatric NP is an APRN, not a physician; a psychiatrist is a
// physician (MD or DO) with psychiatry residency training. Neither is framed as better.
const content: GuideContent = {
  meta: GUIDE,
  hero: {
    subtitle:
      'Both can evaluate your symptoms, make a diagnosis, and prescribe medication. Here is how their training differs, and what matters most when you choose.',
    secondaryCta: { label: 'About Jessica', href: '/about' },
  },
  intro: {
    heading: 'Two paths to the same kind of care',
    body: [
      'If you are looking for help with anxiety, depression, ADHD, or another mental health concern, you will likely come across two kinds of prescribing clinicians: psychiatric nurse practitioners and psychiatrists. Both are trained to assess mental health, make a diagnosis, and manage treatment, including medication.',
      'The biggest difference is the path each one took to get there. A psychiatric nurse practitioner is an advanced practice registered nurse (APRN). A psychiatrist is a physician, with a medical degree (MD or DO) and residency training in psychiatry.',
      'Neither is the better choice for everyone. The right fit depends on what you need, and on finding someone you feel comfortable being honest with.',
    ],
  },
  takeaways: [
    'A psychiatric nurse practitioner (PMHNP) is an APRN, not a physician.',
    'A psychiatrist is a physician (MD or DO) who completed a residency in psychiatry.',
    'Both can evaluate, diagnose, treat, and prescribe. For nurse practitioners, each state sets the scope of practice.',
    `${PROVIDER.name} is a board-certified psychiatric nurse practitioner, licensed in ${CONTACT.state} to evaluate, diagnose, treat, and prescribe.`,
  ],
  table: {
    heading: 'How the two roles compare',
    intro: 'The training is different. Much of the day-to-day care can look similar.',
    columns: ['Psychiatric nurse practitioner', 'Psychiatrist'],
    rows: [
      {
        label: 'Profession',
        a: 'An advanced practice registered nurse (APRN) who specializes in psychiatric and mental health care.',
        b: 'A physician (MD or DO) who specializes in psychiatry.',
      },
      {
        label: 'Training',
        a: 'Nursing education and licensure as a registered nurse, then a graduate degree (master’s or doctorate) in psychiatric-mental health nursing.',
        b: 'Medical school, then a residency in psychiatry. Some add fellowship training in an area such as addiction or geriatric psychiatry.',
      },
      {
        label: 'Board certification',
        a: 'National board certification as a psychiatric-mental health nurse practitioner.',
        b: 'Board certification in psychiatry through a medical specialty board.',
      },
      {
        label: 'State license',
        a: 'Licensed by the state as a registered nurse and as an APRN.',
        b: 'Licensed by the state as a physician.',
      },
      {
        label: 'Evaluate and diagnose',
        a: 'Yes. Assesses your symptoms and history and makes a diagnosis.',
        b: 'Yes. Assesses your symptoms and history and makes a diagnosis.',
      },
      {
        label: 'Prescribe medication',
        a: 'Yes, within the scope each state sets for nurse practitioners.',
        b: 'Yes.',
      },
      {
        label: 'Therapy',
        a: 'Varies by clinician. Many offer medication management with brief therapeutic support, and refer to a therapist when needed.',
        b: 'Varies by clinician. Some provide psychotherapy. Others focus on evaluation and medication and work alongside a therapist.',
      },
      {
        label: 'Where they work',
        a: 'Outpatient practices, hospitals, community clinics, and telehealth.',
        b: 'Outpatient practices, hospitals, community clinics, specialty programs, and telehealth.',
      },
    ],
    note: 'Scope of practice for nurse practitioners is set by each state, so details vary from state to state. This table is general information, not legal or medical advice.',
  },
  sides: [
    {
      eyebrow: 'Psychiatric nurse practitioner',
      title: 'What a psychiatric NP does',
      body: [
        <>In Jessica’s words: &ldquo;{whatPsychNpDoes.a}&rdquo;</>,
        'Psychiatric NPs start as registered nurses, then complete graduate training focused on psychiatric assessment, diagnosis, and treatment, including prescribing. They pass a national board certification exam and are licensed by their state as an APRN.',
        'Many work in outpatient practices and telehealth, where they provide psychiatric evaluations, ongoing medication management, and supportive therapy within visits.',
      ],
    },
    {
      eyebrow: 'Psychiatrist',
      title: 'What a psychiatrist does',
      body: [
        'A psychiatrist is a physician who specializes in mental health. After medical school, psychiatrists complete a residency in psychiatry, and some go on to fellowship training in a specific area.',
        'Their medical training covers the whole body, which prepares them to manage mental health conditions alongside complex medical illness. Psychiatrists work in outpatient practices, hospitals, and specialty programs, and some also provide psychotherapy.',
        'A psychiatrist can be an especially good fit when mental health symptoms overlap with complex medical conditions, or when you need hospital-based or specialized treatment.',
      ],
    },
  ],
  middle: {
    eyebrow: 'Beyond the title',
    heading: 'What matters more than the letters after a name',
    intro: 'Whichever kind of clinician you see, these questions tell you more about fit than the title alone.',
    cards: [
      {
        title: 'Experience with your concerns',
        body: 'Ask which conditions and age groups the clinician works with most, and whether your concerns are a good match.',
      },
      {
        title: 'How visits work',
        body: 'Ask how follow-ups are scheduled and whether therapy is part of visits or handled by a separate therapist.',
      },
      {
        title: 'Coverage and cost',
        body: 'Check whether the clinician works with your insurance plan, and what self-pay visits cost if you are paying directly.',
      },
      {
        title: 'Feeling heard',
        body: 'You should feel comfortable being honest. A good fit with the person matters for any kind of clinician.',
      },
      {
        title: 'Licensing you can check',
        body: 'Every licensed clinician’s license can be looked up with the state. In Connecticut, that is the state’s online license lookup.',
      },
      {
        title: 'Knowing when to refer',
        body: 'A good clinician will tell you when your needs are better met by a different kind of care, and help you find it.',
      },
    ],
  },
  decide: {
    heading: 'Which one fits what you need?',
    intro: 'These are general pointers, not rules. When in doubt, ask. A first visit is a good place to find out whether the fit is right.',
    a: {
      title: 'A psychiatric NP may be a good fit if you:',
      items: [
        'are looking for an evaluation, a diagnosis, and a treatment plan for a mental health concern',
        'want ongoing medication management with regular follow-up visits',
        'want supportive therapy as part of your visits (ask, since this varies)',
        'have found a psychiatric NP whose experience matches your concerns and who works with your insurance or offers self-pay',
      ],
    },
    b: {
      title: 'A psychiatrist may be a good fit if you:',
      items: [
        'have complex medical conditions that interact with your mental health symptoms',
        'need hospital-based care or a specialized treatment program',
        'have been advised by another clinician to see a psychiatrist',
        'have found a psychiatrist whose experience matches your concerns and who works with your insurance',
      ],
    },
  },
  practice: {
    eyebrow: 'About Jessica',
    heading: 'Care with a psychiatric NP at JRose Wellness',
    body: [
      <>
        {PROVIDER.byline}, is a board-certified psychiatric nurse practitioner and a family nurse practitioner. She is not a physician. She
        is licensed in {CONTACT.state} to evaluate, diagnose, treat, and prescribe, and she sees {AGES.short.toLowerCase()} by secure video,
        for patients in {CONTACT.state}.
      </>,
      <>
        {PROVIDER.licensure} Education: {PROVIDER.education}.
      </>,
      <>
        Visits combine medication management with supportive therapy. In her words: &ldquo;{therapyOrMeds.a}&rdquo; You can read more on
        the <TextLink href="/about">About Jessica</TextLink> page.
      </>,
    ],
    quote: { text: PROVIDER.ownWords, cite: PROVIDER.byline },
    links: [
      { href: '/services/psychiatric-evaluation', label: 'Psychiatric evaluation' },
      { href: '/services/medication-management', label: 'Medication management' },
      { href: '/services/supportive-therapy', label: 'Supportive therapy' },
    ],
  },
  faqs: [
    // The same answer as /faq (FACTS.md section 10, pending Jessica's approval), so it is worded and
    // marked up in one place.
    NP_ROLE,
    { q: whatPsychNpDoes.q, a: whatPsychNpDoes.a },
    { q: therapyOrMeds.q, a: therapyOrMeds.a },
    { q: controlled.q, a: controlled.a },
    {
      q: 'Can I use insurance to see a psychiatric nurse practitioner?',
      a: 'Often, yes, depending on your plan. At JRose Wellness, you can use insurance by booking through Alma or through Headway, and plans are listed on the Insurance page. You can also request a self-pay visit directly with the practice.',
    },
    {
      q: 'When might a psychiatrist be a better fit?',
      a: 'When mental health symptoms overlap with complex medical conditions, when you need hospital-based or specialized treatment, or when another clinician has advised it. If your needs call for a different kind of care, that is worth talking about openly.',
    },
  ],
  related: [
    { href: '/about', label: 'About Jessica', body: 'Her training, licensure, and approach to care.' },
    { href: '/services/psychiatric-evaluation', label: 'Psychiatric evaluation', body: 'What happens at your first visit, and what you leave with.' },
    { href: '/services/medication-management', label: 'Medication management', body: 'Follow-up visits to check progress and adjust your plan.' },
    { href: '/insurance', label: 'Insurance and pricing', body: 'Plans through Alma and Headway, plus self-pay rates.' },
  ],
}

export default function Page() {
  return <GuideTemplate c={content} />
}
