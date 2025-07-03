<template>
  <v-container>
    <vue-turnstile site-key="0x4AAAAAABjQYUwPMH1-QMsa" v-model="token" />
  </v-container>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import VueTurnstile from 'vue-turnstile'

const token = ref('')

defineExpose({token})
</script>

<style lang="scss" scoped>
.v-container {
  text-align: center;
  margin-top: 40vh;
}
</style>