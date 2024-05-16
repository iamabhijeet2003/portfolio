<script setup lang="ts">
import Links from '../Links.vue'

const projects = [
  {
    name: 'abhi-placeholder',
    description: 'abhi-placeholder',
    url: 'abhi-placeholder'
  },
]
</script>

<template>
  <div class="grid gap-2 mt-2 mb-3">
    <h5>Here are some of my projects:</h5>
    <div v-for="(project, i) in projects" :key="project.name" class="grid gap-0.5">
      <Links
        :i="i + 1"
        :name="project.name"
        :description="project.description"
        :url="project.url"
      />
    </div>
  </div>
</template>
