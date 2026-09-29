import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'The Connection Between Physical Health Conditions and Mental Health',
  description: 'Explore the bidirectional relationship between physical health conditions and mental health, understanding how chronic illness impacts emotional wellbeing and vice versa.',
  alternates: { canonical: '/blog/the-connection-between-physical-health-conditions-and-mental' },
  openGraph: {
    title: 'The Connection Between Physical Health Conditions and Mental Health',
    description: 'Explore the bidirectional relationship between physical health conditions and mental health, understanding how chronic illness impacts emotional wellbeing and vice versa.',
    url: 'https://jrosewellness.com/blog/the-connection-between-physical-health-conditions-and-mental',
    siteName: 'JROSE WELLNESS',
    type: 'website',
    images: [{ url: '/og-image.png', width: 1200, height: 630 }]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'The Connection Between Physical Health Conditions and Mental Health',
    description: 'Explore the bidirectional relationship between physical health conditions and mental health, understanding how chronic illness impacts emotional wellbeing and vice versa.',
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

            {/* Category */}
            <div className="text-xs uppercase tracking-widest text-white/70 mb-4 text-center">
              Mental Health
            </div>

            {/* Title */}
            <h1 className="font-cormorant text-5xl font-light leading-tight max-w-3xl mx-auto text-center mb-8">
              The Connection Between Physical Health Conditions and Mental Health
            </h1>

            {/* Meta */}
            <div className="flex items-center justify-center gap-6 text-sm text-white/80">
              <span>Published 2025</span>
              <span>•</span>
              <span>7 min read</span>
              <span>•</span>
              <span>Reviewed by JROSE WELLNESS Team</span>
            </div>
          </div>
        </section>

        {/* Article Body */}
        <section className="bg-white py-20">
          <div className="max-w-3xl mx-auto px-6">
            
            {/* Opening */}
            <div className="text-[var(--color-ink)] leading-loose text-base">
              <p className="mb-6">
                When you're diagnosed with a chronic physical health condition, the conversation often centers on symptoms, treatments, and prognosis. Yet there's another dimension that's equally important but frequently overlooked: the profound impact on your mental and emotional wellbeing. The relationship between physical health and mental health isn't one-directional—it's a complex, bidirectional connection where each profoundly influences the other.
              </p>
              
              <p className="mb-6">
                Understanding this connection isn't just academically interesting; it's essential for comprehensive healing. When we address both physical symptoms and mental health together, we create the conditions for true wellness rather than simply managing disease.
              </p>
            </div>

            {/* Section 1 */}
            <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">
              Understanding the Mind-Body Connection
            </h2>
            
            <div className="text-[var(--color-ink)] leading-loose text-base">
              <p className="mb-6">
                The mind and body aren't separate entities—they're deeply integrated systems that constantly communicate. When you experience physical illness or pain, your brain processes not just the physical sensations but also the emotional meaning of those experiences. Similarly, mental health conditions like depression and anxiety can manifest in very real physical symptoms.
              </p>
              
              <p className="mb-6">
                This connection operates through multiple pathways. Chronic inflammation, for instance, affects both physical health conditions like arthritis and cardiovascular disease, and mental health conditions including depression. The stress response system—your hypothalamic-pituitary-adrenal (HPA) axis—links psychological stress directly to physical health outcomes. Even your gut microbiome, increasingly understood as crucial to digestive health, plays a significant role in mood regulation through what scientists call the gut-brain axis.
              </p>
            </div>

            {/* Section 2 */}
            <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">
              How Physical Illness Affects Mental Health
            </h2>
            
            <div className="text-[var(--color-ink)] leading-loose text-base">
              <p className="mb-6">
                Living with a chronic physical health condition changes more than just your body—it can fundamentally alter your daily life, sense of identity, and emotional landscape. Research consistently shows that people with chronic physical conditions experience depression and anxiety at rates two to three times higher than the general population.
              </p>
              
              <p className="mb-6">
                This isn't surprising when you consider what chronic illness demands. There's the stress of managing symptoms, navigating healthcare systems, and adjusting to limitations. Many conditions bring chronic pain, which is both physically exhausting and emotionally depleting. Financial strain from medical costs, reduced work capacity, or disability can create additional stress. Social isolation often develops as activities become harder or as others struggle to understand what you're experiencing.
              </p>
              
              <p className="mb-6">
                Certain conditions carry particularly high risks for co-occurring mental health challenges. Cardiovascular disease, diabetes, autoimmune conditions, chronic pain syndromes, and neurological disorders all show strong associations with depression and anxiety. This isn't weakness or failure—it's a predictable response to significant life disruption and biological changes.
              </p>
            </div>

            {/* Pull Quote */}
            <blockquote className="bg-[var(--color-light)] border-l-4 border-[var(--color-primary)] p-6 my-8 text-[var(--color-ink)] italic text-xl font-cormorant">
              "The relationship between physical health and mental health isn't one-directional—it's a complex, bidirectional connection where each profoundly influences the other."
            </blockquote>

            {/* Section 3 */}
            <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">
              How Mental Health Impacts Physical Wellbeing
            </h2>
            
            <div className="text-[var(--color-ink)] leading-loose text-base">
              <p className="mb-6">
                The influence flows in the other direction as well. Depression, anxiety, and chronic stress don't just feel bad—they create measurable changes in your physical health. Persistent stress elevates cortisol and inflammatory markers throughout your body, increasing risk for cardiovascular disease, metabolic disorders, and autoimmune conditions.
              </p>
              
              <p className="mb-6">
                Mental health conditions affect behaviors that directly impact physical health. Depression can make it harder to maintain exercise routines, prepare nutritious meals, or adhere to medical treatments. Anxiety might lead to avoidance of necessary medical care. Sleep disturbances, common in both depression and anxiety, have cascading effects on immune function, pain perception, and disease progression.
              </p>
              
              <p className="mb-6">
                There's also compelling evidence that mental health conditions can affect how the body responds to treatment. People with depression alongside physical illness often have poorer treatment outcomes, longer hospital stays, and higher healthcare costs. Addressing mental health isn't just about feeling better emotionally—it's about creating the best conditions for physical healing.
              </p>
            </div>

            {/* Section 4 */}
            <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">
              Breaking the Cycle: An Integrative Approach
            </h2>
            
            <div className="text-[var(--color-ink)] leading-loose text-base">
              <p className="mb-6">
                Recognizing this bidirectional relationship points toward a crucial insight: the most effective approach to health addresses both physical and mental dimensions simultaneously. This is the foundation of integrative wellness care, which treats the whole person rather than isolated symptoms.
              </p>
              
              <p className="mb-6">
                Evidence-based integrative approaches combine conventional medical treatment with therapies that support both physical and mental health. This might include appropriate medications for both the physical condition and mental health symptoms, psychological therapies like cognitive-behavioral therapy or acceptance and commitment therapy, mind-body practices such as meditation or yoga, nutritional interventions that reduce inflammation and support mood, and lifestyle modifications addressing sleep, movement, and stress management.
              </p>
              
              <p className="mb-6">
                The goal isn't to choose between treating physical or mental health—it's to recognize that treating both creates synergistic effects. Reducing inflammation can improve both physical symptoms and mood. Learning stress management techniques can ease anxiety while also reducing pain and improving immune function. Building social connections supports mental health while encouraging health-promoting behaviors.
              </p>
            </div>

            {/* Section 5 */}
            <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">
              Practical Steps Forward
            </h2>
            
            <div className="text-[var(--color-ink)] leading-loose text-base">
              <p className="mb-6">
                If you're living with a chronic physical condition and struggling emotionally, or experiencing physical symptoms alongside mental health challenges, here are important steps to consider:
              </p>

              <div className="space-y-4 my-8">
                <div className="flex gap-3">
                  <div className="flex-shrink-0 mt-1">
                    <svg className="w-6 h-6 text-[var(--color-primary)]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <p><strong>Talk openly with your healthcare provider</strong> about both physical and emotional symptoms. Many people hesitate to mention mental health concerns to their medical doctor, but comprehensive care requires addressing both.</p>
                </div>

                <div className="flex gap-3">
                  <div className="flex-shrink-0 mt-1">
                    <svg className="w-6 h-6 text-[var(--color-primary)]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <p><strong>Seek coordinated care</strong> where possible. Ideally, your healthcare team should communicate with each other and work together on a comprehensive treatment plan.</p>
                </div>

                <div className="flex gap-3">
                  <div className="flex-shrink-0 mt-1">
                    <svg className="w-6 h-6 text-[var(--color-primary)]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <p><strong>Consider professional mental health support</strong> as part of managing your physical condition, not as a sign of weakness or failure.</p>
                </div>

                <div className="flex gap-3">
                  <div className="flex-shrink-0 mt-1">
                    <svg className="w-6 h-6 text-[var(--color-primary)]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <p><strong>Explore integrative therapies</strong> that support both physical and mental health, such as mindfulness practices, gentle movement, or nutritional approaches.</p>
                </div>

                <div className="flex gap-3">
                  <div className="flex-shrink-0 mt-1">
                    <svg className="w-6 h-6 text-[var(--color-primary)]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <p><strong>Build your support network</strong>. Connection with others who understand your experience can reduce isolation and provide practical coping strategies.</p>
                </div>

                <div className="flex gap-3">
                  <div className="flex-shrink-0 mt-1">
                    <svg className="w-6 h-6 text-[var(--color-primary)]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <p><strong>Be patient with yourself</strong>. Healing takes time, and progress isn't always linear. Small, consistent steps matter more than dramatic overnight changes.</p>
                </div>
              </div>
            </div>

            {/* Closing */}
            <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">
              Moving Toward Whole-Person Wellness
            </h2>
            
            <div className="text-[var(--color-ink)] leading-loose text-base">
              <p className="mb-6">
                The connection between physical health conditions and mental health is neither simple nor one-directional. It's a complex, dynamic relationship where physical illness affects emotional wellbeing, mental health impacts physical symptoms, and both are influenced by biological, psychological, and social factors.
              </p>
              
              <p className="mb-6">
                Recognizing this connection isn't about adding one more thing to worry about—it's about opening the door to more comprehensive, effective care. When we address both physical and mental health together, we create the possibility not just for symptom management but for genuine healing and improved quality of life.
              </p>
              
              <p className="mb-6">
                If you're experiencing physical health challenges alongside emotional struggles, you don't have to navigate this alone. Integrative approaches that honor the connection between mind and body can provide the support you need to move toward greater wellness in all dimensions of health.
              </p>
            </div>

          </div>
        </section>

        {/* Author Box */}
        <section className="bg-white py-12">
          <div className="max-w-3xl mx-auto px-6">
            <div className="bg-[var(--color-cream)] rounded-2xl p-8 flex gap-6 items-start">
              <div className="flex-shrink-0">
                <div className="bg-[var(--color-light)] rounded-full w-16 h-16 flex items-center justify-center">
                  <svg className="w-8 h-8 text-[var(--color-primary)]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                  </svg>
                </div>
              </div>
              <div>
                <div className="font-semibold text-[var(--color-ink)] mb-1">Reviewed by JROSE WELLNESS</div>
                <p className="text-[var(--color-muted)] text-sm leading-relaxed">
                  Our team is dedicated to providing evidence-based, compassionate care that addresses the whole person. We integrate conventional medicine with holistic approaches to support both physical and mental wellbeing.
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
              
              {/* Card 1 */}
              <Link href="/services/stress-management" className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300">
                <div className="h-48 bg-gradient-to-br from-[var(--color-light)] to-[var(--color-cream)] flex items-center justify-center">
                  <svg className="w-16 h-16 text-[var(--color-primary)] opacity-40" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                  </svg>
                </div>
                <div className="p-6">
                  <div className="text-xs uppercase tracking-wider text-[var(--color-primary)] mb-2">Service</div>
                  <h4 className="font-cormorant text-xl text-[var(--color-ink)] mb-2 group-hover:text-[var(--color-primary)] transition-colors">Stress Management</h4>
                  <p className="text-[var(--color-muted)] text-sm leading-relaxed">Learn evidence-based techniques to manage stress and support both mental and physical health.</p>
                </div>
              </Link>

              {/* Card 2 */}
              <Link href="/services/pain-management" className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300">
                <div className="h-48 bg-gradient-to-br from-[var(--color-light)] to-[var(--color-cream)] flex items-center justify-center">
                  <svg className="w-16 h-16 text-[var(--color-primary)] opacity-40" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z" />
                  </svg>
                </div>
                <div className="p-6">
                  <div className="text-xs uppercase tracking-wider text-[var(--color-primary)] mb-2">Service</div>
                  <h4 className="font-cormorant text-xl text-[var(--color-ink)] mb-2 group-hover:text-[var(--color-primary)] transition-colors">Pain Management</h4>
                  <p className="text-[var(--color-muted)] text-sm leading-relaxed">Comprehensive approaches to chronic pain that address both physical symptoms and emotional impact.</p>
                </div>
              </Link>

              {/* Card 3 */}
              <Link href="/contact" className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300">
                <div className="h-48 bg-gradient-to-br from-[var(--color-light)] to-[var(--color-cream)] flex items-center justify-center">
                  <svg className="w-16 h-16 text-[var(--color-primary)] opacity-40" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 01-.825-.242m9.345-8.334a2.126 2.126 0 00-.476-.095 48.64 48.64 0 00-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0011.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155" />
                  </svg>
                </div>
                <div className="p-6">
                  <div className="text-xs uppercase tracking-wider text-[var(--color-primary)] mb-2">Get Started</div>
                  <h4 className="font-cormorant text-xl text-[var(--color-ink)] mb-2 group-hover:text-[var(--color-primary)] transition-colors">Schedule a Consultation</h4>
                  <p className="text-[var(--color-muted)] text-sm leading-relaxed">Take the first step toward integrative care that addresses your whole health journey.</p>
                </div>
              </Link>

            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] py-20 text-white text-center">
          <div className="max-w-3xl mx-auto px-6">
            <h2 className="font-cormorant text-4xl font-light mb-4">Ready to Take the Next Step?</h2>
            <p className="text-xl mb-8 text-white/90">Our team is here to help.</p>
            <Link 
              href="/contact" 
              className="inline-block bg-white text-[var(--color-primary)] px-8 py-4 rounded-full font-semibold hover:bg-[var(--color-cream)] transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
            >
              Contact Us Today
            </Link>
          </div>
        </section>

      </article>
    </main>
  )
}