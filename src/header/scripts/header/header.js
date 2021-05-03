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
    this.modals.push(new HeaderModal(modals[0]));
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

    if (this.isLarge) this.modals.forEach((modal) => modal.disable());
    else this.modals.forEach((modal) => modal.enable());

    if (this.linksGroup !== null) {
      if (this.isLarge) this.toolsLinks.appendChild(this.linksGroup);
      else this.menuLinks.appendChild(this.linksGroup);
    }
  }
}

class HeaderModal {
  constructor (modal) {
    this.modal = modal;
  }

  enable () {
    this.modal.element.setAttribute('role', 'dialog');
    this.modal.element.setAttribute('aria-labelledby', this.modal.primary.element.id);
  }

  disable () {
    this.modal.conceal();
    this.modal.element.removeAttribute('role');
    this.modal.element.removeAttribute('aria-labelledby');
  }
}

export { Header };
