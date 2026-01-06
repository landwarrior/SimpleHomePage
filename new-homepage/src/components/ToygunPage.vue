<script setup lang="ts">
import { onMounted, ref } from 'vue';
import type { Gun } from '../composables/useToygun';
import { useToygun } from '../composables/useToygun';

const { elegunList, gasgunList, airList } = useToygun();

// 各カテゴリごとのアクティブなタブを管理（カテゴリタイトルをキーとして使用）
const activeTabs = ref<Record<string, string>>({});

// タブを切り替える関数
const setActiveTab = (categoryTitle: string, gunId: string): void => {
    activeTabs.value[categoryTitle] = gunId;
};

// ガンカテゴリの型定義
interface GunCategory {
    title: string;
    list: Gun[];
}

const gunCategories: GunCategory[] = [
    { title: '電動ガン', list: elegunList },
    { title: 'ガスガン', list: gasgunList },
    { title: 'エアコキ', list: airList },
];

// 初期表示時に各カテゴリの最初のタブをアクティブにする
const initializeTabs = (): void => {
    gunCategories.forEach((category) => {
        const firstGun = category.list[0];
        if (firstGun && !activeTabs.value[category.title]) {
            setActiveTab(category.title, firstGun.id);
        }
    });
};

// 画像を新しいウィンドウで開く関数
const openImageInNewWindow = (imgUrl: string): void => {
    window.open(imgUrl, '_blank');
};

// コンポーネントマウント時にタブを初期化
onMounted(() => {
    initializeTabs();
});
</script>

<template>
    <div class="container mx-auto px-4 py-8">
        <h1 class="text-3xl md:text-4xl font-bold text-center mb-8 text-gray-800 dark:text-gray-100">トイガンインプレ</h1>

        <div v-for="category in gunCategories" :key="category.title" class="mb-12">
            <h4 class="text-xl md:text-2xl font-semibold mb-6 text-gray-800 dark:text-gray-200">{{ category.title }}</h4>

            <!-- ニューモーフィズムスタイルのボタンナビゲーション -->
            <div class="mb-6">
                <nav class="flex flex-wrap gap-6">
                    <button
                        v-for="gun in category.list"
                        :key="gun.id"
                        @click="setActiveTab(category.title, gun.id)"
                        :class="[
                            'px-5 py-2.5 text-sm font-medium neu-rounded transition-all',
                            activeTabs[category.title] === gun.id
                            ? 'neu-btn-pressed neu-btn-pressed-sm text-gray-800 dark:text-gray-100'
                            : 'neu-btn-raised neu-btn-raised-sm text-gray-700 dark:text-gray-300 hover:neu-btn-pressed',
                        ]"
                    >
                        {{ gun.name }}
                    </button>
                </nav>
            </div>

            <!-- ガンの詳細コンテンツ（選択されたもののみ表示） -->
            <div v-for="gun in category.list" :key="gun.id" v-show="activeTabs[category.title] === gun.id" :id="gun.id" class="neu-raised neu-rounded-lg p-6 mb-6 transition-all">
                <div>
                    <!-- 説明文 -->
                    <p class="text-gray-700 dark:text-gray-300 leading-relaxed mb-6" v-html="gun.desc"></p>

                    <!-- 画像ギャラリー -->
                    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mb-6">
                        <img
                            v-for="(img, index) in gun.imgs"
                            :key="index"
                            :src="img"
                            :alt="`${gun.name} - 画像${index + 1}`"
                            class="w-full h-auto rounded-lg shadow-md hover:shadow-lg transition-shadow cursor-pointer object-cover"
                            @click="openImageInNewWindow(img)"
                        >
                    </div>

                    <!-- パーツテーブル -->
                    <div v-if="gun.tableValue && gun.tableValue.length > 0" class="overflow-x-auto -mx-2 sm:mx-0">
                        <table class="w-full divide-y divide-gray-200 dark:divide-[#3e3e3e]">
                            <thead class="bg-[#e0e0e0] dark:bg-[#272727]">
                                <tr>
                                    <th class="px-3 sm:px-6 py-3 text-left text-xs sm:text-sm font-medium text-gray-500 dark:text-[#d0d0d0] tracking-wider">メーカー</th>
                                    <th class="px-3 sm:px-6 py-3 text-left text-xs sm:text-sm font-medium text-gray-500 dark:text-[#d0d0d0] tracking-wider">パーツ名称</th>
                                </tr>
                            </thead>
                            <tbody class="bg-[#e0e0e0] dark:bg-[#272727] divide-y divide-gray-200 dark:divide-[#3e3e3e]">
                                <tr v-for="(part, index) in gun.tableValue" :key="index" class="hover:bg-[#d5d5d5] dark:hover:bg-[#2e2e2e] transition-colors">
                                    <td class="px-3 sm:px-6 py-4 text-xs sm:text-sm text-gray-900 dark:text-[#d0d0d0]">{{ part.maker }}</td>
                                    <td class="px-3 sm:px-6 py-4 text-xs sm:text-sm text-gray-900 dark:text-[#d0d0d0] wrap-break-word">{{ part.name }}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
