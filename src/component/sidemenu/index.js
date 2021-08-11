import api from './api.js';
import { SidemenuList } from './script/sidemenu/sidemenu-list.js';
import { SidemenuSelector } from './script/sidemenu/sidemenu-selector.js';

api.sidemenu = {
  SidemenuList: SidemenuList,
  SidemenuSelector: SidemenuSelector
};

export default api;
