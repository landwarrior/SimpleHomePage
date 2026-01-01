<script setup lang="ts">
import type { Link } from '../composables/useLinks';
import { useLinks } from '../composables/useLinks';

const { makerList, shopList, othersList, chibaList, tokyoList, kanagawaList, saitamaList, gifuList, oosakaList } = useLinks();

// リンクカテゴリの型定義
interface LinkCategory {
    title: string;
    list: Link[];
}

// リンクカテゴリの定義
const linkCategories: LinkCategory[] = [
    { title: 'メーカー', list: makerList },
    { title: 'ショップ', list: shopList },
    { title: 'その他', list: othersList },
    { title: '千葉のフィールド', list: chibaList },
    { title: '東京のフィールド', list: tokyoList },
    { title: '神奈川のフィールド', list: kanagawaList },
    { title: '埼玉のフィールド', list: saitamaList },
    { title: '岐阜のフィールド', list: gifuList },
    { title: '大阪のフィールド', list: oosakaList },
];
</script>

<template>
    <div class="container mx-auto px-4 py-8">
        <h1 class="text-3xl md:text-4xl font-bold text-center mb-8 text-gray-800 dark:text-gray-100">リンク集</h1>
        <div class="space-y-8">
            <div v-for="category in linkCategories" :key="category.title" class="neu-raised neu-rounded-lg dark:bg-gray-800 dark:shadow-md p-6 transition-all">
                <h4 class="text-xl md:text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-200">{{ category.title }}</h4>
                <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-6 gap-y-5">
                    <a
                        v-for="link in category.list"
                        :key="link.url"
                        :href="link.url"
                        target="_blank"
                        rel="noopener noreferrer"
                        class="neu-btn-raised neu-btn-raised-sm neu-rounded px-4 py-3 text-sm text-gray-700 dark:text-gray-300 hover:text-teal-600 dark:hover:text-teal-400 transition-colors text-center wrap-break-word"
                    >
                        {{ link.name }}
                    </a>
                </div>
            </div>
        </div>
    </div>
</template>
