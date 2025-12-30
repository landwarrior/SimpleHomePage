<script setup lang="ts">
import { ref } from 'vue';
import type { Theme } from '../composables/useTheme';

const props = defineProps<{
  currentTheme: Theme;
}>();

const emit = defineEmits<{
  'update-theme': [theme: Theme];
}>();

const showMenu = ref<boolean>(false);

const setTheme = (theme: Theme): void => {
  emit('update-theme', theme);
  showMenu.value = false;
};

const toggleMenu = (): void => {
  showMenu.value = !showMenu.value;
};

const closeMenu = (): void => {
  showMenu.value = false;
};

// click-outside ディレクティブの型定義
interface ClickOutsideElement extends HTMLElement {
  clickOutsideEvent?: (event: MouseEvent) => void;
  // メモリーリーク対策: setTimeoutのIDを保存して、unmounted時にクリアできるようにする
  clickOutsideTimeout?: number;
}

// click-outside ディレクティブ
// メモリーリーク対策の実装:
// - setTimeoutでイベントリスナーの追加を遅延させる（現在のクリックイベントが処理されるまで待つ）
// - タイムアウトIDを保存し、unmounted時にクリアすることで、コンポーネントがアンマウントされた後に
//   タイムアウトが発火しても孤立したイベントリスナーが追加されないようにする
const vClickOutside = {
  mounted(el: ClickOutsideElement, binding: { value: () => void }) {
    el.clickOutsideEvent = function (event: MouseEvent) {
      // クリックされた要素がメニュー内でない場合のみ閉じる
      if (!(el === event.target || el.contains(event.target as Node))) {
        binding.value();
      }
    };
    // 少し遅延させてイベントリスナーを追加（現在のクリックイベントが処理されるまで待つ）
    // メモリーリーク対策: タイムアウトIDを保存（unmounted時にクリアするため）
    el.clickOutsideTimeout = window.setTimeout(() => {
      // メモリーリーク対策: タイムアウトが発火した時点で要素がまだDOMに存在するか確認
      // コンポーネントがアンマウントされた後にタイムアウトが発火した場合、孤立したリスナーを追加しない
      if (document.body.contains(el) && el.clickOutsideEvent) {
        document.addEventListener('click', el.clickOutsideEvent);
      }
      // タイムアウトIDをクリア
      el.clickOutsideTimeout = undefined;
    }, 0);
  },
  unmounted(el: ClickOutsideElement) {
    // メモリーリーク対策: タイムアウトがまだ実行されていない場合はクリア
    // コンポーネントがタイムアウト発火前にアンマウントされた場合、タイムアウトをキャンセルして
    // 孤立したイベントリスナーが追加されないようにする
    if (el.clickOutsideTimeout !== undefined) {
      clearTimeout(el.clickOutsideTimeout);
      el.clickOutsideTimeout = undefined;
    }
    // イベントリスナーが追加されている場合は削除
    // メモリーリーク対策: 追加されたリスナーを確実に削除し、参照をクリアする
    if (el.clickOutsideEvent) {
      document.removeEventListener('click', el.clickOutsideEvent);
      el.clickOutsideEvent = undefined;
    }
  },
};
</script>

<template>
  <div class="relative inline-block">
    <button @click.stop="toggleMenu" class="flex items-center gap-2 px-4 py-2 rounded-lg bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 shadow-sm hover:shadow-md transition-all" aria-label="テーマを切り替え">
      <!-- アイコン -->
      <svg v-if="currentTheme === 'light'" class="w-5 h-5 text-yellow-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
      </svg>
      <svg v-else-if="currentTheme === 'dark'" class="w-5 h-5 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
      </svg>
      <svg v-else class="w-5 h-5 text-gray-600 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>

      <span class="text-sm font-medium text-gray-700 dark:text-gray-300">
        {{ currentTheme === 'light' ? 'ライト' : currentTheme === 'dark' ? 'ダーク' : 'システム' }}
      </span>

      <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
      </svg>
    </button>

    <!-- ドロップダウンメニュー -->
    <div v-if="showMenu" v-click-outside="closeMenu" @click.stop class="absolute right-0 mt-2 w-48 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg shadow-lg z-50">
      <div class="py-1">
        <button @click.stop="setTheme('light')" :class="[
          'w-full text-left px-4 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors flex items-center gap-2',
          currentTheme === 'light' ? 'bg-gray-100 dark:bg-gray-700 font-semibold' : ''
        ]">
          <svg class="w-4 h-4 text-yellow-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
          </svg>
          <span class="text-gray-700 dark:text-gray-300">ライト</span>
        </button>
        <button @click.stop="setTheme('dark')" :class="[
          'w-full text-left px-4 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors flex items-center gap-2',
          currentTheme === 'dark' ? 'bg-gray-100 dark:bg-gray-700 font-semibold' : ''
        ]">
          <svg class="w-4 h-4 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
          </svg>
          <span class="text-gray-700 dark:text-gray-300">ダーク</span>
        </button>
        <button @click.stop="setTheme('system')" :class="[
          'w-full text-left px-4 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors flex items-center gap-2',
          currentTheme === 'system' ? 'bg-gray-100 dark:bg-gray-700 font-semibold' : ''
        ]">
          <svg class="w-4 h-4 text-gray-600 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg>
          <span class="text-gray-700 dark:text-gray-300">システム</span>
        </button>
      </div>
    </div>
  </div>
</template>
