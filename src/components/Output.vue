<script setup lang="ts">
import { first } from 'underscore'
import TerminalUser from './TerminalUser.vue'
import { useTerminalStore } from '../store/TerminalStore'
import Welcome from './commands/Welcome.vue'
import { storeToRefs } from 'pinia'
import { CommandEnum, commands as availableCommands } from '../utils/constants'
import WhoAmI from './commands/WhoAmI.vue'
const { cmdHistory } = storeToRefs(useTerminalStore())

const isCmdRequiresArgs = (command: string) => {
  return availableCommands.filter((c) => c.requiresArgs).some((c) => c.name === command)
}

const commands = (cmd: string) => {
  const commandArray = cmd.split(' ')
  const command = first(commandArray)

  if (commandArray.length > 1 && !isCmdRequiresArgs(command)) {
    return Usage
  }

  switch (command) {
    case CommandEnum.ABOUT:
      return About
    case CommandEnum.PROJECTS:
      return Projects
    case CommandEnum.EXPERIENCE:
      return Experience
    case CommandEnum.EDUCATION:
      return Education
    case CommandEnum.GUI:
      return Gui
    case CommandEnum.WELCOME:
      return Welcome
    case CommandEnum.CLEAR:
      return Clear
    case CommandEnum.HELP:
      return Help
    case CommandEnum.HISTORY:
      return History
    case CommandEnum.WHOAMI:
      return WhoAmI
    case CommandEnum.THEME:
      return Themes
    case CommandEnum.ECHO:
      return Echo
    case CommandEnum.PWD:
      return Pwd
    case CommandEnum.SETNAME:
      return SetName
    default:
      return CommandNotFound
  }
}
</script>

<template>
  <div v-for="(cmd, i) in cmdHistory" :key="i">
    <div class="flex-row md:flex items-center">
      <TerminalUser />
      <div class="flex-grow">{{ cmd }}</div>
    </div>
    <div v-if="cmd" class="mb-2">
      <component :is="commands(cmd)" :cmd="first(cmd.split(' '))" :args="cmd.split(' ').slice(1)" />
    </div>
  </div>
</template>