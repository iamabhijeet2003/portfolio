<script setup lang="ts">
import Separator from '../Separator.vue'
</script>

<template>
  <div class="grid gap-2">
    <div class="text-xs md:text-base">
      <pre class="w-full text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
        {{
  `
       88888   8888888b    888    888  8888888  888888   8888888888   8888888888   88888888
      d88888   888  "88b   888    888    888      "88b   888          888            888     
     d88P888   888  .88P   888    888    888       888   888          888            888     
    d88P 888   8888888K.   8888888888    888       888   8888888      8888888        888     
   d88P  888   888  "Y88b  888    888    888       888   888          888            888     
  d88P   888   888    888  888    888    888       888   888          888            888     
 d8888888888   888   d88P  888    888    888       88P   888          888            888     
d88P     888   8888888P"   888    888  8888888     888   8888888888   8888888888     888     
                                                  d88P                                   
                                          888    88P"                                    
                                           b88888P"                          
  `}}
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