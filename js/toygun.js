import FooterComp from './FooterComp.js';
import HeaderComp from './HeaderComp.js';

window.addEventListener('DOMContentLoaded', () => {
    Vue.createApp({
        data() {
            return {
                active_title: 'トイガンインプレ',
            };
        },
        components: { HeaderComp },
    }).mount('#header');

    Vue.createApp({
        components: { FooterComp },
    }).mount('#footer');

    Vue.createApp({
        data() {
            return {
                elegunList: elegunList,
                gasgunList: gasgunList,
                airList: airList,
                imgClass: 'img-width',
            };
        },
    }).mount('#main-contents');

    M.AutoInit();
});

const gasgunList = [
    {
        id: 'WAM4Prime',
        name: 'WAM4 Prime',
        desc: `WAM4発売当初のファーストロットから長い年月をかけコツコツカスタマイズしていった思い出の品です。
        <br>購入当初のパーツはトリガースプリング以外残っていない気がします。
        <br>もしかしたらトリガースプリングもG&P製になってるかも。
        <br>ちょくちょくいじっているせいで内部パーツが正しいか微妙ですが、おそらくあっているはず。。。
        <br>外装は気分で変えています。`,
        imgs: ['images/wam4prime_1.jpg', 'images/wam4prime_2.jpg'],
        tableValue: [
            { maker: 'Prime', name: 'メタルフレームMUR-1（Noveske刻印）' },
            { maker: 'Prime', name: 'Ambi Selector' },
            { maker: 'Prime', name: 'Rear Receiver QD Swivel Mount (for Systema PTW & WA M4 Series)' },
            { maker: 'Prime', name: 'NORGON Type Ambi Mag Catch' },
            { maker: 'IronAirsoft', name: 'KAC Type Trigger' },
            { maker: 'IronAirsoft', name: 'スティールリアルハンマー' },
            { maker: 'IronAirsoft', name: 'Auto Sear' },
            { maker: 'G&P', name: 'Anti Rotation Link' },
            { maker: 'G&P', name: '6ポジションストックパイプ' },
            { maker: 'G&P', name: '120%Hammer Spring' },
            { maker: 'Magpul', name: 'CTR Carbine Stock' },
            { maker: 'Magpul', name: 'MIAD Grip' },
            { maker: 'SHS', name: 'スチールボルトキャッチ' },
            { maker: 'NeBula', name: 'ファイアリングブロックセット' },
            { maker: 'Colt', name: 'Reciever Extension Nut' },
            { maker: 'Noveske', name: 'Takedown/Pivot Pin SET' },
            { maker: 'Western Arms', name: 'ハードリコイルユニットのバッファーのみ' },
            { maker: 'Western Arms', name: 'リコイルスプリング' },
            { maker: '', name: '' },
            { maker: 'IronAirsoft', name: 'チャージングハンドル' },
            { maker: 'IronAirsoft', name: 'バレルエクステンション' },
            { maker: 'IronAirsoft', name: 'Gas tube for AR 14.5" barrel カービンレングス用ガスチューブ' },
            { maker: 'IronAirsoft', name: 'スチールボルトキャリア（セラコート仕様）' },
            { maker: 'IronAirsoft', name: 'AR crush washer ARクラッシュワッシャー' },
            { maker: 'King Arms', name: 'Front Folding Battle Sight - DE' },
            { maker: 'King Arms', name: 'Rear Folding Battle Sight - DE' },
            { maker: 'G&P', name: 'Loading Nozzle Set (Negative Pressure)' },
            { maker: 'G&P', name: 'WA/M4対応 Nozzle Spring Set' },
            { maker: 'G&P', name: "Knight's Type M4 Flashider (Clockwise)" },
            { maker: 'VFC', name: "Knight's タイプQDサプレッサー" },
            { maker: 'Western Arms', name: 'フローティングバルブ（ガスコントロールバルブなど一式含む）' },
            { maker: 'High Standard', name: 'Ejection Port Cover' },
            { maker: 'Oracom', name: 'MK18RIS2 Replica' },
            { maker: 'EOTech', name: 'EXPS3-0' },
            { maker: 'Magpul', name: 'RVG' },
            { maker: 'Surefire', name: 'M640DF-TN-PRO スカウトライトプロ' },
            { maker: 'Surefire', name: 'DS00-TN 防水スイッチASSY スカウトライト用 タンカラー' },
            { maker: 'Prime', name: 'WA M4用バレルガイド（マルイインナーバレル対応）' },
            { maker: 'Prime', name: 'Mk18 Mod0 Type 10.3inch スチールブルバレル（穴無し）' },
            { maker: 'Laylax', name: 'エアシールチャンバーパッキンソフト' },
            { maker: 'Big-Out', name: 'H-Hop（黒）' },
            { maker: 'ACE研究所', name: '真☆参式滑空銃身247mm' },
            { maker: 'MADBULL', name: 'Daniel Defense Licensed Low Profile GasBlock' },
            { maker: 'WADSN', name: 'TAPSレプリカ' },
            { maker: 'メーカー不明', name: 'AN/PEQ-15 ATPIAL Replica' },
        ],
    },
    {
        id: 'WAM4Iron',
        name: 'WAM4 Iron',
        desc: `IronAirsoftが台頭してきたのでIronパーツてんこ盛りでゼロから作り上げたWAM4です。
        <br>アッパーが手に入ったり、アウターバレルが手に入ったりしたので結果的にアッパーは3種類になりました。
        <br>ロアーはいずれも共通で、ボルトキャリアは2本しかないので適当に入れ替えて使う感じになります。`,
        imgs: ['images/wam4iron_1.jpg', 'images/wam4iron_2.jpg', 'images/wam4iron_3.jpg', 'images/wam4iron_4.jpg', 'images/wam4iron_5.jpg', 'images/wam4iron_6.jpg'],
        tableValue: [
            { maker: 'IronAirsoft', name: 'ロアレシーバー（Coltコマーシャル刻印）' },
            { maker: 'IronAirsoft', name: 'Trigger Guard' },
            { maker: 'IronAirsoft', name: 'Auto Sear' },
            { maker: 'IronAirsoft', name: 'KAC Type Trigger' },
            { maker: 'IronAirsoft', name: 'スティールリアルハンマー' },
            { maker: 'IronAirsoft', name: 'KACタイプ アンビセレクター' },
            { maker: 'Colt', name: 'Receiver Extension, Collapsible' },
            { maker: 'Colt', name: 'Receiver Extension Nut' },
            { maker: 'Western Arms', name: 'ファイアリングブロック（旧型）' },
            { maker: 'SHS', name: 'スチールボルトキャッチ' },
            { maker: 'Magpul', name: 'MIAD Grip Gen1.1' },
            { maker: 'Magpul', name: 'CTR Carbine Stock' },
            { maker: 'Prime', name: 'マガジンキャッチ（レシーバーに付属のもの）' },
            { maker: 'PROTEC', name: 'RSP/N（粗い方を4巻カット）' },
            { maker: 'G&P', name: 'スチール・スリングアダプター' },
            { maker: 'エアボーン', name: 'ハードリコイルバッファー≪ノーマルバージョン≫' },
            { maker: '', name: '' },
            { maker: 'IronAirsoft', name: '鍛造アッパーレシーバー（AAC刻印）' },
            { maker: 'IronAirsoft', name: 'AR crush washer ARクラッシュワッシャー' },
            { maker: 'IronAirsoft', name: 'スチールボルトキャリアAAC刻印' },
            { maker: 'IronAirsoft', name: 'WA M4用 新型ホップアップユニット' },
            { maker: 'PDI', name: '電動ガン 変換アダプター 正→逆' },
            { maker: 'PDI', name: '05インナーバレル 245mm' },
            { maker: 'Prime', name: 'Mk18 Mod0 Type 10.3inch スチールブルバレル（穴無し）' },
            { maker: 'G&P', name: 'Loading Nozzle Set (Negative Pressure)' },
            { maker: 'Western Arms', name: 'バレルエクステンション（純正）' },
            { maker: 'Western Arms', name: 'フローティングバルブ（ガスコントロールバルブなど一式含む）' },
            { maker: 'Big-Out', name: 'H-Hop（白）' },
            { maker: 'Laylax', name: 'エアシールチャンバーパッキンソフト' },
            { maker: 'VFC', name: "Knight's タイプフロントサイト" },
            { maker: 'VFC', name: "Knight's タイプリアサイト" },
            { maker: 'Surefire', name: 'M952V' },
            { maker: 'Daisybee', name: 'サイドレイルマウント' },
            { maker: 'Magpul', name: 'MVG' },
            { maker: 'Airsoft Artisan', name: 'DDタイプ MK18 RISIII M-LOKハンドガード 10.5inch (AEG/MWS/GBB/PTW) BK' },
            { maker: 'PTS', name: 'M-LOK ERS 3スロット ブラック' },
            { maker: 'Trijicon', name: 'MRO' },
            { maker: 'LayLax', name: 'プレッサー SCAR-SD DE' },
            { maker: 'SOMOGEAR', name: 'AN/PEQ-15 LA5C (UHP) ATPIAL フルファンクション モッドボタン付き (赤レーザー / IR レーザー / ホワイトLED ) レプリカ ゼロイン可能 PA66強化樹脂製' },
            { maker: 'SOMOGEAR', name: 'TAPS デュアルスイッチ レプリカ (SUREFIREプラグ/PEQプラグ) 20mmレイル & M-LOK 取り付け可 リモートスイッチ (DE ダークアース)' },
            { maker: '', name: '' },
            { maker: 'IronAirsoft', name: 'Colt M4鍛造アッパーレシーバー' },
            { maker: 'IronAirsoft', name: 'バレルエクステンション' },
            { maker: 'IronAirsoft', name: 'WA M4用 新型ホップアップユニット' },
            { maker: 'IronAirsoft', name: 'Gas tube for AR 14.5" barrel カービンレングス用ガスチューブ' },
            { maker: 'Systema', name: 'バレルナット・アッセンブリー' },
            { maker: 'ACE研究所', name: '真☆参式滑空銃身247mm' },
            { maker: 'Prime', name: 'Mk18 Mod0 Type 10.3inch スチールブルバレル（穴無し）' },
            { maker: 'Laylax', name: 'エアシールチャンバーパッキンソフト' },
            { maker: 'Big-Out', name: 'H-Hop（黒）' },
            { maker: "Knight's Armament", name: 'RAS(上部)' },
            { maker: 'P&S', name: 'RAS(下部)' },
            { maker: 'High Standard', name: 'Ejection Port Cover' },
            { maker: 'G&P', name: 'フロントサイトポスト' },
            { maker: 'G&P', name: 'Knight’s Type M4 Flashider (Clockwise)' },
            { maker: 'G&P', name: 'ナイツタイプQDサプレッサー' },
            { maker: 'G&P', name: 'Loading Nozzle Set (Negative Pressure)' },
            { maker: 'Western Arms', name: 'フローティングバルブ（ガスコントロールバルブなど一式含む）' },
            { maker: '東京マルイ', name: 'LMTタイプリアサイト' },
            { maker: 'Sightron', name: 'SD-33' },
            { maker: 'Sightron', name: 'L型ハイマウントII' },
            { maker: 'Magpul', name: 'RVG' },
            { maker: 'US', name: '官給品チャージングハンドル' },
            { maker: 'メーカー不明', name: 'AN/PEQ-15 ATPIAL Replica' },
            { maker: '', name: '' },
            { maker: 'IronAirsoft', name: 'Colt M4鍛造アッパーレシーバー' },
            { maker: 'IronAirsoft', name: 'Gas tube for AR 14.5" barrel カービンレングス用ガスチューブ' },
            { maker: 'IronAirsoft', name: 'AR crush washer ARクラッシュワッシャー' },
            { maker: 'Prime', name: 'スティールボルトキャリア' },
            { maker: 'Prime', name: 'バレルエクステンション' },
            { maker: 'Systema', name: 'PTWについてきたフロントサイトポスト' },
            { maker: 'Systema', name: 'PTWについてきたバレルナットアッセンブリー' },
            { maker: 'Systema', name: 'PTWについてきたフラッシュハイダー' },
            { maker: 'G&P', name: 'RASフロント・セット（ロング）についてきたスチールアウターバレル' },
            { maker: 'G&P', name: 'Loading Nozzle Set (Negative Pressure)' },
            { maker: 'Western Arms', name: 'フローティングバルブ（ガスコントロールバルブなど一式含む）' },
            { maker: 'IronAirsoft', name: 'WA M4用 新型ホップアップユニット' },
            { maker: "Knight's Armament", name: 'RAS' },
            { maker: 'EOTech', name: '552' },
            { maker: 'High Standard', name: 'Ejection Port Cover' },
            { maker: 'Airsoft Common', name: 'WA M4用 ステンレス・ボルトウェイト' },
            { maker: '東京マルイ', name: '次世代M4についてきたLMTタイプリアサイト' },
            { maker: 'Magpul', name: 'RVG' },
            { maker: 'US', name: '官給品チャージングハンドル' },
            { maker: 'メーカー不明', name: 'AN/PEQ-15 ATPIAL Replica' },
        ],
    },
    {
        id: 'WA_desert_warrior',
        name: 'Western Arms デザートウォリアー',
        desc: `最初期のデザートウォリアーなのでスライドストップノッチプレートが入っていません。
        <br>この頃は2万円ちょいで買えたのにキャリーメルト仕様などは3万越えだったので買い替える気にならず・・・(´･ω･｀)
        <br>たしかチャンバーカバーだけWA純正の金属に変更した気がします。`,
        imgs: ['images/wadesertwarrior_1.JPG', 'images/wadesertwarrior_2.JPG'],
    },
    {
        id: 'WesternArmsTLERLII',
        name: 'Western Arms TLE/RLⅡ',
        desc: `かなり古いTLE/RLⅡなのでSCWバージョン2です。
        <br>可変ホップですが全然ホップがかかりません。0.20gのBB弾を使う分にはちょうどいいかも。
        <br>グリップパネルは変更してあります。`,
        imgs: ['images/watlerl2_1.JPG', 'images/watlerl2_2.JPG'],
        tableValue: [{ maker: 'VZ Grips', name: 'Diamond Back MARSOC G10' }],
    },
    {
        id: 'WA_Para_Oadnance',
        name: 'Western Arms Para Oadnance',
        desc: `元はレスベアカスタムとかだったと思いますが破損したためスライドは変更しています。
        <br>ノンリキッドシステムがあるのとリコイルがシングルガバより鋭くていい感じです。`,
        imgs: ['images/wapara_1.JPG', 'images/wapara_2.JPG'],
    },
    {
        id: 'Marui_Glock17',
        name: '東京マルイ Glock17',
        desc: `スライドが欲しくて本体を買ったやつです。
        <br>なぜか集弾性がいいため狙ったところに弾が飛んでいきます。
        <br>内外ともにいじりまくってますが、主に破損による交換がほとんどです。`,
        imgs: ['images/maruiG17_1.JPG', 'images/maruiG17_2.JPG'],
        tableValue: [
            { maker: 'Prime', name: 'アルミスライド' },
            { maker: 'ガーダー', name: 'グリップ' },
            { maker: 'ガーダー', name: 'トリガーレバー' },
            { maker: 'Guns Modify', name: 'トリチウムサイト' },
            { maker: 'Guns Modify', name: 'ゼロハンマー' },
            { maker: 'PDI', name: 'VSR Wホールドチャンバーパッキン' },
            { maker: 'SAPH', name: 'ハンマースプリング100%' },
            { maker: 'FireFly', name: 'ロケットバルブ' },
            { maker: 'メーカー不明', name: '強化ローディングノズル' },
            { maker: 'メーカー不明', name: 'マニュアルセフティをオミットするやつ' },
        ],
    },
    {
        id: 'Marui_MP9',
        name: '東京マルイ M&P9',
        desc: `ガバと同じ感じでサムセフティがあるので扱いやすいだろうと思い購入しました。
        <br>銃自体は悪くないんですが、やはりマルイ製だけあって動作が渋いです。
        <br>最近のマルイ製は箱出しだと動作が渋く、また冷えにも弱い印象です。
        <br>そのため、すぐ撃てなくなっちゃうので使うのやめました。
        <br>ウエスタンアームズから出ればすぐ買うんですが……`,
        imgs: ['images/marui_mp9_1.JPG', 'images/marui_mp9_2.JPG'],
        tableValue: [{ maker: 'CRUSADER', name: 'VP9 Steel Up-Grade Parts Kit' }],
    },
    {
        id: 'Marui_samurai_edge',
        name: '東京マルイ サムライエッジ ジルモデル',
        desc: `可変ホップになって登場した最初のサムライエッジです。
        <br>限定である必要はなかったのですが、せっかくなので買ってみました。
        <br>ところどころチープすぎて限定品というイメージは皆無です。アウターバレル替えたい。`,
        imgs: ['images/maruiSamuraiEdge_1.JPG', 'images/maruiSamuraiEdge_2.JPG'],
    },
    {
        id: 'KSC_USP45',
        name: 'KSC USP45',
        desc: `システムセブンが出る前のUSP45です。
        <br>そのため、システムセブンになってからのUSP45との互換性はありません。
        <br>マガジンがそもそも違うので、この銃はもう使用することはないでしょう……`,
        imgs: ['images/ksc_hk45_1.JPG', 'images/ksc_hk45_2.JPG'],
    },
    {
        id: 'Marui_Hi-CAPA51',
        name: '東京マルイ ハイキャパ5.1',
        desc: `冬でも撃てるようにしたくていろいろいじりました。
        <br>キンバーのスライドを探してようやく入手するも、寸法が悪すぎてだいぶ苦労した挙句、あんまり作動が良くないので結局冷えには強くない感じです・・・
        <br>Anvilパーツてんこ盛りでだいぶお金かかってますが、WAガバの方が撃ってて楽しいのであんまり使う気にはなりません(´･ω･｀)`,
        imgs: ['images/marui_hicapa_1.JPG', 'images/marui_hicapa_2.JPG'],
        tableValue: [
            { maker: 'メーカー不明', name: 'キンバースライド' },
            { maker: 'メーカー不明', name: 'フロントサイト' },
            { maker: 'Anvil', name: '蓄光サイトセット マルイ MEU 用（トリジコンタイプ）｜ST－01' },
            { maker: 'Anvil', name: 'Military Type Barrel Bushing(BK)' },
            { maker: 'Anvil', name: '5in Straight OuterBarrel(SV)' },
            { maker: 'Anvil', name: 'Kimber SIS Type Grip Safety(BK)' },
            { maker: 'Anvil', name: 'ChamberCover(.45ACP)(SV)' },
            { maker: 'Anvil', name: '5in Recoil Spring Guide Set(Straight)(SV)' },
            { maker: 'Anvil', name: 'Light weight Bleach(Hi-CAPA)(SV)' },
            { maker: 'タニオコバ', name: 'コバグリップ' },
            { maker: 'FireFly', name: '甘口なまこ' },
        ],
    },
];

const elegunList = [
    {
        id: 'PTWMK18MOD1',
        name: 'PTW MK18MOD1風',
        desc: `冬はWAM4には辛いので、トレポン買っちゃいました。
        <br>使い慣れたMK18MOD1の形にしました。WAM4とほぼ同じセットアップです。
        <br>純正のバッファーチューブが折れたので実物にしましたがCTRがつかなくなったのでVFCのクレーンストックレプリカをつけることにしました。
        <br>ただ、現在は故障のためパーツをはく奪されています。`,
        imgs: ['images/ptwmk18mod1_1.JPG', 'images/ptwmk18mod1_2.JPG'],
        tableValue: [
            { maker: 'ORGA', name: 'Flat Hop for PTW' },
            { maker: 'ORGA', name: 'M110 Spring' },
            { maker: 'ORGA', name: 'Magnus 6.23PTW BoreBarrel(264mm)' },
            { maker: 'VFC', name: "Knight's タイプフロントサイト" },
            { maker: 'VFC', name: "Knight's タイプリアサイト" },
            { maker: 'VFC', name: "Knight's タイプQDサプレッサー" },
            { maker: 'VFC', name: 'クレーンストックレプリカ' },
            { maker: 'FCC', name: 'MAGPUL MOE Grip Replica' },
            { maker: 'FCC', name: 'G3.0 motor' },
            { maker: 'Magpul', name: 'ASAP - Ambidextrous Sling Attachment Point' },
            { maker: 'Colt', name: 'Reciever Extension Nut' },
            { maker: 'TangoDown', name: 'Battle Grip QD (Surefire)' },
            { maker: 'Surefire', name: 'M952V' },
            { maker: 'EOTech', name: 'EXPS3-0' },
            { maker: "Knight's Armament Airsoft", name: 'Triple-Tap Compensator / Flash Hider(CW / 14mm+)' },
            { maker: 'Oracom', name: 'MK18RIS2 Replica' },
            { maker: 'Prime', name: 'NORGON Type Ambi Mag Catch' },
            { maker: 'GAW', name: 'FRUS-Oリング' },
            { maker: 'メーカー不明', name: '実物バッファーチューブ(アメリカで買ってきてもらったのでメーカー不明)' },
            { maker: 'メーカー不明', name: 'ガスブロック' },
            { maker: 'メーカー不明', name: 'ガスチューブ' },
            { maker: 'メーカー不明', name: 'AN/PEQ-15 ATPIAL Replica' },
        ],
    },
    {
        id: 'PTWTW5KPDW',
        name: 'PTW TW5K PDW',
        desc: `ついに念願のTW5K PDWを購入しました。
        <br>MP5の中でPDWが一番好きなので、いつかトレポンで欲しいなと思っていました。
        <br>納期が長かったので、その間にパーツは購入しておき納品された後すぐ付け替えました。
        <br>552はWAM4に移植したので、今はMD-30をつけていたと思います`,
        imgs: ['images/TW5KPDW_1.JPG', 'images/TW5KPDW_2.JPG'],
        tableValue: [
            { maker: 'Surefire', name: 'M77 Tri-Rail For MP5K, SP89' },
            { maker: 'EOTech', name: '552' },
            { maker: 'Magpul', name: 'RVG' },
            { maker: 'VFC', name: 'マウントベース' },
            { maker: 'MADBULL', name: 'GEMTECH RAPTOR-Ⅱタイプサプレッサー' },
        ],
    },
    {
        id: 'LCTAKS-74UKrinkov',
        name: 'LCT AKS-74U Krinkov',
        desc: `DTMを入れるべく購入したAKです。雰囲気が素晴らしい。
        <br>パーツ構成は覚えている範囲で記載しています。ピストン回りが覚えてない……`,
        imgs: ['images/lctaks74u_1.JPG', 'images/lctaks74u_2.JPG'],
        tableValue: [
            { maker: 'LCT', name: 'PBS-4' },
            { maker: 'LCT', name: 'AK Magwell Spacer' },
            { maker: 'LayLax', name: 'ステンレスハードシリンダー Type A' },
            { maker: 'LayLax', name: 'エアシールチャンバーパッキンソフト' },
            { maker: '東京マルイ', name: 'サマリウムコバルトモーター(Sサイズ加工済み)' },
            { maker: 'Sightron', name: 'SD-30X' },
            { maker: 'Big-Out', name: 'DTM3' },
            { maker: 'CORE', name: '18:1強化ギア' },
            { maker: 'PDI', name: '08インナーバレル' },
            { maker: 'GAW', name: 'FRUS-Oリング' },
            { maker: 'ORGA', name: 'AXIS Spring' },
            { maker: 'ANS Optical', name: 'AKサイドロック QDスコープマウント' },
        ],
    },
    {
        id: 'STG36KV',
        name: 'S&T G36KV',
        desc: `スペイン装備のために購入しました。
        <br>SHSのデュアルセクターギア（DSG）を入れればレスポンスよくなると思いきや、そんなに変わりませんでした・・・
        <br>そこでSHSのハイトルクモーターを入れたら、すごく改善しました(ﾟ∀ﾟ)`,
        imgs: ['images/stg36kv_1.JPG', 'images/stg36kv_2.JPG'],
        tableValue: [
            { maker: 'PDI', name: 'Wホールドチャンバーパッキン' },
            { maker: 'PDI', name: '05インナーバレル 247mm' },
            { maker: 'SHS', name: 'デュアルセクターギア（9枚歯）' },
            { maker: 'SHS', name: 'ハイトルクモーター' },
            { maker: 'Retro ARMS（だったかな？）', name: '強化ピストン（9枚歯）' },
            { maker: 'G.A.W.', name: 'DSG用スプリングM95' },
            { maker: 'Sightron', name: 'MD-30' },
        ],
    },
    {
        id: 'BlackWaterM4',
        name: 'BW M4',
        desc: `だいぶ昔に買ったブラックウォーターUSAのメタルフレームを使って組んだ従来電動ガンのM4です。
        <br>バッテリーコネクターはXT30U仕様になっています。
        <br>その他、内部構成はかなりうろ覚えです。`,
        imgs: ['images/bw_m4_1.jpg', 'images/bw_m4_2.jpg'],
        tableValue: [
            { maker: 'PDI', name: 'Wホールドチャンバーパッキン' },
            { maker: 'PDI', name: '05インナーバレル 275mm' },
            { maker: 'Prowin', name: 'チャンバー' },
            { maker: 'CORE', name: '16:1 ハイスピードギア' },
            { maker: 'ORGA', name: 'マグナスシリンダー&ピストンヘッド' },
            { maker: 'ORGA', name: '6mm軸受け 従来電動ガン用' },
            { maker: 'ZC LEOPARD', name: 'メタル14歯 ピストン' },
            { maker: 'GAW', name: '電動ガン用AOEアジャストスペーサー' },
            { maker: 'LayLax', name: 'EGスプリングガイド Ver.2用（強化メカボに合わせて加工）' },
            { maker: 'ハリケーン', name: '強化メカボ（Ver.2）' },
            { maker: 'SPARK', name: '電動ガン用 スプリング M110' },
            { maker: 'Systema', name: 'カットオフレバー' },
            { maker: 'LinsyRC', name: 'XT30U' },
            { maker: '東京マルイ', name: 'EG30000HC' },
            { maker: 'UFC', name: 'M93Aストックレプリカ' },
            { maker: 'ノーブランド', name: 'MBUSレプリカ' },
            { maker: 'SLONG AIRSOFT', name: '26mm アウターバレル変換 14mm正ネジ → 14mm逆ネジ ブラック' },
            { maker: 'G&P', name: 'MK18 Mod 0 スチール アウターバレル 10.5インチ GP756' },
            { maker: 'ハリケーン', name: 'ガスチューブ' },
            { maker: 'ノーブランド', name: 'ガスブロック（Noveske刻印あり）' },
            { maker: 'G&P', name: 'Norgonタイプアンビマグキャッチ' },
            { maker: 'G&P', name: 'メタルフレーム（ブラックウォーター刻印）' },
            { maker: 'PTS', name: 'EPG エンハンスド ポリマーグリップ AEG PT121450307' },
            { maker: 'Magpul', name: 'MVG' },
            { maker: 'Sightron', name: 'SD-33XX' },
            { maker: 'Airsoft Artisan', name: 'DDタイプ MK18 RISIII M-LOKハンドガード 10.5inch (AEG/MWS/GBB/PTW) BK' },
            { maker: 'PTS', name: 'M-LOK ERS 3スロット ブラック' },
            { maker: 'ACETECH', name: 'スーパーシャイン フルオートトレーサー AT1000' },
            { maker: 'Surefire', name: 'M600 Ultra（500ルーメンの方）' },
            { maker: 'element airsoft', name: 'PEQ-15A DBAL-A2 LEDライト 3.5mmプラグリーモースイッチ仕様 フルメタル BK' },
            { maker: 'element airsoft', name: 'TAPSレプリカ DE' },
            { maker: 'Daisybee', name: 'サイドレイルマウント' },
        ],
    },
];

const airList = [
    {
        id: 'ARESXM2010MSR-338',
        name: 'ARES XM2010(MSR-338)',
        desc: `ちゃんと撃てるように色々パーツを変えました。
        <br>塗装もお気に入りの塗装を施してあります。
        <br>ただ、この後サバゲーで使って汚れてしまいましたが・・・(´･ω･｀)
        <br>部屋が汚いのは気にしないでください(^_^;)`,
        imgs: ['images/msr338_1.JPG', 'images/msr338_2.JPG', 'images/msr338_3.JPG'],
        tableValue: [
            { maker: 'PDI', name: 'ARES製 AW338,MS338用 パルソナイトシリンダーSET [VC]' },
            { maker: 'PDI', name: '東京マルイ VSR-10用 Wホールドチャンバーパッキン' },
            { maker: 'PDI', name: 'NEW 不等ピッチスプリング VSR 0.9J' },
            { maker: 'ARES', name: 'MS338(XM2010)用 スチール製 シリンダーセットピン ' },
        ],
    },
];
