import api from '../../../../api';
import { PaginationSelector } from './pagination-selector';
import { PaginationActionee } from './pagination-actionee';
import { PaginationLinkActionee } from './pagination-link-actionee';
import { joinSelector } from '../../join-selector';

const integratePagination = (selector = '') => {
  api.internals.register(joinSelector(PaginationSelector.PAGINATION, selector), PaginationActionee);
  api.internals.register(joinSelector(PaginationSelector.LINK, selector), PaginationLinkActionee);
};

export default integratePagination;
