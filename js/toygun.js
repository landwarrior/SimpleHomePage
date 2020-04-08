$(function() {

    $('a.menulist').on('click', function() {
        // $(this).parent().parent().find('li').removeClass('active');
        $('.dropdown-menu>li').removeClass('active');
        $(this).parent().addClass('active');
        // $('a.menulist').addClass('bghovgrey');
        // $(this).removeClass('bghovgrey');
        $('.myhide').css('display', 'none');
        var name = $(this).text();
        name = name.replace(/[ \&\(\)\/\.]/g, '');

        $('#' + name).css('display', 'block');
        // $(this).removeClass('bghovgrey');


    });

    // テーブル要素を各エアガンのインプレ内に表示させる
    for (var i = 0; i < Object.keys(data).length; i++) {

        var tblDOM = $('#' + data[i].id + ' div:last-child>div:last-child');

        var tblObj = '<hr><table class="table">';
        tblObj += '<thead>';
        tblObj += '<tr>';
        tblObj += '<th>';
        tblObj += 'メーカー';
        tblObj += '</th>';
        tblObj += '<th>';
        tblObj += 'パーツ名称';
        tblObj += '</th>';
        tblObj += '</tr>';
        tblObj += '</thead>';
        tblObj += '<tbody>';
        for (var j = 0; j < Object.keys(data[i].value).length; j++) {
            tblObj += '<tr>';
            tblObj += '<td>';
            tblObj += data[i].value[j].maker;
            tblObj += '</td>';
            tblObj += '<td>';
            tblObj += data[i].value[j].name;
            tblObj += '</td>';
            tblObj += '</tr>';

        }

        tblObj += '</tbody>';
        tblObj += '</table>';
        tblDOM.append(tblObj);


    }

});


var data = [
    {'id':'WesternArmsTLERLⅡ', 'value': [
        {'maker': 'VZ Grips','name': 'Diamond Back MARSOC G10'}
    ]},
    {'id':'WAM4Prime', 'value': [
        {'maker': 'Prime','name': 'メタルフレームMUR-1（Noveske刻印）'},
        {'maker': 'Prime','name': 'Ambi Selector'},
        {'maker': 'Prime','name': 'Rear Receiver QD Swivel Mount (for Systema PTW & WA M4 Series)'},
        {'maker': 'Prime','name': 'スチールハンマーセット'},
        {'maker': 'Prime','name': 'NORGON Type Ambi Mag Catch'},
        {'maker': 'G&P','name': 'Anti Rotation Link'},
        {'maker': 'G&P','name': '6ポジションストックパイプ'},
        {'maker': 'G&P','name': '120%Hammer Spring'},
        {'maker': 'Magpul','name': 'CTR Carbine Stock'},
        {'maker': 'Magpul','name': 'MIAD Grip'},
        {'maker': 'SHS','name': 'Trigger'},
        {'maker': 'SHS','name': 'スチールボルトキャッチ'},
        {'maker': 'NeBula','name': 'ファイアリングブロックセット'},
        {'maker': 'IronAirsoft','name': 'Auto Sear'},
        {'maker': 'Colt','name': 'Reciever Extension Nut'},
        {'maker': 'Noveske','name': 'Takedown/Pivot Pin SET'},
        {'maker': 'Western Arms','name': 'ハードリコイルユニットのバッファーのみ'},
        {'maker': 'Western Arms','name': 'リコイルスプリング'},
        {'maker': '','name': ''},
        {'maker': 'IronAirsoft','name': 'チャージングハンドル'},
        {'maker': 'IronAirsoft','name': 'WA M4用 新型ホップアップユニット'},
        {'maker': 'IronAirsoft','name': 'バレルエクステンション'},
        {'maker': 'IronAirsoft','name': 'Gas tube for AR 14.5" barrel カービンレングス用ガスチューブ'},
        {'maker': 'IronAirsoft','name': 'スチールボルトキャリア(新型)'},
        {'maker': 'IronAirsoft','name': 'ローディングノズル'},
        {'maker': 'IronAirsoft','name': 'AR crush washer　ARクラッシュワッシャー'},
        {'maker': 'King Arms','name': 'Front Folding Battle Sight - DE'},
        {'maker': 'King Arms','name': 'Rear Folding Battle Sight - DE'},
        {'maker': 'G&P','name': 'WA/M4対応 Nozzle Spring Set'},
        {'maker': 'G&P','name': 'Knight’s Type M4 Flashider (Clockwise)'},
        {'maker': 'Western Arms','name': 'フローティングバルブ（ガスコントロールバルブなど一式含む）'},
        {'maker': 'High Standard','name': 'Ejection Port Cover'},
        {'maker': 'Oracom','name': 'MK18RIS2 Replica'},
        {'maker': 'TangoDown','name': 'Battle Grip QD (Surefire)'},
        {'maker': 'Surefire','name': 'M952V'},
        {'maker': 'Trijicon','name': 'MRO'},
        {'maker': 'Prime','name': 'Mk18 Mod0 Type 10.3inch スチールブルバレル（穴無し）'},
        {'maker': 'Laylax','name': 'エアシールチャンバーパッキンソフト'},
        {'maker': 'Big-Out','name': 'H-Hop（黒）'},
        {'maker': 'ACE研究所','name': '真☆参式滑空銃身247mm'},
        {'maker': 'MADBULL','name': 'Daniel Defense Licensed Low Profile GasBlock'},
        {'maker': '','name': 'AN/PEQ-15 ATPIAL Replica'}
    ]},
    {'id':'WAM4Iron', 'value': [
        {'maker': 'IronAirsoft','name': 'ロアレシーバー（Coltコマーシャル刻印）'},
        {'maker': 'IronAirsoft','name': 'Trigger Guard'},
        {'maker': 'IronAirsoft','name': 'Auto Sear'},
        {'maker': 'IronAirsoft','name': 'KAC Type Trigger'},
        {'maker': 'IronAirsoft','name': 'スティールリアルハンマー'},
        {'maker': 'IronAirsoft','name': 'KACタイプ アンビセレクター'},
        {'maker': 'Colt','name': 'Receiver Extension, Collapsible'},
        {'maker': 'Colt','name': 'Receiver Extension Nut'},
        {'maker': 'Western Arms','name': 'ファイアリングブロック（旧型）'},
        {'maker': 'SHS','name': 'スチールボルトキャッチ'},
        {'maker': 'Magpul','name': 'MIAD Grip Gen1.1'},
        {'maker': 'Magpul','name': 'CTR Carbine Stock'},
        {'maker': 'Prime','name': 'マガジンキャッチ（レシーバーに付属のもの）'},
        {'maker': 'PROTEC','name': 'RSP/N（粗い方を4巻カット）'},
        {'maker': 'G&P','name': 'スチール・スリングアダプター'},
        {'maker': 'エアボーン','name': 'ハードリコイルバッファー≪ノーマルバージョン≫'},
        {'maker': '','name': ''},
        {'maker': 'IronAirsoft','name': 'Colt M4鍛造アッパーレシーバー'},
        {'maker': 'IronAirsoft','name': 'バレルエクステンション'},
        {'maker': 'IronAirsoft','name': '新型ホップアップユニット'},
        {'maker': 'IronAirsoft','name': 'Gas tube for AR 14.5" barrel カービンレングス用ガスチューブ'},
        {'maker': 'IronAirsoft','name': 'スチールボルトキャリアAAC刻印'},
        {'maker': 'Systema','name': 'バレルナット・アッセンブリー'},
        {'maker': 'ACE研究所','name': '真☆参式滑空銃身247mm'},
        {'maker': 'Prime','name': 'Mk18 Mod0 Type 10.3inch スチールブルバレル（穴無し）'},
        {'maker': 'Laylax','name': 'エアシールチャンバーパッキンソフト'},
        {'maker': 'Big-Out','name': 'H-Hop（黒）'},
        {'maker': 'Knight\'s Armament','name': 'RAS(上部)'},
        {'maker': 'P&S','name': 'RAS(下部)'},
        {'maker': 'Knight\'s Armament','name': 'Forward Pistol Grip'},
        {'maker': 'High Standard','name': 'Ejection Port Cover'},
        {'maker': 'G&P','name': 'フロントサイトポスト'},
        {'maker': 'G&P','name': 'Knight’s Type M4 Flashider (Clockwise)'},
        {'maker': 'G&P','name': 'ナイツタイプQDサプレッサー'},
        {'maker': 'G&P','name': 'Loading Nozzle Set (Negative Pressure)'},
        {'maker': 'Western Arms','name': 'フローティングバルブ（ガスコントロールバルブなど一式含む）'},
        {'maker': '東京マルイ','name': 'LMTタイプリアサイト'},
        {'maker': 'Sightron','name': 'SD-33'},
        {'maker': 'Sightron','name': 'L型ハイマウントII'},
        {'maker': 'Surefire','name': 'E2DL（旧型120ルーメン）'},
        {'maker': 'Surefire','name': 'M78'},
        {'maker': '','name': '官給品チャージングハンドル'},
        {'maker': '','name': 'AN/PEQ-15 ATPIAL Replica'},
        {'maker': '','name': 'US 輪ゴム'},
        {'maker': '','name': ''},
        {'maker': 'IronAirsoft','name': 'Colt M4鍛造アッパーレシーバー'},
        {'maker': 'IronAirsoft','name': 'Gas tube for AR 14.5" barrel カービンレングス用ガスチューブ'},
        {'maker': 'IronAirsoft','name': 'AR crush washer　ARクラッシュワッシャー'},
        {'maker': 'Prime','name': 'スティールボルトキャリア'},
        {'maker': 'Prime','name': 'バレルエクステンション'},
        {'maker': 'Systema','name': 'PTWについてきたフロントサイトポスト'},
        {'maker': 'Systema','name': 'PTWについてきたバレルナットアッセンブリー'},
        {'maker': 'Systema','name': 'PTWについてきたフラッシュハイダー'},
        {'maker': 'G&P','name': 'RASフロント・セット（ロング）についてきたスチールアウターバレル'},
        {'maker': 'G&P','name': 'Loading Nozzle Set (Negative Pressure)'},
        {'maker': 'Western Arms','name': 'フローティングバルブ（ガスコントロールバルブなど一式含む）'},
        {'maker': 'Western Arms','name': 'ブルズアイバレル'},
        {'maker': 'Knight\'s Armament','name': 'RAS'},
        {'maker': 'Knight\'s Armament','name': 'Forward Pistol Grip'},
        {'maker': 'Surefire','name': 'M600 Ultra'},
        {'maker': 'High Standard','name': 'Ejection Port Cover'},
        {'maker': 'Airsoft Common','name': 'WA M4用 ステンレス・ボルトウェイト'},
        {'maker': '東京マルイ','name': '次世代M4についてきたLMTタイプリアサイト'},
        {'maker': '','name': '官給品チャージングハンドル'},
        {'maker': '','name': 'AN/PEQ-15 ATPIAL Replica'},
        {'maker': '','name': 'Aimpoint Comp M4 Replica'},
        {'maker': '','name': 'US 輪ゴム'}
    ]},
    {'id':'PTWMK18MOD1風', 'value': [
        {'maker': 'ORGA','name': 'Flat Hop for PTW'},
        {'maker': 'ORGA','name': 'M110 Spring'},
        {'maker': 'ORGA','name': 'Magnus 6.23PTW BoreBarrel(264mm)'},
        {'maker': 'VFC','name': 'Knight\'s タイプフロントサイト'},
        {'maker': 'VFC','name': 'Knight\'s タイプリアサイト'},
        {'maker': 'VFC','name': 'Knight\'s タイプQDサプレッサー'},
        {'maker': 'VFC','name': 'クレーンストックレプリカ'},
        {'maker': 'FCC','name': 'MAGPUL MOE Grip Replica'},
        {'maker': 'FCC','name': 'G3.0 motor'},
        {'maker': 'Magpul','name': 'ASAP - Ambidextrous Sling Attachment Point'},
        {'maker': 'Colt','name': 'Reciever Extension Nut'},
        {'maker': 'TangoDown','name': 'Battle Grip QD (Surefire)'},
        {'maker': 'Surefire','name': 'M952V'},
        {'maker': 'EOTech','name': 'EXPS3-0'},
        {'maker': 'Knight\'s Armament Airsoft','name': 'Triple-Tap Compensator / Flash Hider(CW / 14mm+)'},
        {'maker': 'Oracom','name': 'MK18RIS2 Replica'},
        {'maker': 'Prime','name': 'NORGON Type Ambi Mag Catch'},
        {'maker': 'GAW','name': 'FRUS-Oリング'},
        {'maker': '','name': '実物バッファーチューブ(アメリカで買ってきてもらったのでメーカー不明)'},
        {'maker': '','name': 'ガスブロック'},
        {'maker': '','name': 'ガスチューブ'},
        {'maker': '','name': 'AN/PEQ-15 ATPIAL Replica'}
    ]},
    {'id':'PTWTW5KPDW', 'value': [
        {'maker': 'Surefire','name': 'M77 Tri-Rail For MP5K, SP89'},
        {'maker': 'EO-Tech','name': '552'},
        {'maker': 'Magpul','name': 'RVG'},
        {'maker': 'VFC','name': 'マウントベース'},
        {'maker': 'MADBULL','name': 'GEMTECH RAPTOR-Ⅱタイプサプレッサー'}
    ]},
    {'id':'LCTAKS-74UKrinkov', 'value': [
        {'maker': 'LCT','name': 'PBS-4'},
        {'maker': 'LCT','name': 'AK Magwell Spacer'},
        {'maker': 'LayLax','name': 'ステンレスハードシリンダー Type A'},
        {'maker': 'LayLax','name': 'エアシールチャンバーパッキンソフト'},
        {'maker': '東京マルイ','name': 'サマリウムコバルトモーター(Sサイズ加工済み)'},
        {'maker': 'Sightron','name': 'SD-30X'},
        {'maker': 'Big-Out','name': 'DTM3'},
        {'maker': 'CORE','name': '18:1強化ギア'},
        {'maker': 'PDI','name': '08インナーバレル'},
        {'maker': 'GAW','name': 'FRUS-Oリング'},
        {'maker': 'ORGA','name': 'AXIS Spring'},
        {'maker': 'ANS Optical','name': 'AKサイドロック QDスコープマウント'}
    ]},
    {'id':'東京マルイハイキャパ51', 'value': [
        {'maker': 'メーカー不明','name': 'キンバースライド'},
        {'maker': 'メーカー不明','name': 'フロントサイト'},
        {'maker': 'Anvil','name': '蓄光サイトセット マルイ MEU 用（トリジコンタイプ）｜ST－01'},
        {'maker': 'Anvil','name': 'Military Type Barrel Bushing(BK)'},
        {'maker': 'Anvil','name': '5in Straight OuterBarrel(SV)'},
        {'maker': 'Anvil','name': 'Kimber SIS Type Grip Safety(BK)'},
        {'maker': 'Anvil','name': 'ChamberCover(.45ACP)(SV)'},
        {'maker': 'Anvil','name': '5in Recoil Spring Guide Set(Straight)(SV)'},
        {'maker': 'Anvil','name': 'Light weight Bleach(Hi-CAPA)(SV)'},
        {'maker': 'タニオコバ','name': 'コバグリップ'},
        {'maker': 'FireFly','name': '甘口なまこ'}
    ]},
    {'id':'STG36KV', 'value': [
        {'maker': 'PDI','name': 'Wホールドチャンバーパッキン'},
        {'maker': 'PDI','name': '05インナーバレル 247mm'},
        {'maker': 'SHS','name': 'デュアルセクターギア（9枚歯）'},
        {'maker': 'SHS','name': 'ハイトルクモーター'},
        {'maker': 'Retro ARMS（だったかな？）','name': '強化ピストン（9枚歯）'},
        {'maker': 'G.A.W.','name': 'DSG用スプリングM95'},
        {'maker': 'Sightron','name': 'MD-30'}
    ]},
    {'id':'東京マルイGlock17', 'value': [
        {'maker': 'Prime','name': 'アルミスライド'},
        {'maker': 'ガーダー','name': 'グリップ'},
        {'maker': 'ガーダー','name': 'トリガーレバー'},
        {'maker': 'Guns Modify','name': 'トリチウムサイト'},
        {'maker': 'Guns Modify','name': 'ゼロハンマー'},
        {'maker': 'PDI','name': 'VSR Wホールドチャンバーパッキン'},
        {'maker': 'SAPH','name': 'ハンマースプリング100%'},
        {'maker': 'FireFly','name': 'ロケットバルブ'},
        {'maker': 'メーカー忘れた','name': '強化ローディングノズル'},
        {'maker': 'メーカー忘れた','name': 'マニュアルセフティをオミットするやつ'}
    ]},
    {'id':'ARESXM2010MSR-338', 'value': [
        {'maker': 'PDI','name': 'ARES製 AW338,MS338用 パルソナイトシリンダーSET [VC]'},
        {'maker': 'PDI','name': '東京マルイ VSR-10用 Wホールドチャンバーパッキン'},
        {'maker': 'PDI','name': 'NEW 不等ピッチスプリング VSR 0.9J'},
        {'maker': 'ARES','name': 'MS338(XM2010)用 スチール製 シリンダーセットピン '}
    ]},
    {'id':'KSCMP9', 'value': [
        {'maker': 'PROTEC','name': 'SSRU'},
    ]},
    {'id':'VFCUMAREXVP9', 'value': [
        {'maker': 'CRUSADER','name': 'VP9 Steel Up-Grade Parts Kit'},
    ]},
];
