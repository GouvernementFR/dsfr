import api from './api.js';
import { NavigationItem } from './script/navigation/navigation-item.js';
import { Navigation } from './script/navigation/navigation.js';
import { NavigationSelector } from './script/navigation/navigation-selector.js';
import { NavigationMousePosition } from './script/navigation/navigation-mouse-position.js';

api.navigation = {
  Navigation: Navigation,
  NavigationItem: NavigationItem,
  NavigationMousePosition: NavigationMousePosition,
  NavigationSelector: NavigationSelector
};

export default api;
