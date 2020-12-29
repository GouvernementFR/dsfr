/* eslint-disable no-new */
import { CollapsePlugin } from '@gouvfr/core/src/scripts/';
import { SIDEMENU_ASCENDANT } from './sidemenu/sidemenu-constants';
import { SidemenuGroup } from './sidemenu/sidemenu-group';

CollapsePlugin.add(SIDEMENU_ASCENDANT, SidemenuGroup);
