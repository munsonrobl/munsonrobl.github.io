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
    summary: 'Lead multiple teams through engineering leads and managers, guide platform strategy and product modernization, and develop engineering leadership. Helped build the data capability that became a self-service platform and the foundation of the company’s first Data-as-a-Service product.',
    details: [
      'Led a small team through a substantial Doc Express rewrite spanning requirements, architecture, configurable workflows, digital signatures, reporting, and production-data migration.',
      'Shaped Signet architecture, data modeling, APIs, containerized development, AWS delivery, CI/CD, and serverless integration direction.',
      'Advanced shared capabilities across SSO, account management, billing APIs, event logging, and reusable product services.',
    ],
  },
  {
    company: 'Private SaaS venture',
    period: 'Launched 2022',
    roles: [{ title: 'Co-owner', period: '' }],
    summary: 'Co-own and operate a private SaaS and digital product business. Responsibilities span product, engineering, paid acquisition and marketing, financials, ecommerce and user-journey optimization, renewals, support workflow automation, and ongoing product operations.',
  },
  {
    company: 'Jones Edmunds',
    period: '2004 — 2010',
    roles: [{ title: 'Application Developer / Database Administrator', period: '2004 — 2010' }],
    summary: 'Built internal software, databases, intranet tools, environmental compliance systems, reporting automation, and physical-record management systems.',
  },
  {
    company: 'Quickmax',
    period: '2002 — 2004',
    roles: [{ title: 'Web Developer', period: '2002 — 2004' }],
    summary: 'Developed websites and e-commerce systems while helping modernize early ASP applications toward ASP.NET.',
  },
]
