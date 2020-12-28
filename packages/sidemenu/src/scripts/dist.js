/* eslint-disable no-new */
import '@gouvfr/sidemenu/_dist.scss';

import { Initializer } from '@gouvfr/core/src/scripts/';
import { SideMenu } from './index';

new Initializer('.${prefix}-sidemenu', [SideMenu]);
