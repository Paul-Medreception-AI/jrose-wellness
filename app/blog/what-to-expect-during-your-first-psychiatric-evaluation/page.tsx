import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'What to Expect During Your First Psychiatric Evaluation',
  description: 'Learn what happens during your first psychiatric evaluation, how to prepare, and what questions to expect. A comprehensive guide to understanding the mental health assessment process.',
  alternates: { canonical: '/blog/what-to-expect-during-your-first-psychiatric-evaluation' },
  openGraph: {
    title: 'What to Expect During Your First Psychiatric Evaluation',
    description: 'Learn what happens during your first psychiatric evaluation, how to prepare, and what questions to expect. A comprehensive guide to understanding the mental health assessment process.',
    url: 'https://jrosewellness.com/blog/what-to-expect-during-your-first-psychiatric-evaluation',
    siteName: 'JROSE WELLNESS',
    type: 'website',
    images: [{ url: '/og-image.png', width: 1200, height: 630 }]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'What to Expect During Your First Psychiatric Evaluation',
    description: 'Learn what happens during your first psychiatric evaluation, how to prepare, and what questions to expect. A comprehensive guide to understanding the mental health assessment process.',
    images: ['/og-image.png']
  }
}

export default function BlogPost() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] py-20 text-white">
        <div className="max-w-5xl mx-auto px-6">
          {/* Breadcrumb */}
          <nav className="text-sm text-white/80 mb-8 text-center">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span className="mx-2">›</span>
            <Link href="/blog" className="hover:text-white transition-colors">Resources</Link>
            <span className="mx-2">›</span>
            <span className="text-white">Article</span>
          </nav>

          {/* Category */}
          <div className="text-xs uppercase tracking-widest text-white/70 mb-4 text-center">
            Mental Health
          </div>

          {/* Title */}
          <h1 className="font-cormorant text-5xl font-light leading-tight max-w-3xl mx-auto text-center mb-8">
            What to Expect During Your First Psychiatric Evaluation
          </h1>

          {/* Meta Information */}
          <div className="flex items-center justify-center gap-6 text-sm text-white/80">
            <span>Published 2025</span>
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
              Scheduling your first psychiatric evaluation is a significant step toward better mental health. Yet for many people, uncertainty about what will happen during that appointment can create anxiety that delays or prevents them from seeking care. Understanding the evaluation process—what to expect, how to prepare, and why each component matters—can help transform apprehension into confidence and make your first visit a productive, positive experience.
            </p>
            <p>
              A psychiatric evaluation is a comprehensive assessment designed to understand your mental health history, current symptoms, and overall wellbeing. It's a collaborative conversation, not an interrogation, and serves as the foundation for an accurate diagnosis and personalized treatment plan.
            </p>
          </div>

          {/* Section 1 */}
          <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">
            What Is a Psychiatric Evaluation?
          </h2>
          <div className="text-[var(--color-ink)] leading-loose text-base mb-8">
            <p className="mb-6">
              A psychiatric evaluation is a clinical interview conducted by a mental health professional—such as a psychiatrist, psychiatric nurse practitioner, or licensed clinical psychologist—to assess your emotional, psychological, and behavioral health. The evaluation typically lasts 60 to 90 minutes and covers a wide range of topics to create a complete picture of your mental state.
            </p>
            <p className="mb-6">
              Unlike a brief check-in with your primary care doctor, a psychiatric evaluation dives deeply into your thoughts, feelings, behaviors, relationships, and life circumstances. The provider will ask questions about your symptoms, medical history, family background, lifestyle, and any previous treatment you've received.
            </p>
            <p>
              The goal is not to judge or label you, but to gather enough information to understand what you're experiencing and why, so that an effective, individualized treatment plan can be developed.
            </p>
          </div>

          {/* Section 2 */}
          <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">
            What Questions Will Be Asked?
          </h2>
          <div className="text-[var(--color-ink)] leading-loose text-base mb-8">
            <p className="mb-6">
              During your evaluation, your provider will ask a series of questions to understand your current symptoms and their context. While every evaluation is tailored to the individual, common areas of inquiry include:
            </p>
            <ul className="space-y-3 mb-6">
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                </svg>
                <span><strong>Chief Complaint:</strong> What brought you in today? What symptoms or concerns are most troubling you right now?</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                </svg>
                <span><strong>Symptom History:</strong> When did your symptoms start? How have they changed over time? What makes them better or worse?</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                </svg>
                <span><strong>Medical History:</strong> Do you have any chronic illnesses, past surgeries, or medical conditions that could affect your mental health?</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                </svg>
                <span><strong>Psychiatric History:</strong> Have you been diagnosed with a mental health condition before? Have you been hospitalized? What treatments have you tried?</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                </svg>
                <span><strong>Medications:</strong> What medications are you currently taking, including over-the-counter drugs and supplements?</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                </svg>
                <span><strong>Family History:</strong> Do any family members have mental health conditions, substance use issues, or neurological disorders?</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                </svg>
                <span><strong>Substance Use:</strong> Do you use alcohol, tobacco, or recreational drugs? If so, how often and how much?</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                </svg>
                <span><strong>Social History:</strong> What is your living situation? Are you employed? What are your relationships like? Have you experienced trauma or major life stressors?</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                </svg>
                <span><strong>Safety Assessment:</strong> Are you experiencing thoughts of harming yourself or others?</span>
              </li>
            </ul>
            <p>
              These questions may feel personal or uncomfortable, but they are essential for accurate diagnosis. Your provider is trained to ask them in a compassionate, nonjudgmental way, and your honest answers will help ensure you receive the most appropriate care.
            </p>
          </div>

          {/* Pull Quote */}
          <blockquote className="bg-[var(--color-light)] border-l-4 border-[var(--color-primary)] p-6 my-8 text-[var(--color-ink)] italic text-xl font-cormorant">
            "A psychiatric evaluation is a collaborative conversation, not an interrogation. Your honesty and openness are the foundation of effective treatment."
          </blockquote>

          {/* Section 3 */}
          <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">
            The Mental Status Examination
          </h2>
          <div className="text-[var(--color-ink)] leading-loose text-base mb-8">
            <p className="mb-6">
              In addition to asking questions, your provider will conduct what's called a mental status examination (MSE). This is a structured observation of your current mental state, including:
            </p>
            <ul className="space-y-3 mb-6">
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                </svg>
                <span><strong>Appearance:</strong> How you present yourself—grooming, clothing, posture</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                </svg>
                <span><strong>Behavior:</strong> Eye contact, body language, level of cooperation</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                </svg>
                <span><strong>Speech:</strong> Tone, pace, volume, and coherence</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                </svg>
                <span><strong>Mood and Affect:</strong> Your reported emotional state and the emotions you display</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                </svg>
                <span><strong>Thought Process:</strong> Whether your thinking is organized, logical, or disorganized</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                </svg>
                <span><strong>Thought Content:</strong> Whether you experience delusions, obsessions, or suicidal thoughts</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                </svg>
                <span><strong>Perception:</strong> Whether you experience hallucinations or other perceptual disturbances</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                </svg>
                <span><strong>Cognition:</strong> Memory, attention, concentration, and orientation to time and place</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                </svg>
                <span><strong>Insight and Judgment:</strong> Your awareness of your condition and ability to make safe decisions</span>
              </li>
            </ul>
            <p>
              The MSE is not a separate "test" you need to study for—it's simply the clinician's professional observation of you during the interview. It helps the provider understand not just what you say, but how you say it and how you're functioning in the moment.
            </p>
          </div>

          {/* Section 4 */}
          <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">
            How to Prepare for Your First Evaluation
          </h2>
          <div className="text-[var(--color-ink)] leading-loose text-base mb-8">
            <p className="mb-6">
              Preparation can help you make the most of your evaluation and reduce anxiety about the process. Here are practical steps to take before your appointment:
            </p>
            <ul className="space-y-3 mb-6">
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                </svg>
                <span><strong>List Your Symptoms:</strong> Write down what you've been experiencing, when it started, and how it affects your daily life. Bring this list with you.</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                </svg>
                <span><strong>Gather Medical Records:</strong> If you've seen other providers, bring copies of relevant records, test results, or discharge summaries.</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                </svg>
                <span><strong>List Medications:</strong> Include prescription drugs, over-the-counter medications, vitamins, and supplements, along with dosages.</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                </svg>
                <span><strong>Note Family History:</strong> If you know of mental health conditions in your family, write down who was affected and what their diagnoses were.</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                </svg>
                <span><strong>Prepare Questions:</strong> What do you want to know about your diagnosis, treatment options, or next steps? Write down your questions so you don't forget them.</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                </svg>
                <span><strong>Arrive Early:</strong> Give yourself time to complete paperwork, use the restroom, and settle in before your appointment.</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                </svg>
                <span><strong>Be Honest:</strong> The more truthful and complete your answers, the better your provider can help you. Everything you share is confidential.</span>
              </li>
            </ul>
          </div>

          {/* Section 5 */}
          <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">
            What Happens After the Evaluation?
          </h2>
          <div className="text-[var(--color-ink)] leading-loose text-base mb-8">
            <p className="mb-6">
              At the end of your evaluation, your provider will typically share their initial impressions and, in many cases, a preliminary diagnosis. They will explain what they think is happening and why, and outline the recommended treatment options.
            </p>
            <p className="mb-6">
              Treatment may include psychotherapy (talk therapy), medication, lifestyle changes, or a combination of approaches. Your provider will discuss the benefits and risks of each option and work with you to develop a plan that fits your needs, preferences, and goals.
            </p>
            <p className="mb-6">
              In some cases, your provider may recommend additional testing—such as blood work to rule out medical causes of your symptoms, or standardized questionnaires to clarify your diagnosis. They will also schedule follow-up appointments to monitor your progress and adjust your treatment as needed.
            </p>
            <p>
              Remember, a psychiatric evaluation is the beginning of your treatment journey, not the end. It's a collaborative process, and your active participation—asking questions, sharing concerns, and following through with the plan—is essential to achieving the best outcomes.
            </p>
          </div>

          {/* Section 6 */}
          <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">
            Why This Matters
          </h2>
          <div className="text-[var(--color-ink)] leading-loose text-base mb-8">
            <p className="mb-6">
              Mental health conditions are common, treatable, and nothing to be ashamed of. According to the National Institute of Mental Health, nearly one in five U.S. adults lives with a mental illness, yet many delay or avoid seeking help due to stigma, fear, or uncertainty about the process.
            </p>
            <p className="mb-6">
              A comprehensive psychiatric evaluation is the cornerstone of effective mental health care. It allows your provider to see the full picture—your symptoms, your history, your strengths, and your challenges—and to tailor treatment to your unique needs. Research consistently shows that early intervention and individualized care lead to better outcomes, faster symptom relief, and improved quality of life.
            </p>
            <p>
              By taking the step to schedule and attend your first evaluation, you're not just seeking answers—you're taking control of your wellbeing and investing in a healthier, more fulfilling future.
            </p>
          </div>

          {/* Closing Paragraph */}
          <div className="text-[var(--color-ink)] leading-loose text-base mt-12 p-6 bg-[var(--color-cream)] rounded-lg">
            <p className="mb-4">
              <strong>Ready to take the next step?</strong> If you're experiencing symptoms that interfere with your daily life—persistent sadness, anxiety, mood swings, difficulty concentrating, or thoughts of self-harm—a psychiatric evaluation can provide clarity, support, and a path forward.
            </p>
            <p>
              At JROSE WELLNESS in Fairfield, CT, our team is here to provide compassionate, evidence-based integrative wellness care in a welcoming, nonjudgmental environment. Contact us today to schedule your confidential evaluation and begin your journey toward better mental health.
            </p>
          </div>
        </div>

        {/* Author Box */}
        <div className="bg-[var(--color-cream)] rounded-2xl p-8 max-w-3xl mx-auto my-12 flex gap-6 items-start">
          <div className="bg-[var(--color-light)] rounded-full w-16 h-16 flex-shrink-0 flex items-center justify-center">
            <svg className="w-8 h-8 text-[var(--color-primary)]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
            </svg>
          </div>
          <div>
            <div className="font-semibold text-[var(--color-ink)] mb-1">Reviewed by JROSE WELLNESS</div>
            <p className="text-[var(--color-muted)] text-sm leading-relaxed">
              Our team is dedicated to providing evidence-based integrative wellness care to support your mental and emotional health. We combine clinical expertise with a compassionate, patient-centered approach to help you achieve lasting wellbeing.
            </p>
          </div>
        </div>
      </article>

      {/* Related Articles */}
      <section className="bg-[var(--color-cream)] py-16">
        <div className="max-w-7xl mx-auto px-6">
          <h3 className="font-cormorant text-3xl text-[var(--color-ink)] mb-8 text-center">Related Resources</h3>
          <div className="grid md:grid-cols-3 gap-8">
            {/* Card 1 */}
            <Link href="/blog" className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 group">
              <div className="h-48 bg-gradient-to-br from-[var(--color-light)] to-[var(--color-cream)] flex items-center justify-center">
                <svg className="w-16 h-16 text-[var(--color-primary)]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
                </svg>
              </div>
              <div className="p-6">
                <h4 className="font-cormorant text-xl text-[var(--color-ink)] mb-2 group-hover:text-[var(--color-primary)] transition-colors">
                  Explore All Articles
                </h4>
                <p className="text-[var(--color-muted)] text-sm leading-relaxed">
                  Browse our complete library of mental health resources and patient education guides.
                </p>
              </div>
            </Link>

            {/* Card 2 */}
            <Link href="/services" className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 group">
              <div className="h-48 bg-gradient-to-br from-[var(--color-light)] to-[var(--color-cream)] flex items-center justify-center">
                <svg className="w-16 h-16 text-[var(--color-primary)]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
                </svg>
              </div>
              <div className="p-6">
                <h4 className="font-cormorant text-xl text-[var(--color-ink)] mb-2 group-hover:text-[var(--color-primary)] transition-colors">
                  Our Services
                </h4>
                <p className="text-[var(--color-muted)] text-sm leading-relaxed">
                  Discover the comprehensive mental health services we offer at JROSE WELLNESS.
                </p>
              </div>
            </Link>

            {/* Card 3 */}
            <Link href="/contact" className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 group">
              <div className="h-48 bg-gradient-to-br from-[var(--color-light)] to-[var(--color-cream)] flex items-center justify-center">
                <svg className="w-16 h-16 text-[var(--color-primary)]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                </svg>
              </div>
              <div className="p-6">
                <h4 className="font-cormorant text-xl text-[var(--color-ink)] mb-2 group-hover:text-[var(--color-primary)] transition-colors">
                  Schedule Your Evaluation
                </h4>
                <p className="text-[var(--color-muted)] text-sm leading-relaxed">
                  Ready to begin? Contact us today to schedule your confidential psychiatric evaluation.
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
            Our team is here to help you find clarity, support, and a path forward.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-white text-[var(--color-primary)] px-8 py-4 rounded-lg font-medium hover:bg-[var(--color-cream)] transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            Schedule Your Evaluation Today
          </Link>
        </div>
      </section>
    </main>
  )
}