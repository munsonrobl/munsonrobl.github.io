<script setup lang="ts">
import { profile } from '../data/profile'
import { experience } from '../data/experience'
import { externalLinks } from '../data/links'

const infotech = experience[0]!
const earlierCareer = experience.slice(2)
</script>

<template>
  <div class="folio design-surface">
    <header class="folio-masthead">
      <span>Gainesville, Florida</span>
      <nav aria-label="Contact">
        <a :href="externalLinks.linkedin" target="_blank" rel="noreferrer">LinkedIn <span aria-hidden="true">↗</span></a>
        <a :href="externalLinks.email">Email <span aria-hidden="true">↗</span></a>
        <a v-if="externalLinks.resumeUrl" :href="externalLinks.resumeUrl" download>Résumé <span aria-hidden="true">↓</span></a>
      </nav>
    </header>

    <div class="folio-introduction">
      <div class="folio-identity">
        <h1>{{ profile.name }}</h1>
        <p class="folio-profession">Engineering Leader</p>
        <p class="folio-opening">An engineer by background. A leader of teams and platforms. A business owner with a product perspective.</p>
      </div>
      <img class="folio-portrait" :src="profile.photo" alt="Robert Munson" width="148" height="176" />
    </div>

    <main id="main-content" class="folio-career" tabindex="-1">
      <article class="folio-career-story" aria-labelledby="folio-infotech-title">
        <header class="folio-company-heading">
          <h2 id="folio-infotech-title">Infotech</h2>
          <span>{{ infotech.period }}</span>
        </header>
        <p class="folio-current-role">{{ infotech.roles[0]!.title }}</p>
        <p class="folio-lead">I lead 30+ engineers across multiple teams, connecting people, architecture, and product direction in software for public infrastructure and construction.</p>
        <p>My scope has grown from hands-on development to leading through managers and engineering leads. I coach emerging leaders, guide teams through organizational change, and stay close to the technical decisions that shape delivery.</p>
        <details class="folio-progression">
          <summary>From software engineer to engineering leader <span class="folio-disclosure" aria-hidden="true"></span></summary>
          <ol>
            <li v-for="role in infotech.roles" :key="role.title"><span>{{ role.period }}</span><strong>{{ role.title }}</strong></li>
          </ol>
        </details>

        <div class="folio-narrative">
          <p><strong>Bringing long-lived products toward a shared platform.</strong> I help align historically separate products and teams across planning, project management, construction administration, estimation, and bidding. Modernization is ongoing; delivered milestones include integrating acquired technology with shared SSO and parts of a common application shell and design system.</p>
          <p><strong>Turning a data capability into a product foundation.</strong> I helped build the capability that became a self-service warehouse and the foundation of Infotech’s first Data-as-a-Service product. The work connected Finance, Marketing, and Product with data, then expanded into architecture and API decisions, customer discovery, documentation, and executive enablement.</p>
          <p class="folio-technical-note">SQL, PostgreSQL, Redshift, Power BI, and AWS supported that work—from internal decision-making to external data delivery.</p>
          <p><strong>Making AI useful in everyday engineering.</strong> From an early Copilot pilot to agentic IDE workflows, I work with teams on real delivery: implementation, pull requests, and human review. Teams continued the collaboration sessions independently.</p>
          <details class="folio-technical-detail">
            <summary>Architecture &amp; delivery experience <span class="folio-disclosure" aria-hidden="true"></span></summary>
            <div class="folio-detail-copy">
              <p v-for="detail in infotech.details" :key="detail">{{ detail }}</p>
              <p>Hands-on experience spans Python, Ruby/Rails, JavaScript/Vue, C#/.NET, SQL/PostgreSQL, Docker, and AWS. Current AI-assisted work includes Copilot, Claude, Cursor, and Codex.</p>
            </div>
          </details>
          <p><strong>Connecting engineering investment to business decisions.</strong> My experience includes technical due diligence, work with private-equity operating partners, and resource, investment, and build-versus-buy discussions.</p>
        </div>
      </article>

      <aside class="folio-business-story" aria-labelledby="folio-business-title">
        <div class="folio-business-heading">
          <span>2022 — Present</span>
          <h2 id="folio-business-title">A business of my own.</h2>
          <p>Co-founder &amp; co-owner<br />Private digital education business</p>
        </div>
        <p>I also co-built and operate a profitable continuing-education business serving healthcare professionals.</p>
        <p>Ownership puts product decisions in direct contact with the economics: acquisition costs, conversion, pricing, renewals, and the work of keeping customers supported.</p>
        <p class="folio-business-statement">The product has to work.<br />So does the business.</p>
        <p>I work across paid search, the customer journey, financial planning, and day-to-day operations. Mature services handle standard capabilities; selective custom logic supports the experience where it matters.</p>
        <p>Purchasing, learning, renewals, and routine fulfillment are largely self-service. Automation keeps manual work focused on support exceptions, with maintenance costs part of every build-versus-buy decision.</p>
      </aside>

      <div class="folio-earlier-career" aria-label="Earlier career">
        <article v-for="entry in earlierCareer" :key="entry.company" class="folio-earlier-entry">
          <span class="folio-earlier-date">{{ entry.period }}</span>
          <div><h2>{{ entry.company }} <span>{{ entry.roles[0]!.title }}</span></h2><p>{{ entry.summary }}</p></div>
        </article>
      </div>
    </main>

    <footer class="folio-footer">
      <a :href="externalLinks.email">robmunson@gmail.com <span aria-hidden="true">↗</span></a>
      <span>Robert Munson · {{ new Date().getFullYear() }}</span>
    </footer>
  </div>
</template>
