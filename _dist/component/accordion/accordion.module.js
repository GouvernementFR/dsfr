/*! DSFR v1.1.0 | SPDX-License-Identifier: MIT | License-Filename: LICENCE.md | restricted use (see terms and conditions) */

const config = {
  prefix: 'fr',
  namespace: 'dsfr',
  organisation: '@gouvfr',
  version: '1.1.0'
};

const api = window[config.namespace];

const AccordionSelector = {
  GROUP: api.ns.selector('accordions-group'),
  COLLAPSE: `${api.ns.selector('accordion')} > ${api.ns.selector('collapse')}`
};

class AccordionsGroup extends api.core.CollapsesGroup {
  static get instanceClassName () {
    return 'AccordionsGroup';
  }

  validate (member) {
    return member.node.matches(AccordionSelector.COLLAPSE);
  }
}

api.accordion = {
  AccordionSelector: AccordionSelector,
  AccordionsGroup: AccordionsGroup
};

api.register(api.accordion.AccordionSelector.GROUP, api.accordion.AccordionsGroup);
