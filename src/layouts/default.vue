<template>
  <AppHeader />
  <v-main :style="style">
    <v-container>
      <router-view />
    </v-container>
  </v-main>
  <AppFooter />
</template>

<script lang="ts" setup>
import { computed } from 'vue'
import { useDisplay } from 'vuetify';

const { name } = useDisplay()

const style = computed(() => {
  switch (name.value) {
    case 'xs': return '--v-layout-top: 128px;'
  }
  return '--v-layout-top: 64px;'
})
</script>
