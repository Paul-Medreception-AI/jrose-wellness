// Conditions share the exact content schema + layout as services.
import {
  ServicePageTemplate,
  buildServiceMetadata,
  type ServicePageContent,
} from './ServicePageTemplate'

export type ConditionPageContent = ServicePageContent

export function buildConditionMetadata(c: ConditionPageContent) {
  return buildServiceMetadata(c)
}

export function ConditionPageTemplate({ c }: { c: ConditionPageContent }) {
  return <ServicePageTemplate c={c} />
}
