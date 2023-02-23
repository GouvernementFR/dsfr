import api from '../../../../api';

export const CardSelector = {
  CARD: api.internals.ns.selector('card'),
  LINK: `${api.internals.ns.selector('card__title')} a`,
  TITLE: api.internals.ns.selector('card__title')
};
