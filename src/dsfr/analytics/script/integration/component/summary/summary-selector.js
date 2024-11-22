import api from '../../../../api';

export const SummarySelector = {
  SUMMARY: api.internals.ns.selector('summary'),
  LINK: api.internals.ns.selector('summary__link'),
  TITLE: api.internals.ns.selector('summary__title'),
  ITEM: `${api.internals.ns.selector('summary')} li`
};
