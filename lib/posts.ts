// Blog index data. The blog index (app/blog/page.tsx) and the article layout read from here.
//
// The first three entries are the practice's own posts, migrated from its Wix blog (original slugs
// kept, originally published August 13, 2025) and edited against the facts sheet. Every other entry
// is an autobuilt article folder under app/blog. Their titles and descriptions here are cleaned
// versions of each folder's metadata, held to the same copy rules as the rest of the site (FACTS.md
// section 11: no alternative-medicine framing, evidence or outcome claims, statistics, or cities).
// If a folder is deleted, delete its entry; if a post is retitled, update its entry so the index
// matches the page.
//
// Byline for every post is the practice (SITE_NAME), never Jessica, unless she confirms authorship.

import { PAGE_IMAGES } from './images'

export type PostMeta = {
  slug: string
  title: string
  description: string
  /** ISO date (yyyy-mm-dd) the post was first published. Omit when unknown. */
  date?: string
  /** ISO date (yyyy-mm-dd) of the last substantive edit. */
  updated?: string
  category: string
  /** Card image src (from PAGE_IMAGES in lib/images.ts). Omit to fall back to imageFor(). */
  image?: string
}

/** Display order of the category sections on the blog index. */
export const POST_CATEGORIES = [
  'Anxiety',
  'Depression',
  'Medication',
  'Substance Use',
  'Telehealth',
  'Getting Care',
  'Wellbeing',
] as const

/** The practice's three original posts. They lead POSTS and are featured on the blog index. */
export const REAL_POST_SLUGS = [
  'psychiatric-and-family-nurse-practice-in-connecticut',
  'cash-only-medication-management-for-psychiatric-conditions',
  'holistic-medication-management-services-in-connecticut',
] as const

const ORIGINAL_DATE = '2025-08-13'
const REVISED = '2026-09-29'

/** The route's hero image from lib/images.ts, so a post card and its page always match. */
const heroSrc = (slug: string) => PAGE_IMAGES[`/blog/${slug}`]?.src

export const POSTS: PostMeta[] = [
  // The practice's own posts (migrated from /post/<slug>).
  {
    slug: 'psychiatric-and-family-nurse-practice-in-connecticut',
    title: 'Psychiatric and Family Nurse Practice in Connecticut',
    description:
      'What psychiatric and family nurse practitioners do in Connecticut, how PMHNPs assess and treat mental health conditions, and when to see one by telehealth.',
    date: ORIGINAL_DATE,
    updated: REVISED,
    category: 'Getting Care',
    image: heroSrc('psychiatric-and-family-nurse-practice-in-connecticut'),
  },
  {
    slug: 'cash-only-medication-management-for-psychiatric-conditions',
    title: 'Self-Pay Medication Management for Psychiatric Conditions',
    description:
      'How self-pay psychiatric medication management works in Connecticut, what it costs at JRose Wellness, and how it compares to insurance through Alma or Headway.',
    date: ORIGINAL_DATE,
    updated: REVISED,
    category: 'Medication',
    image: heroSrc('cash-only-medication-management-for-psychiatric-conditions'),
  },
  {
    slug: 'holistic-medication-management-services-in-connecticut',
    title: 'Whole-Person Medication Management in Connecticut',
    description:
      'What whole-person psychiatric medication management means at JRose Wellness in Connecticut, and how sleep, stress, and daily habits factor into your care plan.',
    date: ORIGINAL_DATE,
    updated: REVISED,
    category: 'Medication',
    image: heroSrc('holistic-medication-management-services-in-connecticut'),
  },

  // Autobuilt articles (one entry per folder under app/blog).
  {
    slug: 'addressing-burnout-more-than-just-stress',
    title: 'Addressing Burnout: More Than Just Stress',
    description:
      'How burnout differs from everyday stress, the warning signs to watch for, and practical steps to recover your energy and balance at work and at home.',
    category: 'Wellbeing',
  },
  {
    slug: 'anxiety-vs-stress-how-to-tell-the-difference-and-when-to-see',
    title: 'Anxiety vs. Stress: How to Tell the Difference and When to Seek Help',
    description:
      'The key differences between anxiety and stress, how each shows up in your body and mind, and signs it may be time to talk with a professional.',
    category: 'Anxiety',
  },
  {
    slug: 'breaking-the-stigma-why-seeking-help-for-substance-use-is-st',
    title: 'Breaking the Stigma: Why Seeking Help for Substance Use Is Strength',
    description:
      'Why reaching out for support with alcohol or substance use takes courage, how stigma keeps people from asking, and how to take a first step.',
    category: 'Substance Use',
  },
  {
    slug: 'building-resilience-strengthening-your-mental-health-foundat',
    title: 'Building Resilience: Strengthening Your Mental Health Foundation',
    description:
      'Practical ways to build resilience, manage stress, and recover from setbacks, and how support from a mental health professional can help along the way.',
    category: 'Wellbeing',
  },
  {
    slug: 'coping-strategies-for-managing-daily-anxiety',
    title: 'Coping Strategies for Managing Daily Anxiety',
    description:
      'Practical coping strategies for everyday anxiety, including breathing exercises, mindfulness, and daily habits that can help you feel steadier.',
    category: 'Anxiety',
  },
  {
    slug: 'depression-and-motivation-why-it-s-so-hard-and-what-helps',
    title: "Depression and Motivation: Why It's So Hard and What Helps",
    description:
      'Why depression can make simple tasks feel impossible, and small, realistic steps that can help you move forward when your motivation is low.',
    category: 'Depression',
  },
  {
    slug: 'how-personalized-treatment-plans-improve-mental-health-outco',
    title: 'How Personalized Treatment Plans Shape Mental Health Care',
    description:
      'Why a treatment plan built around your symptoms, history, and goals matters, and what personalized psychiatric care looks like from visit to visit.',
    category: 'Getting Care',
  },
  {
    slug: 'how-to-prepare-for-your-first-telehealth-appointment',
    title: 'How to Prepare for Your First Telehealth Appointment',
    description:
      'What to expect at your first video visit, how to set up your space and technology, and what to have ready so the appointment goes smoothly for you.',
    category: 'Telehealth',
  },
  {
    slug: 'lifestyle-factors-that-impact-mental-health',
    title: 'Lifestyle Factors That Impact Mental Health',
    description:
      'How sleep, movement, stress, social connection, and daily routines can affect your mood and energy, with practical tips you can start using this week.',
    category: 'Wellbeing',
  },
  {
    slug: 'managing-depression-beyond-medication',
    title: 'Managing Depression: Beyond Medication',
    description:
      'Ways to manage depression alongside medication or without it, including therapy, steady daily routines, and support from the people around you.',
    category: 'Depression',
  },
  {
    slug: 'managing-mental-health-during-major-life-transitions',
    title: 'Managing Mental Health During Major Life Transitions',
    description:
      'How big life changes can affect your mental health, and practical ways to protect your well-being through a move, a new job, a loss, or a new chapter.',
    category: 'Wellbeing',
  },
  {
    slug: 'managing-seasonal-depression-and-winter-blues',
    title: 'Managing Seasonal Depression and Winter Blues',
    description:
      'How to tell the winter blues from seasonal depression, practical ways to cope with shorter days, and when to reach out for professional help.',
    category: 'Depression',
  },
  {
    slug: 'medication-myths-common-misconceptions-about-psychiatric-med',
    title: 'Medication Myths: Common Misconceptions About Psychiatric Medications',
    description:
      'Common myths about psychiatric medications, what taking medication really involves, and questions worth asking your provider before you start.',
    category: 'Medication',
  },
  {
    slug: 'overcoming-barriers-to-mental-health-treatment',
    title: 'Overcoming Barriers to Mental Health Treatment',
    description:
      'Common barriers to mental health care, including stigma, cost, and time, and practical ways to get past them and find care that fits your life.',
    category: 'Getting Care',
  },
  {
    slug: 'panic-attacks-symptoms-triggers-and-treatment-options',
    title: 'Panic Attacks: Symptoms, Triggers, and Treatment Options',
    description:
      'What a panic attack feels like, common triggers, and treatment options for panic disorder, from coping skills to psychiatric medication management.',
    category: 'Anxiety',
  },
  {
    slug: 'recognizing-the-physical-symptoms-of-anxiety',
    title: 'Recognizing the Physical Symptoms of Anxiety',
    description:
      'How anxiety can show up in your body, from a racing heart and muscle tension to an upset stomach and poor sleep, and when to get it checked.',
    category: 'Anxiety',
  },
  {
    slug: 'self-care-isn-t-selfish-prioritizing-mental-health',
    title: "Self-Care Isn't Selfish: Prioritizing Mental Health",
    description:
      'Why self-care matters for your mental health, and practical ways to make room for your own needs without guilt, even when your schedule feels full.',
    category: 'Wellbeing',
  },
  {
    slug: 'social-anxiety-more-than-just-shyness',
    title: 'Social Anxiety: More Than Just Shyness',
    description:
      'The difference between shyness and social anxiety, the signs to watch for, and how treatment can help you feel more at ease around other people.',
    category: 'Anxiety',
  },
  {
    slug: 'supporting-a-loved-one-struggling-with-depression',
    title: 'Supporting a Loved One Struggling with Depression',
    description:
      'How to support someone you love through depression: what to say, what to avoid, how to look after yourself, and when to encourage professional help.',
    category: 'Depression',
  },
  {
    slug: 'the-benefits-of-continuity-of-care-in-mental-health-treatmen',
    title: 'The Benefits of Continuity of Care in Mental Health Treatment',
    description:
      'Why seeing the same provider over time matters in mental health care, from building trust to adjusting your treatment plan as your needs change.',
    category: 'Getting Care',
  },
  {
    slug: 'the-benefits-of-telehealth-for-mental-health-care',
    title: 'The Benefits of Telehealth for Mental Health Care',
    description:
      'How telehealth makes mental health care easier to fit into your life, with secure video visits from home, no commute, and a private space you choose.',
    category: 'Telehealth',
  },
  {
    slug: 'the-connection-between-chronic-stress-and-mental-health',
    title: 'The Connection Between Chronic Stress and Mental Health',
    description:
      'How long-term stress affects your mood, sleep, and focus, the signs it is taking a toll, and practical ways to manage stress before it builds.',
    category: 'Wellbeing',
  },
  {
    slug: 'the-connection-between-physical-health-conditions-and-mental',
    title: 'The Connection Between Physical Health Conditions and Mental Health',
    description:
      'How living with a physical health condition can affect your mental health, and why it helps to talk about both with the clinicians who treat you.',
    category: 'Wellbeing',
  },
  {
    slug: 'the-impact-of-trauma-on-mental-health',
    title: 'The Impact of Trauma on Mental Health',
    description:
      'How trauma can affect your mood, sleep, and relationships, common signs of PTSD, and how psychiatric care can support you as you heal and move forward.',
    category: 'Wellbeing',
  },
  {
    slug: 'the-importance-of-follow-up-care-in-mental-health-treatment',
    title: 'The Importance of Follow-Up Care in Mental Health Treatment',
    description:
      'Why regular follow-up visits matter in mental health care, what happens at a follow-up, and how check-ins keep your treatment plan on track.',
    category: 'Getting Care',
  },
  {
    slug: 'the-importance-of-honest-communication-with-your-provider',
    title: 'The Importance of Honest Communication with Your Provider',
    description:
      'Why open, honest conversations with your provider matter, what to share at your visits, and how to bring up side effects or progress that feels slow.',
    category: 'Getting Care',
  },
  {
    slug: 'the-role-of-a-psychiatric-nurse-practitioner-in-your-care',
    title: 'The Role of a Psychiatric Nurse Practitioner in Your Care',
    description:
      'What a psychiatric nurse practitioner does, from evaluation and diagnosis to medication management and supportive therapy within your visits.',
    category: 'Getting Care',
  },
  {
    // Autobuilt topic outside the practice's services (FACTS.md section 11). Listed under a neutral
    // title until it is rewritten or removed.
    slug: 'the-role-of-nutrition-in-mental-health',
    title: 'Everyday Eating Habits and Your Mood',
    description:
      'How regular meals and everyday eating habits can relate to your mood and energy, and why changes in appetite are worth mentioning at your visits.',
    category: 'Wellbeing',
  },
  {
    slug: 'the-role-of-sleep-in-mental-health-and-wellness',
    title: 'The Role of Sleep in Mental Health',
    description:
      'How sleep and mental health affect each other, signs your sleep may be part of the problem, and practical habits that can help you rest better.',
    category: 'Wellbeing',
  },
  {
    slug: 'understanding-adjustment-disorders-when-life-changes-overwhe',
    title: 'Understanding Adjustment Disorders: When Life Changes Overwhelm',
    description:
      'What an adjustment disorder is, how it differs from ordinary stress after a big change, and how psychiatric care can help you cope and move forward.',
    category: 'Wellbeing',
  },
  {
    slug: 'understanding-dual-diagnosis-mental-health-and-substance-use',
    title: 'Understanding Dual Diagnosis: Mental Health and Substance Use',
    description:
      'What a dual diagnosis means, how mental health conditions and substance use affect each other, and why it matters to address both at the same time.',
    category: 'Substance Use',
  },
  {
    slug: 'understanding-medication-management-in-psychiatric-care',
    title: 'Understanding Medication Management in Psychiatric Care',
    description:
      'How psychiatric medication management works, from your first evaluation to follow-up visits, and what to expect as your treatment is adjusted.',
    category: 'Medication',
  },
  {
    slug: 'understanding-mood-swings-when-are-they-a-concern',
    title: 'Understanding Mood Swings: When Are They a Concern?',
    description:
      'The difference between ordinary ups and downs and mood changes worth a closer look, including signs that may point to depression or bipolar disorder.',
    category: 'Depression',
  },
  {
    slug: 'understanding-recovery-what-it-means-in-mental-health',
    title: 'Understanding Recovery: What It Means in Mental Health',
    description:
      'What recovery can mean in mental health, why it rarely follows a straight line, and how to recognize the progress you are making along the way.',
    category: 'Getting Care',
  },
  {
    slug: 'understanding-the-mind-body-connection-in-mental-health-trea',
    title: 'Understanding the Mind-Body Connection in Mental Health Treatment',
    description:
      'How your physical and mental health affect each other, from stress and sleep to the physical symptoms of anxiety, and how to talk about both at visits.',
    category: 'Wellbeing',
  },
  {
    // The autobuilt title uses framing the practice does not use (FACTS.md section 11). Listed under a
    // neutral title until it is rewritten or removed.
    slug: 'what-is-integrative-mental-health-care',
    title: 'What Is Whole-Person Mental Health Care?',
    description:
      'What whole-person mental health care means in practice: looking at your symptoms, history, sleep, stress, and goals together when planning treatment.',
    category: 'Getting Care',
  },
  {
    slug: 'what-makes-a-treatment-plan-personalized',
    title: 'What Makes a Treatment Plan Personalized?',
    description:
      'What goes into a personalized mental health treatment plan, from your history and symptoms to your preferences, and how the plan changes over time.',
    category: 'Getting Care',
  },
  {
    slug: 'what-to-expect-during-your-first-psychiatric-evaluation',
    title: 'What to Expect During Your First Psychiatric Evaluation',
    description:
      'What happens at a first psychiatric evaluation, the questions you may be asked, and how to prepare so you can get the most out of your first visit.',
    category: 'Getting Care',
  },
  {
    slug: 'when-to-consider-changing-your-mental-health-treatment',
    title: 'When to Consider Changing Your Mental Health Treatment',
    description:
      'Signs it may be time to revisit your mental health treatment plan, what to discuss with your provider, and steps to take before making changes.',
    category: 'Medication',
  },
  {
    slug: 'when-worry-becomes-problematic-recognizing-generalized-anxie',
    title: 'When Worry Becomes a Problem: Recognizing Generalized Anxiety Disorder',
    description:
      'How to tell everyday worry from generalized anxiety disorder (GAD), the common symptoms, and when to talk with a professional about ongoing anxiety.',
    category: 'Anxiety',
  },
]

/** Route for a post. */
export function postHref(slug: string): string {
  return `/blog/${slug}`
}

/** A post's metadata by slug. Throws at build time if the slug is not in POSTS. */
export function getPost(slug: string): PostMeta {
  const post = POSTS.find((p) => p.slug === slug)
  if (!post) throw new Error(`lib/posts.ts has no entry for "${slug}"`)
  return post
}

/** URL fragment for a category section on the blog index ("Getting Care" -> "getting-care"). */
export function categoryId(category: string): string {
  return category
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '')
}
