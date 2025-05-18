<template>
  <v-hover>
    <template v-slot:default="{ isHovering, props }">
      <v-card v-bind="props" :href="link" target="_blank" rel="noopener noreferrer" height="100%">
        <v-img cover :height="320" :src="getImageUrl()">
          <v-expand-transition>
            <div v-if="isHovering" class="img-overlay">Built with <v-icon :icon="getIcon()" :size="16" class="mb-1"/></div>
          </v-expand-transition>
        </v-img>
        <v-card-title>{{ title }}</v-card-title>
        <v-card-subtitle>{{ subtitle }}</v-card-subtitle>
        <v-card-text>{{ description }}</v-card-text>
      </v-card>
    </template>
  </v-hover>
</template>

<script lang="ts" setup>
import {siGodotengine, siUnity, siUnrealengine } from "simple-icons"

const props = defineProps({
  title: String,
  subtitle: String,
  builtWith: String,
  description: String,
  filename: String,
  link: String
})

function getIcon() {
  console.log(props.builtWith)
  switch(props.builtWith) {
    case "godot": return [siGodotengine.path]
    case "unity": return [siUnity.path]
    case "unreal": return [siUnrealengine.path]
    default: return ""
  }
}

function getImageUrl() {
  return new URL(`../assets/images/${props.filename}`, import.meta.url).href
}
</script>

<style scoped lang="scss">
.img-overlay {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  padding: .1em 1em 0 1em;
  background-color: rgba(var(--v-theme-surface), 0.75);
}
</style>