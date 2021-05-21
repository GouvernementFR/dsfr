/* eslint-disable no-new */
import { _initializer } from './global/_initializer.js';
import build from './collapse/build.js';
import { COLLAPSE_CLASS } from './collapse/constants.js';

new _initializer(`.${COLLAPSE_CLASS}`, [build]);
