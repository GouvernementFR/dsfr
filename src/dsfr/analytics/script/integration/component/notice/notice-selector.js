import api from '../../../../api';

export const NoticeSelector = {
  NOTICE: api.internals.ns.selector('notice'),
  TITLE: api.internals.ns.selector('notice__title'),
  LINK: api.internals.ns.selector('notice a')
};
