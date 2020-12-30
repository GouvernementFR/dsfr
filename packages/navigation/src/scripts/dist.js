/* eslint-disable no-new */

import '@gouvfr/navigation/_dist.scss';

import { Initializer } from '@gouvfr/core/src/scripts/';
import { _navigation } from './index';

new Initializer('.${prefix}-nav', [_navigation]);
