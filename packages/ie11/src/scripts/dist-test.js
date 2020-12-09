/* eslint-disable no-new */
import '@gouvfr/ie11/_dist.scss';
import { Initializer } from '@gouvfr/utilities/src/scripts/init/Initializer';
import { Ie11 } from './index';
new Initializer('.${prefix}-ie11', [Ie11]);