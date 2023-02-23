import { ComponentActionee } from '../component-actionee';
import { FooterSelector } from './footer-selector';
import { FooterContentLinkActionee } from './footer-content-link-actionee';
import { FooterBottomLinkActionee } from './footer-bottom-link-actionee';
import { FooterTopLinkActionee } from './footer-top-link-actionee';
import { FooterPartnerLinkActionee } from './footer-partner-link-actionee';
import ID from './id';

class FooterActionee extends ComponentActionee {
  static get instanceClassName () {
    return 'FooterActionee';
  }

  init () {
    console.log('FOOTER');
    this.register(FooterSelector.TOP_LINK, FooterTopLinkActionee);
    this.register(FooterSelector.CONTENT_LINK, FooterContentLinkActionee);
    this.register(FooterSelector.PARTNER_LINK, FooterPartnerLinkActionee);
    this.register(FooterSelector.BOTTOM_LINK, FooterBottomLinkActionee);
  }

  get label () {
    return 'Pied de page';
  }

  get component () {
    return ID;
  }
}

export { FooterActionee };
