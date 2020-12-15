/* eslint-disable no-new */

import '@gouvfr/schemes/_dist.scss';

import { Initializer } from '@gouvfr/utilities/src/scripts/init/Initializer';
import { Scheme } from './index';

new Initializer(':root[' + Scheme.SCHEME_ATTRIBUTE + ']', [Scheme]);
