import api from './api.js';
import { NavigationItem } from './scripts/navigation/navigation-item';
import { Navigation } from './scripts/navigation/navigation';
import { NavigationSelectors } from './scripts/navigation/navigation-selectors';
import { NavigationMousePosition } from './scripts/navigation/navigation-mouse-position';

api.navigation = {
  Navigation: Navigation,
  NavigationItem: NavigationItem,
  NavigationMousePosition: NavigationMousePosition,
  NavigationSelectors: NavigationSelectors
};

export default api;
