<script setup lang="ts">
import { Icon } from '@iconify/vue'

const educations = [
  {
    name: 'placeholder',
    description: 'placeholder',
    stacks: [
      {
        name: 'stack1',
        icon: 'uil:server-network'
      },
    ]
  },
]
</script>

<template>
  <div class="grid gap-2 mb-3">
    <h5>Experience:</h5>
    <div v-for="education in educations" :key="education.name" class="grid gap-0.5 mt-2">
      <div class="text-primary font-semibold">{{ education.name }}</div>
      <p class="text-accent">{{ education.description }}</p>
      <div v-if="education.stacks" class="flex-row md:flex md:space-x-2 mt-1">
        <div
          v-for="stack in education.stacks"
          :key="stack.name"
          class="flex space-x-1 text-xs pr-3 py-0.5 items-center"
        >
          <Icon :icon="stack.icon" />
          <span>{{ stack.name }}</span>
        </div>
      </div>
    </div>
  </div>
</template>
