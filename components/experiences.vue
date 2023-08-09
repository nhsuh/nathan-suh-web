<script setup lang="ts"></script>

<template>
  <div class="text-dark flex flex-col w-80 h-100 bg-grey opacity-75 rounded-lg">
    <div class="text-center py-4">
      <h1 class="font-semibold text-3xl">Experience</h1>
    </div>

    <div>
      <experience-right></experience-right>
    </div>
    <v-divider
      class="h-[1px] md:bg-fern md:border-0 md:rounded mx-3"
    ></v-divider>
    <div><experience-right></experience-right></div>
  </div>
</template>

<style scoped></style>
