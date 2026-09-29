import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Recognizing the Physical Symptoms of Anxiety | JROSE WELLNESS',
  description: 'Learn how anxiety manifests in the body through physical symptoms like rapid heartbeat, muscle tension, and digestive issues. Understand the mind-body connection.',
  alternates: { canonical: '/blog/recognizing-the-physical-symptoms-of-anxiety' },
  openGraph: {
    title: 'Recognizing the Physical Symptoms of Anxiety | JROSE WELLNESS',
    description: 'Learn how anxiety manifests in the body through physical symptoms like rapid heartbeat, muscle tension, and digestive issues. Understand the mind-body connection.',
    url: 'https://jrosewellness.com/blog/recognizing-the-physical-symptoms-of-anxiety',
    siteName: 'JROSE WELLNESS',
    type: 'website',
    images: [{ url: '/og-image.png', width: 1200, height: 630 }]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Recognizing the Physical Symptoms of Anxiety | JROSE WELLNESS',
    description: 'Learn how anxiety manifests in the body through physical symptoms like rapid heartbeat, muscle tension, and digestive issues. Understand the mind-body connection.',
    images: ['/og-image.png']
  }
}

export default function BlogPost() {
  return (
    <main className="min-h-screen bg-white">
      <article>
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

            {/* Category Tag */}
            <div className="text-xs uppercase tracking-widest text-white/70 mb-4 text-center">
              Mental Health
            </div>

            {/* Title */}
            <h1 className="font-cormorant text-5xl font-light leading-tight max-w-3xl mx-auto text-center mb-8">
              Recognizing the Physical Symptoms of Anxiety
            </h1>

            {/* Meta Information */}
            <div className="flex justify-center items-center gap-6 text-sm text-white/80">
              <span>Published 2025</span>
              <span>•</span>
              <span>7 min read</span>
              <span>•</span>
              <span>Dr. WELLNESS Team</span>
            </div>
          </div>
        </section>

        {/* Article Body */}
        <section className="bg-white py-20">
          <div className="max-w-3xl mx-auto px-6">
            {/* Opening */}
            <div className="text-[var(--color-ink)] leading-loose text-base mb-8">
              <p className="mb-6">
                Your heart races unexpectedly. Your palms sweat during everyday conversations. A knot forms in your stomach before routine tasks. While these experiences are often dismissed as "just nerves," they represent something more profound: the physical manifestation of anxiety. For millions of people, anxiety doesn't just exist in the mind—it reverberates throughout the entire body, creating a cascade of symptoms that can be as debilitating as they are misunderstood.
              </p>
              <p className="mb-6">
                Understanding the physical symptoms of anxiety is crucial for several reasons. First, recognizing these signs helps distinguish anxiety from other medical conditions. Second, it validates your experience—what you're feeling is real and physiological. Finally, identifying these symptoms is the first step toward effective treatment and relief.
              </p>
            </div>

            {/* Section 1 */}
            <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">
              The Mind-Body Connection
            </h2>
            <div className="text-[var(--color-ink)] leading-loose text-base mb-8">
              <p className="mb-6">
                Anxiety triggers the body's "fight-or-flight" response, an ancient survival mechanism designed to protect us from immediate danger. When this system activates, your body releases stress hormones like cortisol and adrenaline, preparing you to either confront a threat or escape from it.
              </p>
              <p className="mb-6">
                In modern life, however, this response often activates in situations that don't require physical action—a work presentation, a social gathering, or even daily responsibilities. The result is a body primed for action with nowhere to direct that energy, leading to a wide range of physical symptoms that can persist long after the perceived threat has passed.
              </p>
            </div>

            {/* Section 2 */}
            <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">
              Common Physical Symptoms of Anxiety
            </h2>
            <div className="text-[var(--color-ink)] leading-loose text-base mb-8">
              <p className="mb-6">
                Anxiety manifests differently in each person, but certain physical symptoms appear with remarkable consistency across populations. Understanding these patterns can help you identify anxiety in yourself or others.
              </p>
              
              <h3 className="text-xl font-semibold text-[var(--color-ink)] mt-8 mb-4">
                Cardiovascular Symptoms
              </h3>
              <p className="mb-4">
                The cardiovascular system is often the first to respond to anxiety. You might experience:
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Rapid heartbeat or palpitations that feel like your heart is racing or skipping beats</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Chest tightness or pressure, sometimes mistaken for cardiac issues</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Elevated blood pressure during anxious episodes</span>
                </li>
              </ul>

              <h3 className="text-xl font-semibold text-[var(--color-ink)] mt-8 mb-4">
                Respiratory Changes
              </h3>
              <p className="mb-4">
                Breathing patterns shift dramatically under anxiety's influence:
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Shortness of breath or feeling like you can't get enough air</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Rapid, shallow breathing (hyperventilation)</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>A sensation of choking or throat tightness</span>
                </li>
              </ul>

              <h3 className="text-xl font-semibold text-[var(--color-ink)] mt-8 mb-4">
                Muscular Tension
              </h3>
              <p className="mb-4">
                Chronic muscle tension is one of anxiety's most persistent physical symptoms:
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Jaw clenching or teeth grinding, especially during sleep</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Neck and shoulder stiffness leading to tension headaches</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Muscle aches and soreness without physical exertion</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Trembling or shaking in the hands or legs</span>
                </li>
              </ul>

              <h3 className="text-xl font-semibold text-[var(--color-ink)] mt-8 mb-4">
                Digestive Disturbances
              </h3>
              <p className="mb-4">
                The gut-brain connection means anxiety often shows up in digestive symptoms:
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Nausea or "butterflies" in the stomach</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Diarrhea or increased bowel urgency</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Loss of appetite or stress-induced overeating</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Irritable bowel syndrome (IBS) flare-ups</span>
                </li>
              </ul>
            </div>

            {/* Pull Quote */}
            <div className="bg-[var(--color-light)] border-l-4 border-[var(--color-primary)] p-6 my-8">
              <blockquote className="text-[var(--color-ink)] italic text-xl font-cormorant">
                "The body keeps the score. Physical symptoms of anxiety are not imaginary—they're your nervous system responding to perceived threat. Recognition is the first step toward healing."
              </blockquote>
            </div>

            {/* Section 3 */}
            <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">
              Less Obvious Physical Symptoms
            </h2>
            <div className="text-[var(--color-ink)] leading-loose text-base mb-8">
              <p className="mb-6">
                Beyond the commonly recognized symptoms, anxiety can manifest in subtle ways that are often overlooked:
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <span><strong>Fatigue and exhaustion:</strong> The constant state of alertness drains your energy reserves</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <span><strong>Dizziness or lightheadedness:</strong> Changes in breathing patterns affect oxygen levels</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <span><strong>Sweating or chills:</strong> Temperature regulation becomes disrupted</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <span><strong>Insomnia or sleep disturbances:</strong> An overactive mind prevents restful sleep</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <span><strong>Frequent urination:</strong> The bladder becomes more sensitive during anxious states</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <span><strong>Skin issues:</strong> Rashes, hives, or exacerbation of conditions like eczema or psoriasis</span>
                </li>
              </ul>
            </div>

            {/* Section 4 */}
            <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">
              When Physical Symptoms Become Chronic
            </h2>
            <div className="text-[var(--color-ink)] leading-loose text-base mb-8">
              <p className="mb-6">
                When anxiety persists over weeks, months, or years, the physical toll can be significant. Chronic anxiety has been linked to:
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Weakened immune function, making you more susceptible to infections</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Increased risk of cardiovascular disease due to sustained elevated blood pressure</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Chronic pain conditions, particularly tension headaches and back pain</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Metabolic changes that can contribute to weight gain or loss</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Hormonal imbalances affecting reproductive health and thyroid function</span>
                </li>
              </ul>
              <p className="mb-6">
                Research published in medical journals consistently demonstrates that untreated anxiety disorders contribute to poorer overall health outcomes and reduced quality of life. The longer anxiety persists without intervention, the more entrenched these physical patterns become.
              </p>
            </div>

            {/* Section 5 */}
            <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">
              Distinguishing Anxiety from Medical Conditions
            </h2>
            <div className="text-[var(--color-ink)] leading-loose text-base mb-8">
              <p className="mb-6">
                One of the challenges in recognizing anxiety's physical symptoms is that they can mimic other medical conditions. Chest pain might suggest a heart problem. Digestive issues could indicate a gastrointestinal disorder. Persistent fatigue might seem like an endocrine issue.
              </p>
              <p className="mb-6">
                This overlap means it's essential to work with healthcare providers who can rule out other causes. A thorough medical evaluation typically includes:
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Comprehensive physical examination</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Blood work to check thyroid function, vitamin levels, and other markers</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Detailed symptom history, including patterns and triggers</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Assessment of mental health and stress levels</span>
                </li>
              </ul>
              <p className="mb-6">
                Often, anxiety coexists with other health conditions, creating a complex picture that requires integrated care. This is why integrative approaches that address both physical and psychological aspects are particularly effective.
              </p>
            </div>

            {/* Section 6 */}
            <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">
              Taking the First Steps Toward Relief
            </h2>
            <div className="text-[var(--color-ink)] leading-loose text-base mb-8">
              <p className="mb-6">
                Recognizing the physical symptoms of anxiety is empowering because it opens pathways to effective treatment. Here are practical steps you can take:
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <span><strong>Track your symptoms:</strong> Keep a journal noting when symptoms occur, their intensity, and any triggers</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <span><strong>Practice breathing exercises:</strong> Deep, diaphragmatic breathing can interrupt the anxiety response</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <span><strong>Engage in regular physical activity:</strong> Exercise helps metabolize stress hormones and releases endorphins</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <span><strong>Prioritize sleep hygiene:</strong> Establish consistent sleep routines and create a calming bedtime environment</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <span><strong>Limit stimulants:</strong> Reduce caffeine, nicotine, and other substances that can amplify anxiety symptoms</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <span><strong>Seek professional support:</strong> Work with healthcare providers who understand the connection between mental and physical health</span>
                </li>
              </ul>
            </div>

            {/* Closing */}
            <div className="text-[var(--color-ink)] leading-loose text-base mb-8 mt-12">
              <p className="mb-6">
                The physical symptoms of anxiety are real, valid, and treatable. They're not a sign of weakness or something you need to "just push through." Your body is communicating important information about your stress levels and overall wellbeing.
              </p>
              <p className="mb-6">
                At JROSE WELLNESS, we understand that anxiety affects the whole person—mind, body, and spirit. Our integrative approach addresses both the psychological roots of anxiety and its physical manifestations, helping you find lasting relief and restore balance to your life.
              </p>
              <p>
                If you're experiencing persistent physical symptoms that may be related to anxiety, we invite you to reach out. Together, we can develop a personalized plan that addresses your unique needs and helps you reclaim your sense of wellbeing. You don't have to navigate this journey alone.
              </p>
            </div>
          </div>
        </section>

        {/* Author Box */}
        <section className="bg-white py-12">
          <div className="max-w-3xl mx-auto px-6">
            <div className="bg-[var(--color-cream)] rounded-2xl p-8 flex gap-6 items-start">
              <div className="bg-[var(--color-light)] rounded-full w-16 h-16 flex-shrink-0 flex items-center justify-center">
                <svg className="w-8 h-8 text-[var(--color-primary)]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                </svg>
              </div>
              <div>
                <h3 className="font-cormorant text-2xl text-[var(--color-ink)] mb-2">
                  Reviewed by JROSE WELLNESS
                </h3>
                <p className="text-[var(--color-muted)] text-sm leading-relaxed">
                  Our team is committed to providing evidence-based information and compassionate care for those navigating anxiety and its physical manifestations. We believe in treating the whole person through integrative wellness approaches.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Related Articles */}
        <section className="bg-[var(--color-cream)] py-16">
          <div className="max-w-7xl mx-auto px-6">
            <h3 className="font-cormorant text-3xl text-[var(--color-ink)] mb-8 text-center">
              Related Resources
            </h3>
            <div className="grid md:grid-cols-3 gap-8">
              {/* Card 1 */}
              <Link href="/blog" className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow group">
                <div className="bg-[var(--color-light)] rounded-lg w-12 h-12 flex items-center justify-center mb-4 group-hover:bg-[var(--color-primary)] transition-colors">
                  <svg className="w-6 h-6 text-[var(--color-primary)] group-hover:text-white transition-colors" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
                  </svg>
                </div>
                <h4 className="font-cormorant text-xl text-[var(--color-ink)] mb-2 group-hover:text-[var(--color-primary)] transition-colors">
                  Mental Health Resources
                </h4>
                <p className="text-[var(--color-muted)] text-sm leading-relaxed">
                  Explore our library of articles on mental health, stress management, and holistic wellness approaches.
                </p>
              </Link>

              {/* Card 2 */}
              <Link href="/blog" className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow group">
                <div className="bg-[var(--color-light)] rounded-lg w-12 h-12 flex items-center justify-center mb-4 group-hover:bg-[var(--color-primary)] transition-colors">
                  <svg className="w-6 h-6 text-[var(--color-primary)] group-hover:text-white transition-colors" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                </svg>
              </div>
              <h4 className="font-cormorant text-xl text-[var(--color-ink)] mb-2 group-hover:text-[var(--color-primary)] transition-colors">
                Integrative Wellness
              </h4>
              <p className="text-[var(--color-muted)] text-sm leading-relaxed">
                Learn how integrative approaches can support your journey to better mental and physical health.
              </p>
              </Link>

              {/* Card 3 */}
              <Link href="/contact" className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow group">
                <div className="bg-[var(--color-light)] rounded-lg w-12 h-12 flex items-center justify-center mb-4 group-hover:bg-[var(--color-primary)] transition-colors">
                  <svg className="w-6 h-6 text-[var(--color-primary)] group-hover:text-white transition-colors" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
                  </svg>
                </div>
                <h4 className="font-cormorant text-xl text-[var(--color-ink)] mb-2 group-hover:text-[var(--color-primary)] transition-colors">
                  Schedule a Consultation
                </h4>
                <p className="text-[var(--color-muted)] text-sm leading-relaxed">
                  Take the first step toward relief. Connect with our team to discuss your symptoms and treatment options.
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
            <p className="text-xl text-white/90 mb-8">
              Our team is here to help you understand and address the physical symptoms of anxiety.
            </p>
            <Link
              href="/contact"
              className="inline-block bg-[var(--color-accent)] hover:bg-[var(--color-accent-dark)] text-white px-8 py-4 rounded-full font-medium transition-colors"
            >
              Contact Us Today
            </Link>
          </div>
        </section>
      </article>
    </main>
  )
}