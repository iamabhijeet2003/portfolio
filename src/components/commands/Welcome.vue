<script setup lang="ts">
import Separator from '../Separator.vue'
</script>

<template>
  <div class="grid gap-2">
    <div class="text-xs md:text-base">
      <pre class="w-full text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
     ___      .______    __    __   __         __   _______  _______ .___________.
    /   \     |   _  \  |  |  |  | |  |       |  | |   ____||   ____||           |
   /  ^  \    |  |_)  | |  |__|  | |  |       |  | |  |__   |  |__   `---|  |----`
  /  /_\  \   |   _  <  |   __   | |  | .--.  |  | |   __|  |   __|      |  |     
 /  _____  \  |  |_)  | |  |  |  | |  | |  `--'  | |  |____ |  |____     |  |     
/__/     \__\ |______/  |__|  |__| |__|  \______/  |_______||_______|    |__|             
  </pre
      >
    </div>
    <p>Welcome to my interactive terminal portfolio.</p>
    <p>Here you can find some information about me.</p>
    <Separator>----</Separator>
    <p>
      This projects is open source and available on
      <a
        class="text-secondary border-b border-secondary border-dashed hover:border-solid"
        href="https://github.com/iamabhijeet2003/portfolio"
        target="_blank"
        >Github repo</a
      >
    </p>
    <Separator>----</Separator>

    <p>Use the command `<span class="text-primary">help</span>` to get started</p>
  </div>
</template>