/* eslint-disable no-new */
import '@gouvfr/breadcrumb/_dist.scss';
import { Initializer } from '@gouvfr/utilities/src/scripts/init/Initializer';
import { Breadcrumb } from './index';
new Initializer('.${prefix}-breadcrumb', [Breadcrumb]);