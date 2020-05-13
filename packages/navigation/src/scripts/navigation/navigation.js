import { CollapseElement, CollapseGroup } from '@frds/utilities/src/scripts/';
import { addClass, removeClass } from '@frds/utilities/src/scripts/manipulation/classes';

const NAV_COLLAPSE = '.${prefix}-nav .${prefix}-menu, .${prefix}-nav .${prefix}-mega-menu';
const NAV_LIST = '.${prefix}-nav > .${prefix}-nav__list';
const MENU = '${prefix}-menu';
const MEGA = '${prefix}-mega-menu';
const EXPANDED = '--expanded';
const RIGHT = '${prefix}-nav__item--align-right';

class Navigation {
  constructor () {
    this.init();
  }

  init () {
    this.group = new CollapseGroup();
    this.menus = [];

    this.navList = document.querySelector(NAV_LIST);

    const elements = document.querySelectorAll(NAV_COLLAPSE);
    let element, collapseElement;

    for (let i = 0; i < elements.length; i++) {
      element = elements[i];

      switch (true) {
        case element.className.indexOf(MENU) > -1 :
          collapseElement = new CollapseElement(element, MENU + EXPANDED);
          this.menus.push(new NavMenu(collapseElement));
          break;

        case element.className.indexOf(MEGA) > -1 :
          collapseElement = new CollapseElement(element, MEGA + EXPANDED);
          break;

        default:
          continue;
      }

      this.group.add(collapseElement);
    }

    document.addEventListener('focusout', this.focusOut.bind(this));
    window.addEventListener('resize', this.resize.bind(this));
    window.addEventListener('orientationchange', this.resize.bind(this));
    this.resize();
  }

  focusOut (e) {
    requestAnimationFrame(() => {
      if (!this.group.hasFocus) this.group.reduce();
    });
  }

  resize () {
    const right = this.navList.getBoundingClientRect().right;
    this.menus.forEach((menu) => { menu.place(right); });
  }
}

class NavMenu {
  constructor (collapseElement) {
    this.element = collapseElement.element;
    this.btn = collapseElement.buttons[0].element;
  }

  place (right) {
    const styles = getComputedStyle(this.element);
    const width = parseFloat(styles.width);
    const left = this.btn.getBoundingClientRect().left;

    if (left + width > right) addClass(this.btn.parentElement, RIGHT);
    else removeClass(this.btn.parentElement, RIGHT);
  }
}

export { Navigation };
