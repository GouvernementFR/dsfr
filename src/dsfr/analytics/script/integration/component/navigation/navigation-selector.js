import api from '../../../../api';

export const NavigationSelector = {
  NAVIGATION: `${api.navigation.NavigationSelector.NAVIGATION}:not(${api.internals.ns.attr.selector('analytics-action', 'reduce')})`,
  COLLAPSE: `${api.navigation.NavigationSelector.COLLAPSE}:not(${api.internals.ns.attr.selector('analytics-action', 'reduce')})`,
  LINK: `${api.internals.ns.selector('nav__link')}:not(${api.internals.ns.attr.selector('analytics-action', 'reduce')})`,
  BUTTON: api.internals.ns.selector('nav__btn')
};
