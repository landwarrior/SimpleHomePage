<script setup>
import { onMounted, ref } from 'vue'

const thisYear = ref('')

onMounted(() => {
  const date = new Date()
  thisYear.value = date.getFullYear()
})
</script>

<template>
  <footer class="bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 py-6 mt-auto transition-colors">
    <div class="container mx-auto px-4 text-center">
      <p>&copy; 2006 - <span id="year">{{ thisYear }}</span> landwarrior</p>
    </div>
  </footer>
</template>
