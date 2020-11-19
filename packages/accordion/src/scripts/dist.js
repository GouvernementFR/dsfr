/* eslint-disable no-new */
import '@gouvfr/accordion/_dist.scss';

import { Initializer } from '@gouvfr/utilities/src/scripts/init/Initializer';
import { Accordion } from './index';

new Initializer('.${prefix}-accordion', [Accordion]);
