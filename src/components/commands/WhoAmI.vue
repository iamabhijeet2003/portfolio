<script setup lang="ts">
import { useTerminalStore } from '../../store/TerminalStore'

const { username } = useTerminalStore()
</script>

<template>
  <div>{{ username }}</div>
</template>