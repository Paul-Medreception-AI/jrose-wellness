import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Integrative Psychiatry vs. Traditional Mental Health Treatment',
  description: 'Compare integrative psychiatry and traditional mental health treatment side-by-side. Understand effectiveness, costs, side effects, and which approach is right for you.',
  alternates: { canonical: '/compare/integrative-vs-traditional-mental-health-treatment' },
  openGraph: {
    title: 'Integrative Psychiatry vs. Traditional Mental Health Treatment',
    description: 'Compare integrative psychiatry and traditional mental health treatment side-by-side. Understand effectiveness, costs, side effects, and which approach is right for you.',
    url: 'https://jrosewellness.com/compare/integrative-vs-traditional-mental-health-treatment',
    siteName: 'JROSE WELLNESS',
    type: 'website',
    images: [{ url: '/og-image.png', width: 1200, height: 630 }]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Integrative Psychiatry vs. Traditional Mental Health Treatment',
    description: 'Compare integrative psychiatry and traditional mental health treatment side-by-side. Understand effectiveness, costs, side effects, and which approach is right for you.',
    images: ['/og-image.png']
  }
}

export default function IntegrativeVsTraditionalPage() {
  return (
    <main className="min-h-screen">
      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] py-24 text-white">
        <div className="max-w-5xl mx-auto px-6">
          <nav className="flex items-center gap-2 text-sm mb-8 text-white/80">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span>›</span>
            <Link href="/resources" className="hover:text-white transition-colors">Resources</Link>
            <span>›</span>
            <span className="text-white">Comparison</span>
          </nav>
          <h1 className="font-cormorant text-5xl md:text-6xl font-light text-center max-w-4xl mx-auto leading-tight">
            Integrative Psychiatry vs. Traditional Mental Health Treatment
          </h1>
          <p className="text-xl text-center mt-6 text-white/90 max-w-3xl mx-auto">
            A comprehensive comparison to help you make an informed decision about your mental health care
          </p>
        </div>
      </section>

      <section className="bg-[var(--color-cream)] py-24">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="font-cormorant text-4xl md:text-5xl text-[var(--color-ink)] text-center mb-12 animate-fade-up">
            Side-by-Side Comparison
          </h2>
          
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden animate-fade-up">
            <div className="grid grid-cols-3 bg-[var(--color-primary)] text-white">
              <div className="p-6 font-semibold">Category</div>
              <div className="p-6 font-semibold border-l border-white/20">Integrative Psychiatry</div>
              <div className="p-6 font-semibold border-l border-white/20">Traditional Treatment</div>
            </div>
            
            <div className="grid grid-cols-3 border-b border-[var(--color-border)]">
              <div className="p-6 font-semibold text-[var(--color-ink)] bg-[var(--color-light)]">Approach</div>
              <div className="p-6 border-l border-[var(--color-border)]">Whole-person: mind, body, spirit, lifestyle, nutrition, and environment</div>
              <div className="p-6 border-l border-[var(--color-border)]">Symptom-focused: primarily medication and/or talk therapy</div>
            </div>

            <div className="grid grid-cols-3 border-b border-[var(--color-border)] bg-[var(--color-cream)]">
              <div className="p-6 font-semibold text-[var(--color-ink)] bg-[var(--color-light)]">Treatment Methods</div>
              <div className="p-6 border-l border-[var(--color-border)]">Medication, therapy, nutrition, supplements, lifestyle changes, mindfulness, stress management</div>
              <div className="p-6 border-l border-[var(--color-border)]">Primarily medication and psychotherapy (CBT, DBT, etc.)</div>
            </div>

            <div className="grid grid-cols-3 border-b border-[var(--color-border)]">
              <div className="p-6 font-semibold text-[var(--color-ink)] bg-[var(--color-light)]">Effectiveness</div>
              <div className="p-6 border-l border-[var(--color-border)]">High for chronic conditions; addresses root causes and long-term wellness</div>
              <div className="p-6 border-l border-[var(--color-border)]">Effective for acute symptoms; well-studied for specific diagnoses</div>
            </div>

            <div className="grid grid-cols-3 border-b border-[var(--color-border)] bg-[var(--color-cream)]">
              <div className="p-6 font-semibold text-[var(--color-ink)] bg-[var(--color-light)]">Side Effects</div>
              <div className="p-6 border-l border-[var(--color-border)]">Minimal; natural interventions may have fewer adverse effects</div>
              <div className="p-6 border-l border-[var(--color-border)]">Medication side effects common; may include weight gain, fatigue, sexual dysfunction</div>
            </div>

            <div className="grid grid-cols-3 border-b border-[var(--color-border)]">
              <div className="p-6 font-semibold text-[var(--color-ink)] bg-[var(--color-light)]">Time Commitment</div>
              <div className="p-6 border-l border-[var(--color-border)]">Moderate to high; requires active participation in lifestyle changes</div>
              <div className="p-6 border-l border-[var(--color-border)]">Lower initially; primarily medication management appointments</div>
            </div>

            <div className="grid grid-cols-3 border-b border-[var(--color-border)] bg-[var(--color-cream)]">
              <div className="p-6 font-semibold text-[var(--color-ink)] bg-[var(--color-light)]">Cost</div>
              <div className="p-6 border-l border-[var(--color-border)]">Variable; may include supplements and alternative therapies; long-term savings from prevention</div>
              <div className="p-6 border-l border-[var(--color-border)]">Often covered by insurance; medication and therapy copays</div>
            </div>

            <div className="grid grid-cols-3">
              <div className="p-6 font-semibold text-[var(--color-ink)] bg-[var(--color-light)]">Best For</div>
              <div className="p-6 border-l border-[var(--color-border)]">Chronic conditions, treatment-resistant cases, those seeking holistic wellness</div>
              <div className="p-6 border-l border-[var(--color-border)]">Acute episodes, severe symptoms requiring immediate intervention</div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="max-w-4xl mx-auto px-6">
          <div className="space-y-16">
            <div className="animate-fade-up">
              <h2 className="font-cormorant text-4xl text-[var(--color-ink)] mb-6">
                Understanding Integrative Psychiatry
              </h2>
              <p className="text-lg text-[var(--color-muted)] mb-4 leading-relaxed">
                Integrative psychiatry is a comprehensive approach that combines conventional psychiatric treatment with evidence-based complementary therapies. Rather than viewing mental health conditions in isolation, integrative practitioners examine the interconnected systems of the body—including nutrition, gut health, hormones, sleep, stress, and environmental factors—that influence mental well-being.
              </p>
              <p className="text-lg text-[var(--color-muted)] mb-4 leading-relaxed">
                This approach recognizes that mental health is deeply connected to physical health. Research increasingly shows that inflammation, nutritional deficiencies, hormonal imbalances, and gut microbiome disruption can all contribute to conditions like depression, anxiety, and cognitive decline. Integrative psychiatry addresses these underlying factors while also utilizing medication and therapy when appropriate.
              </p>
              <p className="text-lg text-[var(--color-muted)] leading-relaxed">
                Typical integrative treatment plans may include psychiatric medication (when needed), psychotherapy, nutritional counseling, targeted supplementation, stress management techniques, exercise protocols, and sleep optimization. The goal is not just symptom relief, but sustainable mental wellness and prevention of future episodes.
              </p>
            </div>

            <div className="animate-fade-up">
              <h2 className="font-cormorant text-4xl text-[var(--color-ink)] mb-6">
                Understanding Traditional Mental Health Treatment
              </h2>
              <p className="text-lg text-[var(--color-muted)] mb-4 leading-relaxed">
                Traditional mental health treatment primarily relies on two evidence-based pillars: psychiatric medication and psychotherapy. This approach has decades of research supporting its effectiveness for a wide range of mental health conditions, from major depression and bipolar disorder to anxiety disorders and schizophrenia.
              </p>
              <p className="text-lg text-[var(--color-muted)] mb-4 leading-relaxed">
                Medication management typically involves antidepressants, anti-anxiety medications, mood stabilizers, or antipsychotics, depending on the diagnosis. These medications work by altering neurotransmitter activity in the brain and have proven effective for millions of patients. Psychotherapy approaches like cognitive behavioral therapy (CBT), dialectical behavior therapy (DBT), and interpersonal therapy help patients develop coping skills, change unhelpful thought patterns, and process difficult emotions.
              </p>
              <p className="text-lg text-[var(--color-muted)] leading-relaxed">
                Traditional treatment excels at providing rapid symptom relief for acute mental health crises and has well-established protocols for specific diagnoses. It's particularly effective when patients need immediate stabilization or when symptoms are severe enough to significantly impair daily functioning. Most traditional treatments are covered by insurance, making them accessible to a broader population.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="max-w-3xl mx-auto px-6">
          <div className="bg-[var(--color-light)] rounded-2xl p-12 animate-fade-up">
            <h2 className="font-cormorant text-4xl text-[var(--color-ink)] mb-8 text-center">
              How to Decide Which Approach Is Right for You
            </h2>

            <div className="space-y-10">
              <div>
                <h3 className="text-2xl font-semibold text-[var(--color-ink)] mb-6 flex items-center gap-3">
                  <svg className="w-8 h-8 text-[var(--color-accent)] flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  Choose Integrative Psychiatry If:
                </h3>
                <ul className="space-y-4 ml-11">
                  <li className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>
                    <span className="text-[var(--color-muted)]">You have chronic or treatment-resistant mental health conditions that haven't responded well to traditional approaches</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>
                    <span className="text-[var(--color-muted)]">You're interested in addressing root causes and optimizing overall wellness, not just managing symptoms</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>
                    <span className="text-[var(--color-muted)]">You experience significant medication side effects or want to minimize pharmaceutical interventions</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>
                    <span className="text-[var(--color-muted)]">You're willing to make lifestyle changes and actively participate in your healing process</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>
                    <span className="text-[var(--color-muted)]">You have co-occurring physical health issues that may be connected to your mental health</span>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-2xl font-semibold text-[var(--color-ink)] mb-6 flex items-center gap-3">
                  <svg className="w-8 h-8 text-[var(--color-primary)] flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  Choose Traditional Treatment If:
                </h3>
                <ul className="space-y-4 ml-11">
                  <li className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>
                    <span className="text-[var(--color-muted)]">You're experiencing a mental health crisis or severe symptoms that require immediate stabilization</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>
                    <span className="text-[var(--color-muted)]">You have a newly diagnosed mental health condition and want to start with evidence-based first-line treatments</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>
                    <span className="text-[var(--color-muted)]">Insurance coverage and out-of-pocket costs are a primary concern</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>
                    <span className="text-[var(--color-muted)]">You prefer a more straightforward treatment approach with established protocols</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>
                    <span className="text-[var(--color-muted)]">You have limited time or capacity to engage in extensive lifestyle modifications</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white rounded-xl p-8 border-2 border-[var(--color-accent)]">
                <p className="text-lg text-[var(--color-ink)] font-semibold mb-2">
                  Important Note:
                </p>
                <p className="text-[var(--color-muted)]">
                  These approaches are not mutually exclusive. Many patients benefit from starting with traditional treatment for immediate relief, then incorporating integrative strategies for long-term wellness. The best choice depends on your unique situation, symptoms, preferences, and goals.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[var(--color-cream)] py-20">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="font-cormorant text-4xl md:text-5xl text-[var(--color-ink)] text-center mb-12 animate-fade-up">
            Frequently Asked Questions
          </h2>

          <div className="space-y-4 animate-fade-up">
            <details className="bg-white rounded-xl shadow-sm overflow-hidden group">
              <summary className="p-6 cursor-pointer list-none font-semibold text-[var(--color-ink)] flex items-center justify-between hover:bg-[var(--color-light)] transition-colors">
                Can I combine integrative and traditional approaches?
                <svg className="w-6 h-6 text-[var(--color-accent)] transition-transform group-open:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                </svg>
              </summary>
              <div className="px-6 pb-6 text-[var(--color-muted)]">
                Absolutely. In fact, this is often the most effective approach. Many patients benefit from using psychiatric medication or therapy (traditional) while also optimizing nutrition, sleep, exercise, and stress management (integrative). A skilled integrative psychiatrist can help you create a personalized plan that draws from both approaches based on your specific needs and goals.
              </div>
            </details>

            <details className="bg-white rounded-xl shadow-sm overflow-hidden group">
              <summary className="p-6 cursor-pointer list-none font-semibold text-[var(--color-ink)] flex items-center justify-between hover:bg-[var(--color-light)] transition-colors">
                Is integrative psychiatry covered by insurance?
                <svg className="w-6 h-6 text-[var(--color-accent)] transition-transform group-open:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                </svg>
              </summary>
              <div className="px-6 pb-6 text-[var(--color-muted)]">
                Coverage varies. Many integrative psychiatrists accept insurance for psychiatric services like medication management and therapy. However, additional services such as nutritional counseling, advanced lab testing, or certain supplements may not be covered. It's best to check with your insurance provider and the practice directly. Some patients find the investment worthwhile for comprehensive, personalized care that addresses root causes.
              </div>
            </details>

            <details className="bg-white rounded-xl shadow-sm overflow-hidden group">
              <summary className="p-6 cursor-pointer list-none font-semibold text-[var(--color-ink)] flex items-center justify-between hover:bg-[var(--color-light)] transition-colors">
                How long does it take to see results with integrative psychiatry?
                <svg className="w-6 h-6 text-[var(--color-accent)] transition-transform group-open:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                </svg>
              </summary>
              <div className="px-6 pb-6 text-[var(--color-muted)]">
                The timeline varies depending on your condition and the interventions used. Some patients notice improvements in energy, sleep, or mood within 2-4 weeks as they address nutritional deficiencies or begin stress management practices. More significant changes typically occur over 3-6 months as lifestyle modifications take effect and underlying imbalances are corrected. Integrative psychiatry focuses on sustainable, long-term wellness rather than quick fixes.
              </div>
            </details>

            <details className="bg-white rounded-xl shadow-sm overflow-hidden group">
              <summary className="p-6 cursor-pointer list-none font-semibold text-[var(--color-ink)] flex items-center justify-between hover:bg-[var(--color-light)] transition-colors">
                Will I still need medication with an integrative approach?
                <svg className="w-6 h-6 text-[var(--color-accent)] transition-transform group-open:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                </svg>
              </summary>
              <div className="px-6 pb-6 text-[var(--color-muted)]">
                It depends on your individual situation. Integrative psychiatry doesn't oppose medication—it views it as one tool in a comprehensive toolkit. Some patients may be able to reduce or eventually discontinue medication as they address underlying factors and build resilience through lifestyle changes. Others may continue medication while optimizing other aspects of health. The goal is to use the minimum effective intervention needed for your wellbeing, determined through careful assessment and monitoring.
              </div>
            </details>

            <details className="bg-white rounded-xl shadow-sm overflow-hidden group">
              <summary className="p-6 cursor-pointer list-none font-semibold text-[var(--color-ink)] flex items-center justify-between hover:bg-[var(--color-light)] transition-colors">
                What if I'm in crisis—should I wait for an integrative approach?
                <svg className="w-6 h-6 text-[var(--color-accent)] transition-transform group-open:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                </svg>
              </summary>
              <div className="px-6 pb-6 text-[var(--color-muted)]">
                No. If you're experiencing a mental health crisis, severe suicidal thoughts, or symptoms that significantly impair your ability to function, seek immediate traditional psychiatric care. This may include emergency services, intensive outpatient programs, or rapid medication stabilization. Integrative approaches work best for ongoing care, chronic conditions, and prevention—not acute crises. Once stabilized, you can explore integrative options to support long-term wellness and prevent future episodes.
              </div>
            </details>
          </div>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <div className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] rounded-2xl p-12 text-white animate-fade-up">
            <svg className="w-16 h-16 mx-auto mb-6 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 01-2.555-.337A5.972 5.972 0 015.41 20.97a5.969 5.969 0 01-.474-.065 4.48 4.48 0 00.978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25z" />
            </svg>
            <h2 className="font-cormorant text-4xl mb-4">
              Not Sure Which Approach Is Right for You?
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Schedule a consultation to discuss your unique situation, symptoms, and goals. We'll help you understand your options and create a personalized treatment plan.
            </p>
            <Link
              href="/contact"
              className="inline-block bg-[var(--color-accent)] text-white px-8 py-4 rounded-lg font-semibold hover:bg-[var(--color-accent-dark)] transition-colors"
            >
              Discuss Your Options
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}