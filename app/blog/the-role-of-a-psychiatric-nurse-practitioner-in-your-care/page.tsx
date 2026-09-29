import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'The Role of a Psychiatric Nurse Practitioner in Your Care',
  description: 'Learn how psychiatric nurse practitioners provide comprehensive mental health care, including diagnosis, therapy, and medication management in integrative wellness settings.',
  alternates: { canonical: '/blog/the-role-of-a-psychiatric-nurse-practitioner-in-your-care' },
  openGraph: {
    title: 'The Role of a Psychiatric Nurse Practitioner in Your Care',
    description: 'Learn how psychiatric nurse practitioners provide comprehensive mental health care, including diagnosis, therapy, and medication management in integrative wellness settings.',
    url: 'https://jrosewellness.com/blog/the-role-of-a-psychiatric-nurse-practitioner-in-your-care',
    siteName: 'JROSE WELLNESS',
    type: 'website',
    images: [{ url: '/og-image.png', width: 1200, height: 630 }]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'The Role of a Psychiatric Nurse Practitioner in Your Care',
    description: 'Learn how psychiatric nurse practitioners provide comprehensive mental health care, including diagnosis, therapy, and medication management in integrative wellness settings.',
    images: ['/og-image.png']
  }
}

export default function BlogPost() {
  return (
    <main>
      {/* Hero */}
      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] py-20 text-white">
        <div className="max-w-4xl mx-auto px-6">
          {/* Breadcrumb */}
          <div className="text-sm mb-6 text-white/80 text-center">
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
            The Role of a Psychiatric Nurse Practitioner in Your Care
          </h1>

          {/* Meta */}
          <div className="flex items-center justify-center gap-6 text-sm text-white/70">
            <span>Published 2025</span>
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
          <div className="text-[var(--color-ink)] leading-loose text-base space-y-6">
            {/* Opening Hook */}
            <p>
              When seeking mental health care, you may encounter various types of providers—psychiatrists, psychologists, therapists, and psychiatric nurse practitioners. Understanding the unique role of a psychiatric nurse practitioner (PMHNP) can help you make informed decisions about your care and ensure you receive the comprehensive, holistic support you deserve. These highly trained professionals are transforming mental health care by combining advanced medical training with a patient-centered, integrative approach to wellness.
            </p>

            <p>
              In an era where mental health awareness is growing but access to care remains challenging, psychiatric nurse practitioners have emerged as essential providers who can diagnose conditions, prescribe medications, provide therapy, and offer the compassionate, personalized care that forms the foundation of healing.
            </p>

            {/* Section 1 */}
            <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">
              What Is a Psychiatric Nurse Practitioner?
            </h2>

            <p>
              A psychiatric nurse practitioner is an advanced practice registered nurse (APRN) who specializes in mental health care. PMHNPs complete rigorous graduate-level education—typically a Master of Science in Nursing (MSN) or Doctor of Nursing Practice (DNP)—with specialized training in psychiatric and mental health nursing.
            </p>

            <p>
              This education includes advanced coursework in:
            </p>

            <ul className="space-y-3 my-6">
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span>Psychopharmacology and medication management</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span>Diagnostic assessment and differential diagnosis</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span>Evidence-based psychotherapy techniques</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span>Neurobiology and pathophysiology of mental health disorders</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span>Crisis intervention and risk assessment</span>
              </li>
            </ul>

            <p>
              After completing their degree, PMHNPs must pass a national certification examination and obtain state licensure. Many continue their education throughout their careers, staying current with the latest research and treatment modalities in mental health care.
            </p>

            {/* Section 2 */}
            <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">
              The Scope of Practice: What PMHNPs Can Do
            </h2>

            <p>
              In most states, including Connecticut, psychiatric nurse practitioners have full practice authority, meaning they can provide comprehensive mental health care independently. Their scope of practice includes:
            </p>

            <p>
              <strong>Comprehensive Assessment and Diagnosis:</strong> PMHNPs conduct thorough psychiatric evaluations, taking into account medical history, family history, current symptoms, and psychosocial factors. They can diagnose mental health conditions ranging from depression and anxiety to bipolar disorder, PTSD, ADHD, and more complex conditions.
            </p>

            <p>
              <strong>Medication Management:</strong> One of the key distinguishing features of PMHNPs is their ability to prescribe medications, including controlled substances. They understand the intricate science of psychopharmacology and can tailor medication regimens to each individual's unique biochemistry and needs.
            </p>

            <p>
              <strong>Psychotherapy:</strong> Many PMHNPs are trained in various therapeutic modalities, including cognitive-behavioral therapy (CBT), dialectical behavior therapy (DBT), motivational interviewing, and trauma-informed care. This allows them to provide both medication management and talk therapy—often called "med management with therapy."
            </p>

            <p>
              <strong>Care Coordination:</strong> PMHNPs often serve as the central point of contact in a patient's mental health care, coordinating with other providers, primary care physicians, therapists, and specialists to ensure comprehensive, integrated treatment.
            </p>

            {/* Pull Quote */}
            <div className="bg-[var(--color-light)] border-l-4 border-[var(--color-primary)] p-6 my-8 animate-fade-up">
              <p className="text-[var(--color-ink)] italic text-xl font-cormorant">
                "Psychiatric nurse practitioners bring a unique blend of medical expertise and holistic, patient-centered care that addresses not just symptoms, but the whole person."
              </p>
            </div>

            {/* Section 3 */}
            <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">
              The Nursing Model: A Holistic Approach
            </h2>

            <p>
              What sets psychiatric nurse practitioners apart is their foundation in the nursing model of care, which emphasizes treating the whole person—mind, body, and spirit—rather than just managing symptoms. This approach considers:
            </p>

            <ul className="space-y-3 my-6">
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span>Physical health factors that impact mental wellness</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span>Social and environmental influences on mental health</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span>Lifestyle factors including nutrition, sleep, and exercise</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span>Cultural background and individual values</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span>The patient's goals, preferences, and lived experience</span>
              </li>
            </ul>

            <p>
              This integrative perspective means that a PMHNP might explore not only medication options but also recommend dietary changes, stress management techniques, sleep hygiene practices, or complementary therapies as part of a comprehensive treatment plan.
            </p>

            {/* Section 4 */}
            <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">
              PMHNP vs. Psychiatrist: Understanding the Difference
            </h2>

            <p>
              Many patients wonder about the difference between a psychiatric nurse practitioner and a psychiatrist. Both are qualified mental health providers who can diagnose conditions and prescribe medications, but their training paths differ:
            </p>

            <p>
              Psychiatrists are medical doctors (MDs or DOs) who complete medical school followed by a residency in psychiatry. Their training emphasizes the medical model and biological aspects of mental illness.
            </p>

            <p>
              PMHNPs are advanced practice nurses who complete graduate nursing education with a focus on psychiatric care. Their training emphasizes the holistic nursing model alongside medical treatment.
            </p>

            <p>
              In practice, both can provide excellent care. Research consistently shows that patient outcomes with nurse practitioners are comparable to those with physicians across various specialties, including mental health. The choice often comes down to availability, personal preference, and the specific approach that resonates with you as a patient.
            </p>

            <p>
              One advantage of PMHNPs is accessibility—there is a significant shortage of psychiatrists in many areas, particularly in rural and underserved communities. PMHNPs help fill this gap, often offering shorter wait times and more appointment availability.
            </p>

            {/* Section 5 */}
            <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">
              What to Expect When Working with a PMHNP
            </h2>

            <p>
              Your first appointment with a psychiatric nurse practitioner typically lasts 60-90 minutes. During this initial evaluation, your PMHNP will:
            </p>

            <ul className="space-y-3 my-6">
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span>Gather a comprehensive history of your mental and physical health</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span>Discuss your current symptoms and how they impact your daily life</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span>Review any previous treatments and their effectiveness</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span>Conduct a mental status examination</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span>Discuss your goals for treatment and what you hope to achieve</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span>Collaboratively develop a personalized treatment plan</span>
              </li>
            </ul>

            <p>
              Follow-up appointments are typically shorter, ranging from 15-30 minutes for medication management to 45-60 minutes when therapy is included. Your PMHNP will monitor your progress, adjust treatments as needed, and provide ongoing support as you work toward your mental health goals.
            </p>

            <p>
              The relationship with your PMHNP is a partnership. You should feel heard, respected, and involved in decisions about your care. Don't hesitate to ask questions, voice concerns, or discuss preferences—this open communication is essential to effective treatment.
            </p>

            {/* Section 6 */}
            <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">
              When to Consider Seeing a Psychiatric Nurse Practitioner
            </h2>

            <p>
              You might benefit from working with a PMHNP if you're experiencing:
            </p>

            <ul className="space-y-3 my-6">
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span>Persistent feelings of sadness, anxiety, or hopelessness</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span>Changes in sleep, appetite, or energy levels</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span>Difficulty concentrating or making decisions</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span>Mood swings or emotional instability</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span>Trauma symptoms or intrusive thoughts</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span>Substance use concerns</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span>Relationship or work difficulties related to mental health</span>
              </li>
            </ul>

            <p>
              PMHNPs are equipped to handle a wide range of mental health concerns, from common conditions like depression and anxiety to more complex diagnoses. They can also provide preventive care and wellness strategies to maintain good mental health.
            </p>

            {/* Closing */}
            <p className="mt-8">
              Psychiatric nurse practitioners represent a vital component of modern mental health care, offering accessible, comprehensive, and compassionate treatment. Their unique combination of advanced medical training and holistic nursing philosophy allows them to address not only the symptoms of mental illness but also the underlying factors that contribute to wellness.
            </p>

            <p>
              Whether you're seeking care for the first time or looking for a new provider, a PMHNP can be an excellent choice. In places like Fairfield, CT, where integrative wellness care is increasingly valued, psychiatric nurse practitioners are helping to bridge the gap between traditional mental health treatment and whole-person wellness.
            </p>

            <p>
              If you're struggling with your mental health, remember that seeking help is a sign of strength, not weakness. A qualified psychiatric nurse practitioner can work with you to develop a personalized treatment plan that honors your unique needs, preferences, and goals—supporting you on your journey toward healing and wellness.
            </p>
          </div>
        </div>

        {/* Author Box */}
        <div className="max-w-3xl mx-auto px-6 mt-16">
          <div className="bg-[var(--color-cream)] rounded-2xl p-8 flex gap-6 items-start animate-fade-up">
            <div className="bg-[var(--color-light)] rounded-full w-16 h-16 flex-shrink-0 flex items-center justify-center">
              <svg className="w-8 h-8 text-[var(--color-primary)]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
              </svg>
            </div>
            <div>
              <p className="font-semibold text-[var(--color-ink)] mb-1">Reviewed by JROSE WELLNESS</p>
              <p className="text-[var(--color-muted)] text-sm leading-relaxed">
                Providing comprehensive integrative wellness care in Fairfield, CT. Our approach combines evidence-based treatment with personalized, patient-centered care to support your journey toward optimal mental and physical health.
              </p>
            </div>
          </div>
        </div>
      </article>

      {/* Related Articles */}
      <section className="bg-[var(--color-cream)] py-16">
        <div className="max-w-7xl mx-auto px-6">
          <h3 className="font-cormorant text-3xl text-[var(--color-ink)] mb-8 text-center">Related Resources</h3>
          <div className="grid md:grid-cols-3 gap-8">
            {/* Card 1 */}
            <Link href="/blog" className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 animate-fade-up">
              <div className="aspect-[16/9] bg-gradient-to-br from-[var(--color-light)] to-[var(--color-cream)] flex items-center justify-center">
                <svg className="w-12 h-12 text-[var(--color-primary)]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
                </svg>
              </div>
              <div className="p-6">
                <div className="text-xs uppercase tracking-wider text-[var(--color-accent)] mb-2">Mental Health</div>
                <h4 className="font-cormorant text-xl text-[var(--color-ink)] mb-2 group-hover:text-[var(--color-primary)] transition-colors">
                  Explore More Mental Health Articles
                </h4>
                <p className="text-[var(--color-muted)] text-sm">
                  Discover evidence-based insights on mental wellness, treatment approaches, and integrative care strategies.
                </p>
              </div>
            </Link>

            {/* Card 2 */}
            <Link href="/blog" className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 animate-fade-up">
              <div className="aspect-[16/9] bg-gradient-to-br from-[var(--color-light)] to-[var(--color-cream)] flex items-center justify-center">
                <svg className="w-12 h-12 text-[var(--color-primary)]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div className="p-6">
                <div className="text-xs uppercase tracking-wider text-[var(--color-accent)] mb-2">Patient Education</div>
                <h4 className="font-cormorant text-xl text-[var(--color-ink)] mb-2 group-hover:text-[var(--color-primary)] transition-colors">
                  View All Patient Resources
                </h4>
                <p className="text-[var(--color-muted)] text-sm">
                  Access comprehensive guides to understanding your care, treatment options, and wellness strategies.
                </p>
              </div>
            </Link>

            {/* Card 3 */}
            <Link href="/contact" className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 animate-fade-up">
              <div className="aspect-[16/9] bg-gradient-to-br from-[var(--color-light)] to-[var(--color-cream)] flex items-center justify-center">
                <svg className="w-12 h-12 text-[var(--color-primary)]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
                </svg>
              </div>
              <div className="p-6">
                <div className="text-xs uppercase tracking-wider text-[var(--color-accent)] mb-2">Get Started</div>
                <h4 className="font-cormorant text-xl text-[var(--color-ink)] mb-2 group-hover:text-[var(--color-primary)] transition-colors">
                  Schedule a Consultation
                </h4>
                <p className="text-[var(--color-muted)] text-sm">
                  Take the first step toward wellness. Connect with our team to learn how we can support your health journey.
                </p>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] py-20 text-white text-center">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="font-cormorant text-4xl font-light mb-4">Ready to Take the Next Step?</h2>
          <p className="text-xl mb-8 text-white/90">Our team is here to help.</p>
          <Link
            href="/contact"
            className="inline-block bg-white text-[var(--color-primary)] px-8 py-4 rounded-lg font-semibold hover:bg-[var(--color-cream)] transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
          >
            Contact Us Today
          </Link>
        </div>
      </section>
    </main>
  )
}