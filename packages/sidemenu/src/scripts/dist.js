/* eslint-disable no-new */
import '@frds/sidemenu/_dist.scss';

import { Initializer } from '@frds/utilities/src/scripts/init/Initializer';
import { SideMenu } from './index';

new Initializer('.${prefix}-sidemenu', [SideMenu]);
