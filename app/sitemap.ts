import type { MetadataRoute } from 'next'
import { SITE_URL } from '@/lib/site'
import { SERVICES } from '@/lib/data/services'
import { CONDITIONS } from '@/lib/data/conditions'
import { AUDIENCES } from '@/lib/data/audiences'
import { POSTS, isIndexedPost, postHref } from '@/lib/posts'
import { COMPARE_HUB, GUIDES } from '@/app/compare/_lib/guides'

// Built from the same data the pages render from, so a page that is added or removed updates the
// sitemap too. One host (SITE_URL, www). Only live, indexable pages: no redirect sources and no
// noindex pages (/patient-form-sms is noindex, so it is left out, and so are the blog posts still
// waiting on clinical review: see INDEXED_POST_SLUGS in lib/posts.ts). lastmod is sent only when a
// real date is known; stamping every URL with the build time would make it meaningless.

type Entry = {
  path: string
  priority: number
  changeFrequency: MetadataRoute.Sitemap[number]['changeFrequency']
  lastModified?: string
}

const STATIC: Entry[] = [
  { path: '/', priority: 1.0, changeFrequency: 'weekly' },
  { path: '/services', priority: 0.9, changeFrequency: 'monthly' },
  { path: '/conditions', priority: 0.9, changeFrequency: 'monthly' },
  { path: '/who-we-help', priority: 0.8, changeFrequency: 'monthly' },
  { path: '/about', priority: 0.8, changeFrequency: 'monthly' },
  { path: '/new-patients', priority: 0.8, changeFrequency: 'monthly' },
  { path: '/insurance', priority: 0.8, changeFrequency: 'monthly' },
  { path: '/book-appointment', priority: 0.8, changeFrequency: 'monthly' },
  { path: '/contact', priority: 0.7, changeFrequency: 'monthly' },
  { path: '/faq', priority: 0.7, changeFrequency: 'monthly' },
  { path: '/blog', priority: 0.7, changeFrequency: 'weekly' },
  { path: COMPARE_HUB.href, priority: 0.6, changeFrequency: 'monthly' },
  { path: '/accessibility', priority: 0.3, changeFrequency: 'yearly' },
  { path: '/privacy-sms', priority: 0.3, changeFrequency: 'yearly' },
  { path: '/terms-sms', priority: 0.3, changeFrequency: 'yearly' },
]

export default function sitemap(): MetadataRoute.Sitemap {
  const entries: Entry[] = [
    ...STATIC,
    ...SERVICES.map((s) => ({ path: `/services/${s.slug}`, priority: 0.85, changeFrequency: 'monthly' as const })),
    ...CONDITIONS.map((c) => ({ path: `/conditions/${c.slug}`, priority: 0.85, changeFrequency: 'monthly' as const })),
    ...AUDIENCES.map((a) => ({ path: `/who-we-help/${a.slug}`, priority: 0.8, changeFrequency: 'monthly' as const })),
    ...GUIDES.map((g) => ({ path: g.href, priority: 0.6, changeFrequency: 'monthly' as const })),
    ...POSTS.filter((p) => isIndexedPost(p.slug)).map((p) => ({
      path: postHref(p.slug),
      priority: 0.6,
      changeFrequency: 'monthly' as const,
      lastModified: p.updated ?? p.date,
    })),
  ]

  // De-duplicate by path in case a data file ever lists a route twice.
  const seen = new Set<string>()
  return entries
    .filter((e) => (seen.has(e.path) ? false : (seen.add(e.path), true)))
    .map((e) => ({
      url: e.path === '/' ? SITE_URL : `${SITE_URL}${e.path}`,
      ...(e.lastModified ? { lastModified: e.lastModified } : {}),
      changeFrequency: e.changeFrequency,
      priority: e.priority,
    }))
}
