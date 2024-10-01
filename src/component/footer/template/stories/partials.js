import footer from '../ejs/footer.ejs?raw';
import footerBottom from '../ejs/footer-bottom.ejs?raw';
import footerTop from '../ejs/footer-top.ejs?raw';
import footerContent from '../ejs/footer-content.ejs?raw';
import footerBrand from '../ejs/footer-brand.ejs?raw';
import footerPartners from '../ejs/footer-partners.ejs?raw';

export const footerPartials = [
  {
    names: ['footer'],
    partial: footer
  },
  {
    names: ['footer-bottom'],
    partial: footerBottom
  },
  {
    names: ['footer-top'],
    partial: footerTop
  },
  {
    names: ['footer-content'],
    partial: footerContent
  },
  {
    names: ['footer-brand'],
    partial: footerBrand
  },
  {
    names: ['footer-partners'],
    partial: footerPartners
  }
];
