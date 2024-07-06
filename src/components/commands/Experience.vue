<script setup lang="ts">
import { Icon } from '@iconify/vue'

const educations = [
  {
    name: 'Self-employed',
    description: 'Ca Pablo | June 2022 - Present',
    stacks: [
      {
        name: '',
        icon: 'material-symbols-light:store'
      },
    ]
  },
  {
    name: 'Web Developer',
    description: 'Gesdata Consulting | March 2024 - June 2024',
    stacks: [
      {
        name: 'PHP',
        icon: 'logos:php'
      },
      {
        name: 'MySQL',
        icon: 'logos:mysql'
      },
      {
        name: 'Javascript',
        icon: 'openmoji:javascript'
      },
      {
        name: 'MAMP',
        icon: 'simple-icons:mamp'
      },
      {
        name: 'Bootstrap',
        icon: 'devicon:bootstrap'
      }
    ]
  },
  {
    name: 'Self-employed',
    description: 'Restaurante Mar de Tapas | November 2023 - March 2024',
    stacks: [
      {
        name: '',
        icon: 'material-symbols-light:store'
      },
    ]
  },
  {
    name: 'Owner | Self-employed',
    description: 'Online Store | September 2022 - September 2023',
    stacks: [
      {
        name: 'Shopify',
        icon: 'logos:shopify'
      },
      {
        name: 'Marketing',
        icon: 'hugeicons:marketing'
      },
      {
        name: 'Facebook Ads',
        icon: 'ic:baseline-facebook'
      },
      {
        name: 'TikTok Ads',
        icon: 'ic:baseline-tiktok'
      }
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
