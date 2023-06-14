import { Instance } from '../api/modules/register/instance.js';
import { DisclosureEmission } from './disclosure-emission.js';
import { completeAssign } from '../api/utilities/property/complete-assign.js';

class DisclosuresGroup extends Instance {
  constructor (disclosureInstanceClassName, jsAttribute) {
    super(jsAttribute);
    this.disclosureInstanceClassName = disclosureInstanceClassName;
    this._members = [];
    this._index = -1;
  }

  static get instanceClassName () {
    return 'DisclosuresGroup';
  }

  init () {
    this.addAscent(DisclosureEmission.ADDED, this.update.bind(this));
    this.addAscent(DisclosureEmission.RETRIEVE, this.retrieve.bind(this));
    this.addAscent(DisclosureEmission.REMOVED, this.update.bind(this));
    this.descend(DisclosureEmission.GROUP);
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
      }
    };

    return completeAssign(super.proxy, proxyAccessors);
  }

  validate (member) {
    return member.isEnabled;
  }

  getMembers () {
    const members = this.element.getDescendantInstances(this.disclosureInstanceClassName, this.constructor.instanceClassName, true);
    this._members = members.filter(this.validate.bind(this));
  }

  retrieve () {
    if (this._isRetrieving) return;
    this._isRetrieving = true;
    this.request(this._retrieve.bind(this));
  }

  _retrieve () {
    if (this.hash) {
      for (let i = 0; i < this.length - 1; i++) {
        console.log('loop', i, this.hash, this.members[i].id);
        if (this.hash === this.members[i].id) {
          console.log('group retrieve', i);
          this.index = i;
          return;
        }
      }
    }
  }

  update () {
    console.log('update');
    this.getMembers();
    this.getIndex();
  }

  get members () {
    return this._members;
  }

  get length () {
    return this.members ? this.members.length : 0;
  }

  retrieveCurrent () {

  }

  getIndex (defaultIndex = -1) {
    console.log('disclosure getIndex', this.index);
    this._index = undefined;
    let index = -1;
    for (let i = 0; i < this.length; i++) {
      if (index !== -1 && this.members[i].isDisclosed) index = i;
    }

    this.index = index > -1 ? index : defaultIndex;
  }

  get index () {
    return this._index;
  }

  set index (value) {
    console.log('set group index', value);
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
    console.log('set current', member.id);
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
    this.descend(DisclosureEmission.UNGROUP);
    this._members = null;
  }
}

export { DisclosuresGroup };
