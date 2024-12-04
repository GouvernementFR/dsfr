import pagination from '../ejs/pagination.ejs?raw';
import paginationItem from '../ejs/pagination-item.ejs?raw';

export const paginationPartials = [
  {
    names: ['pagination'],
    partial: pagination
  },
  {
    names: ['pagination-item'],
    partial: paginationItem
  }
];
