import api from '../../../../api';
import { HeaderActionee } from './header-actionee';
import { HeaderModalActionee } from './header-modal-actionee';
import { HeaderSelector } from './header-selector';
import { HeaderToolsButtonActionee } from './header-tools-button-actionee';
import { HeaderMenuButtonActionee } from './header-menu-button-actionee';

const integrateHeader = () => {
  if (api.header) {
    api.internals.register(api.header.HeaderSelector.HEADER, HeaderActionee);
    api.internals.register(api.header.HeaderSelector.MODALS, HeaderModalActionee);
    api.internals.register(HeaderSelector.TOOLS_BUTTON, HeaderToolsButtonActionee);
    api.internals.register(HeaderSelector.MENU_BUTTON, HeaderMenuButtonActionee);
  }
};

export default integrateHeader;
