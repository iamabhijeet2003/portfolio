<script setup lang="ts">
import { storeToRefs } from 'pinia'
import { useTerminalStore } from '../store/TerminalStore'

const { username } = storeToRefs(useTerminalStore())
</script>

<template>
  <div class="flex mr-2.5 font-semibold">
    <div class="text-secondary">{{ username }}</div>
    @
    <div class="text-primary">iamabhijeet2003</div>
    :~$
  </div>
</template>