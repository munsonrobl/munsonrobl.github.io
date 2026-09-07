export const profile = {
  name: 'Robert Munson',
  initials: 'RM',
  positioning: 'Engineering Leader · Product Builder · Technologist',
  summary:
    'Engineering leader with deep technical roots, product instincts, and firsthand experience building and operating software businesses and platforms.',
  photo: new URL('../../assets/img/profile-photo-Rob-munson.JPG', import.meta.url).href,
} as const

export const credibility = [
  { value: '20+ Years', label: 'Building software' },
  { value: 'Engineering Leadership', label: 'Teams · Strategy · Delivery' },
  { value: 'Products + Platforms', label: 'Customer · Internal · Shared' },
  { value: 'Business Builder', label: 'Product · Operations · P&L' },
] as const
