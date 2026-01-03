/**
 * 広告や不要な要素を削除するためのコンポーザブル関数
 * 元の deleteAdvertising.js の機能を Vue 3 アプリケーション用に移植
 */

export function useDeleteAdvertising() {
    /**
     * 広告や不要な要素を削除する関数
     */
    function deleteSignage(): void {
        // body直下のscriptタグを削除（ただし、アプリケーションのメインスクリプトは除外）
        const scripts = document.querySelectorAll('body>script:not([type="module"])');
        if (scripts && scripts.length > 0) {
            for (const sc of scripts) {
                const scriptElement = sc as HTMLScriptElement;
                // アプリケーションのメインスクリプトは除外
                if (scriptElement.src && !scriptElement.src.includes('/src/main.ts') && !scriptElement.src.includes('main.ts')) {
                    sc.remove();
                }
            }
        }

        // iframeを削除
        const frames = document.querySelectorAll('iframe');
        if (frames && frames.length > 0) {
            for (const fr of frames) {
                fr.remove();
            }
        }

        // 画像を削除（ただし、#app内の画像と.myImagesクラスを持つ画像は除外）
        const images = document.querySelectorAll('img');
        if (images && images.length > 0) {
            for (const img of images) {
                // #app内の画像は除外（アプリケーションの画像）
                // .myImagesクラスを持つ画像も除外（元のコードとの互換性のため）
                if (!img.closest('#app') && !img.classList.contains('myImages')) {
                    img.remove();
                }
            }
        }

        // 特定のIDやクラスを持たないbody直下のdivを削除
        const divs = document.querySelectorAll('body>div:not(#app):not(#header):not(#main-contents):not(#footer):not(.sidenav-overlay):not(.drag-target)');
        if (divs && divs.length > 0) {
            for (const dv of divs) {
                dv.remove();
            }
        }
    }

    /**
     * 広告削除機能を初期化する関数
     * DOMContentLoaded時に実行し、その後定期的に実行する
     */
    function initDeleteAdvertising(): void {
        // 初回実行
        deleteSignage();

        // 1秒、2秒、3秒、4秒後に実行
        setTimeout(deleteSignage, 1000);
        setTimeout(deleteSignage, 2000);
        setTimeout(deleteSignage, 3000);
        setTimeout(deleteSignage, 4000);

        // 5秒ごとに定期実行
        setInterval(deleteSignage, 5000);
    }

    return {
        deleteSignage,
        initDeleteAdvertising,
    };
}
