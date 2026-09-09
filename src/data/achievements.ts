import type { Achievement } from '../types/resume'

export const achievements: Achievement[] = [
  {
    id: 'modernization',
    context: 'Product modernization · Platform strategy',
    perspectives: {
      leadership: {
        title: 'Product-suite modernization',
        summary: 'Bringing historically separate government construction project-management products and teams toward shared product and platform direction.',
        detail: 'The broader modernization spans planning, project management, construction administration, estimation, and bidding. The work remains in progress; delivered milestones include integrating acquired technology with shared SSO and portions of a common application shell and design-system experience.',
        weight: 100,
      },
      technical: {
        title: 'Software & Architecture',
        summary: 'Distributed systems, APIs, SaaS platforms, integration, and modernization across long-lived product surfaces.',
        detail: 'Delivered integration milestones include shared SSO and portions of a common application shell and design-system experience. The broader modernization remains in progress, with reusable services and platform governance guiding products at different stages of the transition.',
        weight: 95,
      },
    },
  },
  {
    id: 'leaders',
    context: 'Organization design · Team health',
    perspectives: {
      leadership: {
        title: 'Leadership across multiple teams',
        summary: 'Responsible for 30+ engineers across multiple engineering teams, working through managers and leads while staying close to product and technical direction.',
        detail: 'Coaches emerging leaders, supports teams through transitions, and steps directly into team leadership when clarity, accountability, or delivery momentum need reinforcement.',
        weight: 96,
      },
    },
  },
  {
    id: 'ai-change',
    context: 'Engineering practice · Emerging technology',
    perspectives: {
      leadership: {
        title: 'Practical AI adoption',
        summary: 'Turning personal experimentation into repeatable team practice through real delivery work.',
        detail: 'Progressed from an early GitHub Copilot pilot to AI-assisted and agentic IDE workflows, then worked directly with teams on live Jira work—from implementation and pull-request creation through human review. Teams continued the collaboration sessions independently.',
        weight: 92,
      },
      technical: {
        title: 'AI Engineering',
        summary: 'AI-assisted development, agentic engineering workflows, and practical adoption patterns that still fit normal review and delivery systems.',
        detail: 'Experience spans Copilot, Claude, Cursor, Codex, live implementation work, pull-request generation, and human code review as the control point for quality and accountability.',
        weight: 100,
      },
    },
  },
  {
    id: 'data-product',
    context: 'Data strategy · Commercialization',
    perspectives: {
      business: {
        title: 'Data with a commercial path',
        summary: 'Helped move data from an internal capability to a self-service platform and the foundation of the company’s first Data-as-a-Service product.',
        detail: 'The multi-year arc began with advocating for meaningful data capability, expanded access for Finance, Marketing, and Product, and later shifted the operating model toward a self-service warehouse connected to Power BI. Commercialization included architecture and API tradeoffs, documentation, enablement, executive training, and customer discovery.',
        weight: 100,
        path: ['Data foundation', 'Internal capability', 'Self-service platform', 'Commercial product'],
      },
      technical: {
        title: 'Data & Platform',
        summary: 'Cloud architecture, data warehouses, analytics, and platform engineering in service of product and operating goals.',
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
        title: 'Operating a profitable digital business',
        summary: 'As co-owner, connect product and engineering decisions to the full customer lifecycle: paid acquisition, purchase, learning, renewals, and support.',
        detail: 'Launched in 2022, the venture runs largely on off-the-shelf tooling. Mature services handle standard capabilities; selective custom business logic supports the customer experience. The customer journey and routine fulfillment are largely self-service, with manual work reserved for support exceptions. Build-versus-buy decisions account for ongoing maintenance as well as the initial build, keeping product choices tied to the realities of operating the business.',
        weight: 105,
      },
    },
  },
  {
    id: 'private-equity',
    context: 'Ownership transition · Investment decisions',
    perspectives: {
      business: {
        title: 'Engineering judgment beyond code',
        summary: 'Applying technical judgment to investment, resource, operating, and build-versus-buy decisions.',
        detail: 'Experience includes technical due diligence, direct interaction with private-equity operating partners, leadership sessions, resource and investment discussions, and guiding teams through organizational change.',
        weight: 91,
      },
    },
  },
  {
    id: 'hands-on-architecture',
    context: 'Architecture · Delivery systems',
    perspectives: {
      technical: {
        title: 'Delivery infrastructure',
        summary: 'Enough hands-on depth to evaluate tradeoffs across architecture, infrastructure, data, developer tooling, and delivery systems.',
        detail: 'Hands-on history includes application architecture, data modeling, API design, containerized development, AWS delivery, CI/CD, serverless integration, and product rewrites with production-data migration.',
        weight: 98,
      },
    },
  },
]
