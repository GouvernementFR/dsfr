import api from './api.js';
import { SidemenuList } from './script/sidemenu/sidemenu-list.js';
import { SidemenuSelector } from './script/sidemenu/sidemenu-selector.js';
import { SidemenuItem } from './script/sidemenu/sidemenu-item';

api.sidemenu = {
  SidemenuList: SidemenuList,
  SidemenuItem: SidemenuItem,
  SidemenuSelector: SidemenuSelector
};

export default api;
