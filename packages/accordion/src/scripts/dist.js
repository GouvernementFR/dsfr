/* eslint-disable no-new */
import '@frds/accordion/_dist.scss';

import { Initializer } from '@frds/utilities/src/scripts/init/Initializer';
import { Accordion } from './index';

new Initializer('.${prefix}-accordion', [Accordion]);
