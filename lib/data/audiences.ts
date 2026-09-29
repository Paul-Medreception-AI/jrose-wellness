import type { FAQ, ServicePageContent } from '@/components/templates/ServicePageTemplate'
import {
  AGES,
  BOOKING,
  CONTACT,
  INSURANCE_HEADLINE,
  NAV_CTA,
  PRACTICE_FAQS,
  PRICING,
  PROVIDER,
  SITE_NAME,
  SITE_URL,
} from '@/lib/site'
import { PAGE_IMAGES } from '@/lib/images'

// Audience pages (/who-we-help/*). Every practice fact comes from lib/site.ts; copy follows
// FACTS.md sections 5 and 13: "adolescents 15 and older" (never younger), no plan that is not on
// the Alma or Headway lists, insurance only "through Alma" / "through Headway", and no
// availability claims.

const BASE = {
  siteUrl: SITE_URL,
  siteName: SITE_NAME,
  ctaLabel: NAV_CTA.label,
  ctaHref: NAV_CTA.href,
  hubLabel: 'Who We Help',
  hubHref: '/who-we-help',
}

/** "a, b, and c" */
const list = (xs: readonly string[]) =>
  xs.length < 3 ? xs.join(' and ') : `${xs.slice(0, -1).join(', ')}, and ${xs[xs.length - 1]}`

/** One of the practice's own FAQ answers, verbatim, found by a phrase in its question. */
function practiceFaq(phrase: string): FAQ {
  const f = PRACTICE_FAQS.find((x) => x.q.toLowerCase().includes(phrase.toLowerCase()))
  if (!f) throw new Error(`PRACTICE_FAQS has no question containing "${phrase}"`)
  return { q: f.q, a: f.a }
}

const SELF_PAY = `You can also pay directly: ${PRICING.initialEvaluation.price} for the initial evaluation and ${PRICING.followUp.price} for follow-up and medication management.`

const INSURANCE_FAQ: FAQ = {
  q: 'Do you take insurance?',
  a: `Yes, by booking through Alma or Headway. Plans such as ${list(INSURANCE_HEADLINE)} are listed on our Insurance page. ${SELF_PAY}`,
}

// Heroicons (outline, 24px) path data for the approach cards.
const ICON = {
  calendar:
    'M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5',
  phone:
    'M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3',
  card: 'M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5z',
  chat: 'M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 01-2.555-.337A5.972 5.972 0 015.41 20.97a5.969 5.969 0 01-.474-.065 4.48 4.48 0 00.978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25z',
  users:
    'M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z',
  target:
    'M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z',
  bulb: 'M12 18v-5.25m0 0a6.01 6.01 0 001.5-.189m-1.5.189a6.01 6.01 0 01-1.5-.189m3.75 7.478a12.06 12.06 0 01-4.5 0m3.75 2.383a14.406 14.406 0 01-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 10-7.517 0c.85.493 1.509 1.333 1.509 2.316V18',
  clipboard:
    'M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z',
  scale:
    'M12 3v17.25m0 0c-1.472 0-2.882.265-4.185.75M12 20.25c1.472 0 2.882.265 4.185.75M18.75 4.97A48.416 48.416 0 0012 4.5c-2.291 0-4.545.16-6.75.47m13.5 0c1.01.143 2.01.317 3 .52m-3-.52l2.62 10.726c.122.499-.106 1.028-.589 1.202a5.988 5.988 0 01-2.031.352 5.988 5.988 0 01-2.031-.352c-.483-.174-.711-.703-.59-1.202L18.75 4.971zm-16.5.52c.99-.203 1.99-.377 3-.52m0 0l2.62 10.726c.122.499-.106 1.028-.589 1.202a5.989 5.989 0 01-2.031.352 5.989 5.989 0 01-2.031-.352c-.483-.174-.711-.703-.59-1.202L5.25 4.971z',
  refresh:
    'M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99',
  heart:
    'M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z',
} as const

export const AUDIENCES: ServicePageContent[] = [
  // ------------------------------------------------------------------ Teens (15+)
  {
    ...BASE,
    slug: 'teens',
    title: 'Teens (15+)',
    metaTitle: 'Teen Psychiatric Care Online in CT',
    headline: 'Telehealth Psychiatric Care for Teens in Connecticut',
    heroEyebrow: `Adolescents ${AGES.minimum} and older`,
    heroSubhead: `Psychiatric evaluation, medication management, and supportive therapy by secure video, for adolescents ${AGES.minimum} and older.`,
    description:
      'Telehealth psychiatric care for teens 15 and older in Connecticut: evaluations, medication management, and support for anxiety, depression, ADHD, and stress.',
    heroImage: PAGE_IMAGES['/who-we-help/teens'],
    crisis: true,
    introHeading: 'Care for teens, from home',
    intro: [
      'The teen years bring a lot at once: school, friendships, family, and figuring out who you are. When worry, a low mood, or trouble focusing starts to get in the way, it helps to talk with someone who looks at the whole picture.',
      `${PROVIDER.name} is a ${PROVIDER.title.toLowerCase()} with experience working with adolescents and adults. She sees teens ${AGES.minimum} and older by secure video, so there is no drive and no waiting room.`,
      'In her words: "I strive to create a space where clients can talk openly without fear of judgment." For a teen, that means being heard and having a real say in the plan.',
    ],
    signsHeading: 'Signs it may be time to reach out',
    signsList: [
      "Worry, nervousness, or panic that won't let up",
      'Sadness, irritability, or low motivation that lasts for weeks',
      'Trouble focusing, staying organized, or finishing schoolwork',
      'Sleeping much more or much less than usual',
      'Pulling away from friends or activities they used to enjoy',
      'Intrusive thoughts or repeated habits that feel hard to stop',
    ],
    bulletsHeading: 'What your teen can expect',
    bullets: [
      'A first visit that covers history, current concerns, symptoms, school and home life, and goals.',
      'Time to talk openly, in plain language, without being talked down to.',
      'A clear explanation of what may be going on and what the options are.',
      'Medication is optional. If it is part of the plan, you talk through the benefits and risks together first.',
      'Practical coping strategies to use at school and at home.',
      'Follow-up visits to check progress, with a referral to a therapist if more support is needed.',
    ],
    approachHeading: 'For parents and guardians',
    approachSubhead:
      'You know your teen well, and your help matters, especially at the start. Here is what to know before you book.',
    approach: [
      {
        title: 'Booking for a teen',
        body: `Booking for a teen aged ${AGES.minimum} to 17? Call ${CONTACT.phone} and we will walk you through how a parent or guardian takes part in booking and consent.`,
        iconPath: ICON.calendar,
      },
      {
        title: 'Text reminders',
        body: AGES.smsNote,
        iconPath: ICON.phone,
      },
      {
        title: 'Insurance or self-pay',
        body: `If your teen is on your insurance plan, book through Alma or Headway to use it. Self-pay is ${PRICING.initialEvaluation.price} for the initial evaluation and ${PRICING.followUp.price} for each follow-up.`,
        iconPath: ICON.card,
      },
      {
        title: 'Questions first?',
        body: `Not sure whether this is the right fit for your teen? Call ${CONTACT.phone} before you book and we will talk it through with you.`,
        iconPath: ICON.chat,
      },
    ],
    timelineHeading: 'How getting started works',
    timeline: [
      {
        title: 'Choose how to book',
        body: 'Use insurance by booking through Alma or Headway, or request a self-pay appointment directly with the practice.',
      },
      {
        title: 'Talk with us first',
        body: `For patients under 18, call ${CONTACT.phone} before booking so we can go over how a parent or guardian takes part.`,
      },
      {
        title: 'Meet Jessica by video',
        body: `The first visit is an evaluation of history, symptoms, and goals. ${BOOKING.alma.note}`,
      },
      {
        title: 'Follow up and adjust',
        body: 'Regular follow-up visits check how your teen is doing and adjust the plan when needed.',
      },
    ],
    extraSections: [
      {
        heading: 'Ages we see',
        body: [
          `Jessica sees ${AGES.short.toLowerCase()}. For teens, care starts at age ${AGES.minimum}, and every visit is by secure video.`,
          `If your teen is younger than ${AGES.minimum}, their primary care provider can help you find the right next step.`,
        ],
      },
    ],
    benefits: [],
    faqHeading: 'Questions parents and teens ask',
    faqs: [
      {
        q: 'What ages do you see?',
        a: `Jessica sees ${AGES.short.toLowerCase()}, all by secure video.`,
      },
      {
        q: 'Does a parent or guardian need to be involved?',
        a: `For patients under 18, call ${CONTACT.phone} before you book and we will walk you through how a parent or guardian takes part. ${AGES.smsNote}`,
      },
      practiceFaq("don't want to take medication"),
      practiceFaq('controlled substances'),
      INSURANCE_FAQ,
    ],
    relatedHeading: 'Conditions and services for teens',
    relatedLinks: [
      {
        href: '/conditions/anxiety',
        eyebrow: 'Condition',
        label: 'Anxiety & Panic',
        body: 'Worry, panic attacks, and social anxiety that get in the way of school, friendships, or sleep.',
      },
      {
        href: '/conditions/depression',
        eyebrow: 'Condition',
        label: 'Depression',
        body: 'Persistent sadness, irritability, low energy, or losing interest in things that used to feel good.',
      },
      {
        href: '/services/adhd-evaluation',
        eyebrow: 'Service',
        label: 'ADHD Evaluation & Treatment',
        body: 'Evaluation and management of attention difficulties, distractibility, impulsivity, and disorganization.',
      },
      {
        href: '/conditions/ocd',
        eyebrow: 'Condition',
        label: 'OCD',
        body: 'Intrusive thoughts and repeated checking or habits that feel hard to stop.',
      },
      {
        href: '/conditions/autism-spectrum',
        eyebrow: 'Condition',
        label: 'Autism Spectrum Support',
        body: "Personalized support for social, communication, or behavioral challenges, built around each person's strengths.",
      },
      {
        href: '/services/psychiatric-evaluation',
        eyebrow: 'Service',
        label: 'Psychiatric Evaluation',
        body: 'The first visit: history, current concerns, symptoms, and goals, leading to a plan that fits.',
      },
    ],
    ctaHeading: "Ready to talk about your teen's care?",
    ctaBody:
      'Book with insurance through Alma or Headway, or reach out to set up a self-pay visit. Every visit is by secure video.',
  },

  // ------------------------------------------------------------------ Adults
  {
    ...BASE,
    slug: 'adults',
    title: 'Adults',
    metaTitle: 'Adult Psychiatric Care Online in CT',
    headline: 'Online Psychiatric Care for Adults in Connecticut',
    heroEyebrow: 'Young adults and adults',
    heroSubhead:
      'Psychiatric evaluation, medication management, and supportive therapy by secure video, for young adults and adults dealing with anxiety, depression, ADHD, burnout, and life changes.',
    description:
      'Online psychiatric care for young adults and adults in Connecticut: evaluations, medication management, and support for anxiety, depression, ADHD, and burnout.',
    heroImage: PAGE_IMAGES['/who-we-help/adults'],
    crisis: true,
    introHeading: 'Care that fits a busy life',
    intro: [
      "Work, relationships, family, money, a move, a new job. Adult life asks a lot, and sometimes stress turns into something that doesn't lift on its own.",
      `${PROVIDER.name} is a ${PROVIDER.title.toLowerCase()} who sees young adults and adults by secure video. She describes her approach as "${PROVIDER.approach[0]}," and she balances support with "${PROVIDER.approach[2]}."`,
      'Visits happen from the comfort and privacy of your home, with no commute and no waiting room.',
    ],
    signsHeading: 'Signs it may be time to talk to someone',
    signsList: [
      'Worry or racing thoughts that are hard to switch off',
      'A low mood or loss of interest that hangs on for weeks',
      'Trouble focusing, starting, or finishing tasks at work or home',
      'Feeling exhausted, cynical, or checked out at work',
      'Sleep that is off, whether too little or too much',
      'Leaning on alcohol or other substances to cope',
      'Friends or family noticing that something has changed',
    ],
    benefitsHeading: 'Common reasons adults reach out',
    benefits: [
      {
        title: 'Anxiety and panic',
        body: 'Support for excessive worry, panic attacks, social anxiety, and stress that interferes with daily life, relationships, or sleep.',
      },
      {
        title: 'Depression',
        body: 'Care for persistent sadness, low energy, loss of motivation, mood changes, or difficulty finding joy in everyday activities.',
      },
      {
        title: 'ADHD',
        body: 'Evaluation and management of attention difficulties, distractibility, impulsivity, and disorganization, to support better focus and daily structure at work and home.',
      },
      {
        title: 'Stress and burnout',
        body: 'Help when a demanding stretch at work or at home leaves you running on empty and short on patience.',
      },
      {
        title: 'Relationships and self-esteem',
        body: 'Support with relationship challenges and self-esteem, often alongside care for anxiety or depression.',
      },
      {
        title: 'Life transitions',
        body: 'A steady place to sort things out during big changes: a new job, a move, a breakup, or starting over.',
      },
    ],
    bulletsHeading: 'What working with Jessica looks like',
    bullets: [
      'An initial evaluation of your history, current concerns, symptoms, lifestyle, and goals.',
      'A personalized treatment plan, not a one-size-fits-all approach.',
      'Medication when it makes sense for you. Medication is optional.',
      `Supportive therapy during visits, using ${list(PROVIDER.techniques.slice(1, 5))}.`,
      'Follow-up visits to check how treatment is working and adjust it when needed.',
      'A referral to a therapist if you need more therapy than visits allow.',
    ],
    approachHeading: "Jessica's approach, in her words",
    approach: [
      {
        title: 'Compassionate and collaborative',
        body: `"My approach is ${PROVIDER.approach[0]}." You set goals together, and you stay informed and involved in every decision about your care.`,
        iconPath: ICON.users,
      },
      {
        title: 'Warm and direct',
        body: `"My style is ${PROVIDER.approach[1]}." The aim is for you to leave visits with tools, insight, and a clearer understanding of yourself.`,
        iconPath: ICON.target,
      },
      {
        title: 'Practical',
        body: `She balances emotional support with "${PROVIDER.approach[2]}," so the plan fits the life you actually have.`,
        iconPath: ICON.bulb,
      },
    ],
    faqHeading: 'Questions adults ask',
    faqs: [
      {
        q: 'Do you treat ADHD in adults?',
        a: 'Yes. Jessica evaluates and manages attention difficulties, distractibility, impulsivity, and disorganization in both adolescents and adults.',
      },
      practiceFaq('therapy, medication management, or both'),
      practiceFaq('controlled substances'),
      practiceFaq("don't want to take medication"),
      INSURANCE_FAQ,
    ],
    relatedHeading: 'Conditions and services for adults',
    relatedLinks: [
      {
        href: '/conditions/anxiety',
        eyebrow: 'Condition',
        label: 'Anxiety & Panic',
        body: 'Excessive worry, panic attacks, social anxiety, and stress that interferes with daily life.',
      },
      {
        href: '/conditions/depression',
        eyebrow: 'Condition',
        label: 'Depression',
        body: 'Persistent sadness, low energy, loss of motivation, and mood changes.',
      },
      {
        href: '/services/adhd-evaluation',
        eyebrow: 'Service',
        label: 'ADHD Evaluation & Treatment',
        body: 'Assessment and ongoing care for attention, focus, and organization.',
      },
      {
        href: '/conditions/burnout-life-transitions',
        eyebrow: 'Condition',
        label: 'Burnout & Life Transitions',
        body: 'Support when stress builds up or life changes faster than you can keep up.',
      },
      {
        href: '/services/medication-management',
        eyebrow: 'Service',
        label: 'Medication Management',
        body: 'Follow-up visits to monitor progress and adjust treatment when needed.',
      },
      {
        href: '/services/supportive-therapy',
        eyebrow: 'Service',
        label: 'Supportive Therapy',
        body: 'Coping skills and support built into your visits.',
      },
    ],
    ctaHeading: 'Ready to take the first step?',
    ctaBody:
      'Book with insurance through Alma or Headway, or reach out to set up a self-pay visit. Every visit is by secure video.',
  },

  // ------------------------------------------------------------------ Older adults (65+)
  {
    ...BASE,
    slug: 'older-adults',
    title: 'Older Adults',
    metaTitle: 'Psychiatric Care for Older Adults, CT',
    headline: 'Telehealth Psychiatric Care for Older Adults in Connecticut',
    heroEyebrow: 'Adults 65 and older',
    heroSubhead:
      'Psychiatric evaluation and careful medication management by secure video, for adults 65 and older who would rather get care from home.',
    description:
      'Telehealth psychiatric care for older adults in Connecticut, with careful medication management that considers your physical health and other medications.',
    heroImage: PAGE_IMAGES['/who-we-help/older-adults'],
    crisis: true,
    introHeading: 'Care that comes to you',
    intro: [
      'Later life brings its own changes: retirement, new health conditions, caring for someone you love, or simply not feeling like yourself. Anxiety, a low mood, poor sleep, and mood changes are not something you have to accept as part of getting older.',
      `${PROVIDER.name} is a ${PROVIDER.title.toLowerCase()} who also has a background as a family nurse practitioner. In her words, that background "gives me a broader understanding of the connection between physical and mental health."`,
      'Every visit is by secure video, from the comfort and privacy of your home. If you are new to video calls, a family member or friend is welcome to help you get set up.',
    ],
    signsHeading: 'Reasons to reach out',
    signsList: [
      'Worry or anxiety that is new or getting worse',
      'A low mood or loss of interest in things you used to enjoy',
      'Trouble falling or staying asleep',
      'Mood changes that feel out of character',
      'Stress from health changes or caring for a loved one',
      'Adjusting to a big change, like retirement or a move',
      'Questions about psychiatric medications you already take',
    ],
    approachHeading: 'Careful medication management',
    approachSubhead:
      'When you take several medications, every change deserves a careful look. Here is how Jessica approaches it.',
    approach: [
      {
        title: 'Your full medication list',
        body: 'Before your first visit, gather everything you take, prescription and over-the-counter, with doses. Jessica reviews it so any new medication fits with what you already take.',
        iconPath: ICON.clipboard,
      },
      {
        title: 'Interactions discussed carefully',
        body: `${practiceFaq('which medication is right').a} Benefits, risks, and possible interactions are talked through before any change.`,
        iconPath: ICON.scale,
      },
      {
        title: 'Regular check-ins',
        body: 'Follow-up visits monitor how treatment is working and how you are feeling, so medication can be adjusted when needed to keep it safe and effective.',
        iconPath: ICON.refresh,
      },
      {
        title: 'Medication is optional',
        body: "If you'd rather not add a medication, that's okay. Jessica provides supportive therapy during visits and can explore non-medication approaches with you.",
        iconPath: ICON.heart,
      },
    ],
    timelineHeading: 'Tips for your first video visit',
    timeline: [
      {
        title: 'Pick your device',
        body: 'A laptop, tablet, or smartphone with a camera works. A tablet or laptop set on a table gives you a bigger picture and frees your hands.',
      },
      {
        title: 'Check your sound',
        body: 'Turn the volume up ahead of time. Headphones, or hearing aids that connect to your device, can make voices clearer.',
      },
      {
        title: 'Find a quiet, private spot with good light',
        body: 'Sit facing a window or a lamp so your face is easy to see, and choose a room where you can talk freely.',
      },
      {
        title: 'Keep a few things nearby',
        body: 'Have your medication list, your glasses, and any questions you want to ask within reach.',
      },
      {
        title: 'Join a few minutes early',
        body: 'Open your visit link a few minutes before the start time so there is time to sort out the camera or sound.',
      },
    ],
    extraSections: [
      {
        heading: 'Checking your coverage',
        body: [
          `To use insurance, book through Alma or Headway. Plans such as ${list(INSURANCE_HEADLINE)} are listed on our Insurance page, and each platform lets you check your coverage before your visit.`,
          `Not sure whether your plan is included? Check your coverage through Alma or Headway, or call us at ${CONTACT.phone}.`,
          SELF_PAY,
        ],
      },
    ],
    bullets: [],
    benefits: [],
    faqHeading: 'Questions older adults ask',
    faqs: [
      {
        q: 'Do you see older adults?',
        a: `Yes. Jessica sees ${AGES.short.toLowerCase()}, all by secure video.`,
      },
      {
        q: "I'm not comfortable with technology. Can I still have visits?",
        a: `Yes. A laptop, tablet, or smartphone with a camera is all you need, and a family member or friend is welcome to help you get set up. If you have questions before your visit, call us at ${CONTACT.phone}.`,
      },
      {
        q: 'Is my insurance accepted?',
        a: `Check your coverage through Alma or Headway, or call us at ${CONTACT.phone}. The plans listed on each profile are on our Insurance page. ${SELF_PAY}`,
      },
      practiceFaq('which medication is right'),
      practiceFaq("don't want to take medication"),
    ],
    relatedHeading: 'Helpful next steps',
    relatedLinks: [
      {
        href: '/services/medication-management',
        eyebrow: 'Service',
        label: 'Medication Management',
        body: 'Follow-up visits to monitor progress and adjust treatment safely.',
      },
      {
        href: '/conditions/depression',
        eyebrow: 'Condition',
        label: 'Depression',
        body: 'Persistent sadness, low energy, or difficulty finding joy in everyday activities.',
      },
      {
        href: '/conditions/anxiety',
        eyebrow: 'Condition',
        label: 'Anxiety & Panic',
        body: 'Worry, panic, and stress that interfere with daily life or sleep.',
      },
      {
        href: '/services/telepsychiatry',
        eyebrow: 'Service',
        label: 'Telepsychiatry',
        body: 'How secure video visits work, from booking to follow-up.',
      },
      {
        href: '/insurance',
        eyebrow: 'Insurance',
        label: 'Insurance & Pricing',
        body: 'Plans through Alma and Headway, plus self-pay rates.',
      },
      {
        href: '/new-patients',
        eyebrow: 'Getting started',
        label: 'Your First Visit',
        body: 'What to expect and how to get ready.',
      },
    ],
    ctaHeading: 'Ready to get started?',
    ctaBody: `Book with insurance through Alma or Headway, or call ${CONTACT.phone} with questions or to set up a self-pay visit.`,
  },
]
