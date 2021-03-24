/* eslint-disable no-new */
import api from '../api.js';

import build from './buttons/build.js';
import { BUTTONS_GROUP_SELECTOR } from './buttons/constants';

new api.core.Initializer(BUTTONS_GROUP_SELECTOR, [build]);
