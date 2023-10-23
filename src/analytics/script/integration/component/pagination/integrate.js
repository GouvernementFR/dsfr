import api from '../../../../api';
import { PaginationSelector } from './pagination-selector';
import { PaginationActionee } from './pagination-actionee';
import { PaginationLinkActionee } from './pagination-link-actionee';

const integratePagination = () => {
  api.internals.register(PaginationSelector.PAGINATION, PaginationActionee);
  api.internals.register(PaginationSelector.LINK, PaginationLinkActionee);
};

export default integratePagination;
