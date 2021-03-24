import api from '../../api.js';
import { ACCORDIONS_GROUP } from './constants.js';

class AccordionsGroup extends api.core.DisclosuresGroup {
  static get selector () { return ACCORDIONS_GROUP; }
}

export { AccordionsGroup };
