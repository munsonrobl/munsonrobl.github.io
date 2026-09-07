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
  <main id="main-content" tabindex="-1">
    <HeroSection />
    <div id="work" class="work-nav">
      <div class="page-shell"><PerspectiveTabs v-model="activePerspective" /></div>
    </div>
    <section class="page-shell work-section" aria-label="Work examples">
      <div id="perspective-panel" role="tabpanel" :aria-labelledby="`tab-${activePerspective}`" tabindex="0">
        <SelectedImpact :perspective="activePerspective" />
      </div>
    </section>
    <ExperienceTimeline />
    <CapabilitiesSection />
    <section class="approach-surface" aria-labelledby="approach-heading">
      <div class="page-shell approach-section">
        <h2 id="approach-heading">How I lead</h2>
        <div>
          <p class="body-copy">I develop engineering leads and managers, connect technical choices to product needs, and step into delivery when teams need support. My hands-on foundation and experience running a business keep architecture, customer experience, and operating costs in the same conversation.</p>
        </div>
      </div>
    </section>
  </main>
  <SiteFooter />
</template>
