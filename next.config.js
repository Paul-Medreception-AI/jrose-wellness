/** @type {import("next").NextConfig} */

// Permanent redirects for every URL the old Wix site or the first autobuild published.
// Rules are matched top to bottom, so specific paths come before the wildcards that would
// otherwise catch them (the three /post/<slug> posts before /post/:slug*). Every destination
// is a page that exists in this app: no chains, no redirect to a 404.
const REDIRECTS = [
  // Old Wix blog posts: the three real posts keep their slugs under /blog.
  ['/post/psychiatric-and-family-nurse-practice-in-connecticut', '/blog/psychiatric-and-family-nurse-practice-in-connecticut'],
  ['/post/cash-only-medication-management-for-psychiatric-conditions', '/blog/cash-only-medication-management-for-psychiatric-conditions'],
  ['/post/holistic-medication-management-services-in-connecticut', '/blog/holistic-medication-management-services-in-connecticut'],
  ['/post/:slug*', '/blog'],
  ['/blog/categories/:slug*', '/blog'],
  ['/blog/page/:n*', '/blog'],
  ['/blog-feed.xml', '/blog'],

  // Other Wix URLs.
  ['/profile/:path*', '/about'],
  ['/portfolio', '/about'],
  ['/home', '/'],
  ['/book-online', '/book-appointment'],
  ['/booking-calendar/:slug*', '/book-appointment'],
  ['/bookings-checkout/:slug*', '/book-appointment'],
  ['/service-page/:slug*', '/services'],
  ['/contact-us', '/contact'],
  ['/pricing', '/insurance'],
  ['/account-settings', '/'],
  ['/notifications', '/'],

  // Policy pages: the SMS privacy and terms pages are the only policies that exist.
  ['/privacy', '/privacy-sms'],
  ['/privacy-policy', '/privacy-sms'],
  ['/terms', '/terms-sms'],
  ['/terms-of-service', '/terms-sms'],
  ['/terms-conditions', '/terms-sms'],
  ['/terms-and-conditions', '/terms-sms'],
  ['/sms-terms', '/terms-sms'],
  ['/accessibility-statement', '/accessibility'],

  // First-autobuild pages that were merged or removed in the rebuild.
  ['/how-it-works', '/new-patients'],
  ['/team', '/about'],
  ['/reviews', '/#reviews'],
  ['/telehealth', '/services/telepsychiatry'],

  ['/services/initial-psychiatric-evaluation', '/services/psychiatric-evaluation'],
  ['/services/anxiety-treatment', '/conditions/anxiety'],
  ['/services/depression-care', '/conditions/depression'],
  ['/services/substance-use-disorder-support', '/conditions/substance-use'],
  ['/services/follow-up-sessions', '/services/medication-management'],
  ['/services/school-work-forms', '/services/adhd-evaluation'],

  ['/conditions/generalized-anxiety-disorder', '/conditions/anxiety'],
  ['/conditions/panic-disorder', '/conditions/anxiety'],
  ['/conditions/social-anxiety', '/conditions/anxiety'],
  ['/conditions/panic-attacks', '/conditions/anxiety'],
  ['/conditions/chronic-worry', '/conditions/anxiety'],
  ['/conditions/anxiety-disorders', '/conditions/anxiety'],
  ['/conditions/major-depressive-disorder', '/conditions/depression'],
  ['/conditions/persistent-depressive-disorder', '/conditions/depression'],
  ['/conditions/seasonal-affective-disorder', '/conditions/depression'],
  ['/conditions/mood-disorders', '/conditions/depression'],
  ['/conditions/low-motivation-and-energy', '/conditions/depression'],
  ['/conditions/loss-of-interest-in-activities', '/conditions/depression'],
  ['/conditions/alcohol-use-disorder', '/conditions/substance-use'],
  ['/conditions/substance-use-disorder', '/conditions/substance-use'],
  ['/conditions/substance-use-disorders', '/conditions/substance-use'],
  ['/conditions/recovery-support', '/conditions/substance-use'],
  ['/conditions/post-traumatic-stress-disorder', '/conditions/ptsd-trauma'],
  ['/conditions/schizophrenia', '/conditions/schizophrenia-psychosis'],
  ['/conditions/adjustment-disorders', '/conditions/burnout-life-transitions'],
  ['/conditions/stress-management-issues', '/conditions/burnout-life-transitions'],
  ['/conditions/burnout', '/conditions/burnout-life-transitions'],
  ['/conditions/grief-and-loss', '/conditions/burnout-life-transitions'],
  ['/conditions/grief-loss', '/conditions/burnout-life-transitions'],
  ['/conditions/relationship-stress', '/conditions/burnout-life-transitions'],
  ['/conditions/work-related-stress', '/conditions/burnout-life-transitions'],
  ['/conditions/adhd', '/services/adhd-evaluation'],
  ['/conditions/difficulty-concentrating', '/services/adhd-evaluation'],
  ['/conditions/medication-management-for-mental-health-conditions', '/services/medication-management'],
  ['/conditions/sleep-disturbances-related-to-mental-health', '/conditions'],
  ['/conditions/irritability-and-mood-swings', '/conditions'],
  ['/conditions/eating-disorders', '/conditions'],
  ['/conditions/insomnia-sleep-disorders', '/conditions'],
  ['/conditions/personality-disorders', '/conditions'],

  // Doorway "location" pages from the first autobuild (telehealth only, no city pages).
  ['/locations/online-psychiatric-care', '/services/telepsychiatry'],
  ['/locations/telehealth-psychiatry-services', '/services/telepsychiatry'],
  ['/locations/telehealth-virtual-mental-health', '/services/telepsychiatry'],
  ['/locations/virtual-mental-health-care', '/services/telepsychiatry'],
  ['/locations/:slug*', '/services/telepsychiatry'],

  ['/compare/integrative-vs-traditional-mental-health-treatment', '/compare'],

  // Autobuilt posts removed because their topic is outside the practice's care.
  ['/blog/what-is-integrative-mental-health-care', '/services'],
  ['/blog/the-role-of-nutrition-in-mental-health', '/blog'],
  ['/blog/understanding-the-mind-body-connection-in-mental-health-trea', '/blog'],
]

const nextConfig = {
  typescript: { ignoreBuildErrors: true },
  eslint: { ignoreDuringBuilds: true },
  async redirects() {
    return REDIRECTS.map(([source, destination]) => ({ source, destination, permanent: true }))
  },
}

module.exports = nextConfig
