import api from '../../api.js';
import { HeaderSelectors } from './header-selectors';

class Header extends api.core.Instance {
  constructor () {
    super()
    //this.header = header || document.querySelector(HEADER_SELECTOR);
    //this.modals = [];
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
