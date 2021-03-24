import api from '../../api.js';
import {
  NAVIGATION_CLASS,
  NAVIGATION_ITEM_CLASS,
  NAVIGATION_LIST_CLASS,
  NAVIGATION_MENU_CLASS,
  NAVIGATION_ITEM_RIGHT_CLASS
} from './constants';

class Navigation extends api.core.DisclosuresGroup {
  constructor (id, element) {
    super(id, element);

    this.menus = [];

    this.navList = element.querySelector(`.${NAVIGATION_LIST_CLASS}`);

    document.addEventListener('focusout', this.focusOut.bind(this));
    window.addEventListener('resize', this.resize.bind(this));
    window.addEventListener('orientationchange', this.resize.bind(this));
    this.resize();
  }

  static get selector () { return NAVIGATION_CLASS; }

  add (member) {
    super.add(member);

    if (member.element.classList.contains(NAVIGATION_MENU_CLASS)) {
      this.menus.push(new NavigationMenu(member, this.navList.getBoundingClientRect().right));
    }
  }

  focusOut (e) {
    requestAnimationFrame(() => {
      if (this.current !== null && !this.current.hasFocus) this.index = -1;
    });
  }

  get index () { return super.index; }

  set index (value) {
    if (value === -1 && this.current !== null && this.current.hasFocus) this.current.focus();
    super.index = value;
  }

  resize () {
    const right = this.navList.getBoundingClientRect().right;

    for (const menu of this.menus) menu.place(right);
  }
}

class NavigationMenu {
  constructor (collapse, right) {
    this.initialize(collapse);
    this.place(right);
  }

  initialize (collapse) {
    this.element = collapse.element;

    for (const button of collapse.buttons) {
      if (!button.hasAttribute) continue;
      this.button = button.element;
      break;
    }

    let item = this.element.parentElement;
    while (item) {
      if (item.classList.contains(NAVIGATION_ITEM_CLASS)) {
        this.item = item;
        break;
      }
      item = item.parentElement;
    }
  }

  place (right) {
    const styles = getComputedStyle(this.element);
    const width = parseFloat(styles.width);
    const left = this.button.getBoundingClientRect().left;

    if (left + width > right) api.core.addClass(this.item, NAVIGATION_ITEM_RIGHT_CLASS);
    else api.core.removeClass(this.item, NAVIGATION_ITEM_RIGHT_CLASS);
  }
}

export { Navigation };
