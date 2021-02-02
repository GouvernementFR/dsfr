import { DisclosuresGroup, FocusTrap } from '@gouvfr/core/src/scripts';

class ModalsGroup extends DisclosuresGroup {
  constructor () {
    super();
    this.trap = new FocusTrap();
  }

  apply (value, initial) {
    super.apply(value, initial);
    if (this.current === null) this.trap.untrap();
    else this.trap.trap(this.current.element);
  }
}

export { ModalsGroup };
