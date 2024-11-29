import api from '../../../../api';
import { SidemenuSelector } from './sidemenu-selector';
import { SidemenuActionee } from './sidemenu-actionee';
import { SidemenuLinkActionee } from './sidemenu-link-actionee';
import { SidemenuSectionActionee } from './sidemenu-section-actionee';
import { joinSelector } from '../../join-selector';

const integrateSidemenu = (selector) => {
  if (api.sidemenu) {
    api.internals.register(joinSelector(SidemenuSelector.SIDEMENU, selector), SidemenuActionee);
    api.internals.register(joinSelector(SidemenuSelector.LINK, selector), SidemenuLinkActionee);
    api.internals.register(joinSelector(api.sidemenu.SidemenuSelector.COLLAPSE, selector), SidemenuSectionActionee);
  }
};

export default integrateSidemenu;
