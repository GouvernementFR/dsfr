import normalize from '../normalize';
import { Member } from './member';
import { Type } from './type';

class Hierarchy {
  constructor (node) {
    this._node = node;
    this._process();
  }

  _process () {
    // console.log('_______________ start ____________________');
    const member = new Member(this._node, this._node, 6);
    // console.log('- FIRST MEMBER', member);
    this._level = member.level;
    this._members = [member];

    let node = this._node.parentNode;

    while (document.documentElement.contains(node) && node !== document.documentElement && this._level > 0) {
      // console.log('MEMBERS ARRAY', this._members);
      // console.log('NODE ANALYSIS', node);
      const member = new Member(node, this._node, this._level);
      // console.log('NEW MEMBER', member);
      switch (true) {
        case member.type === Type.UNDEFINED:
          // console.log('****UNDEFINED');
          break;

        case !member.isValid:
          // console.log('****INVALID');
          break;

        case member.label === this._members[0].label && member.type === Type.HEADING && this._members[0].type === Type.COMPONENT:
          // console.log('***** SAME');
          // do nothing
          break;

        case member.label === this._members[0].label && member.type === Type.COMPONENT && this._members[0].type === Type.HEADING:
          // console.log('***** SAME INVERT');
          this._members.splice(0, 1, member);
          break;

        default:
          this._members.unshift(member);
          if (member.level < this._level) this._level = member.level;
      }

      node = node.parentNode;
    }

    this._label = normalize(this._members[this._members.length - 1].label);
    this._title = normalize(this._members.filter(member => member.label).map(member => member.label).join(' › '));
    const components = this._members.filter(member => member.component).map(member => member.component);
    this._component = normalize(components.join(' › '));
    this._localComponent = components[components.length - 1];
    this._globalComponent = components[0];

    // console.log('========= end ===========');
  }

  get localComponent () {
    return this._localComponent;
  }

  get globalComponent () {
    return this._globalComponent;
  }

  get label () {
    return this._label;
  }

  get title () {
    return this._title;
  }

  get component () {
    return this._component;
  }
}

export { Hierarchy };
