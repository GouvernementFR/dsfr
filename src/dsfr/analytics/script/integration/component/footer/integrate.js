import api from '../../../../api';
import { FooterSelector } from './footer-selector';
import { FooterActionee } from './footer-actionee';
import { FooterLinkActionee } from './footer-link-actionee';
import { joinSelector } from '../../join-selector';

const integrateFooter = (selector = '') => {
  api.internals.register(joinSelector(FooterSelector.FOOTER, selector), FooterActionee);
  api.internals.register(joinSelector(FooterSelector.FOOTER_LINKS, selector), FooterLinkActionee);
};

export default integrateFooter;
