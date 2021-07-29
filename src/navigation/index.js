import api from './api.js';
import { NavigationItem } from './scripts/navigation/navigation-item.js';
import { Navigation } from './scripts/navigation/navigation.js';
import { NavigationSelectors } from './scripts/navigation/navigation-selectors.js';
import { NavigationMousePosition } from './scripts/navigation/navigation-mouse-position.js';

api.navigation = {
  Navigation: Navigation,
  NavigationItem: NavigationItem,
  NavigationMousePosition: NavigationMousePosition,
  NavigationSelectors: NavigationSelectors
};

export default api;
