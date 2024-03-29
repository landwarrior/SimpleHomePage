window.addEventListener('DOMContentLoaded', () => {
    deleteSignage();
    setTimeout(deleteSignage, 1000);
    setTimeout(deleteSignage, 2000);
    setTimeout(deleteSignage, 3000);
    setTimeout(deleteSignage, 4000);
    setInterval(deleteSignage, 5000);
});

function deleteSignage() {
    const scripts = document.querySelectorAll('body>script');
    if (scripts && scripts.length > 0) {
        for (const sc of scripts) {
            sc.remove();
        }
    }
    const frames = document.querySelectorAll('iframe');
    if (frames && frames.length > 0) {
        for (const fr of frames) {
            fr.remove();
        }
    }
    const images = document.querySelectorAll('img:not(.myImages)');
    if (images && images.length > 0) {
        for (const img of images) {
            img.remove();
        }
    }
    const divs = document.querySelectorAll('body>div:not(#header):not(#main-contents):not(#footer):not(.sidenav-overlay):not(.drag-target)');
    if (divs && divs.length > 0) {
        for (const dv of divs) {
            dv.remove();
        }
    }
}
