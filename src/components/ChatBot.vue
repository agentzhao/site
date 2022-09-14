<template>
  <div class="mx-auto w-10/12 sm:w-3/4">
    <div
      class="mb-5 text-lg font-bold uppercase text-custom-purple font-OpenSans"
    >
      Ask me Anything
    </div>
    <form class="flex flex-col items-center mx-auto text-center">
      <input type="text" class="flex mb-5 w-4/5 h-20 rounded-md" />
      <input type="text" class="py-2 w-1/3 rounded-full form-input" />

      <input type="button" class="px-6 text-white" />
    </form>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
const loading = ref(false);
</script>

<style scoped></style>
