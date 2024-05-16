<script setup lang="ts">
const educations = [
  {
    name: 'I.E.S. Jaume II El Just',
    description: 'Higher Technician in Development of Web Applications | 2022 - 2024'
  },
  {
    name: 'I.E.S. Blasco Ibañez',
    description: 'Higher studies in science | 2020 - 2022'
  }
]
</script>

<template>
  <div class="grid gap-2 mb-3">
    <h5>My Education background:</h5>
    <div v-for="education in educations" :key="education.name" class="grid gap-0.5">
      <div class="text-primary font-semibold">{{ education.name }}</div>
      <p class="text-accent">{{ education.description }}</p>
    </div>
  </div>
</template>
