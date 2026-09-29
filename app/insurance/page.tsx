import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Insurance & Billing | JROSE WELLNESS',
  description: 'Transparent insurance and billing information for mental health services. We verify coverage before your visit and offer self-pay options with upfront estimates.',
  alternates: { canonical: '/insurance' },
  openGraph: {
    title: 'Insurance & Billing | JROSE WELLNESS',
    description: 'Transparent insurance and billing information for mental health services. We verify coverage before your visit and offer self-pay options with upfront estimates.',
    url: 'https://jrosewellness.com/insurance',
    siteName: 'JROSE WELLNESS',
    type: 'website',
    images: [{ url: '/og-image.png', width: 1200, height: 630 }]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Insurance & Billing | JROSE WELLNESS',
    description: 'Transparent insurance and billing information for mental health services. We verify coverage before your visit and offer self-pay options with upfront estimates.',
    images: ['/og-image.png']
  }
}

export default function InsurancePage() {
  return (
    <main>
      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] py-24 text-white text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h1 className="font-cormorant text-5xl font-light mb-6 animate-fade-up">
            Insurance & Billing
          </h1>
          <p className="text-xl text-white/90 animate-fade-up">
            Transparent pricing and billing information
          </p>
        </div>
      </section>

      <section className="bg-[var(--color-cream)] py-24">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="font-cormorant text-4xl text-[var(--color-primary)] text-center mb-16 animate-fade-up">
            Accepted Insurance Plans
          </h2>
          
          {/* ⚠️ DO NOT NAME SPECIFIC INSURANCE CARRIERS WITHOUT VERIFICATION FROM THE PRACTICE.
              The practice has not provided a list of contracted carriers. Naming carriers we
              have not verified constitutes an advertising claim the practice cannot support. */}
          
          <div className="max-w-3xl mx-auto bg-white rounded-2xl p-12 shadow-sm animate-fade-up">
            <div className="text-center mb-8">
              <svg className="w-16 h-16 mx-auto mb-6 text-[var(--color-accent)]" stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z" />
              </svg>
              <h3 className="font-cormorant text-2xl text-[var(--color-ink)] mb-4">
                We Verify Your Coverage Before Your Visit
              </h3>
              <p className="text-[var(--color-muted)] text-lg leading-relaxed mb-6">
                Coverage for psychiatric and mental health services varies significantly between insurance plans. Before scheduling your first appointment, we verify your specific benefits, including copays, deductibles, and any prior authorization requirements.
              </p>
              <p className="text-[var(--color-ink)] font-medium mb-6">
                Please call us to verify your insurance coverage:
              </p>
              <a href="tel:+12037771234" className="inline-block bg-[var(--color-accent)] hover:bg-[var(--color-accent-dark)] text-white px-8 py-3 rounded-lg transition-colors font-medium">
                (203) 777-1234
              </a>
            </div>
            
            <div className="border-t border-[var(--color-border)] pt-8 mt-8">
              <p className="text-[var(--color-muted)] text-center">
                <strong className="text-[var(--color-ink)]">Self-pay patients are always welcome.</strong> We provide upfront estimates for all services before your appointment.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-24">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="font-cormorant text-4xl text-[var(--color-primary)] text-center mb-16 animate-fade-up">
            How Billing Works
          </h2>
          
          <div className="grid md:grid-cols-4 gap-8 max-w-6xl mx-auto">
            <div className="text-center animate-fade-up">
              <div className="bg-[var(--color-light)] w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-10 h-10 text-[var(--color-accent)]" stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z" />
                </svg>
              </div>
              <h3 className="font-cormorant text-xl text-[var(--color-ink)] mb-3">
                Verify Coverage
              </h3>
              <p className="text-[var(--color-muted)] text-sm leading-relaxed">
                We contact your insurance company to verify your benefits, copay amounts, and deductible status before your first visit.
              </p>
            </div>

            <div className="text-center animate-fade-up">
              <div className="bg-[var(--color-light)] w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-10 h-10 text-[var(--color-accent)]" stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
                </svg>
              </div>
              <h3 className="font-cormorant text-xl text-[var(--color-ink)] mb-3">
                Service Provided
              </h3>
              <p className="text-[var(--color-muted)] text-sm leading-relaxed">
                You receive your psychiatric evaluation or treatment session. Any required copay is collected at the time of service.
              </p>
            </div>

            <div className="text-center animate-fade-up">
              <div className="bg-[var(--color-light)] w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-10 h-10 text-[var(--color-accent)]" stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z" />
                </svg>
              </div>
              <h3 className="font-cormorant text-xl text-[var(--color-ink)] mb-3">
                Claim Submitted
              </h3>
              <p className="text-[var(--color-muted)] text-sm leading-relaxed">
                We submit the claim to your insurance company with all necessary documentation and follow up to ensure timely processing.
              </p>
            </div>

            <div className="text-center animate-fade-up">
              <div className="bg-[var(--color-light)] w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-10 h-10 text-[var(--color-accent)]" stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18.75a60.07 60.07 0 0 1 15.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 0 1 3 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 0 0-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 0 1-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 0 0 3 15h-.75M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm3 0h.008v.008H18V10.5Zm-12 0h.008v.008H6V10.5Z" />
                </svg>
              </div>
              <h3 className="font-cormorant text-xl text-[var(--color-ink)] mb-3">
                You Pay Remainder
              </h3>
              <p className="text-[var(--color-muted)] text-sm leading-relaxed">
                After insurance processes your claim, you receive an Explanation of Benefits (EOB) and are responsible for any remaining balance.
              </p>
            </div>
          </div>

          <div className="max-w-3xl mx-auto mt-16 bg-[var(--color-cream)] rounded-2xl p-12 animate-fade-up">
            <h3 className="font-cormorant text-2xl text-[var(--color-ink)] mb-6">
              Understanding Your Insurance Terms
            </h3>
            
            <div className="space-y-6">
              <div>
                <h4 className="font-semibold text-[var(--color-ink)] mb-2">Copay</h4>
                <p className="text-[var(--color-muted)] leading-relaxed">
                  A fixed amount you pay at each visit (for example, $30 per session). This amount is typically collected at the time of your appointment.
                </p>
              </div>
              
              <div>
                <h4 className="font-semibold text-[var(--color-ink)] mb-2">Deductible</h4>
                <p className="text-[var(--color-muted)] leading-relaxed">
                  The amount you must pay out-of-pocket before your insurance begins covering services. Once you meet your annual deductible, your insurance benefits activate.
                </p>
              </div>
              
              <div>
                <h4 className="font-semibold text-[var(--color-ink)] mb-2">Coinsurance</h4>
                <p className="text-[var(--color-muted)] leading-relaxed">
                  After meeting your deductible, coinsurance is the percentage of costs you share with your insurance company (for example, you pay 20% and insurance pays 80%).
                </p>
              </div>
              
              <div>
                <h4 className="font-semibold text-[var(--color-ink)] mb-2">Explanation of Benefits (EOB)</h4>
                <p className="text-[var(--color-muted)] leading-relaxed">
                  A statement from your insurance company explaining what they paid, what you owe, and how they calculated those amounts. This is not a bill, but shows you what to expect.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[var(--color-cream)] py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="bg-[var(--color-light)] rounded-2xl p-12 max-w-3xl mx-auto animate-fade-up">
            <div className="flex items-start gap-6 mb-8">
              <div className="flex-shrink-0">
                <svg className="w-12 h-12 text-[var(--color-accent)]" stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18.75a60.07 60.07 0 0 1 15.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 0 1 3 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 0 0-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 0 1-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 0 0 3 15h-.75M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm3 0h.008v.008H18V10.5Zm-12 0h.008v.008H6V10.5Z" />
                </svg>
              </div>
              <div>
                <h3 className="font-cormorant text-3xl text-[var(--color-ink)] mb-4">
                  Self-Pay Options
                </h3>
                <p className="text-[var(--color-muted)] text-lg leading-relaxed mb-6">
                  We welcome self-pay patients and believe quality mental health care should be accessible to everyone, regardless of insurance status.
                </p>
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-white rounded-xl p-6">
                <h4 className="font-semibold text-[var(--color-ink)] mb-3">Upfront Cost Estimates</h4>
                <p className="text-[var(--color-muted)] leading-relaxed">
                  Before your first appointment, we provide a clear, written estimate of what you'll pay. No surprises, no hidden fees.
                </p>
              </div>

              <div className="bg-white rounded-xl p-6">
                <h4 className="font-semibold text-[var(--color-ink)] mb-3">Flexible Payment Plans</h4>
                <p className="text-[var(--color-muted)] leading-relaxed">
                  For patients who need it, we offer payment plans that make care more manageable. We'll work with you to find an arrangement that fits your budget.
                </p>
              </div>

              <div className="bg-white rounded-xl p-6">
                <h4 className="font-semibold text-[var(--color-ink)] mb-3">Sliding Scale Consideration</h4>
                <p className="text-[var(--color-muted)] leading-relaxed">
                  We offer sliding scale fees on a limited basis for patients experiencing financial hardship. Please discuss your situation with us when scheduling.
                </p>
              </div>

              <div className="bg-white rounded-xl p-6 border-2 border-[var(--color-accent)]">
                <h4 className="font-semibold text-[var(--color-ink)] mb-3">Your Rights Under the No Surprises Act</h4>
                <p className="text-[var(--color-muted)] leading-relaxed mb-4">
                  You have the right to receive a "Good Faith Estimate" of expected charges before you receive services. This applies to all uninsured or self-pay patients.
                </p>
                <p className="text-[var(--color-muted)] leading-relaxed">
                  Under federal law, health care providers must give you an estimate of the bill for medical items and services before you get care. If the actual bill is significantly different from your Good Faith Estimate, you have the right to dispute the bill.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-24">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="font-cormorant text-4xl text-[var(--color-primary)] text-center mb-16 animate-fade-up">
            Billing Questions & Answers
          </h2>

          <div className="space-y-4 animate-fade-up">
            <details className="group bg-[var(--color-cream)] rounded-xl overflow-hidden">
              <summary className="cursor-pointer list-none p-6 font-semibold text-[var(--color-ink)] text-lg flex items-center justify-between hover:bg-[var(--color-light)] transition-colors">
                <span>When is payment due?</span>
                <svg className="w-5 h-5 text-[var(--color-accent)] transition-transform group-open:rotate-180" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="m19 9-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-6 pb-6 text-[var(--color-muted)] leading-relaxed">
                <p>
                  Copays are collected at the time of service. For patients with deductibles or coinsurance, we submit claims to your insurance first, then bill you for any remaining balance after insurance processes the claim. Self-pay patients pay at the time of service or according to an agreed payment plan.
                </p>
              </div>
            </details>

            <details className="group bg-[var(--color-cream)] rounded-xl overflow-hidden">
              <summary className="cursor-pointer list-none p-6 font-semibold text-[var(--color-ink)] text-lg flex items-center justify-between hover:bg-[var(--color-light)] transition-colors">
                <span>What payment methods do you accept?</span>
                <svg className="w-5 h-5 text-[var(--color-accent)] transition-transform group-open:rotate-180" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="m19 9-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-6 pb-6 text-[var(--color-muted)] leading-relaxed">
                <p>
                  We accept all major credit cards, debit cards, HSA/FSA cards, electronic checks, and cash. For your convenience, we can securely store your payment method on file for recurring appointments.
                </p>
              </div>
            </details>

            <details className="group bg-[var(--color-cream)] rounded-xl overflow-hidden">
              <summary className="cursor-pointer list-none p-6 font-semibold text-[var(--color-ink)] text-lg flex items-center justify-between hover:bg-[var(--color-light)] transition-colors">
                <span>What if my insurance denies my claim?</span>
                <svg className="w-5 h-5 text-[var(--color-accent)] transition-transform group-open:rotate-180" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="m19 9-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-6 pb-6 text-[var(--color-muted)] leading-relaxed">
                <p className="mb-4">
                  If your insurance company denies coverage for a service we've provided, we'll work with you to understand why and explore options. Common reasons for denials include services not covered under your plan, lack of prior authorization, or billing errors.
                </p>
                <p>
                  We'll help you file an appeal if appropriate, or work out a self-pay arrangement if the denial stands. You're never left alone to navigate insurance complications.
                </p>
              </div>
            </details>

            <details className="group bg-[var(--color-cream)] rounded-xl overflow-hidden">
              <summary className="cursor-pointer list-none p-6 font-semibold text-[var(--color-ink)] text-lg flex items-center justify-between hover:bg-[var(--color-light)] transition-colors">
                <span>Can I use my HSA or FSA to pay?</span>
                <svg className="w-5 h-5 text-[var(--color-accent)] transition-transform group-open:rotate-180" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="m19 9-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-6 pb-6 text-[var(--color-muted)] leading-relaxed">
                <p>
                  Yes! Psychiatric and mental health services are qualified medical expenses under HSA (Health Savings Account) and FSA (Flexible Spending Account) plans. You can use these funds for copays, deductibles, coinsurance, or self-pay fees.
                </p>
              </div>
            </details>

            <details className="group bg-[var(--color-cream)] rounded-xl overflow-hidden">
              <summary className="cursor-pointer list-none p-6 font-semibold text-[var(--color-ink)] text-lg flex items-center justify-between hover:bg-[var(--color-light)] transition-colors">
                <span>Do you offer superbills for out-of-network reimbursement?</span>
                <svg className="w-5 h-5 text-[var(--color-accent)] transition-transform group-open:rotate-180" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="m19 9-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-6 pb-6 text-[var(--color-muted)] leading-relaxed">
                <p className="mb-4">
                  Yes. If we're not in-network with your insurance plan but your plan offers out-of-network benefits, we can provide a detailed superbill after each session.
                </p>
                <p>
                  A superbill contains all the information your insurance company needs to process a reimbursement claim. You submit it directly to your insurer, and they reimburse you according to your out-of-network benefits. We're happy to explain how this process works.
                </p>
              </div>
            </details>
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] py-24">
        <div className="max-w-4xl mx-auto px-6 text-center text-white animate-fade-up">
          <h2 className="font-cormorant text-4xl font-light mb-6">
            Questions About Billing or Insurance?
          </h2>
          <p className="text-xl text-white/90 mb-10 leading-relaxed">
            We're here to help you understand your coverage and payment options before your first visit.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-[var(--color-accent)] hover:bg-[var(--color-accent-dark)] text-white px-10 py-4 rounded-lg transition-colors text-lg font-medium"
          >
            Contact Us
          </Link>
        </div>
      </section>
    </main>
  )
}