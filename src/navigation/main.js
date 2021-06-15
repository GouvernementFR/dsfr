import api from './index';

api.register(api.navigation.NavigationSelectors.NAVIGATION, api.navigation.Navigation);
api.register(api.navigation.NavigationSelectors.ITEM, api.navigation.NavigationItem);

export default api;
