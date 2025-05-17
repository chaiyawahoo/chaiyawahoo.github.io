<template>
  <v-hover>
    <template v-slot:default="{ isHovering, props }">
      <v-card v-bind="props" :color="isHovering ? 'primary' : undefined" :href="link" target="_blank" rel="noopener noreferrer" height="100%">
        <v-img cover :height="320" :src="getImageUrl()"></v-img>
        <v-card-title>{{ title }}</v-card-title>
        <v-card-subtitle>{{ subtitle }}</v-card-subtitle>
        <v-card-text>{{ description }}</v-card-text>
      </v-card>
    </template>
  </v-hover>
</template>

<script lang="ts" setup>
const props = defineProps({
  title: String,
  subtitle: String,
  description: String,
  filename: String,
  link: String
})

function getImageUrl() {
  return new URL(`../assets/images/${props.filename}`, import.meta.url).href
}
</script>