import type { Metadata, Viewport } from 'next'
import localFont from 'next/font/local'
import { GoogleAnalytics } from '@next/third-parties/google'
import SiteHeader from '@/components/site/SiteHeader'
import SiteFooter from '@/components/site/SiteFooter'
import JsonLd from '@/components/site/JsonLd'
import { BOOKING, CONTACT, LEGAL_NAME, PROVIDER, SITE_NAME, SITE_URL } from '@/lib/site'
import { BRAND_IMAGES, JESSICA_PHOTOS } from '@/lib/images'
import './globals.css'

// Self-hosted (latin, variable) so the build never depends on fetching Google Fonts.
const cormorant = localFont({
  src: [
    { path: './fonts/cormorant-garamond.woff2', weight: '300 700', style: 'normal' },
    { path: './fonts/cormorant-garamond-italic.woff2', weight: '300 700', style: 'italic' },
  ],
  variable: '--font-cormorant',
  display: 'swap',
})
const dmSans = localFont({
  src: [{ path: './fonts/dm-sans.woff2', weight: '300 700', style: 'normal' }],
  variable: '--font-dm-sans',
  display: 'swap',
})

const GA_ID = process.env.NEXT_PUBLIC_GA_ID

const TITLE = 'Telehealth Psychiatry in Connecticut | JRose Wellness'
const DESCRIPTION =
  'Telehealth psychiatry and medication management for teens 15+ and adults in Connecticut. Secure video visits, insurance through Alma or Headway, or self-pay.'
const OG_IMAGE = { url: '/og-image.png', width: 1200, height: 630, alt: `${SITE_NAME}: telehealth psychiatry in Connecticut` }

// No title template: every page passes its own title through withBrand() (lib/site.ts).
// Icons come from the app/icon.png and app/apple-icon.png file conventions.
export const metadata: Metadata = {
  verification: { google: 'feibKn5AwabJBvn-TNkq4nh6CfCDvatl3IwvjyCH90k' },
  metadataBase: new URL(SITE_URL),
  title: TITLE,
  description: DESCRIPTION,
  applicationName: SITE_NAME,
  // No alternates.canonical or openGraph.url here: pages inherit layout metadata, and an
  // inherited canonical of "/" would point every page that forgets its own at the home page.
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    siteName: SITE_NAME,
    locale: 'en_US',
    type: 'website',
    images: [OG_IMAGE],
  },
  twitter: {
    card: 'summary_large_image',
    title: TITLE,
    description: DESCRIPTION,
    images: [OG_IMAGE.url],
  },
}

export const viewport: Viewport = {
  themeColor: '#FEFAF0',
}

const PRACTICE_ID = `${SITE_URL}/#practice`
const PERSON_ID = `${SITE_URL}/about#jessica-logel`
const abs = (path: string) => new URL(path, SITE_URL).toString()

const siteSchema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebSite',
      '@id': `${SITE_URL}/#website`,
      url: SITE_URL,
      name: SITE_NAME,
      inLanguage: 'en-US',
      publisher: { '@id': PRACTICE_ID },
    },
    {
      // MedicalOrganization is what allows medicalSpecialty. Not Physician or MedicalClinic: Jessica is
      // not a physician and there is no clinic or office.
      '@type': ['MedicalBusiness', 'MedicalOrganization'],
      '@id': PRACTICE_ID,
      name: SITE_NAME,
      legalName: LEGAL_NAME,
      url: SITE_URL,
      logo: { '@type': 'ImageObject', url: abs(BRAND_IMAGES.logo.src), width: BRAND_IMAGES.logo.width, height: BRAND_IMAGES.logo.height },
      image: abs('/og-image.png'),
      description: 'Telehealth psychiatric care for adolescents 15 and older and adults in Connecticut.',
      telephone: CONTACT.phoneHref.replace(/^tel:/, ''),
      email: CONTACT.email,
      areaServed: { '@type': 'State', name: CONTACT.state },
      medicalSpecialty: 'https://schema.org/Psychiatric',
      // availableService is only valid on Hospital, MedicalClinic and Physician, so the services
      // are listed as an offer catalog instead.
      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: 'Psychiatric services',
        itemListElement: [
          'Psychiatric evaluation',
          'Psychiatric medication management',
          'Supportive therapy',
          'Telepsychiatry (secure video visits)',
        ].map((name) => ({ '@type': 'Offer', itemOffered: { '@type': 'Service', name } })),
      },
      founder: { '@id': PERSON_ID },
      employee: { '@id': PERSON_ID },
      sameAs: [BOOKING.alma.href, BOOKING.headway.href],
    },
    {
      '@type': 'Person',
      '@id': PERSON_ID,
      name: PROVIDER.name,
      honorificSuffix: PROVIDER.credentials,
      jobTitle: PROVIDER.title,
      url: abs('/about'),
      image: abs(JESSICA_PHOTOS.portrait.src),
      identifier: { '@type': 'PropertyValue', propertyID: 'NPI', value: PROVIDER.npi },
      alumniOf: { '@type': 'CollegeOrUniversity', name: PROVIDER.school },
      hasCredential: [
        {
          '@type': 'EducationalOccupationalCredential',
          credentialCategory: 'certification',
          name: 'Psychiatric-Mental Health Nurse Practitioner, Board Certified (PMHNP-BC)',
        },
        {
          '@type': 'EducationalOccupationalCredential',
          credentialCategory: 'certification',
          name: 'Family Nurse Practitioner (FNP)',
        },
      ],
      worksFor: { '@id': PRACTICE_ID },
    },
  ],
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${cormorant.variable} ${dmSans.variable}`}>
      <body className="bg-cream font-sans text-ink antialiased">
        <JsonLd data={siteSchema} />
        <SiteHeader />
        <div id="main" tabIndex={-1} className="outline-none">
          {children}
        </div>
        <SiteFooter />
      </body>
      {GA_ID && <GoogleAnalytics gaId={GA_ID} />}
    </html>
  )
}
