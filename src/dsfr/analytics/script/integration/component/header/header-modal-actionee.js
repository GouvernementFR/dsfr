import api from '../../../../api.js';
import { ComponentActionee } from '../component-actionee';
import { HeaderModalButtonActionee } from './header-modal-button-actionee';

class HeaderModalActionee extends ComponentActionee {
  constructor () {
    super(0);
  }

  static get instanceClassName () {
    return 'HeaderModalActionee';
  }

  init () {
    if (this.isBreakpoint(api.core.Breakpoints.LG)) {
      this.setPriority(4);
      this.register(`[aria-controls="${this.id}"]`, HeaderModalButtonActionee);
    }
  }
}

export { HeaderModalActionee };
