<script setup>
import { ref } from 'vue';
import FooterComp from './components/FooterComp.vue';
import HeaderComp from './components/HeaderComp.vue';
import { useTheme } from './composables/useTheme';

const activeTitle = ref('');
const { theme, updateTheme } = useTheme();
</script>

<template>
  <div v-cloak class="min-h-screen flex flex-col bg-gray-50 dark:bg-gray-900 transition-colors">
    <HeaderComp :active-title="activeTitle" :current-theme="theme" @update-theme="updateTheme" />
    <main class="container mx-auto px-4 py-8 grow">
      <div class="max-w-4xl mx-auto">
        <h1 class="text-3xl md:text-4xl font-bold text-center mb-8 text-gray-800 dark:text-gray-100">
          このホームページについて
        </h1>
        <div class="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 md:p-8 transition-colors">
          <p class="text-gray-700 dark:text-gray-300 leading-relaxed space-y-2">
            このホームページは、Windows11(64bit)、画面解像度3840×2160、Google Chrome最新とMicrosoft Edge最新で動作確認をしております。
            <br>CSS の勉強のために作ってるようなもんです。
            <br>Tailwind CSS という CSS フレームワークを使用しています。
            <br>Vue3 を使用しています。
          </p>
        </div>
      </div>
    </main>
    <FooterComp />
  </div>
</template>
