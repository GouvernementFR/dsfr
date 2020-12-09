/* eslint-disable no-new */
import '@gouvfr/sidemenu/_dist.scss';
import { Initializer } from '@gouvfr/utilities/src/scripts/init/Initializer';
import { Sidemenu } from './index';
new Initializer('.${prefix}-sidemenu', [Sidemenu]);