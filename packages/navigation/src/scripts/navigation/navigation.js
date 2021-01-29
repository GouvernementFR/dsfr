import { addClass, removeClass, CollapsesGroup } from '@gouvfr/core/src/scripts';
import {
  NAVIGATION,
  NAVIGATION_ITEM,
  NAVIGATION_LIST,
  NAVIGATION_MENU,
  NAVIGATION_ITEM_RIGHT
} from './navigation-constants';

class Navigation extends CollapsesGroup {
  constructor (id, element) {
    super(id, element);

    this.menus = [];

    this.navList = element.querySelector(`.${NAVIGATION_LIST}`);

    document.addEventListener('focusout', this.focusOut.bind(this));
    window.addEventListener('resize', this.resize.bind(this));
    window.addEventListener('orientationchange', this.resize.bind(this));
    this.resize();
  }

  static get selector () { return NAVIGATION; }

  add (member) {
    super.add(member);

    if (member.element.classList.contains(NAVIGATION_MENU)) {
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
      if (item.classList.contains(NAVIGATION_ITEM)) {
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

    if (left + width > right) addClass(this.item, NAVIGATION_ITEM_RIGHT);
    else removeClass(this.item, NAVIGATION_ITEM_RIGHT);
  }
}

export { Navigation };
