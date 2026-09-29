import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Understanding Mood Swings: When Are They a Concern?',
  description: 'Learn about mood swings, their causes, and when to seek professional help. Expert guidance on recognizing normal emotional changes versus concerning patterns.',
  alternates: { canonical: '/blog/understanding-mood-swings-when-are-they-a-concern' },
  openGraph: {
    title: 'Understanding Mood Swings: When Are They a Concern?',
    description: 'Learn about mood swings, their causes, and when to seek professional help. Expert guidance on recognizing normal emotional changes versus concerning patterns.',
    url: 'https://jrosewellness.com/blog/understanding-mood-swings-when-are-they-a-concern',
    siteName: 'JROSE WELLNESS',
    type: 'website',
    images: [{ url: '/og-image.png', width: 1200, height: 630 }]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Understanding Mood Swings: When Are They a Concern?',
    description: 'Learn about mood swings, their causes, and when to seek professional help. Expert guidance on recognizing normal emotional changes versus concerning patterns.',
    images: ['/og-image.png']
  }
}

export default function BlogPost() {
  return (
    <main>
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
            Understanding Mood Swings: When Are They a Concern?
          </h1>

          {/* Meta */}
          <div className="flex justify-center items-center gap-6 text-sm text-white/70">
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
              One moment you're feeling energized and optimistic, the next you're irritable or withdrawn. We all experience emotional ups and downs, but when do these natural fluctuations cross the line into something that warrants attention? Understanding the difference between normal mood variations and concerning patterns is crucial for maintaining your mental health and overall well-being.
            </p>
            <p className="mb-6">
              Mood swings affect millions of people, yet many struggle in silence, unsure whether their experiences are "normal" or signs of an underlying condition. This uncertainty can prevent people from seeking the support they need. Let's explore what mood swings really are, what causes them, and most importantly, when it's time to reach out for professional guidance.
            </p>
          </div>

          {/* Section 1 */}
          <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">
            What Are Mood Swings?
          </h2>
          <div className="text-[var(--color-ink)] leading-loose text-base mb-8">
            <p className="mb-6">
              Mood swings are rapid or intense changes in emotional state. They can range from feeling happy and energetic to sad, anxious, or irritable within a relatively short period. While everyone experiences mood changes in response to life events, mood swings are characterized by their intensity, frequency, or seeming disconnect from external circumstances.
            </p>
            <p className="mb-6">
              It's important to distinguish between normal emotional responses and problematic mood swings. Feeling sad after receiving disappointing news or excited about an upcoming event is a healthy emotional response. Mood swings become concerning when they're disproportionate to the situation, occur without clear triggers, interfere with daily functioning, or cause significant distress.
            </p>
            <p className="mb-6">
              The experience of mood swings varies widely among individuals. Some people describe feeling like they're on an emotional roller coaster, while others notice subtle shifts that accumulate over time. The key factor isn't necessarily the intensity alone, but rather how these changes impact your quality of life, relationships, and ability to function.
            </p>
          </div>

          {/* Section 2 */}
          <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">
            Common Causes of Mood Swings
          </h2>
          <div className="text-[var(--color-ink)] leading-loose text-base mb-8">
            <p className="mb-6">
              Mood swings can stem from numerous sources, ranging from temporary life circumstances to underlying medical conditions. Understanding potential causes is the first step toward addressing them effectively.
            </p>
            <p className="mb-6">
              <strong>Hormonal fluctuations</strong> are among the most common triggers. Many women experience mood changes related to their menstrual cycle, pregnancy, postpartum period, or menopause. Thyroid disorders can also significantly impact emotional stability, as thyroid hormones play a crucial role in regulating mood.
            </p>
            <p className="mb-6">
              <strong>Sleep disruption</strong> profoundly affects emotional regulation. Even a single night of poor sleep can increase irritability and emotional reactivity. Chronic sleep deprivation or disorders like sleep apnea create a vicious cycle where poor sleep worsens mood, which in turn makes quality sleep more elusive.
            </p>
            <p className="mb-6">
              <strong>Stress and life circumstances</strong> naturally influence our emotional state. Major life transitions, relationship difficulties, work pressure, or financial concerns can all contribute to mood instability. While these reactions are normal, persistent stress without adequate coping mechanisms can lead to more severe mood disturbances.
            </p>
            <p className="mb-6">
              <strong>Medical conditions</strong> sometimes manifest as mood changes. Diabetes, heart disease, neurological conditions, and autoimmune disorders can all affect emotional well-being. Certain medications, including some blood pressure drugs, steroids, and hormonal treatments, may also contribute to mood swings as a side effect.
            </p>
            <p className="mb-6">
              <strong>Mental health conditions</strong> frequently involve mood instability. Bipolar disorder is characterized by distinct periods of elevated and depressed mood. Depression, anxiety disorders, and borderline personality disorder can also present with significant mood fluctuations. Substance use, including alcohol and recreational drugs, disrupts brain chemistry and emotional regulation.
            </p>
          </div>

          {/* Pull Quote */}
          <blockquote className="bg-[var(--color-light)] border-l-4 border-[var(--color-primary)] p-6 my-8 text-[var(--color-ink)] italic text-xl font-cormorant">
            "The question isn't whether you experience mood changes—everyone does. The question is whether those changes are interfering with your ability to live the life you want."
          </blockquote>

          {/* Section 3 */}
          <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">
            When Should You Be Concerned?
          </h2>
          <div className="text-[var(--color-ink)] leading-loose text-base mb-8">
            <p className="mb-6">
              Determining when mood swings warrant professional attention isn't always straightforward, but several warning signs can help guide your decision. If you recognize multiple indicators in your own experience, it may be time to seek evaluation.
            </p>
            
            <div className="my-8">
              <div className="space-y-4">
                <div className="flex gap-3">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <p className="text-[var(--color-ink)] leading-relaxed">
                    <strong>Disruption of daily functioning:</strong> Your mood changes interfere with work performance, school, or your ability to complete routine tasks
                  </p>
                </div>
                <div className="flex gap-3">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <p className="text-[var(--color-ink)] leading-relaxed">
                    <strong>Relationship strain:</strong> Family members, friends, or colleagues express concern about your behavior or emotional unpredictability
                  </p>
                </div>
                <div className="flex gap-3">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <p className="text-[var(--color-ink)] leading-relaxed">
                    <strong>Impulsive or risky behavior:</strong> During mood swings, you engage in actions you later regret, such as excessive spending, substance use, or reckless decisions
                  </p>
                </div>
                <div className="flex gap-3">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <p className="text-[var(--color-ink)] leading-relaxed">
                    <strong>Extreme emotional intensity:</strong> Your mood shifts feel overwhelming and disproportionate to the situation at hand
                  </p>
                </div>
                <div className="flex gap-3">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <p className="text-[var(--color-ink)] leading-relaxed">
                    <strong>Duration and frequency:</strong> Mood swings occur frequently (multiple times per week or daily) over an extended period (several weeks or months)
                  </p>
                </div>
                <div className="flex gap-3">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <p className="text-[var(--color-ink)] leading-relaxed">
                    <strong>Thoughts of self-harm:</strong> Any thoughts of harming yourself or others require immediate professional intervention
                  </p>
                </div>
                <div className="flex gap-3">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <p className="text-[var(--color-ink)] leading-relaxed">
                    <strong>Physical symptoms:</strong> Accompanying changes in appetite, sleep patterns, energy levels, or unexplained physical discomfort
                  </p>
                </div>
              </div>
            </div>

            <p className="mb-6">
              Trust your instincts. If you feel that something isn't right, or if people you trust express concern, those perceptions are valid reasons to seek evaluation. Early intervention often leads to better outcomes and can prevent more serious problems from developing.
            </p>
          </div>

          {/* Section 4 */}
          <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">
            The Integrative Approach to Mood Stability
          </h2>
          <div className="text-[var(--color-ink)] leading-loose text-base mb-8">
            <p className="mb-6">
              Managing mood swings effectively often requires a comprehensive approach that addresses multiple aspects of your health and lifestyle. An integrative perspective considers the whole person—body, mind, and environment—rather than focusing solely on symptoms.
            </p>
            <p className="mb-6">
              <strong>Physical health foundations</strong> play a critical role in emotional stability. Regular exercise has been shown to improve mood regulation through the release of endorphins and other neurochemicals. Nutrition matters too—blood sugar fluctuations from irregular eating or high-sugar diets can mimic or worsen mood instability. Adequate hydration and limiting caffeine and alcohol consumption also contribute to more stable emotional states.
            </p>
            <p className="mb-6">
              <strong>Sleep hygiene</strong> deserves special attention. Establishing consistent sleep and wake times, creating a calming bedtime routine, and ensuring your sleep environment supports quality rest can dramatically improve mood stability. For many people, addressing sleep issues alone produces significant emotional benefits.
            </p>
            <p className="mb-6">
              <strong>Stress management techniques</strong> provide tools for navigating difficult emotions. Mindfulness practices, deep breathing exercises, progressive muscle relaxation, and meditation can help create space between an emotional trigger and your response. These skills become more effective with regular practice, building resilience over time.
            </p>
            <p className="mb-6">
              <strong>Professional support</strong> may include therapy, medication, or both, depending on the underlying cause. Cognitive-behavioral therapy (CBT) and dialectical behavior therapy (DBT) have strong evidence for helping people develop healthier emotional regulation skills. When appropriate, medication can help stabilize brain chemistry, making other interventions more effective.
            </p>
            <p className="mb-6">
              A comprehensive evaluation can identify contributing factors you might not have considered—such as vitamin deficiencies, hormonal imbalances, or undiagnosed medical conditions—that have effective treatments available.
            </p>
          </div>

          {/* Section 5 */}
          <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">
            Taking the First Step
          </h2>
          <div className="text-[var(--color-ink)] leading-loose text-base mb-8">
            <p className="mb-6">
              If you're experiencing concerning mood swings, know that seeking help is a sign of strength, not weakness. Many people delay reaching out because they minimize their struggles, fear judgment, or hope the problem will resolve on its own. While some mood disturbances do improve with lifestyle changes, persistent or severe mood swings often benefit from professional guidance.
            </p>
            <p className="mb-6">
              Start by documenting your experiences. Keep a simple mood journal noting when mood changes occur, their intensity, potential triggers, and how long they last. This information helps healthcare providers understand your patterns and make more accurate assessments.
            </p>
            <p className="mb-6">
              Be honest with yourself and your healthcare provider about all aspects of your health, including substance use, medications, supplements, sleep patterns, and stress levels. A complete picture enables more effective treatment recommendations tailored to your specific situation.
            </p>
            <p className="mb-6">
              Remember that finding the right treatment approach may take time. What works for one person may not work for another, and some strategies require adjustment or combination with other interventions. Patience and persistence, combined with professional guidance, offer the best path toward improved emotional well-being and quality of life.
            </p>
          </div>

          {/* Closing */}
          <div className="text-[var(--color-ink)] leading-loose text-base mt-12 pt-8 border-t border-[var(--color-border)]">
            <p className="mb-6">
              Mood swings don't have to control your life. With proper evaluation, support, and treatment, most people experience significant improvement in emotional stability and overall well-being. If you're struggling with mood swings that interfere with your daily life or cause you distress, reaching out to a healthcare provider is an important and courageous step toward feeling better.
            </p>
            <p>
              At JROSE WELLNESS in Fairfield, CT, we take a comprehensive approach to mental and emotional health, considering all factors that contribute to your well-being. We're here to help you understand what you're experiencing and develop a personalized plan for achieving greater emotional balance.
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
                Our team is committed to providing evidence-based information and compassionate guidance to support your journey toward optimal health and well-being. We believe in treating the whole person with integrative wellness care tailored to your unique needs.
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
            {/* Card 1 */}
            <Link href="/blog" className="bg-white rounded-xl p-6 hover:shadow-lg transition-all duration-300 group animate-fade-up">
              <div className="w-12 h-12 bg-[var(--color-light)] rounded-lg flex items-center justify-center mb-4 group-hover:bg-[var(--color-primary)] transition-colors">
                <svg className="w-6 h-6 text-[var(--color-primary)] group-hover:text-white transition-colors" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
                </svg>
              </div>
              <h4 className="font-cormorant text-xl text-[var(--color-ink)] mb-2 group-hover:text-[var(--color-primary)] transition-colors">
                Explore More Resources
              </h4>
              <p className="text-[var(--color-muted)] text-sm leading-relaxed">
                Browse our full library of articles on mental health, wellness, and integrative medicine approaches.
              </p>
            </Link>

            {/* Card 2 */}
            <Link href="/services" className="bg-white rounded-xl p-6 hover:shadow-lg transition-all duration-300 group animate-fade-up">
              <div className="w-12 h-12 bg-[var(--color-light)] rounded-lg flex items-center justify-center mb-4 group-hover:bg-[var(--color-primary)] transition-colors">
                <svg className="w-6 h-6 text-[var(--color-primary)] group-hover:text-white transition-colors" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
                </svg>
              </div>
              <h4 className="font-cormorant text-xl text-[var(--color-ink)] mb-2 group-hover:text-[var(--color-primary)] transition-colors">
                Our Services
              </h4>
              <p className="text-[var(--color-muted)] text-sm leading-relaxed">
                Learn about our comprehensive integrative wellness services and personalized care approach.
              </p>
            </Link>

            {/* Card 3 */}
            <Link href="/contact" className="bg-white rounded-xl p-6 hover:shadow-lg transition-all duration-300 group animate-fade-up">
              <div className="w-12 h-12 bg-[var(--color-light)] rounded-lg flex items-center justify-center mb-4 group-hover:bg-[var(--color-primary)] transition-colors">
                <svg className="w-6 h-6 text-[var(--color-primary)] group-hover:text-white transition-colors" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
                </svg>
              </div>
              <h4 className="font-cormorant text-xl text-[var(--color-ink)] mb-2 group-hover:text-[var(--color-primary)] transition-colors">
                Schedule a Consultation
              </h4>
              <p className="text-[var(--color-muted)] text-sm leading-relaxed">
                Ready to take the next step? Contact us to schedule a personalized consultation.
              </p>
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
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Our team is here to help you achieve greater emotional balance and well-being.
          </p>
          <Link 
            href="/contact"
            className="inline-block bg-[var(--color-accent)] text-white px-8 py-4 rounded-lg font-medium hover:bg-[var(--color-accent-dark)] transition-all duration-300 hover:shadow-lg hover:scale-105"
          >
            Contact Us Today
          </Link>
        </div>
      </section>
    </main>
  )
}