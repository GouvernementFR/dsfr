import sidemenu from '../ejs/sidemenu.ejs?raw';
import sidemenuBtn from '../ejs/sidemenu-btn.ejs?raw';
import sidemenuLink from '../ejs/sidemenu-link.ejs?raw';
import sidemenuList from '../ejs/sidemenu-list.ejs?raw';
import sidemenuMenu from '../ejs/sidemenu-menu.ejs?raw';

export const sidemenuPartials = [
  {
    names: ['sidemenu-btn'],
    partial: sidemenuBtn
  },
  {
    names: ['sidemenu-link'],
    partial: sidemenuLink
  },
  {
    names: ['sidemenu-list'],
    partial: sidemenuList
  },
  {
    names: ['sidemenu-menu'],
    partial: sidemenuMenu
  },
  {
    names: ['sidemenu'],
    partial: sidemenu
  }
];
