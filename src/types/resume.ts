export type Perspective = 'leadership' | 'business' | 'technical'

export interface PerspectiveMeta {
  id: Perspective
  label: string
  eyebrow: string
  title: string
  description: string
  capabilities: string[]
  technologyLine?: string
}

export interface PerspectiveContent {
  title: string
  summary: string
  detail: string
  weight: number
  path?: string[]
}

export interface Achievement {
  id: string
  context: string
  perspectives: Partial<Record<Perspective, PerspectiveContent>>
}

export interface ExperienceRole {
  title: string
  period: string
}

export interface ExperienceEntry {
  company: string
  period: string
  roles: ExperienceRole[]
  summaries: Record<Perspective, string>
  details?: string[]
}

export interface AiResponse {
  id: string
  prompt: string
  answer: string
  perspective?: Perspective
  target?: string
  exploreLabel?: string
}
