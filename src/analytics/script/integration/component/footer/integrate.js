import api from '../../../../api';
import { FooterSelector } from './footer-selector';
import { FooterActionee } from './footer-actionee';
import { FooterLinkActionee } from './footer-link-actionee';

const integrateFooter = () => {
  api.internals.register(FooterSelector.FOOTER, FooterActionee);
  api.internals.register(FooterSelector.FOOTER_LINKS, FooterLinkActionee);
};

export default integrateFooter;
