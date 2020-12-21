/* eslint-disable no-new */
import '@gouvfr/tabs/_dist.scss';

import { Initializer } from '@gouvfr/core/src/scripts/init/Initializer';
import { Tabs } from './index';

new Initializer('.${prefix}-tabs', [Tabs]);
