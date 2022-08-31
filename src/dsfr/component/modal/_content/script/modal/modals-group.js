import ref from '../../ref.js';
import { FocusTrap } from './focus-trap.js';

class ModalsGroup extends ref.action.DisclosuresGroup {
  constructor () {
    super('Modal', false);
    this.focusTrap = new FocusTrap();
  }

  static get instanceClassName () {
    return 'ModalsGroup';
  }

  apply (value, initial) {
    super.apply(value, initial);
    if (this.current === null) this.focusTrap.untrap();
    else this.focusTrap.trap(this.current.node);
  }
}

export { ModalsGroup };
