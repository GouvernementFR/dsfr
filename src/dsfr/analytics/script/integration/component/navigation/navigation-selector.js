import api from '../../../../api';
import { joinSelector } from '../../join-selector';

export const NavigationSelector = {
  get NAVIGATION () {
    return joinSelector(api.navigation.NavigationSelector.NAVIGATION, `:not(${api.internals.ns.attr.selector('analytics-action', 'reduce')})`);
  },
  get COLLAPSE () {
    return joinSelector(api.navigation.NavigationSelector.COLLAPSE, `:not(${api.internals.ns.attr.selector('analytics-action', 'reduce')})`);
  },
  LINK: `${api.internals.ns.selector('nav__link')}:not(${api.internals.ns.attr.selector('analytics-action', 'reduce')})`,
  BUTTON: api.internals.ns.selector('nav__btn')
};
