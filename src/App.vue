<script setup lang="ts">
import { ref } from 'vue'
import HeroSection from './components/HeroSection.vue'
import PerspectiveTabs from './components/PerspectiveTabs.vue'
import SelectedImpact from './components/SelectedImpact.vue'
import CapabilitiesSection from './components/CapabilitiesSection.vue'
import ExperienceTimeline from './components/ExperienceTimeline.vue'
import SiteFooter from './components/SiteFooter.vue'
import type { Perspective } from './types/resume'

const activePerspective = ref<Perspective>('leadership')
</script>

<template>
  <a href="#main-content" class="skip-link">Skip to content</a>
  <div class="resume-page">
    <header class="site-header page-shell">
      <a class="identity" href="#top" aria-label="Robert Munson, home">
        <span class="identity-mark" aria-hidden="true">RM</span>
        <span>Robert Munson</span>
      </a>
      <nav aria-label="Primary navigation">
        <a href="#work">Work</a>
        <a href="#experience">Experience</a>
        <a href="#skills">Skills</a>
        <a href="#contact">Contact</a>
      </nav>
    </header>

    <main id="main-content" tabindex="-1">
      <HeroSection />

      <section id="work" class="work-section page-shell" aria-labelledby="work-heading">
        <div class="section-divider"><span>Selected work</span></div>
        <div class="section-heading">
          <p class="section-kicker">Three perspectives · one career</p>
          <h2 id="work-heading">The work changes with the lens.</h2>
          <p>Leadership, engineering, and business are not separate chapters. They are different ways of reading the same decisions and outcomes.</p>
        </div>
        <PerspectiveTabs v-model="activePerspective" />
        <div id="perspective-panel" role="tabpanel" :aria-labelledby="`tab-${activePerspective}`" tabindex="0">
          <SelectedImpact :perspective="activePerspective" />
        </div>
      </section>

      <ExperienceTimeline />
      <CapabilitiesSection />
    </main>

    <SiteFooter />
  </div>
</template>
