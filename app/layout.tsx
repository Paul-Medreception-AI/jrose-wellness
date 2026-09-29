import type { Metadata } from 'next'
import { Cormorant_Garamond, DM_Sans } from 'next/font/google'
import { GoogleAnalytics } from '@next/third-parties/google'
import './globals.css'

const cormorant = Cormorant_Garamond({ subsets: ['latin'], weight: ['300','400','500','600','700'], variable: '--font-cormorant' })
const dmSans = DM_Sans({ subsets: ['latin'], weight: ['300','400','500','600'], variable: '--font-dm-sans' })


const GA_ID = process.env.NEXT_PUBLIC_GA_ID

export const metadata: Metadata = {
  metadataBase: new URL('https://jrosewellness.com'),
  title: 'JROSE WELLNESS | Whole-Person Wellness Through Integrative Mental Health Care',
  description: 'Board-certified psychiatric and family nurse practitioner offering comprehensive mental health support from the comfort of your home. Personalized treatment plans that address the connection between your emotional, physical, and lifestyle health.',
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/favicon.png', type: 'image/png' }
    ],
    apple: '/favicon.png'
  },
  openGraph: {
    title: 'JROSE WELLNESS | Whole-Person Wellness Through Integrative Mental Health Care',
    description: 'Board-certified psychiatric and family nurse practitioner offering comprehensive mental health support from the comfort of your home. Personalized treatment plans that address the connection between your emotional, physical, and lifestyle health.',
    url: 'https://jrosewellness.com',
    siteName: 'JROSE WELLNESS',
    type: 'website',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'JROSE WELLNESS | Whole-Person Wellness Through Integrative Mental Health Care',
    description: 'Board-certified psychiatric and family nurse practitioner offering comprehensive mental health support from the comfort of your home. Personalized treatment plans that address the connection between your emotional, physical, and lifestyle health.',
    images: ['/og-image.png']
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const currentYear = new Date().getFullYear()
  
  return (
    <html lang="en" className={`${cormorant.variable} ${dmSans.variable}`}>
      <body className="font-[family-name:var(--font-dm-sans)] bg-[var(--color-cream)] text-[var(--color-ink)]">
        <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-[var(--color-border)] shadow-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
            <a href="/" className="font-cormorant text-xl font-semibold text-[var(--color-primary)]">
              JROSE WELLNESS
            </a>
            <nav className="hidden md:flex items-center gap-8">
              <a href="/services" className="text-sm font-medium text-[var(--color-ink)] hover:text-[var(--color-primary)] transition-colors">
                Services
              </a>
              <a href="/conditions" className="text-sm font-medium text-[var(--color-ink)] hover:text-[var(--color-primary)] transition-colors">
                Conditions
              </a>
              <a href="/about" className="text-sm font-medium text-[var(--color-ink)] hover:text-[var(--color-primary)] transition-colors">
                About
              </a>
              <a href="/how-it-works" className="text-sm font-medium text-[var(--color-ink)] hover:text-[var(--color-primary)] transition-colors">
                How It Works
              </a>
              <a href="/contact" className="text-sm font-medium text-[var(--color-ink)] hover:text-[var(--color-primary)] transition-colors">
                Contact
              </a>
              <a href="/contact" className="ml-8 bg-[var(--color-accent)] hover:bg-[var(--color-accent-dark)] text-white px-6 py-2.5 rounded-xl font-semibold text-sm transition-colors">
                Schedule Your Evaluation
              </a>
            </nav>
          </div>
        </header>

        {children}

        <footer className="bg-[var(--color-ink)] text-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
              <div>
                <span className="font-cormorant text-xl font-semibold text-white">
                  JROSE WELLNESS
                </span>
                <p className="mt-4 text-white/70 text-sm leading-relaxed">
                  Empowering your journey to whole-person wellness through compassionate, personalized mental health care.
                </p>
                <div className="flex items-center gap-4 mt-6">
                  <a href="https://www.instagram.com/jessielogel?igsh=MWF4NmRuMnpodGhmeg%3D%3D&amp;utm_source=qr" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="text-white/70 hover:text-white transition-colors">
                    <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                    </svg>
                  </a>
                  <a href="https://www.tiktok.com/@wix" target="_blank" rel="noopener noreferrer" aria-label="TikTok" className="text-white/70 hover:text-white transition-colors">
                    <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-5.2 1.74 2.89 2.89 0 012.31-4.64 2.93 2.93 0 01.88.13V9.4a6.84 6.84 0 00-1-.05A6.33 6.33 0 005 20.1a6.34 6.34 0 0010.86-4.43v-7a8.16 8.16 0 004.77 1.52v-3.4a4.85 4.85 0 01-1-.1z"/>
                    </svg>
                  </a>
                  <a href="https://x.com/wix" target="_blank" rel="noopener noreferrer" aria-label="X" className="text-white/70 hover:text-white transition-colors">
                    <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                    </svg>
                  </a>
                </div>
              </div>

              <div>
                <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
                <ul className="space-y-3">
                  <li>
                    <a href="/services" className="text-white/70 hover:text-white transition-colors text-sm">
                      Services
                    </a>
                  </li>
                  <li>
                    <a href="/conditions" className="text-white/70 hover:text-white transition-colors text-sm">
                      Conditions
                    </a>
                  </li>
                  <li>
                    <a href="/about" className="text-white/70 hover:text-white transition-colors text-sm">
                      About
                    </a>
                  </li>
                  <li>
                    <a href="/how-it-works" className="text-white/70 hover:text-white transition-colors text-sm">
                      How It Works
                    </a>
                  </li>
                  <li>
                    <a href="/contact" className="text-white/70 hover:text-white transition-colors text-sm">
                      Contact
                    </a>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold text-lg mb-4">Contact</h3>
                <ul className="space-y-3 text-sm text-white/70">
                  <li>
                    <a href="https://maps.google.com/?q=268+Post+Road,+Fairfield,+CT+06824" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                      268 Post Road<br />Fairfield, CT 06824
                    </a>
                  </li>
                  <li>
                    <a href="tel:(914) 916-6376" className="hover:text-white transition-colors">
                      (914) 916-6376
                    </a>
                  </li>
                  <li>
                    <a href="mailto:jrosewellnesspllc@gmail.com" className="hover:text-white transition-colors">
                      jrosewellnesspllc@gmail.com
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="border-t border-white/10 pt-8">
              <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                <p className="text-white/60 text-sm">
                  © {currentYear} JROSE WELLNESS. All rights reserved.
                </p>
                <div className="flex items-center gap-4 text-sm text-white/60">
                  <a href="/privacy-sms" className="hover:text-white transition-colors">
                    Privacy Policy
                  </a>
                  <span>|</span>
                  <a href="/terms-sms" className="hover:text-white transition-colors">
                    Terms of Service
                  </a>
                  <span>|</span>
                  <a href="/terms-sms#sms-terms" className="hover:text-white transition-colors">
                    SMS Terms
                  </a>
                </div>
              </div>
              <p className="text-white/50 text-xs mt-6 text-center md:text-left">
                This website does not collect protected health information. All clinical intake is handled through a secure patient portal.
              </p>
            </div>
          </div>
        </footer>
      </body>
      {GA_ID && <GoogleAnalytics gaId={GA_ID} />}

    </html>
  )
}