<script setup>
import { computed } from 'vue';
import { RouterView, useRoute } from 'vue-router';
import FooterComp from './components/FooterComp.vue';
import HeaderComp from './components/HeaderComp.vue';
import { useTheme } from './composables/useTheme';

const route = useRoute();
const { theme, updateTheme } = useTheme();

// 現在のルートに基づいてアクティブなタイトルを設定
const activeTitle = computed(() => {
  if (route.path === '/linkpage') {
    return 'リンク集';
  }
  return '';
});
</script>

<template>
  <div v-cloak class="min-h-screen flex flex-col neu-bg-gray dark:bg-gray-900 transition-colors">
    <HeaderComp :active-title="activeTitle" :current-theme="theme" @update-theme="updateTheme" />
    <RouterView />
    <FooterComp />
  </div>
</template>
