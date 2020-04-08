$(function() {
    // 更新履歴
    var tblDOM = $('#log');
    var tblObj = '';

    for (var i = 0; i < Object.keys(data).length; i++) {

        tblObj += '<tr>';
        tblObj += '<td>';
        tblObj += data[i].date;
        tblObj += '</td>';
        tblObj += '</tr>';
        tblObj += '<tr>';
        tblObj += '<td>';
        tblObj += data[i].value;
        tblObj += '</td>';
        tblObj += '</tr>';
    }
    tblDOM.html(tblObj);
});


var data = [
    {'date': '2018/04/20', 'value': 'トイガンインプレ更新'},
    {'date': '2017/11/18', 'value': 'トイガンインプレ更新'},
    {'date': '2017/10/12', 'value': 'トイガンインプレ更新'},
    {'date': '2017/09/28', 'value': 'トイガンインプレ更新'},
    {'date': '2017/09/18', 'value': 'トイガンインプレ更新'},
    {'date': '2017/08/05', 'value': 'トイガンインプレ更新'},
    {'date': '2017/07/22', 'value': 'トイガンインプレ更新'},
    {'date': '2017/06/16', 'value': 'リンク更新、なんでもインプレ削除'},
    {'date': '2017/06/14', 'value': 'トイガンインプレ更新'},
    {'date': '2017/06/08', 'value': 'トイガンインプレ更新'},
    {'date': '2017/06/03', 'value': 'トップページ、リンク集更新'},
    {'date': '2017/06/02', 'value': 'ホームページリニューアル中'},
];
