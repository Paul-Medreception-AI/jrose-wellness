import Image from 'next/image'
import Link from 'next/link'
import type { Metadata } from 'next'
import { AGES, CONTACT, NAV_CTA, PRICING, PROVIDER, SITE_NAME, withBrand } from '@/lib/site'
import { JESSICA_PHOTOS, PAGE_IMAGES, imageFor } from '@/lib/images'
import { AUDIENCES } from '@/lib/data/audiences'
import PageHero from '@/components/site/PageHero'
import Container from '@/components/site/Container'
import SectionHeading from '@/components/site/SectionHeading'
import BookingOptions from '@/components/site/BookingOptions'
import CtaBand from '@/components/site/CtaBand'
import { ArrowRight, VideoIcon } from '@/components/site/icons'

const PATH = '/who-we-help'
const HERO = PAGE_IMAGES[PATH]
const TITLE = withBrand('Telehealth Psychiatry for Teens & Adults')
const DESCRIPTION =
  'Telehealth psychiatric care for teens 15 and older, adults, and older adults in Connecticut. Find the care path that fits you or your family, by secure video.'

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: PATH },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: PATH,
    siteName: SITE_NAME,
    type: 'website',
    images: [{ url: HERO.src, alt: HERO.alt }],
  },
  twitter: { card: 'summary_large_image', title: TITLE, description: DESCRIPTION, images: [HERO.src] },
}

// Hub-card copy per audience. Title, link and photo come from AUDIENCES so the cards and the
// audience pages cannot drift apart.
const CARD_COPY: Record<string, { eyebrow: string; blurb: string; concerns: string[] }> = {
  teens: {
    eyebrow: `Adolescents ${AGES.minimum}+`,
    blurb: `Care for adolescents ${AGES.minimum} and older by secure video, with help for parents and guardians before booking.`,
    concerns: ['Anxiety', 'Depression', 'ADHD', 'School stress'],
  },
  adults: {
    eyebrow: 'Young adults and adults',
    blurb: 'Care that fits around work, relationships, and everything else on your plate.',
    concerns: ['Anxiety', 'Depression', 'ADHD', 'Burnout'],
  },
  'older-adults': {
    eyebrow: 'Adults 65+',
    blurb: 'Careful medication management that considers your physical health and other medications.',
    concerns: ['Anxiety', 'Depression', 'Sleep', 'Medication review'],
  },
}

const CARE_INCLUDES = [
  {
    href: '/services/psychiatric-evaluation',
    title: 'Psychiatric Evaluation',
    body: 'Your first visit: history, current concerns, symptoms, lifestyle, and goals, leading to a plan that fits you.',
    price: `${PRICING.initialEvaluation.price} self-pay`,
  },
  {
    href: '/services/medication-management',
    title: 'Medication Management',
    body: 'Follow-up visits to check your progress and adjust treatment when needed. Medication is optional.',
    price: `${PRICING.followUp.price} self-pay`,
  },
  {
    href: '/services/supportive-therapy',
    title: 'Supportive Therapy',
    body: 'Coping strategies and support built into your visits, with a referral to a therapist if you need more.',
    price: 'Within your visits',
  },
]

export default function WhoWeHelpPage() {
  return (
    <main>
      <PageHero
        size="md"
        priority
        eyebrow="Who We Help"
        title="Telehealth Psychiatric Care for Teens, Adults, and Older Adults"
        subtitle={`${PROVIDER.byline}, sees adolescents ${AGES.minimum} and older, adults, and older adults by secure video, for patients in Connecticut.`}
        image={HERO}
        crumbs={[{ label: 'Home', href: '/' }, { label: 'Who We Help' }]}
        primaryCta={NAV_CTA}
        secondaryCta={{ label: 'Insurance & Pricing', href: '/insurance' }}
      />

      {/* Audience cards */}
      <section className="bg-cream py-16 sm:py-20" aria-labelledby="audiences-heading">
        <Container>
          <div className="grid items-end gap-8 lg:grid-cols-12 lg:gap-14">
            <div className="lg:col-span-7">
              <SectionHeading
                id="audiences-heading"
                eyebrow="Care at every stage"
                title="Find the care path that fits"
                intro="Whether you are a parent looking for help for your teen, an adult juggling work and life, or an older adult who would rather not travel to appointments, care follows the same steps: a thorough first evaluation, a plan built around you, and regular follow-ups by secure video."
              />
            </div>
            <div className="lg:col-span-5">
              <div className="rounded-3xl border border-border bg-white p-6 shadow-[0_12px_32px_-18px_rgba(46,15,19,0.25)] sm:p-7">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">Ages we see</p>
                <p className="mt-2 font-cormorant text-[1.75rem] font-semibold leading-tight text-primary">{AGES.short}</p>
                <p className="mt-3 flex items-start gap-2 text-sm leading-relaxed text-muted">
                  <VideoIcon className="mt-0.5 h-4 w-4 shrink-0 text-sage" />
                  Every visit is by secure video, from the comfort and privacy of your home.
                </p>
              </div>
            </div>
          </div>

          <ul className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {AUDIENCES.map((a, i) => {
              const href = `${a.hubHref}/${a.slug}`
              const image = a.heroImage ?? imageFor(href)
              const copy = CARD_COPY[a.slug]
              const last = i === AUDIENCES.length - 1
              return (
                <li key={a.slug} className={last ? 'sm:col-span-2 lg:col-span-1' : ''}>
                  <Link
                    href={href}
                    className="group flex h-full flex-col overflow-hidden rounded-3xl border border-border bg-white shadow-[0_1px_2px_rgba(46,15,19,0.04),0_12px_32px_-16px_rgba(46,15,19,0.18)] transition hover:-translate-y-0.5 hover:border-accent/40 hover:shadow-[0_16px_40px_-20px_rgba(46,15,19,0.35)]"
                  >
                    <div className="relative h-56 w-full overflow-hidden bg-light sm:h-60">
                      <Image
                        src={image.src}
                        alt={image.alt}
                        fill
                        sizes="(min-width: 1024px) 400px, (min-width: 640px) 50vw, 100vw"
                        className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                      />
                    </div>
                    <div className="flex flex-1 flex-col p-6 sm:p-7">
                      {copy && (
                        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">{copy.eyebrow}</p>
                      )}
                      <h3 className="mt-2 font-cormorant text-[1.75rem] font-semibold leading-tight text-primary">{a.title}</h3>
                      <p className="mt-3 leading-relaxed text-ink/80">{copy?.blurb ?? a.description}</p>
                      {copy && (
                        <ul className="mt-5 flex flex-wrap gap-2" aria-label={`Common concerns for ${a.title}`}>
                          {copy.concerns.map((c) => (
                            <li key={c} className="rounded-full border border-border bg-cream px-3 py-1 text-[13px] text-ink">
                              {c}
                            </li>
                          ))}
                        </ul>
                      )}
                      <span className="mt-auto inline-flex items-center gap-1.5 pt-6 text-sm font-semibold text-accent">
                        Care for {a.title.replace(/\s*\(.*\)$/, '').toLowerCase()}
                        <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                      </span>
                    </div>
                  </Link>
                </li>
              )
            })}
          </ul>
        </Container>
      </section>

      {/* One provider, physical and mental health together */}
      <section className="bg-white py-16 sm:py-20" aria-labelledby="provider-heading">
        <Container>
          <div className="grid items-center gap-10 lg:grid-cols-12 lg:gap-16">
            <div className="mx-auto w-full max-w-sm lg:col-span-5 lg:max-w-none">
              <div className="overflow-hidden rounded-[2rem] bg-light shadow-[0_24px_48px_-28px_rgba(46,15,19,0.45)]">
                <Image
                  src={JESSICA_PHOTOS.portrait.src}
                  alt={JESSICA_PHOTOS.portrait.alt}
                  width={JESSICA_PHOTOS.portrait.width}
                  height={JESSICA_PHOTOS.portrait.height}
                  sizes="(min-width: 1024px) 420px, 384px"
                  className="h-auto w-full"
                />
              </div>
            </div>
            <div className="lg:col-span-7">
              <SectionHeading
                id="provider-heading"
                eyebrow="Meet Jessica"
                title="One provider at every visit"
              />
              <blockquote className="mt-6 border-l-4 border-l-accent pl-5 font-cormorant text-2xl italic leading-snug text-primary sm:text-[1.75rem]">
                &ldquo;In addition to my psychiatric background, I also have experience as a Family Nurse Practitioner
                (FNP), which gives me a broader understanding of the connection between physical and mental health.&rdquo;
              </blockquote>
              <p className="mt-6 text-lg leading-relaxed text-ink/85">
                {PROVIDER.byline}, is a {PROVIDER.title.toLowerCase()} and the only provider at the practice, so you see the
                same person at every visit, whatever your age. {PROVIDER.licensure}
              </p>
              <Link
                href="/about"
                className="mt-6 inline-flex items-center gap-1.5 font-semibold text-accent underline-offset-4 hover:underline"
              >
                More about Jessica
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </Container>
      </section>

      {/* What care includes */}
      <section className="bg-cream py-16 sm:py-20" aria-labelledby="care-heading">
        <Container>
          <SectionHeading
            id="care-heading"
            eyebrow="What care includes"
            title="The same thoughtful care at every age"
            intro="Every patient starts with a psychiatric evaluation. From there, follow-up visits combine medication management, when it is part of your plan, with supportive therapy."
            align="center"
          />
          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {CARE_INCLUDES.map((s) => (
              <Link
                key={s.href}
                href={s.href}
                className="group flex h-full flex-col rounded-3xl border border-border bg-white p-7 transition hover:-translate-y-0.5 hover:border-accent/40 hover:shadow-[0_16px_40px_-20px_rgba(46,15,19,0.35)]"
              >
                <span className="text-xs font-semibold uppercase tracking-[0.18em] text-sage">{s.price}</span>
                <span className="mt-2 font-cormorant text-2xl font-semibold leading-tight text-primary">{s.title}</span>
                <span className="mt-3 flex-1 leading-relaxed text-ink/75">{s.body}</span>
                <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-accent">
                  Learn more
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                </span>
              </Link>
            ))}
          </div>
        </Container>
      </section>

      <BookingOptions />

      <CtaBand
        heading="Not sure which path fits?"
        body={`Call ${CONTACT.phone} with general questions, or book your first visit when you are ready.`}
      />
    </main>
  )
}
