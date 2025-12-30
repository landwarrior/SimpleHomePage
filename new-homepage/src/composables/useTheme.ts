import { nextTick, onMounted, onUnmounted, ref, watch, type Ref } from 'vue';

// テーマの型定義
export type Theme = 'light' | 'dark' | 'system';

/**
 * カラーモード（ダークモード/ライトモード）の切り替えを管理するComposable
 * Bootstrapのcolor-modes.jsを参考にしたVue.js実装
 */
export function useTheme() {
    const theme: Ref<Theme> = ref<Theme>('system');
    let systemThemeHandler: ((e: MediaQueryListEvent) => void) | null = null;

    /**
     * localStorageから保存されているテーマ設定を取得
     * @returns 保存されているテーマ（'light', 'dark', 'system'）またはnull
     */
    const getStoredTheme = (): string | null => localStorage.getItem('theme');

    /**
     * テーマ設定をlocalStorageに保存
     * @param themeValue - 保存するテーマ（'light', 'dark', 'system'）
     */
    const setStoredTheme = (themeValue: Theme): void => {
        localStorage.setItem('theme', themeValue);
    };

    /**
     * 優先されるテーマを取得
     * 保存されているテーマがあればそれを返し、なければ'system'を返す
     * @returns 優先されるテーマ（'light', 'dark', 'system'）
     */
    const getPreferredTheme = (): Theme => {
        const storedTheme = getStoredTheme();
        // 保存されているテーマがあればそれを返す
        if (storedTheme && (storedTheme === 'light' || storedTheme === 'dark' || storedTheme === 'system')) {
            return storedTheme as Theme;
        }
        // 保存されていない場合は'system'を返す（システム設定に従う）
        return 'system';
    };

    /**
     * テーマをHTML要素に適用
     * @param themeValue - 適用するテーマ（'light', 'dark', 'system'）
     */
    const applyTheme = (themeValue: Theme = theme.value): void => {
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
    const watchSystemTheme = (): void => {
        const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
        systemThemeHandler = (e: MediaQueryListEvent) => {
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
    const unwatchSystemTheme = (): void => {
        if (systemThemeHandler) {
            const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
            mediaQuery.removeEventListener('change', systemThemeHandler);
            systemThemeHandler = null;
        }
    };

    /**
     * テーマを更新
     * @param newTheme - 新しいテーマ（'light', 'dark', 'system'）
     */
    const updateTheme = async (newTheme: Theme): Promise<void> => {
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
