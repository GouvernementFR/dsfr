/* eslint-disable no-new */
import '@frds/navigation/_dist.scss';

import { Initializer } from '@frds/utilities/src/scripts/init/Initializer';
import { Navigation } from './index';

new Initializer('.${prefix}-nav', [Navigation]);
