/* eslint-disable no-new */

import '@gouvfr/schemes/_dist.scss';

import { Initializer } from '@gouvfr/utilities/src/scripts/init/Initializer';
import { DarkModeToggleSwitch } from './index';

new Initializer('#${prefix}-dark-mode-toggle-switch', [DarkModeToggleSwitch]);
