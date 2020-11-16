/* eslint-disable no-new */

import '@frds/table/_dist.scss';

import { Initializer } from '@frds/utilities/src/scripts/init/Initializer';
import { ShadowOnScroll } from './index';

new Initializer('.${prefix}-table', [ShadowOnScroll]);
