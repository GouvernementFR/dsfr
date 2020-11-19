import { addClass, removeClass } from '@gouvfr/utilities/src/scripts/manipulation/classes';

let count = 0;

class Header {
  constructor (header) {
    this.header = header || document.querySelector('.${prefix}-header');
    this.numId = count;
    count++;

    this.init();
  }

  init () {
    this.popins = [];

    this.tools = this.header.querySelector('.${prefix}-header__tools');

    this.searchBar = this.header.querySelector('.${prefix}-header__tools .${prefix}-search-bar');

    const navbar = this.header.querySelector('.${prefix}-header__navbar');

    this.nav = this.header.querySelector('.${prefix}-nav');

    this.navItems = this.header.querySelectorAll('.${prefix}-nav .${prefix}-nav__item') || [];

    const append = this.numId === 0 ? '' : '-' + this.numId;

    if (this.searchBar) {
      this.popins.push(new HeaderPopin(
        'header-tools-popin' + append,
        'search-line',
        'Rechercher',
        this.tools,
        navbar
      ));
    }

    if (this.navItems.length > 0) {
      this.popins.push(new HeaderPopin(
        'header-nav-popin' + append,
        'menu-fill',
        'Ouvrir le menu',
        this.nav,
        navbar
      ));
    }

    this.shortcuts = this.header.querySelector('.${prefix}-header__tools .${prefix}-shortcuts');
    this.navList = this.header.querySelector('.${prefix}-nav .${prefix}-nav__list');

    this.changing = this.change.bind(this);

    window.addEventListener('resize', this.changing);
    window.addEventListener('orientationchange', this.changing);
    this.change();
  }

  change () {
    this.isMedium = window.matchMedia('(min-width: 48em)').matches;

    for (let i = 0; i < this.popins.length; i++) this.popins[i].change(this.isMedium);

    if (this.shortcuts !== null) {
      if (this.isMedium) {
        if (this.searchBar !== null) this.tools.insertBefore(this.shortcuts, this.searchBar);
        else this.tools.appendChild(this.shortcuts);
      } else {
        this.nav.insertBefore(this.shortcuts, this.navList);
      }
    }
  }
}

class HeaderPopin {
  constructor (id, icon, title, popin, navbar) {
    this.id = id;
    this.button = this.create(icon, title);
    this.popin = popin;
    this.navbar = navbar;

    this.button.addEventListener('click', this.toggle.bind(this));

    this.close = this.create('close-line', 'Fermer', true, 'sm');
    this.close.addEventListener('click', this.exit.bind(this));

    this.isExpanded = false;
  }

  create (icon, title, hasLabel, size) {
    const button = document.createElement('button');
    button.setAttribute('class', '${prefix}-btn ${prefix}-fi-' + icon + ' ${prefix}-btn--icon' + (hasLabel ? '-right' : '') + ' ' + (size !== undefined ? '${prefix}-btn--' + size : ''));
    button.setAttribute('title', title);
    button.setAttribute('aria-controls', this.id);
    button.innerHTML = title;

    return button;
  }

  change (isMedium) {
    if (isMedium) {
      if (this.navbar.contains(this.button)) this.navbar.removeChild(this.button);
      if (this.popin.contains(this.close)) this.popin.removeChild(this.close);
      this.popin.removeAttribute('id');
      removeClass(this.popin, '${prefix}-header__popin');
      removeClass(this.popin, '${prefix}-header__popin--expanded');
    } else {
      if (!this.navbar.contains(this.button)) this.navbar.appendChild(this.button);
      if (!this.popin.contains(this.close)) this.popin.appendChild(this.close);

      this.popin.setAttribute('id', this.id);
      addClass(this.popin, '${prefix}-header__popin');
      this.handle();
    }
  }

  toggle () {
    this.isExpanded = !this.isExpanded;
    this.handle();
  }

  exit () {
    this.isExpanded = false;
    this.handle();
  }

  handle () {
    if (this.isExpanded) {
      addClass(this.popin, '${prefix}-header__popin--expanded');
    } else {
      removeClass(this.popin, '${prefix}-header__popin--expanded');
    }
  }
}

export { Header };
