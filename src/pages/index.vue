<template>
  <h1>Highlights</h1>
  <Highlights />
  <v-divider />
  <div class="d-flex justify-center ma-4">
    <v-btn :elevation="2" :href="getResumeUrl()" download="chaiyawat-nunes-resume.pdf" size="x-large">Download
      Resume</v-btn>
  </div>
</template>

<script lang="ts" setup>
function getResumeUrl() {
  return new URL("../assets/files/resume.pdf", import.meta.url).href
}
</script>
