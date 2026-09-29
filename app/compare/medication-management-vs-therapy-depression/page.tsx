import type { Metadata } from 'next'
import { AGES, CONTACT, PRACTICE_FAQS, PRICING, PROVIDER } from '@/lib/site'
import { GuideTemplate, TextLink, type GuideContent } from '../_components/GuideTemplate'
import { buildGuideMetadata, getGuide } from '../_lib/guides'

const GUIDE = getGuide('medication-management-vs-therapy-depression')

export const metadata: Metadata = buildGuideMetadata(GUIDE)

const [, , therapyOrMeds, , choosingMedication, noMedication] = PRACTICE_FAQS

// "a, b, and c" from the techniques Jessica names in her own words.
const TECHNIQUES = `${PROVIDER.techniques.slice(0, -1).join(', ')}, and ${PROVIDER.techniques[PROVIDER.techniques.length - 1]}`

// General education, balanced between medication and therapy. No statistics, no outcome promises,
// no stand-alone therapy visits claimed for the practice (Jessica provides supportive therapy
// within visits and may refer to a therapist). Crisis notice is required on this page.
const content: GuideContent = {
  meta: GUIDE,
  hero: {
    subtitle:
      'Depression care can include medication, therapy, or both. Here is what each involves, what to weigh, and how the choice gets made together.',
    secondaryCta: { label: 'Depression care', href: '/conditions/depression' },
  },
  intro: {
    heading: 'There is more than one way to treat depression',
    body: [
      'Depression can show up as persistent sadness, low energy, loss of motivation, mood changes, or difficulty finding joy in everyday activities. When it starts getting in the way of work, school, relationships, or sleep, it is worth talking to someone.',
      'Two main starting points are medication management with a prescribing clinician and therapy with a therapist. Many people use both. The right mix depends on your symptoms, your history, and your preferences.',
      'This guide is general education, not medical advice. Your plan is something you and your clinician decide together, and it can change as you go.',
    ],
  },
  takeaways: [
    'Medication management means an evaluation, a prescription when it makes sense, and follow-ups to check how it is working.',
    'Therapy means regular sessions focused on thoughts, patterns, relationships, and coping skills.',
    'The two are not either-or. Many people combine them.',
    'At JRose Wellness, medication is optional, and supportive therapy is part of visits.',
  ],
  crisis: true,
  table: {
    heading: 'Medication management and therapy, side by side',
    intro: 'Each works on a different part of the picture.',
    columns: ['Medication management', 'Therapy'],
    rows: [
      {
        label: 'What it is',
        a: 'An evaluation, a prescription when it makes sense, and follow-up visits to check how it is working and adjust it when needed.',
        b: 'Regular talk-therapy sessions to understand what is driving your symptoms and build skills to cope.',
      },
      {
        label: 'Who provides it',
        a: 'A prescribing clinician, such as a psychiatric nurse practitioner.',
        b: 'A licensed therapist, such as a psychologist, clinical social worker, or professional counselor.',
      },
      {
        label: 'What you focus on',
        a: 'Symptoms such as mood, sleep, energy, appetite, and concentration, plus any side effects.',
        b: 'Thoughts, habits, relationships, stressors, and the skills to handle them.',
      },
      {
        label: 'How often you meet',
        a: 'Follow-ups are spaced based on how you are doing, often closer together when starting or changing a medication.',
        b: 'Often weekly or every other week, especially at first.',
      },
      {
        label: 'How change happens',
        a: 'Medication can take time to reach its full effect, and finding the right fit may take adjustments.',
        b: 'Progress builds over sessions, and the skills you learn can keep helping after therapy ends.',
      },
      {
        label: 'Things to weigh',
        a: 'Possible side effects, taking it consistently, and checking in before making any change.',
        b: 'Time and effort between sessions, and finding a therapist who is a good fit.',
      },
    ],
  },
  sides: [
    {
      eyebrow: 'Medication management',
      title: 'How medication management works',
      body: [
        'Medication management starts with a full psychiatric evaluation. If medication makes sense for you, follow-up visits are where the ongoing work happens.',
        <>In the practice’s words: &ldquo;{PRICING.followUp.description}&rdquo;</>,
        <>How is a medication chosen? In Jessica’s words: &ldquo;{choosingMedication.a}&rdquo;</>,
        'Talk with your prescriber before stopping or changing a medication. Some need to be lowered gradually, and the plan is one you make together.',
      ],
    },
    {
      eyebrow: 'Therapy',
      title: 'How therapy works for depression',
      body: [
        'Therapy gives you regular, dedicated time to talk through what is going on with a trained therapist. One common approach, cognitive behavioral therapy (CBT), looks at the links between thoughts, feelings, and actions. Others focus on relationships, life changes, or building routines that lift your mood.',
        'Therapy asks for time and effort, including practice between sessions. The upside is that the skills you build are yours to keep.',
        'Some people start with therapy on its own, especially when low mood is closely tied to a stressor, a relationship, or a life change.',
      ],
    },
  ],
  middle: {
    eyebrow: 'Using both',
    heading: 'Why many people combine medication and therapy',
    body: [
      'Medication and therapy work on different parts of the picture. Medication can ease symptoms like low energy, poor sleep, and trouble concentrating, which can make it easier to use the skills you build in therapy. Therapy helps you understand your patterns and handle stress in new ways.',
      <>
        At JRose Wellness, the two come together in the same visits. In Jessica’s words: &ldquo;{therapyOrMeds.a}&rdquo; Her visits
        draw on {TECHNIQUES}.
      </>,
      <>
        If you want more dedicated therapy time, a referral to a therapist can sit alongside your{' '}
        <TextLink href="/services/medication-management">medication management</TextLink> visits. Learn more about{' '}
        <TextLink href="/services/supportive-therapy">supportive therapy</TextLink>.
      </>,
    ],
  },
  decide: {
    heading: 'Where to start',
    intro: 'These are general pointers, not rules. Your evaluation is where the decision gets made, together.',
    a: {
      title: 'Medication management may be worth discussing if:',
      items: [
        'symptoms make it hard to get through the day, work, or school',
        'your sleep, energy, appetite, or concentration have changed a lot',
        'you have tried therapy and are still struggling',
        'medication has helped you in the past',
      ],
    },
    b: {
      title: 'Therapy may be a good place to start if:',
      items: [
        'you would rather begin without medication',
        'your low mood is closely tied to a stressor, relationship, or life change',
        'you want to understand your patterns and build coping skills',
        'you have time for regular sessions',
      ],
    },
    note: 'Not sure? That is what the first visit is for. Medication is optional, and the plan can change as you go.',
  },
  practice: {
    eyebrow: 'At JRose Wellness',
    heading: 'Depression care, by secure video',
    body: [
      <>
        {PROVIDER.byline}, sees {AGES.short.toLowerCase()} for depression care by secure video, for patients in {CONTACT.state}. Care starts
        with a <TextLink href="/services/psychiatric-evaluation">psychiatric evaluation</TextLink>: your history, current concerns,
        symptoms, lifestyle, and goals.
      </>,
      'From there, you build a plan together. It may include medication, supportive therapy within visits, a referral to a therapist, or a mix, and follow-ups keep it on track.',
    ],
    quote: { text: noMedication.a, cite: PROVIDER.byline },
    links: [
      { href: '/conditions/depression', label: 'Depression care' },
      { href: '/services/medication-management', label: 'Medication management' },
      { href: '/services/supportive-therapy', label: 'Supportive therapy' },
    ],
  },
  faqs: [
    { q: noMedication.q, a: noMedication.a },
    { q: therapyOrMeds.q, a: therapyOrMeds.a },
    { q: choosingMedication.q, a: choosingMedication.a },
    {
      q: 'How long does depression medication take to work?',
      a: 'It varies from person to person and from medication to medication. Many take time to reach their full effect, and finding the right fit can take adjustments. Follow-up visits are where you check progress and side effects together.',
    },
    {
      q: 'Can I stop my medication once I feel better?',
      a: 'Talk with your prescriber first. Some medications need to be lowered gradually, and when and how to stop is a decision you make together.',
    },
    {
      q: 'Can I work with a therapist and a psychiatric nurse practitioner at the same time?',
      a: 'Yes. Many people see a therapist for regular therapy sessions and a psychiatric nurse practitioner for evaluation and medication management. Jessica provides supportive therapy during visits and may refer you to a therapist if needed.',
    },
  ],
  related: [
    { href: '/conditions/depression', label: 'Depression', body: 'Signs of depression and how care works here.' },
    { href: '/services/medication-management', label: 'Medication management', body: 'Follow-up visits to check progress and adjust your plan.' },
    { href: '/services/supportive-therapy', label: 'Supportive therapy', body: 'Coping skills and support built into your visits.' },
    { href: '/services/psychiatric-evaluation', label: 'Psychiatric evaluation', body: 'What happens at your first visit.' },
  ],
}

export default function Page() {
  return <GuideTemplate c={content} />
}
