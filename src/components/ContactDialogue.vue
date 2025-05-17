<template>
  <v-dialog max-width="500">
    <template v-slot:activator="{ props: activatorProps }">
      <v-btn v-bind="activatorProps" :elevation="2" class="d-none d-sm-block">
        Contact Me
      </v-btn>
      <v-btn v-bind="activatorProps" :elevation="2" :icon="`mdi-email`" class="d-sm-none"></v-btn>
    </template>

    <template v-slot:default="{ isActive }">
      <v-card title="Contact Information">
        <v-card-text>
          <ul>
            <li v-for="item in items" :key="item.name">
              <b>{{ item.name }}:</b> <a :href="item.link" target="_blank">{{ item.display }}</a>
            </li>
          </ul>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn @click="isActive.value = false">Close</v-btn>
        </v-card-actions>
      </v-card>
    </template>
  </v-dialog>
</template>

<script lang="ts" setup>
const items = [
  {
    name: "Email",
    link: "mailto:chaiyawahoo@gmail.com",
    display: "chaiyawahoo@gmail.com"
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/chai-nunes/",
    display: "linkedin.com/in/chai-nunes"
  }
]
</script>

<style scoped>
ul {
  list-style-type: none;
}
</style>