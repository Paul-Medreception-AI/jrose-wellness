import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'The Connection Between Chronic Stress and Mental Health',
  description: 'Discover how chronic stress impacts mental health, the science behind stress-related conditions, and evidence-based strategies to manage stress and improve emotional well-being.',
  alternates: { canonical: '/blog/the-connection-between-chronic-stress-and-mental-health' },
  openGraph: {
    title: 'The Connection Between Chronic Stress and Mental Health',
    description: 'Discover how chronic stress impacts mental health, the science behind stress-related conditions, and evidence-based strategies to manage stress and improve emotional well-being.',
    url: 'https://jrosewellness.com/blog/the-connection-between-chronic-stress-and-mental-health',
    siteName: 'JROSE WELLNESS',
    type: 'website',
    images: [{ url: '/og-image.png', width: 1200, height: 630 }]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'The Connection Between Chronic Stress and Mental Health',
    description: 'Discover how chronic stress impacts mental health, the science behind stress-related conditions, and evidence-based strategies to manage stress and improve emotional well-being.',
    images: ['/og-image.png']
  }
}

export default function ChronicStressMentalHealthPage() {
  return (
    <main>
      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] py-20 text-white">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-sm mb-6 text-white/80">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            {' › '}
            <Link href="/blog" className="hover:text-white transition-colors">Resources</Link>
            {' › '}
            <span>Article</span>
          </div>
          <div className="text-xs uppercase tracking-widest text-white/70 mb-4">Mental Health</div>
          <h1 className="font-cormorant text-5xl font-light leading-tight max-w-3xl mx-auto text-center">
            The Connection Between Chronic Stress and Mental Health
          </h1>
          <div className="flex justify-center items-center gap-6 mt-8 text-sm text-white/80">
            <span>Published January 2025</span>
            <span>•</span>
            <span>7 min read</span>
            <span>•</span>
            <span>Reviewed by JROSE WELLNESS</span>
          </div>
        </div>
      </section>

      <article className="bg-white py-20">
        <div className="max-w-3xl mx-auto px-6">
          <div className="text-[var(--color-ink)] leading-loose text-base">
            <p className="text-xl leading-relaxed mb-8">
              We all experience stress. A looming deadline, an unexpected bill, a difficult conversation—these moments trigger our body's natural stress response. But when stress becomes chronic, lingering day after day without relief, it doesn't just affect how we feel in the moment. It fundamentally changes how our brain functions, how our body responds to challenges, and how we experience life itself.
            </p>

            <p className="mb-8">
              The relationship between chronic stress and mental health is one of the most important—and most overlooked—aspects of modern wellness. Understanding this connection is the first step toward breaking the cycle and reclaiming your emotional well-being.
            </p>

            <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">
              What Is Chronic Stress?
            </h2>

            <p className="mb-6">
              Chronic stress is different from the acute stress we experience during a single event. Acute stress is your body's natural "fight or flight" response—a temporary surge of hormones like cortisol and adrenaline that helps you respond to immediate threats. Once the threat passes, your body returns to baseline.
            </p>

            <p className="mb-6">
              Chronic stress, by contrast, occurs when stressors persist over weeks, months, or even years. This might include ongoing work pressure, financial strain, relationship difficulties, caregiving responsibilities, or unresolved trauma. When the stress response system never fully shuts off, it begins to take a toll on both body and mind.
            </p>

            <p className="mb-8">
              The problem isn't just that we feel stressed—it's that prolonged activation of stress hormones creates lasting changes in brain structure and function, particularly in regions responsible for emotion regulation, memory, and decision-making.
            </p>

            <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">
              The Science Behind Stress and Mental Health
            </h2>

            <p className="mb-6">
              Research over the past two decades has revealed just how deeply chronic stress affects mental health. When cortisol levels remain elevated for extended periods, several critical changes occur in the brain:
            </p>

            <p className="mb-6">
              The hippocampus, which governs memory and emotional regulation, can actually shrink under chronic stress. This reduction in volume is associated with increased vulnerability to depression and anxiety. Meanwhile, the amygdala—the brain's fear and threat-detection center—becomes hyperactive, making you more reactive to perceived threats and less able to regulate emotional responses.
            </p>

            <p className="mb-6">
              The prefrontal cortex, responsible for executive function, planning, and impulse control, also suffers. Chronic stress impairs its ability to communicate effectively with other brain regions, making it harder to think clearly, make decisions, or maintain perspective during challenging situations.
            </p>

            <div className="bg-[var(--color-light)] border-l-4 border-[var(--color-primary)] p-6 my-8 text-[var(--color-ink)] italic text-xl font-cormorant">
              "Chronic stress doesn't just make you feel bad—it changes the architecture of your brain, creating a biological foundation for anxiety, depression, and other mental health conditions."
            </div>

            <p className="mb-8">
              Perhaps most concerning, chronic stress disrupts the production and regulation of neurotransmitters like serotonin, dopamine, and GABA, all of which play essential roles in mood, motivation, and emotional stability. This neurochemical disruption helps explain why chronic stress is a major risk factor for clinical depression, generalized anxiety disorder, and other mental health conditions.
            </p>

            <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">
              How Chronic Stress Manifests in Mental Health
            </h2>

            <p className="mb-6">
              The mental health effects of chronic stress can appear gradually, making them easy to dismiss or attribute to other causes. Common manifestations include:
            </p>

            <ul className="space-y-4 mb-8">
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span><strong>Persistent anxiety or worry</strong> that feels disproportionate to actual threats, often accompanied by physical symptoms like muscle tension, rapid heartbeat, or difficulty breathing</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span><strong>Low mood or depression</strong> characterized by loss of interest in activities, feelings of hopelessness, changes in appetite, or difficulty experiencing pleasure</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span><strong>Cognitive difficulties</strong> including brain fog, trouble concentrating, memory problems, or feeling mentally overwhelmed by simple tasks</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span><strong>Sleep disturbances</strong> such as insomnia, restless sleep, or waking frequently during the night, which further exacerbate mental health symptoms</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span><strong>Irritability or emotional reactivity</strong> where small frustrations feel overwhelming and relationships become strained</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span><strong>Physical symptoms</strong> including headaches, digestive issues, chronic pain, or a weakened immune system that makes you more susceptible to illness</span>
              </li>
            </ul>

            <p className="mb-8">
              These symptoms often create a vicious cycle. Chronic stress impairs mental health, which reduces your capacity to cope with stress, which in turn worsens both the stress and the mental health symptoms. Breaking this cycle requires intentional intervention and often professional support.
            </p>

            <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">
              Who Is Most Affected?
            </h2>

            <p className="mb-6">
              While anyone can experience chronic stress, certain populations face higher risk. Healthcare workers, caregivers, parents juggling multiple responsibilities, people in high-pressure careers, those facing financial insecurity, and individuals with a history of trauma or adverse childhood experiences are particularly vulnerable.
            </p>

            <p className="mb-8">
              It's also important to recognize that systemic factors—including discrimination, economic inequality, and lack of access to healthcare—can create ongoing stress that disproportionately affects marginalized communities. The mental health impacts of chronic stress cannot be fully understood without acknowledging these broader social determinants.
            </p>

            <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">
              Evidence-Based Strategies for Managing Chronic Stress
            </h2>

            <p className="mb-6">
              The good news is that the brain retains remarkable plasticity throughout life. With the right interventions, many of the changes caused by chronic stress can be reversed or mitigated. Evidence-based strategies include:
            </p>

            <ul className="space-y-4 mb-8">
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span><strong>Mindfulness and meditation:</strong> Regular practice has been shown to reduce cortisol levels, increase hippocampal volume, and improve emotional regulation</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span><strong>Physical activity:</strong> Exercise modulates stress hormones, promotes neuroplasticity, and releases endorphins that naturally improve mood</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span><strong>Sleep hygiene:</strong> Prioritizing consistent, quality sleep allows the brain to repair stress-related damage and reset the stress response system</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span><strong>Social connection:</strong> Meaningful relationships and social support buffer against the effects of stress and promote resilience</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span><strong>Professional therapy:</strong> Cognitive-behavioral therapy, EMDR, and other evidence-based approaches can help reframe thought patterns and process underlying stressors</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span><strong>Integrative approaches:</strong> Acupuncture, yoga, nutritional support, and other complementary therapies can support the body's stress response and promote overall well-being</span>
              </li>
            </ul>

            <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">
              When to Seek Professional Help
            </h2>

            <p className="mb-6">
              If chronic stress is affecting your daily functioning, relationships, or quality of life, it's time to reach out for professional support. Warning signs include persistent feelings of hopelessness, thoughts of self-harm, inability to complete daily tasks, withdrawal from activities and relationships, or physical symptoms that don't improve with rest.
            </p>

            <p className="mb-8">
              An integrative approach to wellness recognizes that mental health cannot be separated from physical health, lifestyle, environment, and social context. At JROSE WELLNESS, we work with patients to identify the root causes of chronic stress and develop personalized strategies that address both immediate symptoms and long-term resilience. You don't have to navigate this alone—support is available, and healing is possible.
            </p>
          </div>
        </div>

        <div className="bg-[var(--color-cream)] rounded-2xl p-8 max-w-3xl mx-auto my-12 flex gap-6 items-start">
          <div className="bg-[var(--color-light)] rounded-full w-16 h-16 flex-shrink-0 flex items-center justify-center">
            <svg className="w-8 h-8 text-[var(--color-primary)]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
            </svg>
          </div>
          <div>
            <div className="font-semibold text-[var(--color-ink)] mb-1">Reviewed by JROSE WELLNESS</div>
            <div className="text-[var(--color-muted)] text-sm leading-relaxed">
              Our team specializes in integrative wellness care, combining evidence-based medicine with holistic approaches to support your complete well-being in Fairfield, CT.
            </div>
          </div>
        </div>
      </article>

      <section className="bg-[var(--color-cream)] py-16">
        <div className="max-w-7xl mx-auto px-6">
          <h3 className="font-cormorant text-3xl text-[var(--color-ink)] mb-8 text-center">Related Resources</h3>
          <div className="grid md:grid-cols-3 gap-8">
            <Link href="/blog" className="group bg-white rounded-xl p-6 hover:shadow-lg transition-all">
              <div className="w-12 h-12 bg-[var(--color-light)] rounded-lg flex items-center justify-center mb-4 group-hover:bg-[var(--color-primary)] transition-colors">
                <svg className="w-6 h-6 text-[var(--color-primary)] group-hover:text-white transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
                </svg>
              </div>
              <h4 className="font-cormorant text-xl text-[var(--color-ink)] mb-2 group-hover:text-[var(--color-primary)] transition-colors">
                Browse All Articles
              </h4>
              <p className="text-[var(--color-muted)] text-sm leading-relaxed">
                Explore our complete library of wellness resources and patient education
              </p>
            </Link>

            <Link href="/contact" className="group bg-white rounded-xl p-6 hover:shadow-lg transition-all">
              <div className="w-12 h-12 bg-[var(--color-light)] rounded-lg flex items-center justify-center mb-4 group-hover:bg-[var(--color-primary)] transition-colors">
                <svg className="w-6 h-6 text-[var(--color-primary)] group-hover:text-white transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
                </svg>
              </div>
              <h4 className="font-cormorant text-xl text-[var(--color-ink)] mb-2 group-hover:text-[var(--color-primary)] transition-colors">
                Schedule a Consultation
              </h4>
              <p className="text-[var(--color-muted)] text-sm leading-relaxed">
                Take the first step toward better mental health and wellness
              </p>
            </Link>

            <Link href="/services" className="group bg-white rounded-xl p-6 hover:shadow-lg transition-all">
              <div className="w-12 h-12 bg-[var(--color-light)] rounded-lg flex items-center justify-center mb-4 group-hover:bg-[var(--color-primary)] transition-colors">
                <svg className="w-6 h-6 text-[var(--color-primary)] group-hover:text-white transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
                </svg>
              </div>
              <h4 className="font-cormorant text-xl text-[var(--color-ink)] mb-2 group-hover:text-[var(--color-primary)] transition-colors">
                Our Services
              </h4>
              <p className="text-[var(--color-muted)] text-sm leading-relaxed">
                Discover our integrative approach to wellness and mental health care
              </p>
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] py-20 text-white text-center">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="font-cormorant text-4xl font-light mb-4">Ready to Take the Next Step?</h2>
          <p className="text-lg text-white/90 mb-8">Our team is here to help.</p>
          <Link 
            href="/contact"
            className="inline-block bg-white text-[var(--color-primary)] px-8 py-3 rounded-lg font-semibold hover:bg-[var(--color-cream)] transition-colors"
          >
            Schedule Your Consultation
          </Link>
        </div>
      </section>
    </main>
  )
}