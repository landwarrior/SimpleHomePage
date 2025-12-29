import { ref, onMounted, onUnmounted, nextTick, watch } from 'vue'

export function useTheme() {
  const theme = ref('system')
  let systemThemeHandler = null

  const applyTheme = () => {
    const html = document.documentElement

    // まずdarkクラスを削除
    html.classList.remove('dark')

    if (theme.value === 'system') {
      // システムの設定に従う
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
      if (prefersDark) {
        html.classList.add('dark')
      }
    } else if (theme.value === 'dark') {
      html.classList.add('dark')
    }
    // lightの場合は何もしない（既にdarkクラスを削除済み）
  }

  const watchSystemTheme = () => {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)')
    systemThemeHandler = (e) => {
      if (theme.value === 'system') {
        const html = document.documentElement
        if (e.matches) {
          html.classList.add('dark')
        } else {
          html.classList.remove('dark')
        }
      }
    }
    mediaQuery.addEventListener('change', systemThemeHandler)
  }

  const unwatchSystemTheme = () => {
    if (systemThemeHandler) {
      const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)')
      mediaQuery.removeEventListener('change', systemThemeHandler)
      systemThemeHandler = null
    }
  }

  const updateTheme = async (newTheme) => {
    theme.value = newTheme
    localStorage.setItem('theme', newTheme)

    // Vueの更新サイクルを待ってからテーマを適用
    await nextTick()
    applyTheme()

    // システムテーマの監視を更新
    if (newTheme === 'system') {
      watchSystemTheme()
    } else {
      unwatchSystemTheme()
    }
  }

  // 初期化
  onMounted(() => {
    // ローカルストレージからテーマを読み込む
    const savedTheme = localStorage.getItem('theme')
    if (savedTheme) {
      theme.value = savedTheme
    }

    // 初期テーマを適用
    applyTheme()

    // システムテーマ変更を監視
    if (theme.value === 'system') {
      watchSystemTheme()
    }
  })

  // クリーンアップ
  onUnmounted(() => {
    unwatchSystemTheme()
  })

  // テーマが変更されたら自動的に適用
  watch(theme, () => {
    applyTheme()
  })

  return {
    theme,
    updateTheme
  }
}
