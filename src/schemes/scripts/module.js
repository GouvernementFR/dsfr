/* eslint-disable no-new */
import api from '../api.js';
import { SCHEME_ATTR } from './scheme/constants';
import { SWITCH_THEME_ID } from './switch-theme/constants';
import buildScheme from './scheme/build';
import buildSwitch from './switch-theme/build';

new api.core.Initializer(`:root[${SCHEME_ATTR}]`, [buildScheme]);
new api.core.Initializer(`${SWITCH_THEME_ID}`, [buildSwitch]);
