/* eslint-disable no-new */
import api from '../api.js';
import { build } from './modal/build.js';
import { MODAL_SELECTOR } from './modal/constants.js';

new api.core.Initializer(MODAL_SELECTOR, [build]);
