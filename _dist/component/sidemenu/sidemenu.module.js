/*! DSFR v1.1.0 | SPDX-License-Identifier: MIT | License-Filename: LICENCE.md | restricted use (see terms and conditions) */

const config = {
  prefix: 'fr',
  namespace: 'dsfr',
  organisation: '@gouvfr',
  version: '1.1.0'
};

const api = window[config.namespace];

const SidemenuSelector = {
  LIST: api.ns.selector('sidemenu__list'),
  COLLAPSE: `${api.ns.selector('sidemenu__item')} > ${api.ns.selector('collapse')}`
};

class SidemenuList extends api.core.CollapsesGroup {
  static get instanceClassName () {
    return 'SidemenuList';
  }

  validate (member) {
    return member.node.matches(SidemenuSelector.COLLAPSE);
  }
}

api.sidemenu = {
  SidemenuList: SidemenuList,
  SidemenuSelector: SidemenuSelector
};

api.register(api.sidemenu.SidemenuSelector.LIST, api.sidemenu.SidemenuList);
