import api from '../../../../api';

export const NoticeSelector = {
  NOTICE: `${api.internals.ns.selector('notice')}:not(${api.internals.ns.attr.selector('analytics-action', 'reduce')})`,
  TITLE: api.internals.ns.selector('notice__title'),
  LINK: `${api.internals.ns.selector('notice a')}:not(${api.internals.ns.attr.selector('analytics-action', 'reduce')})`
};
