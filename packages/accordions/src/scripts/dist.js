/* eslint-disable no-new */
import '@gouvfr/accordions/_dist.scss';

import { Initializer } from '@gouvfr/core/src/scripts';
import { Accordions } from './index';

new Initializer('.${prefix}-accordion', [Accordions]);
