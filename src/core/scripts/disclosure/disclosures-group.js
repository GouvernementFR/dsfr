import { Instance } from '../engine/register/instance';

class DisclosuresGroup extends Instance {
  constructor (DisclosureInstanceClass) {
    super();
    this.DisclosureInstanceClass = DisclosureInstanceClass;
  }

  /*

  static getGroupById (id) {
    for (const group of groups) if (group.constructor === this && group.id === id) return group;
    return new this(id);
  }

  static getGroupByElement (element) {
    for (const group of groups) if (group.element === element) return group;
    return new this(false, element);
  }

  static groupById (member, groupConstructor) {
    const id = member.element.getAttribute(GROUP_ATTR);
    if (id === null) return;

    const group = groupConstructor.getGroupById(id);
    group.add(member);
  }

  static groupByParent (member, GroupConstructor, groupSelector) {
    if (groupSelector === undefined) groupSelector = GroupConstructor.selector;
    if (groupSelector === '') return;
    let element = member.element.parentElement;

    while (element) {
      if (element.classList.contains(member.constructor.selector)) return;

      if (element.classList.contains(groupSelector)) {
        const group = GroupConstructor.getGroupByElement(element);
        group.add(member);
        return;
      }
      element = element.parentElement;
    }
  }

   */

  // static get selector () { return ''; }

  get members () {
    return this.element.getDescendantInstances(this.DisclosureInstanceClass, this.constructor.type);
  }

  add (member) {
    if (this.members.indexOf(member) !== -1) return;
    this.members.push(member);
    member.setGroup(this);

    switch (true) {
      case this.current !== null:
      case !member.disclosed && !(member.primary && member.primary.disclosed):
        member.disclosed = false;
        break;

      default:
        this._current = member;
        this._index = this.members.indexOf(member);
        member.disclosed = true;
    }
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
    if (current === undefined) return false;
    return current.hasFocus;
  }

  apply () {}
}

export { DisclosuresGroup };
