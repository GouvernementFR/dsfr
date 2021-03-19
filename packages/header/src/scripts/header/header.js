import api from '../../../api.js';
import {
  HEADER_NAV_LIST_SELECTOR,
  HEADER_NAV_SELECTOR,
  HEADER_SEARCH_BAR_SELECTOR,
  HEADER_SELECTOR,
  HEADER_SHORTCUTS_SELECTOR,
  HEADER_TOOLS_SELECTOR
} from './constants';

let count = 0;

class Header {
  constructor (header) {
    this.header = header || document.querySelector(HEADER_SELECTOR);
    this.numId = count;
    count++;

    this.init();
  }

  init () {
    this.modals = [];

    this.tools = this.header.querySelector(HEADER_TOOLS_SELECTOR);


    const toolsModals = api.core.Instance.getInstances(this.tools, api.Modal);
    if (toolsModals) this.modals.push(toolsModals[0]);

    this.searchBar = this.header.querySelector(HEADER_SEARCH_BAR_SELECTOR);

    this.nav = this.header.querySelector(HEADER_NAV_SELECTOR);
    const navModals = api.core.Instance.getInstances(this.nav, api.Modal);
    if (navModals) this.modals.push(navModals[0]);

    this.shortcuts = this.header.querySelector(HEADER_SHORTCUTS_SELECTOR);

    this.navList = this.header.querySelector(HEADER_NAV_LIST_SELECTOR);

    this.changing = this.change.bind(this);

    window.addEventListener('resize', this.changing);
    window.addEventListener('orientationchange', this.changing);
    this.change();
  }

  change () {
    this.isLarge = window.matchMedia('(min-width: 62em)').matches;

    if (this.isLarge) for (let i = 0; i < this.modals.length; i++) this.modals[i].conceal();

    if (this.shortcuts !== null) {
      if (this.isLarge) {
        if (this.searchBar !== null) this.tools.insertBefore(this.shortcuts, this.searchBar);
        else this.tools.appendChild(this.shortcuts);
      } else {
        this.nav.insertBefore(this.shortcuts, this.navList);
      }
    }
  }
}

export { Header };
