window.addEventListener('DOMContentLoaded', () => {
    const date = new Date();
    document.getElementById('year').innerText = date.getFullYear();
    M.AutoInit();
});
