<script setup lang="ts">
import { computed } from 'vue';
import { RouterView, useRoute } from 'vue-router';
import FooterComp from './components/FooterComp.vue';
import HeaderComp from './components/HeaderComp.vue';
import type { Theme } from './composables/useTheme';
import { useTheme } from './composables/useTheme';

const route = useRoute();
const { theme, updateTheme } = useTheme();

// 現在のルートに基づいてアクティブなタイトルを設定
const activeTitle = computed<string>(() => {
  if (route.path === '/linkpage') {
    return 'リンク集';
  }
  return '';
});

// テーマ更新ハンドラー
const handleUpdateTheme = (newTheme: Theme): void => {
  updateTheme(newTheme);
};
</script>

<template>
  <div v-cloak class="min-h-screen flex flex-col neu-bg-gray dark:bg-gray-900 transition-colors">
    <HeaderComp :active-title="activeTitle" :current-theme="theme" @update-theme="handleUpdateTheme" />
    <RouterView />
    <FooterComp />
  </div>
</template>
