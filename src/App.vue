<template>
  <Turnstile v-if="showTurnstile" ref="turnstile"/>
  <v-app v-if="showApp">
    <router-view />
  </v-app>
</template>

<script lang="ts" setup>
import { useTemplateRef, onMounted } from 'vue'
import Turnstile from './components/Turnstile.vue';

const turnstile = useTemplateRef('turnstile')
const showApp = ref(false)
const showTurnstile = ref(true)

onMounted(() => {
  if (turnstile.value) {
    watch(() => turnstile.value?.token, (newToken, oldToken) => {
      if (newToken != '') {
        showApp.value = true
        showTurnstile.value = false
        // console.log(newToken);
      }
    })
  }
})
</script>

<style lang="scss">
body {
  font-family: "Inter";
}

h1, h2, h3, h4, h5, h6, .v-card-title {
  font-family: "Arvo";
}
</style>