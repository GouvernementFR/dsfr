import api from '../../../../api';
import { AccordionActionee } from './accordion-actionee';

const integrateAccordion = () => {
  if (api.accordion) {
    api.internals.register(api.accordion.AccordionSelector.COLLAPSE, AccordionActionee);
  }
};

export default integrateAccordion;
