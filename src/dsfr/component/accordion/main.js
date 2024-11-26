import api from './index.js';

api.internals.register(api.accordion.AccordionSelector.GROUP, api.accordion.AccordionsGroup);
api.internals.register(api.accordion.AccordionSelector.ACCORDION, api.accordion.Accordion);

export default api;
