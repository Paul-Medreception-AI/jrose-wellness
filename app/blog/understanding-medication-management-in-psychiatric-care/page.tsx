import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Understanding Medication Management in Psychiatric Care',
  description: 'Learn how psychiatric medication management works, when it is needed, and what to expect. Evidence-based guidance on finding the right treatment approach for mental health.',
  alternates: { canonical: '/blog/understanding-medication-management-in-psychiatric-care' },
  openGraph: {
    title: 'Understanding Medication Management in Psychiatric Care',
    description: 'Learn how psychiatric medication management works, when it is needed, and what to expect. Evidence-based guidance on finding the right treatment approach for mental health.',
    url: 'https://jrosewellness.com/blog/understanding-medication-management-in-psychiatric-care',
    siteName: 'JROSE WELLNESS',
    type: 'website',
    images: [{ url: '/og-image.png', width: 1200, height: 630 }]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Understanding Medication Management in Psychiatric Care',
    description: 'Learn how psychiatric medication management works, when it is needed, and what to expect. Evidence-based guidance on finding the right treatment approach for mental health.',
    images: ['/og-image.png']
  }
}

export default function BlogPost() {
  return (
    <main className="min-h-screen bg-white">
      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] py-20 text-white">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-sm text-white/80 mb-6 text-center">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span className="mx-2">›</span>
            <Link href="/blog" className="hover:text-white transition-colors">Resources</Link>
            <span className="mx-2">›</span>
            <span>Article</span>
          </div>

          <div className="text-xs uppercase tracking-widest text-white/70 mb-4 text-center">
            Mental Health
          </div>

          <h1 className="font-cormorant text-5xl font-light leading-tight max-w-3xl mx-auto text-center mb-8">
            Understanding Medication Management in Psychiatric Care
          </h1>

          <div className="flex items-center justify-center gap-6 text-sm text-white/80">
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
              </svg>
              <span>Published 2025</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>7 min read</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
              </svg>
              <span>JROSE WELLNESS Team</span>
            </div>
          </div>
        </div>
      </section>

      <article className="bg-white py-20">
        <div className="max-w-3xl mx-auto px-6">
          <div className="text-[var(--color-ink)] leading-loose text-base mb-8">
            <p className="mb-6">
              If you have been struggling with anxiety, depression, or another mental health condition, your provider may have mentioned medication as part of your treatment plan. For many people, this recommendation brings a mix of emotions—hope for relief, but also questions and concerns. How do psychiatric medications work? What can you expect? And how do you know if medication is right for you?
            </p>
            <p className="mb-6">
              Medication management in psychiatric care is a collaborative, evidence-based process designed to help you find the most effective treatment with the fewest side effects. It is not about simply prescribing a pill and sending you on your way. Rather, it is an ongoing partnership between you and your provider to optimize your mental health and quality of life.
            </p>
          </div>

          <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">
            What Is Psychiatric Medication Management?
          </h2>
          <div className="text-[var(--color-ink)] leading-loose text-base mb-8">
            <p className="mb-6">
              Psychiatric medication management is the comprehensive process of prescribing, monitoring, and adjusting medications used to treat mental health conditions. This includes antidepressants, anti-anxiety medications, mood stabilizers, antipsychotics, and stimulants, among others.
            </p>
            <p className="mb-6">
              The process begins with a thorough evaluation of your symptoms, medical history, current medications, and personal goals. Your provider will discuss the potential benefits and risks of medication, helping you make an informed decision about whether it is the right choice for you.
            </p>
            <p className="mb-6">
              Once you begin medication, your provider will monitor your response closely, adjusting dosages or trying different medications as needed. This is not a one-size-fits-all approach—what works for one person may not work for another, and finding the right medication often requires patience and communication.
            </p>
          </div>

          <div className="bg-[var(--color-light)] border-l-4 border-[var(--color-primary)] p-6 my-8">
            <p className="text-[var(--color-ink)] italic text-xl font-cormorant">
              Effective medication management is about more than prescribing—it is about listening, adjusting, and partnering with patients to find what truly helps them thrive.
            </p>
          </div>

          <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">
            When Is Medication Appropriate?
          </h2>
          <div className="text-[var(--color-ink)] leading-loose text-base mb-8">
            <p className="mb-6">
              Medication can be an important part of treatment for many mental health conditions, but it is not always necessary. Your provider will consider several factors when determining whether medication might help:
            </p>
            <ul className="space-y-3 mb-6">
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-primary)] shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span><strong>Severity of symptoms:</strong> Moderate to severe symptoms that interfere with daily functioning often respond well to medication.</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-primary)] shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span><strong>Previous treatment response:</strong> If therapy alone has not provided sufficient relief, adding medication may be beneficial.</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-primary)] shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span><strong>Type of condition:</strong> Certain conditions, like bipolar disorder or schizophrenia, typically require medication as a core component of treatment.</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-primary)] shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span><strong>Safety concerns:</strong> When symptoms pose a risk to your safety or others, medication may be recommended urgently.</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-primary)] shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span><strong>Personal preference:</strong> Your comfort level and treatment goals are central to the decision-making process.</span>
              </li>
            </ul>
            <p className="mb-6">
              Many people find that a combination of medication and therapy provides the best outcomes. Medication can help stabilize symptoms, making it easier to engage in therapy and develop coping skills.
            </p>
          </div>

          <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">
            The Medication Management Process
          </h2>
          <div className="text-[var(--color-ink)] leading-loose text-base mb-8">
            <p className="mb-6">
              Understanding what to expect can help ease anxiety about starting medication. Here is what the process typically involves:
            </p>
            <p className="mb-4"><strong className="text-[var(--color-primary)]">Initial Assessment</strong></p>
            <p className="mb-6">
              Your provider will conduct a comprehensive evaluation, including your psychiatric history, current symptoms, medical conditions, allergies, and any medications or supplements you are taking. This helps identify the safest and most effective medication options.
            </p>
            <p className="mb-4"><strong className="text-[var(--color-primary)]">Education and Informed Consent</strong></p>
            <p className="mb-6">
              Before prescribing medication, your provider will explain how it works, potential benefits, common side effects, and what to watch for. You will have the opportunity to ask questions and discuss any concerns.
            </p>
            <p className="mb-4"><strong className="text-[var(--color-primary)]">Starting Medication</strong></p>
            <p className="mb-6">
              Most psychiatric medications are started at a low dose and gradually increased. This approach minimizes side effects and allows your provider to find the optimal dose for you. It may take several weeks to notice the full benefits.
            </p>
            <p className="mb-4"><strong className="text-[var(--color-primary)]">Ongoing Monitoring</strong></p>
            <p className="mb-6">
              Regular follow-up appointments are essential. Your provider will ask about your symptoms, any side effects, and how the medication is affecting your daily life. Lab tests may be ordered to monitor medication levels or check for potential complications.
            </p>
            <p className="mb-4"><strong className="text-[var(--color-primary)]">Adjustments and Optimization</strong></p>
            <p className="mb-6">
              If the initial medication does not provide adequate relief or causes bothersome side effects, your provider may adjust the dose, add another medication, or try a different one. This trial-and-adjustment period is normal and part of finding the right fit.
            </p>
          </div>

          <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">
            Common Concerns and Misconceptions
          </h2>
          <div className="text-[var(--color-ink)] leading-loose text-base mb-8">
            <p className="mb-6">
              Many people have understandable concerns about psychiatric medication. Let us address some of the most common:
            </p>
            <p className="mb-4"><strong className="text-[var(--color-primary)]">Will I become dependent or addicted?</strong></p>
            <p className="mb-6">
              Most psychiatric medications are not addictive. Antidepressants and mood stabilizers, for example, do not cause physical dependence. Some anti-anxiety medications can lead to dependence if used long-term, which is why providers prescribe them carefully and monitor use closely.
            </p>
            <p className="mb-4"><strong className="text-[var(--color-primary)]">Will medication change my personality?</strong></p>
            <p className="mb-6">
              Psychiatric medications are designed to alleviate symptoms, not change who you are. Many people report feeling more like themselves once their symptoms are better controlled. If you feel the medication is affecting you negatively, discuss this with your provider.
            </p>
            <p className="mb-4"><strong className="text-[var(--color-primary)]">What about side effects?</strong></p>
            <p className="mb-6">
              All medications can cause side effects, but many are mild and temporary. Your provider will work with you to minimize side effects and find a medication that you can tolerate well. Never hesitate to report side effects—there are almost always alternatives to try.
            </p>
            <p className="mb-4"><strong className="text-[var(--color-primary)]">Will I need to take medication forever?</strong></p>
            <p className="mb-6">
              Not necessarily. Some people benefit from medication for a specific period, while others find that long-term treatment is helpful for preventing relapse. The decision to continue or discontinue medication is made collaboratively based on your individual situation.
            </p>
          </div>

          <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">
            Tips for Successful Medication Management
          </h2>
          <div className="text-[var(--color-ink)] leading-loose text-base mb-8">
            <p className="mb-6">
              You play an active role in your treatment. Here are some ways to make medication management as effective as possible:
            </p>
            <ul className="space-y-3 mb-6">
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-primary)] shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span><strong>Be honest with your provider</strong> about your symptoms, side effects, and any concerns. Open communication is essential.</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-primary)] shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span><strong>Take medication as prescribed.</strong> Consistency is important for effectiveness. If you miss doses or have trouble remembering, let your provider know.</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-primary)] shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span><strong>Keep a symptom journal</strong> to track your mood, sleep, energy, and any side effects. This information helps your provider make informed adjustments.</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-primary)] shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span><strong>Attend all follow-up appointments,</strong> even if you are feeling better. Regular monitoring ensures your treatment remains effective.</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-primary)] shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span><strong>Never stop medication abruptly</strong> without consulting your provider. Some medications need to be tapered gradually to avoid withdrawal symptoms.</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-primary)] shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span><strong>Combine medication with healthy lifestyle habits</strong> like regular exercise, good sleep, balanced nutrition, and stress management.</span>
              </li>
            </ul>
          </div>

          <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">
            The Evidence Behind Medication Management
          </h2>
          <div className="text-[var(--color-ink)] leading-loose text-base mb-8">
            <p className="mb-6">
              Decades of research support the effectiveness of psychiatric medications for many mental health conditions. For example, antidepressants have been shown to be effective for moderate to severe depression, often working best when combined with psychotherapy. Mood stabilizers are essential for managing bipolar disorder, and antipsychotics play a critical role in treating schizophrenia and other psychotic disorders.
            </p>
            <p className="mb-6">
              The key to success is personalized care. What works for one person may not work for another due to genetic factors, co-existing medical conditions, and individual brain chemistry. This is why close collaboration with your provider is so important—together, you can find the approach that works best for you.
            </p>
          </div>

          <div className="text-[var(--color-ink)] leading-loose text-base mt-12 pt-8 border-t border-[var(--color-border)]">
            <p className="mb-6">
              Psychiatric medication management is a powerful tool for improving mental health, but it is only one part of a comprehensive treatment plan. Combined with therapy, lifestyle changes, and support from loved ones, medication can help you regain stability, improve your quality of life, and work toward your personal goals.
            </p>
            <p className="mb-6">
              If you are considering medication or have questions about your current treatment, do not hesitate to reach out. Professional guidance can help you navigate your options with confidence and clarity, ensuring that you receive care tailored to your unique needs.
            </p>
          </div>
        </div>

        <div className="bg-[var(--color-cream)] rounded-2xl p-8 max-w-3xl mx-auto my-12 flex gap-6 items-start">
          <div className="bg-[var(--color-light)] rounded-full w-16 h-16 shrink-0 flex items-center justify-center">
            <svg className="w-8 h-8 text-[var(--color-primary)]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
            </svg>
          </div>
          <div>
            <div className="font-semibold text-[var(--color-ink)] mb-2">Reviewed by JROSE WELLNESS</div>
            <p className="text-[var(--color-muted)] text-sm leading-relaxed">
              This article provides evidence-based information for educational purposes. It is not a substitute for professional medical advice, diagnosis, or treatment. Always consult with a qualified healthcare provider about your specific health needs.
            </p>
          </div>
        </div>
      </article>

      <section className="bg-[var(--color-cream)] py-16">
        <div className="max-w-7xl mx-auto px-6">
          <h3 className="font-cormorant text-3xl text-[var(--color-ink)] mb-8 text-center">Related Resources</h3>
          <div className="grid md:grid-cols-3 gap-8">
            <Link href="/services/mental-health" className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="bg-gradient-to-br from-[var(--color-light)] to-white p-8 border-b border-[var(--color-border)]">
                <svg className="w-12 h-12 text-[var(--color-primary)] mb-4" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                </svg>
                <h4 className="font-cormorant text-2xl text-[var(--color-ink)] mb-2 group-hover:text-[var(--color-primary)] transition-colors">Mental Health Services</h4>
                <p className="text-[var(--color-muted)] text-sm leading-relaxed mb-4">Comprehensive mental health care tailored to your needs.</p>
              </div>
              <div className="p-6">
                <div className="text-[var(--color-primary)] text-sm font-medium flex items-center gap-2 group-hover:gap-3 transition-all">
                  Learn More
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </Link>

            <Link href="/services/therapy" className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="bg-gradient-to-br from-[var(--color-light)] to-white p-8 border-b border-[var(--color-border)]">
                <svg className="w-12 h-12 text-[var(--color-primary)] mb-4" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 01-.825-.242m9.345-8.334a2.126 2.126 0 00-.476-.095 48.64 48.64 0 00-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0011.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155" />
                </svg>
                <h4 className="font-cormorant text-2xl text-[var(--color-ink)] mb-2 group-hover:text-[var(--color-primary)] transition-colors">Therapy & Counseling</h4>
                <p className="text-[var(--color-muted)] text-sm leading-relaxed mb-4">Evidence-based therapy to support your mental wellness journey.</p>
              </div>
              <div className="p-6">
                <div className="text-[var(--color-primary)] text-sm font-medium flex items-center gap-2 group-hover:gap-3 transition-all">
                  Learn More
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </Link>

            <Link href="/blog" className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="bg-gradient-to-br from-[var(--color-light)] to-white p-8 border-b border-[var(--color-border)]">
                <svg className="w-12 h-12 text-[var(--color-primary)] mb-4" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
                </svg>
                <h4 className="font-cormorant text-2xl text-[var(--color-ink)] mb-2 group-hover:text-[var(--color-primary)] transition-colors">Patient Resources</h4>
                <p className="text-[var(--color-muted)] text-sm leading-relaxed mb-4">Explore more articles and educational content.</p>
              </div>
              <div className="p-6">
                <div className="text-[var(--color-primary)] text-sm font-medium flex items-center gap-2 group-hover:gap-3 transition-all">
                  Browse All
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] py-20 text-white text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="font-cormorant text-4xl font-light mb-4">Ready to Take the Next Step?</h2>
          <p className="text-lg mb-8 text-white/90">Our team is here to help.</p>
          <Link 
            href="/contact"
            className="inline-block bg-white text-[var(--color-primary)] px-8 py-4 rounded-full font-medium hover:bg-[var(--color-cream)] transition-all duration-300 hover:scale-105 hover:shadow-xl"
          >
            Schedule a Consultation
          </Link>
        </div>
      </section>
    </main>
  )
}