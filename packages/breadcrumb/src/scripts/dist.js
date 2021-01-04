/* eslint-disable no-new */

// import '@gouvfr/breadcrumb/_dist.scss';

import { Initializer } from '@gouvfr/core/src/scripts/';
import { BreadcrumbButton } from './index';

new Initializer('.${prefix}-breadcrumb__button', [BreadcrumbButton]);
