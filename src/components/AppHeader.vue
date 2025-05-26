<template>
  <v-app-bar :style="style" :elevation="elevation">
    <v-app-bar-title>
      Chaiyawat Nunes
      <span class="subtitle mx-4">Game Developer</span>
    </v-app-bar-title>
    <div class="d-none d-sm-block">
      <HeaderButtons />
    </div>
  </v-app-bar>
  <v-app-bar hide-on-scroll class="d-block d-sm-none only-small">
    <v-container>
      <HeaderButtons />
      <!-- <ContactDialogue /> -->  
    </v-container>
  </v-app-bar>
</template>

<script lang="ts" setup>
import { computed } from 'vue'
import { useDisplay } from 'vuetify';

const { name } = useDisplay()

const style = computed(() => {
  switch (name.value) {
    case 'xs': 
    case 'sm': return 'padding: 0'
  }
  return 'padding: 0 10vw 0 10vw'
})

const elevation = computed(() => {
  switch (name.value) {
    case 'xs': return 0
  }
  return 1
})
</script>

<style lang="scss">
.subtitle {
  font-size: 12pt;
  color: darkgray;
}

.v-btn :deep(.v-btn__overlay) {
  background-color: transparent;
}
</style>