import { ComponentActionee } from '../component-actionee';
import { FooterSelector } from './footer-selector';
import { FooterContentLinkActionee } from './footer-content-link-actionee';
import { FooterLinkActionee } from './footer-link-actionee';
import { FooterTopLinkActionee } from './footer-top-link-actionee';
import { FooterPartnerLinkActionee } from './footer-partner-link-actionee';
import ID from './id';

class FooterActionee extends ComponentActionee {
  static get instanceClassName () {
    return 'FooterActionee';
  }

  get label () {
    return 'Pied de page';
  }

  get component () {
    return ID;
  }
}

export { FooterActionee };
