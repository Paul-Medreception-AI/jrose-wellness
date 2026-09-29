import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { CONTACT, NAV_CTA, PROVIDER } from '@/lib/site'
import PageHero from '@/components/site/PageHero'
import Container from '@/components/site/Container'
import SectionHeading from '@/components/site/SectionHeading'
import CtaBand from '@/components/site/CtaBand'
import CrisisNotice from '@/components/site/CrisisNotice'
import { ArrowRight } from '@/components/site/icons'
import { COMPARE_HUB, GUIDES, buildGuideMetadata } from './_lib/guides'

export const metadata: Metadata = buildGuideMetadata({
  title: COMPARE_HUB.title,
  description: COMPARE_HUB.description,
  href: COMPARE_HUB.href,
  image: COMPARE_HUB.image,
})

const SHADOW = 'shadow-[0_1px_2px_rgba(46,15,19,0.04),0_12px_32px_-16px_rgba(46,15,19,0.18)]'

export default function CompareHubPage() {
  return (
    <main>
      <PageHero
        size="md"
        priority
        eyebrow="Guides"
        title="Guides to Your Psychiatric Care Options"
        subtitle="Plain-language comparisons to help you make sense of your options before your first visit."
        image={COMPARE_HUB.image}
        crumbs={[{ label: 'Home', href: '/' }, { label: COMPARE_HUB.label }]}
        primaryCta={NAV_CTA}
        secondaryCta={{ label: 'Read the FAQ', href: '/faq' }}
      />

      <section className="bg-cream py-16 sm:py-20" aria-labelledby="guides-heading">
        <Container>
          <SectionHeading
            id="guides-heading"
            eyebrow="Compare your options"
            title="Weigh both sides, then decide what fits you"
            intro="Each guide lays out both options fairly, with the questions worth asking. They are general education, not medical advice."
          />

          <ul className="mt-12 grid gap-6 md:grid-cols-2">
            {GUIDES.map((g) => (
              <li key={g.slug}>
                <Link
                  href={g.href}
                  className={`group flex h-full flex-col overflow-hidden rounded-3xl border border-border bg-white transition hover:-translate-y-0.5 hover:border-accent/40 hover:shadow-[0_16px_40px_-20px_rgba(46,15,19,0.35)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent ${SHADOW}`}
                >
                  <div className="relative h-56 w-full overflow-hidden bg-light sm:h-64">
                    <Image
                      src={g.image.src}
                      alt=""
                      fill
                      sizes="(min-width: 1280px) 600px, (min-width: 768px) 50vw, 100vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                    />
                  </div>
                  <div className="flex flex-1 flex-col p-6 sm:p-7">
                    <h2 className="font-cormorant text-[1.9rem] font-semibold leading-tight text-primary">{g.cardTitle}</h2>
                    <p className="mt-3 flex-1 leading-relaxed text-ink/80">{g.blurb}</p>
                    <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-accent">
                      Read the guide
                      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                    </span>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      <section className="bg-white py-16 sm:py-20" aria-labelledby="guides-next-heading">
        <Container size="medium">
          <SectionHeading
            id="guides-next-heading"
            eyebrow="Still deciding?"
            title="The first visit is where it comes together"
            intro={`Your first visit with ${PROVIDER.byline}, is a full psychiatric evaluation by secure video, for patients in ${CONTACT.state}. You talk through your history, current concerns, symptoms, lifestyle, and goals, and leave with a plan that fits you.`}
          />
          <ul className="mt-8 flex flex-wrap gap-3">
            {[
              { href: '/services/psychiatric-evaluation', label: 'Psychiatric evaluation' },
              { href: '/new-patients', label: 'Your first visit' },
              { href: '/insurance', label: 'Insurance and pricing' },
              { href: '/conditions', label: 'Conditions' },
            ].map((l) => (
              <li key={l.href}>
                <Link
                  href={l.href}
                  className="inline-flex items-center gap-1.5 rounded-full border border-primary/25 bg-white px-4 py-2 text-sm font-semibold text-primary transition-colors hover:border-accent hover:text-accent"
                >
                  {l.label}
                  <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </li>
            ))}
          </ul>
          <div className="mt-10">
            <CrisisNotice variant="compact" />
          </div>
        </Container>
      </section>

      <CtaBand
        heading="Talk your options through with Jessica"
        body="Use your insurance by booking through Alma or Headway, or request a self-pay visit directly. Every visit is by secure video."
      />
    </main>
  )
}
