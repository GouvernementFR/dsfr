/* eslint no-labels: ["error", { "allowLoop": true }] */
import { Disclosure } from './disclosure';

const groups = [];

class DisclosuresGroup {
  constructor (id, element) {
    this.id = id;
    this.element = element;
    this.members = [];
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

  static groupByParent (member, GroupConstructor) {
    if (GroupConstructor.selector === '') return;
    let element = member.element.parentElement;

    while (element) {
      if (element.classList.contains(GroupConstructor.MemberConstructor.selector)) return;

      if (element.classList.contains(GroupConstructor.selector)) {
        const group = GroupConstructor.getGroupByElement(element);
        group.add(member);
        return;
      }
      element = element.parentElement;
    }
  }

  get length () { return this.members.length; }

  static get selector () { return ''; }

  static get MemberConstructor () { return Disclosure; }

  get type () { return this.constructor.MemberConstructor.type; }

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

  get current () { return this._current; }

  set current (member) {
    if (this._current !== null && this._current !== member) this._current.apply(false);
    this._current = member;
    if (this._current !== null) this._current.apply(true);
  }
}

export { DisclosuresGroup };
