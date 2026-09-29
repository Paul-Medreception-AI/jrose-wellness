import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'What is Integrative Mental Health Care? | JROSE WELLNESS',
  description: 'Discover how integrative mental health care combines conventional psychiatry with complementary therapies to treat the whole person—mind, body, and spirit.',
  alternates: { canonical: '/blog/what-is-integrative-mental-health-care' },
  openGraph: {
    title: 'What is Integrative Mental Health Care? | JROSE WELLNESS',
    description: 'Discover how integrative mental health care combines conventional psychiatry with complementary therapies to treat the whole person—mind, body, and spirit.',
    url: 'https://jrosewellness.com/blog/what-is-integrative-mental-health-care',
    siteName: 'JROSE WELLNESS',
    type: 'website',
    images: [{ url: '/og-image.png', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'What is Integrative Mental Health Care? | JROSE WELLNESS',
    description: 'Discover how integrative mental health care combines conventional psychiatry with complementary therapies to treat the whole person—mind, body, and spirit.',
    images: ['/og-image.png'],
  },
}

export default function BlogPost() {
  return (
    <main className="min-h-screen bg-white">
      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] py-20 text-white">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-sm mb-6 text-white/80">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span className="mx-2">›</span>
            <Link href="/blog" className="hover:text-white transition-colors">Resources</Link>
            <span className="mx-2">›</span>
            <span>Article</span>
          </div>
          
          <div className="text-xs uppercase tracking-widest text-white/70 mb-4">Mental Health</div>
          
          <h1 className="font-cormorant text-5xl font-light leading-tight max-w-3xl mx-auto text-center mb-6">
            What is Integrative Mental Health Care?
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

      <article className="bg-white py-20">
        <div className="max-w-3xl mx-auto px-6">
          <div className="text-[var(--color-ink)] leading-loose text-base">
            <p className="text-xl mb-8 leading-relaxed">
              If you've been struggling with anxiety, depression, or other mental health challenges, you've likely explored various treatment options—from medication to therapy to lifestyle changes. But what if there was an approach that brought all these pieces together? That's the promise of integrative mental health care, a comprehensive framework that treats not just your symptoms, but you as a whole person.
            </p>

            <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">
              Understanding Integrative Mental Health Care
            </h2>
            
            <p className="mb-6">
              Integrative mental health care is an approach that combines conventional psychiatric treatment with evidence-based complementary therapies to address mental health conditions. Rather than relying solely on medication or talk therapy, this model recognizes that mental wellness is influenced by multiple factors: biological, psychological, social, and spiritual.
            </p>
            
            <p className="mb-6">
              At its core, integrative care is patient-centered. It acknowledges that what works for one person may not work for another, and it empowers you to be an active participant in your own healing journey. Practitioners who embrace this approach spend time understanding your unique circumstances, preferences, and goals before creating a personalized treatment plan.
            </p>

            <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">
              The Mind-Body Connection
            </h2>
            
            <p className="mb-6">
              One of the foundational principles of integrative mental health care is the recognition that mind and body are deeply interconnected. Research consistently shows that physical health problems can contribute to mental health challenges, and vice versa. For example:
            </p>
            
            <ul className="space-y-3 mb-6 ml-6">
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span>Chronic inflammation has been linked to depression and anxiety disorders</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span>Gut health and the microbiome play a significant role in mood regulation</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span>Sleep disturbances can both cause and exacerbate mental health conditions</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span>Nutritional deficiencies can manifest as mood disorders or cognitive impairment</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span>Hormonal imbalances can directly impact emotional well-being</span>
              </li>
            </ul>
            
            <p className="mb-6">
              By addressing these physical factors alongside psychological interventions, integrative mental health care offers a more complete path to wellness.
            </p>

            <div className="bg-[var(--color-light)] border-l-4 border-[var(--color-primary)] p-6 my-8 text-[var(--color-ink)] italic text-xl font-cormorant">
              "Mental health is not just in your head—it's in your whole body. When we treat the whole person, we create lasting change."
            </div>

            <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">
              What Does Integrative Treatment Look Like?
            </h2>
            
            <p className="mb-6">
              An integrative mental health approach might include any combination of the following, tailored to your specific needs:
            </p>
            
            <p className="mb-4 font-semibold text-[var(--color-primary)]">Conventional Treatments:</p>
            <ul className="space-y-2 mb-6 ml-6">
              <li className="flex items-start gap-3">
                <svg className="w-5 h-5 text-[var(--color-accent)] flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
                <span>Psychotherapy (cognitive-behavioral therapy, psychodynamic therapy, EMDR, etc.)</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-5 h-5 text-[var(--color-accent)] flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
                <span>Psychiatric medications when appropriate</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-5 h-5 text-[var(--color-accent)] flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
                <span>Diagnostic assessment and monitoring</span>
              </li>
            </ul>
            
            <p className="mb-4 font-semibold text-[var(--color-primary)]">Complementary Therapies:</p>
            <ul className="space-y-2 mb-6 ml-6">
              <li className="flex items-start gap-3">
                <svg className="w-5 h-5 text-[var(--color-accent)] flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
                <span>Nutritional counseling and targeted supplementation</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-5 h-5 text-[var(--color-accent)] flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
                <span>Mind-body practices like yoga, meditation, and breathwork</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-5 h-5 text-[var(--color-accent)] flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
                <span>Exercise prescription and movement therapy</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-5 h-5 text-[var(--color-accent)] flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
                <span>Acupuncture and traditional Chinese medicine</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-5 h-5 text-[var(--color-accent)] flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
                <span>Sleep hygiene optimization</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-5 h-5 text-[var(--color-accent)] flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
                <span>Stress management techniques</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-5 h-5 text-[var(--color-accent)] flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
                <span>Connection and community support</span>
              </li>
            </ul>
            
            <p className="mb-6">
              The key is that these approaches work together synergistically. For instance, addressing nutritional deficiencies may enhance the effectiveness of antidepressant medication, while mindfulness practices can complement cognitive-behavioral therapy.
            </p>

            <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">
              The Evidence Behind Integrative Approaches
            </h2>
            
            <p className="mb-6">
              While integrative mental health care may sound unconventional, many of its components are backed by robust scientific research:
            </p>
            
            <p className="mb-6">
              Studies published in journals like <em>JAMA Psychiatry</em> and <em>The Lancet Psychiatry</em> have demonstrated that omega-3 fatty acids, particularly EPA, can be effective in treating depression. Research on mindfulness-based cognitive therapy shows it can be as effective as medication in preventing depression relapse. Exercise has been shown in numerous studies to have antidepressant effects comparable to medication for mild to moderate depression.
            </p>
            
            <p className="mb-6">
              The gut-brain axis has emerged as a critical area of research, with studies showing that probiotics and dietary interventions can influence mood and anxiety levels. Vitamin D deficiency has been consistently associated with depression, and supplementation studies show promise in improving symptoms.
            </p>
            
            <p className="mb-6">
              What makes integrative care particularly powerful is that it doesn't ask you to choose between conventional and complementary approaches—it brings the best of both worlds together based on what research tells us works.
            </p>

            <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">
              Who Can Benefit from Integrative Mental Health Care?
            </h2>
            
            <p className="mb-6">
              Integrative approaches can benefit a wide range of individuals, including those who:
            </p>
            
            <ul className="space-y-3 mb-6 ml-6">
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span>Haven't found adequate relief from conventional treatments alone</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span>Experience side effects from psychiatric medications</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span>Prefer a more natural, holistic approach when possible</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span>Have co-occurring physical and mental health conditions</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span>Want to address root causes rather than just symptoms</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span>Are interested in preventive mental health strategies</span>
              </li>
            </ul>
            
            <p className="mb-6">
              This approach is particularly valuable for conditions like depression, anxiety disorders, PTSD, bipolar disorder, ADHD, and stress-related conditions. It's also beneficial for those seeking to optimize their mental wellness even in the absence of a diagnosed condition.
            </p>

            <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">
              Taking the First Step
            </h2>
            
            <p className="mb-6">
              If you're considering integrative mental health care, here are some practical steps to get started:
            </p>
            
            <ul className="space-y-3 mb-6 ml-6">
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span><strong>Seek a qualified practitioner:</strong> Look for providers who have training in both conventional psychiatry or psychology and integrative approaches</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span><strong>Be prepared to share your full story:</strong> Integrative practitioners will want to understand your complete health history, lifestyle, and goals</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span><strong>Be patient with the process:</strong> Integrative care often takes a more gradual approach than conventional treatment alone, but the results can be more sustainable</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span><strong>Stay engaged:</strong> This approach works best when you're an active participant in your care plan</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span><strong>Don't discontinue current treatments without guidance:</strong> If you're already receiving mental health care, work with your provider to integrate new approaches safely</span>
              </li>
            </ul>
            
            <p className="mb-6">
              Remember, integrative mental health care is not about rejecting conventional medicine—it's about expanding your options and creating a personalized approach that addresses all aspects of your well-being.
            </p>

            <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">
              Your Mental Health Matters
            </h2>
            
            <p className="mb-6">
              Mental health challenges can feel overwhelming, and navigating treatment options can be confusing. Integrative mental health care offers a comprehensive, compassionate approach that honors your unique needs and empowers you to heal from the inside out.
            </p>
            
            <p className="mb-6">
              Whether you're struggling with a diagnosed mental health condition or simply seeking greater emotional balance and resilience, an integrative approach can help you build a stronger foundation for lasting wellness. You deserve care that sees you as a whole person—mind, body, and spirit.
            </p>
            
            <p className="text-lg font-semibold text-[var(--color-primary)] mb-6">
              If you're ready to explore how integrative care can support your mental health journey, reach out to a qualified practitioner who can guide you toward personalized, evidence-based solutions.
            </p>
          </div>
        </div>
      </article>

      <section className="bg-[var(--color-cream)] py-12">
        <div className="max-w-3xl mx-auto px-6">
          <div className="bg-[var(--color-cream)] rounded-2xl p-8 flex gap-6 items-start">
            <div className="bg-[var(--color-light)] rounded-full w-16 h-16 flex items-center justify-center flex-shrink-0">
              <svg className="w-8 h-8 text-[var(--color-primary)]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
              </svg>
            </div>
            <div>
              <h3 className="font-cormorant text-2xl text-[var(--color-ink)] mb-2">Reviewed by JROSE WELLNESS</h3>
              <p className="text-[var(--color-muted)] leading-relaxed">
                This article has been reviewed for accuracy and clinical relevance. At JROSE WELLNESS, we're committed to providing evidence-based information to support your integrative wellness care journey in Fairfield, CT and beyond.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[var(--color-cream)] py-16">
        <div className="max-w-7xl mx-auto px-6">
          <h3 className="font-cormorant text-3xl text-[var(--color-ink)] mb-8 text-center">Related Resources</h3>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Link href="/blog" className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300">
              <div className="bg-gradient-to-br from-[var(--color-light)] to-white p-12 flex items-center justify-center">
                <svg className="w-16 h-16 text-[var(--color-primary)]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
                </svg>
              </div>
              <div className="p-6">
                <h4 className="font-cormorant text-xl text-[var(--color-ink)] mb-2 group-hover:text-[var(--color-primary)] transition-colors">
                  More Health Articles
                </h4>
                <p className="text-[var(--color-muted)] text-sm leading-relaxed">
                  Explore our complete library of evidence-based wellness resources
                </p>
              </div>
            </Link>

            <Link href="/services" className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300">
              <div className="bg-gradient-to-br from-[var(--color-light)] to-white p-12 flex items-center justify-center">
                <svg className="w-16 h-16 text-[var(--color-primary)]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z" />
                </svg>
              </div>
              <div className="p-6">
                <h4 className="font-cormorant text-xl text-[var(--color-ink)] mb-2 group-hover:text-[var(--color-primary)] transition-colors">
                  Our Services
                </h4>
                <p className="text-[var(--color-muted)] text-sm leading-relaxed">
                  Discover our comprehensive integrative wellness services
                </p>
              </div>
            </Link>

            <Link href="/contact" className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300">
              <div className="bg-gradient-to-br from-[var(--color-light)] to-white p-12 flex items-center justify-center">
                <svg className="w-16 h-16 text-[var(--color-primary)]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
                </svg>
              </div>
              <div className="p-6">
                <h4 className="font-cormorant text-xl text-[var(--color-ink)] mb-2 group-hover:text-[var(--color-primary)] transition-colors">
                  Schedule a Consultation
                </h4>
                <p className="text-[var(--color-muted)] text-sm leading-relaxed">
                  Take the first step toward personalized integrative care
                </p>
              </div>
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] py-20 text-white text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="font-cormorant text-4xl font-light mb-4">
            Ready to Take the Next Step?
          </h2>
          <p className="text-xl mb-8 text-white/90">
            Our team is here to help you explore integrative wellness care options tailored to your unique needs.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-white text-[var(--color-primary)] px-8 py-4 rounded-full font-semibold hover:bg-[var(--color-cream)] transition-all duration-300 hover:scale-105 hover:shadow-2xl"
          >
            Contact Us Today
          </Link>
        </div>
      </section>
    </main>
  )
}