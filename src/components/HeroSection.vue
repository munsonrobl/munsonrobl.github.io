<script setup lang="ts">
import { profile } from '../data/profile'
import { externalLinks } from '../data/links'
</script>

<template>
  <section id="top" class="hero page-shell" aria-labelledby="hero-heading">
    <div class="hero-kicker"><span>Robert Munson</span><span>Associate Director of Engineering</span></div>
    <div class="hero-grid">
      <div class="hero-main">
        <h1 id="hero-heading">Engineering leadership, <em>from systems to organizations.</em></h1>
        <p class="hero-summary">I lead engineering teams, modernize complex product platforms, and connect technical investment to the business it serves.</p>
      </div>
      <aside class="hero-profile" aria-label="Profile summary">
        <img :src="profile.photo" alt="Robert Munson" width="180" height="180" />
        <p>Twenty-plus years in software, from hands-on architecture and delivery to leading 30+ engineers across multiple teams.</p>
        <div class="hero-links">
          <a :href="externalLinks.linkedin" target="_blank" rel="noreferrer">LinkedIn ↗</a>
          <a :href="externalLinks.email">Email ↗</a>
        </div>
      </aside>
    </div>
    <dl class="proof-line">
      <div><dt>01</dt><dd>30+ engineers</dd></div>
      <div><dt>02</dt><dd>Platform & product modernization</dd></div>
      <div><dt>03</dt><dd>Technical and business ownership</dd></div>
    </dl>
  </section>
</template>
