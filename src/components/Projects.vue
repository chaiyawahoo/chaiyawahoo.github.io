<template>
  <v-container>
    <v-row>
      <v-col v-for="item in items" :key="item.title">
        <ProjectCard :title="item.title" :filename="item.filename" :link="item.link" />
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts" setup>
const items = [
  {
    title: "Chaitale",
    filename: "chaitale.png",
    link: "https://github.com/chaiyawahoo/chaitale"
  },
  {
    title: "Paper Trails: A Scrapbooking Story",
    filename: "paper-trails.png",
    link: "https://store.steampowered.com/app/3137510/Paper_Trails_A_Scrapbooking_Story/"
  },
  {
    title: "Smog",
    filename: "smog.png",
    link: "https://keanataire.itch.io/smog"
  },
]
</script>