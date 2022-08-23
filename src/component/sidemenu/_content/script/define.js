import api from '../ref.js';
import { SidemenuList } from './sidemenu/sidemenu-list.js';
import { SidemenuSelector } from './sidemenu/sidemenu-selector.js';

api.sidemenu = {
  SidemenuList: SidemenuList,
  SidemenuSelector: SidemenuSelector
};

export default api;
