/* eslint-disable no-new */
import api from '../../api.js';
import { SCHEME_ATTR } from './scheme/constants';
import build from './scheme/build';

new api.Initializer(`:root[${SCHEME_ATTR}]`, [build]);
