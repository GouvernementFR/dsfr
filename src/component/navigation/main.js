import api from './index.js';

api.register(api.navigation.NavigationSelector.NAVIGATION, api.navigation.Navigation);
api.register(api.navigation.NavigationSelector.ITEM, api.navigation.NavigationItem);

export default api;
