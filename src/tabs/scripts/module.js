/* eslint-disable no-new */
import api from '../api.js';
import { build } from './tabs/build.js';
import { TABS_SELECTOR } from './tabs/constants.js';

new api.core.Initializer(TABS_SELECTOR, [build]);
