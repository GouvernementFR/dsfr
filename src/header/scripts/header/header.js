import api from '../../api.js';
import {
  HEADER_MENU_SELECTOR,
  HEADER_SEARCH_SELECTOR,
  HEADER_SELECTOR,
  HEADER_LINKS_GROUP_SELECTOR,
  HEADER_TOOLS_LINKS_SELECTOR,
  HEADER_MENU_LINKS_SELECTOR
} from './constants';

class Header {
  constructor (header) {
    this.header = header || document.querySelector(HEADER_SELECTOR);
    this.modals = [];

    this.init();
  }

  getModal (selector) {
    const element = this.header.querySelector(selector);
    if (!element) return;
    const modals = api.core.Instance.getInstances(element, api.Modal);
    if (!modals || !modals.length) return;
    this.modals.push(modals[0]);
  }

  init () {
    this.getModal(HEADER_SEARCH_SELECTOR);
    this.getModal(HEADER_MENU_SELECTOR);

    this.linksGroup = this.header.querySelector(HEADER_LINKS_GROUP_SELECTOR);

    this.toolsLinks = this.header.querySelector(HEADER_TOOLS_LINKS_SELECTOR);
    this.menuLinks = this.header.querySelector(HEADER_MENU_LINKS_SELECTOR);

    this.changing = this.change.bind(this);

    window.addEventListener('resize', this.changing);
    this.change();
  }

  change () {
    this.isLarge = window.matchMedia('(min-width: 62em)').matches;

    if (this.isLarge) {
      for (let i = 0; i < this.modals.length; i++) {
        this.modals[i].conceal();
        this.modals[i].element.removeAttribute('role');
      }
    } else {
      for (let i = 0; i < this.modals.length; i++) {
        this.modals[i].element.setAttribute('role', 'dialog');
      }
    }

    if (this.linksGroup !== null) {
      if (this.isLarge) this.toolsLinks.appendChild(this.linksGroup);
      else this.menuLinks.appendChild(this.linksGroup);
    }
  }
}

export { Header };
