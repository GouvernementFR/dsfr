/*! DSFR v1.1.0 | SPDX-License-Identifier: MIT | License-Filename: LICENCE.md | restricted use (see terms and conditions) */

const config = {
  prefix: 'fr',
  namespace: 'dsfr',
  organisation: '@gouvfr',
  version: '1.1.0'
};

const api = window[config.namespace];

const HeaderSelector = {
  HEADER: api.ns.selector('header'),
  TOOLS_LINKS: api.ns.selector('header__tools-links'),
  MENU_LINKS: api.ns.selector('header__menu-links'),
  LINKS: `${api.ns.selector('header__tools-links')} ${api.ns.selector('links-group')}`,
  MODALS: `${api.ns.selector('header__search')}${api.ns.selector('modal')}, ${api.ns.selector('header__menu')}${api.ns.selector('modal')}`
};

class HeaderLinks extends api.core.Instance {
  static get instanceClassName () {
    return 'HeaderLinks';
  }

  init () {
    const header = this.queryParentSelector(HeaderSelector.HEADER);
    this.toolsLinks = header.querySelector(HeaderSelector.TOOLS_LINKS);
    this.menuLinks = header.querySelector(HeaderSelector.MENU_LINKS);

    const toolsHtml = this.toolsLinks.innerHTML.replace(/  +/g, ' ');
    const menuHtml = this.menuLinks.innerHTML.replace(/  +/g, ' ');

    if (toolsHtml === menuHtml) return;

    switch (api.mode) {
      case api.Modes.ANGULAR:
      case api.Modes.REACT:
      case api.Modes.VUE:
        api.inspector.warn(`header__tools-links content is different from header__menu-links content.
As you're using a dynamic framework, you should handle duplication of this content yourself, please refer to documentation: 
${api.header.doc}`);
        break;

      default:
        this.menuLinks.innerHTML = this.toolsLinks.innerHTML;
    }
  }
}

class HeaderModal extends api.core.Instance {
  static get instanceClassName () {
    return 'HeaderModal';
  }

  init () {
    this.isResizing = true;
  }

  resize () {
    if (this.isBreakpoint(api.core.Breakpoints.LG)) this.unqualify();
    else this.qualify();
  }

  qualify () {
    this.setAttribute('role', 'dialog');
    const modal = this.element.getInstance('Modal');
    if (!modal) return;
    const buttons = modal.buttons;
    let id = '';
    for (const button of buttons) {
      id = button.id || id;
      if (button.isPrimary && id) break;
    }
    this.setAttribute('aria-labelledby', id);
  }

  unqualify () {
    const modal = this.element.getInstance('Modal');
    if (modal) modal.conceal();
    this.removeAttribute('role');
    this.removeAttribute('aria-labelledby');
  }
}

api.header = {
  HeaderLinks: HeaderLinks,
  HeaderModal: HeaderModal,
  HeaderSelector: HeaderSelector,
  doc: 'https://gouvfr.atlassian.net/wiki/spaces/DB/pages/222789846/En-t+te+-+Header'
};

api.register(api.header.HeaderSelector.LINKS, api.header.HeaderLinks);
api.register(api.header.HeaderSelector.MODALS, api.header.HeaderModal);
