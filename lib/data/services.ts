import type { ServicePageContent } from '@/components/templates/ServicePageTemplate'
import {
  AGES,
  BOOKING,
  CONTACT,
  CRISIS,
  INSURANCE_HEADLINE,
  NAV_CTA,
  NO_MEDICAL_ADVICE,
  PRACTICE_FAQS,
  PRICING,
  PROVIDER,
  SITE_NAME,
  SITE_URL,
} from '@/lib/site'
import { PAGE_IMAGES } from '@/lib/images'

// Service pages for a telehealth psychiatry practice (Jessica Logel, MSN, PMHNP-BC, FNP; patients
// in Connecticut). Every practice fact comes from lib/site.ts; copy follows FACTS.md (PUBLISH items
// only). No visit lengths except the Alma 45-minute intake, no testing methods, no stimulant or
// benzodiazepine promises, no stand-alone therapy programs, no school-forms page.

const BASE = {
  siteUrl: SITE_URL,
  siteName: SITE_NAME,
  ctaLabel: NAV_CTA.label,
  ctaHref: NAV_CTA.href,
  hubLabel: 'Services',
  hubHref: '/services',
}

// The practice's own FAQ answers, by question, so a page can quote them without retyping.
const FAQ = {
  virtualOnly: PRACTICE_FAQS[0],
  whatPsychNpDoes: PRACTICE_FAQS[1],
  therapyOrMedication: PRACTICE_FAQS[2],
  controlledSubstances: PRACTICE_FAQS[3],
  choosingMedication: PRACTICE_FAQS[4],
  noMedication: PRACTICE_FAQS[5],
}

/** "a, b, and c" */
function listSentence(items: readonly string[]): string {
  if (items.length <= 1) return items.join('')
  if (items.length === 2) return `${items[0]} and ${items[1]}`
  return `${items.slice(0, -1).join(', ')}, and ${items[items.length - 1]}`
}

const capitalize = (s: string) => s.charAt(0).toUpperCase() + s.slice(1)

const INSURANCE_LINE = `Yes, by booking through Alma or Headway. Plans on both include ${listSentence(INSURANCE_HEADLINE)}. Your cost depends on your plan.`

// Outline icons (24px grid) for the approach cards.
const ICON = {
  clipboardCheck:
    'M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4',
  document:
    'M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z',
  user: 'M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z',
  chat: 'M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z',
  refresh:
    'M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99',
  adjustments:
    'M10.5 6h9.75M10.5 6a1.5 1.5 0 11-3 0m3 0a1.5 1.5 0 10-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-9.75 0h9.75',
  heart:
    'M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z',
  video:
    'M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z',
  sun: 'M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.708.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z',
  book: 'M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253',
  lightbulb:
    'M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z',
  trendingUp: 'M13 7h8m0 0v8m0-8l-8 8-4-4-6 6',
  home: 'M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6',
} as const

// What each of Jessica's own techniques (PROVIDER.techniques, from her Headway profile) looks like
// in a visit. Plain descriptions only: no outcome claims.
type Technique = (typeof PROVIDER.techniques)[number]
const TECHNIQUE_NOTES: Record<Technique, { body: string; iconPath: string }> = {
  'supportive therapy': {
    body: 'A steady space to talk openly, feel heard, and work through what is in front of you right now.',
    iconPath: ICON.heart,
  },
  'cognitive behavioral techniques': {
    body: 'Noticing the thoughts and habits that keep you stuck, and practicing new ways to respond to them.',
    iconPath: ICON.lightbulb,
  },
  mindfulness: {
    body: 'Simple ways to slow down, notice what is happening in the moment, and respond instead of react.',
    iconPath: ICON.sun,
  },
  psychoeducation: {
    body: 'Clear, plain explanations of what you are experiencing, your options, and what to expect from treatment.',
    iconPath: ICON.book,
  },
  'practical coping strategies': {
    body: 'Concrete tools for stress, worry, sleep, and daily routines that you can use between visits.',
    iconPath: ICON.adjustments,
  },
  'motivational interviewing': {
    body: 'A collaborative conversation that helps you find your own reasons for change and decide on next steps.',
    iconPath: ICON.trendingUp,
  },
}

const INSURANCE_COST =
  'With insurance, your cost depends on your plan: booking through Alma or Headway lets you check your coverage first.'

export const SERVICES: ServicePageContent[] = [
  // ─────────────────────────────────────────────────────────────── Psychiatric evaluation
  {
    ...BASE,
    slug: 'psychiatric-evaluation',
    title: 'Psychiatric Evaluation',
    metaTitle: 'Online Psychiatric Evaluation in CT',
    headline: 'Online Psychiatric Evaluation for Teens and Adults in Connecticut',
    description:
      'Book an online psychiatric evaluation in Connecticut. A thorough first visit covering your history, symptoms, and goals, with a personalized treatment plan.',
    heroEyebrow: 'Your first visit',
    heroSubhead:
      'Your first session is all about you. Jessica takes time to learn your history, current concerns, symptoms, lifestyle, and goals, then builds a plan that fits you.',
    heroImage: PAGE_IMAGES['/services/psychiatric-evaluation'],
    introHeading: 'What your evaluation is',
    intro: [
      PRICING.initialEvaluation.description,
      `Your evaluation is with ${PROVIDER.byline}, a board-certified psychiatric nurse practitioner. It happens by secure video, so you can join from the comfort and privacy of your home.`,
      'In Jessica\'s words: "I know starting therapy or psychiatric care can feel intimidating, so I approach each session with compassion, curiosity, and openness."',
    ],
    signsHeading: 'What we talk about',
    signsList: [
      'What brings you in',
      'Your current concerns and symptoms',
      'Relevant medical and mental health history',
      'Medications you take now or have tried before, and how they worked',
      'Lifestyle factors, such as sleep and stress',
      'Patterns, stressors, and strengths',
      'Your goals for treatment',
    ],
    crisis: true,
    bulletsHeading: 'How to prepare',
    bullets: [
      'A private, quiet space where you can talk openly',
      'A phone, tablet, or computer with a camera, and a steady internet connection',
      'A list of your current and past medications, and how they worked for you',
      'Your insurance information, if you are booking through Alma or Headway',
      'A few notes on what you most want help with',
    ],
    approachHeading: 'What happens during your evaluation',
    approachSubhead: 'A welcoming, supportive, and judgment-free first visit.',
    approach: [
      {
        title: 'Getting to know you',
        body: 'Jessica wants to understand you as a whole person, not just a diagnosis or a list of symptoms. You can talk openly about what feels stuck or overwhelming.',
        iconPath: ICON.user,
      },
      {
        title: 'Talking through options',
        body: 'If medication could help, you discuss options thoughtfully, including benefits, risks, and your comfort level. You stay informed and involved in every decision, and medication is optional.',
        iconPath: ICON.chat,
      },
      {
        title: 'Building your plan',
        body: 'Together you set initial treatment goals and agree on next steps, which may include medication, supportive therapy, practical strategies, or a mix.',
        iconPath: ICON.document,
      },
    ],
    benefitsHeading: 'What you leave with',
    benefits: [
      {
        title: 'A clearer picture',
        body: 'A better understanding of what you are experiencing and the possible next steps.',
      },
      {
        title: 'Initial treatment goals',
        body: 'Goals you set together, so you know what you are working toward.',
      },
      {
        title: 'Practical strategies',
        body: 'Recommendations you can start using right away to begin working toward feeling better.',
      },
      {
        title: 'A plan that fits you',
        body: 'A personalized treatment plan built around your needs, not a one-size-fits-all approach.',
      },
    ],
    timelineHeading: 'Getting started',
    timeline: [
      {
        title: 'Choose how to book',
        body: 'Book with insurance through Alma or Headway, or request a self-pay appointment directly with the practice.',
      },
      {
        title: 'Meet with Jessica by video',
        body: `Your evaluation covers your history, symptoms, and goals. ${BOOKING.alma.note}`,
      },
      {
        title: 'Agree on a plan',
        body: 'You leave with initial treatment goals and clear next steps.',
      },
      {
        title: 'Follow-up visits',
        body: 'Regular follow-ups check on your progress and adjust your plan when needed.',
      },
    ],
    extraSections: [
      {
        heading: 'Length and cost',
        body: [
          `The self-pay initial evaluation is ${PRICING.initialEvaluation.price}. ${PRICING.slidingScale}`,
          `${BOOKING.alma.note} ${INSURANCE_COST}`,
          PRICING.goodFaithEstimate,
        ],
      },
      {
        heading: 'Who it is for',
        body: [
          `JRose Wellness sees ${AGES.short.toLowerCase()} in ${CONTACT.state}. Every visit is by secure video.`,
        ],
      },
    ],
    faqHeading: 'Common questions about your evaluation',
    faqs: [
      { q: 'How long is the first visit?', a: BOOKING.alma.note },
      {
        q: 'How much does the evaluation cost?',
        a: `The self-pay initial evaluation is ${PRICING.initialEvaluation.price}. ${INSURANCE_COST} ${PRICING.slidingScale}`,
      },
      { q: 'What ages do you see?', a: `${AGES.short}.` },
      FAQ.virtualOnly,
      FAQ.whatPsychNpDoes,
      FAQ.choosingMedication,
    ],
    relatedHeading: 'Next steps',
    relatedLinks: [
      {
        href: '/services/medication-management',
        label: 'Medication Management',
        eyebrow: 'After your evaluation',
        body: 'Follow-up visits to check on your progress and adjust treatment when needed.',
      },
      {
        href: '/new-patients',
        label: 'Your First Visit',
        eyebrow: 'New patients',
        body: 'What to expect and how to get started.',
      },
      {
        href: '/insurance',
        label: 'Insurance & Pricing',
        eyebrow: 'Cost',
        body: 'Booking through Alma or Headway, and self-pay rates.',
      },
    ],
    ctaHeading: 'Ready to schedule your evaluation?',
    ctaBody: 'Book with insurance through Alma or Headway, or request a self-pay visit. Every visit is by secure video.',
  },

  // ─────────────────────────────────────────────────────────────── Medication management
  {
    ...BASE,
    slug: 'medication-management',
    title: 'Medication Management',
    metaTitle: 'Online Medication Management in CT',
    headline: 'Psychiatric Medication Management Online in Connecticut',
    description:
      'Psychiatric medication management by secure video in Connecticut. Follow-ups track progress and adjust treatment. Self-pay or insurance through Alma or Headway.',
    heroEyebrow: 'Follow-up care',
    heroSubhead:
      "Care doesn't stop after the first visit. Follow-ups check on your progress, how you're feeling, and how your plan is working, and adjust medication when needed.",
    heroImage: PAGE_IMAGES['/services/medication-management'],
    introHeading: 'How follow-up care works',
    intro: [
      PRICING.followUp.description,
      'Medication is optional. If it is part of your care, decisions are based on your symptoms, history, past medication responses, side-effect sensitivity, lifestyle, and preferences.',
      'Supportive therapy is part of your visits too. In Jessica\'s words: "I will provide supportive therapy during our sessions and may refer you to a therapist if needed."',
    ],
    signsHeading: 'Medication management may help if',
    signsList: [
      'You have a new diagnosis and want to talk through treatment options',
      'You take psychiatric medication now and want ongoing care',
      'Your current medication is not helping the way you hoped',
      'Side effects are getting in the way of your day',
      'You want someone to keep track of how treatment is working over time',
    ],
    crisis: true,
    approachHeading: 'How medication decisions are made',
    approachSubhead: FAQ.choosingMedication.a,
    approach: [
      {
        title: 'Checking in on progress',
        body: "Each follow-up starts with how you're feeling and how your treatment plan is working for you.",
        iconPath: ICON.chat,
      },
      {
        title: 'Monitoring and adjusting',
        body: 'If medication is part of your care, it is carefully managed and adjusted when needed so it stays safe, effective, and supportive of your overall well-being.',
        iconPath: ICON.adjustments,
      },
      {
        title: 'Benefits and risks, explained',
        body: 'Options are discussed thoughtfully, including benefits, risks, and your comfort level, so you stay informed and involved in every decision.',
        iconPath: ICON.clipboardCheck,
      },
      {
        title: 'Support in every visit',
        body: 'Supportive therapy and practical coping strategies are part of your sessions, with a referral to a therapist if you need one.',
        iconPath: ICON.heart,
      },
    ],
    bulletsHeading: 'Conditions commonly managed',
    bullets: [
      'Anxiety and panic',
      'Depression',
      'ADHD',
      'OCD',
      'Trauma and PTSD',
      'Bipolar disorder',
      'Schizophrenia and psychotic disorders',
      'Burnout and life transitions',
    ],
    benefits: [],
    extraSections: [
      {
        heading: "What if I don't want to take medication?",
        body: [FAQ.noMedication.a],
      },
      {
        heading: FAQ.controlledSubstances.q,
        body: [FAQ.controlledSubstances.a],
      },
      {
        heading: 'Visit cost',
        body: [
          `Self-pay follow-up and medication management visits are ${PRICING.followUp.price}. ${PRICING.slidingScale}`,
          INSURANCE_COST,
        ],
      },
    ],
    faqHeading: 'Common questions about medication management',
    faqs: [
      FAQ.choosingMedication,
      FAQ.therapyOrMedication,
      {
        q: 'How much is a follow-up visit?',
        a: `Self-pay follow-up and medication management visits are ${PRICING.followUp.price}. ${INSURANCE_COST}`,
      },
      FAQ.virtualOnly,
    ],
    relatedHeading: 'Related care',
    relatedLinks: [
      {
        href: '/services/supportive-therapy',
        label: 'Supportive Therapy',
        eyebrow: 'Service',
        body: 'Coping skills and support built into your visits.',
      },
      {
        href: '/services/psychiatric-evaluation',
        label: 'Psychiatric Evaluation',
        eyebrow: 'Start here',
        body: 'Your first visit: history, symptoms, goals, and a plan.',
      },
      {
        href: '/conditions/anxiety',
        label: 'Anxiety & Panic',
        eyebrow: 'Condition',
        body: 'Care for worry, panic attacks, social anxiety, and stress.',
      },
      {
        href: '/conditions/depression',
        label: 'Depression',
        eyebrow: 'Condition',
        body: 'Care for low mood, low energy, and loss of interest.',
      },
      {
        href: '/conditions/bipolar-disorder',
        label: 'Bipolar Disorder',
        eyebrow: 'Condition',
        body: 'Care aimed at stabilizing mood changes over the long term.',
      },
      {
        href: '/services/adhd-evaluation',
        label: 'ADHD Evaluation & Treatment',
        eyebrow: 'Service',
        body: 'Assessment and ongoing care for teens and adults.',
      },
    ],
    ctaHeading: 'Ready for steady, ongoing care?',
    ctaBody: 'Book with insurance through Alma or Headway, or request a self-pay visit. Every visit is by secure video.',
  },

  // ─────────────────────────────────────────────────────────────── Supportive therapy
  {
    ...BASE,
    slug: 'supportive-therapy',
    title: 'Supportive Therapy',
    metaTitle: 'Therapy + Medication Management in CT',
    headline: 'Supportive Therapy Alongside Psychiatric Care in Connecticut',
    description:
      'Supportive therapy built into telehealth psychiatric visits in Connecticut, using CBT-based skills, motivational interviewing, and practical coping strategies.',
    heroEyebrow: 'Therapy within your visits',
    heroSubhead:
      'Your psychiatric visits make room for talking things through. Jessica provides supportive therapy during your sessions and may refer you to a therapist if needed.',
    heroImage: PAGE_IMAGES['/services/supportive-therapy'],
    introHeading: 'Support built into every visit',
    intro: [
      `In Jessica's words: "${FAQ.therapyOrMedication.a}"`,
      'Supportive therapy happens during your psychiatric visits, alongside medication management when that is part of your care.',
      `Jessica describes her approach as ${PROVIDER.approach[0]}. The goal is for you to leave each visit feeling supported, with tools, insight, and a clearer understanding of yourself.`,
    ],
    signsHeading: 'What we can work on together',
    signsList: [
      'Anxiety and worry',
      'Low mood and depression',
      'ADHD and daily structure',
      'Stress and burnout',
      'Relationship challenges',
      'Trauma',
      'Self-esteem',
      'Life transitions',
    ],
    crisis: true,
    approachHeading: 'Techniques Jessica uses',
    approachSubhead: 'Tailored to your needs and goals, and used within your psychiatric visits.',
    approach: PROVIDER.techniques.map((t) => ({
      title: capitalize(t),
      body: TECHNIQUE_NOTES[t].body,
      iconPath: TECHNIQUE_NOTES[t].iconPath,
    })),
    benefitsHeading: 'What sessions feel like',
    benefits: [
      {
        title: 'Open and judgment-free',
        body: 'A space where you can talk honestly and be fully yourself.',
      },
      {
        title: 'Warm and direct',
        body: `Her style is "${PROVIDER.approach[1]}."`,
      },
      {
        title: 'Honest, with humor',
        body: `Emotional support balanced with ${PROVIDER.approach[2]}.`,
      },
      {
        title: 'Realistic changes',
        body: 'Working together on realistic, sustainable changes that fit your life.',
      },
    ],
    bullets: [],
    extraSections: [
      {
        heading: 'Everyday habits matter too',
        body: [
          'Treatment may include medication management, therapy, education, and lifestyle support. That can mean talking through sleep, stress, and daily routines, and making realistic changes that fit your life.',
        ],
      },
      {
        heading: 'When a dedicated therapist is a better fit',
        body: [
          'Some people need more therapy time than a psychiatric visit allows, or a specific kind of therapy. When that is the case, Jessica may refer you to a therapist.',
        ],
      },
    ],
    faqHeading: 'Common questions about therapy and medication',
    faqs: [FAQ.therapyOrMedication, FAQ.noMedication, FAQ.whatPsychNpDoes, FAQ.virtualOnly],
    relatedHeading: 'Related care',
    relatedLinks: [
      {
        href: '/services/medication-management',
        label: 'Medication Management',
        eyebrow: 'Service',
        body: 'Follow-up visits to monitor progress and adjust treatment.',
      },
      {
        href: '/conditions/burnout-life-transitions',
        label: 'Burnout & Life Transitions',
        eyebrow: 'Condition',
        body: 'Support for stress, burnout, and big life changes.',
      },
      {
        href: '/conditions/anxiety',
        label: 'Anxiety & Panic',
        eyebrow: 'Condition',
        body: 'Care for worry, panic attacks, social anxiety, and stress.',
      },
    ],
    ctaHeading: 'Ready to feel supported?',
    ctaBody: 'Book with insurance through Alma or Headway, or request a self-pay visit. Every visit is by secure video.',
  },

  // ─────────────────────────────────────────────────────────────── Telepsychiatry
  {
    ...BASE,
    slug: 'telepsychiatry',
    title: 'Telepsychiatry',
    metaTitle: 'Telepsychiatry in Connecticut',
    headline: 'Telepsychiatry by Secure Video for Patients in Connecticut',
    description:
      'Telepsychiatry for patients in Connecticut: psychiatric evaluations and medication management by secure video from home. No commute and no waiting room.',
    heroEyebrow: 'Telehealth only',
    heroSubhead:
      'All sessions are conducted securely through telehealth, so you can receive care from the comfort and privacy of your home.',
    heroImage: PAGE_IMAGES['/services/telepsychiatry'],
    introHeading: 'How video visits work',
    intro: [
      "Every visit with Jessica happens by secure video. You join from home and talk with her face to face on screen: how you're feeling, your symptoms, your history, and your plan.",
      `JRose Wellness provides telehealth for patients in ${CONTACT.state}, where Jessica is licensed as an advanced practice registered nurse (APRN).`,
      'Booking works the same way for every visit: through Alma or Headway if you are using insurance, or directly with the practice for self-pay.',
    ],
    signsHeading: 'What you need',
    signsList: [
      'A private, quiet space where you can talk openly',
      'A smartphone, tablet, or computer with a camera and microphone',
      'A stable internet connection',
      'Headphones, if others are nearby',
      'A few minutes before your visit to get settled',
    ],
    crisis: true,
    approachHeading: 'Why telehealth',
    approach: [
      {
        title: 'Convenient care',
        body: 'Meet with a qualified professional from the comfort of your home. No commuting or long waiting rooms.',
        iconPath: ICON.home,
      },
      {
        title: 'Truly personalized',
        body: 'Your treatment plan is tailored to your unique symptoms, lifestyle, and goals.',
        iconPath: ICON.user,
      },
      {
        title: 'Continuous support',
        body: "You're not left to figure things out alone. Regular follow-ups include progress tracking.",
        iconPath: ICON.refresh,
      },
    ],
    benefits: [],
    bullets: [],
    timelineHeading: 'Your visit, step by step',
    timeline: [
      {
        title: 'Book your visit',
        body: 'Book through Alma or Headway with insurance, or request a self-pay appointment.',
      },
      {
        title: 'Get set up',
        body: 'Find a private spot, check your camera and sound, and make sure your internet connection is steady.',
      },
      {
        title: 'Meet with Jessica',
        body: "Talk through how you're feeling, what has changed, and what you want from your care.",
      },
      {
        title: 'Keep going',
        body: 'Follow-up visits are by video too, so staying on track fits into your week.',
      },
    ],
    extraSections: [
      {
        heading: 'Privacy',
        body: [
          'Sessions are conducted securely through telehealth. Choose a spot where you will not be overheard, and use headphones if others are nearby.',
          NO_MEDICAL_ADVICE,
        ],
      },
      {
        heading: 'Is telehealth right for me?',
        body: [
          'Telehealth works well for outpatient psychiatric care: evaluations, medication management, and supportive therapy from home.',
          CRISIS.full,
        ],
      },
    ],
    faqHeading: 'Common questions about video visits',
    faqs: [
      FAQ.virtualOnly,
      { q: 'Who can book a video visit?', a: `${AGES.short}, for patients in ${CONTACT.state}.` },
      { q: 'Can I use insurance for video visits?', a: INSURANCE_LINE },
      FAQ.whatPsychNpDoes,
    ],
    relatedHeading: 'Keep exploring',
    relatedLinks: [
      {
        href: '/services/psychiatric-evaluation',
        label: 'Psychiatric Evaluation',
        eyebrow: 'Start here',
        body: 'Your first visit: history, symptoms, goals, and a plan.',
      },
      {
        href: '/services/medication-management',
        label: 'Medication Management',
        eyebrow: 'Service',
        body: 'Follow-up visits to monitor progress and adjust treatment.',
      },
      {
        href: '/new-patients',
        label: 'Your First Visit',
        eyebrow: 'New patients',
        body: 'What to expect and how to get started.',
      },
    ],
    ctaHeading: 'Ready to meet by video?',
    ctaBody: 'Book with insurance through Alma or Headway, or request a self-pay visit.',
  },

  // ─────────────────────────────────────────────────────────────── ADHD evaluation
  {
    ...BASE,
    slug: 'adhd-evaluation',
    title: 'ADHD Evaluation & Treatment',
    metaTitle: 'ADHD Evaluation & Treatment Online, CT',
    headline: 'ADHD Evaluation and Treatment Online for Teens and Adults in Connecticut',
    description:
      'Online ADHD evaluation and treatment for teens and adults in Connecticut. Telehealth assessment, medication management, and support at school and work.',
    heroEyebrow: 'ADHD care for teens and adults',
    heroSubhead: `Evaluation and ongoing care for attention difficulties, distractibility, impulsivity, and disorganization, by secure video for teens ${AGES.minimum} and older and adults.`,
    heroImage: PAGE_IMAGES['/services/adhd-evaluation'],
    introHeading: 'ADHD care at JRose Wellness',
    intro: [
      'Evaluation and management of attention difficulties, distractibility, impulsivity, and disorganization in both adolescents and adults. Treatment supports better focus, productivity, and daily structure at school, work, and home.',
      `Care is with ${PROVIDER.byline}, for patients in ${CONTACT.state} ages ${AGES.minimum} and older.`,
      'Your evaluation looks at the full picture, including stress, mood, sleep, and anything else affecting how you focus, so your plan fits you.',
    ],
    signsHeading: 'Signs it may be worth an evaluation',
    signsList: [
      'Is it hard to keep your attention on tasks, conversations, or reading?',
      'Are you easily pulled off track by noise, your phone, or your own thoughts?',
      'Do you act or speak before thinking, then wish you had waited?',
      'Do deadlines, schedules, and belongings tend to slip through the cracks?',
      'Is it getting in the way at school, at work, or at home?',
    ],
    crisis: true,
    approachHeading: 'How the evaluation works',
    approachSubhead: 'Your first visit is a full psychiatric evaluation focused on you.',
    approach: [
      {
        title: 'Your history',
        body: 'What brings you in, your relevant medical and mental health history, and any treatment you have tried before.',
        iconPath: ICON.clipboardCheck,
      },
      {
        title: 'Your day-to-day',
        body: 'How attention, distractibility, impulsivity, and organization show up at school, at work, and at home.',
        iconPath: ICON.home,
      },
      {
        title: 'Your goals and plan',
        body: 'What you want to change, and a personalized plan built around it, which may include medication, supportive therapy, practical strategies, or a mix.',
        iconPath: ICON.document,
      },
    ],
    benefitsHeading: 'Treatment options',
    benefits: [
      {
        title: 'Medication management, when appropriate',
        body: 'If medication could help, options are discussed thoughtfully, including benefits, risks, and your comfort level. Medication is optional.',
      },
      {
        title: 'Supportive therapy and practical strategies',
        body: 'Visits include supportive therapy and practical coping strategies for focus, planning, and daily structure.',
      },
      {
        title: 'Ongoing follow-up',
        body: 'Follow-up visits check on how treatment is working and adjust it when needed.',
      },
      {
        title: 'Care for teens and adults',
        body: `ADHD care is available for adolescents ${AGES.minimum} and older, adults, and older adults.`,
      },
    ],
    bullets: [],
    extraSections: [
      {
        heading: 'About controlled medications',
        body: [`${FAQ.controlledSubstances.q} ${FAQ.controlledSubstances.a}`],
      },
      {
        heading: 'Cost',
        body: [
          `An ADHD evaluation is an initial evaluation: ${PRICING.initialEvaluation.price} self-pay, with follow-up and medication management visits at ${PRICING.followUp.price}. ${PRICING.slidingScale}`,
          INSURANCE_COST,
        ],
      },
    ],
    faqHeading: 'Common questions about ADHD care',
    faqs: [
      {
        q: 'Do you see teens for ADHD?',
        a: `Yes. JRose Wellness sees ${AGES.short.toLowerCase()}.`,
      },
      FAQ.choosingMedication,
      FAQ.noMedication,
      FAQ.virtualOnly,
    ],
    relatedHeading: 'Keep exploring',
    relatedLinks: [
      {
        href: '/who-we-help/teens',
        label: 'Teens',
        eyebrow: 'Who we help',
        body: `Psychiatric care for adolescents ${AGES.minimum} and older.`,
      },
      {
        href: '/who-we-help/adults',
        label: 'Adults',
        eyebrow: 'Who we help',
        body: 'Care for young adults and adults.',
      },
      {
        href: '/services/medication-management',
        label: 'Medication Management',
        eyebrow: 'Service',
        body: 'Follow-up visits to monitor progress and adjust treatment.',
      },
    ],
    ctaHeading: 'Ready to talk about focus and attention?',
    ctaBody: 'Book with insurance through Alma or Headway, or request a self-pay visit. Every visit is by secure video.',
  },
]
