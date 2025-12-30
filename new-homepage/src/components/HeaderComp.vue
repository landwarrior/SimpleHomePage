<script setup>
import { ref } from 'vue'
import ThemeToggle from './ThemeToggle.vue'

const props = defineProps({
  activeTitle: {
    type: String,
    default: ''
  },
  currentTheme: {
    type: String,
    default: 'system'
  }
})

const emit = defineEmits(['update-theme'])

const menuList = [
  {
    href: 'toygun.html',
    title: 'トイガンインプレ',
    target: '',
  },
  {
    href: 'linkpage.html',
    title: 'リンク集',
    target: '',
  },
  {
    href: 'http://whippoorwill.militaryblog.jp/',
    title: 'ミリブロ',
    target: '_blank',
  },
  {
    href: 'https://www.youtube.com/channel/UCzW1XRS2c-p5v4w7Nn1bcFQ',
    title: 'Youtube',
    target: '_blank',
  },
]

const isMobileMenuOpen = ref(false)

const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value
}

const closeMobileMenu = () => {
  isMobileMenuOpen.value = false
}

const handleUpdateTheme = (theme) => {
  emit('update-theme', theme)
}
</script>

<template>
  <header class="bg-teal-600 text-white shadow-md">
    <nav class="container mx-auto px-4">
      <div class="flex items-center justify-between h-16">
        <a href="/" class="text-xl font-bold hover:text-teal-200 transition-colors">
          Survivalな理想郷
        </a>

        <!-- Desktop Menu -->
        <div class="hidden md:flex items-center space-x-4">
          <ul class="flex space-x-6">
            <li v-for="menu in menuList" :key="menu.title">
              <a :href="menu.href" :target="menu.target" :class="[
                'px-3 py-2 rounded hover:bg-teal-700 transition-colors',
                activeTitle === menu.title ? 'bg-teal-800 font-semibold' : ''
              ]">
                {{ menu.title }}
              </a>
            </li>
          </ul>
          <ThemeToggle :current-theme="currentTheme" @update-theme="handleUpdateTheme" />
        </div>

        <!-- Mobile Menu Button -->
        <div class="md:hidden flex items-center gap-2">
          <ThemeToggle :current-theme="currentTheme" @update-theme="handleUpdateTheme" />
          <button @click="toggleMobileMenu" class="p-2 rounded hover:bg-teal-700 transition-colors" aria-label="メニューを開く">
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>

      <!-- Mobile Menu -->
      <div v-if="isMobileMenuOpen" class="md:hidden pb-4">
        <ul class="space-y-2">
          <li v-for="menu in menuList" :key="menu.title">
            <a :href="menu.href" :target="menu.target" @click="closeMobileMenu" :class="[
              'block px-3 py-2 rounded hover:bg-teal-700 transition-colors',
              activeTitle === menu.title ? 'bg-teal-800 font-semibold' : ''
            ]">
              {{ menu.title }}
            </a>
          </li>
        </ul>
      </div>
    </nav>
  </header>
</template>
