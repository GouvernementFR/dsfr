import api from './api.js';
import { Table } from './script/table/table.js';
import { TableWrapper } from './script/table/table-wrapper.js';
import { TableElement } from './script/table/table-element.js';
import { TableSelector } from './script/table/table-selector.js';
import { TableCaption } from './script/table/table-caption.js';
import { TableRow } from './script/table/table-row.js';

api.table = {
  Table: Table,
  TableWrapper: TableWrapper,
  TableElement: TableElement,
  TableCaption: TableCaption,
  TableSelector: TableSelector,
  TableRow: TableRow
};

export default api;
