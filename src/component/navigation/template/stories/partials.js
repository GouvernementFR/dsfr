import navigation from '../ejs/navigation.ejs?raw';
import navigationBtn from '../ejs/navigation-btn.ejs?raw';
import navigationLink from '../ejs/navigation-link.ejs?raw';
import navigationMenu from '../ejs/navigation-menu.ejs?raw';
import navigationLeader from '../ejs/navigation-leader.ejs?raw';
import navigationMegaMenu from '../ejs/navigation-mega-menu.ejs?raw';

export const navigationPartials = [
  {
    names: ['navigation-btn'],
    partial: navigationBtn
  },
  {
    names: ['navigation-link'],
    partial: navigationLink
  },
  {
    names: ['navigation-leader'],
    partial: navigationLeader
  },
  {
    names: ['navigation-mega-menu'],
    partial: navigationMegaMenu
  },
  {
    names: ['navigation-menu'],
    partial: navigationMenu
  },
  {
    names: ['navigation'],
    partial: navigation
  }
];
