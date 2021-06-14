import api from './index';
import { NAVIGATION_ITEM_SELECTOR } from './scripts/navigation/constants';

api.register(NAVIGATION_ITEM_SELECTOR, api.navigation.NavigationItem);

export default api;
