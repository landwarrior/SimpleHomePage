<script setup lang="ts">
import { onMounted, ref } from 'vue';

const thisYear = ref<string>('');

onMounted(() => {
  const date = new Date();
  thisYear.value = date.getFullYear().toString();
});
</script>

<template>
  <footer class="py-6 mt-auto transition-colors" style="background-color: var(--neu-bg); color: var(--neu-text-color);">
    <div class="container mx-auto px-4 text-center">
      <p>&copy; 2006 - <span id="year">{{ thisYear }}</span> landwarrior</p>
    </div>
  </footer>
</template>
