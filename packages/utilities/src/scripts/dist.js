/* eslint-disable no-new */
import '@frds/utilities/_dist.scss';

import { Initializer } from '@frds/utilities/src/scripts/init/Initializer';
import { Collapse } from './index';

new Initializer('.${prefix}-collapse', [Collapse]);
