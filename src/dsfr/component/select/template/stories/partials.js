import selectGroup from '../ejs/select-group.ejs?raw';
import select from '../ejs/select.ejs?raw';

export const selectPartials = [
  {
    names: ['select-group'],
    partial: selectGroup
  },
  {
    names: ['select'],
    partial: select
  }
];
