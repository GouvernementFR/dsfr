/* eslint-disable no-new */
import '@gouvfr/sidemenu/_dist.scss';

import { Initializer } from '@gouvfr/core/src/scripts/init/Initializer';
import { SideMenu } from './index';

new Initializer('.${prefix}-sidemenu', [SideMenu]);
