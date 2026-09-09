export const capabilityGroups = [
  {
    title: 'Leadership',
    items: [
      {
        name: 'Organizational leadership',
        proof: 'Lead 30+ engineers across multiple product teams through managers and engineering leads.',
      },
      {
        name: 'Leader development',
        proof: 'Coach emerging leaders and step in directly when teams need clarity, accountability, or delivery momentum.',
      },
      {
        name: 'Platform strategy',
        proof: 'Guide long-lived and acquired products toward shared identity, services, and application foundations.',
      },
      {
        name: 'Change leadership',
        proof: 'Help teams stay effective through ownership, organizational, and product transitions.',
      },
    ],
  },
  {
    title: 'Business & Product',
    items: [
      {
        name: 'Product strategy',
        proof: 'Connect engineering investment to customer needs, operating realities, and long-term product direction.',
      },
      {
        name: 'Commercialization',
        proof: 'Helped turn an internal data capability into the foundation of the company\u2019s first Data-as-a-Service product.',
      },
      {
        name: 'Business ownership',
        proof: 'Co-own a profitable digital education business spanning acquisition, conversion, renewals, and support.',
      },
      {
        name: 'Build vs. buy',
        proof: 'Choose mature platforms or custom logic based on differentiation, operating cost, and maintenance burden.',
      },
    ],
  },
  {
    title: 'Technical',
    items: [
      {
        name: 'Software architecture',
        proof: 'Evaluate APIs, SaaS platforms, integrations, and modernization with a hands-on engineering foundation.',
      },
      {
        name: 'Data platforms',
        proof: 'Worked across PostgreSQL, Redshift, Power BI, AWS, data pipelines, and external data delivery.',
      },
      {
        name: 'Cloud & delivery systems',
        proof: 'Experience with containerized development, AWS delivery, CI/CD, and serverless integration.',
      },
      {
        name: 'AI-assisted engineering',
        proof: 'Bring AI into real delivery work through implementation, pull requests, and human review.',
      },
    ],
  },
] as const

export const selectedTechnologies = [
  'AWS',
  'Python',
  'Ruby/Rails',
  'JavaScript/Vue',
  'C#/.NET',
  'SQL/PostgreSQL',
  'Docker',
] as const

export const currentPractice = [
  'GitHub Copilot',
  'Cursor',
  'Claude',
  'Codex',
] as const
