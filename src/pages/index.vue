<template>
  <h1>Projects</h1>
  <Projects />
  <v-container>
    <v-row class="pa-2 ma-2" justify="center">
      <v-spacer />
      <v-btn :elevation="2" :href="getResumeUrl()" download="chaiyawat-nunes-resume.pdf"
          size="x-large">Download Resume</v-btn>
      <v-spacer />
    </v-row>
  </v-container>
  

</template>

<script lang="ts" setup>
function getResumeUrl() {
  return new URL("../assets/files/resume.pdf", import.meta.url).href
}
</script>
