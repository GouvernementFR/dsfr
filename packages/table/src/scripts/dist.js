/* eslint-disable no-new */

import '@gouvfr/table/_dist.scss';

import { Initializer } from '@gouvfr/utilities/src/scripts/init/Initializer';
import { ShadowOnScroll } from './index';

new Initializer('.${prefix}-table', [ShadowOnScroll]);
