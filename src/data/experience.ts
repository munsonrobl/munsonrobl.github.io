interface ExperienceRole {
  title: string
  period: string
}

interface ExperienceEntry {
  company: string
  period: string
  roles: ExperienceRole[]
  summary: string
  details?: string[]
}

export const experience: ExperienceEntry[] = [
  {
    company: 'Infotech',
    period: '2010 — Present',
    roles: [
      { title: 'Associate Director of Engineering', period: 'Dec 2025 — Present' },
      { title: 'Assistant Director of Engineering', period: 'Sep 2022 — Nov 2025' },
      { title: 'Senior Lead Software Engineer', period: 'Nov 2020 — Aug 2022' },
      { title: 'Lead Software Engineer', period: 'Apr 2018 — Nov 2020' },
      { title: 'Senior Software Engineer', period: '2014 — Apr 2018' },
      { title: 'Software Engineer II', period: '2012 — 2014' },
      { title: 'Software Engineer', period: 'Nov 2010 — 2012' },
    ],
    summary: 'Lead multiple teams through engineering leads and managers, guide platform strategy and product modernization, and develop engineering leadership. Helped build the data capability that became a self-service platform and the foundation of the company’s first Data-as-a-Service product.',
    details: [
      'Led developers and designers through a six-month Doc Express rewrite whose architecture still supports a product handling more than 15 times its original monthly document volume.',
      'Shaped Signet architecture and engineering practices, including data models, APIs, containerized development, and automated production delivery.',
      'Built shared OAuth2 SSO, account management, billing APIs, and support tooling that became foundational capabilities across the product portfolio.',
    ],
  },
  {
    company: 'Private SaaS venture',
    period: 'Launched 2022',
    roles: [{ title: 'Co-owner', period: '' }],
    summary: 'Helped build a profitable SaaS and digital product business, gaining direct experience across product, paid acquisition, pricing, financials, ecommerce, renewals, support automation, and operating tradeoffs.',
  },
  {
    company: 'Jones Edmunds',
    period: '2004 — 2010',
    roles: [{ title: 'Application Developer / Database Administrator', period: '2004 — 2010' }],
    summary: 'Worked directly with department leaders to build software, databases, and reporting systems that automated environmental-compliance workflows and improved physical-records management.',
  },
  {
    company: 'Quickmax',
    period: '2002 — 2004',
    roles: [{ title: 'Web Programmer / Designer', period: '2002 — 2004' }],
    summary: 'Gathered requirements and built CMS-driven websites, e-commerce systems, and custom applications while helping modernize legacy ASP software in C# and ASP.NET.',
  },
]
