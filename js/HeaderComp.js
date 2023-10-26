export default {
    props: {
        active_title: String,
    },
    data() {
        return {
            menu_list: [
                {
                    href: 'toygun.html',
                    title: 'トイガンインプレ',
                    icon: 'list',
                    target: '',
                },
                {
                    href: 'linkpage.html',
                    title: 'リンク集',
                    icon: 'link',
                    target: '',
                },
                {
                    href: 'http://whippoorwill.militaryblog.jp/',
                    title: 'ミリブロ',
                    icon: 'web',
                    target: '_blank',
                },
                {
                    href: 'https://www.youtube.com/channel/UCzW1XRS2c-p5v4w7Nn1bcFQ',
                    title: 'Youtube',
                    icon: 'tv',
                    target: '_blank',
                },
            ],
        };
    },
    template: /*html*/ `
    <header>
      <div class="navbar-fixed">
        <nav class="teal">
          <div class="nav-wrapper">
            <a href="/" class="brand-logo" style="padding-left: 10px">Survivalな理想郷</a>
            <a href="#" data-target="mobile-menu" class="sidenav-trigger"><i class="material-icons">menu</i></a>
            <ul id="nav-mobile" class="right hide-on-med-and-down">
              <li v-for="menu in menu_list" :class="{ active: active_title == menu.title }">
                <a :href="menu.href" :target="menu.target"><i class="material-icons left">{{ menu.icon }}</i>{{ menu.title }}</a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
      <ul class="sidenav" id="mobile-menu">
        <li v-for="menu in menu_list" :key="menu.title"><a :href="menu.href" :target="menu.target">{{ menu.title }}</a></li>
      </ul>
    </header>
    `,
};
