/* eslint no-labels: ["error", { "allowLoop": true }] */
const groups = [];

class DisclosuresGroup {
  constructor (id, element) {
    this.id = id;
    this.element = element;
    this.members = [];
    this._index = -1;
    this._current = null;
    groups.push(this);
  }

  static getGroupById (id) {
    for (const group of groups) if (group.constructor === this && group.id === id) return group;
    return new this(id);
  }

  static getGroupByElement (element) {
    for (const group of groups) if (group.element === element) return group;
    return new this(false, element);
  }

  static groupById (member, groupConstructor) {
    const id = member.element.getAttribute('data-${prefix}-group');
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

  static get selector () { return ''; }

  add (member) {
    if (this.members.indexOf(member) !== -1) return;
    this.members.push(member);
    member.setGroup(this);

    switch (true) {
      case this.current !== null:
      case !member.disclosed:
        member.apply(false);
        break;

      default:
        this.current = member;
        member.apply(true);
    }
  }

  get length () { return this.members.length; }

  get index () { return this._index; }

  set index (value) {
    if (value < -1 || value >= this.length || this._index === value) return;
    if (this.current !== null) this.current.apply(false);
    this._index = value;
    this._current = this._index > -1 ? this.members[this._index] : null;
    if (this.current !== null) this.current.apply(true);
    this.apply();
  }

  get current () { return this._current; }

  set current (member) {
    this.index = this.members.indexOf(member);
  }

  apply () {}
}

export { DisclosuresGroup };
