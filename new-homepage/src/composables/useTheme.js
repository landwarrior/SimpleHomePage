import { nextTick, onMounted, onUnmounted, ref, watch } from 'vue';

/**
 * カラーモード（ダークモード/ライトモード）の切り替えを管理するComposable
 * Bootstrapのcolor-modes.jsを参考にしたVue.js実装
 */
export function useTheme() {
    const theme = ref('system');
    let systemThemeHandler = null;

    /**
     * localStorageから保存されているテーマ設定を取得
     * @returns {string|null} 保存されているテーマ（'light', 'dark', 'system'）またはnull
     */
    const getStoredTheme = () => localStorage.getItem('theme');

    /**
     * テーマ設定をlocalStorageに保存
     * @param {string} themeValue - 保存するテーマ（'light', 'dark', 'system'）
     */
    const setStoredTheme = (themeValue) => localStorage.setItem('theme', themeValue);

    /**
     * 優先されるテーマを取得
     * 保存されているテーマがあればそれを返し、なければ'system'を返す
     * @returns {string} 優先されるテーマ（'light', 'dark', 'system'）
     */
    const getPreferredTheme = () => {
        const storedTheme = getStoredTheme();
        // 保存されているテーマがあればそれを返す
        if (storedTheme) {
            return storedTheme;
        }
        // 保存されていない場合は'system'を返す（システム設定に従う）
        return 'system';
    };

    /**
     * テーマをHTML要素に適用
     * @param {string} themeValue - 適用するテーマ（'light', 'dark', 'system'）
     */
    const applyTheme = (themeValue = theme.value) => {
        const html = document.documentElement;

        // まずdarkクラスを削除
        html.classList.remove('dark');

        if (themeValue === 'system') {
            // システムの設定に従う
            const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
            if (prefersDark) {
                html.classList.add('dark');
            }
        } else if (themeValue === 'dark') {
            html.classList.add('dark');
        }
        // lightの場合は何もしない（既にdarkクラスを削除済み）
    };

    /**
     * システムのカラースキーム設定変更を監視
     * 'system'モードが選択されている場合のみ、システム設定の変更に追従
     */
    const watchSystemTheme = () => {
        const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
        systemThemeHandler = (e) => {
            // 'system'モードの場合のみ、システム設定の変更に追従
            if (theme.value === 'system') {
                const html = document.documentElement;
                if (e.matches) {
                    html.classList.add('dark');
                } else {
                    html.classList.remove('dark');
                }
            }
        };
        mediaQuery.addEventListener('change', systemThemeHandler);
    };

    /**
     * システムテーマの監視を停止
     */
    const unwatchSystemTheme = () => {
        if (systemThemeHandler) {
            const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
            mediaQuery.removeEventListener('change', systemThemeHandler);
            systemThemeHandler = null;
        }
    };

    /**
     * テーマを更新
     * @param {string} newTheme - 新しいテーマ（'light', 'dark', 'system'）
     */
    const updateTheme = async (newTheme) => {
        theme.value = newTheme;
        setStoredTheme(newTheme);

        // Vueの更新サイクルを待ってからテーマを適用
        await nextTick();
        applyTheme(newTheme);

        // システムテーマの監視を更新
        if (newTheme === 'system') {
            watchSystemTheme();
        } else {
            unwatchSystemTheme();
        }
    };

    // 初期化
    onMounted(() => {
        // 優先されるテーマを取得（保存されているテーマがあればそれを、なければ'system'）
        const preferredTheme = getPreferredTheme();
        theme.value = preferredTheme;

        // 初期テーマを適用
        applyTheme(preferredTheme);

        // システムテーマ変更を監視（'system'モードの場合のみ）
        if (preferredTheme === 'system') {
            watchSystemTheme();
        }
    });

    // クリーンアップ
    onUnmounted(() => {
        unwatchSystemTheme();
    });

    // テーマが変更されたら自動的に適用
    watch(theme, () => {
        applyTheme();
    });

    return {
        theme,
        updateTheme,
    };
}
