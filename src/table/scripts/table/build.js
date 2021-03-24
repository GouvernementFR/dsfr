import { TABLE_SCROLLING_SELECTOR } from './constants';
import { Table } from './table';

const tables = [];

const change = () => {
  for (let i = 0; i < tables.length; i++) tables[i].change();
};

const build = () => {
  const tableNodes = document.querySelectorAll(TABLE_SCROLLING_SELECTOR);
  for (let i = 0; i < tableNodes.length; i++) tables.push(new Table(tableNodes[i]));

  window.addEventListener('resize', change);
  window.addEventListener('orientationchange', change);
  change();
};

export { build };
