<template>
  <v-footer app height="40">
    <a
      v-for="item in items"
      :key="item.title"
      class="d-inline-block mx-2 social-link"
      :href="item.href"
      rel="noopener noreferrer"
      target="_blank"
      :title="item.title"
    >
      <v-icon :icon="item.icon" :size="(typeof item.icon == 'string') ? 16 : 14" />
    </a>

    <div
      class="text-caption text-disabled"
      style="position: absolute; right: 16px"
    >
      &copy; 2025 <span class="d-none d-sm-inline-block">chaiyawahoo</span>
    </div>
  </v-footer>
</template>

<script setup lang="ts">
import { siLinktree } from 'simple-icons';

const items = [
  {
    title: "Linktree",
    icon: [siLinktree.path],
    href: "https://linktr.ee/chaiyawahoo",
  },
  {
    title: "GitHub",
    icon: `mdi-github`,
    href: "https://github.com/chaiyawahoo",
  },
  {
    title: "LinkedIn",
    icon: `mdi-linkedin`,
    href: "https://www.linkedin.com/in/chai-nunes/"
  }
];
</script>

<style scoped lang="scss">
.social-link :deep(.v-icon) {
  color: rgba(var(--v-theme-on-background), var(--v-disabled-opacity));
  text-decoration: none;
  transition: .2s ease-in-out;

  &:hover {
    color: rgba(25, 118, 210, 1);
  }
}
</style>
