import api from '../../../../api';
import { NavigationActionee } from './navigation-actionee';
import { NavigationSelector } from './navigation-selector';
import { NavigationLinkActionee } from './navigation-link-actionee';
import { NavigationSectionActionee } from './navigation-section-actionee';
import { joinSelector } from '../../join-selector';

const integrateNavigation = (selector = '') => {
  if (api.navigation) {
    api.internals.register(joinSelector(api.navigation.NavigationSelector.NAVIGATION, selector), NavigationActionee);
    api.internals.register(joinSelector(NavigationSelector.LINK, selector), NavigationLinkActionee);
    api.internals.register(joinSelector(api.navigation.NavigationSelector.COLLAPSE, selector), NavigationSectionActionee);
  }
};

export default integrateNavigation;
