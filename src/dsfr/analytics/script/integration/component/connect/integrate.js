import api from '../../../../api';
import { ConnectSelector } from './connect-selector';
import { ConnectActionee } from './connect-actionee';
import { ConnectLinkActionee } from './connect-link-actionee';
import { joinSelector } from '../../join-selector';

const integrateConnect = (selector = '') => {
  api.internals.register(joinSelector(ConnectSelector.CONNECT, selector), ConnectActionee);
  api.internals.register(joinSelector(ConnectSelector.LINK, selector), ConnectLinkActionee);
};

export default integrateConnect;
