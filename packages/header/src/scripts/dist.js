/* eslint-disable no-new */

import '@frds/header/_dist.scss';

import { Initializer } from '@frds/utilities/src/scripts/init/Initializer';
import { Header } from './index';

new Initializer('.${prefix}-header', [Header]);
