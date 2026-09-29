import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Understanding Dual Diagnosis: Mental Health and Substance Use',
  description: 'Learn about dual diagnosis, how mental health and substance use disorders interact, and why integrated treatment is essential for lasting recovery and wellness.',
  alternates: { canonical: '/blog/understanding-dual-diagnosis-mental-health-and-substance-use' },
  openGraph: {
    title: 'Understanding Dual Diagnosis: Mental Health and Substance Use',
    description: 'Learn about dual diagnosis, how mental health and substance use disorders interact, and why integrated treatment is essential for lasting recovery and wellness.',
    url: 'https://jrosewellness.com/blog/understanding-dual-diagnosis-mental-health-and-substance-use',
    siteName: 'JROSE WELLNESS',
    type: 'website',
    images: [{ url: '/og-image.png', width: 1200, height: 630 }]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Understanding Dual Diagnosis: Mental Health and Substance Use',
    description: 'Learn about dual diagnosis, how mental health and substance use disorders interact, and why integrated treatment is essential for lasting recovery and wellness.',
    images: ['/og-image.png']
  }
}

export default function BlogPost() {
  return (
    <main>
      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] py-20 text-white">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-sm mb-6 text-white/80">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            {' › '}
            <Link href="/blog" className="hover:text-white transition-colors">Resources</Link>
            {' › Article'}
          </div>
          <div className="text-xs uppercase tracking-widest text-white/70 mb-4">Mental Health</div>
          <h1 className="font-cormorant text-5xl font-light leading-tight max-w-3xl mx-auto text-center mb-8">
            Understanding Dual Diagnosis: Mental Health and Substance Use
          </h1>
          <div className="flex justify-center gap-6 text-sm text-white/80">
            <span>Published January 2025</span>
            <span>•</span>
            <span>7 min read</span>
            <span>•</span>
            <span>JROSE WELLNESS Team</span>
          </div>
        </div>
      </section>

      <article className="bg-white py-20">
        <div className="max-w-3xl mx-auto px-6">
          <div className="text-[var(--color-ink)] leading-loose text-base">
            <p className="text-xl font-light mb-8">
              When Sarah started experiencing panic attacks in her late twenties, she turned to alcohol to calm her nerves. Within two years, she found herself caught in a painful cycle: drinking to manage anxiety, then feeling more anxious as the effects wore off. Sarah's story reflects a reality faced by millions—the complex interplay between mental health conditions and substance use disorders, known clinically as dual diagnosis or co-occurring disorders.
            </p>

            <p className="mb-6">
              Understanding this connection is crucial, not just for those experiencing it, but for their loved ones and communities. When mental health and substance use challenges occur together, they create a unique set of circumstances that require specialized, integrated care. Let's explore what dual diagnosis really means, why it's so common, and most importantly, how comprehensive treatment can pave the way toward lasting recovery.
            </p>

            <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">What Is Dual Diagnosis?</h2>
            
            <p className="mb-6">
              Dual diagnosis, also called co-occurring disorders, refers to the simultaneous presence of a mental health condition and a substance use disorder. This isn't simply having two separate problems at the same time—these conditions often interact in complex ways, each influencing the course and severity of the other.
            </p>

            <p className="mb-6">
              Common mental health conditions that co-occur with substance use include depression, anxiety disorders, post-traumatic stress disorder (PTSD), bipolar disorder, and attention-deficit/hyperactivity disorder (ADHD). The substances involved range from alcohol and prescription medications to illicit drugs like cocaine, opioids, or methamphetamine.
            </p>

            <p className="mb-6">
              What makes dual diagnosis particularly challenging is that the symptoms of one condition can mask or mimic the other. Depression might be mistaken for the effects of substance withdrawal, or drug use might temporarily hide underlying anxiety. This complexity is why accurate assessment by experienced healthcare providers is essential.
            </p>

            <div className="bg-[var(--color-light)] border-l-4 border-[var(--color-primary)] p-6 my-8 text-[var(--color-ink)] italic text-xl font-cormorant">
              "Recovery from dual diagnosis isn't about choosing to treat one condition over the other—it's about understanding how they're connected and addressing both simultaneously with integrated care."
            </div>

            <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">How Common Is Dual Diagnosis?</h2>

            <p className="mb-6">
              Dual diagnosis is far more common than many people realize. According to the Substance Abuse and Mental Health Services Administration (SAMHSA), approximately 9.5 million adults in the United States experienced both a mental illness and a substance use disorder in 2019. That represents nearly 4% of all adults—a significant portion of the population.
            </p>

            <p className="mb-6">
              Research consistently shows that people with mental health conditions are more likely to experience substance use disorders than the general population, and vice versa. For instance, individuals with mood or anxiety disorders are approximately twice as likely to have a substance use disorder compared to those without mental health challenges. Similarly, people who struggle with addiction are roughly twice as likely to have a mood or anxiety disorder.
            </p>

            <p className="mb-6">
              These statistics reveal an important truth: neither condition is a prerequisite for the other, but they share common risk factors and frequently coexist. Recognizing this prevalence helps reduce stigma and emphasizes the need for screening and integrated treatment approaches.
            </p>

            <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">Why Do Mental Health and Substance Use Disorders Co-Occur?</h2>

            <p className="mb-6">
              The relationship between mental health conditions and substance use is multifaceted, with several pathways that can lead to dual diagnosis:
            </p>

            <p className="mb-6">
              <strong className="text-[var(--color-primary)]">Self-Medication:</strong> Many people with undiagnosed or untreated mental health conditions use alcohol or drugs to cope with distressing symptoms. Someone with social anxiety might drink before social events, or a person with trauma-related nightmares might use substances to sleep. While this may provide temporary relief, it often worsens symptoms over time and creates dependence.
            </p>

            <p className="mb-6">
              <strong className="text-[var(--color-primary)]">Substance-Induced Mental Health Changes:</strong> Chronic substance use can trigger or exacerbate mental health conditions. Long-term alcohol use is associated with depression, while stimulant drugs can precipitate anxiety or even psychotic symptoms. The brain changes caused by addiction can create lasting mental health challenges.
            </p>

            <p className="mb-6">
              <strong className="text-[var(--color-primary)]">Shared Risk Factors:</strong> Both conditions share common underlying vulnerabilities, including genetic predisposition, early trauma, chronic stress, and neurobiological factors. Brain regions involved in reward, stress regulation, and executive function play roles in both mental health and addiction, which explains why they often occur together.
            </p>

            <p className="mb-6">
              <strong className="text-[var(--color-primary)]">Bidirectional Influence:</strong> Once both conditions are present, they create a cycle that reinforces each. Depression may lead to increased substance use, which then deepens depression. Anxiety drives drug use, which causes more anxiety during withdrawal. Breaking this cycle requires addressing both conditions simultaneously.
            </p>

            <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">Recognizing the Signs of Dual Diagnosis</h2>

            <p className="mb-6">
              Identifying dual diagnosis can be challenging, but certain signs warrant professional evaluation:
            </p>

            <div className="space-y-4 my-8">
              <div className="flex gap-3 items-start">
                <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <p className="text-[var(--color-ink)]">Using substances to cope with difficult emotions, memories, or social situations</p>
              </div>
              <div className="flex gap-3 items-start">
                <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <p className="text-[var(--color-ink)]">Experiencing depression, anxiety, or mood swings that worsen with substance use</p>
              </div>
              <div className="flex gap-3 items-start">
                <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <p className="text-[var(--color-ink)]">History of trauma combined with current substance dependence</p>
              </div>
              <div className="flex gap-3 items-start">
                <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <p className="text-[var(--color-ink)]">Previous unsuccessful attempts at treatment that addressed only one condition</p>
              </div>
              <div className="flex gap-3 items-start">
                <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <p className="text-[var(--color-ink)]">Family history of both mental health conditions and addiction</p>
              </div>
              <div className="flex gap-3 items-start">
                <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <p className="text-[var(--color-ink)]">Difficulty maintaining relationships, employment, or daily responsibilities</p>
              </div>
              <div className="flex gap-3 items-start">
                <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <p className="text-[var(--color-ink)]">Persistent mental health symptoms even after periods of sobriety</p>
              </div>
            </div>

            <p className="mb-6">
              If you or someone you care about shows these patterns, seeking a comprehensive evaluation from a healthcare provider experienced in dual diagnosis is an important first step.
            </p>

            <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">The Importance of Integrated Treatment</h2>

            <p className="mb-6">
              Historically, mental health and substance use disorders were treated in separate systems, often by different providers who didn't communicate with each other. This fragmented approach frequently led to poor outcomes, as treating only one condition left the other to undermine recovery.
            </p>

            <p className="mb-6">
              Modern evidence-based practice emphasizes integrated treatment—addressing both conditions simultaneously within a coordinated care framework. Integrated treatment recognizes that mental health and substance use disorders influence each other and that sustainable recovery requires treating the whole person.
            </p>

            <p className="mb-6">
              Effective integrated treatment typically includes several components: comprehensive assessment to identify both conditions and their interactions; evidence-based therapies such as cognitive-behavioral therapy (CBT), dialectical behavior therapy (DBT), or trauma-focused approaches; medication management when appropriate to address both mental health symptoms and withdrawal or cravings; peer support and group therapy with others facing similar challenges; and family involvement and education to build a supportive recovery environment.
            </p>

            <p className="mb-6">
              Research consistently demonstrates that integrated treatment leads to better outcomes than treating conditions separately. People engaged in coordinated care are more likely to maintain sobriety, experience reduced psychiatric symptoms, avoid hospitalization, and report improved quality of life and functioning.
            </p>

            <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">Moving Forward: Hope and Healing</h2>

            <p className="mb-6">
              Dual diagnosis presents complex challenges, but recovery is absolutely possible. The key is understanding that these conditions are interconnected and approaching treatment with that awareness. With the right support, integrated care, and commitment to wellness, people with co-occurring disorders can and do achieve lasting recovery.
            </p>

            <p className="mb-6">
              If you're struggling with both mental health and substance use concerns—or if you're worried about someone who is—know that you're not alone and that specialized help is available. The journey may not be easy, but it begins with a single step: reaching out for support.
            </p>

            <p className="mb-6">
              Recovery looks different for everyone, but it often involves learning new coping strategies, building supportive relationships, addressing underlying trauma or stress, and developing a meaningful life that supports both mental wellness and sobriety. With patience, professional guidance, and community support, healing is within reach.
            </p>
          </div>
        </div>

        <div className="bg-[var(--color-cream)] rounded-2xl p-8 max-w-3xl mx-auto my-12 mx-6 flex gap-6 items-start animate-fade-up">
          <div className="bg-[var(--color-light)] rounded-full w-16 h-16 flex items-center justify-center flex-shrink-0">
            <svg className="w-8 h-8 text-[var(--color-primary)]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
            </svg>
          </div>
          <div>
            <div className="font-semibold text-[var(--color-ink)] mb-2">Reviewed by JROSE WELLNESS</div>
            <p className="text-[var(--color-muted)] text-sm leading-relaxed">
              Our team is dedicated to providing evidence-based information and compassionate care for individuals seeking integrative wellness solutions in Fairfield, CT and beyond.
            </p>
          </div>
        </div>
      </article>

      <section className="bg-[var(--color-cream)] py-16">
        <div className="max-w-7xl mx-auto px-6">
          <h3 className="font-cormorant text-3xl text-[var(--color-ink)] mb-8 text-center">Related Resources</h3>
          <div className="grid md:grid-cols-3 gap-8">
            
            <Link href="/blog" className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 animate-fade-up">
              <div className="bg-gradient-to-br from-[var(--color-light)] to-[var(--color-cream)] p-12 flex items-center justify-center">
                <svg className="w-16 h-16 text-[var(--color-primary)]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
                </svg>
              </div>
              <div className="p-6">
                <h4 className="font-cormorant text-2xl text-[var(--color-ink)] mb-3 group-hover:text-[var(--color-primary)] transition-colors">
                  Explore All Resources
                </h4>
                <p className="text-[var(--color-muted)] leading-relaxed mb-4">
                  Browse our complete library of wellness articles, patient education guides, and evidence-based health information.
                </p>
                <div className="text-[var(--color-accent)] text-sm font-medium flex items-center gap-2">
                  View All Articles
                  <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </Link>

            <Link href="/services" className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 animate-fade-up">
              <div className="bg-gradient-to-br from-[var(--color-light)] to-[var(--color-cream)] p-12 flex items-center justify-center">
                <svg className="w-16 h-16 text-[var(--color-primary)]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23-.693L5 14.5m14.8.8l1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0112 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5" />
                </svg>
              </div>
              <div className="p-6">
                <h4 className="font-cormorant text-2xl text-[var(--color-ink)] mb-3 group-hover:text-[var(--color-primary)] transition-colors">
                  Our Wellness Services
                </h4>
                <p className="text-[var(--color-muted)] leading-relaxed mb-4">
                  Discover our comprehensive range of integrative wellness treatments designed to support your whole health.
                </p>
                <div className="text-[var(--color-accent)] text-sm font-medium flex items-center gap-2">
                  Learn More
                  <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </Link>

            <Link href="/contact" className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 animate-fade-up">
              <div className="bg-gradient-to-br from-[var(--color-light)] to-[var(--color-cream)] p-12 flex items-center justify-center">
                <svg className="w-16 h-16 text-[var(--color-primary)]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 01-.825-.242m9.345-8.334a2.126 2.126 0 00-.476-.095 48.64 48.64 0 00-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0011.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155" />
                </svg>
              </div>
              <div className="p-6">
                <h4 className="font-cormorant text-2xl text-[var(--color-ink)] mb-3 group-hover:text-[var(--color-primary)] transition-colors">
                  Schedule a Consultation
                </h4>
                <p className="text-[var(--color-muted)] leading-relaxed mb-4">
                  Take the first step toward integrated wellness care. Contact our Fairfield practice to discuss your health goals.
                </p>
                <div className="text-[var(--color-accent)] text-sm font-medium flex items-center gap-2">
                  Get in Touch
                  <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </Link>

          </div>
        </div>
      </section>

      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] py-20 text-white text-center">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="font-cormorant text-4xl font-light mb-4">Ready to Take the Next Step?</h2>
          <p className="text-xl mb-8 text-white/90">Our team is here to help.</p>
          <Link 
            href="/contact"
            className="inline-block bg-[var(--color-accent)] hover:bg-[var(--color-accent-dark)] text-white px-8 py-4 rounded-full font-medium transition-all duration-300 hover:scale-105 hover:shadow-xl"
          >
            Contact Us Today
          </Link>
        </div>
      </section>
    </main>
  )
}