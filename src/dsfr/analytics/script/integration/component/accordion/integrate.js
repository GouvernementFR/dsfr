import api from '../../../../api';
import { AccordionActionee } from './accordion-actionee';
import { joinSelector } from '../../join-selector';
import { AccordionSelector } from './accordion-selector';

const integrateAccordion = (selector = '') => {
  if (api.accordion) {
    api.internals.register(joinSelector(AccordionSelector.COLLAPSE, selector), AccordionActionee);
  }
};

export default integrateAccordion;
