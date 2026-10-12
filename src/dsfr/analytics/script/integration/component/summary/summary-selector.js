import api from '../../../../api';

export const SummarySelector = {
  SUMMARY: `${api.internals.ns.selector('summary')}:not(${api.internals.ns.attr.selector('analytics-action', 'reduce')})`,
  LINK: `${api.internals.ns.selector('summary__link')}:not(${api.internals.ns.attr.selector('analytics-action', 'reduce')})`,
  TITLE: api.internals.ns.selector('summary__title'),
  ITEM: `${api.internals.ns.selector('summary')} li:not(${api.internals.ns.attr.selector('analytics-action', 'reduce')})`
};
