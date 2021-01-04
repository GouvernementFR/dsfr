/* eslint-disable no-new */

// import '@gouvfr/schemes/_dist.scss';

import { Initializer } from '@gouvfr/core/src/scripts/';
import { Scheme } from './index';

new Initializer(':root[' + Scheme.SCHEME_ATTRIBUTE + ']', [Scheme]);
