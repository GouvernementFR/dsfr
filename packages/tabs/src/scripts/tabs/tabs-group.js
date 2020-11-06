import { AriaControllerGroup } from '@frds/utilities/src/scripts/';
import { PANEL } from './tabs-constants';
import { TabController } from './tab-controlller';

class TabsGroup extends AriaControllerGroup {
  constructor (wrapper) {
    super();
    this._index = -1;
    this.wrapper = wrapper;
    const panels = wrapper.querySelectorAll('.' + PANEL);

    let controller;
    for (let i = 0; i < panels.length; i++) {
      controller = new TabController(panels[i]);
      this.add(controller);
    }

    if (this.current === null) this.index = 0;
  }

  get index () { return this._index; }

  set index (value) {
    if (value < 0 || value >= this.controllers.length || this._index === value) return;
    this._index = value;
    this.current = this.controllers[value];
  }

  get current () { return super.current; }

  set current (controller) {
    super.current = controller;
    this._index = this.controllers.indexOf(controller);
  }
}

export { TabsGroup };
