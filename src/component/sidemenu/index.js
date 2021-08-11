import api from './api.js';
import { SidemenuList } from './script/sidemenu/sidemenu-list.js';
import { SidemenuSelectors } from './script/sidemenu/sidemenu-selectors.js';

api.sidemenu = {
  SidemenuList: SidemenuList,
  SidemenuSelectors: SidemenuSelectors
};

export default api;
