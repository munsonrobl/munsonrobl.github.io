import type { Achievement } from '../types/resume'

export const achievements: Achievement[] = [
  {
    id: 'modernization',
    context: 'Product modernization · Platform strategy',
    perspectives: {
      leadership: {
        title: 'Modernizing Government Construction Software',
        summary: 'Leading technical strategy to bring previously discrete products into a more cohesive solution for government construction project management.',
        detail: 'The broader modernization spans planning, project management, construction administration, estimation, and bidding. The work remains in progress; delivered milestones include integrating acquired technology with shared SSO and portions of a common application shell and design-system experience.',
        weight: 100,
      },
      technical: {
        title: 'Architecture & Platform Engineering',
        summary: 'Guiding acquired-product integration through shared identity, account, and application capabilities rather than one-off connections.',
        detail: 'The architectural path connects OAuth2 and SSO, shared application patterns, reusable services, and platform governance while preserving a practical route for products at different stages of modernization.',
        weight: 95,
      },
    },
  },
  {
    id: 'leaders',
    context: 'Organization design · Team health',
    perspectives: {
      leadership: {
        title: 'Building Leaders & Stronger Teams',
        summary: 'Developing engineering leads while creating the conditions for teams to regain clarity, accountability, and momentum.',
        detail: 'Leads multiple teams through engineering leads and managers, coaches emerging leaders, and steps directly into team leadership when transitions or performance challenges require it. The aim is durable internal leadership capacity, not dependence on a single operator.',
        weight: 96,
      },
    },
  },
  {
    id: 'ai-change',
    context: 'Engineering practice · Emerging technology',
    perspectives: {
      leadership: {
        title: 'Leading AI-Native Engineering Change',
        summary: 'Turning personal experimentation into repeatable team practice through real delivery work.',
        detail: 'Progressed from an early GitHub Copilot pilot to AI-assisted and agentic IDE workflows, then worked directly with teams on live Jira work—from implementation and pull-request creation through human review. Teams continued the collaboration sessions independently.',
        weight: 92,
      },
      technical: {
        title: 'AI & Agentic Engineering',
        summary: 'Applying modern AI tools to real software and product workflows, with human judgment kept firmly in the loop.',
        detail: 'Hands-on work spans Copilot, Claude, Cursor, MCP, Jira-to-implementation workflows, automated PR creation, applied AI prototypes, AI forms experimentation, and Esri automation. The emphasis is practical engineering application, review, and repeatability.',
        weight: 100,
      },
    },
  },
  {
    id: 'data-product',
    context: 'Data strategy · Commercialization',
    perspectives: {
      business: {
        title: 'From Data Platform to Commercial Product',
        summary: 'Helped move data from an internal capability to a self-service platform and the foundation of the company’s first Data-as-a-Service product.',
        detail: 'The multi-year arc began with advocating for meaningful data capability, expanded access for Finance, Marketing, and Product, and later shifted the operating model toward a self-service warehouse connected to Power BI. Commercialization included architecture and API tradeoffs, documentation, enablement, executive training, and customer discovery.',
        weight: 100,
        path: ['Data foundation', 'Internal capability', 'Self-service platform', 'Commercial product'],
      },
      technical: {
        title: 'Data & Cloud Platforms',
        summary: 'Connecting warehouse architecture, self-service access, and commercial delivery to clear operating and product goals.',
        detail: 'Worked across SQL, PostgreSQL, Redshift, Power BI connectivity, AWS architecture, data pipelines, and API evaluation. Technical choices supported both internal decision-making and a credible path to external data delivery.',
        weight: 94,
      },
    },
  },
  {
    id: 'digital-business',
    context: 'Entrepreneurship · Product operations',
    perspectives: {
      business: {
        title: 'Building & Operating a Digital Business',
        summary: 'Co-founded and operates a profitable digital business, leading product development, custom business logic, budgeting, and P&L management.',
        detail: 'Deliberate build-vs.-buy judgment keeps mature platforms and services focused on commodity capabilities while custom development concentrates on differentiated business logic and customer experience. The customer journey and routine fulfillment are largely self-service, with manual work reserved for support exceptions.',
        weight: 96,
      },
    },
  },
  {
    id: 'private-equity',
    context: 'Ownership transition · Investment decisions',
    perspectives: {
      business: {
        title: 'Engineering in a Private-Equity Environment',
        summary: 'Helping engineering remain steady and effective while operating expectations, ownership, and investment priorities evolve.',
        detail: 'Experience includes technical due diligence, direct interaction with private-equity operating partners, leadership sessions, resource and investment discussions, and guiding teams through organizational change.',
        weight: 91,
      },
    },
  },
]
