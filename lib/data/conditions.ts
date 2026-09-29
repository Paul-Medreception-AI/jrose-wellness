// Condition pages (/conditions/[slug]). Content traces to FACTS.md sections 4, 8, 11 and 13 and to
// the IA plan. The practice's own wording (homepage programs, About page service blurbs, Alma and
// Headway bios) is used wherever it exists. Every practice fact (ages, techniques, FAQ answers,
// crisis language) is imported from lib/site.ts, never retyped.
//
// Rules for anyone editing this file:
// - Plain, non-stigmatizing language. Signs lists are general education, never a diagnosis.
// - Medication is always optional and discussed collaboratively. No promises about controlled
//   medications; the controlled-substances answer is the practice's verbatim FAQ answer.
// - Therapy techniques come only from PROVIDER.techniques (her own list). FACTS.md section 11 lists
//   the named protocols and designations that stay off the site until Jessica confirms them.
// - No statistics, no outcome promises, no lab monitoring details, no withdrawal management or
//   addiction medications offered, no autism diagnostic evaluations.
// - ADHD lives at /services/adhd-evaluation, not here.

import type { ConditionPageContent, FAQ, IconCard, RelatedLink } from '@/components/templates/ConditionPageTemplate'
import { PAGE_IMAGES, imageFor, type SiteImage } from '@/lib/images'
import { AGES, CRISIS, NAV_CTA, PRACTICE_FAQS, PROVIDER, SITE_NAME, SITE_URL } from '@/lib/site'
import { postLinks } from '@/lib/posts'

/** A condition page plus a one-line summary for hub cards and home-page tiles. */
// summary is optional so an entry appended in the canonical page schema (no summary) still type-checks;
// the /conditions hub falls back to its description.
export type ConditionEntry = ConditionPageContent & { summary?: string }

const BASE = {
  siteUrl: SITE_URL,
  siteName: SITE_NAME,
  ctaLabel: NAV_CTA.label,
  ctaHref: NAV_CTA.href,
  hubLabel: 'Conditions',
  hubHref: '/conditions',
  badge: 'Conditions',
  heroEyebrow: 'Conditions we treat',
}

// ---------------------------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------------------------

function heroFor(slug: string): SiteImage {
  const route = `/conditions/${slug}`
  return PAGE_IMAGES[route] ?? imageFor(route)
}

/** "a", "a and b", "a, b, and c" */
function list(items: readonly string[]): string {
  if (items.length <= 1) return items.join('')
  if (items.length === 2) return `${items[0]} and ${items[1]}`
  return `${items.slice(0, -1).join(', ')}, and ${items[items.length - 1]}`
}

type Technique = (typeof PROVIDER.techniques)[number]
/** Only techniques Jessica names herself (PROVIDER.techniques) can be listed. */
const techniques = (...picks: Technique[]) => list(picks)

type PracticeQuestion = (typeof PRACTICE_FAQS)[number]['q']
/** The practice's own FAQ answer, verbatim. */
function practiceFaq(q: PracticeQuestion): FAQ {
  const f = PRACTICE_FAQS.find((x) => x.q === q)!
  return { q: f.q, a: f.a }
}

const FAQ_MED_OPTIONAL = practiceFaq("What if I don't want to take medication?")
const FAQ_HOW_DECIDE = practiceFaq('How do you decide which medication is right for me?')
const FAQ_THERAPY_OR_MEDS = practiceFaq('Do you provide therapy, medication management, or both?')
const FAQ_CONTROLLED = practiceFaq('Will you prescribe controlled substances?')

const AGES_SENTENCE = `Jessica sees adolescents ${AGES.minimum} and older as well as adults, all by secure video.`

// Heroicons (outline, 24px) paths for the approach cards.
const ICON = {
  person:
    'M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z',
  medication:
    'M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23-.693L5 14.5m14.8.8l1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0112 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5',
  chat:
    'M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 01-2.555-.337A5.972 5.972 0 015.41 20.97a5.969 5.969 0 01-.474-.065 4.48 4.48 0 00.978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25z',
  followUp:
    'M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99',
  book:
    'M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25',
  shield:
    'M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z',
  clock: 'M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z',
  moon:
    'M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z',
  people:
    'M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z',
  heart:
    'M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z',
} as const

const card = (title: string, body: string, iconPath: string): IconCard => ({ title, body, iconPath })

// Related-link cards used across pages. Hrefs are all routes that exist in the new IA.
const REL = {
  anxiety: {
    href: '/conditions/anxiety',
    eyebrow: 'Condition',
    label: 'Anxiety & Panic',
    body: 'Worry, panic attacks, social anxiety, and stress that gets in the way of daily life.',
  },
  depression: {
    href: '/conditions/depression',
    eyebrow: 'Condition',
    label: 'Depression',
    body: 'Persistent sadness, low energy, loss of motivation, and difficulty finding joy.',
  },
  bipolar: {
    href: '/conditions/bipolar-disorder',
    eyebrow: 'Condition',
    label: 'Bipolar Disorder',
    body: 'Care aimed at stabilizing mood changes, with steady medication management.',
  },
  ocd: {
    href: '/conditions/ocd',
    eyebrow: 'Condition',
    label: 'OCD',
    body: 'Intrusive thoughts and repetitive routines, with CBT-based techniques in visits.',
  },
  ptsd: {
    href: '/conditions/ptsd-trauma',
    eyebrow: 'Condition',
    label: 'PTSD & Trauma',
    body: 'Care for trauma and post-traumatic stress in a welcoming, judgment-free setting.',
  },
  psychosis: {
    href: '/conditions/schizophrenia-psychosis',
    eyebrow: 'Condition',
    label: 'Schizophrenia & Psychosis',
    body: 'Outpatient medication management and steady follow-up by secure video.',
  },
  substance: {
    href: '/conditions/substance-use',
    eyebrow: 'Condition',
    label: 'Substance Use',
    body: 'Non-judgmental support for alcohol or substance use and ongoing recovery.',
  },
  burnout: {
    href: '/conditions/burnout-life-transitions',
    eyebrow: 'Condition',
    label: 'Burnout & Life Transitions',
    body: 'Stress, burnout, relationship challenges, self-esteem, and big life changes.',
  },
  adhd: {
    href: '/services/adhd-evaluation',
    eyebrow: 'Service',
    label: 'ADHD Evaluation & Treatment',
    body: 'Assessment and ongoing care for attention, focus, and organization, for teens and adults.',
  },
  medication: {
    href: '/services/medication-management',
    eyebrow: 'Service',
    label: 'Medication Management',
    body: 'Follow-up visits to monitor progress and adjust treatment carefully when needed.',
  },
  therapy: {
    href: '/services/supportive-therapy',
    eyebrow: 'Service',
    label: 'Supportive Therapy',
    body: 'Coping skills and support built into your visits.',
  },
  telepsychiatry: {
    href: '/services/telepsychiatry',
    eyebrow: 'Service',
    label: 'Telepsychiatry',
    body: 'How secure video visits work, from booking to follow-up.',
  },
  teens: {
    href: '/who-we-help/teens',
    eyebrow: 'Who we help',
    label: `Teens (${AGES.minimum}+)`,
    body: `Psychiatric care for adolescents ${AGES.minimum} and older.`,
  },
  adults: {
    href: '/who-we-help/adults',
    eyebrow: 'Who we help',
    label: 'Adults',
    body: 'Care for young adults and adults, by secure video from home.',
  },
  olderAdults: {
    href: '/who-we-help/older-adults',
    eyebrow: 'Who we help',
    label: 'Older Adults',
    body: 'Telehealth psychiatric care for adults 65 and older.',
  },
} satisfies Record<string, RelatedLink>

const CTA_BODY =
  'Book a secure video visit through Alma or Headway, or request a self-pay appointment. You do not need a diagnosis to get started.'

// ---------------------------------------------------------------------------------------------
// Pages
// ---------------------------------------------------------------------------------------------

export const CONDITIONS: ConditionEntry[] = [
  // ------------------------------------------------------------------ Anxiety & Panic
  {
    ...BASE,
    slug: 'anxiety',
    title: 'Anxiety & Panic',
    summary:
      'Support for excessive worry, panic attacks, social anxiety, and stress that interferes with daily life, relationships, or sleep.',
    metaTitle: 'Anxiety & Panic Treatment Online in CT',
    headline: 'Anxiety and Panic Treatment Online in Connecticut',
    description:
      'Online anxiety and panic treatment in Connecticut. Telehealth evaluation, medication management, and CBT-based support for worry, panic attacks, and stress.',
    heroImage: heroFor('anxiety'),
    heroSubhead:
      'Support for excessive worry, panic attacks, social anxiety, and stress that interferes with daily life, relationships, or sleep. Every visit is by secure video, from home.',
    introHeading: 'When worry starts running the show',
    intro: [
      'Everyone feels anxious sometimes. It becomes worth addressing when the worry is hard to switch off, when your body stays on high alert, or when fear starts deciding where you go and what you avoid.',
      'Anxiety can look like racing thoughts at night, a tight chest before a meeting, sudden waves of panic that seem to come out of nowhere, or dread about social situations. None of this means something is wrong with you. It means your stress response is working overtime, and that is something you can get help with.',
      `Jessica provides psychiatric care for anxiety, panic, and social anxiety. ${AGES_SENTENCE} Treatment focuses on helping you regain a sense of calm, control, and emotional balance.`,
    ],
    signsHeading: 'Common signs of anxiety',
    signsList: [
      'Worry that feels constant or hard to control',
      'Racing thoughts, especially when you try to sleep',
      'Panic attacks: a pounding heart, shortness of breath, or dread that builds fast',
      'Avoiding places, people, or situations because of fear',
      'Feeling on edge, restless, or tense most days',
      'Stress that gets in the way of work, school, relationships, or sleep',
    ],
    bullets: [],
    approachHeading: 'How Jessica treats anxiety',
    approachSubhead:
      'Care is collaborative. You and Jessica decide together what fits your life, and medication is always optional.',
    approach: [
      card(
        'A careful first evaluation',
        'Your first visit covers what you are feeling, when it started, what makes it better or worse, your history, and your goals, so the plan fits you rather than a template.',
        ICON.person,
      ),
      card(
        'Medication, if it fits',
        'If medication could help, Jessica walks you through the options, including benefits, risks, and your comfort level. Choices are based on your symptoms, history, past medication responses, side-effect sensitivity, and preferences.',
        ICON.medication,
      ),
      card(
        'Skills you can use between visits',
        `Visits include supportive therapy with ${techniques('cognitive behavioral techniques', 'mindfulness', 'practical coping strategies')} for worry, panic, and the physical side of anxiety.`,
        ICON.chat,
      ),
      card(
        'Steady follow-up',
        'Follow-up visits check in on how you are sleeping, working, and feeling, and adjust the plan when something is not helping.',
        ICON.followUp,
      ),
    ],
    benefitsHeading: 'What care can help you work toward',
    benefits: [
      { title: 'More calm and control', body: 'Fewer moments where anxiety makes the decision for you.' },
      { title: 'Tools for panic', body: 'Practical ways to ride out a wave of panic and feel less afraid of the next one.' },
      { title: 'Better rest', body: 'Attention to the racing thoughts and tension that keep you up at night.' },
      { title: 'Room for your life', body: 'Working back toward the places, people, and plans that anxiety has pushed aside.' },
    ],
    extraSections: [
      {
        heading: 'About anxiety medications and controlled substances',
        body: [
          `People often ask early on whether a specific medication, including a controlled one, will be prescribed. The practice's answer: "${FAQ_CONTROLLED.a}"`,
          'Medication is only one part of care, and it is always optional. If it becomes part of your plan, Jessica explains why a particular option makes sense for you and checks in on how it is working at every follow-up.',
        ],
      },
    ],
    faqHeading: 'Common questions about anxiety care',
    faqs: [
      {
        q: 'Can you help with panic attacks and social anxiety, not just everyday worry?',
        a: 'Yes. Care covers excessive worry, panic attacks, social anxiety, and stress that interferes with daily life, relationships, or sleep.',
      },
      FAQ_HOW_DECIDE,
      FAQ_MED_OPTIONAL,
      { q: 'Do you see teenagers with anxiety?', a: `Yes. ${AGES_SENTENCE}` },
    ],
    relatedLinks: [
      REL.ocd,
      REL.burnout,
      REL.adhd,
      ...postLinks(
        'panic-attacks-symptoms-triggers-and-treatment-options',
        'social-anxiety-more-than-just-shyness',
        'when-worry-becomes-problematic-recognizing-generalized-anxie',
      ),
    ],
    ctaHeading: 'Ready to feel steadier?',
    ctaBody: CTA_BODY,
  },

  // ------------------------------------------------------------------ Depression
  {
    ...BASE,
    slug: 'depression',
    title: 'Depression',
    summary:
      'Care for persistent sadness, low energy, loss of motivation, mood changes, or difficulty finding joy in everyday activities.',
    metaTitle: 'Depression Treatment Online in CT',
    headline: 'Depression Treatment Online in Connecticut',
    description:
      'Depression treatment by telehealth in Connecticut: psychiatric evaluation, medication management, and supportive therapy to help restore mood and energy.',
    heroImage: heroFor('depression'),
    heroSubhead:
      'Care for persistent sadness, low energy, loss of motivation, mood changes, or difficulty finding joy in everyday activities, by secure video from home.',
    crisis: true,
    introHeading: 'When the heaviness does not lift',
    intro: [
      'Depression is more than a bad week. It can feel like moving through fog: getting out of bed takes real effort, things you used to love feel flat, and small tasks start to pile up.',
      'It does not always look like sadness. For some people it shows up as exhaustion, irritability, trouble concentrating, or simply feeling numb. It is not a character flaw or a sign of weakness, and you do not have to wait until it gets worse to ask for help.',
      `Jessica works with adolescents ${AGES.minimum} and older and adults to improve mood, restore energy, and help you reconnect with purpose and daily functioning.`,
    ],
    signsHeading: 'Common signs of depression',
    signsList: [
      'Persistent sadness, emptiness, or feeling numb',
      'Low energy or fatigue that rest does not fix',
      'Loss of motivation or interest in things you used to enjoy',
      'Changes in sleep or appetite',
      'Trouble focusing or making decisions',
      'Pulling away from friends, family, or activities',
    ],
    bullets: [],
    approachHeading: 'How Jessica treats depression',
    approachSubhead: 'A plan built around you, adjusted as you go.',
    approach: [
      card(
        'Understanding the whole picture',
        'Your first visit looks at your mood, sleep, energy, stressors, medical and mental health history, and what you want to feel different.',
        ICON.person,
      ),
      card(
        'Medication management',
        'If an antidepressant or another medication makes sense, Jessica explains the options, benefits, and risks, and you decide together. Follow-up visits adjust it carefully so it stays safe and effective.',
        ICON.medication,
      ),
      card(
        'Supportive therapy',
        `Each visit includes ${techniques('supportive therapy', 'cognitive behavioral techniques', 'psychoeducation')}, plus small, practical steps to take between sessions.`,
        ICON.chat,
      ),
      card(
        'Daily routines count too',
        'Sleep, movement, and daily routines are part of the conversation, alongside medication and therapy.',
        ICON.moon,
      ),
    ],
    benefitsHeading: 'What care can help you work toward',
    benefits: [
      { title: 'Improve mood', body: 'Days that feel lighter and more manageable.' },
      { title: 'Restore energy', body: 'Addressing the exhaustion and low motivation that make everything harder.' },
      { title: 'Reconnect with purpose', body: 'Finding your way back to the people, work, and activities that matter to you.' },
      { title: 'Keep care on track', body: 'Regular follow-ups so changes are noticed early and the plan keeps fitting.' },
    ],
    extraSections: [
      {
        heading: "If you'd rather not take medication",
        body: [
          `You are not alone in feeling that way, and it is a reasonable place to start. In Jessica's words: "${FAQ_MED_OPTIONAL.a}"`,
          'Some people begin with therapy and practical changes and revisit medication later. Others never do. Either way, Jessica will be honest about what she sees and will respect your decision.',
        ],
      },
    ],
    faqHeading: 'Common questions about depression care',
    faqs: [
      {
        q: 'How is depression treated through telehealth?',
        a: 'With a thorough evaluation, then a plan that may include medication management and supportive therapy, followed by regular follow-up visits. Every visit happens by secure video, from the comfort and privacy of your home.',
      },
      FAQ_HOW_DECIDE,
      {
        q: 'Can depression and anxiety be treated at the same time?',
        a: 'Yes. They often show up together, and Jessica treats them as parts of one plan rather than two separate problems.',
      },
      { q: 'What if I am having thoughts of harming myself?', a: CRISIS.full },
    ],
    relatedLinks: [
      REL.bipolar,
      REL.anxiety,
      REL.olderAdults,
      ...postLinks(
        'supporting-a-loved-one-struggling-with-depression',
        'depression-and-motivation-why-it-s-so-hard-and-what-helps',
        'managing-seasonal-depression-and-winter-blues',
      ),
    ],
    ctaHeading: 'You do not have to push through alone',
    ctaBody: CTA_BODY,
  },

  // ------------------------------------------------------------------ Bipolar Disorder
  {
    ...BASE,
    slug: 'bipolar-disorder',
    title: 'Bipolar Disorder',
    summary:
      'Treatment aimed at stabilizing mood changes, including periods of depression and elevated or irritable mood.',
    metaTitle: 'Bipolar Disorder Care Online in CT',
    headline: 'Bipolar Disorder Treatment by Telehealth in Connecticut',
    description:
      'Telehealth bipolar disorder care in Connecticut: psychiatric evaluation and ongoing medication management focused on mood stability and long-term balance.',
    heroImage: heroFor('bipolar-disorder'),
    heroSubhead:
      'Treatment aimed at stabilizing mood changes, including periods of depression and elevated or irritable mood. Care focuses on balance, symptom management, and long-term emotional stability.',
    crisis: true,
    introHeading: 'Living with big shifts in mood',
    intro: [
      'Bipolar disorder involves shifts in mood and energy that go beyond ordinary ups and downs. There can be stretches of depression and stretches of elevated, energized, or irritable mood, sometimes with steadier periods in between.',
      'Those shifts can strain sleep, work, relationships, and finances, and they can be exhausting to live with. Consistent care can help you find a steadier rhythm and spot changes before they take over.',
      'Jessica provides outpatient psychiatric care for bipolar disorder by secure video, with a focus on balance, symptom management, and long-term emotional stability.',
    ],
    signsHeading: 'Mood patterns people describe',
    signsList: [
      'Periods of low mood, low energy, or hopelessness',
      'Periods of unusually high energy, confidence, or irritability',
      'Needing much less sleep without feeling tired',
      'Racing thoughts or talking faster than usual',
      'Impulsive decisions, such as spending or risk-taking, that feel out of character',
      'Mood changes that affect work, school, or relationships',
    ],
    bullets: [],
    approachHeading: 'How Jessica supports mood stability',
    approachSubhead: 'Steady, ongoing care, adjusted carefully over time.',
    approach: [
      card(
        'A detailed evaluation',
        'Your first visit maps out your mood history, past episodes, sleep, and any treatment you have tried, so the plan reflects the full pattern and not just how you feel today.',
        ICON.person,
      ),
      card(
        'Ongoing medication management',
        'Regular follow-ups to monitor how treatment is working and adjust it carefully when needed, so it stays safe, effective, and supportive of your overall well-being.',
        ICON.medication,
      ),
      card(
        'Supportive therapy and routines',
        `Visits include ${techniques('supportive therapy', 'psychoeducation', 'practical coping strategies')}, with attention to the sleep and daily routines that help keep mood steady.`,
        ICON.moon,
      ),
      card(
        'Noticing changes early',
        'Together you learn your early warning signs, so a shift in mood can be addressed before it grows.',
        ICON.shield,
      ),
    ],
    benefitsHeading: 'What care can help you work toward',
    benefits: [
      { title: 'Balance', body: 'A steadier mood from week to week.' },
      { title: 'Symptom management', body: 'A clear plan for the symptoms that disrupt sleep, focus, and daily life.' },
      { title: 'Long-term stability', body: 'Consistent follow-up that supports you over months and years, not just until the next visit.' },
      { title: 'Knowing your pattern', body: 'Understanding your triggers and early signs so you feel more in control.' },
    ],
    extraSections: [
      {
        heading: 'When more support is needed',
        body: [
          'Scheduled video visits are built for ongoing care. Some situations need faster help than a scheduled visit can give.',
          'If you notice signs of a severe mood episode, such as going days without sleep, feeling out of control, or having thoughts of harming yourself, get help right away rather than waiting for your next appointment.',
          CRISIS.short,
        ],
      },
    ],
    faqHeading: 'Common questions about bipolar disorder care',
    faqs: [
      {
        q: 'Can bipolar disorder be managed through telehealth?',
        a: 'For many people, yes. Ongoing medication management and follow-up visits can happen by secure video. If symptoms become severe or you feel unsafe, emergency care comes first.',
      },
      FAQ_HOW_DECIDE,
      FAQ_THERAPY_OR_MEDS,
    ],
    relatedLinks: [
      REL.depression,
      REL.psychosis,
      REL.medication,
      ...postLinks(
        'understanding-mood-swings-when-are-they-a-concern',
        'understanding-medication-management-in-psychiatric-care',
        'the-importance-of-follow-up-care-in-mental-health-treatment',
      ),
    ],
    ctaHeading: 'Steady care, from home',
    ctaBody: CTA_BODY,
  },

  // ------------------------------------------------------------------ OCD
  {
    ...BASE,
    slug: 'ocd',
    title: 'OCD',
    summary:
      'Care for unwanted intrusive thoughts and repetitive routines, with medication management and CBT-based techniques.',
    metaTitle: 'OCD Treatment Online in Connecticut',
    headline: 'OCD Treatment Online in Connecticut',
    description:
      'Telehealth OCD care in Connecticut: psychiatric evaluation, medication management, and CBT-based techniques for intrusive thoughts and compulsions.',
    heroImage: heroFor('ocd'),
    heroSubhead:
      'Psychiatric care for obsessive-compulsive disorder, including unwanted intrusive thoughts and the urges and routines that follow them, by secure video.',
    introHeading: 'When thoughts get stuck',
    intro: [
      'OCD often starts with a thought that will not let go: a worry about germs, harm, mistakes, or things not feeling "just right." The anxiety that follows can drive repeated checking, cleaning, counting, or mental reviewing to make the feeling go away.',
      'Those routines bring brief relief, and then the cycle starts again. Many people with OCD know the thoughts do not make sense and feel embarrassed by them. You do not need to explain or justify them here.',
      `Jessica provides psychiatric medication management and supportive therapy for OCD. ${AGES_SENTENCE}`,
    ],
    signsHeading: 'Common signs of OCD',
    signsList: [
      'Unwanted thoughts, images, or urges that keep coming back',
      'Repeated checking, cleaning, counting, or arranging',
      'Mental rituals, such as reviewing or replaying conversations',
      'Needing things to feel "just right" before you can move on',
      'Seeking reassurance again and again',
      'Routines that take up time or get in the way of your day',
    ],
    bullets: [],
    approachHeading: 'How Jessica treats OCD',
    approachSubhead: 'Medication management and CBT-based techniques, planned together.',
    approach: [
      card(
        'A careful evaluation',
        'Your first visit explores what the thoughts and routines look like, how much time they take, and how they affect your life, along with your history and goals.',
        ICON.person,
      ),
      card(
        'Medication management',
        'When appropriate, medication can be part of the plan. Jessica explains the options, benefits, and risks, and adjusts carefully over time. Medication is always optional.',
        ICON.medication,
      ),
      card(
        'CBT-based techniques',
        `Visits include ${techniques('cognitive behavioral techniques', 'mindfulness', 'psychoeducation')} to help you understand the OCD cycle and respond differently to intrusive thoughts.`,
        ICON.chat,
      ),
      card(
        'Therapy referral when needed',
        'If you would benefit from more therapy than fits within your visits, Jessica may refer you to a therapist.',
        ICON.people,
      ),
    ],
    benefitsHeading: 'What care can help you work toward',
    benefits: [
      { title: 'Understand the cycle', body: 'Learning how intrusive thoughts, anxiety, and routines feed each other.' },
      { title: 'Loosen the grip', body: 'Routines that take less of your time and attention.' },
      { title: 'Less shame', body: 'Space to talk openly about thoughts you may never have said out loud.' },
      { title: 'Care that continues', body: 'Regular follow-ups to see what is helping and adjust what is not.' },
    ],
    faqHeading: 'Common questions about OCD care',
    faqs: [
      FAQ_THERAPY_OR_MEDS,
      {
        q: 'Is OCD just being very neat or organized?',
        a: 'No. OCD is driven by unwanted thoughts and the anxiety they cause, not by a preference for order. Plenty of people with OCD are not especially tidy at all.',
      },
      FAQ_HOW_DECIDE,
      FAQ_MED_OPTIONAL,
    ],
    relatedLinks: [REL.anxiety, REL.ptsd, REL.therapy],
    ctaHeading: 'Take the first step',
    ctaBody: CTA_BODY,
  },

  // ------------------------------------------------------------------ PTSD & Trauma
  {
    ...BASE,
    slug: 'ptsd-trauma',
    title: 'PTSD & Trauma',
    summary: 'Care for trauma and post-traumatic stress in a welcoming, supportive, and judgment-free setting.',
    metaTitle: 'PTSD & Trauma Care Online in CT',
    headline: 'PTSD and Trauma Treatment Online in Connecticut',
    description:
      'Telehealth psychiatric care for PTSD and trauma in Connecticut, with medication management and supportive therapy in a welcoming, judgment-free setting.',
    heroImage: heroFor('ptsd-trauma'),
    heroSubhead:
      'Care for trauma and post-traumatic stress in a welcoming, supportive, and judgment-free environment, from the privacy of your home.',
    crisis: true,
    introHeading: 'When the past keeps showing up',
    intro: [
      'Trauma can follow a single frightening event or build up over years. Long after it is over, your mind and body can keep reacting as if it were still happening.',
      'That can look like nightmares, flashbacks, feeling jumpy or on guard, avoiding reminders, or feeling numb and disconnected. These are understandable responses to overwhelming experiences, not a personal failing.',
      'Jessica offers a welcoming, supportive, and judgment-free environment from the very first visit. Her goal is for you to feel comfortable, heard, and understood.',
    ],
    signsHeading: 'Common signs of PTSD',
    signsList: [
      'Nightmares or flashbacks',
      'Feeling on edge, jumpy, or always on guard',
      'Avoiding places, people, or conversations that bring back memories',
      'Trouble sleeping or concentrating',
      'Feeling numb, detached, or cut off from others',
      'Strong reactions to reminders that are hard to explain',
    ],
    bullets: [],
    approachHeading: 'How Jessica helps',
    approachSubhead: 'Collaborative care that moves at your pace.',
    approach: [
      card(
        'Starting where you are',
        'Your first visit focuses on how you are doing now: your symptoms, sleep, stressors, and goals. You decide how much of your history to share, and when.',
        ICON.person,
      ),
      card(
        'Medication management',
        'When appropriate, medication can help with symptoms such as sleep disruption, anxiety, or low mood. Options, benefits, and risks are discussed openly, and medication is always optional.',
        ICON.medication,
      ),
      card(
        'Supportive therapy',
        `Visits include ${techniques('supportive therapy', 'mindfulness', 'psychoeducation', 'practical coping strategies')} for the moments when symptoms flare.`,
        ICON.chat,
      ),
      card(
        'Going at your pace',
        'Care is collaborative. Nothing moves faster than you are ready for, and you can pause or change direction at any time.',
        ICON.heart,
      ),
    ],
    benefitsHeading: 'What care can help you work toward',
    benefits: [
      { title: 'Calmer days', body: 'Tools for the moments when you feel on edge or overwhelmed.' },
      { title: 'Better rest', body: 'Attention to the nightmares and sleep problems that often come with trauma.' },
      { title: 'Making sense of it', body: 'Understanding why your mind and body respond the way they do.' },
      { title: 'Reconnecting', body: 'Working back toward relationships and activities that trauma has made harder.' },
    ],
    faqHeading: 'Common questions about PTSD and trauma care',
    faqs: [
      {
        q: 'Do I have to talk about what happened?',
        a: 'You set the pace. Care can start with how you are feeling now and what you want to change, and you decide how much of your history to share, and when.',
      },
      FAQ_THERAPY_OR_MEDS,
      FAQ_MED_OPTIONAL,
    ],
    relatedLinks: [
      REL.anxiety,
      REL.depression,
      REL.substance,
      ...postLinks(
        'the-impact-of-trauma-on-mental-health',
        'understanding-recovery-what-it-means-in-mental-health',
        'building-resilience-strengthening-your-mental-health-foundat',
      ),
    ],
    ctaHeading: 'A judgment-free place to start',
    ctaBody: CTA_BODY,
  },

  // ------------------------------------------------------------------ Schizophrenia & Psychosis
  {
    ...BASE,
    slug: 'schizophrenia-psychosis',
    title: 'Schizophrenia & Psychosis',
    summary:
      'Outpatient medication management and steady follow-up for people living with schizophrenia and other psychotic disorders.',
    metaTitle: 'Schizophrenia & Psychosis Care in CT',
    headline: 'Schizophrenia and Psychotic Disorders: Telehealth Care in Connecticut',
    description:
      'Outpatient telehealth psychiatric care in Connecticut for schizophrenia and psychotic disorders, focused on medication management and steady ongoing support.',
    heroImage: heroFor('schizophrenia-psychosis'),
    heroSubhead:
      'Outpatient psychiatric care and medication management for people living with schizophrenia and other psychotic disorders, with steady follow-up by secure video.',
    crisis: true,
    introHeading: 'Steady, respectful outpatient care',
    intro: [
      'Schizophrenia and other psychotic disorders can change how a person experiences the world. Some people hear or see things others do not, hold beliefs that are hard to shake, or find their thoughts becoming jumbled. Others mostly notice quieter changes, like low motivation or pulling away from people.',
      'These are medical conditions, and people living with them deserve the same respect and consistent care as anyone else. Ongoing treatment can help people stay well and keep building the life they want.',
      'Jessica provides outpatient psychiatric care and medication management by secure video, with regular follow-up and careful monitoring.',
    ],
    signsHeading: 'Symptoms people may notice',
    signsList: [
      'Hearing or seeing things other people do not',
      'Strong beliefs that others find hard to follow',
      'Confused or disorganized thinking or speech',
      'Feeling suspicious or unsafe without a clear reason',
      'Low motivation, flat emotions, or withdrawing from others',
      'Trouble keeping up with work, school, or daily routines',
    ],
    bullets: [],
    approachHeading: 'How outpatient care works',
    approachSubhead: 'Consistent follow-up with the same provider, from home.',
    approach: [
      card(
        'A thorough evaluation',
        'Your first visit covers your current symptoms, past treatment, what has and has not worked, and your goals. If you already take medication, have the names and doses handy.',
        ICON.person,
      ),
      card(
        'Ongoing medication management',
        'Regular follow-ups to monitor how treatment is working, watch for side effects, and adjust carefully when needed.',
        ICON.medication,
      ),
      card(
        'Support for daily life',
        `Visits include ${techniques('supportive therapy', 'psychoeducation', 'practical coping strategies')} for routines, stress, and staying on track with treatment.`,
        ICON.chat,
      ),
      card(
        'Family and support involvement',
        'Family and friends can be a real help. With your consent, a trusted support person can be part of the conversation about your care.',
        ICON.people,
      ),
    ],
    benefitsHeading: 'What care can help you work toward',
    benefits: [
      { title: 'Consistent care', body: 'Regular follow-ups with the same provider, who gets to know your history.' },
      { title: 'Careful medication management', body: 'Adjustments made thoughtfully, with safety and side effects in mind.' },
      { title: 'Support for daily life', body: 'Practical strategies for routines, stress, and staying connected.' },
      { title: 'Care from home', body: 'Secure video visits that fit into your week without travel.' },
    ],
    extraSections: [
      {
        heading: 'Is telehealth a good fit?',
        body: [
          'Video visits are designed for ongoing outpatient care: regular check-ins, medication management, and support between appointments. They are not a substitute for emergency care.',
          'If symptoms are getting worse quickly, if you or someone else may be unsafe, or if you cannot take care of basic needs like eating or sleeping, get emergency help right away rather than waiting for a scheduled visit.',
          CRISIS.short,
        ],
      },
    ],
    faqHeading: 'Common questions about schizophrenia and psychosis care',
    faqs: [
      {
        q: 'Can schizophrenia be treated through telehealth?',
        a: 'Ongoing outpatient care, including medication management and follow-up visits, can happen by secure video. Severe or rapidly worsening symptoms need emergency care first.',
      },
      FAQ_HOW_DECIDE,
      FAQ_THERAPY_OR_MEDS,
    ],
    relatedLinks: [REL.bipolar, REL.medication, REL.telepsychiatry],
    ctaHeading: 'Consistent care you can count on',
    ctaBody: CTA_BODY,
  },

  // ------------------------------------------------------------------ Substance Use
  {
    ...BASE,
    slug: 'substance-use',
    title: 'Substance Use',
    summary:
      'Non-judgmental support for individuals struggling with alcohol or substance use, including treatment planning and ongoing recovery support.',
    metaTitle: 'Substance Use Disorder Care Online, CT',
    headline: 'Substance Use Disorder Care Online in Connecticut',
    description:
      'Non-judgmental telehealth care in Connecticut for alcohol and substance use, with treatment planning, coping strategies, and ongoing recovery support.',
    heroImage: heroFor('substance-use'),
    heroSubhead:
      'Non-judgmental support for individuals struggling with alcohol or substance use, including treatment planning and ongoing recovery support.',
    crisis: true,
    introHeading: 'Support without judgment',
    intro: [
      'If drinking or using has started to cost you more than it gives, you are not alone, and you do not need to have it all figured out before you reach out.',
      'Substance use is often tangled up with anxiety, depression, trauma, or stress. Caring for your mental health and your use together, in one place, can make both easier to work on.',
      'Jessica offers compassionate, non-judgmental care for alcohol and substance use. Support includes treatment planning, coping strategies, and ongoing guidance to promote recovery and emotional stability.',
    ],
    signsHeading: 'Signs it may be time to talk',
    signsList: [
      'Drinking or using more, or for longer, than you meant to',
      'Trying to cut back without success',
      'Cravings or strong urges',
      'Using to cope with stress, anxiety, low mood, or sleep',
      'Problems at work, school, or home linked to use',
      'Friends or family voicing concern',
    ],
    bullets: [],
    approachHeading: 'How care works',
    approachSubhead: 'Collaborative, practical, and built around your goals.',
    approach: [
      card(
        'An honest, private evaluation',
        'Your first visit looks at your use, your mental health, your history, and what you want to change. You do not have to arrive ready to quit.',
        ICON.person,
      ),
      card(
        'Motivational interviewing',
        'Jessica uses motivational interviewing, a collaborative way of talking through change that starts from your own goals and reasons.',
        ICON.chat,
      ),
      card(
        'Treatment planning and coping strategies',
        `A plan built around your goals, with ${techniques('supportive therapy', 'cognitive behavioral techniques', 'practical coping strategies')} for cravings, stress, and high-risk moments.`,
        ICON.book,
      ),
      card(
        'Care for co-occurring conditions',
        'When anxiety, depression, trauma, or sleep problems are part of the picture, medication management and therapy address them alongside your recovery.',
        ICON.medication,
      ),
    ],
    benefitsHeading: 'What care can help you work toward',
    benefits: [
      { title: 'A plan that is yours', body: 'Goals set together, including figuring out where to start.' },
      { title: 'Coping strategies', body: 'Practical tools for cravings, stress, and the hardest moments.' },
      { title: 'Ongoing recovery support', body: 'Regular follow-ups that keep you supported over time.' },
      { title: 'Mental health and substance use together', body: 'Care for the anxiety, depression, or trauma that often sits underneath.' },
    ],
    extraSections: [
      {
        heading: 'When a higher level of care is needed',
        body: [
          'Detox and medically supervised withdrawal are outside the scope of telehealth care. Stopping some substances suddenly, including alcohol, can be dangerous without medical support, so talk with a medical professional before you stop.',
          'If you need more support than scheduled telehealth visits can offer, a higher level of care, such as a detox or intensive program, may be the right fit.',
          `If you or someone else is in danger, or you have signs of severe withdrawal, get emergency help right away. ${CRISIS.short}`,
        ],
      },
    ],
    faqHeading: 'Common questions about substance use care',
    faqs: [
      {
        q: 'Do I have to stop completely before my first visit?',
        a: 'No. You do not need to have stopped, or to be sure you want to, before your first visit. Treatment planning starts with where you are and what you want to change.',
      },
      {
        q: 'Do you offer detox?',
        a: 'No. Detox and medically supervised withdrawal are outside the scope of telehealth care. If you need that level of care, please reach out to a detox or treatment program, and call 911 in an emergency.',
      },
      FAQ_THERAPY_OR_MEDS,
    ],
    relatedLinks: [
      REL.depression,
      REL.ptsd,
      REL.anxiety,
      ...postLinks(
        'understanding-dual-diagnosis-mental-health-and-substance-use',
        'breaking-the-stigma-why-seeking-help-for-substance-use-is-st',
        'understanding-recovery-what-it-means-in-mental-health',
      ),
    ],
    ctaHeading: 'Start wherever you are',
    ctaBody: CTA_BODY,
  },

  // ------------------------------------------------------------------ Burnout & Life Transitions
  {
    ...BASE,
    slug: 'burnout-life-transitions',
    title: 'Burnout & Life Transitions',
    summary:
      'Support for stress, burnout, relationship challenges, self-esteem, and big life changes that leave you feeling overwhelmed.',
    metaTitle: 'Burnout & Life Transitions Care, CT',
    headline: 'Burnout, Stress, and Life Transitions: Telehealth Support in Connecticut',
    description:
      'Telehealth psychiatric support in Connecticut for burnout, chronic stress, relationship challenges, self-esteem, and life transitions, by secure video.',
    heroImage: heroFor('burnout-life-transitions'),
    heroSubhead:
      'Support for when stress, burnout, or a big life change leaves you feeling overwhelmed by day-to-day life.',
    introHeading: 'When you are running on empty',
    intro: [
      'Burnout creeps in. At first you push through. Then the exhaustion stops lifting on weekends, small things feel huge, and you notice you are short with the people you care about.',
      'Big life changes can do the same thing, even good ones: a new job, a move, a breakup, retirement, or a loss.',
      "Stress and burnout, relationship challenges, self-esteem, and life transitions are among Jessica's clinical interests. Care focuses on building resilience and making realistic, sustainable changes that improve how you function day to day.",
    ],
    signsHeading: 'Signs stress is taking a toll',
    signsList: [
      'Exhaustion that rest does not fix',
      'Feeling detached, cynical, or like you are on autopilot',
      'Trouble focusing or getting things done',
      'Less patience with the people you care about',
      'Trouble sleeping, or tension you carry all day',
      'Feeling stuck, unsure of yourself, or overwhelmed by change',
    ],
    bulletsHeading: 'What Jessica works on',
    bullets: [
      'Stress and burnout',
      'Relationship challenges',
      'Self-esteem',
      'Life transitions',
      'Feeling overwhelmed by day-to-day life',
      'Anxiety or low mood that comes along with any of these',
    ],
    approachHeading: 'How care works',
    approachSubhead: `In Jessica's words, her style is ${PROVIDER.approach[1]}.`,
    approach: [
      card(
        'Starting with what is going on',
        'Your first visit looks at your stressors, sleep, work, relationships, and goals, and checks whether anxiety or depression is part of the picture.',
        ICON.person,
      ),
      card(
        'Supportive therapy with practical tools',
        `Visits include ${techniques('supportive therapy', 'cognitive behavioral techniques', 'mindfulness', 'practical coping strategies')}, delivered with ${PROVIDER.approach[2]}.`,
        ICON.chat,
      ),
      card(
        'Medication, only if it helps',
        'When anxiety or depression is part of the picture, medication management may be an option. It is always your choice.',
        ICON.medication,
      ),
      card(
        'Building resilience',
        'Realistic, sustainable changes that improve daily functioning, strengthen relationships, and help you feel more confident navigating change.',
        ICON.shield,
      ),
    ],
    benefitsHeading: 'What care can help you work toward',
    benefits: [
      { title: 'Room to breathe', body: 'Space to step back, sort out what is draining you, and decide what to change.' },
      { title: 'Practical tools', body: 'Coping strategies you can use at work, at home, and in between.' },
      { title: 'Stronger relationships', body: 'Support with the strain that stress and change can put on the people closest to you.' },
      { title: 'More confidence', body: 'Work on self-esteem and on trusting yourself through transitions.' },
    ],
    faqHeading: 'Common questions about burnout and life transitions',
    faqs: [
      {
        q: 'Is burnout a good reason to see a psychiatric nurse practitioner?',
        a: 'Yes. Burnout and ongoing stress can affect sleep, mood, focus, and relationships, and they often overlap with anxiety or depression. You do not need a diagnosis to reach out.',
      },
      FAQ_THERAPY_OR_MEDS,
      FAQ_MED_OPTIONAL,
    ],
    relatedLinks: [
      REL.anxiety,
      REL.depression,
      REL.adults,
      ...postLinks(
        'understanding-adjustment-disorders-when-life-changes-overwhe',
        'addressing-burnout-more-than-just-stress',
        'managing-mental-health-during-major-life-transitions',
      ),
    ],
    ctaHeading: 'Ready for some support?',
    ctaBody: CTA_BODY,
  },

  // ------------------------------------------------------------------ Autism Spectrum Support
  {
    ...BASE,
    slug: 'autism-spectrum',
    title: 'Autism Spectrum Support',
    summary: `Personalized support for teens ${AGES.minimum}+ and adults experiencing social, communication, or behavioral challenges.`,
    metaTitle: 'Autism Spectrum Support for Teens & Adults',
    headline: 'Autism Spectrum Support for Teens and Adults in Connecticut',
    description:
      'Telehealth psychiatric support in Connecticut for teens and adults on the autism spectrum, including care for co-occurring anxiety, ADHD, and mood concerns.',
    heroImage: heroFor('autism-spectrum'),
    heroSubhead:
      "Personalized support for individuals experiencing social, communication, or behavioral challenges, tailored to each person's strengths, needs, and developmental stage.",
    introHeading: 'Support that starts with your strengths',
    intro: [
      'Teens and adults on the autism spectrum often spend a lot of energy navigating a world that was not built with them in mind. Social situations, changes in routine, sensory overload, and communication differences can all add stress.',
      'That stress can show up as anxiety, low mood, trouble with attention, or difficulty sleeping. Those concerns deserve care in their own right.',
      `Jessica offers personalized support for adolescents ${AGES.minimum} and older and adults experiencing social, communication, or behavioral challenges. Care is tailored to each person's strengths, needs, and developmental stage to promote confidence and daily success.`,
    ],
    signsHeading: 'What support can focus on',
    signsList: [
      'Social situations and relationships',
      'Communication at school, work, or home',
      'Managing change, transitions, and routines',
      'Stress, overwhelm, and emotional regulation',
      'Co-occurring anxiety or low mood',
      'Attention, focus, and organization',
    ],
    bullets: [],
    approachHeading: 'How Jessica can help',
    approachSubhead: 'Practical support shaped around the person, not a checklist.',
    approach: [
      card(
        'Getting to know you',
        'Your first visit covers your strengths, challenges, history, and goals, and how you prefer to communicate.',
        ICON.person,
      ),
      card(
        'Care for co-occurring concerns',
        'Psychiatric care, including medication management when appropriate, for anxiety, depression, ADHD, and sleep concerns that can come alongside autism.',
        ICON.medication,
      ),
      card(
        'Practical, supportive therapy',
        `Visits include ${techniques('supportive therapy', 'psychoeducation', 'practical coping strategies')}, focused on what makes daily life easier.`,
        ICON.chat,
      ),
      card(
        'Ongoing support',
        'Regular follow-ups to check what is working and adjust as school, work, or life changes.',
        ICON.followUp,
      ),
    ],
    benefitsHeading: 'What care can help you work toward',
    benefits: [
      { title: 'Confidence', body: 'Support that builds on your strengths and helps you feel more capable day to day.' },
      { title: 'Daily success', body: 'Practical strategies for school, work, home, and relationships.' },
      { title: 'Less overwhelm', body: 'Care for the anxiety and stress that can come with change and social demands.' },
      { title: 'Care that fits you', body: 'A plan tailored to your needs and developmental stage, not a one-size-fits-all approach.' },
    ],
    extraSections: [
      {
        heading: 'What this care does and does not include',
        body: [
          'Jessica provides support and psychiatric care for teens and adults on the autism spectrum. She does not provide autism diagnostic evaluations or psychological testing.',
          'If you are looking for a formal autism evaluation, start with a provider who offers diagnostic assessments. Jessica can still help with anxiety, mood, attention, or sleep concerns in the meantime.',
        ],
      },
    ],
    faqHeading: 'Common questions about autism spectrum support',
    faqs: [
      {
        q: 'Do you diagnose autism?',
        a: 'No. Jessica does not provide autism diagnostic evaluations or psychological testing. She offers support and psychiatric care for teens and adults, including care for co-occurring anxiety, depression, ADHD, and sleep concerns.',
      },
      { q: 'What ages do you see?', a: `${AGES.short}. All visits are by secure video.` },
      FAQ_MED_OPTIONAL,
    ],
    relatedLinks: [REL.adhd, REL.anxiety, REL.teens],
    ctaHeading: 'Support that fits you',
    ctaBody: CTA_BODY,
  },
]

/** Look up a condition by slug. */
export function getCondition(slug: string): ConditionEntry | undefined {
  return CONDITIONS.find((c) => c.slug === slug)
}
