/* eslint-disable no-new */
import api from '../api.js';
import build from './breadcrumb/build.js';
import { BREADCRUMB_COLLAPSE_SELECTOR } from './breadcrumb/constants';

new api.core.Initializer(BREADCRUMB_COLLAPSE_SELECTOR, [build]);
