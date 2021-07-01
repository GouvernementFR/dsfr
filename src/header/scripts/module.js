/* eslint-disable no-new */
import api from '../api.js';
import { HEADER_SELECTOR } from './header/header-selectors.js';
import { build } from './header/build.js';

new api.core.Initializer(HEADER_SELECTOR, [build]);
