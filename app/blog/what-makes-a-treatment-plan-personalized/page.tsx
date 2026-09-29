import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'What Makes a Treatment Plan Personalized? | JROSE WELLNESS',
  description: 'Discover how personalized treatment plans address your unique health needs, lifestyle, and goals through integrative wellness care. Learn what makes healthcare truly individualized.',
  alternates: { canonical: '/blog/what-makes-a-treatment-plan-personalized' },
  openGraph: {
    title: 'What Makes a Treatment Plan Personalized? | JROSE WELLNESS',
    description: 'Discover how personalized treatment plans address your unique health needs, lifestyle, and goals through integrative wellness care. Learn what makes healthcare truly individualized.',
    url: 'https://jrosewellness.com/blog/what-makes-a-treatment-plan-personalized',
    siteName: 'JROSE WELLNESS',
    type: 'website',
    images: [{ url: '/og-image.png', width: 1200, height: 630 }]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'What Makes a Treatment Plan Personalized? | JROSE WELLNESS',
    description: 'Discover how personalized treatment plans address your unique health needs, lifestyle, and goals through integrative wellness care. Learn what makes healthcare truly individualized.',
    images: ['/og-image.png']
  }
}

export default function BlogPost() {
  return (
    <main>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] py-20 text-white">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-sm mb-6 text-white/80">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span className="mx-2">›</span>
            <Link href="/blog" className="hover:text-white transition-colors">Resources</Link>
            <span className="mx-2">›</span>
            <span>Article</span>
          </div>
          <div className="text-xs uppercase tracking-widest text-white/70 mb-4">
            Patient Education
          </div>
          <h1 className="font-cormorant text-5xl font-light leading-tight max-w-3xl mx-auto text-center mb-6">
            What Makes a Treatment Plan Personalized?
          </h1>
          <div className="flex items-center justify-center gap-6 text-sm text-white/80">
            <span>Published January 2025</span>
            <span>•</span>
            <span>7 min read</span>
            <span>•</span>
            <span>JROSE WELLNESS Team</span>
          </div>
        </div>
      </section>

      {/* Article Body */}
      <article className="bg-white py-20">
        <div className="max-w-3xl mx-auto px-6">
          <div className="text-[var(--color-ink)] leading-loose text-base animate-fade-up">
            <p className="mb-6 text-lg">
              You've sat through countless medical appointments where you felt like just another chart number. The doctor glances at your file, prescribes the standard protocol, and you're out the door in fifteen minutes. But your body, your health history, your lifestyle, and your goals aren't standard—so why should your treatment be?
            </p>
            
            <p className="mb-6">
              Personalized treatment planning represents a fundamental shift in healthcare: from one-size-fits-all protocols to care that recognizes you as a unique individual. It's the difference between being handed a generic pamphlet and receiving a roadmap designed specifically for your journey toward better health.
            </p>

            <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">
              Beyond the Diagnosis: Understanding Your Whole Story
            </h2>
            
            <p className="mb-6">
              A truly personalized treatment plan begins long before any prescription is written. It starts with understanding not just what's wrong, but who you are. Your medical history matters, certainly, but so does your work schedule, your family responsibilities, your cultural background, your previous experiences with healthcare, and what you hope to achieve.
            </p>

            <p className="mb-6">
              Two patients may receive the same diagnosis—chronic pain, anxiety, digestive issues—yet their paths to wellness will look entirely different. One might be a busy parent juggling childcare and a demanding career, needing solutions that fit into tight windows of time. Another might be recently retired with more flexibility but facing mobility challenges that require different considerations.
            </p>

            <p className="mb-6">
              Personalized care means your provider takes time to understand these nuances. It means they ask about your sleep patterns, stress levels, nutrition habits, support systems, and what you've already tried. Every piece of information helps build a more complete picture and a more effective plan.
            </p>

            <div className="bg-[var(--color-light)] border-l-4 border-[var(--color-primary)] p-6 my-8 italic text-xl font-cormorant text-[var(--color-ink)]">
              "True personalization means your treatment plan adapts to your life, not the other way around."
            </div>

            <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">
              The Core Elements of Personalized Treatment
            </h2>

            <p className="mb-6">
              What exactly transforms a standard treatment protocol into a personalized plan? Several key factors work together:
            </p>

            <div className="space-y-4 my-8">
              <div className="flex gap-3 items-start">
                <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <div>
                  <strong className="text-[var(--color-ink)]">Comprehensive Assessment:</strong> Going beyond symptoms to understand root causes, contributing factors, and your body's unique patterns
                </div>
              </div>
              <div className="flex gap-3 items-start">
                <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <div>
                  <strong className="text-[var(--color-ink)]">Collaborative Goal-Setting:</strong> Establishing realistic, meaningful objectives based on what matters most to you, not just clinical benchmarks
                </div>
              </div>
              <div className="flex gap-3 items-start">
                <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <div>
                  <strong className="text-[var(--color-ink)]">Multimodal Approaches:</strong> Combining various treatment modalities—medical, lifestyle, behavioral, complementary—tailored to your needs and preferences
                </div>
              </div>
              <div className="flex gap-3 items-start">
                <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <div>
                  <strong className="text-[var(--color-ink)]">Flexibility and Adaptation:</strong> Regular monitoring and adjustment as your body responds and your circumstances change
                </div>
              </div>
              <div className="flex gap-3 items-start">
                <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <div>
                  <strong className="text-[var(--color-ink)]">Patient Education:</strong> Empowering you with understanding of your condition and active participation in your own care
                </div>
              </div>
            </div>

            <p className="mb-6">
              Each element builds upon the others, creating a treatment experience that feels collaborative rather than prescriptive, dynamic rather than rigid.
            </p>

            <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">
              The Integrative Wellness Approach
            </h2>

            <p className="mb-6">
              Integrative wellness care takes personalization to another level by considering the interconnected systems of your body and life. Rather than treating symptoms in isolation, this approach recognizes that your physical health, mental wellbeing, nutrition, stress levels, sleep quality, and environment all influence one another.
            </p>

            <p className="mb-6">
              For example, chronic pain isn't just about the area that hurts—it's influenced by inflammation levels, sleep quality, stress hormones, movement patterns, and emotional wellbeing. A personalized integrative plan might combine targeted treatments for pain relief with stress management techniques, nutritional support to reduce inflammation, gentle movement to improve function, and sleep optimization strategies.
            </p>

            <p className="mb-6">
              This holistic view doesn't mean abandoning conventional medicine. Instead, it means using all available evidence-based tools—conventional and complementary—in a coordinated way that makes sense for your specific situation.
            </p>

            <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">
              Your Active Role in Personalized Care
            </h2>

            <p className="mb-6">
              Perhaps the most important aspect of personalized treatment is that you're not a passive recipient of care—you're an active participant. Your observations, feedback, and daily choices all contribute to the success of your treatment plan.
            </p>

            <p className="mb-6">
              This means being honest about what's working and what isn't. If a prescribed supplement upsets your stomach, if a recommended exercise causes pain, or if a lifestyle change feels impossible to maintain, speak up. These aren't failures—they're valuable information that helps refine your plan.
            </p>

            <p className="mb-6">
              It also means asking questions. Why is this treatment recommended? What are we trying to achieve? Are there alternatives? What should I expect? How will we know if it's working? A personalized plan should make sense to you, not remain a mystery written in medical jargon.
            </p>

            <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">
              Evidence and Outcomes: Does Personalization Work?
            </h2>

            <p className="mb-6">
              Research consistently shows that personalized treatment approaches lead to better outcomes. Studies have found that patients with individualized care plans show improved adherence to treatment, better symptom management, higher satisfaction with care, and more sustainable long-term results.
            </p>

            <p className="mb-6">
              One study published in the Journal of General Internal Medicine found that patients who received personalized care tailored to their preferences and circumstances were significantly more likely to achieve their health goals compared to those receiving standard protocols. Another review in Patient Preference and Adherence demonstrated that involving patients in treatment decisions led to better health outcomes and reduced healthcare costs.
            </p>

            <p className="mb-6">
              The reason is straightforward: when treatment fits your life, addresses your specific needs, and aligns with your values, you're more likely to follow through with it. When you understand why you're doing something and how it connects to your goals, motivation follows naturally.
            </p>

            <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">
              Finding Care That Truly Fits
            </h2>

            <p className="mb-6">
              As you seek healthcare providers, look for signs of genuine personalization. Do they spend adequate time with you? Do they ask about your life beyond your symptoms? Do they explain their reasoning and welcome your input? Do they check in on how treatments are working and adjust as needed?
            </p>

            <p className="mb-6">
              You deserve more than assembly-line healthcare. You deserve a treatment plan that recognizes your individuality, respects your goals, and adapts to your unique needs. When care is truly personalized, you feel it—in the quality of communication, the thoughtfulness of recommendations, and ultimately, in the results.
            </p>

            <p className="mb-6">
              Your health journey is yours alone. The right treatment plan honors that truth, meeting you exactly where you are and supporting you toward where you want to be.
            </p>
          </div>
        </div>
      </article>

      {/* Author Box */}
      <div className="bg-white pb-20">
        <div className="max-w-3xl mx-auto px-6">
          <div className="bg-[var(--color-cream)] rounded-2xl p-8 flex gap-6 items-start animate-fade-up">
            <div className="bg-[var(--color-light)] rounded-full w-16 h-16 flex-shrink-0 flex items-center justify-center">
              <svg className="w-8 h-8 text-[var(--color-primary)]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
              </svg>
            </div>
            <div>
              <div className="font-semibold text-[var(--color-ink)] mb-2">
                Reviewed by JROSE WELLNESS
              </div>
              <p className="text-[var(--color-muted)] text-sm leading-relaxed">
                We are dedicated to providing evidence-based, compassionate care that addresses your unique health needs through integrative wellness approaches.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Related Articles */}
      <section className="bg-[var(--color-cream)] py-16">
        <div className="max-w-7xl mx-auto px-6">
          <h3 className="font-cormorant text-3xl text-[var(--color-ink)] mb-8 text-center">
            Related Resources
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            <Link href="/blog/integrative-approach-to-chronic-pain" className="bg-white rounded-xl p-6 hover:shadow-lg transition-all duration-300 group animate-fade-up">
              <div className="w-12 h-12 bg-[var(--color-light)] rounded-lg flex items-center justify-center mb-4 group-hover:bg-[var(--color-primary)] transition-colors">
                <svg className="w-6 h-6 text-[var(--color-primary)] group-hover:text-white transition-colors" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z" />
                </svg>
              </div>
              <h4 className="font-cormorant text-xl text-[var(--color-ink)] mb-2 group-hover:text-[var(--color-primary)] transition-colors">
                An Integrative Approach to Chronic Pain
              </h4>
              <p className="text-[var(--color-muted)] text-sm leading-relaxed">
                Explore how combining multiple treatment modalities can provide comprehensive relief.
              </p>
            </Link>

            <Link href="/blog/importance-of-patient-centered-care" className="bg-white rounded-xl p-6 hover:shadow-lg transition-all duration-300 group animate-fade-up">
              <div className="w-12 h-12 bg-[var(--color-light)] rounded-lg flex items-center justify-center mb-4 group-hover:bg-[var(--color-primary)] transition-colors">
                <svg className="w-6 h-6 text-[var(--color-primary)] group-hover:text-white transition-colors" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                </svg>
              </div>
              <h4 className="font-cormorant text-xl text-[var(--color-ink)] mb-2 group-hover:text-[var(--color-primary)] transition-colors">
                The Importance of Patient-Centered Care
              </h4>
              <p className="text-[var(--color-muted)] text-sm leading-relaxed">
                Learn why putting you at the center of healthcare decisions leads to better outcomes.
              </p>
            </Link>

            <Link href="/blog" className="bg-white rounded-xl p-6 hover:shadow-lg transition-all duration-300 group animate-fade-up">
              <div className="w-12 h-12 bg-[var(--color-light)] rounded-lg flex items-center justify-center mb-4 group-hover:bg-[var(--color-primary)] transition-colors">
                <svg className="w-6 h-6 text-[var(--color-primary)] group-hover:text-white transition-colors" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
                </svg>
              </div>
              <h4 className="font-cormorant text-xl text-[var(--color-ink)] mb-2 group-hover:text-[var(--color-primary)] transition-colors">
                Browse All Resources
              </h4>
              <p className="text-[var(--color-muted)] text-sm leading-relaxed">
                Explore our complete library of health and wellness articles.
              </p>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] py-20 text-white text-center">
        <div className="max-w-3xl mx-auto px-6 animate-fade-up">
          <h2 className="font-cormorant text-4xl font-light mb-4">
            Ready to Take the Next Step?
          </h2>
          <p className="text-xl mb-8 text-white/90">
            Our team is here to help.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-[var(--color-accent)] hover:bg-[var(--color-accent-dark)] text-white px-8 py-4 rounded-full font-medium transition-all duration-300 hover:gap-3"
          >
            <span>Schedule a Consultation</span>
            <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>
          </Link>
        </div>
      </section>
    </main>
  )
}