<template>
  <!-- <div class="w-screen h-screen bg-black"> -->
  <div class="w-full h-screen bg-background-color">
    <div class="bg-gradient-to-br from-orange-500 via-yellow-500 to-green-500">
      <!-- <div class="bg-gradient-to-br from-red-500 via-orange-500 to-pink-500"> -->
      <!-- <div class="mx-auto w-full md:w-4/5"> -->
      <div class="mx-auto w-full md:w-4/5">
        <Header :isWank="isWank" />
        <Links :isWank="isWank" />
      </div>
      <!-- big screen -->
      <!-- viewBox="100 0 1340 74" -->
      <svg
        class="w-full"
        preserveAspectRatio="none"
        viewBox="600 0 500 74"
        height="74"
      >
        <path
          d="M456.464 0.0433865C277.158 -1.70575 0 50.0141 0 50.0141V74H1440V50.0141C1440 50.0141 1320.4 31.1925 1243.09 27.0276C1099.33 19.2816 1019.08 53.1981 875.138 50.0141C710.527 46.3727 621.108 1.64949 456.464 0.0433865Z"
          class="fill-background-color"
        ></path>
      </svg>
    </div>

    <div class="mx-auto w-full md:w-4/5">
      <Experience :isWank="isWank" />
      <!-- <button class="bg-red-500" @click="toggleWank">toggleWank</button> -->
    </div>
  </div>
</template>

<script setup lang="ts">
import Header from "./components/Header.vue";
import Links from "./components/Links.vue";
import Experience from "./components/Experience.vue";

let isWank = false;
function toggleWank() {
  isWank = !isWank;
}
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@100;200;300;400&family=Open+Sans:wght@300;400;500;700&display=swap");

* {
  box-sizing: border-box;
  font-family: "Monsterrat", sans-serif;
}
</style>
