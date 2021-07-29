import api from '../../api.js';
import { NavigationSelectors } from './navigation-selectors.js';

class NavigationItem extends api.core.Instance {
  constructor () {
    super();
    this._isRightAligned = false;
  }

  init () {
    this.addAscent(api.core.DisclosureEmissions.ADDED, this.calculate.bind(this));
    this.addAscent(api.core.DisclosureEmissions.REMOVED, this.calculate.bind(this));
    this.isResizing = true;
    this.calculate();
  }

  resize () {
    this.calculate();
  }

  calculate () {
    const collapse = this.element.getDescendantInstances(api.core.Collapse.name, null, true)[0];
    if (collapse && this.isBreakpoint(api.core.Breakpoints.LG) && collapse.element.node.matches(NavigationSelectors.MENU)) {
      const right = this.element.node.parentElement.getBoundingClientRect().right;
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
    if (value) api.addClass(this.element.node, NavigationSelectors.ITEM_RIGHT);
    else api.removeClass(this.element.node, NavigationSelectors.ITEM_RIGHT);
  }
}

export { NavigationItem };
