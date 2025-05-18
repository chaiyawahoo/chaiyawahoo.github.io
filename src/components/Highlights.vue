<template>
  <v-container>
    <v-row class="justify-center">
      <v-col v-for="item in items" :key="item.title" cols="12" sm="4">
        <ProjectCard :title="item.title" :subtitle="item.subtitle" :built-with="item.builtWith" :description="item.description" :filename="item.filename" :link="item.link" />
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts" setup>
const items = [
  {
    title: "Chaitale",
    subtitle: "A multiplayer voxel game.",
    builtWith: "godot",
    description: "",
    filename: "chaitale.png",
    link: "https://github.com/chaiyawahoo/chaitale"
  },
  {
    title: "Paper Trails: A Scrapbooking Story",
    subtitle: "A cozy 2D puzzle game.",
    builtWith: "godot",
    description: "Paper Trails: A Scrapbooking Story is a 2D puzzle game about cozy scrapbooking as you follow a little girl's life. Solve puzzles to create the correct spreads and make choices that will influence Belle along her journey of growing up and reconnecting with her mother.",
    filename: "paper-trails.png",
    link: "https://store.steampowered.com/app/3137510/Paper_Trails_A_Scrapbooking_Story/"
  },
  {
    title: "Smog",
    subtitle: "A 2D pixel survival horror game.",
    builtWith: "godot",
    description: "Smog is a 2D pixel survival horror game set in 1870s Victorian London. Take on the role of Reginald Wilton, the owner of a railway factory, and try to escape your burning factory infested with monsters. Each time a monster hits you, you lose some of your sanity. Lose it all and it's game over.",
    filename: "smog.png",
    link: "https://keanataire.itch.io/smog"
  }
]
</script>