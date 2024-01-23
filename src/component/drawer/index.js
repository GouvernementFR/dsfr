import api from './api.js';
import { Drawer } from './script/drawer/drawer.js';
import { DrawerSelector } from './script/drawer/drawer-selector.js';

api.drawer = {
  Drawer: Drawer,
  DrawerSelector: DrawerSelector
};

export default api;
