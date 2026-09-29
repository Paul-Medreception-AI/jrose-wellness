import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Overcoming Barriers to Mental Health Treatment | JROSE WELLNESS',
  description: 'Explore common barriers to mental health treatment including stigma, cost, and access issues. Learn practical strategies to overcome these obstacles and get the care you deserve.',
  alternates: { canonical: '/blog/overcoming-barriers-to-mental-health-treatment' },
  openGraph: {
    title: 'Overcoming Barriers to Mental Health Treatment | JROSE WELLNESS',
    description: 'Explore common barriers to mental health treatment including stigma, cost, and access issues. Learn practical strategies to overcome these obstacles and get the care you deserve.',
    url: 'https://jrosewellness.com/blog/overcoming-barriers-to-mental-health-treatment',
    siteName: 'JROSE WELLNESS',
    type: 'website',
    images: [{ url: '/og-image.png', width: 1200, height: 630 }]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Overcoming Barriers to Mental Health Treatment | JROSE WELLNESS',
    description: 'Explore common barriers to mental health treatment including stigma, cost, and access issues. Learn practical strategies to overcome these obstacles and get the care you deserve.',
    images: ['/og-image.png']
  }
}

export default function BlogPost() {
  return (
    <main className="min-h-screen bg-white">
      <article>
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] py-20 text-white">
          <div className="max-w-4xl mx-auto px-6">
            {/* Breadcrumb */}
            <div className="text-sm text-white/80 mb-6 text-center">
              <Link href="/" className="hover:text-white transition-colors">Home</Link>
              <span className="mx-2">›</span>
              <Link href="/blog" className="hover:text-white transition-colors">Resources</Link>
              <span className="mx-2">›</span>
              <span>Article</span>
            </div>

            {/* Category */}
            <div className="text-xs uppercase tracking-widest text-white/70 mb-4 text-center">
              Mental Health
            </div>

            {/* Title */}
            <h1 className="font-cormorant text-5xl font-light leading-tight max-w-3xl mx-auto text-center mb-8">
              Overcoming Barriers to Mental Health Treatment
            </h1>

            {/* Meta */}
            <div className="flex items-center justify-center gap-6 text-sm text-white/70">
              <span>Published January 2025</span>
              <span>•</span>
              <span>7 min read</span>
              <span>•</span>
              <span>Dr. WELLNESS Team</span>
            </div>
          </div>
        </section>

        {/* Article Body */}
        <section className="bg-white py-20">
          <div className="max-w-3xl mx-auto px-6">
            {/* Opening */}
            <div className="text-[var(--color-ink)] leading-loose text-base mb-8">
              <p className="mb-6">
                Mental health challenges affect millions of Americans every year, yet fewer than half of those who need treatment actually receive it. The gap between need and care isn't just a matter of availability—it's a complex web of obstacles that can feel insurmountable when you're already struggling. Understanding these barriers and learning practical strategies to overcome them is the first step toward getting the support you deserve.
              </p>
              <p className="mb-6">
                Whether you're considering treatment for the first time or have faced setbacks in the past, recognizing what stands in your way can empower you to move forward. Mental health care is not a luxury—it's an essential component of overall wellness, and every barrier has a pathway through it.
              </p>
            </div>

            {/* Section 1 */}
            <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">
              The Stigma Barrier: Breaking Through Shame and Silence
            </h2>
            <div className="text-[var(--color-ink)] leading-loose text-base mb-8">
              <p className="mb-6">
                Perhaps the most pervasive barrier to mental health treatment is stigma—the fear of being judged, labeled, or seen as weak. Despite growing awareness, many people still internalize negative stereotypes about mental illness, leading them to suffer in silence rather than seek help.
              </p>
              <p className="mb-6">
                This stigma can come from multiple sources: family attitudes, workplace culture, religious communities, or even our own beliefs about what it means to struggle emotionally. The result is often delayed treatment, worsening symptoms, and missed opportunities for recovery.
              </p>
              <p className="mb-6">
                <strong>Strategies to overcome stigma:</strong>
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-[var(--color-primary)] shrink-0 mt-0.5" stroke="currentColor" strokeWidth={2} fill="none" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Educate yourself about mental health conditions as medical issues, not character flaws</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-[var(--color-primary)] shrink-0 mt-0.5" stroke="currentColor" strokeWidth={2} fill="none" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Start with one trusted person—you don't have to tell everyone about your treatment</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-[var(--color-primary)] shrink-0 mt-0.5" stroke="currentColor" strokeWidth={2} fill="none" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Remind yourself that seeking help demonstrates strength and self-awareness, not weakness</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-[var(--color-primary)] shrink-0 mt-0.5" stroke="currentColor" strokeWidth={2} fill="none" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Consider online therapy or teletherapy if privacy concerns are paramount</span>
                </li>
              </ul>
            </div>

            {/* Section 2 */}
            <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">
              Financial Concerns: Navigating Cost and Insurance
            </h2>
            <div className="text-[var(--color-ink)] leading-loose text-base mb-8">
              <p className="mb-6">
                The cost of mental health care is a significant barrier for many people. Even with insurance, copays, deductibles, and out-of-network fees can add up quickly. For those without insurance, the prospect of paying out-of-pocket rates can seem prohibitive.
              </p>
              <p className="mb-6">
                Research shows that financial concerns are among the top reasons people delay or forgo mental health treatment, even when they recognize they need it. However, more affordable options exist than many people realize.
              </p>
              <p className="mb-6">
                <strong>Practical solutions for managing costs:</strong>
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-[var(--color-primary)] shrink-0 mt-0.5" stroke="currentColor" strokeWidth={2} fill="none" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Review your insurance benefits carefully—many plans cover mental health services with parity to physical health</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-[var(--color-primary)] shrink-0 mt-0.5" stroke="currentColor" strokeWidth={2} fill="none" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Ask providers about sliding scale fees based on income</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-[var(--color-primary)] shrink-0 mt-0.5" stroke="currentColor" strokeWidth={2} fill="none" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Explore community mental health centers, which often provide services at reduced rates</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-[var(--color-primary)] shrink-0 mt-0.5" stroke="currentColor" strokeWidth={2} fill="none" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Consider training clinics at universities where graduate students provide care under supervision at lower cost</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-[var(--color-primary)] shrink-0 mt-0.5" stroke="currentColor" strokeWidth={2} fill="none" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Investigate online therapy platforms, which often cost less than traditional in-person sessions</span>
                </li>
              </ul>
            </div>

            {/* Pull Quote */}
            <blockquote className="bg-[var(--color-light)] border-l-4 border-[var(--color-primary)] p-6 my-8 text-[var(--color-ink)] italic text-xl font-cormorant">
              "The cost of not treating mental health issues—in terms of relationships, career, physical health, and quality of life—often far exceeds the cost of getting help."
            </blockquote>

            {/* Section 3 */}
            <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">
              Access Challenges: When Providers Are Hard to Find
            </h2>
            <div className="text-[var(--color-ink)] leading-loose text-base mb-8">
              <p className="mb-6">
                Even when people are ready to seek treatment and have the means to pay for it, finding an available provider can be frustratingly difficult. Long wait lists, provider shortages, and geographic limitations create substantial access barriers, particularly in rural areas and for specialized care.
              </p>
              <p className="mb-6">
                The shortage of mental health professionals is well-documented, with some regions designated as Mental Health Professional Shortage Areas by the federal government. This scarcity means that even those with insurance and resources may wait weeks or months for an appointment.
              </p>
              <p className="mb-6">
                <strong>Ways to improve access:</strong>
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-[var(--color-primary)] shrink-0 mt-0.5" stroke="currentColor" strokeWidth={2} fill="none" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Cast a wider net geographically—teletherapy has expanded access beyond local providers</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-[var(--color-primary)] shrink-0 mt-0.5" stroke="currentColor" strokeWidth={2} fill="none" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Ask to be placed on cancellation lists for earlier appointments</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-[var(--color-primary)] shrink-0 mt-0.5" stroke="currentColor" strokeWidth={2} fill="none" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Consider different types of providers—psychiatrists, psychologists, licensed clinical social workers, and counselors all offer valuable care</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-[var(--color-primary)] shrink-0 mt-0.5" stroke="currentColor" strokeWidth={2} fill="none" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Use your primary care physician as a starting point—they can provide initial treatment and referrals</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-[var(--color-primary)] shrink-0 mt-0.5" stroke="currentColor" strokeWidth={2} fill="none" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>In crisis situations, utilize emergency services, crisis hotlines, or walk-in crisis centers</span>
                </li>
              </ul>
            </div>

            {/* Section 4 */}
            <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">
              Cultural and Systemic Barriers
            </h2>
            <div className="text-[var(--color-ink)] leading-loose text-base mb-8">
              <p className="mb-6">
                Mental health care in the United States has historically been designed primarily for white, middle-class populations, creating barriers for people from diverse cultural backgrounds. Language differences, cultural concepts of illness and healing, lack of culturally competent providers, and historical mistrust of medical systems all contribute to disparities in mental health treatment.
              </p>
              <p className="mb-6">
                LGBTQ+ individuals, people of color, immigrants, and other marginalized communities may face additional obstacles including discrimination, lack of affirming care, and providers who don't understand their lived experiences.
              </p>
              <p className="mb-6">
                <strong>Finding culturally responsive care:</strong>
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-[var(--color-primary)] shrink-0 mt-0.5" stroke="currentColor" strokeWidth={2} fill="none" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Seek providers who specialize in or have experience with your specific community</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-[var(--color-primary)] shrink-0 mt-0.5" stroke="currentColor" strokeWidth={2} fill="none" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Look for directories that help match clients with culturally competent therapists</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-[var(--color-primary)] shrink-0 mt-0.5" stroke="currentColor" strokeWidth={2} fill="none" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Ask prospective providers directly about their experience and approach to your specific concerns</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-[var(--color-primary)] shrink-0 mt-0.5" stroke="currentColor" strokeWidth={2} fill="none" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Connect with community organizations that may offer mental health services tailored to your background</span>
                </li>
              </ul>
            </div>

            {/* Section 5 */}
            <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">
              Time, Scheduling, and Logistical Obstacles
            </h2>
            <div className="text-[var(--color-ink)] leading-loose text-base mb-8">
              <p className="mb-6">
                Practical barriers like work schedules, childcare needs, transportation challenges, and the simple logistics of fitting appointments into a busy life prevent many people from accessing mental health care. These obstacles may seem mundane compared to stigma or cost, but they're equally effective at keeping people from getting help.
              </p>
              <p className="mb-6">
                For those with inflexible work hours, limited sick time, or caregiving responsibilities, taking time off for therapy appointments can feel impossible. Transportation barriers are particularly acute for those in rural areas, people with disabilities, or individuals without reliable access to vehicles.
              </p>
              <p className="mb-6">
                <strong>Practical solutions:</strong>
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-[var(--color-primary)] shrink-0 mt-0.5" stroke="currentColor" strokeWidth={2} fill="none" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Utilize teletherapy to eliminate travel time and expand scheduling options</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-[var(--color-primary)] shrink-0 mt-0.5" stroke="currentColor" strokeWidth={2} fill="none" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Look for providers with evening or weekend hours</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-[var(--color-primary)] shrink-0 mt-0.5" stroke="currentColor" strokeWidth={2} fill="none" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Schedule sessions during lunch breaks if you work near your provider's office</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-[var(--color-primary)] shrink-0 mt-0.5" stroke="currentColor" strokeWidth={2} fill="none" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Explore whether your employer offers an Employee Assistance Program (EAP) with convenient access</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-[var(--color-primary)] shrink-0 mt-0.5" stroke="currentColor" strokeWidth={2} fill="none" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Consider phone-based therapy for maximum flexibility if video isn't possible</span>
                </li>
              </ul>
            </div>

            {/* Section 6 */}
            <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">
              Moving Forward: Taking the First Step
            </h2>
            <div className="text-[var(--color-ink)] leading-loose text-base mb-8">
              <p className="mb-6">
                Understanding barriers to mental health treatment is important, but the ultimate goal is to overcome them. If you're struggling with your mental health, know that each obstacle you face has been faced by countless others—and successfully navigated.
              </p>
              <p className="mb-6">
                The first step doesn't have to be perfect. It might be as simple as talking to your primary care doctor, calling a crisis hotline, or researching therapists online. What matters is that you're taking action toward better mental health, even when barriers make that action difficult.
              </p>
              <p className="mb-6">
                Mental health treatment works. Research consistently shows that therapy, medication, and other interventions help people recover from depression, anxiety, trauma, and other conditions. The barriers are real, but they're not insurmountable—and the potential benefits of treatment are worth the effort to overcome them.
              </p>
              <p className="mb-6">
                If you're in Fairfield, CT or the surrounding area and looking for supportive, integrative wellness care that addresses both mental and physical health, reaching out for professional guidance is an important step. You don't have to navigate these challenges alone.
              </p>
            </div>
          </div>

          {/* Author Box */}
          <div className="max-w-3xl mx-auto px-6 my-12">
            <div className="bg-[var(--color-cream)] rounded-2xl p-8 flex gap-6 items-start">
              <div className="bg-[var(--color-light)] rounded-full w-16 h-16 shrink-0 flex items-center justify-center">
                <svg className="w-8 h-8 text-[var(--color-primary)]" stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
              <div>
                <div className="font-semibold text-[var(--color-ink)] mb-2">
                  Reviewed by JROSE WELLNESS
                </div>
                <p className="text-[var(--color-muted)] text-sm leading-relaxed">
                  This article provides educational information about mental health barriers and treatment options. It is not intended to replace professional medical advice, diagnosis, or treatment. Always seek the advice of your physician or qualified mental health provider with any questions you may have regarding a medical condition.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Related Articles */}
        <section className="bg-[var(--color-cream)] py-16">
          <div className="max-w-7xl mx-auto px-6">
            <h3 className="font-cormorant text-3xl text-[var(--color-ink)] mb-8 text-center">
              Related Resources
            </h3>
            <div className="grid md:grid-cols-3 gap-8">
              {/* Card 1 */}
              <Link href="/blog" className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300">
                <div className="aspect-[16/9] bg-gradient-to-br from-[var(--color-light)] to-[var(--color-cream)] flex items-center justify-center">
                  <svg className="w-16 h-16 text-[var(--color-primary)] opacity-40" stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
                <div className="p-6">
                  <div className="text-xs uppercase tracking-wider text-[var(--color-primary)] mb-2">
                    Mental Health
                  </div>
                  <h4 className="font-cormorant text-xl text-[var(--color-ink)] mb-2 group-hover:text-[var(--color-primary)] transition-colors">
                    Mental Health Resources
                  </h4>
                  <p className="text-[var(--color-muted)] text-sm leading-relaxed">
                    Explore our collection of articles and guides on mental health and wellness topics.
                  </p>
                </div>
              </Link>

              {/* Card 2 */}
              <Link href="/services" className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300">
                <div className="aspect-[16/9] bg-gradient-to-br from-[var(--color-light)] to-[var(--color-cream)] flex items-center justify-center">
                  <svg className="w-16 h-16 text-[var(--color-primary)] opacity-40" stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </div>
                <div className="p-6">
                  <div className="text-xs uppercase tracking-wider text-[var(--color-primary)] mb-2">
                    Services
                  </div>
                  <h4 className="font-cormorant text-xl text-[var(--color-ink)] mb-2 group-hover:text-[var(--color-primary)] transition-colors">
                    Our Wellness Services
                  </h4>
                  <p className="text-[var(--color-muted)] text-sm leading-relaxed">
                    Discover the integrative wellness services we offer to support your mental and physical health.
                  </p>
                </div>
              </Link>

              {/* Card 3 */}
              <Link href="/contact" className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300">
                <div className="aspect-[16/9] bg-gradient-to-br from-[var(--color-light)] to-[var(--color-cream)] flex items-center justify-center">
                  <svg className="w-16 h-16 text-[var(--color-primary)] opacity-40" stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                  </svg>
                </div>
                <div className="p-6">
                  <div className="text-xs uppercase tracking-wider text-[var(--color-primary)] mb-2">
                    Get Started
                  </div>
                  <h4 className="font-cormorant text-xl text-[var(--color-ink)] mb-2 group-hover:text-[var(--color-primary)] transition-colors">
                    Schedule a Consultation
                  </h4>
                  <p className="text-[var(--color-muted)] text-sm leading-relaxed">
                    Take the first step toward better health with a personalized consultation.
                  </p>
                </div>
              </Link>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] py-20 text-white text-center">
          <div className="max-w-4xl mx-auto px-6">
            <h2 className="font-cormorant text-4xl font-light mb-4">
              Ready to Take the Next Step?
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Our team is here to help.
            </p>
            <Link
              href="/contact"
              className="inline-block bg-white text-[var(--color-primary)] px-8 py-4 rounded-lg font-semibold hover:bg-[var(--color-cream)] transition-colors duration-300"
            >
              Contact Us Today
            </Link>
          </div>
        </section>
      </article>
    </main>
  )
}