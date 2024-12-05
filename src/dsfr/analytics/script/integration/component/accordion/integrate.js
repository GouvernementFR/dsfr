import api from '../../../../api';
import { AccordionActionee } from './accordion-actionee';
import { joinSelector } from '../../join-selector';

const integrateAccordion = (selector = '') => {
  if (api.accordion) {
    api.internals.register(joinSelector(api.accordion.AccordionSelector.COLLAPSE, selector), AccordionActionee);
  }
};

export default integrateAccordion;
