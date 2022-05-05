window.addEventListener('DOMContentLoaded', () => {
    const tblDOM = document.getElementById('log');
    let tblHtml = '';
    for (const log of logData) {
        tblHtml += `<tr><td>${log.date}</td><td>${log.value}</td></tr>`;
    }
    tblDOM.innerHTML = tblHtml;
});

const logData = [
    {'date': '2022/05/05', 'value': 'ホームページリニューアル'},
];
