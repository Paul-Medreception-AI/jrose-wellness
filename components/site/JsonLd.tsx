/**
 * Structured data. Pass one schema.org object or an array of them; each gets
 * "@context": "https://schema.org" if it does not carry one already.
 *
 *   <JsonLd data={{ '@type': 'FAQPage', mainEntity: [...] }} />
 */
type Json = Record<string, unknown>

function withContext(o: object): Json {
  const obj = o as Json
  return '@context' in obj ? obj : { '@context': 'https://schema.org', ...obj }
}

export default function JsonLd({ data }: { data: object | object[] }) {
  const payload = Array.isArray(data) ? data.map(withContext) : withContext(data)
  // Escape "<" so a string inside the data can never close the script tag.
  const json = JSON.stringify(payload).replace(/</g, '\\u003c')
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: json }} />
}
