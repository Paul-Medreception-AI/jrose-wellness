import type { Metadata } from 'next'
import { SITE_NAME, withBrand } from '@/lib/site'
import { imageFor, type SiteImage } from '@/lib/images'

// Registry of the comparison guides under /compare. The hub, the metadata and the "other guides"
// cards all read from here, so a title or description is written once.
//
// Rules for this section: balanced, general education for a telehealth psychiatry practice.
// No statistics or evidence claims, no outcome promises, no in-person visits, and Jessica's title
// is always psychiatric nurse practitioner (APRN). See FACTS.md section 11.

export type GuideMeta = {
  slug: string
  href: string
  /** Base <title>. Kept to 44 characters or fewer so withBrand() appends the brand. */
  title: string
  h1: string
  /** Short name for breadcrumbs and cards. */
  cardTitle: string
  /** Meta description, 140 to 160 characters. */
  description: string
  /** One or two sentences for the hub card. */
  blurb: string
  image: SiteImage
}

export const COMPARE_HUB = {
  href: '/compare',
  label: 'Guides',
  title: 'Guides to Psychiatric Care Options',
  description:
    'Plain-language guides comparing psychiatric care options: NP vs psychiatrist, telehealth vs in-person, and medication vs therapy for anxiety and depression.',
  image: imageFor('/faq'),
} as const

export const GUIDES = [
  {
    slug: 'psychiatric-nurse-practitioner-vs-psychiatrist',
    href: '/compare/psychiatric-nurse-practitioner-vs-psychiatrist',
    title: 'Psych Nurse Practitioner vs Psychiatrist',
    h1: 'Psychiatric Nurse Practitioner vs Psychiatrist: What Is the Difference?',
    cardTitle: 'Psychiatric NP vs psychiatrist',
    description:
      'How a psychiatric nurse practitioner and a psychiatrist differ in training, licensing, and prescribing, and how to choose. A plain guide for patients in CT.',
    blurb:
      'Both can evaluate, diagnose, and prescribe. Here is how their training differs, and what matters most when you choose.',
    image: imageFor('/services/psychiatric-evaluation'),
  },
  {
    slug: 'telehealth-vs-in-person-psychiatric-care',
    href: '/compare/telehealth-vs-in-person-psychiatric-care',
    title: 'Telehealth vs In-Person Psychiatric Care',
    h1: 'Telehealth vs In-Person Psychiatric Care: Which Fits You?',
    cardTitle: 'Telehealth vs in-person care',
    description:
      'Compare telehealth and in-person psychiatric care: privacy, travel, technology, and when each fits best. JRose Wellness offers secure video visits in CT.',
    blurb:
      'Privacy, travel, technology, and physical exams: how video visits and office visits compare, and when each one fits.',
    image: imageFor('/services/telepsychiatry'),
  },
  {
    slug: 'medication-management-vs-therapy-depression',
    href: '/compare/medication-management-vs-therapy-depression',
    title: 'Medication vs Therapy for Depression',
    h1: 'Medication Management vs Therapy for Depression',
    cardTitle: 'Medication vs therapy for depression',
    description:
      'Compare medication management and therapy for depression: what each involves, what to weigh, and why many people use both. Telehealth care for patients in CT.',
    blurb:
      'What each approach involves, what to weigh, and why many people combine the two.',
    image: imageFor('/conditions/depression'),
  },
  {
    slug: 'anxiety-medication-vs-non-medication-approaches',
    href: '/compare/anxiety-medication-vs-non-medication-approaches',
    title: 'Anxiety Medication vs Non-Medication Care',
    h1: 'Anxiety Medication vs Non-Medication Approaches',
    cardTitle: 'Anxiety: medication vs other approaches',
    description:
      'Compare medication and non-medication approaches for anxiety, from coping skills and therapy to prescriptions, and how to choose. Telehealth care in CT.',
    blurb:
      'Prescriptions, coping skills, and therapy: how the options for anxiety compare, and how to decide what to try first.',
    image: imageFor('/conditions/anxiety'),
  },
] as const satisfies readonly GuideMeta[]

export type GuideSlug = (typeof GUIDES)[number]['slug']

export function getGuide(slug: GuideSlug): GuideMeta {
  const g = GUIDES.find((x) => x.slug === slug)
  if (!g) throw new Error(`Unknown guide: ${slug}`)
  return g
}

type MetaInput = { title: string; description: string; href: string; image: SiteImage }

/** Page metadata: branded title, relative canonical, and Open Graph with the page image. */
export function buildGuideMetadata({ title, description, href, image }: MetaInput): Metadata {
  const fullTitle = withBrand(title)
  return {
    title: fullTitle,
    description,
    alternates: { canonical: href },
    openGraph: {
      title: fullTitle,
      description,
      url: href,
      siteName: SITE_NAME,
      type: 'article',
      images: [{ url: image.src, alt: image.alt }],
    },
    twitter: { card: 'summary_large_image', title: fullTitle, description, images: [image.src] },
  }
}
