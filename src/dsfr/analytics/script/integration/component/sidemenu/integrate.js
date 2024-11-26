import api from '../../../../api';
import { SidemenuSelector } from './sidemenu-selector';
import { SidemenuActionee } from './sidemenu-actionee';
import { SidemenuLinkActionee } from './sidemenu-link-actionee';
import { SidemenuSectionActionee } from './sidemenu-section-actionee';

const integrateSidemenu = () => {
  if (api.sidemenu) {
    api.internals.register(SidemenuSelector.SIDEMENU, SidemenuActionee);
    api.internals.register(SidemenuSelector.LINK, SidemenuLinkActionee);
    api.internals.register(api.sidemenu.SidemenuSelector.COLLAPSE, SidemenuSectionActionee);
  }
};

export default integrateSidemenu;
