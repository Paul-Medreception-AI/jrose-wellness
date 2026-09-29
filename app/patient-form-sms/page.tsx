import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Patient Form | JROSE WELLNESS',
  robots: { index: false, follow: false },
}

export default function PatientFormSmsPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* TODO(a2p): no GHL form ID was supplied for this build. Set "A2P Opt-In Form ID"
          on the build in the Website Builder tab and rebuild, or paste the GHL embed here.
          The A2P campaign cannot be submitted until this page shows the real consent form. */}
      <div className="max-w-2xl mx-auto px-6 py-24 text-center">
        <h1 className="font-cormorant text-3xl font-semibold text-[var(--color-ink)] mb-4">Patient Form</h1>
        <p className="text-[var(--color-muted)] leading-relaxed">
          [A2P opt-in form not configured] — this page is reserved for the SMS consent form and is not yet live.
        </p>
      </div>
    </main>
  )
}
