import api from '../../../../api';
import { TableSelector } from './table-selector';
import { TableActionee } from './table-actionee';
import { joinSelector } from '../../join-selector';

const integrateTable = (selector = '') => {
  api.internals.register(joinSelector(TableSelector.TABLE, selector), TableActionee);
};

export default integrateTable;
