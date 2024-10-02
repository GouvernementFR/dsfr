import api from '../../../../api';

export const CardSelector = {
  CARD: api.internals.ns.selector('card'),
  LINK: `${api.internals.ns.selector('card__title')} a, ${api.internals.ns.selector('card__title')} button`,
  TITLE: api.internals.ns.selector('card__title')
};
