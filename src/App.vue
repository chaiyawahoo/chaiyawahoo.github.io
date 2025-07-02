<template>
  <div style="display: none;">
    <vue-turnstile site-key="0x4AAAAAABjQYUwPMH1-QMsa" v-model="token" />
    <div>Token: {{ token }}</div>
  </div>
  <v-app>
    <router-view />
  </v-app>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import VueTurnstile from 'vue-turnstile'

const token = ref('')
</script>

<style lang="scss">
body {
  font-family: "Inter";
}

h1, h2, h3, h4, h5, h6, .v-card-title {
  font-family: "Arvo";
}
</style>