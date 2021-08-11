import api from './api.js';
import { Table } from './script/table/table.js';
import { TableElement } from './script/table/table-element.js';
import { TableSelectors } from './script/table/table-selectors.js';
import { TableCaption } from './script/table/table-caption.js';

api.table = {
  Table: Table,
  TableElement: TableElement,
  TableCaption: TableCaption,
  TableSelectors: TableSelectors
};

export default api;
