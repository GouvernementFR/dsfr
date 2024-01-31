import { DisclosuresGroup } from '../disclosure/disclosures-group.js';
import { CollapseSelector } from './collapse-selector.js';
import { completeAssign } from '../api/utilities/property/complete-assign.js';

class CollapsesGroup extends DisclosuresGroup {
  constructor () {
    super('Collapse');
  }

  init () {
    super.init();
    this._isGrouped = this.getAttribute(CollapseSelector.GROUP) !== 'false';
  }

  get proxy () {
    const scope = this;

    const proxyAccessors = {
      set isGrouped (value) {
        scope.isGrouped = value;
      },
      get isGrouped () {
        return scope.isGrouped;
      }
    };

    return completeAssign(super.proxy, proxyAccessors);
  }

  static get instanceClassName () {
    return 'CollapsesGroup';
  }

  get isGrouped () {
    return super.isGrouped;
  }

  set isGrouped (value) {
    const isGrouped = !!value;
    if (this._isGrouped === isGrouped) return;
    this._isGrouped = isGrouped;
    this.setAttribute(CollapseSelector.GROUP, !!value);
    this.update();
  }

  get canUngroup () {
    return true;
  }

  mutate (attributesNames) {
    if (attributesNames.includes(CollapseSelector.GROUP)) {
      this.isGrouped = this.getAttribute(CollapseSelector.GROUP) !== 'false';
    }
  }
}

export { CollapsesGroup };
