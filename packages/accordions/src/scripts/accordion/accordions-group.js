import api from '../../../api.js';
import { ACCORDIONS_GROUP } from './constants.js';

class AccordionsGroup extends api.DisclosuresGroup {
  static get selector () { return ACCORDIONS_GROUP; }
}

export { AccordionsGroup };
