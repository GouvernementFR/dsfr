import api from '../../../../api';

export const QuoteSelector = {
  QUOTE: `${api.internals.ns.selector('quote')}:not(${api.internals.ns.attr.selector('analytics-action', 'reduce')})`
};
