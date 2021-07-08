import api from './api.js';
import { Table } from './scripts/table/table';
import { TableElement } from './scripts/table/table-element.js';
import { TableSelectors } from './scripts/table/table-selectors';
import { TableCaption } from './scripts/table/table-caption';

api.table = {
  Table: Table,
  TableElement: TableElement,
  TableCaption: TableCaption,
  TableSelectors: TableSelectors
};

export default api;
