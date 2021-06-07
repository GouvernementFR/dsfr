import { Instance } from '../engine/register/instance';

class DisclosuresGroup extends Instance {
  constructor (disclosureInstanceClassName) {
    super();
    this.disclosureInstanceClassName = disclosureInstanceClassName;
  }

  init () {
    const members = this.members;
    let current = null;

    for (let i = 0; i < members.length; i++) {
      if (current) members[i].conceal(true, true);
      else if (members[i].disclosed) current = members[i];
    }
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

  get members () {
    return this.element.getDescendantInstances(this.disclosureInstanceClassName, this.constructor.name, true);
  }

  get length () { return this.members.length; }

  get index () {
    const members = this.members;
    for (let i = 0; i < members.length; i++) {
      if (members[i].disclosed) return i;
    }
    return -1;
  }

  set index (value) {
    const members = this.members;
    if (value < -1 || value >= members.length) return;
    for (let i = 0; i < members.length; i++) {
      if (members[i].disclosed && value !== i) members[i].conceal(true, true);
      if (!members[i].disclosed && value === i) members[i].disclose(true);
    }
    this.apply();
  }

  get current () {
    const members = this.members;
    for (let i = 0; i < members.length; i++) {
      if (members[i].disclosed) return members[i];
    }
    return null;
  }

  set current (member) {
    const members = this.members;
    for (let i = 0; i < members.length; i++) {
      if (members[i].disclosed && member !== members[i]) members[i].conceal(true, true);
      if (!members[i].disclosed && member === members[i]) members[i].disclose(true);
    }
    this.apply();
  }

  get hasFocus () {
    const current = this.current;
    if (current) return current.hasFocus;
    return false;
  }

  apply () {}
}

export { DisclosuresGroup };
