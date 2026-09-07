<script setup lang="ts">
import { profile } from '../data/profile'
import { externalLinks } from '../data/links'
</script>

<template>
  <section id="top" class="page-shell hero" aria-labelledby="name-heading">
    <div class="hero-copy">
      <h1 id="name-heading">Robert Munson</h1>
      <p class="hero-role">Engineering leader.</p>
      <div class="hero-description">
        <p>I lead engineering teams at Infotech, develop leaders, and guide product and platform modernization.</p>
        <p>I also co-own a private SaaS business, with responsibility across product, engineering, marketing, and operations.</p>
      </div>
      <nav class="hero-links" aria-label="Profile links">
        <a href="#experience">Experience</a>
        <a :href="externalLinks.linkedin" target="_blank" rel="noreferrer">LinkedIn</a>
        <a href="#contact">Contact</a>
      </nav>
    </div>
    <img class="hero-portrait" :src="profile.photo" alt="Robert Munson" width="180" height="225" />
  </section>
</template>
