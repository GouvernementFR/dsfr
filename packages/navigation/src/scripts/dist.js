/* eslint-disable no-new */

import '@gouvfr/navigation/_dist.scss';

import { Initializer } from '@gouvfr/utilities/src/scripts/init/Initializer';
import { Navigation } from './index';

new Initializer('.${prefix}-nav', [Navigation]);
