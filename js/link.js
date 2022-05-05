window.addEventListener('DOMContentLoaded', () => {
    createLinkItems(oosakaList, 'oosakaList');
    createLinkItems(othersList, 'othersList');
    createLinkItems(makerList, 'makerList');
    createLinkItems(shopList, 'shopList');
    createLinkItems(chibaList, 'chibaList');
    createLinkItems(tokyoList, 'tokyoList');
    createLinkItems(kanagawaList, 'kanagawaList');
    createLinkItems(saitamaList, 'saitamaList');
    createLinkItems(yamanashiList, 'yamanashiList');
    createLinkItems(gifuList, 'gifuList');
    createLinkItems(ibarakiList, 'ibarakiList');
});

/**
 *
 * @param {Array} list
 * @param {string} id
 */
function createLinkItems(list, id) {
    let html = '';

    for (const data of list) {
        html += `<div class="col xl3"><a href="${data.url}" class="collection-item">${data.name}</a></div>`;
    }
    document.getElementById(id).innerHTML = html;
}

const oosakaList = [
    {'url': 'http://osaka-greencanyon.com/', 'name': 'CQB FIELD BUDDY'},
    {'url': 'http://www.cqb-buddy.com/', 'name': 'グリーンキャニオン'},
];
const othersList = [
    {'url': 'http://www.militaryblog.jp/', 'name': 'ミリタリーブログ'},
    {'url': 'http://www.access-overseas.com/', 'name': 'アクセスオーバーシーズ'},
    {'url': 'http://vtg.jp/', 'name': 'Volk Tactical Gear'},
    {'url': 'http://gungineer.matrix.jp/', 'name': 'ガンジニア'},
    {'url': 'http://world.guns.ru/assault-e.html', 'name': 'Modern Firearms'},
    {'url': 'http://www.tiger93.com/sheriff/', 'name': '株式会社タイガー93(シェリフ)'},
    {'url': 'http://www.web-command.com/', 'name': 'WEB COMMAND'},
    {'url': 'http://toygun.jp/', 'name': 'トイガンJP'},
    {'url': 'http://www.heckler-koch.com/en/welcome.html', 'name': 'HK'},
    {'url': 'http://www.hk-usa.com/index.asp', 'name': 'HK(USA版)'},
    {'url': 'http://www.magpul.com/', 'name': 'MAGPUL INDUSTRIES'},
    {'url': 'http://troyind.com/index.htm', 'name': 'TROY INDUSTRIES'},
    {'url': 'http://www.noveske.com/', 'name': 'Noveske'},
    {'url': 'http://www.fnherstal.com/', 'name': 'FN'},
    {'url': 'http://www.fnmfg.com/', 'name': 'FNマニュファクチャリングLLC'},
    {'url': 'http://www.eagleindustries.com/', 'name': 'EAGLE'},
    {'url': 'http://www.blackhawk.com/', 'name': 'BLACKHAWK'},
    {'url': 'http://www.sightron.co.jp/', 'name': 'サイトロンジャパン'},
    {'url': 'http://www.511tactical.com/Shop', 'name': '5.11 Tactical'},
    {'url': 'http://www.oakley.com/', 'name': 'OAKLEY'},
    {'url': 'http://wileyx.jp/', 'name': 'Wiley X'},
    {'url': 'http://surefire.jp/', 'name': 'sure fire'},
];
const makerList = [
    {'url': 'http://www.systema-engineering.com/', 'name': 'SYSTEMA'},
    {'url': 'http://www.tokyo-marui.co.jp/', 'name': '東京マルイ'},
    {'url': 'http://www.ksc-guns.co.jp/', 'name': 'KSC'},
    {'url': 'http://www.wa-gunnet.co.jp/', 'name': 'ウエスタンアームズ'},
    {'url': 'http://top-airsoft.co.jp/', 'name': 'TOP'},
    {'url': 'http://www.s2s.co.jp/', 'name': 'SⅡS'},
    {'url': 'http://maruzen-aps.com/', 'name': 'マルゼン'},
    {'url': 'http://www.marushin-kk.co.jp/', 'name': 'マルシン工業'},
    {'url': 'http://www.tanaka-works.com/', 'name': 'タナカワークス'},
    {'url': 'http://www.taniokoba.co.jp/', 'name': 'タニオコバ'},
    {'url': 'http://www.gb-tech.com.tw/', 'name': 'GB-Tech(VFC)'},
    {'url': 'http://www.caw.co.jp/', 'name': 'CAW'},
    {'url': 'http://www.gp-web.jp/', 'name': 'G&amp;P'},
    {'url': 'http://www.starairsoft.com/', 'name': 'STAR'},
    {'url': 'http://www.guay2.com/', 'name': 'G&amp;Gアーマメント'},
    {'url': 'http://www.kingarms.com/home.asp', 'name': 'KingArms'},
    {'url': 'http://www.classicarmy.com/', 'name': 'ClassicArmy'},
    {'url': 'http://ktw-co.gonna.jp/', 'name': 'KTW'},
    {'url': 'http://www.hartford.co.jp/', 'name': 'ハートフォード'},
    {'url': 'http://www.crown-model.co.jp/', 'name': 'クラウンモデル'},
    {'url': 'http://www.gun-freedom-art.com/', 'name': 'フリーダム・アート'},
    {'url': 'http://www.laylax.com/', 'name': 'ライラクス'},
    {'url': 'http://www.intrudershop.com.tw/', 'name': 'ガーダー'},
    {'url': 'https://www.ratech.com.tw/', 'name': 'RA-TECH'},
    {'url': 'http://www.novelarms.co.jp/', 'name': 'ノーベルアームズ'},
    {'url': 'http://www.ufc-web.com/', 'name': 'UFC'},
    {'url': 'http://www.enten.co.jp/anvil.html', 'name': 'Anvil'},
    {'url': 'http://www.prime-airsoft.com/', 'name': 'Prime'},
    {'url': 'http://www.protec-ltd.com/', 'name': 'プロテック'},
    {'url': 'http://www.lctairsoft.com/', 'name': 'LCT'},
    {'url': 'http://ghkairsoft.com/', 'name': 'GHK'},
    {'url': 'http://smokeys.jp/gf/', 'name': 'スモーキーズガンファクトリー'},
    {'url': 'http://www.caromshot.com/', 'name': 'キャロムショット'},
    {'url': 'http://www.mojji.com/index.html', 'name': 'サンケン'},
    {'url': 'http://www.jb-unicorn.com/', 'name': 'JBUnicorn'},
    {'url': 'http://ace-labo.com/', 'name': 'ACE研究所'},
    {'url': 'http://www.madbull.com/catalog/', 'name': 'MADBULL'},
    {'url': 'http://www.east-a-o.co.jp/', 'name': 'イーストA'},
    {'url': 'http://www.mac-japan.co.jp/', 'name': 'マックジャパン'},
    {'url': 'http://www.eaglemodel.com/', 'name': 'イーグルフォース'},
    {'url': 'http://www.genesis-web.jp/', 'name': 'ジェネシス'},
    {'url': 'http://flyye.com/', 'name': 'FlyyeIndustries'},
];
const shopList = [
    {'url': 'http://www.magnumshop-mugen.co.jp/','name': 'マグナムショップむげん'},
    {'url': 'http://la-gunshop.com/','name': 'LAホビーショップ'},
    {'url': 'http://www.first-jp.com/','name': 'ガンショップFIRST'},
    {'url': 'http://www.phantom-web.com/','name': 'ミリタリーサープラスファントム'},
    {'url': 'http://www.nakatashoten.com/','name': '中田商店'},
    {'url': 'http://www.gunblue.jp/','name': 'GunBlue'},
    {'url': 'http://www.captaintoms.co.jp/index.php','name': 'キャプテントム'},
    {'url': 'http://www.aggressor-group.com/','name': 'アグレッサーグループ'},
    {'url': 'http://www.max-jp.com/4degrees/index.html','name': '4degreesTactical'},
    {'url': 'http://www.gunshop-tactics2.com/','name': 'ガンショップタクティクス'},
    {'url': 'http://echigoya-tokyo.jp/','name': 'エチゴヤ'},
    {'url': 'http://www.m514.com/','name': 'ガンショップモデルン'},
    {'url': 'http://gunshop-fox.jp/','name': 'ガンショップFOX'},
    {'url': 'http://www.super-rc.co.jp/gun/index.html','name': 'スーパーラジコン'},
    {'url': 'http://www.oceancustomtactical.com/','name': 'オーシャンカスタムタクティカル'},
    {'url': 'http://repmart.jp/','name': 'レプマート'},
    {'url': 'http://happoya.jp/','name': '八宝屋'},
    {'url': 'http://www.samurai-gear.jp/','name': 'SAMURAI'},
    {'url': 'http://chameleon-jpn.com/','name': 'カメレオン'},
    {'url': 'http://www.filterweb.in/','name': 'Filter'},
    {'url': 'http://optics-dealer.com/','name': 'OpticsDealer'},
    {'url': 'http://tamurasoubi.co.jp/','name': '田村装備開発'},
    {'url': 'http://tokyo-move.com/','name': 'MOVE'},
    {'url': 'http://www.airgunmarket.jp/','name': 'エアガン市場'},
    {'url': 'http://www.armsfactory.jp/','name': 'アームズファクトリー'},
    {'url': 'http://www.mil-freaks.com/','name': 'MIL-FREAKS'},
    {'url': 'http://www.militarytokyo.com/','name': 'MILITARYTOKYO'},
    {'url': 'http://www.41military.com/','name': '41MILITARY'},
    {'url': 'http://foxarmament.uboat.jp/foxarmament/','name': 'FOXARMAMENT'},
    {'url': 'http://airsoft97.com/','name': 'AIRSOFT97'},
    {'url': 'http://shop.flat-airsoft.com/','name': 'HobbyBox'},
    {'url': 'http://strikearms.jp/','name': 'ストライクアームズ'},
    {'url': 'http://www.ranger.ne.jp/','name': 'レンジャー'},
    {'url': 'http://dress1105.shop-pro.jp/','name': 'Dress&amp;Gun'},
    {'url': 'http://www.okimiri.com/','name': '沖縄ミリカジ'},
    {'url': 'http://www.gunmall.jp/index.html','name': 'GUNMALLTOKYO'},
    {'url': 'http://www.frontier1.jp/','name': 'フロンティア'},
    {'url': 'http://www.airborne-shop.com/','name': 'エアボーン'},
    {'url': 'http://www.mokei-paddock.jp/','name': 'モケイパドック'},
    {'url': 'http://www.willy-peet.com/index.php','name': 'ウィリーピート'},
    {'url': 'http://www.fortress-web.com/','name': 'フォートレス'},
    {'url': 'http://www.x-fire.org/','name': 'クロスファイア'},
    {'url': 'http://www.angs.co.jp/','name': 'ガンショップアングス'},
    {'url': 'http://militarygoods-jp.com/catalog/default.php','name': 'ミリタリーグッズ.com'},
    {'url': 'http://www.firstleaf-jp.com/','name': 'ファーストリーフ'},
    {'url': 'http://www.lem-shop.com/','name': 'LEMサプライ'},
    {'url': 'http://africaya.ocnk.net/','name': 'Tacmartあふりか屋'},
    {'url': 'http://www.d4.dion.ne.jp/~fsaitoh/','name': 'P.X.SAITOH'},
    {'url': 'http://www.gun-shop.jp/','name': 'SYSTEM'},
    {'url': 'http://www.hs-tamtam.co.jp/','name': 'TamTam'},
    {'url': 'http://www.newmgc.com/index.html','name': 'MGC'},
    {'url': 'http://b-boxgunsite.com/','name': 'B-Box'},
    {'url': 'http://www.fourstar911.com/','name': 'フォースター'},
    {'url': 'http://www.rakuten.co.jp/mokeiyabigman/','name': 'BIGMAN'},
    {'url': 'http://www.gun-noda-ya.com/','name': 'NODA-YA'},
    {'url': 'http://www2t.biglobe.ne.jp/~ohige/index.htm','name': 'トイガンショップクラブミッシェル'},
    {'url': 'http://sfbc.jp/','name': 'SFBC'},
    {'url': 'http://blackburn.jp/','name': 'ブラックバーン'},
    {'url': 'http://vortex.vg/','name': 'Vortex'},
    {'url': 'http://www.rakuten.co.jp/risk/index.html','name': 'リスクコントロール'},
    {'url': 'http://www.fast-mos.com/index.html','name': 'ファスナーズ'},
    {'url': 'http://www.indi-nagaoka.co.jp/ecc2/','name': 'ガンショップインディ'},
    {'url': 'http://www.enten.co.jp/','name': 'エンテン株式会社'},
    {'url': 'http://www.tac-element.com/','name': 'TACELEMENT'},
    {'url': 'http://www.revolver.shop-site.jp/index.html','name': 'Revolver'},
    {'url': 'http://www.back-up-trading.com/Home200B.htm','name': 'バックアップトレーディング'},
    {'url': 'http://www.bishoen-hobby.ne.jp/','name': '美章園ホビー'},
    {'url': 'http://www.world-musen.com/','name': 'ワールド無線'},
    {'url': 'http://www.akaricenter.com/index.htm','name': 'アカリセンター'},
    {'url': 'http://www.holkin.com/','name': 'HOLKIN'},
    {'url': 'http://tokyocarol.shop-pro.jp/','name': '東京キャロル'},
    {'url': 'http://www.ihagun.net/','name': 'いは軍払い下げ品店'},
    {'url': 'http://www.big-out.jp/','name': 'Big-Out'},
    {'url': 'http://www.burst-head.com/','name': 'バーストヘッド'},
    {'url': 'http://www.be-max.co.jp/','name': 'Be-MAX'},
    {'url': 'http://www.jokeshop.co.jp/','name': 'jokeshop'},
    {'url': 'http://item-g.web-shop.jp/','name': 'ITEM-G'},
    {'url': 'http://www.teduka.co.jp/','name': 'ホビーショップてづか'},
    {'url': 'http://sewing.aska-corps.com/','name': '明日香縫製雑貨店'},
    {'url': 'http://www.e-spang.net/index.html','name': 'イースパング'},
    {'url': 'http://www.tigerland.co.jp/','name': 'タイガーランド'},
    {'url': 'http://camp-jp.com/','name': 'ミリタリーショップCAMP'},
    {'url': 'http://lazycat.jp/','name': 'LAZYCAT'},
    {'url': 'http://yamashita.ocnk.net/','name': '山下刃物店'},
    {'url': 'http://www.65s.info/','name': '65S(ロゴス)'},
    {'url': 'http://www.pravda.jp/','name': 'プラウダ'},
    {'url': 'http://nangoku100katen.com/index.php?main_page=index','name': '南国百貨店'},
    {'url': 'http://pk-outlet.com/','name': 'PKウェーブ'},
    {'url': 'http://www.gunshop-km.com/','name': 'MODELSHOPKM'},
    {'url': 'http://www.tanba-rocky.com/','name': '丹波ロッキー'},
    {'url': 'http://www.ikariya.com/','name': 'イカリヤ'},
    {'url': 'http://www.hobby-mart.com/','name': 'ホビーマート'},
    {'url': 'http://www.ecompany.co.jp/','name': 'イー・カンパニー'},
    {'url': 'http://www.seabeesjp.com/','name': 'シービーズ'},
    {'url': 'http://www2.odn.ne.jp/gma/','name': 'GoodMorningAmerica'},
    {'url': 'http://www.mash-japan.co.jp/','name': 'MASH'},
    {'url': 'http://www.web-px.jp/','name': 'Web-PX'},
    {'url': 'http://www.garage-ogawa.com/','name': 'ガレージオガワドットコム'},
    {'url': 'http://www.combatcinema.co.kr/jp/main/index.php','name': 'コンバットミリタリーショップ'},
    {'url': 'http://www.jp-military.com/','name': '前川軍装美術店'},
    {'url': 'http://www.d1.dion.ne.jp/~adolf/','name': '第三帝国堂'},
    {'url': 'http://store.shopping.yahoo.co.jp/aagear/index.html','name': 'AdvancedAssaultGear'},
    {'url': 'http://gunsrocxx.com/','name': 'ガンズロックス'},
    {'url': 'http://miu-airsoft.com/','name': 'M.I.U AIRSOFT'},
    {'url': 'http://www.assault-shop.com/','name': 'GUN SHOP アサルト'},
];
const chibaList = [
    {'url': 'http://splash-bb.com/splashmain/', 'name': 'SPLASH'},
    {'url': 'http://www.sky.sannet.ne.jp/pintail/bb-jungle/bbjungle.htm', 'name': 'BBJUNGLE'},
    {'url': 'http://forest-union.jp/', 'name': 'フォレストユニオン'},
    {'url': 'http://desert-union.jp/', 'name': 'デザートユニオン'},
    {'url': 'http://desert-union.jp/union-base', 'name': 'ユニオンベース'},
    {'url': 'http://met-union.com/', 'name': 'METユニオン'},
    {'url': 'http://forest-union.jp/u-box', 'name': 'U-BOX'},
    {'url': 'http://head-shot.jp/', 'name': 'HEADSHOT'},
    {'url': 'http://www.battle-union.jp/', 'name': 'バトルシティ'},
    {'url': 'http://www.cimax.jp/', 'name': 'CIMAX'},
    {'url': 'http://www.seals.jp/home.html', 'name': 'SEALs'},
    {'url': 'http://savas-m2ts.net/', 'name': 'SAVAS'},
    {'url': 'http://www.village-one.org/', 'name': 'ビレッジワン'},
    {'url': 'http://whitebase-sgf.com/', 'name': 'ホワイトベース'},
    {'url': 'http://beam-sg.co.jp/', 'name': 'beam'},
    {'url': 'http://infini-sg.jp/wordpress/', 'name': 'INFINI'},
    {'url': 'http://survival-raid.com/', 'name': 'RAID'},
    {'url': 'http://www.sgf-vision.jp/', 'name': 'VISION'},
    {'url': 'http://www.no9-co.jp/', 'name': 'No.9'},
    {'url': 'http://ck-f.jp/', 'name': 'CKF'},
    {'url': 'http://www.ash-rockfield.com/', 'name': 'アッシュロックフィールド'},
];
const tokyoList = [
    {'url': 'http://ibf.kowlooncity0801.com/', 'name': '九龍迷宮街区'},
    {'url': 'http://svg-ops.jp/', 'name': 'OPS'},
];
const kanagawaList = [
    {'url': 'http://www.sagamiko-resort.jp/', 'name': 'プレジャーフォレスト'},
    {'url': 'http://minmori.com/', 'name': 'みんなの森'},
];
const saitamaList = [
    {'url': 'http://www.desertstorm-kawagoe.com/', 'name': 'デザートストーム川越'},
    {'url': 'http://www.code7.jp/', 'name': 'Code7'},
    {'url': 'http://sister-bf.com/', 'name': 'SISTER'},
];
const yamanashiList = [
    {'url': 'http://blog.livedoor.jp/agito_ktec/', 'name': 'AGITO'},
];
const gifuList = [
    {'url': 'http://hqt.jp/', 'name': 'HQ東海'},
];
const ibarakiList = [
    {'url': 'http://www.be-max.co.jp/grandslam/', 'name': 'グランドスラム'},
    {'url': 'http://www.airgun-sniper.com/', 'name': 'スナイパー'},
    {'url': 'http://www.tokku-switch.jp/', 'name': '特殊作戦群区'},
];
