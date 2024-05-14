<script setup lang="ts">
import { useTerminalStore } from '../../store/TerminalStore'

const { clearCmdHistory } = useTerminalStore()

clearCmdHistory()
</script>

<template></template>