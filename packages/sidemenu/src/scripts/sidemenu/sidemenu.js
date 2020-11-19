import { CollapseElement, CollapseGroup } from '@gouvfr/utilities/src/scripts/';

const NAV_COLLAPSE = '.${prefix}-sidemenu__wrapper > .${prefix}-sidemenu__list > .${prefix}-sidemenu__item > .${prefix}-sidemenu__content';
const SUBNAV_COLLAPSE = '.${prefix}-sidemenu__item .${prefix}-sidemenu__item .${prefix}-sidemenu__content';
const MENU = '${prefix}-sidemenu__content';
const EXPANDED = '--expanded';
const SIDENAV_WRAPPER = '${prefix}-sidemenu__wrapper';

class SideMenu {
  constructor () {
    this.init();
  }

  init () {
    this.group = new CollapseGroup();
    this.subGroup = new CollapseGroup();
    const elements = document.querySelectorAll(NAV_COLLAPSE);
    const subElements = document.querySelectorAll(SUBNAV_COLLAPSE);
    const sideMenuWrappers = document.querySelectorAll('.${prefix}-sidemenu__wrapper');
    this.buttons = document.querySelectorAll('.${prefix}-sidemenu__btn--sidemenu-toggle');

    let element, subElement, sideMenuWrapper, collapseElement, collapseSubElement;

    for (let i = 0; i < elements.length; i++) {
      element = elements[i];
      collapseElement = new CollapseElement(element, MENU + EXPANDED);
      this.group.add(collapseElement);
    }

    for (let i = 0; i < subElements.length; i++) {
      subElement = subElements[i];
      collapseSubElement = new CollapseElement(subElement, MENU + EXPANDED);
      this.subGroup.add(collapseSubElement);
    }

    for (let i = 0; i < sideMenuWrappers.length; i++) {
      sideMenuWrapper = sideMenuWrappers[i];
      this.collapseSideNav = new CollapseElement(sideMenuWrapper, SIDENAV_WRAPPER + EXPANDED);
    }

    this.changing = this.change.bind(this);
    window.addEventListener('resize', this.changing);
    this.change();
  }

  change () {
    this.isMedium = window.matchMedia('(min-width: 48em)').matches;

    if (this.isMedium) {
      for (let i = 0; i < this.buttons.length; i++) {
        this.button = this.buttons[i];
        this.button.setAttribute('hidden', '');
      }
    } else {
      for (let i = 0; i < this.buttons.length; i++) {
        this.button = this.buttons[i];
        this.button.removeAttribute('hidden');
      }
    }
  }
}

export { SideMenu };
