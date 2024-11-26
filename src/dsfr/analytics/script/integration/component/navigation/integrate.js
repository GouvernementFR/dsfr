import api from '../../../../api';
import { NavigationActionee } from './navigation-actionee';
import { NavigationSelector } from './navigation-selector';
import { NavigationLinkActionee } from './navigation-link-actionee';
import { NavigationSectionActionee } from './navigation-section-actionee';

const integrateNavigation = () => {
  if (api.navigation) {
    api.internals.register(api.navigation.NavigationSelector.NAVIGATION, NavigationActionee);
    api.internals.register(NavigationSelector.LINK, NavigationLinkActionee);
    api.internals.register(api.navigation.NavigationSelector.COLLAPSE, NavigationSectionActionee);
  }
};

export default integrateNavigation;
