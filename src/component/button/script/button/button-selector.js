import api from '../../api.js';

export const ButtonSelector = {
  EQUISIZED_BUTTON: `${api.ns.selector('btns-group--equisized')} ${api.ns.selector('btn')}`,
  EQUISIZED_GROUP: api.ns.selector('btns-group--equisized')
};
