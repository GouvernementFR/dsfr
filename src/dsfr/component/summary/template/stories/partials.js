import summary from '../ejs/summary.ejs?raw';
import summaryList from '../ejs/summary-list.ejs?raw';
import summaryItem from '../ejs/summary-item.ejs?raw';

export const summaryPartials = [
  {
    names: ['summary'],
    partial: summary
  },
  {
    names: ['summary-list'],
    partial: summaryList
  },
  {
    names: ['summary-item'],
    partial: summaryItem
  }
];
