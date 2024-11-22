import { Instance } from '../api/modules/register/instance.js';
import { DisclosureEvent } from './disclosure-event.js';
import { DisclosureEmission } from './disclosure-emission.js';
import { completeAssign } from '../api/utilities/property/complete-assign.js';
import { DisclosureSelector } from './disclosure-selector.js';

class DisclosuresGroup extends Instance {
  constructor (disclosureInstanceClassName, jsAttribute) {
    super(jsAttribute);
    this.disclosureInstanceClassName = disclosureInstanceClassName;
    this._members = [];
    this._index = -1;
    this._isRetrieving = false;
    this._hasRetrieved = false;
    this._isGrouped = true;
  }

  static get instanceClassName () {
    return 'DisclosuresGroup';
  }

  init () {
    this.addAscent(DisclosureEmission.ADDED, this.update.bind(this));
    this.addAscent(DisclosureEmission.RETRIEVE, this.retrieve.bind(this));
    this.addAscent(DisclosureEmission.REMOVED, this.update.bind(this));
    this.descend(DisclosureEmission.GROUP);
    this._isGrouped = this.getAttribute(DisclosureSelector.GROUP) !== 'false';
    this.update();
  }

  get proxy () {
    const scope = this;

    const proxyAccessors = {
      set index (value) {
        scope.index = value;
      },
      get index () {
        return scope.index;
      },
      get length () {
        return scope.length;
      },
      get current () {
        const current = scope.current;
        return current ? current.proxy : null;
      },
      get members () {
        return scope.members.map((member) => member.proxy);
      },
      get hasFocus () {
        return scope.hasFocus;
      },
      set isGrouped (value) {
        scope.isGrouped = value;
      },
      get isGrouped () {
        return scope.isGrouped;
      }
    };

    return completeAssign(super.proxy, proxyAccessors);
  }

  validate (member) {
    return true;
  }

  getMembers () {
    const members = this.element.getDescendantInstances(this.disclosureInstanceClassName, this.constructor.instanceClassName, true);
    this._members = members.filter(this.validate.bind(this)).filter(member => member.isEnabled);
    const invalids = members.filter(member => !this._members.includes(member));
    invalids.forEach(invalid => invalid.conceal());
  }

  retrieve (bypassPrevention = false) {
    if (this._isRetrieving || (this._hasRetrieved && !bypassPrevention)) return;
    this._isRetrieving = true;
    this.request(this._retrieve.bind(this));
  }

  _retrieve () {
    this.getMembers();
    this._isRetrieving = false;
    this._hasRetrieved = true;

    if (!this.isGrouped) {
      for (let i = 0; i < this.length; i++) {
        const member = this.members[i];
        if (member.isInitiallyDisclosed) {
          member.disclose(true);
        }
      }
      return;
    }

    if (this.hash) {
      for (let i = 0; i < this.length; i++) {
        const member = this.members[i];
        if (this.hash === member.id) {
          this.index = i;
          this.request(() => { this.ascend(DisclosureEmission.SPOTLIGHT); });
          return i;
        }
      }
    }

    for (let i = 0; i < this.length; i++) {
      const member = this.members[i];
      if (member.isInitiallyDisclosed) {
        this.index = i;
        return i;
      }
    }

    return this.getIndex();
  }

  update () {
    this.getMembers();
    if (this._hasRetrieved) {
      if (this.isGrouped) this.getIndex();
    }
  }

  get members () {
    return this._members;
  }

  get length () {
    return this.members ? this.members.length : 0;
  }

  getIndex (defaultIndex = -1) {
    this._index = undefined;
    let index = defaultIndex;
    for (let i = 0; i < this.length; i++) {
      if (this.members[i].isDisclosed) {
        index = i;
        break;
      }
    }

    this.index = index;
    return index;
  }

  get index () {
    return this._index;
  }

  set index (value) {
    if (value < -1 || value >= this.length || value === this._index) return;
    this._index = value;
    for (let i = 0; i < this.length; i++) {
      const member = this.members[i];
      if (value === i) {
        if (!member.isDisclosed) member.disclose(true);
      } else {
        if ((this.isGrouped || !this.canUngroup) && member.isDisclosed !== false) member.conceal(true);
      }
    }
    this.apply();
    this.dispatch(DisclosureEvent.CURRENT, this.current);
  }

  get current () {
    if (this._index === -1 || isNaN(this._index)) return null;
    return this._members[this._index] || null;
  }

  set current (member) {
    this.index = this.members.indexOf(member);
  }

  get hasFocus () {
    const current = this.current;
    if (current) return current.hasFocus;
    return false;
  }

  set isGrouped (value) {
    const isGrouped = !!value;
    if (this._isGrouped === isGrouped) return;
    this._isGrouped = isGrouped;
    this.setAttribute(DisclosureSelector.GROUP, !!value);
    this.update();
  }

  get isGrouped () {
    return this._isGrouped;
  }

  get canUngroup () {
    return false;
  }

  mutate (attributesNames) {
    if (attributesNames.includes(DisclosureSelector.GROUP)) {
      this.isGrouped = this.getAttribute(DisclosureSelector.GROUP) !== 'false';
    }
  }

  apply () {}

  dispose () {
    super.dispose();
    this.descend(DisclosureEmission.UNGROUP);
    this._members = null;
  }
}

export { DisclosuresGroup };
