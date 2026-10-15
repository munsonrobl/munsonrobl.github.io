interface ExperienceRole {
  title: string
  period: string
}

interface ExperienceEntry {
  company: string
  period: string
  roles: ExperienceRole[]
  summary: string
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
    summary: 'I learned how internal applications can create a real competitive advantage—turning complex, paper-heavy environmental workflows into faster, more reliable systems built around how the business actually worked.',
  },
  {
    company: 'Quickmax',
    period: '2002 — 2004',
    roles: [{ title: 'Web Programmer / Designer', period: '2002 — 2004' }],
    summary: 'My engineering instincts were seeded in the early days of web development and design, when standards were still evolving and consistency meant learning the quirks of every browser. Building for the web meant moving fluidly between user needs, visual craft, content systems, ecommerce, and code.',
  },
]
