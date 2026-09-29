import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Understanding Recovery: What It Means in Mental Health',
  description: 'Explore the true meaning of mental health recovery, from clinical definitions to personal journeys. Learn evidence-based strategies for sustainable wellness and growth.',
  alternates: { canonical: '/blog/understanding-recovery-what-it-means-in-mental-health' },
  openGraph: {
    title: 'Understanding Recovery: What It Means in Mental Health',
    description: 'Explore the true meaning of mental health recovery, from clinical definitions to personal journeys. Learn evidence-based strategies for sustainable wellness and growth.',
    url: 'https://jrosewellness.com/blog/understanding-recovery-what-it-means-in-mental-health',
    siteName: 'JROSE WELLNESS',
    type: 'website',
    images: [{ url: '/og-image.png', width: 1200, height: 630 }]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Understanding Recovery: What It Means in Mental Health',
    description: 'Explore the true meaning of mental health recovery, from clinical definitions to personal journeys. Learn evidence-based strategies for sustainable wellness and growth.',
    images: ['/og-image.png']
  }
}

export default function BlogPost() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] py-20 text-white">
        <div className="max-w-4xl mx-auto px-6">
          {/* Breadcrumb */}
          <div className="text-sm mb-6 text-white/80">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span className="mx-2">›</span>
            <Link href="/blog" className="hover:text-white transition-colors">Resources</Link>
            <span className="mx-2">›</span>
            <span>Article</span>
          </div>

          {/* Category */}
          <div className="text-xs uppercase tracking-widest text-white/70 mb-4">
            Mental Health
          </div>

          {/* Title */}
          <h1 className="font-cormorant text-5xl font-light leading-tight max-w-3xl mx-auto text-center mb-8">
            Understanding Recovery: What It Means in Mental Health
          </h1>

          {/* Meta */}
          <div className="flex items-center justify-center gap-6 text-sm text-white/70">
            <span>Published January 2025</span>
            <span>•</span>
            <span>7 min read</span>
            <span>•</span>
            <span>Reviewed by JROSE WELLNESS</span>
          </div>
        </div>
      </section>

      {/* Article Body */}
      <article className="bg-white py-20">
        <div className="max-w-3xl mx-auto px-6">
          {/* Opening Hook */}
          <div className="text-[var(--color-ink)] leading-loose text-base mb-8">
            <p className="mb-6">
              The word "recovery" carries different meanings for different people. In physical medicine, recovery often implies a return to a previous state of health—a broken bone heals, a wound closes, and function is restored. But in mental health, recovery is far more nuanced, personal, and ongoing. It's not simply about the absence of symptoms or a return to "normal." Rather, it's about building a life of meaning, purpose, and wellness—even in the presence of ongoing challenges.
            </p>
            <p>
              Understanding what recovery truly means in mental health can transform how we approach treatment, set goals, and measure progress. Whether you're navigating your own mental health journey, supporting a loved one, or simply seeking to understand more, this guide explores the multifaceted nature of mental health recovery and what it looks like in real life.
            </p>
          </div>

          {/* Section 1 */}
          <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">
            What Mental Health Recovery Really Means
          </h2>
          <div className="text-[var(--color-ink)] leading-loose text-base mb-8">
            <p className="mb-6">
              Mental health recovery is a holistic, person-centered process that goes beyond symptom reduction. The Substance Abuse and Mental Health Services Administration (SAMHSA) defines recovery as "a process of change through which individuals improve their health and wellness, live self-directed lives, and strive to reach their full potential."
            </p>
            <p className="mb-6">
              This definition emphasizes several key principles:
            </p>
            <ul className="space-y-3 mb-6">
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span><strong>Recovery is personal and unique.</strong> There's no single path or timeline. What works for one person may not work for another, and that's completely normal.</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span><strong>Recovery is ongoing.</strong> It's not a fixed destination but a continuing journey of growth, learning, and adaptation.</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span><strong>Recovery is about wellness, not just illness.</strong> It focuses on building strengths, developing coping skills, and creating meaningful life experiences.</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span><strong>Recovery is self-directed.</strong> The individual in recovery is the expert on their own experience and plays the primary role in shaping their path forward.</span>
              </li>
            </ul>
            <p>
              This framework shifts the focus from "being cured" to "living well"—a distinction that opens up possibilities and reduces the pressure to achieve an idealized endpoint.
            </p>
          </div>

          {/* Section 2 */}
          <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">
            Who Mental Health Recovery Affects
          </h2>
          <div className="text-[var(--color-ink)] leading-loose text-base mb-8">
            <p className="mb-6">
              Mental health recovery is relevant to anyone who has experienced mental health challenges, including:
            </p>
            <ul className="space-y-3 mb-6">
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span>Individuals diagnosed with depression, anxiety disorders, bipolar disorder, schizophrenia, or post-traumatic stress disorder</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span>Those navigating substance use disorders or co-occurring conditions</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span>People experiencing grief, trauma, or significant life transitions</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span>Families, friends, and caregivers who support loved ones through mental health challenges</span>
              </li>
            </ul>
            <p>
              According to the National Institute of Mental Health, nearly one in five U.S. adults lives with a mental illness. Recovery is not just for those with severe or chronic conditions—it's a framework that can guide anyone working to improve their mental health and overall quality of life.
            </p>
          </div>

          {/* Pull Quote */}
          <blockquote className="bg-[var(--color-light)] border-l-4 border-[var(--color-primary)] p-6 my-8 text-[var(--color-ink)] italic text-xl font-cormorant">
            "Recovery is not about going back to how things were. It's about moving forward to a place where you can live a full and meaningful life, on your own terms."
          </blockquote>

          {/* Section 3 */}
          <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">
            The Four Dimensions of Recovery
          </h2>
          <div className="text-[var(--color-ink)] leading-loose text-base mb-8">
            <p className="mb-6">
              SAMHSA identifies four major dimensions that support a life in recovery. Understanding these can help you identify areas of strength and opportunities for growth:
            </p>
            <div className="space-y-6 mb-6">
              <div>
                <h3 className="font-semibold text-lg mb-2">1. Health: Managing Your Condition</h3>
                <p>This includes making informed, healthy choices that support physical and emotional well-being. It means working with healthcare providers, taking prescribed medications as directed, engaging in therapy, and adopting lifestyle practices that promote stability.</p>
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-2">2. Home: A Safe and Stable Place to Live</h3>
                <p>Having a stable living environment is foundational to recovery. This doesn't necessarily mean owning a home—it means having a place where you feel safe, can rest, and have the privacy to focus on your health.</p>
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-2">3. Purpose: Engaging in Meaningful Activities</h3>
                <p>Purpose can come from work, education, volunteering, creative pursuits, or caregiving. It's about having roles and activities that provide meaning, structure, and a sense of contribution to something larger than yourself.</p>
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-2">4. Community: Building Relationships and Social Support</h3>
                <p>Recovery thrives in connection. Having supportive relationships, whether with family, friends, peers, or support groups, provides encouragement, reduces isolation, and fosters a sense of belonging.</p>
              </div>
            </div>
            <p>
              Progress in any of these dimensions contributes to overall recovery. You don't need to excel in all four at once—small steps in one area can create momentum in others.
            </p>
          </div>

          {/* Section 4 */}
          <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">
            Evidence Supporting the Recovery Model
          </h2>
          <div className="text-[var(--color-ink)] leading-loose text-base mb-8">
            <p className="mb-6">
              Research consistently supports the effectiveness of recovery-oriented approaches. Studies show that individuals who engage in recovery-focused care experience:
            </p>
            <ul className="space-y-3 mb-6">
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span><strong>Improved quality of life</strong> and greater satisfaction with care</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span><strong>Better engagement</strong> with treatment and adherence to care plans</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span><strong>Reduced hospitalization rates</strong> and crisis episodes</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span><strong>Increased hope and self-efficacy</strong>—the belief that they can manage their condition and achieve their goals</span>
              </li>
            </ul>
            <p>
              A landmark study published in the <em>American Journal of Psychiatry</em> found that peer support and recovery-oriented interventions significantly improved outcomes for individuals with serious mental illness, including employment rates and community integration. The shift from a purely clinical model to a recovery model acknowledges that healing happens not just in the therapy room, but in every dimension of life.
            </p>
          </div>

          {/* Section 5 */}
          <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">
            Practical Strategies to Support Your Recovery Journey
          </h2>
          <div className="text-[var(--color-ink)] leading-loose text-base mb-8">
            <p className="mb-6">
              Whether you're just beginning your recovery journey or have been navigating it for years, these evidence-based strategies can help:
            </p>
            <ul className="space-y-3 mb-6">
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span><strong>Set personalized, meaningful goals.</strong> Rather than focusing solely on symptom reduction, identify what matters most to you—reconnecting with a hobby, rebuilding a relationship, or returning to work.</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span><strong>Build a support network.</strong> Connect with peers, join a support group, or engage with online communities where you can share experiences and learn from others.</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span><strong>Develop a wellness toolbox.</strong> Identify strategies that help you manage stress, regulate emotions, and stay grounded—whether that's journaling, mindfulness, exercise, or creative expression.</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span><strong>Work with a recovery-oriented provider.</strong> Choose healthcare professionals who view you as a partner in your care, respect your autonomy, and focus on your strengths as much as your challenges.</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span><strong>Practice self-compassion.</strong> Recovery is not linear. Setbacks are part of the process, not a sign of failure. Treat yourself with the same kindness you'd offer a friend facing similar challenges.</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span><strong>Celebrate small wins.</strong> Progress can be subtle—getting out of bed, attending an appointment, reaching out to a friend. Acknowledge and honor these victories.</span>
              </li>
            </ul>
          </div>

          {/* Section 6 */}
          <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">
            When to Seek Professional Support
          </h2>
          <div className="text-[var(--color-ink)] leading-loose text-base mb-8">
            <p className="mb-6">
              Recovery is a personal journey, but you don't have to walk it alone. Professional support can provide structure, guidance, and evidence-based interventions tailored to your unique needs. Consider reaching out to a mental health provider if:
            </p>
            <ul className="space-y-3 mb-6">
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span>You're experiencing persistent symptoms that interfere with daily life</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span>You're unsure where to start or feel overwhelmed by the recovery process</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span>You're ready to explore therapy, medication, or integrative approaches</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span>You want personalized strategies to manage your condition and build resilience</span>
              </li>
            </ul>
            <p>
              At JROSE WELLNESS, we embrace a recovery-oriented approach rooted in integrative wellness care. We partner with you to develop a personalized plan that honors your goals, values, and vision for your life. Whether you're seeking support for the first time or looking to deepen your recovery journey, our team is here to walk alongside you.
            </p>
          </div>

          {/* Closing */}
          <div className="text-[var(--color-ink)] leading-loose text-base mt-12 pt-8 border-t border-[var(--color-border)]">
            <p className="mb-6">
              Recovery in mental health is not about erasing the past or achieving perfection. It's about reclaiming agency, building a life that reflects your values, and finding hope even in the midst of challenges. It's a journey that unfolds over time—one that is deeply personal, profoundly transformative, and always worth taking.
            </p>
            <p>
              If you're ready to explore what recovery can look like for you, we invite you to reach out. Support, understanding, and evidence-based care are here when you need them.
            </p>
          </div>
        </div>
      </article>

      {/* Author Box */}
      <div className="bg-white py-12">
        <div className="max-w-3xl mx-auto px-6">
          <div className="bg-[var(--color-cream)] rounded-2xl p-8 flex gap-6 items-start">
            <div className="bg-[var(--color-light)] rounded-full w-16 h-16 flex-shrink-0 flex items-center justify-center">
              <svg className="w-8 h-8 text-[var(--color-primary)]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
              </svg>
            </div>
            <div>
              <div className="font-semibold text-[var(--color-ink)] mb-2">Reviewed by JROSE WELLNESS</div>
              <p className="text-[var(--color-muted)] text-sm leading-relaxed">
                Our practice is committed to providing evidence-based, compassionate care rooted in integrative wellness. We partner with patients to create personalized treatment plans that honor their unique goals and support lasting recovery.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Related Articles */}
      <section className="bg-[var(--color-cream)] py-16">
        <div className="max-w-7xl mx-auto px-6">
          <h3 className="font-cormorant text-3xl text-[var(--color-ink)] mb-8 text-center">Related Resources</h3>
          <div className="grid md:grid-cols-3 gap-8">
            {/* Card 1 */}
            <Link href="/blog" className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300">
              <div className="aspect-video bg-gradient-to-br from-[var(--color-light)] to-[var(--color-cream)] flex items-center justify-center">
                <svg className="w-16 h-16 text-[var(--color-primary)]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
                </svg>
              </div>
              <div className="p-6">
                <h4 className="font-cormorant text-xl text-[var(--color-ink)] mb-2 group-hover:text-[var(--color-primary)] transition-colors">
                  Mental Health Resources
                </h4>
                <p className="text-[var(--color-muted)] text-sm leading-relaxed">
                  Explore more articles, guides, and insights on mental health and wellness.
                </p>
              </div>
            </Link>

            {/* Card 2 */}
            <Link href="/services" className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300">
              <div className="aspect-video bg-gradient-to-br from-[var(--color-light)] to-[var(--color-cream)] flex items-center justify-center">
                <svg className="w-16 h-16 text-[var(--color-primary)]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
                </svg>
              </div>
              <div className="p-6">
                <h4 className="font-cormorant text-xl text-[var(--color-ink)] mb-2 group-hover:text-[var(--color-primary)] transition-colors">
                  Our Wellness Services
                </h4>
                <p className="text-[var(--color-muted)] text-sm leading-relaxed">
                  Learn about our integrative approach to mental health and wellness care.
                </p>
              </div>
            </Link>

            {/* Card 3 */}
            <Link href="/contact" className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300">
              <div className="aspect-video bg-gradient-to-br from-[var(--color-light)] to-[var(--color-cream)] flex items-center justify-center">
                <svg className="w-16 h-16 text-[var(--color-primary)]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 01-2.555-.337A5.972 5.972 0 015.41 20.97a5.969 5.969 0 01-.474-.065 4.48 4.48 0 00.978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25z" />
                </svg>
              </div>
              <div className="p-6">
                <h4 className="font-cormorant text-xl text-[var(--color-ink)] mb-2 group-hover:text-[var(--color-primary)] transition-colors">
                  Start Your Journey
                </h4>
                <p className="text-[var(--color-muted)] text-sm leading-relaxed">
                  Ready to take the next step? Get in touch to schedule a consultation.
                </p>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] py-20 text-white text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="font-cormorant text-4xl font-light mb-4">Ready to Take the Next Step?</h2>
          <p className="text-lg mb-8 text-white/90">Our team is here to help.</p>
          <Link
            href="/contact"
            className="inline-block bg-white text-[var(--color-primary)] px-8 py-4 rounded-full font-medium hover:bg-[var(--color-cream)] transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
          >
            Schedule a Consultation
          </Link>
        </div>
      </section>
    </main>
  )
}