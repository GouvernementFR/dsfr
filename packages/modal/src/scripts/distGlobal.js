/* eslint-disable no-new */
// import '@gouvfr/tabs/_dist.scss';

import { Initializer } from '@gouvfr/core/src/scripts/';
import { Modals } from './modal/modals';

new Initializer('.${prefix}-modal', [Modals]);
