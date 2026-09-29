import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'The Impact of Trauma on Mental Health | JROSE WELLNESS',
  description: 'Understand how trauma affects mental health, the long-term consequences, and evidence-based approaches to healing. Expert guidance on trauma-informed care and recovery.',
  alternates: { canonical: '/blog/the-impact-of-trauma-on-mental-health' },
  openGraph: {
    title: 'The Impact of Trauma on Mental Health | JROSE WELLNESS',
    description: 'Understand how trauma affects mental health, the long-term consequences, and evidence-based approaches to healing. Expert guidance on trauma-informed care and recovery.',
    url: 'https://jrosewellness.com/blog/the-impact-of-trauma-on-mental-health',
    siteName: 'JROSE WELLNESS',
    type: 'website',
    images: [{ url: '/og-image.png', width: 1200, height: 630 }]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'The Impact of Trauma on Mental Health | JROSE WELLNESS',
    description: 'Understand how trauma affects mental health, the long-term consequences, and evidence-based approaches to healing. Expert guidance on trauma-informed care and recovery.',
    images: ['/og-image.png']
  }
}

export default function TraumaImpactBlogPost() {
  return (
    <main className="min-h-screen bg-white">
      <article>
        <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] py-20 text-white">
          <div className="max-w-4xl mx-auto px-6">
            <div className="text-sm mb-6 text-white/80">
              <Link href="/" className="hover:text-white transition-colors">Home</Link>
              <span className="mx-2">›</span>
              <Link href="/blog" className="hover:text-white transition-colors">Resources</Link>
              <span className="mx-2">›</span>
              <span>Article</span>
            </div>
            
            <div className="text-xs uppercase tracking-widest text-white/70 mb-4">Mental Health</div>
            
            <h1 className="font-cormorant text-5xl font-light leading-tight max-w-3xl mx-auto text-center mb-8">
              The Impact of Trauma on Mental Health
            </h1>
            
            <div className="flex items-center justify-center gap-6 text-sm text-white/80">
              <span>Published January 2025</span>
              <span>•</span>
              <span>7 min read</span>
              <span>•</span>
              <span>Reviewed by JROSE WELLNESS</span>
            </div>
          </div>
        </section>

        <section className="bg-white py-20">
          <div className="max-w-3xl mx-auto px-6">
            <div className="text-[var(--color-ink)] leading-loose text-base space-y-6">
              <p className="text-xl leading-relaxed text-[var(--color-muted)] font-light">
                Trauma leaves an imprint that extends far beyond the moment it occurs. Whether stemming from a single catastrophic event or prolonged exposure to distressing circumstances, trauma can fundamentally alter how we think, feel, and navigate the world. Understanding this connection between trauma and mental health is the first step toward meaningful healing.
              </p>

              <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">
                What Is Trauma?
              </h2>

              <p>
                Trauma is the psychological and emotional response to an event or series of events that overwhelm an individual's ability to cope. While we often associate trauma with life-threatening situations—accidents, violence, natural disasters—trauma can also result from experiences that threaten our sense of safety, autonomy, or identity.
              </p>

              <p>
                Trauma exists on a spectrum. Acute trauma results from a single incident, such as a car accident or assault. Chronic trauma involves repeated and prolonged exposure, like ongoing domestic violence or childhood neglect. Complex trauma typically refers to exposure to multiple traumatic events, often of an invasive, interpersonal nature, particularly during developmental years.
              </p>

              <p>
                What qualifies as traumatic varies from person to person. The same event may be traumatic for one individual but not another, depending on factors like prior experiences, support systems, resilience, and personal history. This variability underscores an essential truth: trauma is defined not by the event itself, but by its impact on the individual.
              </p>

              <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">
                How Trauma Affects the Brain and Body
              </h2>

              <p>
                When we experience trauma, our brain's threat-detection system—the amygdala—goes into overdrive. This primitive alarm system triggers the body's fight-flight-freeze response, flooding us with stress hormones like cortisol and adrenaline. While this response is adaptive in moments of immediate danger, prolonged activation can alter brain structure and function.
              </p>

              <p>
                Research shows that chronic trauma can lead to a smaller hippocampus (the brain region responsible for memory and emotional regulation) and reduced connectivity between the prefrontal cortex (involved in rational thought and decision-making) and the amygdala. These changes help explain why trauma survivors often experience intrusive memories, emotional dysregulation, hypervigilance, and difficulty concentrating.
              </p>

              <p>
                The body keeps score, too. Trauma can manifest physically through chronic pain, digestive issues, tension, fatigue, and heightened sensitivity to stress. This mind-body connection means that addressing trauma requires an integrated approach that honors both psychological and physical dimensions of healing.
              </p>

              <div className="bg-[var(--color-light)] border-l-4 border-[var(--color-primary)] p-6 my-8">
                <p className="text-[var(--color-ink)] italic text-xl font-cormorant">
                  "Trauma is not what happens to you. Trauma is what happens inside you as a result of what happened to you."
                </p>
              </div>

              <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">
                Mental Health Consequences of Trauma
              </h2>

              <p>
                Trauma is a significant risk factor for numerous mental health conditions. Post-Traumatic Stress Disorder (PTSD) is perhaps the most recognized, characterized by intrusive memories, nightmares, avoidance behaviors, negative changes in thinking and mood, and heightened reactivity. However, trauma's reach extends well beyond PTSD.
              </p>

              <p>
                Depression commonly follows trauma, as survivors may struggle with feelings of worthlessness, guilt, numbness, and disconnection from previously enjoyed activities. Anxiety disorders—including generalized anxiety, panic disorder, and social anxiety—frequently emerge as the nervous system remains stuck in a state of hyperarousal.
              </p>

              <p>
                Substance use disorders often develop as individuals attempt to self-medicate overwhelming emotions or numb painful memories. This can create a vicious cycle where substance use compounds mental health challenges and impedes healing.
              </p>

              <p>
                Trauma can also disrupt attachment patterns and relationships. Survivors may struggle with trust, intimacy, boundary-setting, and emotional regulation within relationships. Some develop dissociative symptoms—feeling disconnected from themselves or their surroundings—as a protective mechanism against unbearable emotions or memories.
              </p>

              <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">
                The Role of Early Trauma
              </h2>

              <p>
                Childhood trauma deserves particular attention due to its profound and lasting impact. When trauma occurs during critical developmental periods, it can alter the trajectory of brain development, attachment formation, and emotional regulation capacity. Adverse Childhood Experiences (ACEs)—including abuse, neglect, household dysfunction, and witnessing violence—are linked to increased risk for mental health disorders, chronic diseases, and premature mortality.
              </p>

              <p>
                Children who experience trauma may develop maladaptive coping strategies that persist into adulthood. They may learn that the world is fundamentally unsafe, that their needs don't matter, or that relationships are unreliable. These core beliefs shape how they perceive themselves and interact with others throughout life.
              </p>

              <p>
                The good news is that the brain retains neuroplasticity—the ability to form new neural connections—throughout life. With appropriate support and intervention, healing and growth are possible at any age.
              </p>

              <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">
                Pathways to Healing
              </h2>

              <p>
                Recovery from trauma is neither linear nor uniform, but it is possible. Trauma-informed care recognizes the widespread impact of trauma and integrates this understanding into all aspects of treatment. Several evidence-based approaches have demonstrated effectiveness:
              </p>

              <div className="my-8 space-y-4">
                <div className="flex gap-3 items-start">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <p><strong>Cognitive Processing Therapy (CPT)</strong> helps individuals examine and modify unhelpful beliefs related to the trauma.</p>
                </div>
                <div className="flex gap-3 items-start">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <p><strong>Eye Movement Desensitization and Reprocessing (EMDR)</strong> uses bilateral stimulation to help the brain reprocess traumatic memories.</p>
                </div>
                <div className="flex gap-3 items-start">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <p><strong>Somatic therapies</strong> address trauma's physical manifestations through body-based interventions, recognizing that trauma is stored in the body as well as the mind.</p>
                </div>
                <div className="flex gap-3 items-start">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <p><strong>Mindfulness and grounding techniques</strong> help individuals stay present and manage overwhelming emotions or dissociation.</p>
                </div>
                <div className="flex gap-3 items-start">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <p><strong>Group therapy and peer support</strong> provide connection, validation, and the powerful recognition that you are not alone.</p>
                </div>
              </div>

              <p>
                Beyond formal treatment, building a foundation of safety, establishing routine, nurturing supportive relationships, engaging in physical activity, prioritizing sleep, and practicing self-compassion all contribute to recovery. Healing happens in the context of connection—with ourselves, with others, and with communities that honor our experiences.
              </p>

              <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">
                Moving Forward
              </h2>

              <p>
                If you recognize yourself in these descriptions, know that experiencing the effects of trauma does not mean you are broken. Your responses are adaptive survival mechanisms that once served a protective purpose. With the right support, it's possible to process traumatic experiences, develop healthier coping strategies, restore a sense of safety and control, and reclaim your life.
              </p>

              <p>
                Seeking help is a sign of strength, not weakness. Whether you're in Fairfield, CT or beyond, trauma-informed care can provide the tools, support, and understanding necessary for healing. You don't have to navigate this journey alone.
              </p>

              <p className="text-lg font-medium text-[var(--color-ink)] mt-8">
                If trauma is affecting your mental health or quality of life, reaching out to a qualified professional is an important step toward recovery. Healing is possible, and you deserve support on that journey.
              </p>
            </div>

            <div className="bg-[var(--color-cream)] rounded-2xl p-8 my-12 flex gap-6 items-start animate-fade-up">
              <div className="bg-[var(--color-light)] rounded-full w-16 h-16 flex-shrink-0 flex items-center justify-center">
                <svg className="w-8 h-8 text-[var(--color-primary)]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                </svg>
              </div>
              <div>
                <div className="font-semibold text-[var(--color-ink)] mb-1">Reviewed by JROSE WELLNESS</div>
                <p className="text-[var(--color-muted)] text-sm leading-relaxed">
                  Our team is dedicated to providing evidence-based, compassionate care that addresses the whole person. We understand that healing from trauma requires patience, understanding, and a comprehensive approach to wellness.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-[var(--color-cream)] py-16">
          <div className="max-w-7xl mx-auto px-6">
            <h3 className="font-cormorant text-3xl text-[var(--color-ink)] mb-8 text-center">Related Resources</h3>
            
            <div className="grid md:grid-cols-3 gap-8">
              <Link href="/blog/understanding-anxiety-symptoms-and-treatment" className="bg-white rounded-2xl p-8 hover:shadow-xl transition-all duration-300 group animate-fade-up">
                <div className="w-12 h-12 bg-[var(--color-light)] rounded-xl flex items-center justify-center mb-6 group-hover:bg-[var(--color-primary)] transition-colors">
                  <svg className="w-6 h-6 text-[var(--color-primary)] group-hover:text-white transition-colors" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
                  </svg>
                </div>
                <h4 className="font-cormorant text-2xl text-[var(--color-ink)] mb-3 group-hover:text-[var(--color-primary)] transition-colors">
                  Understanding Anxiety: Symptoms and Treatment
                </h4>
                <p className="text-[var(--color-muted)] leading-relaxed text-sm">
                  Learn about anxiety disorders, their connection to trauma, and evidence-based treatment approaches.
                </p>
              </Link>

              <Link href="/blog/the-mind-body-connection-in-healing" className="bg-white rounded-2xl p-8 hover:shadow-xl transition-all duration-300 group animate-fade-up">
                <div className="w-12 h-12 bg-[var(--color-light)] rounded-xl flex items-center justify-center mb-6 group-hover:bg-[var(--color-primary)] transition-colors">
                  <svg className="w-6 h-6 text-[var(--color-primary)] group-hover:text-white transition-colors" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                  </svg>
                </div>
                <h4 className="font-cormorant text-2xl text-[var(--color-ink)] mb-3 group-hover:text-[var(--color-primary)] transition-colors">
                  The Mind-Body Connection in Healing
                </h4>
                <p className="text-[var(--color-muted)] leading-relaxed text-sm">
                  Discover how physical and emotional health are intertwined and why integrative care matters.
                </p>
              </Link>

              <Link href="/blog/building-resilience-after-difficult-experiences" className="bg-white rounded-2xl p-8 hover:shadow-xl transition-all duration-300 group animate-fade-up">
                <div className="w-12 h-12 bg-[var(--color-light)] rounded-xl flex items-center justify-center mb-6 group-hover:bg-[var(--color-primary)] transition-colors">
                  <svg className="w-6 h-6 text-[var(--color-primary)] group-hover:text-white transition-colors" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
                  </svg>
                </div>
                <h4 className="font-cormorant text-2xl text-[var(--color-ink)] mb-3 group-hover:text-[var(--color-primary)] transition-colors">
                  Building Resilience After Difficult Experiences
                </h4>
                <p className="text-[var(--color-muted)] leading-relaxed text-sm">
                  Practical strategies for developing resilience and moving forward after trauma or adversity.
                </p>
              </Link>
            </div>
          </div>
        </section>

        <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] py-20 text-white text-center">
          <div className="max-w-3xl mx-auto px-6">
            <h2 className="font-cormorant text-4xl font-light mb-4">
              Ready to Take the Next Step?
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Our team is here to help.
            </p>
            <Link 
              href="/contact"
              className="inline-block bg-[var(--color-accent)] hover:bg-[var(--color-accent-dark)] text-white px-8 py-4 rounded-full font-medium transition-all duration-300 hover:shadow-lg hover:scale-105"
            >
              Schedule a Consultation
            </Link>
          </div>
        </section>
      </article>
    </main>
  )
}