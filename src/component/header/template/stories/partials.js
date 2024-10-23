import header from '../ejs/header.ejs?raw';
import headerBody from '../ejs/header-body.ejs?raw';
import headerBrand from '../ejs/header-brand.ejs?raw';
import headerMenu from '../ejs/header-menu.ejs?raw';
import headerNavbar from '../ejs/header-navbar.ejs?raw';
import headerTools from '../ejs/header-tools.ejs?raw';

export const headerPartials = [
  {
    names: ['header-body'],
    partial: headerBody
  },
  {
    names: ['header-brand'],
    partial: headerBrand
  },
  {
    names: ['header-menu'],
    partial: headerMenu
  },
  {
    names: ['header-navbar'],
    partial: headerNavbar
  },
  {
    names: ['header-tools'],
    partial: headerTools
  },
  {
    names: ['header'],
    partial: header
  }
];
