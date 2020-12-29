import { CollapsesGroup } from '@gouvfr/core/src/scripts';
import { SIDEMENU_GROUP } from './sidemenu-constants';

class SidemenuGroup extends CollapsesGroup {
  static get selector () { return SIDEMENU_GROUP; }
}

export { SidemenuGroup };
