import api from './index.js';

api.internals.register(api.navigation.NavigationSelector.NAVIGATION, api.navigation.Navigation);
api.internals.register(api.navigation.NavigationSelector.ITEM, api.navigation.NavigationItem);

export default api;
