import { ComponentActionee } from '../component-actionee';
import api from '../../../../api';

class HeaderToolsButtonActionee extends ComponentActionee {
  constructor () {
    super(4);
  }

  static get instanceClassName () {
    return 'HeaderToolsButtonActionee';
  }

  init () {
    if (this.isBreakpoint(api.core.Breakpoints.LG)) this._priority = -1;
  }
}

export { HeaderToolsButtonActionee };
