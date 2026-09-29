import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Anxiety Medication vs. Non-Medication Approaches: Finding Your Path',
  description: 'Compare anxiety medication with non-medication approaches including therapy, lifestyle changes, and integrative care. Evidence-based comparison to help you choose the right treatment path.',
  alternates: { canonical: '/compare/anxiety-medication-vs-non-medication-approaches' },
  openGraph: {
    title: 'Anxiety Medication vs. Non-Medication Approaches: Finding Your Path',
    description: 'Compare anxiety medication with non-medication approaches including therapy, lifestyle changes, and integrative care. Evidence-based comparison to help you choose the right treatment path.',
    url: 'https://jrosewellness.com/compare/anxiety-medication-vs-non-medication-approaches',
    siteName: 'JROSE WELLNESS',
    type: 'website',
    images: [{ url: '/og-image.png', width: 1200, height: 630 }]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Anxiety Medication vs. Non-Medication Approaches: Finding Your Path',
    description: 'Compare anxiety medication with non-medication approaches including therapy, lifestyle changes, and integrative care. Evidence-based comparison to help you choose the right treatment path.',
    images: ['/og-image.png']
  }
}

export default function AnxietyComparisonPage() {
  return (
    <main className="min-h-screen">
      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] py-24 text-white text-center px-6">
        <div className="max-w-4xl mx-auto">
          <nav className="flex items-center justify-center gap-2 text-sm mb-8 text-[var(--color-light)]">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span>›</span>
            <Link href="/resources" className="hover:text-white transition-colors">Resources</Link>
            <span>›</span>
            <span className="text-white">Comparison</span>
          </nav>
          <h1 className="font-cormorant text-5xl md:text-6xl font-light leading-tight mb-6">
            Anxiety Medication vs. Non-Medication Approaches: Finding Your Path
          </h1>
          <p className="text-xl text-[var(--color-light)] max-w-2xl mx-auto">
            An evidence-based comparison to help you make an informed decision about your anxiety treatment
          </p>
        </div>
      </section>

      <section className="bg-[var(--color-cream)] py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-cormorant text-4xl font-light text-[var(--color-ink)] text-center mb-12 animate-fade-up">
            Side-by-Side Comparison
          </h2>
          
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden animate-fade-up">
            <div className="grid grid-cols-3 bg-[var(--color-primary)] text-white font-semibold text-center">
              <div className="p-4 border-r border-[var(--color-light)]">Category</div>
              <div className="p-4 border-r border-[var(--color-light)]">Medication</div>
              <div className="p-4">Non-Medication Approaches</div>
            </div>
            
            <div className="grid grid-cols-3 border-b border-[var(--color-border)]">
              <div className="p-4 bg-[var(--color-light)] font-semibold text-[var(--color-ink)]">Effectiveness</div>
              <div className="p-4 text-sm text-[var(--color-ink)]">60-70% symptom reduction in 4-6 weeks; rapid relief for acute symptoms</div>
              <div className="p-4 bg-[var(--color-cream)] text-sm text-[var(--color-ink)]">50-75% improvement over 8-12 weeks; builds long-term coping skills</div>
            </div>

            <div className="grid grid-cols-3 border-b border-[var(--color-border)]">
              <div className="p-4 bg-[var(--color-light)] font-semibold text-[var(--color-ink)]">Side Effects</div>
              <div className="p-4 text-sm text-[var(--color-ink)]">Common: nausea, sleep changes, weight gain, sexual dysfunction; withdrawal possible</div>
              <div className="p-4 bg-[var(--color-cream)] text-sm text-[var(--color-ink)]">Minimal to none; may require lifestyle adjustments; temporary discomfort during exposure work</div>
            </div>

            <div className="grid grid-cols-3 border-b border-[var(--color-border)]">
              <div className="p-4 bg-[var(--color-light)] font-semibold text-[var(--color-ink)]">Cost</div>
              <div className="p-4 text-sm text-[var(--color-ink)]">$10-200/month depending on insurance; ongoing monthly expense</div>
              <div className="p-4 bg-[var(--color-cream)] text-sm text-[var(--color-ink)]">$100-300/session (therapy); often covered by insurance; may decrease over time</div>
            </div>

            <div className="grid grid-cols-3 border-b border-[var(--color-border)]">
              <div className="p-4 bg-[var(--color-light)] font-semibold text-[var(--color-ink)]">Time Commitment</div>
              <div className="p-4 text-sm text-[var(--color-ink)]">5-10 minutes daily; monthly psychiatrist visits; requires consistent adherence</div>
              <div className="p-4 bg-[var(--color-cream)] text-sm text-[var(--color-ink)]">1-2 hours weekly (therapy, practice); daily lifestyle modifications; active participation required</div>
            </div>

            <div className="grid grid-cols-3">
              <div className="p-4 bg-[var(--color-light)] font-semibold text-[var(--color-ink)]">Best For</div>
              <div className="p-4 text-sm text-[var(--color-ink)]">Severe anxiety interfering with daily function; rapid stabilization needed; biological/genetic factors</div>
              <div className="p-4 bg-[var(--color-cream)] text-sm text-[var(--color-ink)]">Mild to moderate anxiety; preference for drug-free options; building long-term resilience; root cause work</div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="mb-16 animate-fade-up">
            <h2 className="font-cormorant text-4xl font-light text-[var(--color-ink)] mb-6">
              Anxiety Medication: What to Know
            </h2>
            <p className="text-lg text-[var(--color-muted)] mb-4 leading-relaxed">
              Anti-anxiety medications, including SSRIs, SNRIs, and benzodiazepines, work by altering brain chemistry to reduce anxiety symptoms. SSRIs and SNRIs increase serotonin and norepinephrine availability, typically taking 4-6 weeks to reach full effect. They're particularly effective for generalized anxiety disorder, panic disorder, and social anxiety.
            </p>
            <p className="text-lg text-[var(--color-muted)] mb-4 leading-relaxed">
              Benzodiazepines provide rapid relief within 30-60 minutes but carry risks of dependence and are generally prescribed for short-term use or acute episodes. Research shows that 60-70% of patients experience significant symptom reduction with appropriate medication, making them a valuable tool for moderate to severe anxiety.
            </p>
            <p className="text-lg text-[var(--color-muted)] leading-relaxed">
              The typical patient profile includes someone with severe symptoms that interfere with work, relationships, or daily activities, those with a family history of anxiety or depression, or individuals who need rapid stabilization. Side effects vary but may include nausea, sleep disturbances, weight changes, and sexual dysfunction. A trial period of 8-12 weeks is typically needed to assess effectiveness.
            </p>
          </div>

          <div className="animate-fade-up">
            <h2 className="font-cormorant text-4xl font-light text-[var(--color-ink)] mb-6">
              Non-Medication Approaches: What to Expect
            </h2>
            <p className="text-lg text-[var(--color-muted)] mb-4 leading-relaxed">
              Non-medication approaches encompass cognitive-behavioral therapy (CBT), exposure therapy, mindfulness practices, lifestyle modifications, and integrative wellness interventions. CBT, the gold standard psychotherapy for anxiety, teaches skills to identify and reframe anxious thoughts while gradually facing feared situations. Meta-analyses show 50-75% of patients achieve significant improvement, with effects lasting well beyond treatment completion.
            </p>
            <p className="text-lg text-[var(--color-muted)] mb-4 leading-relaxed">
              Integrative approaches add nutritional support, exercise protocols, sleep optimization, and stress reduction techniques. Research demonstrates that regular aerobic exercise reduces anxiety by 20-30%, while mindfulness meditation shows comparable effects to medication in some studies. These methods address root causes rather than just symptoms, building resilience and coping skills that provide lasting benefits.
            </p>
            <p className="text-lg text-[var(--color-muted)] leading-relaxed">
              Ideal candidates include those with mild to moderate anxiety, individuals who prefer to avoid medication, people committed to active participation in their healing, and those seeking to understand and address underlying patterns. Results typically emerge over 8-12 weeks with consistent practice. The active engagement required becomes a strength, as patients develop agency and confidence in managing their anxiety independently.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-white py-20 px-6">
        <div className="max-w-3xl mx-auto">
          <div className="bg-[var(--color-light)] rounded-2xl p-12 animate-fade-up">
            <h2 className="font-cormorant text-3xl font-light text-[var(--color-ink)] mb-8 text-center">
              How to Decide: A Framework
            </h2>
            
            <div className="mb-10">
              <h3 className="text-xl font-semibold text-[var(--color-ink)] mb-4 flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Consider medication if:
              </h3>
              <ul className="space-y-3 ml-9">
                <li className="flex items-start gap-3 text-[var(--color-muted)]">
                  <svg className="w-5 h-5 text-[var(--color-accent)] flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  Your anxiety is severe and significantly impairs daily functioning
                </li>
                <li className="flex items-start gap-3 text-[var(--color-muted)]">
                  <svg className="w-5 h-5 text-[var(--color-accent)] flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  You need rapid symptom relief to stabilize and function
                </li>
                <li className="flex items-start gap-3 text-[var(--color-muted)]">
                  <svg className="w-5 h-5 text-[var(--color-accent)] flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  You have a family history of anxiety or mood disorders
                </li>
                <li className="flex items-start gap-3 text-[var(--color-muted)]">
                  <svg className="w-5 h-5 text-[var(--color-accent)] flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  Non-medication approaches haven't provided sufficient relief
                </li>
                <li className="flex items-start gap-3 text-[var(--color-muted)]">
                  <svg className="w-5 h-5 text-[var(--color-accent)] flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  You're experiencing panic attacks, agoraphobia, or debilitating physical symptoms
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-[var(--color-ink)] mb-4 flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Consider non-medication approaches if:
              </h3>
              <ul className="space-y-3 ml-9">
                <li className="flex items-start gap-3 text-[var(--color-muted)]">
                  <svg className="w-5 h-5 text-[var(--color-accent)] flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  Your anxiety is mild to moderate and manageable most days
                </li>
                <li className="flex items-start gap-3 text-[var(--color-muted)]">
                  <svg className="w-5 h-5 text-[var(--color-accent)] flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  You prefer to avoid medication or have concerns about side effects
                </li>
                <li className="flex items-start gap-3 text-[var(--color-muted)]">
                  <svg className="w-5 h-5 text-[var(--color-accent)] flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  You're motivated to actively participate in therapy and lifestyle changes
                </li>
                <li className="flex items-start gap-3 text-[var(--color-muted)]">
                  <svg className="w-5 h-5 text-[var(--color-accent)] flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  You want to develop long-term coping skills and resilience
                </li>
                <li className="flex items-start gap-3 text-[var(--color-muted)]">
                  <svg className="w-5 h-5 text-[var(--color-accent)] flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  You're interested in addressing root causes and underlying patterns
                </li>
              </ul>
            </div>

            <div className="mt-10 p-6 bg-white rounded-xl border-l-4 border-[var(--color-accent)]">
              <p className="text-[var(--color-ink)] font-semibold mb-2">Remember: It's Not Either/Or</p>
              <p className="text-[var(--color-muted)]">
                Many people benefit from a combined approach—medication for initial stabilization while building skills through therapy and lifestyle changes, then tapering medication as non-medication strategies take effect. This integrated path is often the most effective.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[var(--color-cream)] py-20 px-6">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-cormorant text-4xl font-light text-[var(--color-ink)] text-center mb-12 animate-fade-up">
            Frequently Asked Questions
          </h2>
          
          <div className="space-y-4 animate-fade-up">
            <details className="bg-white rounded-xl p-6 shadow-sm group">
              <summary className="font-semibold text-[var(--color-ink)] cursor-pointer list-none flex items-center justify-between">
                How long does it take to see results with each approach?
                <svg className="w-5 h-5 text-[var(--color-accent)] transition-transform group-open:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <p className="mt-4 text-[var(--color-muted)] leading-relaxed">
                Medication typically shows initial effects within 2-4 weeks, with full benefits at 6-8 weeks. Benzodiazepines work within 30-60 minutes but are meant for short-term use. Non-medication approaches like CBT usually require 8-12 weeks of consistent practice to see significant improvement, though some people notice changes within a few sessions. Lifestyle modifications may show benefits within 4-6 weeks.
              </p>
            </details>

            <details className="bg-white rounded-xl p-6 shadow-sm group">
              <summary className="font-semibold text-[var(--color-ink)] cursor-pointer list-none flex items-center justify-between">
                Can I combine medication with therapy and other approaches?
                <svg className="w-5 h-5 text-[var(--color-accent)] transition-transform group-open:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <p className="mt-4 text-[var(--color-muted)] leading-relaxed">
                Absolutely. Research consistently shows that combining medication with therapy produces better outcomes than either approach alone. Many patients use medication for initial stabilization while learning coping skills through therapy, then taper medication as they build confidence in managing anxiety independently. This integrated approach is often ideal for moderate to severe anxiety.
              </p>
            </details>

            <details className="bg-white rounded-xl p-6 shadow-sm group">
              <summary className="font-semibold text-[var(--color-ink)] cursor-pointer list-none flex items-center justify-between">
                What if I start medication and want to stop later?
                <svg className="w-5 h-5 text-[var(--color-accent)] transition-transform group-open:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <p className="mt-4 text-[var(--color-muted)] leading-relaxed">
                Discontinuing anxiety medication should always be done gradually under medical supervision to minimize withdrawal symptoms and prevent relapse. A typical taper takes 4-8 weeks or longer, depending on the medication and duration of use. Many people successfully discontinue medication after 12-24 months once they've built strong coping skills and addressed underlying factors. Your prescriber will create a personalized tapering plan when you're ready.
              </p>
            </details>

            <details className="bg-white rounded-xl p-6 shadow-sm group">
              <summary className="font-semibold text-[var(--color-ink)] cursor-pointer list-none flex items-center justify-between">
                Are non-medication approaches as effective as medication?
                <svg className="w-5 h-5 text-[var(--color-accent)] transition-transform group-open:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <p className="mt-4 text-[var(--color-muted)] leading-relaxed">
                For mild to moderate anxiety, research shows that cognitive-behavioral therapy is as effective as medication, with the added benefit of lower relapse rates after treatment ends. Studies comparing CBT to SSRIs find similar short-term outcomes, but CBT provides lasting skills that continue to benefit patients years later. For severe anxiety, medication may provide faster initial relief, but adding therapy improves long-term outcomes significantly. The "best" approach depends on symptom severity, personal preferences, and individual circumstances.
              </p>
            </details>

            <details className="bg-white rounded-xl p-6 shadow-sm group">
              <summary className="font-semibold text-[var(--color-ink)] cursor-pointer list-none flex items-center justify-between">
                How do I know which approach is right for me?
                <svg className="w-5 h-5 text-[var(--color-accent)] transition-transform group-open:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <p className="mt-4 text-[var(--color-muted)] leading-relaxed">
                The right choice depends on your symptom severity, medical history, personal values, lifestyle, and treatment goals. A thorough evaluation with a qualified provider can help you weigh the benefits and drawbacks of each option for your unique situation. Consider factors like how much anxiety interferes with daily life, your comfort level with medication, time and resources available for therapy, and whether you've tried either approach before. At JROSE WELLNESS, we offer comprehensive assessments to help you make an informed decision aligned with your values and goals.
              </p>
            </details>
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] py-20 px-6">
        <div className="max-w-3xl mx-auto text-center animate-fade-up">
          <h2 className="font-cormorant text-4xl font-light text-white mb-6">
            Ready to Discuss Your Options?
          </h2>
          <p className="text-xl text-[var(--color-light)] mb-8 leading-relaxed">
            Let's create a personalized anxiety treatment plan that aligns with your values, lifestyle, and goals. Whether you're considering medication, therapy, integrative approaches, or a combination, we'll help you find your path forward.
          </p>
          <Link 
            href="/contact" 
            className="inline-flex items-center gap-2 bg-[var(--color-accent)] text-white px-8 py-4 rounded-full font-semibold hover:bg-[var(--color-accent-dark)] transition-all hover:gap-3 shadow-lg"
          >
            Schedule a Consultation
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
          <p className="text-[var(--color-light)] mt-6 text-sm">
            Serving Fairfield, CT and surrounding communities
          </p>
        </div>
      </section>
    </main>
  )
}