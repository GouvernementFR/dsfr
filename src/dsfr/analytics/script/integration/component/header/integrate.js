import api from '../../../../api';
import { HeaderActionee } from './header-actionee';
import { HeaderModalActionee } from './header-modal-actionee';
import { HeaderSelector } from './header-selector';
import { HeaderToolsButtonActionee } from './header-tools-button-actionee';
import { HeaderMenuButtonActionee } from './header-menu-button-actionee';
import { joinSelector } from '../../join-selector';

const integrateHeader = (selector = '') => {
  if (api.header) {
    api.internals.register(joinSelector(api.header.HeaderSelector.HEADER, selector), HeaderActionee);
    api.internals.register(joinSelector(api.header.HeaderSelector.MODALS, selector), HeaderModalActionee);
    api.internals.register(joinSelector(HeaderSelector.TOOLS_BUTTON, selector), HeaderToolsButtonActionee);
    api.internals.register(joinSelector(HeaderSelector.MENU_BUTTON, selector), HeaderMenuButtonActionee);
  }
};

export default integrateHeader;
