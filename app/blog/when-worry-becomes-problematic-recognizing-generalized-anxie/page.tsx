import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'When Worry Becomes Problematic: Recognizing Generalized Anxiety Disorder',
  description: 'Learn how to distinguish normal worry from generalized anxiety disorder (GAD), understand the symptoms, and discover when to seek professional help for persistent anxiety.',
  alternates: { canonical: '/blog/when-worry-becomes-problematic-recognizing-generalized-anxie' },
  openGraph: {
    title: 'When Worry Becomes Problematic: Recognizing Generalized Anxiety Disorder',
    description: 'Learn how to distinguish normal worry from generalized anxiety disorder (GAD), understand the symptoms, and discover when to seek professional help for persistent anxiety.',
    url: 'https://jrosewellness.com/blog/when-worry-becomes-problematic-recognizing-generalized-anxie',
    siteName: 'JROSE WELLNESS',
    type: 'website',
    images: [{ url: '/og-image.png', width: 1200, height: 630 }]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'When Worry Becomes Problematic: Recognizing Generalized Anxiety Disorder',
    description: 'Learn how to distinguish normal worry from generalized anxiety disorder (GAD), understand the symptoms, and discover when to seek professional help for persistent anxiety.',
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
          <h1 className="font-cormorant text-5xl font-light leading-tight max-w-3xl mx-auto text-center mb-6">
            When Worry Becomes Problematic: Recognizing Generalized Anxiety Disorder
          </h1>

          {/* Meta */}
          <div className="flex justify-center items-center gap-6 text-sm text-white/70">
            <span>Published January 2025</span>
            <span>•</span>
            <span>7 min read</span>
            <span>•</span>
            <span>Dr. WELLNESS Team</span>
          </div>
        </div>
      </section>

      {/* Article Body */}
      <article className="bg-white py-20">
        <div className="max-w-3xl mx-auto px-6">
          {/* Opening Hook */}
          <div className="text-[var(--color-ink)] leading-loose text-base mb-8">
            <p className="mb-6">
              Everyone worries. It's a natural human response to life's uncertainties—job interviews, family health, financial decisions. But for millions of Americans, worry isn't just an occasional visitor; it's a constant, exhausting companion that colors every aspect of daily life. When does normal concern cross the line into something more serious? Understanding the distinction between everyday anxiety and Generalized Anxiety Disorder (GAD) can be the first step toward reclaiming peace of mind.
            </p>
          </div>

          {/* Section 1 */}
          <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">
            What Is Generalized Anxiety Disorder?
          </h2>
          <div className="text-[var(--color-ink)] leading-loose text-base mb-8">
            <p className="mb-6">
              Generalized Anxiety Disorder is characterized by persistent, excessive worry about a variety of topics, events, or activities. Unlike situational anxiety that resolves once a stressor passes, GAD involves chronic worry that persists for at least six months and is difficult to control. The worry in GAD is often disproportionate to the actual likelihood or impact of the feared events.
            </p>
            <p className="mb-6">
              People with GAD often describe their minds as constantly racing, jumping from one worry to another—finances, health, work performance, relationships, or even minor matters like household chores. This persistent state of apprehension interferes with concentration, decision-making, and overall quality of life.
            </p>
            <p className="mb-6">
              GAD affects approximately 6.8 million American adults, or about 3.1% of the U.S. population, yet only about 43% receive treatment. Women are twice as likely as men to be affected, and symptoms often emerge gradually, typically beginning in childhood or adolescence, though onset can occur at any age.
            </p>
          </div>

          {/* Section 2 */}
          <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">
            Recognizing the Signs and Symptoms
          </h2>
          <div className="text-[var(--color-ink)] leading-loose text-base mb-8">
            <p className="mb-6">
              GAD manifests through both psychological and physical symptoms. On the mental side, individuals experience excessive worry that feels uncontrollable, persistent feelings of being on edge or keyed up, difficulty concentrating or mind going blank, irritability, and difficulty making decisions due to fear of making the wrong choice.
            </p>
            <p className="mb-6">
              The physical manifestations are equally significant and often drive people to seek medical attention initially. These include:
            </p>
            <ul className="space-y-3 mb-6">
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span>Muscle tension, especially in the neck, shoulders, and back</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span>Sleep disturbances, including difficulty falling asleep or staying asleep</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span>Fatigue and feeling easily tired</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span>Restlessness and feeling unable to relax</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span>Gastrointestinal problems such as nausea or diarrhea</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span>Headaches and unexplained aches and pains</span>
              </li>
            </ul>
            <p className="mb-6">
              It's important to note that having occasional worry or even some of these symptoms doesn't necessarily mean you have GAD. The key differentiators are the persistence, intensity, and degree to which the worry interferes with daily functioning.
            </p>
          </div>

          {/* Pull Quote */}
          <div className="bg-[var(--color-light)] border-l-4 border-[var(--color-primary)] p-6 my-8">
            <p className="text-[var(--color-ink)] italic text-xl font-cormorant">
              "The worry in GAD isn't just frequent—it's pervasive, uncontrollable, and exhausting. Learning to recognize these patterns is the first step toward effective treatment and relief."
            </p>
          </div>

          {/* Section 3 */}
          <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">
            The Impact on Daily Life
          </h2>
          <div className="text-[var(--color-ink)] leading-loose text-base mb-8">
            <p className="mb-6">
              GAD doesn't exist in isolation—it ripples through every aspect of life. At work, constant worry can impair concentration, reduce productivity, and make decision-making feel overwhelming. Social relationships may suffer as individuals withdraw to avoid situations that trigger anxiety or because they feel misunderstood by friends and family who may dismiss their concerns as "just worrying too much."
            </p>
            <p className="mb-6">
              Physical health can also decline. Chronic stress and anxiety take a toll on the cardiovascular and immune systems, potentially contributing to conditions like high blood pressure, heart disease, and weakened immunity. Sleep disturbances further compound these issues, creating a cycle of exhaustion and heightened anxiety.
            </p>
            <p className="mb-6">
              Many people with GAD also experience co-occurring conditions, particularly depression. The constant mental burden of excessive worry can lead to feelings of hopelessness and sadness, while depression can intensify anxiety symptoms, creating a complex clinical picture that requires comprehensive treatment.
            </p>
          </div>

          {/* Section 4 */}
          <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">
            Understanding the Causes and Risk Factors
          </h2>
          <div className="text-[var(--color-ink)] leading-loose text-base mb-8">
            <p className="mb-6">
              Like many mental health conditions, GAD results from a complex interplay of biological, psychological, and environmental factors. Research suggests that brain chemistry plays a role, particularly involving neurotransmitters like serotonin and GABA that regulate mood and stress responses.
            </p>
            <p className="mb-6">
              Genetics also contribute—having a family history of anxiety disorders increases risk. Personality traits such as being naturally more inhibited or having a tendency toward negative thinking patterns can predispose individuals to developing GAD.
            </p>
            <p className="mb-6">
              Life experiences matter significantly. Chronic stress, traumatic events, significant life changes, or a history of childhood adversity can trigger or exacerbate anxiety symptoms. Even positive stress, like planning a wedding or starting a new job, can sometimes push susceptible individuals toward problematic worry patterns.
            </p>
          </div>

          {/* Section 5 */}
          <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">
            Treatment and Management Strategies
          </h2>
          <div className="text-[var(--color-ink)] leading-loose text-base mb-8">
            <p className="mb-6">
              The encouraging news is that GAD is highly treatable. Evidence-based approaches include cognitive-behavioral therapy (CBT), which helps individuals identify and change unhelpful thought patterns and behaviors. CBT has been shown to produce lasting improvements, teaching practical skills for managing worry and anxiety.
            </p>
            <p className="mb-6">
              Medication can also be effective, particularly selective serotonin reuptake inhibitors (SSRIs) and serotonin-norepinephrine reuptake inhibitors (SNRIs). These medications help regulate brain chemistry and can significantly reduce symptoms. For some individuals, a combination of therapy and medication provides the most comprehensive relief.
            </p>
            <p className="mb-6">
              Integrative approaches that address the whole person can enhance traditional treatments. These may include:
            </p>
            <ul className="space-y-3 mb-6">
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span>Mindfulness and meditation practices to reduce rumination</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span>Regular physical exercise, which naturally reduces anxiety</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span>Nutrition optimization and limiting caffeine intake</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span>Sleep hygiene improvements to address insomnia</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span>Stress management techniques and relaxation exercises</span>
              </li>
            </ul>
          </div>

          {/* Section 6 */}
          <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">
            When to Seek Professional Help
          </h2>
          <div className="text-[var(--color-ink)] leading-loose text-base mb-8">
            <p className="mb-6">
              If worry has become a constant presence in your life, interfering with your ability to work, maintain relationships, or simply enjoy daily activities, it's time to seek professional evaluation. Don't wait until symptoms become overwhelming—early intervention leads to better outcomes and faster relief.
            </p>
            <p className="mb-6">
              Consider reaching out if you're experiencing persistent worry most days for several months, physical symptoms that have been medically evaluated without a clear physical cause, difficulty sleeping due to racing thoughts, avoidance of activities or situations due to anxiety, or if loved ones have expressed concern about your anxiety levels.
            </p>
            <p className="mb-6">
              Remember that seeking help isn't a sign of weakness—it's a proactive step toward better health and quality of life. With proper diagnosis and treatment, the vast majority of people with GAD experience significant improvement and learn effective strategies to manage their symptoms long-term.
            </p>
            <p className="mb-6">
              At JROSE WELLNESS in Fairfield, CT, we understand that anxiety affects the whole person. Our integrative approach combines evidence-based treatments with personalized care to help you regain control over worry and rediscover peace of mind. You don't have to navigate this journey alone—compassionate, effective help is available.
            </p>
          </div>
        </div>
      </article>

      {/* Author Box */}
      <div className="bg-[var(--color-cream)] py-12">
        <div className="max-w-3xl mx-auto px-6">
          <div className="bg-white rounded-2xl p-8 flex gap-6 items-start shadow-sm">
            <div className="bg-[var(--color-light)] rounded-full w-16 h-16 flex-shrink-0 flex items-center justify-center">
              <svg className="w-8 h-8 text-[var(--color-primary)]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
              </svg>
            </div>
            <div>
              <h3 className="font-cormorant text-2xl text-[var(--color-ink)] mb-2">
                Reviewed by JROSE WELLNESS
              </h3>
              <p className="text-[var(--color-muted)] leading-relaxed">
                Our team is dedicated to providing evidence-based information and compassionate care to support your journey toward optimal wellness. We combine clinical expertise with an integrative approach to address the whole person.
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
            <Link href="/blog" className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 group">
              <div className="bg-gradient-to-br from-[var(--color-light)] to-white p-8 flex items-center justify-center h-48">
                <svg className="w-16 h-16 text-[var(--color-primary)]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
                </svg>
              </div>
              <div className="p-6">
                <h4 className="font-cormorant text-xl text-[var(--color-ink)] mb-2 group-hover:text-[var(--color-primary)] transition-colors">
                  Explore All Resources
                </h4>
                <p className="text-[var(--color-muted)] text-sm leading-relaxed">
                  Browse our complete library of articles on wellness, mental health, and integrative care approaches.
                </p>
              </div>
            </Link>

            {/* Card 2 */}
            <Link href="/services" className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 group">
              <div className="bg-gradient-to-br from-[var(--color-light)] to-white p-8 flex items-center justify-center h-48">
                <svg className="w-16 h-16 text-[var(--color-primary)]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
                </svg>
              </div>
              <div className="p-6">
                <h4 className="font-cormorant text-xl text-[var(--color-ink)] mb-2 group-hover:text-[var(--color-primary)] transition-colors">
                  Our Services
                </h4>
                <p className="text-[var(--color-muted)] text-sm leading-relaxed">
                  Learn about our comprehensive integrative wellness services designed to support your health journey.
                </p>
              </div>
            </Link>

            {/* Card 3 */}
            <Link href="/contact" className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 group">
              <div className="bg-gradient-to-br from-[var(--color-light)] to-white p-8 flex items-center justify-center h-48">
                <svg className="w-16 h-16 text-[var(--color-primary)]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 01-.825-.242m9.345-8.334a2.126 2.126 0 00-.476-.095 48.64 48.64 0 00-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0011.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155" />
                </svg>
              </div>
              <div className="p-6">
                <h4 className="font-cormorant text-xl text-[var(--color-ink)] mb-2 group-hover:text-[var(--color-primary)] transition-colors">
                  Schedule a Consultation
                </h4>
                <p className="text-[var(--color-muted)] text-sm leading-relaxed">
                  Ready to take the next step? Contact us to discuss how we can support your wellness goals.
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
          <p className="text-xl text-white/90 mb-8 leading-relaxed">
            Our team is here to help.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-white text-[var(--color-primary)] px-8 py-4 rounded-full font-medium hover:bg-[var(--color-cream)] transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            Contact Us Today
          </Link>
        </div>
      </section>
    </main>
  )
}