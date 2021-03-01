import api from '../../api.js';
import { ACCORDION_ASCENDANT } from './accordion/constants.js';
import { AccordionsGroup } from './accordion/accordions-group.js';

api.CollapsesGroup.register(ACCORDION_ASCENDANT, AccordionsGroup);
