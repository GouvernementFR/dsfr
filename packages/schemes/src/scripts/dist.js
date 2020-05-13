/* eslint-disable no-new */

import '@frds/schemes/_dist.scss';

import { Initializer } from '@frds/utilities/src/scripts/init/Initializer';
import { DarkModeToggleSwitch } from './index';

new Initializer('#${prefix}-dark-mode-toggle-switch', [DarkModeToggleSwitch]);
