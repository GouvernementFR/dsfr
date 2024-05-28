import api from './api.js';
import { Table } from './script/table/table.js';
import { TableElement } from './script/table/table-element.js';
import { TableSelector } from './script/table/table-selector.js';
import { TableCaption } from './script/table/table-caption.js';
import { TableRow } from './script/table/table-row.js';

api.table = {
  Table: Table,
  TableElement: TableElement,
  TableCaption: TableCaption,
  TableSelector: TableSelector,
  TableRow: TableRow
};

export default api;
