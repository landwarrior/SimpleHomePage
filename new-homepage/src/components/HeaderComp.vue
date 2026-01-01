<script setup lang="ts">
import { ref } from 'vue';
import { RouterLink, useRoute } from 'vue-router';
import type { Theme } from '../composables/useTheme';
import ThemeToggle from './ThemeToggle.vue';

// メニュー項目の型定義
interface MenuItem {
    href: string;
    title: string;
    target: string;
    isRouterLink: boolean;
}

// 親コンポーネントから受け取るpropsの定義
const props = defineProps<{
    // 現在アクティブなタイトル
    activeTitle?: string;
    // 現在のテーマ
    currentTheme?: Theme;
}>();

// カスタムイベントの発火用
const emit = defineEmits<{
    'update-theme': [theme: Theme];
}>();

const route = useRoute();

// メニュー一覧（デスクトップ・モバイル共通）
const menuList: MenuItem[] = [
    {
        href: '/toygun',
        title: 'トイガンインプレ',
        target: '',
        isRouterLink: true,
    },
    {
        href: '/linkpage',
        title: 'リンク集',
        target: '',
        isRouterLink: true,
    },
    {
        href: 'http://whippoorwill.militaryblog.jp/',
        title: 'ミリブロ',
        target: '_blank',
        isRouterLink: false,
    },
];

// モバイルメニューの開閉状態（true: オープン, false: クローズ）
const isMobileMenuOpen = ref<boolean>(false);

// モバイルメニューの開閉を切り替える関数
const toggleMobileMenu = (): void => {
    isMobileMenuOpen.value = !isMobileMenuOpen.value;
};

// モバイルメニューを閉じる関数
const closeMobileMenu = (): void => {
    isMobileMenuOpen.value = false;
};

// テーマ切り替えイベントを親へエミット
const handleUpdateTheme = (theme: Theme): void => {
    emit('update-theme', theme);
};
</script>

<template>
    <header class="bg-teal-600 text-white shadow-md">
        <nav class="container mx-auto px-4">
            <div class="flex items-center justify-between h-16">
                <RouterLink to="/" class="text-xl font-bold hover:text-teal-200 transition-colors">Survivalな理想郷</RouterLink>

                <!-- デスクトップメニュー -->
                <div class="hidden md:flex items-center space-x-4">
                    <ul class="flex">
                        <li v-for="menu in menuList" :key="menu.title">
                            <RouterLink
                                v-if="menu.isRouterLink"
                                :to="menu.href"
                                :class="[
                'px-3 py-2 rounded hover:bg-teal-700 transition-colors',
                activeTitle === menu.title ? 'bg-teal-800 font-semibold' : ''
              ]"
                            >
                                {{ menu.title }}
                            </RouterLink>
                            <a
                                v-else
                                :href="menu.href"
                                :target="menu.target"
                                :class="[
                'px-3 py-2 rounded hover:bg-teal-700 transition-colors',
                activeTitle === menu.title ? 'bg-teal-800 font-semibold' : ''
              ]"
                            >
                                {{ menu.title }}
                            </a>
                        </li>
                    </ul>
                    <ThemeToggle :current-theme="currentTheme ?? 'system'" @update-theme="handleUpdateTheme"/>
                </div>

                <!-- モバイルメニュー用ボタン -->
                <div class="md:hidden flex items-center gap-2">
                    <ThemeToggle :current-theme="currentTheme ?? 'system'" @update-theme="handleUpdateTheme"/>
                    <button @click="toggleMobileMenu" class="p-2 rounded hover:bg-teal-700 transition-colors" aria-label="メニューを開く">
                        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"/>
                        </svg>
                    </button>
                </div>
            </div>

            <!-- モバイルメニュー本体 -->
            <div v-if="isMobileMenuOpen" class="md:hidden pb-4">
                <ul class="space-y-2">
                    <li v-for="menu in menuList" :key="menu.title">
                        <RouterLink
                            v-if="menu.isRouterLink"
                            :to="menu.href"
                            @click="closeMobileMenu"
                            :class="[
              'block px-3 py-2 rounded hover:bg-teal-700 transition-colors',
              activeTitle === menu.title ? 'bg-teal-800 font-semibold' : ''
            ]"
                        >
                            {{ menu.title }}
                        </RouterLink>
                        <a
                            v-else
                            :href="menu.href"
                            :target="menu.target"
                            @click="closeMobileMenu"
                            :class="[
              'block px-3 py-2 rounded hover:bg-teal-700 transition-colors',
              activeTitle === menu.title ? 'bg-teal-800 font-semibold' : ''
            ]"
                        >
                            {{ menu.title }}
                        </a>
                    </li>
                </ul>
            </div>
        </nav>
    </header>
</template>
