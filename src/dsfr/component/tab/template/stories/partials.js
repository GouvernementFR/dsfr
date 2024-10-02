import tab from '../ejs/tab.ejs?raw';
import tabPanel from '../ejs/tab-panel.ejs?raw';
import tabs from '../ejs/tabs.ejs?raw';

export const tabPartials = [
  {
    names: ['tab'],
    partial: tab
  },
  {
    names: ['tab-panel'],
    partial: tabPanel
  },
  {
    names: ['tabs'],
    partial: tabs
  }
];
