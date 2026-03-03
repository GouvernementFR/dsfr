import api from '../../../../api';

export const TableSelector = {
  TABLE: `${api.internals.ns.selector('table')}:not(${api.internals.ns.attr.selector('analytics-action', 'reduce')})`
};
