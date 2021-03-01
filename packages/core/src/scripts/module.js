/* eslint-disable no-new */
import { Initializer } from './global/initializer.js';
import build from './collapse/build.js';
import { COLLAPSE_CLASS } from './collapse/constants.js';

new Initializer(`.${COLLAPSE_CLASS}`, [build]);
