import type { ExperienceEntry } from '../types/resume'

export const experience: ExperienceEntry[] = [
  {
    company: 'Infotech',
    period: '2010 — Present',
    roles: [
      { title: 'Associate Director of Engineering', period: '2025 — Present' },
      { title: 'Assistant Director of Engineering', period: '2022 — 2025' },
      { title: 'Senior Lead Software Engineer', period: '2020 — 2022' },
      { title: 'Lead Software Engineer', period: '2018 — 2020' },
      { title: 'Senior Software Engineer', period: '2014 — 2018' },
      { title: 'Software Engineer II', period: '2012 — 2014' },
      { title: 'Software Engineer', period: '2010 — 2012' },
    ],
    summaries: {
      leadership: 'Progressed from software engineer to organizational leader, now guiding multiple teams, engineering leaders, platform strategy, product modernization, and changes in engineering practice.',
      business: 'Connected engineering execution to product strategy, data commercialization, customer discovery, executive enablement, and investment decisions through periods of organizational change.',
      technical: 'Advanced through product architecture and delivery into shared platforms, identity, cloud and data systems, acquired-product integration, and technical governance.',
    },
    details: [
      'Led a small team through a substantial Doc Express rewrite spanning requirements, architecture, configurable workflows, digital signatures, reporting, and production-data migration.',
      'Shaped Signet architecture, data modeling, APIs, containerized development, AWS delivery, CI/CD, and serverless integration direction.',
      'Advanced shared capabilities across SSO, account management, billing APIs, event logging, and reusable product services.',
    ],
  },
  {
    company: 'Jones Edmunds',
    period: '2004 — 2010',
    roles: [{ title: 'Application Developer / Database Administrator', period: '2004 — 2010' }],
    summaries: {
      leadership: 'Built the delivery and stakeholder foundation that later supported broader technical and organizational leadership.',
      business: 'Developed internal business systems and reporting automation grounded in real operational workflows.',
      technical: 'Built internal software, databases, intranet tools, environmental compliance systems, reporting automation, and physical-record management systems.',
    },
  },
  {
    company: 'Quickmax',
    period: '2002 — 2004',
    roles: [{ title: 'Web Developer', period: '2002 — 2004' }],
    summaries: {
      leadership: 'Began a career-long practice of translating ambiguous needs into dependable software.',
      business: 'Worked directly with requirements, websites, e-commerce, databases, and hosting.',
      technical: 'Developed websites and e-commerce systems while helping modernize early ASP applications toward ASP.NET.',
    },
  },
]
