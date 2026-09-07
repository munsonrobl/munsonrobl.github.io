<script setup lang="ts">
import { computed } from 'vue'
import { achievements } from '../data/achievements'
import type { Perspective } from '../types/resume'
const props = defineProps<{ perspective: Perspective }>()
const selected = computed(() => achievements
  .filter(item => item.perspectives[props.perspective])
  .sort((a, b) => (b.perspectives[props.perspective]?.weight ?? 0) - (a.perspectives[props.perspective]?.weight ?? 0)))
</script>

<template>
  <div class="work-list">
    <article v-for="item in selected" :key="item.id" class="work-entry">
      <h3>{{ item.perspectives[perspective]?.title }}</h3>
      <div class="work-copy">
        <p class="work-summary">{{ item.perspectives[perspective]?.summary }}</p>
        <p class="body-copy">{{ item.perspectives[perspective]?.detail }}</p>
      </div>
    </article>
  </div>
</template>
