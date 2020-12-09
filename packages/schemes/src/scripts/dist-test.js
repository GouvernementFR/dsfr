/* eslint-disable no-new */
import '@gouvfr/schemes/_dist.scss';
import { Initializer } from '@gouvfr/utilities/src/scripts/init/Initializer';
import { Schemes } from './index';
new Initializer('.${prefix}-schemes', [Schemes]);