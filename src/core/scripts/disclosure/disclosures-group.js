import { Instance } from '../api/register/instance';
import { DisclosureEmissions } from './disclosure-emissions';

class DisclosuresGroup extends Instance {
  constructor (disclosureInstanceClassName) {
    super();
    this.disclosureInstanceClassName = disclosureInstanceClassName;
    this._index = -1;
  }

  init () {
    this.addAscent(DisclosureEmissions.ADDED, this.update.bind(this));
    this.addAscent(DisclosureEmissions.REMOVED, this.update.bind(this));
    this.descend(DisclosureEmissions.GROUP);
    this.update();
  }

  get proxy () {
    const scope = this;
    return {
      ...super.proxy,
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
      }
    };
  }

  validate (member) {
    return true;
  }

  getMembers () {
    const members = this.element.getDescendantInstances(this.disclosureInstanceClassName, this.constructor.name, true);
    this._members = members.filter(this.validate.bind(this));
  }

  update () {
    this.getMembers();
    this.getIndex();
  }

  get members () {
    return this._members;
  }

  get length () { return this.members.length; }

  getIndex () {
    this._index = -1;
    for (let i = 0; i < this.length; i++) {
      if (this.index > -1) this.members[i].conceal(true, true);
      else if (this.members[i].disclosed) {
        this.index = i;
      }
    }
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
        member.disclose(true);
      } else {
        member.conceal(true, true);
      }
    }
    this.apply();
  }

  get current () {
    return this._index === -1 ? null : this.members[this._index];
  }

  set current (member) {
    this.index = this.members.indexOf(member);
  }

  get hasFocus () {
    const current = this.current;
    if (current) return current.hasFocus;
    return false;
  }

  apply () {}

  dispose () {
    super.dispose();
    this.descend(DisclosureEmissions.UNGROUP);
    this._members = null;
  }
}

export { DisclosuresGroup };
