import tableWrapper from '../ejs/table-wrapper.ejs?raw';
import table from '../ejs/table.ejs?raw';
import thead from '../ejs/thead.ejs?raw';
import tbody from '../ejs/tbody.ejs?raw';

export const tablePartials = [
  {
    names: ['table-wrapper'],
    partial: tableWrapper
  },
  {
    names: ['table'],
    partial: table
  },
  {
    names: ['thead'],
    partial: thead
  },
  {
    names: ['tbody'],
    partial: tbody
  }
];
