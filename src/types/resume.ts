export type Perspective = 'leadership' | 'business' | 'technical'

export interface PerspectiveMeta {
  id: Perspective
  label: string
  heading: string
  intro: string[]
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
  summary: string
  details?: string[]
}
