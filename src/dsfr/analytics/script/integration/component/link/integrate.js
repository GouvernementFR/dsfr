import api from '../../../../api';
import { LinkSelector } from './link-selector';
import { LinkActionee } from './link-actionee';
import { joinSelector } from '../../join-selector';

const integrateLink = (selector = '') => {
  api.internals.register(joinSelector(LinkSelector.LINK, selector), LinkActionee);
};

export default integrateLink;
