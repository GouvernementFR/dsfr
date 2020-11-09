import { Tab } from './tab';
import { Disclosure, DisclosuresGroup } from '@frds/utilities/src/scripts';

const PANEL = '.${prefix}-tabs__panel';

class TabsGroup extends DisclosuresGroup {
  constructor (wrapper) {
    super();
    this._index = -1;

    console.log('build');
    this.build(wrapper, PANEL, Disclosure.SELECT);

    if (this.current === null) this.index = 0;
  }

  disclosureFactory (element, type, selector) {
    return new Tab(element, type, selector);
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
