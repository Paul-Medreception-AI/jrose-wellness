import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Page Not Found | JROSE WELLNESS',
  description: 'The page you are looking for could not be found. Return to JROSE WELLNESS homepage or contact us for assistance with integrative wellness care in Fairfield, CT.',
  alternates: { canonical: '/not-found' },
  openGraph: {
    title: 'Page Not Found | JROSE WELLNESS',
    description: 'The page you are looking for could not be found. Return to JROSE WELLNESS homepage or contact us for assistance with integrative wellness care in Fairfield, CT.',
    url: 'https://jrosewellness.com/not-found',
    siteName: 'JROSE WELLNESS',
    type: 'website',
    images: [{ url: '/og-image.png', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Page Not Found | JROSE WELLNESS',
    description: 'The page you are looking for could not be found. Return to JROSE WELLNESS homepage or contact us for assistance with integrative wellness care in Fairfield, CT.',
    images: ['/og-image.png'],
  },
}

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[var(--color-cream)] flex items-center justify-center px-4">
      <div className="text-center">
        <div className="font-cormorant text-9xl text-[var(--color-primary)] opacity-20 leading-none">
          404
        </div>
        <h1 className="font-cormorant text-4xl text-[var(--color-ink)] mt-4">
          Page Not Found
        </h1>
        <p className="text-[var(--color-muted)] mt-2 text-lg">
          The page you're looking for doesn't exist.
        </p>
        <div className="flex items-center justify-center gap-4 mt-8">
          <Link
            href="/"
            className="inline-block px-8 py-3 bg-[var(--color-accent)] text-white rounded-full font-medium transition-colors hover:bg-[var(--color-accent-dark)]"
          >
            Go Home
          </Link>
          <Link
            href="/contact"
            className="inline-block px-8 py-3 border-2 border-[var(--color-border)] text-[var(--color-ink)] rounded-full font-medium transition-colors hover:border-[var(--color-accent)] hover:text-[var(--color-accent)]"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </div>
  )
}