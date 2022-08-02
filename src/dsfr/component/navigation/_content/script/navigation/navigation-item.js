import ref from '../../../ref.js';
import { NavigationSelector } from './navigation-selector.js';

class NavigationItem extends ref.api.Instance {
  constructor () {
    super();
    this._isRightAligned = false;
  }

  static get instanceClassName () {
    return 'NavigationItem';
  }

  init () {
    this.addAscent(ref.action.DisclosureEmission.ADDED, this.calculate.bind(this));
    this.addAscent(ref.action.DisclosureEmission.REMOVED, this.calculate.bind(this));
    this.isResizing = true;
    this.calculate();
  }

  resize () {
    this.calculate();
  }

  calculate () {
    const collapse = this.element.getDescendantInstances(ref.action.Collapse.instanceClassName, null, true)[0];
    if (collapse && this.isBreakpoint(ref.api.Breakpoints.LG) && collapse.element.node.matches(NavigationSelector.MENU)) {
      const right = this.element.node.parentElement.getBoundingClientRect().right; // todo: ne fonctionne que si la nav fait 100% du container
      const width = collapse.element.node.getBoundingClientRect().width;
      const left = this.element.node.getBoundingClientRect().left;
      this.isRightAligned = left + width > right;
    } else this.isRightAligned = false;
  }

  get isRightAligned () {
    return this._isRightAligned;
  }

  set isRightAligned (value) {
    if (this._isRightAligned === value) return;
    this._isRightAligned = value;
    if (value) ref.internals.dom.addClass(this.element.node, NavigationSelector.ITEM_RIGHT);
    else ref.internals.dom.removeClass(this.element.node, NavigationSelector.ITEM_RIGHT);
  }
}

export { NavigationItem };
