import api from '../../../../api';
import { TableSelector } from './table-selector';
import { TableActionee } from './table-actionee';

const integrateTable = () => {
  api.internals.register(TableSelector.TABLE, TableActionee);
};

export default integrateTable;
