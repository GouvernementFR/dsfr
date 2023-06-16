import api from '../../../../api';
import { ConnectSelector } from './connect-selector';
import { ConnectActionee } from './connect-actionee';
import { ConnectLinkActionee } from './connect-link-actionee';

const integrateConnect = () => {
  api.internals.register(ConnectSelector.CONNECT, ConnectActionee);
  api.internals.register(ConnectSelector.LINK, ConnectLinkActionee);
};

export default integrateConnect;
