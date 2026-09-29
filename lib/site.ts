// Single source of truth for everything the site says about the practice.
//
// Every value here traces to a source (the practice's own site, its Alma and Headway profiles,
// CT eLicense, NPPES). Pages import from this file instead of retyping a phone number, a price or
// an insurance plan, so a correction is one edit and cannot drift between pages.
//
// Values marked CONFIRM are what the practice publishes today but conflict with another source,
// so Jessica signs off on them before the domain moves off Wix. See CONFIRM_BEFORE_LAUNCH below.
//
// This is a TELEHEALTH PSYCHIATRY practice. Never add: a street address or city as an office,
// "Dr."/"doctor"/"physician"/"psychiatrist" for Jessica, integrative/functional/natural framing,
// supplements, hormones, IV, weight loss, detox, MAT, testing, in-person visits, crisis services,
// star ratings, review counts, or any statistic.

export const SITE_URL = 'https://www.jrosewellness.com'
export const SITE_NAME = 'JRose Wellness'
export const LEGAL_NAME = 'JROSEWELLNESS PLLC'

export const PROVIDER = {
  name: 'Jessica Logel',
  credentials: 'MSN, PMHNP-BC, FNP',
  byline: 'Jessica Logel, MSN, PMHNP-BC, FNP',
  title: 'Board-Certified Psychiatric Nurse Practitioner',
  // The practice's own wording (homepage "About Me").
  ownWords:
    "I'm a Board Certified Psychiatric Nurse Practitioner, Family Nurse Practitioner and the founder of JRose Wellness PLLC, where whole-person mental health care is the priority.",
  education: 'Master of Science in Nursing (MSN), Pace University',
  school: 'Pace University',
  certificate: 'Certificate in Nutritional Psychiatry, Integrative Psychiatry Institute (2025)',
  // Verifiable from CT eLicense grant dates. Use this instead of a years-of-experience number.
  licensure:
    'Licensed in Connecticut as a registered nurse since 2017 and as an advanced practice registered nurse (APRN) since 2021.',
  npi: '1417615667',
  // Her own words (Headway profile).
  approach: [
    'compassionate, collaborative, and down-to-earth',
    'warm and approachable while also being direct and goal-oriented',
    'honesty, humor, and real-life problem solving',
  ],
  techniques: [
    'supportive therapy',
    'cognitive behavioral techniques',
    'mindfulness',
    'psychoeducation',
    'practical coping strategies',
    'motivational interviewing',
  ],
} as const

export const CONTACT = {
  phone: '(914) 916-6376',
  phoneHref: 'tel:+19149166376',
  // CONFIRM: the SMS policy pages list info@jrosewellness.com instead.
  email: 'jrosewellnesspllc@gmail.com',
  serviceArea: 'Telehealth for patients in Connecticut',
  state: 'Connecticut',
} as const

export const BOOKING = {
  alma: {
    label: 'Book with insurance through Alma',
    href: 'https://secure.helloalma.com/providers/jessica-logel/',
    note: 'Intake appointments booked through Alma are 45 minutes, by video.',
  },
  // CONFIRM: the practice uses Headway but its current site does not link it.
  headway: {
    label: 'Book with insurance through Headway',
    href: 'https://care.headway.co/providers/jessica-logel',
    note: 'See open times and check your coverage on Headway.',
  },
  request: { label: 'Request a self-pay appointment', href: '/book-appointment#request' },
  page: '/book-appointment',
} as const

export const SOCIAL = {
  // CONFIRM: both are linked from the current site's footer.
  instagram: 'https://www.instagram.com/jessielogel',
  facebook: 'https://www.facebook.com/share/1AnZua8yTs/',
} as const

export const PRICING = {
  initialEvaluation: {
    name: 'Initial Evaluation',
    price: '$300',
    description:
      "This is your first session with us, and it's all about you. We take time to learn about your history, current concerns, symptoms, lifestyle, and goals. This comprehensive assessment helps us clearly understand what you're experiencing and create a personalized treatment plan that truly fits your needs, not a one-size-fits-all approach.",
  },
  followUp: {
    name: 'Follow-Up & Medication Management',
    // CONFIRM: $150 is the practice's current published price; an older booking setup showed $200.
    price: '$150',
    description:
      "Care doesn't stop after the first visit. During follow-up appointments, we check in on your progress, talk about how you're feeling, and monitor how your treatment plan is working. If medication is part of your care, we carefully manage and adjust it when needed to ensure it's safe, effective, and supporting your overall well-being. These sessions help keep your care on track and give you ongoing professional support.",
  },
  // CONFIRM: sourced from the Alma profile only. Until Jessica confirms it also covers self-pay
  // booked directly with the practice, show it only in neutral FAQ answers, never beside the
  // direct self-pay rates.
  slidingScale: 'A sliding scale is available based on financial need.',
  // CONFIRM: regulatory notice; Jessica approves the wording (FACTS.md section 6).
  goodFaithEstimate:
    'Under the No Surprises Act, if you are not using insurance you have the right to receive a Good Faith Estimate of the expected cost of your care. Ask us for one before your visit.',
} as const

// Verbatim from each profile, as listed on 2026-09-29. Always say "through Alma" / "through Headway":
// the practice is not shown as directly contracted with any payer.
export const INSURANCE_AS_OF = 'September 2026'
export const INSURANCE_ALMA = [
  'Aetna',
  'Allied Benefit Systems - Aetna',
  'Allied Benefit Systems - Cigna',
  'Anthem Blue Cross and Blue Shield Connecticut',
  'Blue Cross Blue Shield of Massachusetts',
  'Carelon Behavioral Health, Inc.',
  'Centivo',
  'Christian Brothers Services - Aetna',
  'Cigna',
  'EVHC - Aetna',
  'EVHC - Cigna',
  'Health Scope - Aetna',
  'Luminare Health - Aetna',
  'Luminare Health - Cigna',
  'Meritain',
  'Nippon',
  'Sutter Health Plan',
  'Trustmark Health Benefits - Cigna',
  'Trustmark Small Business Benefits - Aetna',
] as const
export const INSURANCE_HEADWAY = [
  'Aetna',
  'Anthem Blue Cross and Blue Shield',
  'Carelon Behavioral Health',
  'Cigna',
  'Horizon Blue Cross and Blue Shield of New Jersey',
  'Independence Blue Cross Pennsylvania - Virtual National Network',
  'Providence Health Plan',
] as const
/** On both profiles (spelled as both profiles spell it). Safe for short copy and meta descriptions. */
export const INSURANCE_HEADLINE = ['Aetna', 'Cigna', 'Anthem Blue Cross and Blue Shield', 'Carelon Behavioral Health'] as const

export const AGES = {
  // Jessica's own Alma bio: "accepting new patients ages 15+". Never "children", "kids", "pediatric".
  short: 'Adolescents 15 and older, adults, and older adults',
  minimum: 15,
  // CONFIRM: how guardian consent and booking work for 15-17 year olds (FACTS.md section 5).
  smsNote: 'Our text-message program is for people 18 and older, so a parent or guardian opts in for patients under 18.',
} as const

export const CRISIS = {
  short: 'Not an emergency service. In crisis? Call or text 988, or call 911.',
  full: 'JRose Wellness is not an emergency service. If you are in crisis or thinking about harming yourself, call or text 988 (Suicide & Crisis Lifeline), call 911, or go to the nearest emergency room.',
} as const

export const NO_MEDICAL_ADVICE =
  "Our phone and text lines handle scheduling and general questions and can't give medical advice. Please don't send medical details by text, email, or web form."

// The practice's FAQ answers, verbatim (final periods added; nothing else changed).
export const PRACTICE_FAQS = [
  {
    q: 'Do you offer virtual appointments only?',
    a: 'Yes, all sessions are conducted securely through telehealth, allowing you to receive care from the comfort and privacy of your home.',
  },
  {
    q: 'What does a psychiatric nurse practitioner (Psych NP) do?',
    a: 'A Psych NP is an advanced practice nurse who assesses, diagnoses, and treats mental health conditions. Treatment may include medication management, therapy, education, and lifestyle support.',
  },
  {
    q: 'Do you provide therapy, medication management, or both?',
    a: 'Many Psych NPs offer medication management and brief therapeutic interventions. I will provide supportive therapy during our sessions and may refer you to a therapist if needed.',
  },
  {
    q: 'Will you prescribe controlled substances?',
    a: 'Possibly. Prescribing is based on a careful assessment, diagnosis, safety considerations, and state regulations.',
  },
  {
    q: 'How do you decide which medication is right for me?',
    a: 'Decisions are based on your symptoms, history, past medication responses, side-effect sensitivity, lifestyle, and preferences.',
  },
  {
    q: "What if I don't want to take medication?",
    a: "That's okay. Medication is optional. We can explore therapy, lifestyle changes, or other non-medication approaches.",
  },
] as const

// CONFIRM: shown on the practice's current homepage with no platform named. Jessica confirms
// provenance and permission before launch. Attribute by month only: no names, stars or counts,
// and no Review/AggregateRating schema.
export const REVIEWS = [
  {
    quote:
      'She was professional, knowledgeable, caring and responsive to my questions and needs. She has been extremely helpful and contributed to my health improvement.',
    when: 'July 2025',
  },
  { quote: 'Very comfortable talking to her.', when: 'July 2025' },
  {
    quote:
      'She constantly talks to me and listens to me and my concerns. She is extremely personable. Not only does she help with med management. She also helps with offering advice.',
    when: 'June 2025',
  },
] as const

export type NavChild = { label: string; href: string; blurb?: string }
export type NavItem = { label: string; href: string; children?: NavChild[]; columns?: 1 | 2 }

export const NAV: NavItem[] = [
  {
    label: 'Services',
    href: '/services',
    children: [
      { label: 'Psychiatric Evaluation', href: '/services/psychiatric-evaluation', blurb: 'Your first visit: history, symptoms, goals, and a plan' },
      { label: 'Medication Management', href: '/services/medication-management', blurb: 'Follow-up visits to monitor progress and adjust treatment' },
      { label: 'Supportive Therapy', href: '/services/supportive-therapy', blurb: 'Coping skills and support built into your visits' },
      { label: 'Telepsychiatry', href: '/services/telepsychiatry', blurb: 'How secure video visits work' },
      { label: 'ADHD Evaluation & Treatment', href: '/services/adhd-evaluation', blurb: 'Assessment and ongoing care for teens and adults' },
      { label: 'All Services', href: '/services' },
    ],
  },
  {
    label: 'Conditions',
    href: '/conditions',
    columns: 2,
    children: [
      { label: 'Anxiety & Panic', href: '/conditions/anxiety' },
      { label: 'Depression', href: '/conditions/depression' },
      { label: 'ADHD', href: '/services/adhd-evaluation' },
      { label: 'Bipolar Disorder', href: '/conditions/bipolar-disorder' },
      { label: 'OCD', href: '/conditions/ocd' },
      { label: 'PTSD & Trauma', href: '/conditions/ptsd-trauma' },
      { label: 'Schizophrenia & Psychosis', href: '/conditions/schizophrenia-psychosis' },
      { label: 'Substance Use', href: '/conditions/substance-use' },
      { label: 'Burnout & Life Transitions', href: '/conditions/burnout-life-transitions' },
      { label: 'Autism Spectrum Support', href: '/conditions/autism-spectrum' },
      { label: 'All Conditions', href: '/conditions' },
    ],
  },
  {
    label: 'Who We Help',
    href: '/who-we-help',
    children: [
      { label: 'Teens (15+)', href: '/who-we-help/teens', blurb: 'Psychiatric care for adolescents 15 and older' },
      { label: 'Adults', href: '/who-we-help/adults', blurb: 'Young adults and adults' },
      { label: 'Older Adults', href: '/who-we-help/older-adults', blurb: 'Telehealth care for adults 65 and older' },
    ],
  },
  {
    label: 'About',
    href: '/about',
    children: [
      { label: 'About Jessica', href: '/about', blurb: PROVIDER.byline },
      { label: 'Your First Visit', href: '/new-patients', blurb: 'What to expect and how to get started' },
      { label: 'Insurance & Pricing', href: '/insurance', blurb: 'Alma, Headway, and self-pay rates' },
      { label: 'FAQ', href: '/faq', blurb: 'Medication, telehealth, and more' },
      { label: 'Blog', href: '/blog', blurb: 'Articles on psychiatric care' },
    ],
  },
  { label: 'Contact', href: '/contact' },
]

export const NAV_CTA = { label: 'Book an Appointment', href: BOOKING.page } as const

/**
 * Brand a <title>. The root layout sets no title template (a template on top of builders that
 * already append the brand ships "X | Brand | Brand"), so every page title goes through here.
 */
export function withBrand(title: string): string {
  if (/jrose wellness/i.test(title)) return title
  // 43 + " | JRose Wellness" (17) = 60 characters, the most a result title shows untruncated.
  return title.length <= 43 ? `${title} | ${SITE_NAME}` : title
}

/** Items the practice must confirm before the domain leaves Wix. Keep in sync with CONFIRM tags above. */
export const CONFIRM_BEFORE_LAUNCH = [
  'Self-pay prices: $300 initial evaluation, $150 follow-up (older booking data showed $200 / 45 min).',
  'Minimum age 15+, and how guardian consent and booking work for 15-17 year olds.',
  'Provenance of the three homepage reviews (dated June-July 2025) and permission to show them.',
  'Canonical email: jrosewellnesspllc@gmail.com or info@jrosewellness.com.',
  'Link Headway as a booking path (Zocdoc too?).',
  'Instagram @jessielogel and Facebook links on the practice site.',
  'Refund, cancellation, and no-show policy (none exists; no page published).',
  'Whether a discovery call exists (never label anything "free").',
  'Self-pay visit lengths (only the Alma 45-minute intake is stated).',
  'Sliding scale (Alma: "based on financial need"): does it also apply to self-pay visits booked directly with the practice?',
  'Approve the new FAQ answers from FACTS.md section 10 (ages, cost, insurance, sliding scale, first-visit length, emergency, "Is a psychiatric NP a psychiatrist?"), shown on /faq and reused on /compare/psychiatric-nurse-practitioner-vs-psychiatrist (lib/faqs.ts).',
  'Approve the Good Faith Estimate notice wording.',
  'Scope statements: no detox or withdrawal management (/conditions/substance-use), no autism diagnostic evaluations or psychological testing (/conditions/autism-spectrum).',
  'Supportive therapy is included in evaluation and follow-up visits (no separate therapy visit type or fee).',
  'Substance use: which referral resources to name (the page points to detox or treatment programs in general and makes no referral promise).',
  'Clinical review of the 37 autobuilt blog posts. They stay noindex and out of the sitemap until approved (INDEXED_POST_SLUGS in lib/posts.ts); the IA plan launches with only the 3 practice posts.',
  'Set NEXT_PUBLIC_GA_ID in the production build environment (the privacy page says the site may use Google Analytics).',
] as const
