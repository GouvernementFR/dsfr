import api from './index.js';

api.internals.register(api.sidemenu.SidemenuSelector.LIST, api.sidemenu.SidemenuList);
api.internals.register(api.sidemenu.SidemenuSelector.ITEM, api.sidemenu.SidemenuItem);

export default api;
