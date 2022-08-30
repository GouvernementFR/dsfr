import ref from '../../ref.js';
import { Table } from './script/table/table.js';
import { TableElement } from './script/table/table-element.js';
import { TableSelector } from './script/table/table-selector.js';
import { TableCaption } from './script/table/table-caption.js';

ref.table = {
  Table: Table,
  TableElement: TableElement,
  TableCaption: TableCaption,
  TableSelector: TableSelector
};

export default ref;
