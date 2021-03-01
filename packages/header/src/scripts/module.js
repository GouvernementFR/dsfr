/* eslint-disable no-new */
import api from '../../api.js';
import { HEADER_SELECTOR } from './header/constants.js';
import { build } from './header/build.js';

new api.Initializer(HEADER_SELECTOR, [build]);
