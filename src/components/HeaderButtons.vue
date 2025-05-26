<template>
  <v-btn :ripple="false" :icon="`mdi-linkedin`" href="https://linkedin.com/in/chai-nunes/" rel="noopener noreferrer" target="_blank"></v-btn>
  <v-btn :ripple="false" :icon="[siGithub.path]" href="https://github.com/chaiyawahoo/" rel="noopener noreferrer" target="_blank"></v-btn>
  <v-btn :ripple="false" variant="outlined" class="ms-3" :href="getResumeUrl()" download="chaiyawat-nunes-resume.pdf">Resume <v-icon class="ms-2">mdi-download</v-icon></v-btn>
</template>

<script lang="ts" setup>
import { siGithub } from 'simple-icons'

function getResumeUrl() {
  return new URL("../assets/files/resume.pdf", import.meta.url).href
}
</script>