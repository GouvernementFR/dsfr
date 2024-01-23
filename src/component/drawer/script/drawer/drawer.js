import api from '../../../api';
import { DrawerSelector } from './drawer-selector';

class Drawer extends api.core.Instance {
  static get instanceClassName () {
    return 'Drawer';
  }

  init () {
    this.isResizing = true;
    this._isDesktop = this.isBreakpoint(api.core.Breakpoints.LG);
    this.update();
  }

  resize () {
    this._isDesktop = this.isBreakpoint(api.core.Breakpoints.LG);
    this.update();
  }

  update () {
    const collapse = this.element.getDescendantInstances('Collapse', null, true)[0];
    if (this._collapse && this._collapse !== collapse) this._collapse.node.removeAttribute('method');
    this._collapse = collapse;

    const method = this._isDesktop && (this.hasClass(DrawerSelector.DRAWER_LEFT) || this.hasClass(DrawerSelector.DRAWER_RIGHT)) ? 'width' : 'height';

    if (this._collapse) this._collapse.node.setAttribute(api.core.CollapseSelector.METHOD, method);
  }

  mutate (attributeNames) {
    if (attributeNames.includes('class')) this.update();
  }
}

export { Drawer };
