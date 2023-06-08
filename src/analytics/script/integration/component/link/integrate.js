import api from '../../../../api';
import { LinkSelector } from './link-selector';
import { LinkActionee } from './link-actionee';

const integrateLink = () => {
  api.internals.register(LinkSelector.LINK, LinkActionee);
};

export default integrateLink;
