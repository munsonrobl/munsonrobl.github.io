import type { Achievement } from '../types/resume'

export const achievements: Achievement[] = [
  {
    id: 'modernization',
    context: 'Product modernization · Platform strategy',
    perspectives: {
      leadership: {
        title: 'Modernizing a connected product suite',
        summary: 'Leading technical strategy to bring previously discrete products into a more cohesive solution for government construction project management.',
        detail: 'The broader modernization spans planning, project management, construction administration, estimation, and bidding. The work remains in progress; delivered milestones include integrating acquired technology with shared SSO and portions of a common application shell and design-system experience.',
        weight: 100,
      },
      technical: {
        title: 'Shared foundations for acquired products',
        summary: 'Guiding acquired-product integration through shared identity, account, and application capabilities rather than one-off connections.',
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
        title: 'Developing leaders through change',
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
        title: 'Making AI part of delivery',
        summary: 'Turning personal experimentation into repeatable team practice through real delivery work.',
        detail: 'Progressed from an early GitHub Copilot pilot to AI-assisted and agentic IDE workflows, then worked directly with teams on live Jira work—from implementation and pull-request creation through human review. Teams continued the collaboration sessions independently.',
        weight: 92,
      },
      technical: {
        title: 'AI workflows with human review',
        summary: 'Applying modern AI tools to real software and product workflows, with human judgment kept firmly in the loop.',
        detail: 'Worked with teams on live Jira tasks, taking AI-assisted implementation through pull-request creation and human review. The engineering decision was to make review and repeatability part of the workflow. Teams went on to run the collaboration sessions independently.',
        weight: 100,
      },
    },
  },
  {
    id: 'data-product',
    context: 'Data strategy · Commercialization',
    perspectives: {
      business: {
        title: 'Turning data into a product',
        summary: 'Helped move data from an internal capability to a self-service platform and the foundation of the company’s first Data-as-a-Service product.',
        detail: 'The multi-year arc began with advocating for meaningful data capability, expanded access for Finance, Marketing, and Product, and later shifted the operating model toward a self-service warehouse connected to Power BI. Commercialization included architecture and API tradeoffs, documentation, enablement, executive training, and customer discovery.',
        weight: 100,
        path: ['Data foundation', 'Internal capability', 'Self-service platform', 'Commercial product'],
      },
      technical: {
        title: 'Data architecture with a commercial purpose',
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
        title: 'Operating a private SaaS venture',
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
        title: 'Engineering through ownership change',
        summary: 'Helping engineering remain steady and effective while operating expectations, ownership, and investment priorities evolve.',
        detail: 'Experience includes technical due diligence, direct interaction with private-equity operating partners, leadership sessions, resource and investment discussions, and guiding teams through organizational change.',
        weight: 91,
      },
    },
  },
]
