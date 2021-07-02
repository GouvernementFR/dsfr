import api from '../../api.js';
import { HeaderSelectors } from './header-selectors';

class Header extends api.core.Instance {
  init () {
    this.links = this.querySelector(HeaderSelectors.LINKS);
    this.toolsLinks = this.querySelector(HeaderSelectors.TOOLS_LINKS);
    this.menuLinks = this.querySelector(HeaderSelectors.MENU_LINKS);
    if (this.links) this.isResizing = true;
  }

  resize () {
    if (this.isBreakpoint(api.core.Breakpoints.LG)) {
      if (this.links && this.toolsLinks) this.toolsLinks.append(this.links);
    } else {
      if (this.links && this.menuLinks) this.menuLinks.append(this.links);
    }
  }
}

export { Header };
