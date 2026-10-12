import api from '../../../../api';
import { joinSelector } from '../../join-selector';

export const AccordionSelector = {
  ACCORDION: api.internals.ns.selector('accordion'),
  TITLE: api.internals.ns.selector('accordion__title'),
  get COLLAPSE () {
    return joinSelector(api.accordion.AccordionSelector.COLLAPSE, `:not(${api.internals.ns.attr.selector('analytics-action', 'reduce')})`);
  }
};
