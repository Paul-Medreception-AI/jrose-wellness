import type { Metadata } from 'next'
import { AGES, CONTACT, PRACTICE_FAQS, PROVIDER } from '@/lib/site'
import { GuideTemplate, TextLink, type GuideContent } from '../_components/GuideTemplate'
import { buildGuideMetadata, getGuide } from '../_lib/guides'

const GUIDE = getGuide('anxiety-medication-vs-non-medication-approaches')

export const metadata: Metadata = buildGuideMetadata(GUIDE)

const [, , therapyOrMeds, controlled, choosingMedication, noMedication] = PRACTICE_FAQS

type Technique = (typeof PROVIDER.techniques)[number]

// Plain-language notes on the techniques Jessica names in her own words (lib/site.ts). No
// stand-alone protocols (ERP, DBT, exposure programs) are claimed.
const TECHNIQUE_NOTES: Record<Technique, string> = {
  'supportive therapy': 'Time to talk through what is going on with someone who listens and helps you problem-solve.',
  'cognitive behavioral techniques': 'Noticing anxious thoughts, questioning them, and changing the patterns that keep anxiety going.',
  mindfulness: 'Practice bringing your attention back to the present moment instead of the what-ifs.',
  psychoeducation: 'Understanding how anxiety works in the body and mind, so symptoms feel less mysterious and less scary.',
  'practical coping strategies': 'Concrete tools for worry, panic, and stressful situations, such as breathing and grounding exercises.',
  'motivational interviewing': 'Conversations that help you find your own reasons for change and your own pace.',
}

const capitalize = (s: string) => s.charAt(0).toUpperCase() + s.slice(1)

// General education, balanced between medication and non-medication care. No medication classes
// promised, no controlled-substance promises (the practice's FAQ answer is quoted verbatim),
// no statistics. Crisis notice is required on this page.
const content: GuideContent = {
  meta: GUIDE,
  hero: {
    subtitle:
      'Anxiety can be treated with medication, with skills and therapy, or with both. Here is how the options compare, and how to decide what to try first.',
    secondaryCta: { label: 'Anxiety care', href: '/conditions/anxiety' },
  },
  intro: {
    heading: 'You have more than one option for anxiety',
    body: [
      'Anxiety can look like excessive worry, racing thoughts, panic attacks, social anxiety, or ongoing stress that gets in the way of sleep, relationships, work, or daily life.',
      'Treatment usually falls into two groups: prescription medication, and non-medication approaches such as therapy, coping skills, and lifestyle changes. They are not either-or. Many people use both, and the mix can change over time.',
      'This guide is general education, not medical advice. The right plan for you comes out of an evaluation and a conversation about what you want.',
    ],
  },
  takeaways: [
    'Medication can ease anxiety symptoms and is chosen after a careful evaluation.',
    'Non-medication approaches build skills you keep, like coping strategies and mindfulness.',
    'You do not have to pick one forever. Plans change as you go.',
    'At JRose Wellness, medication is optional.',
  ],
  crisis: true,
  table: {
    heading: 'Medication and non-medication care, side by side',
    intro: 'Both aim to help you feel steadier. They get there in different ways.',
    columns: ['Medication', 'Non-medication approaches'],
    rows: [
      {
        label: 'What it involves',
        a: 'A prescription chosen after an evaluation, with follow-up visits to check how it is working.',
        b: 'Therapy and skills such as cognitive behavioral techniques, mindfulness, psychoeducation, and practical coping strategies, plus lifestyle changes.',
      },
      {
        label: 'How it helps',
        a: 'Can ease the physical and emotional symptoms of anxiety, which can make daily life and skill-building feel more manageable.',
        b: 'Helps you notice anxious patterns, understand them, and respond to them in new ways.',
      },
      {
        label: 'How change happens',
        a: 'Some medications take time to reach their full effect, and the right fit may take adjustments.',
        b: 'Skills build with practice, so progress grows over time.',
      },
      {
        label: 'What it asks of you',
        a: 'Taking it as prescribed, sharing any side effects, and keeping follow-up visits.',
        b: 'Time and practice between visits, including when it feels uncomfortable.',
      },
      {
        label: 'Things to weigh',
        a: 'Possible side effects. Some anxiety medications are controlled substances. See the practice\u2019s answer on controlled substances in the questions below.',
        b: 'Can feel hard to start when anxiety is intense, and it takes steady practice.',
      },
      {
        label: 'Later on',
        a: 'Any change or stop is planned with your prescriber.',
        b: 'The skills stay with you.',
      },
    ],
  },
  sides: [
    {
      eyebrow: 'Medication',
      title: 'What to know about anxiety medication',
      body: [
        'Several kinds of prescription medication are used for anxiety. They differ in how they work, how quickly they help, how long you take them, and what side effects they can cause.',
        <>Choosing one is a shared decision. In Jessica’s words: &ldquo;{choosingMedication.a}&rdquo;</>,
        <>
          Some medications used for anxiety are controlled substances. Asked whether she prescribes them, Jessica’s answer is: &ldquo;
          {controlled.a}&rdquo;
        </>,
      ],
    },
    {
      eyebrow: 'Non-medication approaches',
      title: 'What non-medication care looks like',
      body: [
        'Non-medication care focuses on skills. Jessica provides supportive therapy during visits and draws on cognitive behavioral techniques, mindfulness, psychoeducation, and practical coping strategies.',
        'Everyday habits matter too. Sleep, daily routine, physical activity, and alcohol use can all affect how anxious you feel, and small changes can add up.',
        <>
          If you want more dedicated therapy time, Jessica may refer you to a therapist. Learn more about{' '}
          <TextLink href="/services/supportive-therapy">supportive therapy</TextLink>.
        </>,
      ],
    },
  ],
  middle: {
    eyebrow: 'Skills, not just symptoms',
    heading: 'Techniques Jessica may draw on',
    intro: 'Jessica brings these into visits, tailored to your needs and goals.',
    cards: PROVIDER.techniques.map((t) => ({ title: capitalize(t), body: TECHNIQUE_NOTES[t] })),
  },
  decide: {
    heading: 'Where to start',
    intro: 'These are general pointers, not rules. Your evaluation is where the decision gets made, together.',
    a: {
      title: 'Medication may be worth discussing if:',
      items: [
        'anxiety or panic makes it hard to work, study, sleep, or get through the day',
        'you have tried coping skills or therapy and are still struggling',
        'medication has helped you before',
        'you are also dealing with low mood or trouble sleeping',
      ],
    },
    b: {
      title: 'Non-medication approaches may be a good place to start if:',
      items: [
        'you would rather avoid medication, or want to try skills first',
        'your anxiety is tied to a specific stressor or situation',
        'you want tools you can keep using on your own',
        'you have had trouble with medication side effects before',
      ],
    },
    note: 'Many people use both: medication to take the edge off, and skills that keep working over time. Your plan can shift as you go.',
  },
  practice: {
    eyebrow: 'At JRose Wellness',
    heading: 'Anxiety care, by secure video',
    body: [
      <>
        {PROVIDER.byline}, sees {AGES.short.toLowerCase()} for anxiety, including panic and social anxiety, by secure video for patients in{' '}
        {CONTACT.state}. Care starts with a <TextLink href="/services/psychiatric-evaluation">psychiatric evaluation</TextLink>, and
        follow-ups adjust the plan as you go.
      </>,
      <>In her words: &ldquo;{therapyOrMeds.a}&rdquo;</>,
    ],
    quote: { text: noMedication.a, cite: PROVIDER.byline },
    links: [
      { href: '/conditions/anxiety', label: 'Anxiety and panic care' },
      { href: '/services/supportive-therapy', label: 'Supportive therapy' },
      { href: '/services/medication-management', label: 'Medication management' },
    ],
  },
  faqs: [
    { q: noMedication.q, a: noMedication.a },
    { q: controlled.q, a: controlled.a },
    { q: choosingMedication.q, a: choosingMedication.a },
    {
      q: 'Can I start without medication and add it later?',
      a: 'Yes. Medication is optional, and your plan can change. Follow-up visits are where you and Jessica check how things are going and decide whether to adjust.',
    },
    {
      q: 'Can anxiety care happen over video?',
      a: 'Yes. Every visit at JRose Wellness is by secure video, so there is no commute or waiting room, and you can talk from a place where you feel comfortable.',
    },
  ],
  related: [
    { href: '/conditions/anxiety', label: 'Anxiety and panic', body: 'Signs of anxiety and how care works here.' },
    { href: '/services/supportive-therapy', label: 'Supportive therapy', body: 'Coping skills and support built into your visits.' },
    { href: '/services/medication-management', label: 'Medication management', body: 'Follow-up visits to check progress and adjust your plan.' },
    { href: '/conditions/ocd', label: 'OCD', body: 'Care for intrusive thoughts and compulsions.' },
  ],
}

export default function Page() {
  return <GuideTemplate c={content} />
}
