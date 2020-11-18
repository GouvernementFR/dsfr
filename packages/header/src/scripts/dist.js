/* eslint-disable no-new */

import '@gouvfr/header/_dist.scss';

import { Initializer } from '@gouvfr/utilities/src/scripts/init/Initializer';
import { Header } from './index';

new Initializer('.${prefix}-header', [Header]);
