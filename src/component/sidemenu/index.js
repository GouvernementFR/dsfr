import api from './api.js';
import { SidemenuList } from './scripts/sidemenu/sidemenu-list.js';
import { SidemenuSelectors } from './scripts/sidemenu/sidemenu-selectors.js';

api.sidemenu = {
  SidemenuList: SidemenuList,
  SidemenuSelectors: SidemenuSelectors
};

export default api;
