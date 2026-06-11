import api from '../../../../api';

export const HighlightSelector = {
  HIGHLIGHT: `${api.internals.ns.selector('highlight')}:not(${api.internals.ns.attr.selector('analytics-action', 'reduce')})`
};
