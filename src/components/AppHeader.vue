<template>
  <v-app-bar :style="style">
    <v-app-bar-title>
      Chaiyawat Nunes
      <span class="subtitle mx-2 mx-sm-4">Game Developer</span>
    </v-app-bar-title>
    <ContactDialogue />
  </v-app-bar>
</template>

<script lang="ts" setup>
import { computed } from 'vue'
import { useDisplay } from 'vuetify';

const { name } = useDisplay()

const style = computed(() => {
  switch (name.value) {
    case 'xs': return 'padding: 0'
  }
  return 'padding: 0 10vw 0 10vw'
})
</script>

<style scoped>
.subtitle {
  font-size: 12pt;
  color: darkgray;
}
</style>