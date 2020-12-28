/* eslint-disable no-new */

import '@gouvfr/header/_dist.scss';

import { Initializer } from '@gouvfr/core/src/scripts/';
import { Header } from './index';

new Initializer('.${prefix}-header', [Header]);
