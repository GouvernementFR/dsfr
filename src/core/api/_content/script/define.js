import api from './api/api';

import { Instance } from './api/modules/register/instance.js';
import { KeyCodes } from './api/modules/register/key-codes.js';
import { Breakpoints } from './api/modules/register/breakpoints';
import { RootSelector } from './api/modules/stage/root.js';

api.core = {
  Instance: Instance,
  Breakpoints: Breakpoints,
  KeyCodes: KeyCodes,
  RootSelector: RootSelector
};

export default api;
