<script setup lang="ts">
import { profile } from './data/profile'
import { experience } from './data/experience'
import { externalLinks } from './data/links'

const infotech = experience[0]!
const earlierCareer = experience.slice(2)
</script>

<template>
  <div id="top" class="folio">
    <a class="skip-link" href="#career">Skip to career</a>

    <header class="masthead">
      <span>Gainesville, Florida</span>
      <nav aria-label="Contact">
        <a :href="externalLinks.linkedin" target="_blank" rel="noreferrer">LinkedIn <span aria-hidden="true">↗</span></a>
        <a :href="externalLinks.email">Email <span aria-hidden="true">↗</span></a>
        <a v-if="externalLinks.resumeUrl" :href="externalLinks.resumeUrl" download>Résumé <span aria-hidden="true">↓</span></a>
      </nav>
    </header>

    <div class="introduction">
      <div class="identity">
        <h1>{{ profile.name }}</h1>
        <p class="profession">Engineering Leader</p>
        <p class="opening">An engineer by background. A leader of teams and platforms. A business owner with a product perspective.</p>
      </div>
      <img class="portrait" :src="profile.photo" alt="Robert Munson" width="148" height="176" />
    </div>

    <main id="career" class="career" tabindex="-1">
      <article class="career-story" aria-labelledby="infotech-title">
        <header class="company-heading">
          <h2 id="infotech-title">Infotech</h2>
          <span>{{ infotech.period }}</span>
        </header>
        <p class="current-role">{{ infotech.roles[0]!.title }}</p>
        <p class="lead">I lead 30+ engineers across multiple teams, connecting people, architecture, and product direction in software for public infrastructure and construction.</p>
        <p>My scope has grown from hands-on development to leading through managers and engineering leads. I coach emerging leaders, guide teams through organizational change, and stay close to the technical decisions that shape delivery.</p>
        <details class="progression">
          <summary>From software engineer to engineering leader <span class="disclosure-mark" aria-hidden="true"></span></summary>
          <ol>
            <li v-for="role in infotech.roles" :key="role.title">
              <span>{{ role.period }}</span><strong>{{ role.title }}</strong>
            </li>
          </ol>
        </details>

        <div class="narrative">
          <p><strong>Bringing long-lived products toward a shared platform.</strong> I help align historically separate products and teams across planning, project management, construction administration, estimation, and bidding. Modernization is ongoing; delivered milestones include integrating acquired technology with shared SSO and parts of a common application shell and design system.</p>
          <p><strong>Turning a data capability into a product foundation.</strong> I helped build the capability that became a self-service warehouse and the foundation of Infotech’s first Data-as-a-Service product. The work connected Finance, Marketing, and Product with data, then expanded into architecture and API decisions, customer discovery, documentation, and executive enablement.</p>
          <p class="technical-note">SQL, PostgreSQL, Redshift, Power BI, and AWS supported that work—from internal decision-making to external data delivery.</p>
          <p><strong>Making AI useful in everyday engineering.</strong> From an early Copilot pilot to agentic IDE workflows, I work with teams on real delivery: implementation, pull requests, and human review. Teams continued the collaboration sessions independently.</p>
          <details class="technical-detail">
            <summary>Architecture &amp; delivery experience <span class="disclosure-mark" aria-hidden="true"></span></summary>
            <div class="detail-copy">
              <p v-for="detail in infotech.details" :key="detail">{{ detail }}</p>
              <p>Hands-on experience spans Python, Ruby/Rails, JavaScript/Vue, C#/.NET, SQL/PostgreSQL, Docker, and AWS. Current AI-assisted work includes Copilot, Claude, Cursor, and Codex.</p>
            </div>
          </details>
          <p><strong>Connecting engineering investment to business decisions.</strong> My experience includes technical due diligence, work with private-equity operating partners, and resource, investment, and build-versus-buy discussions.</p>
        </div>
      </article>

      <aside class="business-story" aria-labelledby="business-title">
        <div class="business-heading">
          <span>2022 — Present</span>
          <h2 id="business-title">A business of my own.</h2>
          <p>Co-founder &amp; co-owner<br />Private digital education business</p>
        </div>
        <p>I also co-built and operate a profitable continuing-education business serving healthcare professionals.</p>
        <p>Ownership puts product decisions in direct contact with the economics: acquisition costs, conversion, pricing, renewals, and the work of keeping customers supported.</p>
        <p class="business-statement">The product has to work.<br />So does the business.</p>
        <p>I work across paid search, the customer journey, financial planning, and day-to-day operations. Mature services handle standard capabilities; selective custom logic supports the experience where it matters.</p>
        <p>Purchasing, learning, renewals, and routine fulfillment are largely self-service. Automation keeps manual work focused on support exceptions, with maintenance costs part of every build-versus-buy decision.</p>
      </aside>

      <div class="earlier-career" aria-label="Earlier career">
        <article v-for="entry in earlierCareer" :key="entry.company" class="earlier-entry">
          <span class="earlier-date">{{ entry.period }}</span>
          <div>
            <h2>{{ entry.company }} <span>{{ entry.roles[0]!.title }}</span></h2>
            <p>{{ entry.summary }}</p>
          </div>
        </article>
      </div>
    </main>

    <footer>
      <a :href="externalLinks.email">robmunson@gmail.com <span aria-hidden="true">↗</span></a>
      <span>Robert Munson · {{ new Date().getFullYear() }}</span>
    </footer>
  </div>
</template>
