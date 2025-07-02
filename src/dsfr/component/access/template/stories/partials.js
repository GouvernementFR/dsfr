import access from '../ejs/access.ejs?raw';
import accessBody from '../ejs/access-body.ejs?raw';
import accessBrand from '../ejs/access-brand.ejs?raw';
import accessMenu from '../ejs/access-menu.ejs?raw';
import accessNavbar from '../ejs/access-navbar.ejs?raw';
import accessTools from '../ejs/access-tools.ejs?raw';

export const accessPartials = [
  {
    names: ['access-body'],
    partial: accessBody
  },
  {
    names: ['access-brand'],
    partial: accessBrand
  },
  {
    names: ['access-menu'],
    partial: accessMenu
  },
  {
    names: ['access-navbar'],
    partial: accessNavbar
  },
  {
    names: ['access-tools'],
    partial: accessTools
  },
  {
    names: ['access'],
    partial: access
  }
];
