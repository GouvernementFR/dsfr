import api from '../ref.js';
import { NavigationItem } from './navigation/navigation-item.js';
import { Navigation } from './navigation/navigation.js';
import { NavigationSelector } from './navigation/navigation-selector.js';
import { NavigationMousePosition } from './navigation/navigation-mouse-position.js';

api.navigation = {
  Navigation: Navigation,
  NavigationItem: NavigationItem,
  NavigationMousePosition: NavigationMousePosition,
  NavigationSelector: NavigationSelector
};

export default api;
