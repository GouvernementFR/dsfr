/* eslint-disable no-new */
import '@gouvfr/utilities/_dist.scss';

import { Initializer } from '@gouvfr/utilities/src/scripts/init/Initializer';
import { Collapse } from './index';

new Initializer('.${prefix}-collapse', [Collapse]);
