// Conditions share the exact content schema and layout as services (and /who-we-help pages).
import {
  ServicePageTemplate,
  buildServiceMetadata,
  type ServicePageContent,
} from './ServicePageTemplate'

export type { FAQ, RelatedLink, IconCard, MediaVideo } from './ServicePageTemplate'
export type ConditionPageContent = ServicePageContent

export function buildConditionMetadata(c: ConditionPageContent) {
  return buildServiceMetadata(c)
}

export function ConditionPageTemplate({ c }: { c: ConditionPageContent }) {
  return <ServicePageTemplate c={c} />
}
