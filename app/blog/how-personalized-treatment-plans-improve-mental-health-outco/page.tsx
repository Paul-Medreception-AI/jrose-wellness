import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'How Personalized Treatment Plans Improve Mental Health Outcomes',
  description: 'Discover why personalized mental health treatment plans lead to better outcomes than one-size-fits-all approaches. Evidence-based insights on individualized care.',
  alternates: { canonical: '/blog/how-personalized-treatment-plans-improve-mental-health-outco' },
  openGraph: {
    title: 'How Personalized Treatment Plans Improve Mental Health Outcomes',
    description: 'Discover why personalized mental health treatment plans lead to better outcomes than one-size-fits-all approaches. Evidence-based insights on individualized care.',
    url: 'https://jrosewellness.com/blog/how-personalized-treatment-plans-improve-mental-health-outco',
    siteName: 'JROSE WELLNESS',
    type: 'website',
    images: [{ url: '/og-image.png', width: 1200, height: 630 }]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'How Personalized Treatment Plans Improve Mental Health Outcomes',
    description: 'Discover why personalized mental health treatment plans lead to better outcomes than one-size-fits-all approaches. Evidence-based insights on individualized care.',
    images: ['/og-image.png']
  }
}

export default function BlogPost() {
  return (
    <main>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] py-20">
        <div className="max-w-4xl mx-auto px-6">
          {/* Breadcrumb */}
          <div className="text-white/80 text-sm mb-6 text-center">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span className="mx-2">›</span>
            <Link href="/blog" className="hover:text-white transition-colors">Resources</Link>
            <span className="mx-2">›</span>
            <span className="text-white">Article</span>
          </div>

          {/* Category Tag */}
          <div className="text-xs uppercase tracking-widest text-white/70 mb-4 text-center">
            Mental Health
          </div>

          {/* Title */}
          <h1 className="font-cormorant text-5xl font-light leading-tight max-w-3xl mx-auto text-center text-white mb-8">
            How Personalized Treatment Plans Improve Mental Health Outcomes
          </h1>

          {/* Meta Information */}
          <div className="flex items-center justify-center gap-6 text-white/80 text-sm">
            <div className="flex items-center gap-2">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
              </svg>
              <span>January 2025</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>7 min read</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
              </svg>
              <span>JROSE WELLNESS Team</span>
            </div>
          </div>
        </div>
      </section>

      {/* Article Body */}
      <article className="bg-white py-20">
        <div className="max-w-3xl mx-auto px-6">
          {/* Opening Hook */}
          <p className="text-[var(--color-ink)] leading-loose text-lg mb-6">
            When it comes to mental health care, there is no universal solution that works for everyone. Each person carries a unique combination of experiences, biology, environment, and personal strengths. Yet for decades, mental health treatment often followed a standardized approach—the same medication at the same dose, the same therapy protocol, regardless of individual differences. Today, we know better. Personalized treatment plans that honor each person's unique needs are not just preferred—they're essential for meaningful, lasting improvement.
          </p>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            Whether you're navigating depression, anxiety, trauma, or another mental health challenge, understanding why personalization matters can empower you to seek care that truly fits. Let's explore how individualized treatment transforms outcomes and what it means for your journey toward wellness.
          </p>

          {/* Section 1 */}
          <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">
            What Is a Personalized Treatment Plan?
          </h2>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            A personalized treatment plan is a therapeutic strategy designed specifically for you. It takes into account your medical history, genetic factors, lifestyle, personal preferences, cultural background, and treatment goals. Rather than applying a one-size-fits-all protocol, your provider collaborates with you to build a plan that reflects who you are and what you need.
          </p>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            This approach may include a combination of psychotherapy, medication management, lifestyle modifications, nutritional support, mindfulness practices, and community resources. The key difference is that every element is chosen with your specific circumstances in mind, and the plan evolves as you progress.
          </p>

          {/* Section 2 */}
          <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">
            Why One-Size-Fits-All Approaches Fall Short
          </h2>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            Traditional mental health treatment often relies on standardized protocols. While these provide a helpful starting point, they fail to address the complexity of individual experience. What works for one person with anxiety may not work for another—even if their symptoms appear similar on the surface.
          </p>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            Research shows that genetic variations affect how people metabolize psychiatric medications. Two individuals prescribed the same antidepressant may have vastly different responses—one may experience significant relief, while the other sees no benefit or develops side effects. Additionally, cultural factors, trauma history, social support, and personal values all influence treatment effectiveness in ways that generic protocols cannot accommodate.
          </p>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            When treatment doesn't account for these differences, people often feel unheard, frustrated, or hopeless. They may abandon care altogether, believing that "nothing works" when, in reality, they simply haven't found the right approach yet.
          </p>

          {/* Pull Quote */}
          <blockquote className="bg-[var(--color-light)] border-l-4 border-[var(--color-primary)] p-6 my-8 text-[var(--color-ink)] italic text-xl font-cormorant">
            "Personalized care recognizes that healing is not a formula—it's a conversation between provider and patient, shaped by lived experience and guided by evidence."
          </blockquote>

          {/* Section 3 */}
          <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">
            The Evidence Behind Personalized Mental Health Care
          </h2>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            Multiple studies demonstrate that personalized treatment improves outcomes across a range of mental health conditions. Research published in leading psychiatric journals shows that individuals receiving tailored care experience faster symptom reduction, higher satisfaction, and better long-term wellness compared to those following standard protocols.
          </p>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            One landmark study found that using pharmacogenomic testing—which analyzes how your genes affect medication response—reduced trial-and-error prescribing and led to better results with fewer side effects. Similarly, therapy approaches that adapt to a person's learning style, trauma history, and cultural context show significantly higher engagement and completion rates.
          </p>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            Personalization also improves adherence. When people feel that their treatment respects their values and addresses their actual concerns, they're more likely to stay committed to the process. This consistency is crucial for mental health recovery, which often requires sustained effort over time.
          </p>

          {/* Section 4 */}
          <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">
            Key Components of an Effective Personalized Plan
          </h2>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            Building a truly personalized mental health treatment plan involves several important elements:
          </p>

          <div className="space-y-4 my-8">
            <div className="flex gap-3">
              <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <p className="text-[var(--color-ink)] leading-loose">
                <strong>Comprehensive Assessment:</strong> A thorough evaluation that includes mental health history, physical health, lifestyle factors, social environment, and personal goals.
              </p>
            </div>

            <div className="flex gap-3">
              <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <p className="text-[var(--color-ink)] leading-loose">
                <strong>Collaborative Goal-Setting:</strong> You and your provider work together to define what success looks like for you, ensuring the plan aligns with your priorities.
              </p>
            </div>

            <div className="flex gap-3">
              <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <p className="text-[var(--color-ink)] leading-loose">
                <strong>Evidence-Based Modalities:</strong> Treatment options supported by research, selected based on their fit for your specific condition and circumstances.
              </p>
            </div>

            <div className="flex gap-3">
              <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <p className="text-[var(--color-ink)] leading-loose">
                <strong>Regular Monitoring and Adjustment:</strong> Ongoing evaluation of progress with flexibility to modify the plan as needed based on your response.
              </p>
            </div>

            <div className="flex gap-3">
              <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <p className="text-[var(--color-ink)] leading-loose">
                <strong>Holistic Integration:</strong> Attention to sleep, nutrition, exercise, relationships, and stress management as core components of mental wellness.
              </p>
            </div>

            <div className="flex gap-3">
              <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <p className="text-[var(--color-ink)] leading-loose">
                <strong>Cultural Sensitivity:</strong> Recognition and respect for your cultural background, values, and beliefs in every aspect of care.
              </p>
            </div>
          </div>

          {/* Section 5 */}
          <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">
            Who Benefits Most from Personalized Treatment?
          </h2>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            While everyone deserves individualized care, certain groups especially benefit from personalized mental health treatment plans:
          </p>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            <strong>People who haven't responded to previous treatment.</strong> If standard approaches haven't worked for you, personalization can identify overlooked factors—such as undiagnosed medical conditions, medication interactions, or underlying trauma—that may be interfering with progress.
          </p>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            <strong>Individuals with complex or co-occurring conditions.</strong> When you're dealing with multiple diagnoses, such as depression and chronic pain, or anxiety and substance use, a personalized plan can address the interplay between these conditions rather than treating them in isolation.
          </p>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            <strong>Those with unique life circumstances.</strong> Parents, caregivers, shift workers, people with disabilities, or anyone navigating significant life transitions benefit from treatment that accommodates their specific daily realities and constraints.
          </p>

          {/* Section 6 */}
          <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">
            How to Advocate for Personalized Care
          </h2>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            You have the right to participate actively in your mental health treatment. Here are practical steps to ensure your care is truly personalized:
          </p>

          <div className="space-y-4 my-8">
            <div className="flex gap-3">
              <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <p className="text-[var(--color-ink)] leading-loose">
                Share your full story, including past treatment experiences, what has and hasn't worked, and any concerns about proposed interventions.
              </p>
            </div>

            <div className="flex gap-3">
              <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <p className="text-[var(--color-ink)] leading-loose">
                Ask questions about why specific treatments are recommended and request alternatives if something doesn't feel right for you.
              </p>
            </div>

            <div className="flex gap-3">
              <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <p className="text-[var(--color-ink)] leading-loose">
                Communicate openly about side effects, lack of progress, or life changes that might affect your treatment.
              </p>
            </div>

            <div className="flex gap-3">
              <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <p className="text-[var(--color-ink)] leading-loose">
                Seek providers who practice shared decision-making and view you as an active partner in your care.
              </p>
            </div>

            <div className="flex gap-3">
              <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <p className="text-[var(--color-ink)] leading-loose">
                Don't settle for a provider who dismisses your concerns or insists on a rigid treatment approach without explanation.
              </p>
            </div>
          </div>

          {/* Closing */}
          <p className="text-[var(--color-ink)] leading-loose text-base mb-6 mt-12">
            Mental health recovery is not a destination but a journey—one that requires compassion, patience, and the right support. Personalized treatment plans honor the fact that you are more than a diagnosis. You are a whole person with unique strengths, challenges, and aspirations.
          </p>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            If you've felt stuck, unheard, or frustrated by previous treatment experiences, know that there are options. A personalized approach can help you move forward with clarity, confidence, and hope. You deserve care that sees you, understands you, and walks alongside you toward lasting wellness.
          </p>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            If you're ready to explore a treatment plan designed specifically for you, we're here to help. Reach out today to begin the conversation.
          </p>
        </div>
      </article>

      {/* Author Box */}
      <section className="bg-white pb-20">
        <div className="max-w-3xl mx-auto px-6">
          <div className="bg-[var(--color-cream)] rounded-2xl p-8 flex gap-6 items-start animate-fade-up">
            <div className="bg-[var(--color-light)] rounded-full w-16 h-16 flex items-center justify-center flex-shrink-0">
              <svg className="w-8 h-8 text-[var(--color-primary)]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
              </svg>
            </div>
            <div>
              <div className="font-semibold text-[var(--color-ink)] mb-2">Reviewed by JROSE WELLNESS</div>
              <p className="text-[var(--color-muted)] text-sm leading-relaxed">
                Our team is committed to providing evidence-based, compassionate care that honors each individual's unique journey toward wellness. We believe in the power of personalized treatment to transform lives.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Related Articles */}
      <section className="bg-[var(--color-cream)] py-16">
        <div className="max-w-7xl mx-auto px-6">
          <h3 className="font-cormorant text-3xl text-[var(--color-ink)] mb-8 text-center">Related Resources</h3>
          
          <div className="grid md:grid-cols-3 gap-8">
            {/* Article 1 */}
            <Link href="/blog" className="bg-white rounded-xl p-6 hover:shadow-lg transition-all duration-300 group animate-fade-up">
              <div className="w-12 h-12 bg-[var(--color-light)] rounded-lg flex items-center justify-center mb-4 group-hover:bg-[var(--color-primary)] transition-colors">
                <svg className="w-6 h-6 text-[var(--color-primary)] group-hover:text-white transition-colors" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
                </svg>
              </div>
              <h4 className="font-cormorant text-xl text-[var(--color-ink)] mb-2 group-hover:text-[var(--color-primary)] transition-colors">
                Browse All Articles
              </h4>
              <p className="text-[var(--color-muted)] text-sm leading-relaxed mb-4">
                Explore our complete library of mental health and wellness resources.
              </p>
              <div className="text-[var(--color-accent)] text-sm font-medium flex items-center gap-2">
                View Resources
                <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </Link>

            {/* Article 2 */}
            <Link href="/blog" className="bg-white rounded-xl p-6 hover:shadow-lg transition-all duration-300 group animate-fade-up">
              <div className="w-12 h-12 bg-[var(--color-light)] rounded-lg flex items-center justify-center mb-4 group-hover:bg-[var(--color-primary)] transition-colors">
                <svg className="w-6 h-6 text-[var(--color-primary)] group-hover:text-white transition-colors" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23-.693L5 14.5m14.8.8l1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0112 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5" />
                </svg>
              </div>
              <h4 className="font-cormorant text-xl text-[var(--color-ink)] mb-2 group-hover:text-[var(--color-primary)] transition-colors">
                Treatment Approaches
              </h4>
              <p className="text-[var(--color-muted)] text-sm leading-relaxed mb-4">
                Learn about the integrative treatment options available at our practice.
              </p>
              <div className="text-[var(--color-accent)] text-sm font-medium flex items-center gap-2">
                Learn More
                <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </Link>

            {/* Article 3 */}
            <Link href="/contact" className="bg-white rounded-xl p-6 hover:shadow-lg transition-all duration-300 group animate-fade-up">
              <div className="w-12 h-12 bg-[var(--color-light)] rounded-lg flex items-center justify-center mb-4 group-hover:bg-[var(--color-primary)] transition-colors">
                <svg className="w-6 h-6 text-[var(--color-primary)] group-hover:text-white transition-colors" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 01-.825-.242m9.345-8.334a2.126 2.126 0 00-.476-.095 48.64 48.64 0 00-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0011.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155" />
                </svg>
              </div>
              <h4 className="font-cormorant text-xl text-[var(--color-ink)] mb-2 group-hover:text-[var(--color-primary)] transition-colors">
                Schedule a Consultation
              </h4>
              <p className="text-[var(--color-muted)] text-sm leading-relaxed mb-4">
                Ready to discuss your unique needs? Connect with our team today.
              </p>
              <div className="text-[var(--color-accent)] text-sm font-medium flex items-center gap-2">
                Get Started
                <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] py-20 text-white text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="font-cormorant text-4xl font-light mb-4">Ready to Take the Next Step?</h2>
          <p className="text-xl text-white/90 mb-8">Our team is here to help.</p>
          <Link 
            href="/contact"
            className="inline-block bg-white text-[var(--color-primary)] px-8 py-4 rounded-lg font-medium hover:bg-[var(--color-cream)] transition-colors duration-300"
          >
            Schedule Your Consultation
          </Link>
        </div>
      </section>
    </main>
  )
}