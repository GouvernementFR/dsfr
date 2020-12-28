/* eslint no-labels: ["error", { "allowLoop": true }] */
import { Disclosure } from './disclosure';

let count = 10e+12;
const groups = {};

class DisclosuresGroup {
  constructor (id) {
    this.members = [];
    this._current = null;
    groups[this.constructor.getGroupId(id)] = this;
  }

  static getGroupId (id) {
    console.log(constructor);
    return `[${this.MemberConstructor.selector}]${id || (count++).toString(36)}`;
  }

  static getGroup (id) {
    return groups[this.getGroupId(id)] || new this(id);
  }

  static group (member, groupConstructor) {
    const id = member.element.getAttribute('data-group');
    const group = groupConstructor.getGroup(id);
    group.add(member);
  }

  get length () { return this.members.length; }

  build (wrapper) {
    this.wrapper = wrapper;
    console.log(this.constructor);
    const elements = [...wrapper.querySelectorAll(this.constructor.MemberConstructor.selector)];

    let member;

    for (const element of elements) {
      if (elements.some((other) => element !== other && other.contains(element))) continue;

      member = new this.constructor.MemberConstructor(element);
      this.add(member);
    }
  }

  static get MemberConstructor () { return Disclosure; }

  get type () { return this.constructor.MemberConstructor.type; }

  add (member) {
    this.members.push(member);
    member.setGroup(this);

    console.log('group add', this.current, member.disclosed, !member.disclosed);

    switch (true) {
      case this.current !== null:
      case !member.disclosed:
        console.log('not current');
        member.apply(false);
        break;

      default:
        this.current = member;
        console.log('current');
        member.apply(true);
    }
  }

  get current () { return this._current; }

  set current (member) {
    if (this._current !== null && this._current !== member) this._current.apply(false);
    this._current = member;
    if (this._current !== null) this._current.apply(true);
  }

  conceal () {
    // close children
  }
}

export { DisclosuresGroup };
